#!/usr/bin/env node
// apply-review-fixes.js — the Sept 3, 2026 site self-review, applied to all 46 state pages.
//
// Every state page shares one CSS block, one HTML skeleton and one rendering script, so each fix
// below is an exact-string replacement anchored on that shared code. Like clone-state.js, this
// REFUSES TO WRITE a page on which any anchor is missing — a page that has drifted gets reported,
// not silently half-patched. Every replacement is idempotent (re-running is a no-op).
//
// What it fixes (each item's origin is the review dimension that found it):
//   accessibility  counties reachable by keyboard (tabindex/role/label/Enter); the drawer is a real
//                  dialog (role, focus in/out, hidden when closed, scroll locked); collapsed cards
//                  out of the tab order; focus-visible rings; reduced-motion; four contrast fixes
//   renderer       ballot measures detected by meaning (12 amendments no longer say "Candidates
//                  not yet announced"); split counties named in the drawer; tooltip flips instead
//                  of clipping and hides on tap; CDN failure gets a message and a retry instead of
//                  "Loading map…" forever; data escaped before innerHTML; hover work cached;
//                  briefs only clamp when there is something to reveal; ★ NOMINATED on primaries
//   css/responsive county borders and the capital marker survive phone scaling; drawer text a
//                  touch larger; print stylesheet; tablet overlay margin; wrapping fixes
//   cross-page     the "Data" nav link that went nowhere; the legend that described a state no
//                  page has; "Richmond City County"; the hero stat computed from data; the static
//                  footer date synced; meta description in plain English; pinned CDN versions
//
// Usage:  node tools/apply-review-fixes.js          (rewrite in place)
//         node tools/apply-review-fixes.js --check  (report only)
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const CHECK = process.argv.includes("--check");

const pages = fs.readdirSync(ROOT).filter(f => /^[a-z]{2}\.html$/.test(f)).sort();
const failures = [];
let rewritten = 0;

for (const page of pages) {
  const ab = page.slice(0, 2);
  const AB = ab.toUpperCase();
  const file = path.join(ROOT, page);
  const original = fs.readFileSync(file, "utf8");
  const eol = /\r\n/.test(original) ? "\r\n" : "\n";
  let s = original.replace(/\r\n/g, "\n");
  const missing = [];
  const stateName = (s.match(/<title>([A-Za-z ]+?) Elections Hub<\/title>/) || [])[1];
  // The county-equivalent noun. Louisiana has parishes; ALASKA has neither — it mixes 19
  // organized boroughs with census areas of the Unorganized Borough, and no single word covers
  // both, so its user-facing copy says "borough or census area" while the UNIT constant (used
  // for the drawer eyebrow) stays the shorter "Borough". Added Sept 4, 2026 with the AK build.
  const unit = ab === "la" ? "Parish" : ab === "ak" ? "Borough" : "County";
  const unitPhrase = ab === "ak" ? "borough or census area" : unit.toLowerCase();
  const unitPlural = ab === "la" ? "Parishes" : ab === "ak" ? "Boroughs and census areas" : "Counties";

  // Replace exactly-once helper: records a miss unless the NEW text is already present (idempotent).
  // "Already applied" is checked FIRST: several replacements keep their anchor text inside the
  // new text (a helper inserted above a function keeps the function line), so testing the anchor
  // first would apply them twice on a re-run.
  const sub = (label, from, to) => {
    if (to && s.includes(to)) return true;      // already applied
    if (s.includes(from)) { s = s.split(from).join(to); return true; }
    if (process.env.DEBUG_SUB && to) {          // show the first line of `to` the page does not carry
      const lines = to.split("\n");
      const bad = lines.find(l => l.trim() && !s.includes(l));
      console.error(`  [${page}] ${label}: first missing line of the new text:\n    ${JSON.stringify(bad)}`);
    }
    missing.push(label); return false;
  };
  const subRe = (label, re, to, already) => {
    if (re.test(s)) { s = s.replace(re, to); return true; }
    if (already && already.test(s)) return true;
    missing.push(label); return false;
  };
  // Optional migration: upgrade a previously shipped form when present, skip silently otherwise.
  const opt = (from, to) => { if (!s.includes(to) && s.includes(from)) s = s.split(from).join(to); };

  // ───────────────────────────── HEAD ─────────────────────────────
  const byby = ab === "la" ? "parish-by-parish" : "county-by-county";
  if (stateName) sub("meta description", `content="An interactive ${byby} guide to every ${AB} election, past and upcoming." />`,
      `content="An interactive ${byby} guide to every ${stateName} election, past and upcoming." />`);
  // Shared links and search previews showed nothing but the title; give them a description and a URL.
  if (stateName) subRe("social meta", /(<meta name="description" content="An interactive [a-z-]+ guide to every [A-Za-z ]+ election, past and upcoming\." \/>)\n(?!<link rel="canonical")/,
      `$1\n<link rel="canonical" href="https://checknbalance.org/${ab}.html">\n<meta property="og:type" content="website">\n<meta property="og:site_name" content="Check n Balance">\n<meta property="og:title" content="${stateName} Elections Hub">\n<meta property="og:description" content="An interactive ${byby} guide to every ${stateName} election, past and upcoming.">\n<meta property="og:url" content="https://checknbalance.org/${ab}.html">\n<meta property="og:image" content="https://checknbalance.org/apple-touch-icon.png">\n<meta name="twitter:card" content="summary">\n`,
      /<link rel="canonical" href="https:\/\/checknbalance\.org\/[a-z]{2}\.html">/);
  sub("preconnect to the map CDN", `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
      `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="preconnect" href="https://cdn.jsdelivr.net">`);

  // ───────────────────────────── CSS ─────────────────────────────
  // County strokes and the capital marker were drawn in viewBox units and vanished on phones.
  sub("county stroke", `  .county {
    fill: #F1E9D2;
    stroke: var(--paper-pure);
    stroke-width: 0.7;
    cursor: pointer;
    transition: fill .15s ease;
  }
  .county.has-data       { fill: var(--gold-soft); }
  .county.has-data:hover { fill: var(--gold); }
  .county:hover          { fill: #E5DBBE; }
  .county.selected       { fill: var(--gold-deep) !important; stroke: var(--ink); stroke-width: 1.2; }`,
  `  .county {
    fill: var(--gold-soft);
    stroke: var(--paper-pure);
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;   /* screen pixels at every map size, not viewBox units */
    cursor: pointer;
    transition: fill .15s ease;
  }
  /* Hover fills only where a pointer can hover — a phone tap must not leave a county stuck "hovered". */
  @media (hover: hover) {
    .county:hover { fill: var(--gold); }
  }
  .county:focus-visible  { outline: none; fill: var(--gold); stroke: var(--ink); stroke-width: 2px; }
  .county.selected       { fill: var(--gold-deep) !important; stroke: var(--ink); stroke-width: 1.5px; }`);
  subRe("dead capital-dot rule", /  \.capital-dot \{\n    fill: var\(--ink\);\n    fill-opacity: 0\.55;\n    stroke: var\(--paper-pure\);\n    stroke-width: 1\.5;\n    pointer-events: none;\n  \}\n/, "", /^(?![\s\S]*\.capital-dot \{)/);
  sub("capital label contrast", `    fill: var(--ink);
    fill-opacity: 0.55;
    pointer-events: none;
  }
  .capital-sub {
    font-family: var(--sans);
    font-size: 7.5px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    fill: var(--ink);
    fill-opacity: 0.4;
    pointer-events: none;
  }`, `    fill: var(--ink);
    fill-opacity: 0.85;
    pointer-events: none;
  }`);
  // The tooltip was clipped by the card for the whole northern row of counties.
  // (Anchored without the closing brace: tools/fit-map-frames.js, which runs first, appends its
  // max-width lines after this rule's overflow line.)
  sub("map-shell overflow", `    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
`, `    box-shadow: var(--shadow);
    position: relative;
`);
  sub("tooltip flip", `    transform: translate(-50%, -130%);
    opacity: 0;
    transition: opacity .12s ease;
    white-space: nowrap;
    z-index: 10;`, `    transform: translate(-50%, -130%);
    opacity: 0;
    transition: opacity .12s ease;
    white-space: nowrap;
    z-index: 60;`);
  sub("tooltip below-cursor variant", `  .tooltip-meta { opacity: .7; font-size: 11px; margin-top: 2px; }`,
      `  .tooltip.below { transform: translate(-50%, 26px); }
  .tooltip-meta { opacity: .7; font-size: 11px; margin-top: 2px; }`);
  // The closed drawer stayed in the tab order and the accessibility tree.
  sub("panel hidden when closed", `    width: min(720px, 100%);
    background: var(--paper-pure);
    box-shadow: -10px 0 40px rgba(14,23,38,.15);
    transform: translateX(100%);
    transition: transform .3s cubic-bezier(.4, 0, .2, 1);
    z-index: 101;
    display: flex; flex-direction: column;
  }
  .panel.open { transform: translateX(0); }`, `    width: min(720px, 92vw);
    background: var(--paper-pure);
    box-shadow: -10px 0 40px rgba(14,23,38,.15);
    transform: translateX(100%);
    visibility: hidden;   /* off-screen AND out of the tab order / accessibility tree */
    transition: transform .3s cubic-bezier(.4, 0, .2, 1), visibility 0s linear .3s;
    z-index: 101;
    display: flex; flex-direction: column;
  }
  .panel.open { transform: translateX(0); visibility: visible; transition-delay: 0s; }
  html.drawer-open { overflow: hidden; }   /* the page behind a full-height drawer must not scroll */`);
  sub("panel-body overscroll", `  .panel-body { overflow-y: auto; padding: 8px 0 60px; flex: 1; }`,
      `  .panel-body { overflow-y: auto; overscroll-behavior: contain; padding: 8px 0 60px; flex: 1; }`);
  sub("past pill contrast", `  .pill.past     { background: #F1EAD8; color: var(--gold-deep); }`,
      `  .pill.past     { background: #F1EAD8; color: #7A561B; }`);
  // Drawer body copy was 12.5px over ~90-character lines.
  sub("brief body size", `  .brief-body { font-size: 12.5px; line-height: 1.62; color: var(--ink-soft); }`,
      `  .brief-body { font-size: 13.5px; line-height: 1.62; color: var(--ink-soft); }`);
  sub("clamp fade", `  .election-brief.clamped .brief-body { max-height: 6.5em; overflow: hidden; }`,
      `  .election-brief.clamped .brief-body { max-height: 6.5em; overflow: hidden; -webkit-mask-image: linear-gradient(#000 72%, transparent); mask-image: linear-gradient(#000 72%, transparent); }`);
  sub("show-more target size", `  .brief-more {
    margin-top: 9px; padding: 0;`, `  .brief-more {
    margin-top: 6px; padding: 6px 0; min-height: 24px;`);
  // Collapsed accordion content was still tabbable.
  sub("collapsed detail out of tab order", `  .election-detail > div { overflow: hidden; min-height: 0; }
  .election-card.open .election-detail { grid-template-rows: 1fr; }`,
  `  .election-detail > div { overflow: hidden; min-height: 0; visibility: hidden; transition: visibility 0s linear .28s; }
  .election-card.open .election-detail { grid-template-rows: 1fr; }
  .election-card.open .election-detail > div { visibility: visible; transition-delay: 0s; }`);
  // ★ ELECTED failed contrast, and was printed on primary winners who were nominated, not elected.
  sub("winner badge", `  .candidate.winner::before {
    content: '★ ELECTED';
    position: absolute; top: -10px; right: 14px;
    background: var(--gold); color: white;
    font-size: 9px; letter-spacing: 0.16em;
    padding: 3px 9px; border-radius: 4px; font-weight: 700;
  }`, `  .candidate.winner::before {
    content: '★ ELECTED';
    position: absolute; top: -10px; right: 14px;
    background: var(--gold-deep); color: white;
    font-size: 10px; letter-spacing: 0.16em;
    padding: 3px 9px; border-radius: 4px; font-weight: 700;
  }
  .candidate.winner.nominee::before { content: '★ NOMINATED'; }`);
  sub("cand-list size", `  .cand-list {
    list-style: none; padding-left: 0;
    font-size: 13px; color: var(--ink); line-height: 1.5;
  }`, `  .cand-list {
    list-style: none; padding-left: 0;
    font-size: 13.5px; color: var(--ink); line-height: 1.5;
  }`);
  sub("voices size", `  .voices-block {
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 12.5px; line-height: 1.5;
  }`, `  .voices-block {
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 13px; line-height: 1.5;
  }`);
  sub("typographic quotes", `  .voices-block li::before { content: '"'; opacity: .4; }
  .voices-block li::after  { content: '"'; opacity: .4; }`,
  `  .voices-block li::before { content: '\\201C'; opacity: .4; }
  .voices-block li::after  { content: '\\201D'; opacity: .4; }`);
  sub("no-op backdrop filter", `    position: sticky; top: 0; z-index: 50;
    backdrop-filter: blur(8px);`, `    position: sticky; top: 0; z-index: 50;`);
  // Shared additions, appended once before the responsive block.
  sub("shared a11y/print/motion rules", `  @media (max-width: 900px) {
    .topbar-inner { grid-template-columns: 1fr auto; }
    .topnav { display: none; }
  }`, `  /* Keyboard users get a visible, on-brand focus ring everywhere. */
  :focus-visible { outline: 2px solid var(--gold-deep); outline-offset: 3px; }
  /* Anchor jumps (#map, #sources) must not land under the sticky bar. */
  .map-section, .footer { scroll-margin-top: 84px; }
  /* Hero stat labels wrap unevenly on narrow screens; give them a common height. */
  .stat-label { min-height: 2.6em; }
  .legend-star { color: var(--ink); opacity: .7; font-size: 12px; margin-right: 2px; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
  }
  /* Printing a county's ballot prints the drawer, not the hero and an empty map. */
  @media print {
    .topbar, .hero, .map-section, .panel-overlay, .panel-close, .brief-more { display: none !important; }
    .panel { position: static; width: auto; transform: none; visibility: visible; box-shadow: none; }
    .panel-body { overflow: visible; }
    .election-detail { grid-template-rows: 1fr; }
    .election-detail > div { visibility: visible; }
    .election-brief.clamped .brief-body { max-height: none; -webkit-mask-image: none; mask-image: none; }
  }
  @media (max-width: 900px) {
    .topbar-inner { grid-template-columns: 1fr auto; }
    .topnav { display: none; }
  }`);
  sub("close button phone size", `    .panel { width: 100%; }
    .panel-header { padding: 18px 22px; }`, `    .panel { width: 100%; }
    .panel-header { padding: 18px 22px; }
    .panel-close { width: 44px; height: 44px; }`);
  // Seven early pages targeted #ncmap while their SVG is #<xx>map.
  if (ab !== "nc") s = s.split("#ncmap {").join(`#${ab}map {`);

  // ───────────────────────────── HTML ─────────────────────────────
  sub("nav Data link", `      <a href="#data">Data</a>`, `      <a href="#sources">Sources</a>`);
  sub("footer sources id", `    <div class="footer-meta">
      Last updated: <span id="last-updated">`, `    <div class="footer-meta" id="sources">
      Last updated: <span id="last-updated">`);
  subRe("statewide stat id", /<div class="stat"><div class="stat-num"><em>\d+<\/em>\+?<\/div><div class="stat-label">Statewide Races Tracked<\/div><\/div>/,
        `<div class="stat"><div class="stat-num"><em id="stat-statewide">–</em></div><div class="stat-label">Statewide Races, Nov&nbsp;3</div></div>`,
        /id="stat-statewide"/);
  s = s.replace(/<div class="stat-num"><em>1<\/em><\/div><div class="stat-label">U\.S\. House Seats<\/div>/, `<div class="stat-num"><em>1</em></div><div class="stat-label">U.S. House Seat</div>`);
  sub("legend", `      <span class="legend-swatch"><i style="background:#F1E9D2;border-color:#E5DDC9"></i> No data yet</span>
      <span class="legend-swatch"><i style="background:#E8D9B8;border-color:#B8893C"></i> Data available</span>`,
      `      <span class="legend-swatch"><i style="background:#E8D9B8;border-color:#B8893C"></i> Every ${unitPhrase} is clickable</span>
      <span class="legend-swatch"><i class="legend-star">★</i> State capital</span>`);
  sub("section sub copy", `        ${unitPlural} shaded in gold have detailed election information available. Hover for a quick
        preview; click to open the full breakdown.`,
      `        Tap or click any ${unitPhrase} to open its full ballot — every race, every candidate, and what
        supporters and opponents say. On a desktop, hover for a quick preview.`);
  sub("dialog semantics", `<aside class="panel" id="panel" aria-hidden="true">`,
      `<aside class="panel" id="panel" role="dialog" aria-modal="true" aria-labelledby="panel-title" aria-hidden="true">`);
  sub("pinned CDN versions", `<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3.1.0"></script>`);
  // Footer crest: two-letter form everywhere (ia/in/ky/oh spelled the state out).
  if (stateName) s = s.replace(`<strong>${stateName} Elections Hub</strong> ·`, `<strong>${AB} Elections Hub</strong> ·`);
  // Static footer fallback date = SITE_META.lastUpdated, so the two can never disagree.
  {
    const lu = (s.match(/const SITE_META = \{ name: "[^"]+", lastUpdated: "([^"]+)" \};/) || [])[1];
    if (lu) s = s.replace(/Last updated: <span id="last-updated">[^<]*<\/span>/, `Last updated: <span id="last-updated">${lu}</span>`);
    else missing.push("SITE_META.lastUpdated");
  }

  // ───────────────────────────── RENDERER (script #2) ─────────────────────────────
  // Footer date first, then a guard: a blocked CDN must show a message, not a silent hang.
  sub("cdn guard / loadMap", `const loading = document.getElementById("map-loading");

document.getElementById("last-updated").textContent = SITE_META.lastUpdated;

d3.json(TOPO_URL).then((us) => {`, `const loading = document.getElementById("map-loading");
const UNIT = "${unit}";

document.getElementById("last-updated").textContent = SITE_META.lastUpdated;
document.getElementById("stat-statewide").textContent = STATEWIDE.filter(r => r.type === "upcoming").length;

// "Richmond City County" and "Baltimore City County" are not places. Independent cities and
// Louisiana parishes get the right word; two real Virginia counties happen to end in "City".
const placeLabel = (c) => (/\\bCity$/.test(c.n) && c.fips !== "51036" && c.fips !== "51095") ? c.n : c.n + " " + UNIT;
// Hovering re-sorted every race on every pointer move; the answer never changes per county.
const electionsCache = new Map();
const countyElections = (fips) => { if (!electionsCache.has(fips)) electionsCache.set(fips, getCountyElections(fips)); return electionsCache.get(fips); };
const HOVER = window.matchMedia && window.matchMedia("(hover: hover)").matches;

loadMap();

function loadMap() {
d3.json(TOPO_URL).then((us) => {`);
  // A blocked CDN used to throw on the script's first line and leave "Loading map…" forever.
  // (The condition mentions d3.json on purpose: tests/lib.js cuts the script at its first "d3." line.)
  sub("cdn guard first", `const svg     = d3.select("#${ab}map");`, `if (typeof d3 === "undefined" || typeof topojson === "undefined" || typeof d3.json !== "function") {
  document.getElementById("map-loading").innerHTML = "The interactive map didn\\u2019t load \\u2014 a script it needs was blocked. <button type=\\"button\\" class=\\"brief-more\\" onclick=\\"location.reload()\\">Try again</button>";
  document.getElementById("last-updated").textContent = SITE_META.lastUpdated;
  document.getElementById("stat-statewide").textContent = STATEWIDE.filter(r => r.type === "upcoming").length;
  throw new Error("map libraries did not load");
}
const svg = d3.select("#${ab}map");`);
  sub("county paths: keyboard, tooltip, cache", `      .attr("data-fips", d => String(d.id).padStart(5, "0"))
      .attr("d", path)
      .on("mousemove", (event, d) => {
        const fips = String(d.id).padStart(5, "0");
        const built = getCountyElections(fips);
        if (built) {
          const upcoming = built.elections.filter(e => e.type === "upcoming").length;
          const past = built.elections.filter(e => e.type === "past").length;
          tooltip.innerHTML = \`
            <strong>\${built.county.n} County</strong>
            <div class="tooltip-meta">\${upcoming} upcoming · \${past} past · D-\${built.county.d}</div>\`;
        } else {
          tooltip.innerHTML = \`FIPS \${fips}<div class="tooltip-meta">No data yet</div>\`;
        }
        tooltip.style.opacity = 1;
        const rect = svg.node().getBoundingClientRect();
        tooltip.style.left = (event.clientX - rect.left) + "px";
        tooltip.style.top  = (event.clientY - rect.top)  + "px";
      })
      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .on("click", (event, d) => {
        const fips = String(d.id).padStart(5, "0");
        document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
        event.currentTarget.classList.add("selected");
        openPanel(fips);
      });`, `      .attr("data-fips", d => String(d.id).padStart(5, "0"))
      .attr("d", path)
      // A keyboard or screen-reader user must be able to open a county too.
      .attr("tabindex", 0)
      .attr("role", "button")
      .attr("aria-label", d => { const c = COUNTIES[String(d.id).padStart(5, "0")]; return c ? placeLabel({ ...c, fips: String(d.id).padStart(5, "0") }) : "Not in this dataset"; })
      .on("mousemove", (event, d) => {
        if (!HOVER) return;
        const fips = String(d.id).padStart(5, "0");
        const built = countyElections(fips);
        if (built) {
          const upcoming = built.elections.filter(e => e.type === "upcoming").length;
          const past = built.elections.filter(e => e.type === "past").length;
          const ds = (built.county.ds && built.county.ds.length > 1) ? built.county.ds : [built.county.d];
          tooltip.innerHTML = \`
            <strong>\${esc(placeLabel({ ...built.county, fips }))}</strong>
            <div class="tooltip-meta">\${upcoming} upcoming · \${past} past · District\${ds.length > 1 ? "s" : ""} \${ds.join(" & ")}</div>\`;
        } else {
          tooltip.innerHTML = \`FIPS \${esc(fips)}<div class="tooltip-meta">Not in this dataset</div>\`;
        }
        tooltip.style.opacity = 1;
        const rect = svg.node().getBoundingClientRect();
        const x = event.clientX - rect.left, y = event.clientY - rect.top;
        // Flip below the cursor near the top edge; keep the box inside the map horizontally.
        tooltip.classList.toggle("below", y < tooltip.offsetHeight + 28);
        const half = tooltip.offsetWidth / 2 + 8;
        tooltip.style.left = Math.max(half, Math.min(rect.width - half, x)) + "px";
        tooltip.style.top  = y + "px";
      })
      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .on("keydown", (event, d) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.currentTarget.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
      })
      .on("click", (event, d) => {
        const fips = String(d.id).padStart(5, "0");
        tooltip.style.opacity = 0;
        document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
        event.currentTarget.classList.add("selected");
        openPanel(fips, event.currentTarget);
      });`);
  // The star and label were drawn in viewBox units; on a tall state whose 1000-unit map renders
  // ~450px wide the label came out 5px tall. The marker now holds a constant on-screen size.
  sub("capital marker constant size", `  const grp = g.append("g").attr("class", "capital-marker");
  grp.append("path").attr("class", "capital-star").attr("d", star(x, y, 6.5));
  grp.append("text").attr("class", "capital-label").attr("x", x + 10).attr("y", y + 3).text(cap.name);
}`, `  const grp = g.append("g").attr("class", "capital-marker");
  grp.append("path").attr("class", "capital-star").attr("d", star(0, 0, 6.5));
  grp.append("text").attr("class", "capital-label").attr("x", 10).attr("y", 3).text(cap.name);
  // Constant on-screen size: scale the marker by viewBox-units-per-CSS-pixel, and again on resize.
  const svgEl = g.node().ownerSVGElement;
  const fit = () => {
    const k = svgEl.viewBox.baseVal.width / Math.max(1, svgEl.getBoundingClientRect().width);
    grp.attr("transform", \`translate(\${x},\${y}) scale(\${k})\`);
  };
  fit();
  window.addEventListener("resize", fit);
}`);
  subRe("capital comment", /  \/\/ ---- Capital marker: [A-Za-z .]+ ----\n  drawCapital\(g, projection, \{ name: "([^"]+)"/,
        (m, name) => `  // ---- Capital marker: ${name} ----\n  drawCapital(g, projection, { name: "${name}"`);
  sub("map failure copy + loadMap close", `  loading.style.display = "none";
}).catch((err) => {
  loading.innerHTML = "Couldn't load map data. Check your internet connection.<br><small>" + err.message + "</small>";
});

function openPanel(fips) {
  const built = getCountyElections(fips);`, `  loading.style.display = "none";
}).catch((err) => {
  if (window.console && console.error) console.error("[map] " + (err && err.message ? err.message : err));
  loading.innerHTML = "The interactive map didn\\u2019t load. <button type=\\"button\\" class=\\"brief-more\\" id=\\"map-retry\\">Try again</button>";
  document.getElementById("map-retry").addEventListener("click", () => { loading.textContent = "Loading map\\u2026"; loadMap(); });
});
}

let lastFocus = null;
function openPanel(fips, fromEl) {
  const built = countyElections(fips);`);
  sub("openPanel: names, split districts, focus, scroll lock", `  } else {
    eyebrow.textContent = \`Congressional District \${built.county.d}\`;
    title.textContent   = built.county.n + " ${unit}";
    subtitle.textContent = built.district ? built.district.region : "";
    const grouped = groupByType(built.elections);
    body.innerHTML = renderGrouped(grouped);
  }

  panel.classList.add("open");
  overlay.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  body.scrollTop = 0;
}`, `  } else {
    const ds = (built.county.ds && built.county.ds.length > 1) ? [...built.county.ds].sort((a, b) => a - b) : [built.county.d];
    const dsList = (j) => ds.length < 3 ? ds.join(\` \${j} \`) : \`\${ds.slice(0, -1).join(", ")} \${j} \${ds[ds.length - 1]}\`;
    eyebrow.textContent = ds.length > 1 ? \`Congressional Districts \${dsList("&")}\` : \`Congressional District \${ds[0]}\`;
    title.textContent   = placeLabel({ ...built.county, fips });
    subtitle.textContent = ds.length > 1
      ? \`This \${UNIT.toLowerCase()} is split between districts \${dsList("and")} \\u2014 check your own ballot for which U.S. House race is yours. All are listed below.\`
      : (built.district ? built.district.region : "");
    const grouped = groupByType(built.elections);
    body.innerHTML = renderGrouped(grouped);
    // A brief only needs "Show more" if the clamp actually hides something.
    body.querySelectorAll(".election-brief.clamped").forEach(b => {
      const t = b.querySelector(".brief-body");
      if (t && t.scrollHeight <= t.clientHeight + 4) { b.classList.remove("clamped"); const m = b.querySelector(".brief-more"); if (m) m.remove(); }
    });
  }

  lastFocus = fromEl || document.activeElement;
  tooltip.style.opacity = 0;
  panel.classList.add("open");
  overlay.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.documentElement.classList.add("drawer-open");
  body.scrollTop = 0;
  setTimeout(() => document.getElementById("panel-close").focus(), 320);
}`);
  // esc() lives next to renderNote so tests/brief-render.js, which lifts briefSegments…renderNote
  // out of the page and runs them alone, gets it too. Handlers that use it run after load.
  sub("esc helper", `function renderNote(note) {`, `// Escape data before it goes into innerHTML. Notes and card text are plain prose; an ampersand
// or angle bracket in a future edit must render as itself rather than corrupt the card.
const esc = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function renderNote(note) {`);
  sub("renderNote escaping", `      ? \`<p class="brief-flag"><span class="brief-mark" aria-hidden="true">\${s.mark}</span>\${s.text}</p>\`
      : \`<p class="brief-lead">\${s.text}</p>\`;`, `      ? \`<p class="brief-flag"><span class="brief-mark" aria-hidden="true">\${s.mark}</span>\${esc(s.text)}</p>\`
      : \`<p class="brief-lead">\${esc(s.text)}</p>\`;`);
  sub("show-more aria", `      \${long ? \`<button class="brief-more" type="button">Show more</button>\` : ""}`,
      `      \${long ? \`<button class="brief-more" type="button" aria-expanded="false">Show more</button>\` : ""}`);
  // Migrations from the d75a2ce form of renderElection/renderCandidate (pages already carrying it),
  // run BEFORE the blocks below are checked so both starting points converge on the same text.
  opt(`  const countLabel = count ? \`\${count} candidate\${count === 1 ? "" : "s"}\` : (isMeasure ? "Yes / No" : (isInfo ? "Details" : "TBD"));
  const candidatesHtml = count`, `  // Measure cards carry Yes/No pairs or one card per proposition — never "candidates".
  const yesNo = count > 0 && e.candidates.every(c => /^(yes|no)\\b/i.test(c.name || ""));
  const countLabel = count
    ? (isMeasure ? (yesNo ? "Yes / No" : \`\${count} measure\${count === 1 ? "" : "s"}\`) : \`\${count} candidate\${count === 1 ? "" : "s"}\`)
    : (isMeasure ? "Yes / No" : (isInfo ? "Details" : "TBD"));
  const candidatesHtml = count`);
  opt(`  const chevron = \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>\`;
  return \`
    <div class="election-card">`, `  // A House primary inherits its district's title; say which contest it is.
  const qualifier = e.office ? "" : (/Runoff/i.test(e.scope || "") ? " — Runoff" : /Primary/i.test(e.scope || "") ? " — Primary" : "");
  const title = e.office || ((e.name || "") + qualifier);
  const chevron = \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>\`;
  return \`
    <div class="election-card">`);
  opt(`          <span class="election-office">\${esc(e.office || e.name || "")}</span>`, `          <span class="election-office">\${esc(title)}</span>`);
  opt(`  const nominated = !!(race && /primary|runoff/i.test((race.office || "") + " " + (race.scope || "")));
  const winnerClass = c.winner ? ("candidate winner" + (nominated ? " nominee" : "")) : "candidate";`, `  const nominated = !!(race && /primary|runoff/i.test((race.office || "") + " " + (race.scope || "")));
  // A proposition or a Yes/No side has no party; the gray "I" tag was a lie on 50 measure cards.
  const measureCard = !!(race && /ballot measure|ballot question|amendment|initiative|proposition|referend|\\bmeasure\\b|\\bquestion\\b/i.test((race.scope || "") + " " + (race.office || "")));
  const winnerClass = c.winner ? ("candidate winner" + (nominated ? " nominee" : "")) : "candidate";`);
  opt(`        <span class="party-tag party-\${esc(c.party)}">\${esc(c.party)}</span>`, `        \${measureCard ? "" : \`<span class="party-tag party-\${esc(c.party)}">\${esc(c.party)}</span>\`}`);
  sub("renderElection: measures, escaping, spans", `function renderElection(e) {
  const count = (e.candidates && e.candidates.length) || 0;
  const countLabel = count === 0 ? "TBD" : \`\${count} candidate\${count === 1 ? "" : "s"}\`;
  const candidatesHtml = count
    ? \`<div class="candidates">\${e.candidates.map(renderCandidate).join("")}</div>\`
    : \`<div style="margin-top:14px;color:var(--ink-soft);font-size:13px;font-style:italic">\${/Ballot Measure/i.test(e.scope || "") ? "A yes/no question — no candidates on this line." : "Candidates not yet announced."}</div>\`;
  const chevron = \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>\`;
  return \`
    <div class="election-card">
      <button class="election-summary" type="button" aria-expanded="false">
        <div class="election-summary-main">
          <div class="election-meta">
            <span class="pill \${e.type}">\${e.type}</span>
            <span class="election-date">\${e.date}</span>
            \${e.scope ? \`<span class="election-scope">· \${e.scope}</span>\` : ""}
          </div>
          <div class="election-office">\${e.office || e.name || ""}</div>
        </div>
        <div class="election-toggle">
          <span class="cand-count">\${countLabel}</span>
          <span class="chevron">\${chevron}</span>
        </div>
      </button>
      <div class="election-detail"><div>\${renderNote(e.note)}\${candidatesHtml}</div></div>
    </div>\`;
}`, `function renderElection(e) {
  const count = (e.candidates && e.candidates.length) || 0;
  // A ballot measure is recognized by what it is called, not by one exact scope string.
  const isMeasure = /ballot measure|ballot question|amendment|initiative|proposition|referend|\\bmeasure\\b|\\bquestion\\b/i.test((e.scope || "") + " " + (e.office || ""));
  const isInfo = /^Also on your ballot|— eight seats, ALL UNOPPOSED/i.test(e.office || "");
  // Measure cards carry Yes/No pairs or one card per proposition — never "candidates".
  const yesNo = count > 0 && e.candidates.every(c => /^(yes|no)\\b/i.test(c.name || ""));
  const countLabel = count
    ? (isMeasure ? (yesNo ? "Yes / No" : \`\${count} measure\${count === 1 ? "" : "s"}\`) : \`\${count} candidate\${count === 1 ? "" : "s"}\`)
    : (isMeasure ? "Yes / No" : (isInfo ? "Details" : "TBD"));
  const candidatesHtml = count
    ? \`<div class="candidates">\${e.candidates.map(c => renderCandidate(c, e)).join("")}</div>\`
    : (isMeasure || isInfo ? "" : \`<div style="margin-top:14px;color:var(--ink-soft);font-size:13px;font-style:italic">Candidates not yet announced.</div>\`);
  // A House primary inherits its district's title; say which contest it is.
  const qualifier = e.office ? "" : (/Runoff/i.test(e.scope || "") ? " — Runoff" : /Primary/i.test(e.scope || "") ? " — Primary" : "");
  const title = e.office || ((e.name || "") + qualifier);
  const chevron = \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>\`;
  return \`
    <div class="election-card">
      <button class="election-summary" type="button" aria-expanded="false">
        <span class="election-summary-main">
          <span class="election-meta">
            <span class="pill \${esc(e.type)}">\${esc(e.type)}</span>
            <span class="election-date">\${esc(e.date)}</span>
            \${e.scope ? \`<span class="election-scope">\${esc(e.scope)}</span>\` : ""}
          </span>
          <span class="election-office">\${esc(title)}</span>
        </span>
        <span class="election-toggle">
          <span class="cand-count">\${countLabel}</span>
          <span class="chevron">\${chevron}</span>
        </span>
      </button>
      <div class="election-detail"><div>\${renderNote(e.note)}\${candidatesHtml}</div></div>
    </div>\`;
}`);
  sub("renderCandidate: nominee, escaping", `function renderCandidate(c) {
  const winnerClass = c.winner ? "candidate winner" : "candidate";
  const positions      = (c.positions || []).filter(Boolean).map(p => \`<li>\${p}</li>\`).join("");
  const differentiators= (c.differentiators || []).filter(Boolean).map(p => \`<li>\${p}</li>\`).join("");
  const supporters     = (c.supporters || []).filter(Boolean).map(p => \`<li>\${p}</li>\`).join("");
  const opponents      = (c.opponents || []).filter(Boolean).map(p => \`<li>\${p}</li>\`).join("");
  return \`
    <div class="\${winnerClass}">
      <div class="cand-head">
        <div class="cand-name">\${c.name}</div>
        <span class="party-tag party-\${c.party}">\${c.party}</span>
      </div>`, `function renderCandidate(c, race) {
  // A primary or runoff winner was NOMINATED, not elected — the badge should say so.
  const nominated = !!(race && /primary|runoff/i.test((race.office || "") + " " + (race.scope || "")));
  // A proposition or a Yes/No side has no party; the gray "I" tag was a lie on 50 measure cards.
  const measureCard = !!(race && /ballot measure|ballot question|amendment|initiative|proposition|referend|\\bmeasure\\b|\\bquestion\\b/i.test((race.scope || "") + " " + (race.office || "")));
  const winnerClass = c.winner ? ("candidate winner" + (nominated ? " nominee" : "")) : "candidate";
  const positions      = (c.positions || []).filter(Boolean).map(p => \`<li>\${esc(p)}</li>\`).join("");
  const differentiators= (c.differentiators || []).filter(Boolean).map(p => \`<li>\${esc(p)}</li>\`).join("");
  const supporters     = (c.supporters || []).filter(Boolean).map(p => \`<li>\${esc(p)}</li>\`).join("");
  const opponents      = (c.opponents || []).filter(Boolean).map(p => \`<li>\${esc(p)}</li>\`).join("");
  return \`
    <div class="\${winnerClass}">
      <div class="cand-head">
        <div class="cand-name">\${esc(c.name)}</div>
        \${measureCard ? "" : \`<span class="party-tag party-\${esc(c.party)}">\${esc(c.party)}</span>\`}
      </div>`);
  sub("closePanel: focus + scroll lock", `function closePanel() {
  panel.classList.remove("open");
  overlay.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
}`, `function closePanel() {
  if (!panel.classList.contains("open")) return;
  panel.classList.remove("open");
  overlay.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  document.documentElement.classList.remove("drawer-open");
  tooltip.style.opacity = 0;
  document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}`);
  sub("show-more toggle aria", `    more.textContent = brief.classList.toggle("clamped") ? "Show more" : "Show less";
    return;`, `    const clamped = brief.classList.toggle("clamped");
    more.textContent = clamped ? "Show more" : "Show less";
    more.setAttribute("aria-expanded", clamped ? "false" : "true");
    return;`);

  // ── Sept 4, 2026 ────────────────────────────────────────────────────────────────────
  // Split-county drawer header, for counties in THREE OR MORE districts.
  // The Sept 3 text joined the list with a bare " and " / " & ", which reads as
  // "districts 3 and 5 and 2 and 4" on Gwinnett (GA, 4), Union (NJ, 4), New Haven (CT, 4)
  // and Cook (IL, 11). It is now an ordered, comma-separated list with a final conjunction.
  // Sorting is display-only — `ds` itself stays plurality-first, which is what the merge reads.
  sub("split-county district list reads as a list",
    `    const ds = (built.county.ds && built.county.ds.length > 1) ? built.county.ds : [built.county.d];
    eyebrow.textContent = ds.length > 1 ? \`Congressional Districts \${ds.join(" & ")}\` : \`Congressional District \${ds[0]}\`;`,
    `    const ds = (built.county.ds && built.county.ds.length > 1) ? [...built.county.ds].sort((a, b) => a - b) : [built.county.d];
    const dsList = (j) => ds.length < 3 ? ds.join(\` \${j} \`) : \`\${ds.slice(0, -1).join(", ")} \${j} \${ds[ds.length - 1]}\`;
    eyebrow.textContent = ds.length > 1 ? \`Congressional Districts \${dsList("&")}\` : \`Congressional District \${ds[0]}\`;`);
  sub("split-county sentence uses the list",
    `      ? \`This \${UNIT.toLowerCase()} is split between districts \${ds.join(" and ")} \\u2014 check your own ballot`,
    `      ? \`This \${UNIT.toLowerCase()} is split between districts \${dsList("and")} \\u2014 check your own ballot`);

  if (missing.length) { failures.push(`${page}: ${missing.join("; ")}`); continue; }
  const out = s.replace(/\n/g, eol);
  if (out !== original) { rewritten++; if (!CHECK) fs.writeFileSync(file, out); }
}

if (failures.length) {
  console.error("✗ Anchors missing — these pages were NOT written:\n  " + failures.join("\n  "));
  process.exit(1);
}
console.log(`${rewritten} page(s) ${CHECK ? "would be" : ""} rewritten${CHECK ? " (check only)" : ""}`);
