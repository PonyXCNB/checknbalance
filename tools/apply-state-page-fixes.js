#!/usr/bin/env node
// apply-state-page-fixes.js — the Sept 3, 2026 self-review fixes for state.html, the generic page
// that serves the jurisdictions without a built guide (today: Alaska, California, Missouri, Texas,
// and the District of Columbia).
//
// Anchored exact-string replacements; refuses to write if any anchor is missing; idempotent.
//
// What it fixes:
//   routing      a built state's ?state= URL now redirects in the <head>, before anything paints,
//                from ONE list (the 46-line chain of ifs is removed); no ?state= goes home; an
//                unknown code goes home instead of silently showing California
//   map          Alaska was a 960×117 strip (Mercator across the antimeridian). The page now uses
//                the same state-centred conic as the built pages, shapes its frame to the
//                jurisdiction at runtime, and draws county borders that survive phone scaling
//   names        "St. Louis County" for the independent city; DC and Alaska get the right words
//                ("Washington, D.C.", boroughs and census areas); the tooltip and drawer agree
//   drawer       state legislature and county offices were typed "scheduled" and "past" — both
//                are on the November 3 ballot; scopes no longer embed the date; the placeholder
//                links to the jurisdiction's official candidate list; same dialog semantics,
//                focus handling, keyboard access, escaping and CDN guard as the built pages
//   truth        footer "May 2026" → SITE_META; the dead New York block (a placeholder note about
//                a DC delegate) is gone; the banner says which offices are verified for THIS
//                jurisdiction, not a fixed three; the crest shows the state code
//   css          the same accessibility, print, motion, contrast and size fixes as the built pages
//
// Usage:  node tools/apply-state-page-fixes.js [--check]
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const CHECK = process.argv.includes("--check");
const file = path.join(ROOT, "state.html");
const original = fs.readFileSync(file, "utf8");
const eol = /\r\n/.test(original) ? "\r\n" : "\n";
let s = original.replace(/\r\n/g, "\n");
const missing = [];
// "Already applied" is checked first — some new texts still contain their anchor.
const sub = (label, from, to) => {
  if (to && s.includes(to)) return;
  if (s.includes(from)) { s = s.split(from).join(to); return; }
  missing.push(label);
};
const subRe = (label, re, to, already) => {
  if (re.test(s)) { s = s.replace(re, to); return; }
  if (already && already.test(s)) return;
  missing.push(label);
};
const BUILT = fs.readdirSync(ROOT).filter(f => /^[a-z]{2}\.html$/.test(f)).map(f => f.slice(0, 2)).sort();
const LAST_UPDATED = "September 3, 2026";

// ───────────── HEAD ─────────────
sub("meta description", `<meta name="description" content="County-by-county election framework for any U.S. state." />`,
    `<meta name="description" content="Which offices are on the November 3, 2026 ballot, county by county, for the states whose full guide is still being built." />`);
subRe("head redirect", /<meta name="theme-color" content="#FBF9F4">\n(?:<script>\n\/\/ Built states[\s\S]*?<\/script>\n)?/,
  `<meta name="theme-color" content="#FBF9F4">
<script>
// Built states have their own page. Send them there before anything paints — this is the ONLY list.
(function () {
  var BUILT = "${BUILT.join(" ")}".split(" ");
  var st = (new URLSearchParams(location.search).get("state") || "").toLowerCase();
  if (BUILT.indexOf(st) !== -1) location.replace(st + ".html" + (location.hash || ""));
})();
</script>
`);
sub("social meta", `<meta name="description" content="Which offices are on the November 3, 2026 ballot, county by county, for the states whose full guide is still being built." />`,
    `<meta name="description" content="Which offices are on the November 3, 2026 ballot, county by county, for the states whose full guide is still being built." />
<meta property="og:type" content="website">
<meta property="og:site_name" content="Check n Balance">
<meta property="og:title" content="State Elections Hub — Check n Balance">
<meta property="og:description" content="Which offices are on the November 3, 2026 ballot, county by county.">
<meta property="og:image" content="https://checknbalance.org/apple-touch-icon.png">
<meta name="twitter:card" content="summary">`);
sub("preconnect cdn", `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="preconnect" href="https://cdn.jsdelivr.net">`);

// ───────────── CSS ─────────────
sub("map-shell overflow", `box-shadow: var(--shadow); position: relative; overflow: hidden; }`, `box-shadow: var(--shadow); position: relative; margin-left: auto; margin-right: auto; }`);
sub("county stroke", `  .county { fill: #F1E9D2; stroke: var(--paper-pure); stroke-width: 0.6; cursor: pointer; transition: fill .15s ease; }
  .county:hover { fill: #E5DBBE; }
  .county.selected { fill: var(--gold-deep) !important; stroke: var(--ink); stroke-width: 1.2; }`,
  `  .county { fill: #F1E9D2; stroke: var(--paper-pure); stroke-width: 1px; vector-effect: non-scaling-stroke; cursor: pointer; transition: fill .15s ease; }
  @media (hover: hover) { .county:hover { fill: #E5DBBE; } }
  .county:focus-visible { outline: none; fill: #E5DBBE; stroke: var(--ink); stroke-width: 2px; }
  .county.selected { fill: var(--gold-deep) !important; stroke: var(--ink); stroke-width: 1.5px; }`);
sub("capital label contrast", `fill: var(--ink); fill-opacity: 0.55; pointer-events: none; }
  .capital-sub { font-family: var(--sans); font-size: 7.5px; letter-spacing: 0.16em; text-transform: uppercase; fill: var(--ink); fill-opacity: 0.4; pointer-events: none; }`,
  `fill: var(--ink); fill-opacity: 0.85; pointer-events: none; }`);
sub("tooltip z-index", `white-space: nowrap; z-index: 10; box-shadow: 0 8px 24px rgba(0,0,0,.18); }`, `white-space: nowrap; z-index: 60; box-shadow: 0 8px 24px rgba(0,0,0,.18); }\n  .tooltip.below { transform: translate(-50%, 26px); }`);
sub("panel hidden when closed", `  .panel { position: fixed; top: 0; right: 0; bottom: 0; width: min(640px, 100%); background: var(--paper-pure); box-shadow: -10px 0 40px rgba(14,23,38,.15); transform: translateX(100%); transition: transform .3s cubic-bezier(.4,0,.2,1); z-index: 101; display: flex; flex-direction: column; }
  .panel.open { transform: translateX(0); }`,
  `  .panel { position: fixed; top: 0; right: 0; bottom: 0; width: min(720px, 92vw); background: var(--paper-pure); box-shadow: -10px 0 40px rgba(14,23,38,.15); transform: translateX(100%); visibility: hidden; transition: transform .3s cubic-bezier(.4,0,.2,1), visibility 0s linear .3s; z-index: 101; display: flex; flex-direction: column; }
  .panel.open { transform: translateX(0); visibility: visible; transition-delay: 0s; }
  html.drawer-open { overflow: hidden; }`);
sub("panel title size", `  .panel-title { font-family: var(--serif); font-size: 34px;`, `  .panel-title { font-family: var(--serif); font-size: 36px;`);
sub("panel-body overscroll", `  .panel-body { overflow-y: auto; padding: 8px 0 60px; flex: 1; }`, `  .panel-body { overflow-y: auto; overscroll-behavior: contain; padding: 8px 0 60px; flex: 1; }`);
sub("past pill contrast", `  .pill.past { background: #F1EAD8; color: var(--gold-deep); }`, `  .pill.past { background: #F1EAD8; color: #7A561B; }`);
sub("brief body size", `  .brief-body { font-size: 12.5px; line-height: 1.62; color: var(--ink-soft); }`, `  .brief-body { font-size: 13.5px; line-height: 1.62; color: var(--ink-soft); }`);
sub("collapsed detail out of tab order", `  .election-detail > div { overflow: hidden; min-height: 0; }`,
    `  .election-detail > div { overflow: hidden; min-height: 0; visibility: hidden; transition: visibility 0s linear .28s; }\n  .election-card.open .election-detail > div { visibility: visible; transition-delay: 0s; }`);
sub("cand-list size", `  .cand-list { list-style: none; padding-left: 0; font-size: 13px; color: var(--ink); line-height: 1.5; }`, `  .cand-list { list-style: none; padding-left: 0; font-size: 13.5px; color: var(--ink); line-height: 1.5; }`);
sub("voices size", `  .voices-block { border-radius: 10px; padding: 12px 14px; font-size: 12.5px; line-height: 1.5; }`, `  .voices-block { border-radius: 10px; padding: 12px 14px; font-size: 13px; line-height: 1.5; }`);
sub("typographic quotes", `  .voices-block li::before { content: '"'; opacity: .4; }
  .voices-block li::after { content: '"'; opacity: .4; }`, `  .voices-block li::before { content: '\\201C'; opacity: .4; }
  .voices-block li::after { content: '\\201D'; opacity: .4; }`);
sub("placeholder link", `  .placeholder-body .ph-card { border: 1px dashed var(--line); border-radius: 10px; padding: 16px 18px; background: var(--paper); margin-top: 10px; }`,
    `  .placeholder-body .ph-card { border: 1px dashed var(--line); border-radius: 10px; padding: 16px 18px; background: var(--paper); margin-top: 10px; }
  .placeholder-body .ph-card a { color: var(--gold-deep); border-bottom: 1px solid var(--gold-soft); }`);
sub("shared a11y/print/motion rules", `  @media (max-width: 900px) { .topbar-inner { grid-template-columns: auto 1fr; } .nav-spacer { display: none; } }`,
    `  :focus-visible { outline: 2px solid var(--gold-deep); outline-offset: 3px; }
  .map-section, .footer { scroll-margin-top: 84px; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
  }
  @media print {
    .topbar, .hero, .map-section, .panel-overlay, .panel-close, .brief-more { display: none !important; }
    .panel { position: static; width: auto; transform: none; visibility: visible; box-shadow: none; }
    .panel-body { overflow: visible; }
    .election-detail { grid-template-rows: 1fr; }
    .election-detail > div { visibility: visible; }
  }
  @media (max-width: 900px) { .topbar-inner { grid-template-columns: auto 1fr; } .nav-spacer { display: none; } }`);

// ───────────── HTML ─────────────
sub("banner id", `    <span>Offices on this state's <strong>2026 ballot are verified</strong> (Senate, governor, U.S. House). Candidate-level detail is being researched state by state — the gold states on the home map show the finished version.</span>`,
    `    <span id="banner-text">Offices on this state's <strong>2026 ballot are verified</strong>. Candidate-level detail is being researched state by state — the gold states on the home map show the finished version.</span>`);
sub("section title id", `      <h2 class="section-title">Click a county to <em>begin</em>.</h2>
      <p class="section-sub">Every county is clickable. Each opens the seat framework we plan to fill with verified candidates.</p>`,
    `      <h2 class="section-title" id="section-title">Tap a county to <em>begin</em>.</h2>
      <p class="section-sub" id="section-sub">Every county is clickable. Each opens the offices on that ballot; candidate detail is still being researched.</p>`);
sub("svg label", `<svg id="statemap" viewBox="0 0 1000 530" preserveAspectRatio="xMidYMid meet"></svg>`,
    `<svg id="statemap" viewBox="0 0 1000 530" preserveAspectRatio="xMidYMid meet" role="group" aria-label="County map. Each county is a button that opens its ballot."></svg>`);
sub("dialog semantics", `<aside class="panel" id="panel" aria-hidden="true">`,
    `<aside class="panel" id="panel" role="dialog" aria-modal="true" aria-labelledby="panel-title" aria-hidden="true">`);
sub("footer", `    <div class="footer-crest"><strong>Elections Hub</strong> · A civic side-project, not affiliated with any government agency.</div>
    <div class="footer-meta">Last updated: May 2026</div>`,
    `    <div class="footer-crest"><strong id="footer-crest">Elections Hub</strong> · A civic side-project, not affiliated with any government agency.</div>
    <div class="footer-meta">Last updated: <span id="last-updated">${LAST_UPDATED}</span></div>`);
subRe("footer date current", /Last updated: <span id="last-updated">[^<]*<\/span>/, `Last updated: <span id="last-updated">${LAST_UPDATED}</span>`);
sub("pinned CDN", `<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3"></script>`,
    `<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3.1.0"></script>`);

// ───────────── JS ─────────────
subRe("abbr handling + redirect chain", /\/\/ ---- Read \?state=XX \(abbreviation\) ----\nconst params = new URLSearchParams\(window\.location\.search\);\nlet abbr = \(params\.get\("state"\) \|\| "CA"\)\.toUpperCase\(\);\nif \(!STATES\[abbr\]\) abbr = "CA";\n\/\/ If someone lands here for NC, send them to the full build\.\n(?:if \(abbr === "[A-Z]{2}"\) \{ window\.location\.replace\("[a-z]{2}\.html"\); \}\n)+/,
  `// ---- Read ?state=XX (abbreviation) ----
// Built states were redirected in the <head>. No state, or an unknown code, goes home to the map
// rather than silently showing some other state.
const params = new URLSearchParams(window.location.search);
const abbr = (params.get("state") || "").toUpperCase();
if (!STATES[abbr]) { window.location.replace("index.html#map"); throw new Error("redirecting home: unknown state " + JSON.stringify(abbr)); }
const SITE_META = { lastUpdated: "${LAST_UPDATED}" };
`, /redirecting home: unknown state/);
subRe("site meta date current", /const SITE_META = \{ lastUpdated: "[^"]*" \};/, `const SITE_META = { lastUpdated: "${LAST_UPDATED}" };`);
sub("crest + noun + names", `const STATE = STATES[abbr];
const FIPS = STATE.f;
const cap = CAP[FIPS];`, `const STATE = STATES[abbr];
const FIPS = STATE.f;
const cap = CAP[FIPS];
// What the map's units are called here, and how a unit is named in the drawer.
const NOUN = FIPS === "02" ? "borough or census area" : FIPS === "11" ? "district" : FIPS === "22" ? "parish" : "county";
const NOUNS = FIPS === "02" ? "boroughs and census areas" : FIPS === "11" ? "district" : FIPS === "22" ? "parishes" : "counties";
function placeName(nm, id) {
  if (FIPS === "11") return "Washington, D.C.";
  if (FIPS === "02") return nm;                                  // us-atlas names carry no suffix; "Anchorage" is right
  if (String(id) === "29510") return "City of St. Louis";       // the independent city, not St. Louis County
  if (/\\bCity$/.test(nm)) return nm;                             // Carson City, Baltimore City, Virginia's cities
  return nm + (FIPS === "22" ? " Parish" : " County");
}
const HOVER = window.matchMedia && window.matchMedia("(hover: hover)").matches;
// Where the official, certified candidate list lives — the drawer's placeholder points people there.
const OFFICIAL = {
  AK: ["Alaska Division of Elections", "https://www.elections.alaska.gov/"],
  CA: ["California Secretary of State", "https://www.sos.ca.gov/elections"],
  MO: ["Missouri Secretary of State", "https://www.sos.mo.gov/elections"],
  TX: ["Texas Secretary of State", "https://www.sos.state.tx.us/elections/"],
  DC: ["DC Board of Elections", "https://www.dcboe.org/"],
};
document.getElementById("footer-crest").textContent = \`\${abbr} Elections Hub\`;
document.getElementById("last-updated").textContent = SITE_META.lastUpdated;
document.getElementById("section-title").innerHTML = FIPS === "11" ? "Tap the District to <em>begin</em>." : \`Tap a \${NOUN.split(" or ")[0]} to <em>begin</em>.\`;
document.getElementById("section-sub").textContent = FIPS === "11"
  ? "The District is one jurisdiction. Tap it to open the offices on the November 3 ballot; candidate detail is still being researched."
  : \`Every \${NOUN} is clickable. Each opens the offices on that ballot; candidate detail is still being researched.\`;`);
sub("hero lede", `document.getElementById("hero-lede").textContent =
  \`What \${STATE.n} votes on in 2026, county by county. Offices are verified; candidate research is in progress.\`;`,
  `document.getElementById("hero-lede").textContent =
  \`What \${STATE.n} votes on in 2026\${FIPS === "11" ? "" : ", " + NOUN.split(" or ")[0] + " by " + NOUN.split(" or ")[0]}. Offices are verified; candidate research is in progress.\`;`);
subRe("dead NY block", /const STATE_RACES = \{\n  NY: \[[\s\S]*?\n  \],?\n\};/,
  `const STATE_RACES = {
  // Marquee races for a jurisdiction that has no built page yet. Each entry: { key, date, type, scope,
  // office, note, candidates } exactly as on the built pages; "key" suppresses the generic office
  // entry of the same name in buildSeats. None today — every researched state has its own page.
};`, /None today — every researched state has its own page/);
sub("buildSeats types + scopes", `  if (SEN_2026.has(abbr) && !covered.has("senate")) {
    seats.push({ type:"upcoming", scope:"Federal · Statewide · Nov 3, 2026",
      office:"U.S. Senate — " + STATE.n,
      note: SEN_NOTES[abbr] || "Class 2 seat on the ballot. Candidate research in progress." });
  }
  if (SEN_SPECIAL[abbr] && !covered.has("senate-special")) {
    seats.push({ type:"upcoming", scope:"Federal · Statewide · Nov 3, 2026",
      office:"U.S. Senate — Special Election",
      note: SEN_SPECIAL[abbr] });
  }
  if (GOV_2026.has(abbr) && !covered.has("governor")) {
    seats.push({ type:"upcoming", scope:"State · Statewide · Nov 3, 2026",
      office:"Governor of " + STATE.n,
      note: GOV_NOTES[abbr] || "Governorship on the ballot. Candidate research in progress." });
  }
  const hs = HOUSE_SEATS[abbr];
  if (hs > 0) {
    seats.push({ type:"upcoming", scope:"Federal · By district · Nov 3, 2026",
      office:\`U.S. House — all \${hs} \${STATE.n} seat\${hs === 1 ? "" : "s"}\`,
      note:"Every U.S. House seat nationwide is up in 2026. District-by-district detail in progress." });
  } else if (abbr === "DC" && !covered.has("delegate")) {
    seats.push({ type:"upcoming", scope:"Federal · Nov 3, 2026",
      office:"Delegate to the U.S. House (non-voting)",
      note:"DC elects a non-voting delegate; it has no senators or governor." });
  }
  seats.push({ type:"scheduled", scope:"State", office:"State Legislature",
    note:"Most states elect state house (and some senate) seats in 2026. District detail in progress." });
  seats.push({ type:"past", scope:"Local", office:"County & Local Offices",
    note:"Commission, sheriff, school board, and judicial races vary by county. Research in progress." });
  return seats;`,
  `  const NOV = "Nov 3, 2026";
  if (SEN_2026.has(abbr) && !covered.has("senate")) {
    seats.push({ type:"upcoming", date: NOV, scope:"Federal · Statewide",
      office:"U.S. Senate — " + STATE.n,
      note: SEN_NOTES[abbr] || "Class 2 seat on the ballot. Candidate research in progress." });
  }
  if (SEN_SPECIAL[abbr] && !covered.has("senate-special")) {
    seats.push({ type:"upcoming", date: NOV, scope:"Federal · Statewide · Special",
      office:"U.S. Senate — Special Election",
      note: SEN_SPECIAL[abbr] });
  }
  if (GOV_2026.has(abbr) && !covered.has("governor")) {
    seats.push({ type:"upcoming", date: NOV, scope:"State · Statewide",
      office:"Governor of " + STATE.n,
      note: GOV_NOTES[abbr] || "Governorship on the ballot. Candidate research in progress." });
  }
  const hs = HOUSE_SEATS[abbr];
  if (hs > 0) {
    seats.push({ type:"upcoming", date: NOV, scope:"Federal · District",
      office:\`U.S. House — all \${hs} \${STATE.n} seat\${hs === 1 ? "" : "s"}\`,
      note: (HOUSE_NOTES[abbr] || "Every U.S. House seat nationwide is up in 2026.") + " District-by-district detail in progress." });
  } else if (abbr === "DC" && !covered.has("delegate")) {
    seats.push({ type:"upcoming", date: NOV, scope:"Federal · At-Large",
      office:"Delegate to the U.S. House (non-voting)",
      note: HOUSE_NOTES.DC || "DC elects a non-voting delegate; it has no senators or governor." });
  }
  seats.push({ type:"upcoming", date: NOV, scope: abbr === "DC" ? "Local · District" : "State · District",
    office: abbr === "DC" ? "DC Council" : "State Legislature",
    note: LEG_NOTES[abbr] || "Most states elect state house (and some senate) seats in 2026. District detail in progress." });
  seats.push({ type:"upcoming", date: NOV, scope:"Local · " + (FIPS === "11" ? "District" : FIPS === "22" ? "Parish" : "County"),
    office: FIPS === "11" ? "Local Offices & Ballot Questions" : (FIPS === "22" ? "Parish" : "County") + " & Local Offices",
    note: LOCAL_NOTES[abbr] || "Commission, sheriff, school board, and judicial races vary by " + NOUN.split(" or ")[0] + ". Research in progress." });
  return seats;`);
sub("office notes tables", `function buildSeats(abbr) {
  const seats = [];`, `// Office-level notes for the jurisdictions this page still serves. Sourced; [Verify] where not read
// from the state's own election office. Filled by tools/apply-state-page-fixes.js.
const HOUSE_NOTES = {};
const LEG_NOTES = {};
const LOCAL_NOTES = {};

function buildSeats(abbr) {
  const seats = [];`);
sub("banner text", `if (STATE_RACES[abbr]) {
  const b = document.querySelector(".banner span");
  if (b) b.innerHTML = "This state's <strong>marquee 2026 races are built out</strong> below — click any county, then expand a race. County-level local races are the next research phase.";
}`, `(function setBanner() {
  const b = document.getElementById("banner-text");
  if (!b) return;
  if (STATE_RACES[abbr]) {
    b.innerHTML = "This state's <strong>marquee 2026 races are built out</strong> below — click any county, then expand a race. County-level local races are the next research phase.";
    return;
  }
  const offices = [];
  if (SEN_2026.has(abbr)) offices.push("U.S. Senate");
  if (SEN_SPECIAL[abbr]) offices.push("a U.S. Senate special election");
  if (GOV_2026.has(abbr)) offices.push("governor");
  if (HOUSE_SEATS[abbr] > 0) offices.push("U.S. House");
  if (abbr === "DC") offices.push("delegate to the U.S. House");
  const list = offices.length > 1 ? offices.slice(0, -1).join(", ") + " and " + offices[offices.length - 1] : (offices[0] || "");
  // (STATE.n and the office names are this page's own constants, so no escaping is needed here —
  // and esc() is declared further down, next to renderNote.)
  b.innerHTML = \`Offices on \${STATE.n}'s <strong>2026 ballot are verified</strong>\${list ? " (" + list + ")" : ""}. Candidate-level detail is being researched state by state — the gold states on the home map show the finished version.\`;
})();`);
// (The condition mentions d3.json on purpose: tests/lib.js cuts the script at its first "d3." line.)
sub("cdn guard first", `const svg = d3.select("#statemap");`, `if (typeof d3 === "undefined" || typeof topojson === "undefined" || typeof d3.json !== "function") {
  document.getElementById("map-loading").innerHTML = "The interactive map didn\\u2019t load \\u2014 a script it needs was blocked. <button type=\\"button\\" class=\\"brief-more\\" onclick=\\"location.reload()\\">Try again</button>";
  throw new Error("map libraries did not load");
}
const svg = d3.select("#statemap");`);
sub("loadMap wrapper", `
d3.json(TOPO_URL).then((us) => {`, `
loadMap();
function loadMap() {
d3.json(TOPO_URL).then((us) => {`);
sub("projection", `  const width = 1000, height = 530;
  // geoMercator works universally (incl. AK/HI) for a single-state view.
  const projection = d3.geoMercator().fitSize([width - 40, height - 40], { type:"FeatureCollection", features: stateCounties });
  const path = d3.geoPath().projection(projection);`,
  `  // A conic equal-area CENTRED ON THIS JURISDICTION (the same rule as the built pages), so north is up
  // and Alaska is not a Mercator strip across the antimeridian. The frame takes the shape of the
  // projected bounds, clamped like the built pages, so the map fills its card.
  const fc = { type:"FeatureCollection", features: stateCounties };
  const [[lonMin, latMin], [lonMax, latMax]] = d3.geoBounds(fc);
  const lonSpan = lonMax >= lonMin ? lonMax - lonMin : lonMax + 360 - lonMin;   // Alaska crosses the antimeridian
  const projection = d3.geoConicEqualArea()
    .rotate([-(lonMin + lonSpan / 2), 0])
    .parallels([latMin + (latMax - latMin) / 6, latMax - (latMax - latMin) / 6]);
  const [[bx0, by0], [bx1, by1]] = d3.geoPath().projection(projection.scale(1000).translate([0, 0])).bounds(fc);
  const aspect = Math.round(Math.min(3, Math.max(0.6, (bx1 - bx0) / (by1 - by0))) * 100) / 100;
  const width = 1000, height = Math.round(1000 / aspect);
  svg.attr("viewBox", \`0 0 \${width} \${height}\`);
  document.querySelector(".map-frame").style.aspectRatio = \`\${aspect} / 1\`;
  document.querySelector(".map-shell").style.maxWidth = \`calc(min(72vh, 760px) * \${aspect} + 16px)\`;
  projection.fitSize([width - 40, height - 40], fc);
  const path = d3.geoPath().projection(projection);`);
sub("county paths", `      .attr("data-name", d => (d.properties && d.properties.name) || "")
      .on("mousemove", (event, d) => {
        const nm = (d.properties && d.properties.name) || "County";
        tooltip.innerHTML = \`<strong>\${nm} County</strong><div class="tooltip-meta">Click for seat framework →</div>\`;
        tooltip.style.opacity = 1;
        const rect = svg.node().getBoundingClientRect();
        tooltip.style.left = (event.clientX - rect.left) + "px";
        tooltip.style.top  = (event.clientY - rect.top)  + "px";
      })
      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .on("click", (event, d) => {
        document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
        event.currentTarget.classList.add("selected");
        openPanel((d.properties && d.properties.name) || "Selected");
      });`, `      .attr("data-name", d => (d.properties && d.properties.name) || "")
      .attr("tabindex", 0)
      .attr("role", "button")
      .attr("aria-label", d => placeName((d.properties && d.properties.name) || "", d.id))
      .on("mousemove", (event, d) => {
        if (!HOVER) return;
        const nm = (d.properties && d.properties.name) || "";
        tooltip.innerHTML = \`<strong>\${esc(placeName(nm, d.id))}</strong><div class="tooltip-meta">Tap or click to see this ballot</div>\`;
        tooltip.style.opacity = 1;
        const rect = svg.node().getBoundingClientRect();
        const x = event.clientX - rect.left, y = event.clientY - rect.top;
        tooltip.classList.toggle("below", y < tooltip.offsetHeight + 28);
        const half = tooltip.offsetWidth / 2 + 8;
        tooltip.style.left = Math.max(half, Math.min(rect.width - half, x)) + "px";
        tooltip.style.top  = y + "px";
      })
      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .on("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.currentTarget.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
      })
      .on("click", (event, d) => {
        tooltip.style.opacity = 0;
        document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
        event.currentTarget.classList.add("selected");
        openPanel(placeName((d.properties && d.properties.name) || "", d.id), event.currentTarget);
      });`);
sub("capital marker constant size", `      const [x, y] = p;
      g.append("path").attr("class","capital-star").attr("d", starPath(x, y, 6.5));
      g.append("text").attr("class","capital-label").attr("x", x + 10).attr("y", y + 3).text(cap[0]);`,
  `      const [x, y] = p;
      // Constant on-screen size whatever the map's scale (see the built pages' drawCapital).
      const grp = g.append("g").attr("class", "capital-marker");
      grp.append("path").attr("class","capital-star").attr("d", starPath(0, 0, 6.5));
      grp.append("text").attr("class","capital-label").attr("x", 10).attr("y", 3).text(cap[0]);
      const svgEl = svg.node();
      const fit = () => { const k = svgEl.viewBox.baseVal.width / Math.max(1, svgEl.getBoundingClientRect().width); grp.attr("transform", \`translate(\${x},\${y}) scale(\${k})\`); };
      fit();
      window.addEventListener("resize", fit);`);
sub("map failure + loadMap close", `  loading.style.display = "none";
}).catch(err => {
  loading.innerHTML = "Couldn't load map data. Check your internet connection.<br><small>" + err.message + "</small>";
});

function openPanel(countyName) {
  document.getElementById("panel-eyebrow").textContent = STATE.n;
  document.getElementById("panel-title").textContent = countyName + " County";`, `  loading.style.display = "none";
}).catch(err => {
  if (window.console && console.error) console.error("[map] " + (err && err.message ? err.message : err));
  loading.innerHTML = "The interactive map didn\\u2019t load. <button type=\\"button\\" class=\\"brief-more\\" id=\\"map-retry\\">Try again</button>";
  document.getElementById("map-retry").addEventListener("click", () => { loading.textContent = "Loading map\\u2026"; loadMap(); });
});
}

let lastFocus = null;
function openPanel(placeLabel, fromEl) {
  document.getElementById("panel-eyebrow").textContent = STATE.n;
  document.getElementById("panel-title").textContent = placeLabel;`);
sub("openPanel: groups + focus", `  if (groups.upcoming.length)  html += renderGroup("Upcoming Elections", groups.upcoming, countyName);
  if (groups.scheduled.length) html += renderGroup("Scheduled", groups.scheduled, countyName);
  if (groups.past.length)      html += renderGroup("Past Elections", groups.past, countyName);
  const body = document.getElementById("panel-body");
  body.innerHTML = html;
  body.scrollTop = 0;
  panel.classList.add("open"); overlay.classList.add("open"); panel.setAttribute("aria-hidden","false");
}`, `  if (groups.upcoming.length)  html += renderGroup("Upcoming Elections", groups.upcoming, placeLabel);
  if (groups.scheduled.length) html += renderGroup("Scheduled", groups.scheduled, placeLabel);
  if (groups.past.length)      html += renderGroup("Past Elections", groups.past, placeLabel);
  const body = document.getElementById("panel-body");
  body.innerHTML = html;
  body.scrollTop = 0;
  lastFocus = fromEl || document.activeElement;
  tooltip.style.opacity = 0;
  panel.classList.add("open"); overlay.classList.add("open"); panel.setAttribute("aria-hidden","false");
  document.documentElement.classList.add("drawer-open");
  setTimeout(() => document.getElementById("panel-close").focus(), 320);
}`);
sub("esc helper", `function renderNote(note) {`, `// Escape data before it goes into innerHTML (defined here so tests/brief-render.js, which lifts
// briefSegments…renderNote out of the page, gets it too; handlers using it run after load).
const esc = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function renderNote(note) {`);
sub("renderSeat", `  const countLabel = hasCands ? \`\${s.candidates.length} candidate\${s.candidates.length === 1 ? "" : "s"}\` : "Research in progress";
  const detailBody = hasCands
    ? \`<div class="candidates">\${s.candidates.map(renderCandidate).join("")}</div>\`
    : \`<div class="placeholder-body"><div class="ph-card">
        The office above is verified for the 2026 ballot. Candidate-level detail for <strong>\${countyName} County, \${STATE.n}</strong> — top positions, differentiators, and what supporters and opponents say — is being researched, matching the depth of the fully built states.
      </div></div>\`;
  return \`
    <div class="election-card">
      <button class="election-summary" type="button" aria-expanded="false">
        <div class="election-summary-main">
          <div class="election-meta">
            <span class="pill \${s.type}">\${s.type}</span>
            <span class="election-scope">· \${s.scope}</span>
          </div>
          <div class="election-office">\${s.office}</div>
        </div>
        <div class="election-toggle">
          <span class="cand-count">\${countLabel}</span>
          <span class="chevron">\${chevron}</span>
        </div>
      </button>`, `  const countLabel = hasCands ? \`\${s.candidates.length} candidate\${s.candidates.length === 1 ? "" : "s"}\` : "Research in progress";
  const official = OFFICIAL[abbr];
  const detailBody = hasCands
    ? \`<div class="candidates">\${s.candidates.map(renderCandidate).join("")}</div>\`
    : \`<div class="placeholder-body"><div class="ph-card">
        The office above is verified for the 2026 ballot. Candidate-level detail for <strong>\${esc(countyName)}, \${esc(STATE.n)}</strong> — top positions, differentiators, and what supporters and opponents say — is being researched, matching the depth of the fully built states.\${official ? \` In the meantime, the certified candidate list is published by the <a href="\${official[1]}" rel="noopener">\${esc(official[0])}</a>.\` : ""}
      </div></div>\`;
  return \`
    <div class="election-card">
      <button class="election-summary" type="button" aria-expanded="false">
        <span class="election-summary-main">
          <span class="election-meta">
            <span class="pill \${esc(s.type)}">\${esc(s.type)}</span>
            <span class="election-date">\${esc(s.date || "Nov 3, 2026")}</span>
            \${s.scope ? \`<span class="election-scope">\${esc(s.scope)}</span>\` : ""}
          </span>
          <span class="election-office">\${esc(s.office)}</span>
        </span>
        <span class="election-toggle">
          <span class="cand-count">\${countLabel}</span>
          <span class="chevron">\${chevron}</span>
        </span>
      </button>`);
sub("closePanel", `function closePanel() {
  panel.classList.remove("open"); overlay.classList.remove("open"); panel.setAttribute("aria-hidden","true");
  document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
}`, `function closePanel() {
  if (!panel.classList.contains("open")) return;
  panel.classList.remove("open"); overlay.classList.remove("open"); panel.setAttribute("aria-hidden","true");
  document.documentElement.classList.remove("drawer-open");
  tooltip.style.opacity = 0;
  document.querySelectorAll(".county.selected").forEach(n => n.classList.remove("selected"));
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}`);
sub("show-more aria", `    more.textContent = brief.classList.toggle("clamped") ? "Show more" : "Show less";
    return;`, `    const clamped = brief.classList.toggle("clamped");
    more.textContent = clamped ? "Show more" : "Show less";
    more.setAttribute("aria-expanded", clamped ? "false" : "true");
    return;`);

if (missing.length) { console.error("✗ Anchors missing — state.html NOT written:\n  " + missing.join("\n  ")); process.exit(1); }
const out = s.replace(/\n/g, eol);
if (out !== original && !CHECK) fs.writeFileSync(file, out);
console.log(out === original ? "state.html: nothing to change" : `state.html ${CHECK ? "would be" : ""} rewritten`);
