#!/usr/bin/env node
// clone-state.js — build a new fully-built state page from an existing donor page.
//
// The clone checklist in CLAUDE.md ("Data architecture -> index.html", plus lesson #10)
// is mechanical and has been got wrong by hand more than once: ma.html shipped with
// Connecticut's map FIPS, oh.html repeated it with West Virginia's, and or.html/nv.html
// both shipped displaying Mississippi's crest initials. This script does every one of
// those replacements from a single config object so none of them can be forgotten.
//
// Usage:  node tools/clone-state.js <config.json>
//
// The config supplies the state-specific text plus paths to four data files whose
// contents are spliced in verbatim, replacing the donor's blocks:
//   countiesFile   -> replaces `const COUNTIES = { ... };`
//   statewideFile  -> replaces `const STATEWIDE = [ ... ];`
//   houseFile      -> replaces `const HOUSE_RACES = { ... };`
//   localFile      -> replaces `const LOCAL_RACES = { ... };`   (optional)
// Each data file must contain the whole declaration, `const X = ...;` included, so the
// leading comment block above it travels with the data it documents.
"use strict";
const fs = require("fs");
const path = require("path");

const cfgPath = process.argv[2];
if (!cfgPath) {
  console.error("usage: node tools/clone-state.js <config.json>");
  process.exit(1);
}
const cfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"));
const root = path.join(__dirname, "..");

const need = ["abbr", "name", "donor", "out", "countyCount", "houseSeats",
              "statewideCount", "fips", "capital", "sources",
              "countiesFile", "statewideFile", "houseFile"];
for (const k of need) {
  if (cfg[k] === undefined) { console.error(`config is missing "${k}"`); process.exit(1); }
}

const AB = cfg.abbr.toUpperCase();          // "ID"
const ab = cfg.abbr.toLowerCase();          // "id"
const donorAB = cfg.donorAbbr.toUpperCase();
const donorab = cfg.donorAbbr.toLowerCase();
const donorName = cfg.donorName;            // "Oregon"

let html = fs.readFileSync(path.join(root, cfg.donor), "utf8");
const before = html;

// ---------------------------------------------------------------
// 1. Splice the four data blocks.
// ---------------------------------------------------------------
// Matches `const NAME = <open> ... <close>;` at the start of a line, non-greedily to the
// first line that is exactly the closing bracket + semicolon. Also swallows any comment
// block immediately above it, so the donor's provenance notes go with the donor's data.
// ⚠ The site's pages are CRLF (a Windows checkout), so every line read here ends with "\r".
// Comparing a line to a bare "};" therefore failed and the tool refused to write ANY page —
// caught Aug 13, 2026 building Wisconsin. Terminators are now stripped for comparison only,
// and the donor's own dominant line ending is reapplied to the spliced-in block so the file
// does not end up with mixed endings.
function spliceBlock(src, declName, close, replacement) {
  const eol = (src.match(/\r\n/g) || []).length > (src.split("\n").length / 2) ? "\r\n" : "\n";
  const lines = src.split("\n");
  const bare = l => l.replace(/\r$/, "");
  let start = lines.findIndex(l => bare(l).startsWith(`const ${declName} = `));
  if (start === -1) throw new Error(`donor has no "const ${declName} ="`);
  const end = lines.findIndex((l, i) => i >= start && bare(l) === close);
  if (end === -1) throw new Error(`could not find the end ("${close}") of ${declName}`);
  // walk backwards over the contiguous comment block above the declaration
  let cstart = start;
  while (cstart > 0 && bare(lines[cstart - 1]).startsWith("//")) cstart--;
  const repl = replacement.replace(/\s+$/, "").split(/\r?\n/)
    .map(l => (eol === "\r\n" ? l + "\r" : l));
  const out = lines.slice(0, cstart).concat(repl).concat(lines.slice(end + 1));
  return out.join("\n");
}

const read = f => fs.readFileSync(path.isAbsolute(f) ? f : path.join(root, f), "utf8");

html = spliceBlock(html, "COUNTIES",    "};", read(cfg.countiesFile));
html = spliceBlock(html, "STATEWIDE",   "];", read(cfg.statewideFile));
html = spliceBlock(html, "HOUSE_RACES", "};", read(cfg.houseFile));
if (cfg.localFile) html = spliceBlock(html, "LOCAL_RACES", "};", read(cfg.localFile));
else {
  html = spliceBlock(html, "LOCAL_RACES", "};",
    "// ----- County-level LOCAL races (the down-ballot depth project) -----\n" +
    `// Sources: (none yet — ${cfg.name} county-level down-ballot research has not started.)\n` +
    "const LOCAL_RACES = {\n" +
    `  // County-level down-ballot research for ${cfg.name} has not started yet.\n` +
    "  // Follow the nc.html pattern (New Hanover, \"37129\") when it does.\n" +
    "};");
}

// ---------------------------------------------------------------
// 1b. The county-equivalent NOUN.
// ---------------------------------------------------------------
// Louisiana has PARISHES, not counties, and Alaska has boroughs. Ten user-visible strings on every
// page hard-code the word "county"/"County"/"counties"/"Counties" — including
// `title.textContent = built.county.n + " County"`, which would render every Louisiana parish as
// "Acadia County" on a live page. That is the same class of pure-presentation defect as quirks #14,
// #16 and #28: invisible to every data test, parse check and runtime check, because the DATA is
// perfectly correct and only the label is wrong.
//
// So the noun is config, not a constant: set `"countyNoun": "parish"` on the target (and
// `"donorCountyNoun"` if the donor is itself a parish/borough state). Default is "county", which
// makes every existing config a no-op. Plurals are derived, so a future "borough" state works too.
const NOUN_PLURAL = { county: "counties", parish: "parishes", borough: "boroughs" };
const nounOf = (word) => {
  const s = String(word || "county").toLowerCase();
  if (!NOUN_PLURAL[s]) {
    console.error(`unknown countyNoun "${word}" — add its plural to NOUN_PLURAL in clone-state.js`);
    process.exit(1);
  }
  const cap = (x) => x[0].toUpperCase() + x.slice(1);
  return { s, p: NOUN_PLURAL[s], S: cap(s), P: cap(NOUN_PLURAL[s]) };
};
const dn = nounOf(cfg.donorCountyNoun);   // donor's noun forms
const tn = nounOf(cfg.countyNoun);        // target's noun forms

// ---------------------------------------------------------------
// 2. Every state-specific text replacement on the clone checklist.
// ---------------------------------------------------------------
const subs = [
  // the county-equivalent noun, in every user-visible string that carries it
  [`${dn.s}-by-${dn.s} guide`, `${tn.s}-by-${tn.s} guide`],           // meta description + hero
  [`Click a ${dn.s} to <em>begin</em>.`, `Click a ${tn.s} to <em>begin</em>.`],
  [`${dn.P} shaded in gold`, `${tn.P} shaded in gold`],
  [`id="panel-eyebrow">${dn.S}</div>`, `id="panel-eyebrow">${tn.S}</div>`],
  [`eyebrow.textContent = "${dn.S} FIPS "`, `eyebrow.textContent = "${tn.S} FIPS "`],
  [`built.county.n + " ${dn.S}"`, `built.county.n + " ${tn.S}"`],     // the drawer's own headline
  // <title>, meta description, crest, brand name
  [`<title>${donorName} Elections Hub</title>`, `<title>${cfg.name} Elections Hub</title>`],
  [`every ${donorAB} election`, `every ${AB} election`],
  [`<div class="crest">${donorAB}</div>`, `<div class="crest">${AB}</div>`],
  [`<span class="brand-name">${donorName} Elections Hub</span>`,
   `<span class="brand-name">${cfg.name} Elections Hub</span>`],
  // hero
  [`Every ${donorName} <em>election</em>`, `Every ${cfg.name} <em>election</em>`],
  [`Click any of the ${cfg.donorCountyCount} ${dn.p}`, `Click any of the ${cfg.countyCount} ${tn.p}`],
  [`<div class="stat"><div class="stat-num">${cfg.donorCountyCount}</div><div class="stat-label">${dn.P}</div></div>`,
   `<div class="stat"><div class="stat-num">${cfg.countyCount}</div><div class="stat-label">${tn.P}</div></div>`],
  [`<div class="stat"><div class="stat-num"><em>${cfg.donorStatewideCount}</em></div><div class="stat-label">Statewide Races Tracked</div></div>`,
   `<div class="stat"><div class="stat-num"><em>${cfg.statewideCount}</em></div><div class="stat-label">Statewide Races Tracked</div></div>`],
  // map: loading text, svg id, CSS selector, d3 selector
  [`Loading map of ${donorName}…`, `Loading map of ${cfg.name}…`],
  [`#${donorab}map`, `#${ab}map`],
  [`id="${donorab}map"`, `id="${ab}map"`],
  // footer
  [`<strong>${donorAB} Elections Hub</strong>`, `<strong>${AB} Elections Hub</strong>`],
  // the FIPS constant — lesson #10, the one that has shipped broken twice
  [`const ${donorAB}_STATE_FIPS = "${cfg.donorFips}";`, `const ${AB}_STATE_FIPS = "${cfg.fips}";`],
  [`${donorAB}_STATE_FIPS`, `${AB}_STATE_FIPS`],
  // empty state — the drawer title AND the sentence under it. Pages differ in how they write
  // the apostrophe (raw ' vs &#39;), so both spellings are tried and exactly one must match.
  [`"Not in ${donorAB}"`, `"Not in ${AB}"`],
  // data-layer comment
  [`every ${donorAB} ${dn.s}`, `every ${AB} ${tn.s}`],
  // SITE_META
  [`const SITE_META = { name: "${donorName} Elections Hub", lastUpdated: "${cfg.donorLastUpdated}" };`,
   `const SITE_META = { name: "${cfg.name} Elections Hub", lastUpdated: "${cfg.lastUpdated}" };`],
];

const missed = [];
for (const [from, to] of subs) {
  if (!html.includes(from)) { missed.push(from); continue; }
  html = html.split(from).join(to);
}

// U.S. House seat count — the LABEL is singular on an at-large page ("U.S. House Seat", vt.html)
// and plural everywhere else, so a clone between the two kinds silently found no match and the tool
// refused to write. Caught Aug 17, 2026 cloning North Dakota (at-large) from Vermont (at-large).
// Accept whichever form the DONOR uses, and emit the form the TARGET needs from its own seat count.
const seatStat = (n, label) =>
  `<div class="stat"><div class="stat-num"><em>${n}</em></div><div class="stat-label">${label}</div></div>`;
const donorSeatVariants = ["U.S. House Seats", "U.S. House Seat"]
  .map(l => seatStat(cfg.donorHouseSeats, l))
  .filter(s => html.includes(s));
if (donorSeatVariants.length !== 1) {
  missed.push(`${seatStat(cfg.donorHouseSeats, "U.S. House Seat(s)")} (matched ${donorSeatVariants.length} times, need exactly 1)`);
} else {
  html = html.split(donorSeatVariants[0])
             .join(seatStat(cfg.houseSeats, Number(cfg.houseSeats) === 1 ? "U.S. House Seat" : "U.S. House Seats"));
}

// empty-state sentence — accept either apostrophe spelling, but require one of them
const emptyVariants = [
  [`This ${dn.s} isn&#39;t in our ${donorName} dataset.`, `This ${tn.s} isn&#39;t in our ${cfg.name} dataset.`],
  [`This ${dn.s} isn't in our ${donorName} dataset.`,    `This ${tn.s} isn't in our ${cfg.name} dataset.`],
];
const emptyHit = emptyVariants.find(([from]) => html.includes(from));
if (!emptyHit) missed.push(`This ${dn.s} isn(&#39;|')t in our ${donorName} dataset.`);
else html = html.split(emptyHit[0]).join(emptyHit[1]);

// capital marker
const capRe = /drawCapital\(g, projection, \{ name: "[^"]+", lng: [-\d.]+, lat: [-\d.]+ \}\);/;
if (!capRe.test(html)) missed.push("drawCapital(...)");
html = html.replace(capRe,
  `drawCapital(g, projection, { name: "${cfg.capital.name}", lng: ${cfg.capital.lng}, lat: ${cfg.capital.lat} });`);

// footer sources line
const srcRe = /(      Sources: )[^<]*(<\/div>)/;
if (!srcRe.test(html)) missed.push("footer Sources:");
html = html.replace(srcRe, `$1${cfg.sources}$2`);

// ---------------------------------------------------------------
// 3. Refuse to write a page that still mentions the donor state.
// ---------------------------------------------------------------
const leftovers = [];
for (const needle of [donorName, `${donorAB}_STATE_FIPS`, `${donorab}map`,
                      `<div class="crest">${donorAB}</div>`, `${donorAB} Elections Hub`]) {
  // the donor state can legitimately be NAMED in race copy (e.g. a neighbouring state),
  // so only the structural tokens are fatal; a bare name mention is reported, not fatal.
  const n = html.split(needle).length - 1;
  if (n > 0) leftovers.push(`${needle} x${n}`);
}

if (missed.length) {
  console.error("\n✗ These replacements found NO match in the donor — the page was NOT written:");
  for (const m of missed) console.error(`    ${m}`);
  console.error("\nThe donor page's wording probably drifted. Fix the config or the donor, then re-run.");
  process.exit(1);
}
if (html === before) { console.error("✗ nothing changed — wrong donor?"); process.exit(1); }

fs.writeFileSync(path.join(root, cfg.out), html);
console.log(`✓ wrote ${cfg.out} (${(html.length / 1024).toFixed(0)} KB) from ${cfg.donor}`);
console.log(`  crest ${AB} · FIPS "${cfg.fips}" · #${ab}map · capital ${cfg.capital.name}`);
if (leftovers.length) {
  console.log(`  ⚠ donor tokens still present (check each is deliberate): ${leftovers.join(", ")}`);
}
