#!/usr/bin/env node
// apply-index-fixes.js — the Sept 3, 2026 self-review fixes for index.html, the national front door.
//
// Anchored exact-string replacements; refuses to write if any anchor is missing; idempotent.
//
// What it fixes:
//   accessibility  the map was the ONLY way into the site — no keyboard, screen-reader or crawlable
//                  route to any state. Adds a plain "Choose your state" list of 51 real links under
//                  the map, makes every state shape focusable and Enter-able, and labels the map.
//   correctness    five territories in states-10m got NaN label transforms (ten console errors a
//                  load); the "partial" hover rule lost a specificity tie; anchor jumps landed under
//                  the sticky bar; a blocked CDN left "Loading map…" forever.
//   content        the primary-turnout card misstated its own source; the general-turnout card
//                  dropped the "presidential years" qualifier — for a midterm site; the 35%-by-2026
//                  card was stale; two sources could not be located and now say so; the hero never
//                  said when the election is or that the site is nonpartisan.
//   copy/privacy   the form's failure message claimed "it's been logged" (nothing is); the console
//                  shipped a Netlify runbook with admin URLs to every visitor; the home-state glow
//                  now says where the lookup goes and shows on the small-state callouts too.
//   polish         focus rings on the form; reduced-motion; tooltip no longer clipped; legend
//                  counts; dead capital-marker code removed; CDN versions pinned.
//
// Usage:  node tools/apply-index-fixes.js [--check]
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const CHECK = process.argv.includes("--check");
const file = path.join(ROOT, "index.html");
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

// ───────────── HEAD ─────────────
// One insertion for canonical, social meta and the CDN preconnect, keyed on the canonical link's
// presence so a re-run cannot add a second copy.
subRe("head links", /<meta name="theme-color" content="#FBF9F4">\n(?!<link rel="canonical")/,
    `<meta name="theme-color" content="#FBF9F4">\n<link rel="canonical" href="https://checknbalance.org/">\n<link rel="preconnect" href="https://cdn.jsdelivr.net">\n`,
    /<link rel="canonical" href="https:\/\/checknbalance\.org\/">/);
sub("meta description", `<meta name="description" content="An interactive 50-state atlas of election coverage." />`,
    `<meta name="description" content="A nonpartisan, county-by-county guide to who is on your November 3, 2026 ballot — every state, every race, with sourced positions and the arguments for and against each candidate." />`);

// ───────────── CSS ─────────────
sub("scroll padding", `  html { scroll-behavior: smooth; }`, `  html { scroll-behavior: smooth; scroll-padding-top: 88px; }`);
sub("partial hover specificity", `  .state:hover:not(.featured) { fill: #E5DBBE; }`, `  .state:hover:not(.featured):not(.partial) { fill: #E5DBBE; }`);
sub("state keyboard focus", `  .state.featured:hover { fill: var(--gold-deep); }`,
    `  .state.featured:hover { fill: var(--gold-deep); }\n  .state:focus-visible { outline: none; stroke: var(--ink); stroke-width: 1.6; }`);
sub("map-shell overflow", `.map-shell { background: var(--paper-pure); border: 1px solid var(--line); border-radius: 18px; padding: 8px; box-shadow: var(--shadow); position: relative; overflow: hidden; }`,
    `.map-shell { background: var(--paper-pure); border: 1px solid var(--line); border-radius: 18px; padding: 8px; box-shadow: var(--shadow); position: relative; }`);
subRe("tooltip z-index", /(\.tooltip \{[^}]*?)z-index: 10;/, "$1z-index: 60;", /\.tooltip \{[^}]*?z-index: 60;/);
sub("tooltip below variant", `  .tooltip-meta { opacity: .7; font-size: 11px; margin-top: 2px; }`,
    `  .tooltip.below { transform: translate(-50%, 26px); }\n  .tooltip-meta { opacity: .7; font-size: 11px; margin-top: 2px; }`);
sub("home glow on callouts", `  .home-note {
    text-align: center; font-size: 12px; color: var(--ink-soft);
    margin-top: 14px; display: none;
  }`, `  .callout.home .callout-abbr { fill: var(--gold-deep); font-weight: 700; animation: homeText 3.4s ease-in-out infinite; }
  .callout.home .callout-line { stroke: var(--gold-deep); opacity: .95; }
  @keyframes homeText { 0%, 100% { opacity: 1; } 50% { opacity: .45; } }
  .home-note {
    text-align: center; font-size: 12px; color: var(--ink-soft);
    margin-top: 14px; display: none;
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .state.home, .state.featured.home, .callout.home .callout-abbr { animation: none; }
    *, *::before, *::after { transition-duration: .01ms !important; }
  }
  /* Every state, as a real link — for keyboards, screen readers, search engines, phones, and the
     day the map CDN is slow. */
  .state-list { max-width: 1240px; margin: 0 auto; padding: 8px 32px 56px; }
  .state-list h2 { font-family: var(--serif); font-weight: 400; font-size: 26px; letter-spacing: -0.01em; text-align: center; margin: 0 0 6px; }
  .state-list h2 em { color: var(--gold-deep); font-style: italic; font-weight: 500; }
  .state-list p { text-align: center; font-size: 13px; color: var(--ink-soft); margin: 0 0 22px; }
  .state-list p a { color: var(--gold-deep); border-bottom: 1px solid var(--gold-soft); }
  .state-list ul { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 6px 18px; }
  .state-list li a { display: flex; align-items: center; gap: 9px; padding: 7px 8px; border-radius: 8px; font-size: 14px; color: var(--ink); transition: background .15s ease; }
  .state-list li a:hover { background: var(--paper-pure); }
  .state-list li a i { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; border: 1px solid rgba(0,0,0,.08); background: #F1E9D2; }
  .state-list li a.built i { background: var(--gold); border-color: var(--gold-deep); }
  .state-list li a.partial i { background: #D9BE85; border-color: var(--gold); }
  .state-list li a small { color: var(--ink-soft); font-size: 11px; margin-left: auto; letter-spacing: .04em; white-space: nowrap; }
  :focus-visible { outline: 2px solid var(--gold-deep); outline-offset: 3px; }`);
sub("form focus ring", `  .contrib input:focus, .contrib textarea:focus { outline: none; border-color: var(--gold); }`,
    `  .contrib input:focus-visible, .contrib textarea:focus-visible { outline: 2px solid var(--gold-deep); outline-offset: 2px; border-color: var(--gold); }`);
subRe("dead capital css", /\n  \.capital-star \{[^\n]*\n  \.capital-label \{[^\n]*\n/, "\n", /^(?![\s\S]*\.capital-star \{)/);

// ───────────── HTML ─────────────
sub("hero eyebrow", `  <div class="eyebrow"><span class="dot"></span> Fifty States · One Atlas</div>`,
    `  <div class="eyebrow"><span class="dot"></span> General election · Tuesday, November 3, 2026</div>`);
sub("hero lede", `    Click any state to meet their election candidates, county by county.`,
    `    A nonpartisan, county-by-county guide to who is on your ballot. Choose your state to begin.`);
// The interim (Sept 3, 2026) legend, from the hours when DC was a starter, becomes the final one.
// Runs BEFORE the main legend replacement so a page in that state converges.
sub("legend interim → final", `    <span class="legend-swatch"><i style="background:#F1E9D2;border-color:#E5DDC9"></i> Starter framework <span class="legend-count">(AK, CA, MO, TX, DC)</span></span>`,
    `    <span class="legend-swatch"><i style="background:#D9BE85;border-color:#B8893C"></i> Marquee races built <span class="legend-count">(DC)</span></span>
    <span class="legend-swatch"><i style="background:#F1E9D2;border-color:#E5DDC9"></i> Starter framework <span class="legend-count">(AK, CA, MO, TX)</span></span>`);
sub("legend counts", `    <span class="legend-swatch"><i style="background:#D9BE85;border-color:#B8893C"></i> Marquee races built</span>
    <span class="legend-swatch"><i style="background:#F1E9D2;border-color:#E5DDC9"></i> Starter framework</span>`,
    `    <span class="legend-swatch"><i style="background:#D9BE85;border-color:#B8893C"></i> Marquee races built <span class="legend-count">(DC)</span></span>
    <span class="legend-swatch"><i style="background:#F1E9D2;border-color:#E5DDC9"></i> Starter framework <span class="legend-count">(AK, CA, MO, TX)</span></span>`);
// The interim (Sept 3, 2026) legend, from the hours when DC was a starter, becomes the final one.
sub("legend interim → final", `    <span class="legend-swatch"><i style="background:#F1E9D2;border-color:#E5DDC9"></i> Starter framework <span class="legend-count">(AK, CA, MO, TX, DC)</span></span>`,
    `    <span class="legend-swatch"><i style="background:#D9BE85;border-color:#B8893C"></i> Marquee races built <span class="legend-count">(DC)</span></span>
    <span class="legend-swatch"><i style="background:#F1E9D2;border-color:#E5DDC9"></i> Starter framework <span class="legend-count">(AK, CA, MO, TX)</span></span>`);
// DC's marquee races live in state.html's STATE_RACES (tools/apply-dc-races.js), so it wears the
// lighter-gold tier honestly; it was briefly a starter on Sept 3, 2026 while that was untrue.
subRe("DC tier", /const PARTIAL = new Set\(\[[^\]]*\]\);[^\n]*/, `const PARTIAL = new Set(["11"]); // DC — marquee races in state.html's STATE_RACES`, /const PARTIAL = new Set\(\["11"\]\); \/\/ DC — marquee races in state\.html/);
sub("map svg label", `<svg id="usmap" viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet"></svg>`,
    `<svg id="usmap" viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" role="group" aria-label="Map of the United States. Each state is a link to its election guide."></svg>`);
// The state list, generated from the same tables the map uses, so it can never disagree with it.
{
  const NAME = {"01":"Alabama","02":"Alaska","04":"Arizona","05":"Arkansas","06":"California","08":"Colorado","09":"Connecticut","10":"Delaware","11":"District of Columbia","12":"Florida","13":"Georgia","15":"Hawaii","16":"Idaho","17":"Illinois","18":"Indiana","19":"Iowa","20":"Kansas","21":"Kentucky","22":"Louisiana","23":"Maine","24":"Maryland","25":"Massachusetts","26":"Michigan","27":"Minnesota","28":"Mississippi","29":"Missouri","30":"Montana","31":"Nebraska","32":"Nevada","33":"New Hampshire","34":"New Jersey","35":"New Mexico","36":"New York","37":"North Carolina","38":"North Dakota","39":"Ohio","40":"Oklahoma","41":"Oregon","42":"Pennsylvania","44":"Rhode Island","45":"South Carolina","46":"South Dakota","47":"Tennessee","48":"Texas","49":"Utah","50":"Vermont","51":"Virginia","53":"Washington","54":"West Virginia","55":"Wisconsin","56":"Wyoming"};
  const ST = {"01":"AL","02":"AK","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT","10":"DE","11":"DC","12":"FL","13":"GA","15":"HI","16":"ID","17":"IL","18":"IN","19":"IA","20":"KS","21":"KY","22":"LA","23":"ME","24":"MD","25":"MA","26":"MI","27":"MN","28":"MS","29":"MO","30":"MT","31":"NE","32":"NV","33":"NH","34":"NJ","35":"NM","36":"NY","37":"NC","38":"ND","39":"OH","40":"OK","41":"OR","42":"PA","44":"RI","45":"SC","46":"SD","47":"TN","48":"TX","49":"UT","50":"VT","51":"VA","53":"WA","54":"WV","55":"WI","56":"WY"};
  const builtMatch = s.match(/const BUILT = \{([^}]*)\};/);
  if (!builtMatch) missing.push("BUILT table");
  const built = new Set((builtMatch ? builtMatch[1] : "").match(/"(\d\d)"/g).map(x => x.replace(/"/g, "")));
  const partial = new Set(["11"]);   // DC: marquee races built in state.html
  const items = Object.keys(NAME).sort((a, b) => NAME[a].localeCompare(NAME[b])).map(f => {
    const href = built.has(f) ? `${ST[f].toLowerCase()}.html` : `state.html?state=${ST[f]}`;
    const cls = built.has(f) ? "built" : (partial.has(f) ? "partial" : "starter");
    const tag = built.has(f) ? "Full guide" : (partial.has(f) ? "Marquee races" : "Starter");
    return `      <li><a class="${cls}" href="${href}"><i aria-hidden="true"></i>${NAME[f]}<small>${tag}</small></a></li>`;
  }).join("\n");
  const nav = `
<!-- Every state as a real link: reachable by keyboard and screen reader, crawlable, and tappable on a
     phone where the map's smallest states are a few pixels wide. Generated from the same BUILT /
     PARTIAL tables the map uses (tools/apply-index-fixes.js). -->
<nav class="state-list" aria-label="Choose your state">
  <h2>Or choose your <em>state</em>.</h2>
  <p>Not sure you are registered? Deadlines vary by state — check <a href="https://vote.gov" rel="noopener">vote.gov</a>.</p>
  <ul>
${items}
  </ul>
</nav>
`;
  const anchor = `  <div class="home-note" id="home-note"></div>\n</section>\n`;
  if (s.includes('class="state-list"')) { /* already present (regenerated below if stale) */ }
  else if (s.includes(anchor)) s = s.replace(anchor, anchor + nav);
  else missing.push("state list anchor");
  // Keep the list current with the tables: replace an existing list wholesale when it differs.
  s = s.replace(/\n<!-- Every state as a real link[\s\S]*?<\/nav>\n/, nav);
}
// Facts: say what the sources actually support, and link them.
sub("fact 1", `        Average share of eligible Americans who vote in primary elections — the contests that decide who even
        appears on the November ballot. In 2024, only about 34 million of roughly 149 million eligible voters
        cast a primary ballot.
      </div>
      <div class="fact-source">Sources: academic study via Clark Univ.; The Midterm Project (2024 figures)</div>`,
    `        Share of registered voters who had cast a primary ballot by late April 2024 across the 32 states that had
        voted by then — about 34 million of 149 million. Primaries decide who even appears on the November ballot.
      </div>
      <div class="fact-source">Source: <a href="https://voteathome.org/" rel="noopener">National Vote at Home Institute</a>, 2024 primary-turnout analysis</div>`);
sub("fact 1 number", `      <div class="fact-num">~20<span>%</span></div>`, `      <div class="fact-num">~23<span>%</span></div>`);
sub("fact 2", `        Of eligible voters do <em>not</em> participate in primaries. Turnout in the 2022 midterm primaries
        was just 21.3% — still short of the 35%-by-2026 national target set by reform advocates.
      </div>
      <div class="fact-source">Source: Bipartisan Policy Center</div>`,
    `        Of eligible voters did <em>not</em> vote in the 2022 midterm primaries — turnout was 21.3%. Reformers set a
        35% goal for 2026; halfway through this year's primary season only two states had reached it.
      </div>
      <div class="fact-source">Source: <a href="https://bipartisanpolicy.org/" rel="noopener">Bipartisan Policy Center</a>, primary-turnout reports (2022; July 2026 update)</div>`);
sub("fact 3 source", `      <div class="fact-source">Source: study cited in Maine Law faculty publication</div>`,
    `      <div class="fact-source">Source: a voter-knowledge study cited in a Maine Law faculty publication [Verify — the original study has not been located]</div>`);
sub("fact 4 source", `      <div class="fact-source">Source: FairVote, summarizing a 2013 study</div>`,
    `      <div class="fact-source">Source: <a href="https://fairvote.org/" rel="noopener">FairVote</a>, summarizing a 2013 study of 340 mayoral elections</div>`);
sub("fact 5 source", `      <div class="fact-source">Source: KQED analysis of San Francisco turnout</div>`,
    `      <div class="fact-source">Source: KQED analysis of San Francisco turnout [Verify — the original article has not been located]</div>`);
sub("fact 6", `        The range of U.S. general-election turnout since 2000, versus just 18–29% for primaries. General
        turnout runs more than double primary turnout — and falls off further the lower you go down the ballot.
      </div>
      <div class="fact-source">Source: States United Democracy Center</div>`,
    `        General-election turnout in presidential years since 2000, versus just 18–29% in those years' primaries.
        In midterm years like 2026, general turnout falls to roughly 40–50% — and drops further down the ballot.
      </div>
      <div class="fact-source">Source: <a href="https://statesuniteddemocracy.org/" rel="noopener">States United Democracy Center</a>, turnout analysis</div>`);
sub("fact 7 source", `      <div class="fact-source">Source: American Political Science Review; political-science research on voter heuristics</div>`,
    `      <div class="fact-source">Source: political-science research on voter heuristics, including work published in the American Political Science Review</div>`);
sub("section lead", `      The races on this site — Senate, House, judges, county seats — are decided by a fraction of eligible
      voters, often by people who know little about the candidates. The numbers tell the story.`,
    `      The races further down the ballot — state legislature, judges, county seats — are decided by a fraction
      of eligible voters, often by people who know little about the candidates. The numbers tell the story.`);
// The honeypot should not be announced.
sub("honeypot aria", `    <p class="contrib-hp">`, `    <p class="contrib-hp" aria-hidden="true">`);
sub("privacy note", `      <p class="contrib-note">Your email is used only to reply to you. Nothing is published, shared, or added to a mailing list.</p>`,
    `      <p class="contrib-note">Your email is used only to reply to you. Submissions are stored by Netlify, our hosting provider; nothing is published, shared, or added to a mailing list.</p>`);
sub("footer links", `    <div class="footer-meta">Last updated: September 2026</div>`,
    `    <div class="footer-meta">Last updated: September 2026 · <a href="#contribute">Report a correction</a> · Every candidate claim is meant to trace to a real source; anything unconfirmed is marked [Verify].</div>`);

// ───────────── JS ─────────────
sub("pinned CDN", `<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3"></script>`,
    `<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3.1.0"></script>`);
subRe("dead CAP table", /\/\/ State capitals: \[lng, lat\]\nconst CAP = \{[\s\S]*?\n\};\n/, "", /^(?![\s\S]*const CAP = \{)/);
subRe("dead starPath", /function starPath\(cx, cy, r\) \{[\s\S]*?\n\}\n\n/, "", /^(?![\s\S]*function starPath)/);
sub("cdn guard", `d3.json(TOPO_URL).then((us) => {
  const states = topojson.feature(us, us.objects.states).features`,
    `if (typeof d3 === "undefined" || typeof topojson === "undefined") {
  document.getElementById("map-loading").innerHTML = "The map didn\\u2019t load \\u2014 use the state list below.";
}
d3.json(TOPO_URL).then((us) => {
  // states-10m also carries five territories (60/66/69/72/78); geoAlbersUsa cannot project them, so
  // their labels became transform(NaN,NaN) — ten console errors a load. Keep the 51 we name.
  const states = topojson.feature(us, us.objects.states).features.filter(d => ST[String(d.id).padStart(2, "0")])`);
sub("social meta", `<link rel="canonical" href="https://checknbalance.org/">`,
    `<link rel="canonical" href="https://checknbalance.org/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Check n Balance">
<meta property="og:title" content="Check n Balance — who is on your November 3, 2026 ballot">
<meta property="og:description" content="A nonpartisan, county-by-county guide to every race in every state, with sourced positions and the arguments for and against each candidate.">
<meta property="og:url" content="https://checknbalance.org/">
<meta property="og:image" content="https://checknbalance.org/apple-touch-icon.png">
<meta name="twitter:card" content="summary">`);
sub("state paths keyboard", `      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .on("click", (event, d) => {
        const fips = String(d.id).padStart(2,"0");
        window.location.href = destFor(fips);
      });`, `      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .attr("tabindex", 0)
      .attr("role", "link")
      .attr("aria-label", d => { const f = String(d.id).padStart(2,"0"); return NAME[f] + " \\u2014 " + (BUILT[f] ? "full guide" : (PARTIAL.has(f) ? "marquee races" : "starter")); })
      .on("keydown", (event, d) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); window.location.href = destFor(String(d.id).padStart(2,"0")); } })
      .on("click", (event, d) => {
        const fips = String(d.id).padStart(2,"0");
        window.location.href = destFor(fips);
      });`);
sub("tooltip flip (states)", `        tooltip.style.opacity = 1;
        const rect = svg.node().getBoundingClientRect();
        tooltip.style.left = (event.clientX - rect.left) + "px";
        tooltip.style.top  = (event.clientY - rect.top)  + "px";
      })
      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .attr("tabindex", 0)`, `        tooltip.style.opacity = 1;
        const rect = svg.node().getBoundingClientRect();
        const x = event.clientX - rect.left, y = event.clientY - rect.top;
        tooltip.classList.toggle("below", y < tooltip.offsetHeight + 28);
        const half = tooltip.offsetWidth / 2 + 8;
        tooltip.style.left = Math.max(half, Math.min(rect.width - half, x)) + "px";
        tooltip.style.top  = y + "px";
      })
      .on("mouseleave", () => { tooltip.style.opacity = 0; })
      .attr("tabindex", 0)`);
sub("callout groups keyed", `  const byFips = {};
  states.forEach(d => { byFips[String(d.id).padStart(2,"0")] = d; });
  CALLOUTS.forEach(c => {
    const feat = byFips[c.fips];
    if (!feat) return;
    const fips = c.fips;
    const [cx, cy] = path.centroid(feat);
    const cg = g.append("g").attr("class", "callout");`, `  const byFips = {};
  states.forEach(d => { byFips[String(d.id).padStart(2,"0")] = d; });
  const calloutGroups = {};
  CALLOUTS.forEach(c => {
    const feat = byFips[c.fips];
    if (!feat) return;
    const fips = c.fips;
    const [cx, cy] = path.centroid(feat);
    const cg = g.append("g").attr("class", "callout")
      .attr("tabindex", 0).attr("role", "link")
      .attr("aria-label", NAME[fips] + " \\u2014 " + (BUILT[fips] ? "full guide" : (PARTIAL.has(fips) ? "marquee races" : "starter")))
      .on("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); window.location.href = destFor(fips); } });
    calloutGroups[fips] = cg;`);
sub("home glow on callout", `      g.selectAll(".state")
        .filter(d => String(d.id).padStart(2, "0") === fips)
        .classed("home", true);
      const note = document.getElementById("home-note");
      note.textContent = \`The pulsing state is \${NAME[fips]} — your approximate location based on your network connection.\`;`,
    `      g.selectAll(".state")
        .filter(d => String(d.id).padStart(2, "0") === fips)
        .classed("home", true);
      if (calloutGroups[fips]) calloutGroups[fips].classed("home", true);
      const note = document.getElementById("home-note");
      note.textContent = \`Highlighted: \${NAME[fips]} \\u2014 a guess from your network address (looked up once via ipapi.co, not stored).\`;`);
sub("map failure copy", `  loading.innerHTML = "Couldn't load map data. Check your internet connection.<br><small>" + err.message + "</small>";`,
    `  if (window.console && console.error) console.error("[map] " + (err && err.message ? err.message : err));
  loading.innerHTML = "The map didn\\u2019t load \\u2014 use the state list below.";`);
sub("form failure copy", `          ? "This form isn't accepting messages right now — that's a fault on our end, not anything you did. It's been logged and we're on it. Sorry for the wasted typing."`,
    `          ? "This form isn't accepting messages right now — that's a fault on our end, not anything you did. Please try again later; sorry for the wasted typing."`);
subRe("form console runbook", /          console\.error\(\n            "\[contribute\] submission failed: "[\s\S]*?\n          \);/,
      `          console.error("[contribute] submission failed: " + (err && err.message ? err.message : err) + (dead ? " \\u2014 the POST did not reach a form handler (see CLAUDE.md, owner to-do item 8)." : ""));`,
      /owner to-do item 8/);

if (missing.length) { console.error("✗ Anchors missing — index.html NOT written:\n  " + missing.join("\n  ")); process.exit(1); }
const out = s.replace(/\n/g, eol);
if (out !== original && !CHECK) fs.writeFileSync(file, out);
console.log(out === original ? "index.html: nothing to change" : `index.html ${CHECK ? "would be" : ""} rewritten`);
