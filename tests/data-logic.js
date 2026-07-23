// Test 3 — Data logic tests: run the pages' data + merge logic in Node and
// assert on the results.
//
//   nc.html /  — getCountyElections(sample county) returns the full merged
//   sc.html      race list with zero blank titles, valid types, and
//                well-formed candidates; all counties merge cleanly.
//   state.html — the openPanel merge ([...STATE_RACES[abbr], ...buildSeats(abbr)])
//                never shows the same office twice, has the right specials for
//                OH/FL, no Senate/Governor for WA, and delegate-only for DC.
//
// Run:  node tests/data-logic.js
"use strict";
const fs = require("fs");
const { extractInlineScripts, cutAtD3, runScript, makeChecker } = require("./lib");

const { check, summary } = makeChecker();
const VALID_TYPES = new Set(["past", "upcoming", "scheduled"]);
const VALID_PARTIES = new Set(["D", "R", "I", "L", "G"]);

// ---------------------------------------------------------------
// Fully built state pages (nc.html pattern)
// If a race count changes because races were legitimately added or
// removed, update it here (and SITE_META.lastUpdated on that page).
// ---------------------------------------------------------------
const STATE_PAGES = [
  { page: "nc.html", countyCount: 100, sampleFips: "37129", sampleName: "New Hanover", expectedRaces: 15 },
  { page: "sc.html", countyCount: 46,  sampleFips: "45019", sampleName: "Charleston",  expectedRaces: 15 },
  { page: "ga.html", countyCount: 159, sampleFips: "13121", sampleName: "Fulton",      expectedRaces: 18 },
  { page: "va.html", countyCount: 133, sampleFips: "51059", sampleName: "Fairfax",     expectedRaces: 9 },
  { page: "md.html", countyCount: 24,  sampleFips: "24031", sampleName: "Montgomery",  expectedRaces: 10 },
  { page: "de.html", countyCount: 3,   sampleFips: "10003", sampleName: "New Castle",  expectedRaces: 8 },
  { page: "nj.html", countyCount: 21,  sampleFips: "34003", sampleName: "Bergen",      expectedRaces: 6 },
  { page: "ny.html", countyCount: 62,  sampleFips: "36001", sampleName: "Albany",      expectedRaces: 6 },
  { page: "ri.html", countyCount: 5,   sampleFips: "44007", sampleName: "Providence",  expectedRaces: 10 },
  { page: "nh.html", countyCount: 10,  sampleFips: "33011", sampleName: "Hillsborough", expectedRaces: 6 },
  { page: "ct.html", countyCount: 8,   sampleFips: "09011", sampleName: "New London",  expectedRaces: 9 },
  { page: "vt.html", countyCount: 14,  sampleFips: "50007", sampleName: "Chittenden",  expectedRaces: 6 },
  { page: "me.html", countyCount: 16,  sampleFips: "23019", sampleName: "Penobscot",   expectedRaces: 9 },
  { page: "ma.html", countyCount: 14,  sampleFips: "25025", sampleName: "Suffolk",     expectedRaces: 11 },
];

for (const cfg of STATE_PAGES) {
  console.log(`— ${cfg.page} —`);
  const code = extractInlineScripts(cfg.page)[0]; // script #1 = data + logic, no d3
  const extra = `
    __exports.getCountyElections = getCountyElections;
    __exports.COUNTIES = COUNTIES;
    __exports.SITE_META = SITE_META;
  `;
  const { sandbox, error } = runScript(cutAtD3(code), { extra });
  check(!error, `${cfg.page} data script runs${error ? ` — ${error.message}` : ""}`);
  if (error) continue;

  const x = sandbox.__exports;
  check(Object.keys(x.COUNTIES).length === cfg.countyCount,
    `${cfg.page}: COUNTIES has all ${cfg.countyCount} counties`);
  check(typeof x.SITE_META.lastUpdated === "string" && x.SITE_META.lastUpdated.length > 0,
    `${cfg.page}: SITE_META.lastUpdated is set`);

  // Clone-bug guard (shipped once on ma.html, July 2026): a page cloned from another
  // state keeps the donor's `<XX>_STATE_FIPS` value in the RENDERING script, so the map
  // silently draws the WRONG STATE while every data test still passes. The smoke test
  // cannot catch this — it cuts the script at the first `d3.` call. Compare the constant
  // against the COUNTIES keys, which are the source of truth for which state this is.
  const rawPage = fs.readFileSync(cfg.page, "utf8");
  const fipsDecl = rawPage.match(/const\s+[A-Z]{2}_STATE_FIPS\s*=\s*"(\d{2})"/);
  const countyPrefix = Object.keys(x.COUNTIES)[0].slice(0, 2);
  check(!!fipsDecl && fipsDecl[1] === countyPrefix,
    `${cfg.page}: map STATE_FIPS "${fipsDecl ? fipsDecl[1] : "MISSING"}" matches COUNTIES prefix "${countyPrefix}"`);

  const result = x.getCountyElections(cfg.sampleFips);
  const races = (result && result.elections) || [];
  check(Array.isArray(result && result.elections),
    `${cfg.page}: getCountyElections('${cfg.sampleFips}') returns { county, district, elections }`);
  check(races.length === cfg.expectedRaces,
    `${cfg.page}: ${cfg.sampleName} has ${cfg.expectedRaces} races (got ${races.length})`);
  check(races.every(r => r.office && String(r.office).trim() !== ""),
    `${cfg.page}: every ${cfg.sampleName} race has a non-blank title`);
  check(races.every(r => VALID_TYPES.has(r.type)),
    `${cfg.page}: every ${cfg.sampleName} race type is past/upcoming/scheduled`);
  const allCandidates = races.flatMap(r => r.candidates || []);
  check(allCandidates.every(c => c.name && VALID_PARTIES.has(c.party)),
    `${cfg.page}: every ${cfg.sampleName} candidate has a name and a valid party (D/R/I/L/G)`);

  check(x.getCountyElections("99999") === null, `${cfg.page}: unknown FIPS returns null`);

  // every county resolves and every race everywhere has a title + valid type
  let badCounty = null;
  for (const fips of Object.keys(x.COUNTIES)) {
    const res = x.getCountyElections(fips);
    const list = res && res.elections;
    if (!list || !list.every(r => r.office && VALID_TYPES.has(r.type))) { badCounty = fips; break; }
  }
  check(badCounty === null,
    `${cfg.page}: all ${cfg.countyCount} counties merge cleanly with titled, valid-type races${badCounty ? ` (bad: ${badCounty})` : ""}`);
  console.log("");
}

// ---------------------------------------------------------------
// state.html
// ---------------------------------------------------------------
console.log("— state.html —");
const stateCode = cutAtD3(extractInlineScripts("state.html")[0]);
const stateExtra = `
  __exports.STATE_RACES = STATE_RACES;
  __exports.buildSeats = buildSeats;
  __exports.SEN_SPECIAL = SEN_SPECIAL;
`;

// Reproduce the openPanel merge for one state (the script's top-level code
// branches on ?state=, so each abbr gets its own run).
function seatsFor(abbr) {
  const { sandbox, error } = runScript(stateCode, { search: `?state=${abbr}`, extra: stateExtra });
  if (error) return { error };
  const x = sandbox.__exports;
  return { seats: [...(x.STATE_RACES[abbr] || []), ...x.buildSeats(abbr)], error: null };
}

function officeKind(seat) {
  const office = seat.office || "";
  if (seat.key) return seat.key === "senate-special" ? "senate-special"
    : seat.key === "senate" ? "senate"
    : seat.key === "governor" ? "governor"
    : seat.key === "delegate" ? "delegate" : seat.key;
  if (/^U\.S\. Senate — Special/.test(office)) return "senate-special";
  if (/^U\.S\. Senate/.test(office)) return "senate";
  if (/^Governor/.test(office)) return "governor";
  if (/^Delegate/.test(office)) return "delegate";
  if (/^U\.S\. House/.test(office)) return "house";
  return null;
}

// NC, SC, GA, VA, MD, DE, and NJ redirect to their own pages, so they are not tested here.
const FEATURED_ABBRS = ["AL", "FL", "NY", "DC"];
const ALL_TESTED = [...new Set([...FEATURED_ABBRS, "TX", "CA", "OH", "WA"])];

for (const abbr of ALL_TESTED) {
  const { seats, error } = seatsFor(abbr);
  if (error) { check(false, `${abbr}: merge runs — ${error.message}`); continue; }

  check(seats.every(s => s.office && String(s.office).trim() !== "" && VALID_TYPES.has(s.type)),
    `${abbr}: every seat has a title and a valid type`);

  // no office may appear twice (the coveredKeys suppression contract)
  const counts = {};
  for (const s of seats) { const k = officeKind(s); if (k) counts[k] = (counts[k] || 0) + 1; }
  const dupes = Object.entries(counts).filter(([, n]) => n > 1).map(([k]) => k);
  check(dupes.length === 0, `${abbr}: no duplicate offices${dupes.length ? ` (duplicated: ${dupes.join(", ")})` : ""}`);

  // full STATE_RACES candidates are well-formed
  const cands = seats.flatMap(s => s.candidates || []);
  check(cands.every(c => c.name && VALID_PARTIES.has(c.party)),
    `${abbr}: every candidate has a name and valid party`);
}

// state-specific expectations
{
  const oh = seatsFor("OH").seats || [];
  check(oh.some(s => officeKind(s) === "senate-special"), "OH: has the special Senate election");
  const fl = seatsFor("FL").seats || [];
  check(fl.some(s => officeKind(s) === "senate-special"), "FL: has the special Senate election");
  check(fl.filter(s => officeKind(s) === "senate-special").every(s => Array.isArray(s.candidates)),
    "FL: the special comes from STATE_RACES (full candidate detail), not the generic entry");

  const wa = seatsFor("WA").seats || [];
  check(!wa.some(s => officeKind(s) === "senate"), "WA: no Senate race (not a Class 2 state)");
  check(!wa.some(s => officeKind(s) === "governor"), "WA: no Governor race in 2026");
  check(wa.some(s => officeKind(s) === "house"), "WA: has the U.S. House entry");

  const dc = seatsFor("DC").seats || [];
  check(!dc.some(s => officeKind(s) === "senate"), "DC: no Senate race");
  check(!dc.some(s => officeKind(s) === "governor"), "DC: no Governor race");
  check(dc.some(s => officeKind(s) === "delegate"), "DC: has the House Delegate race");
}

// ---------------------------------------------------------------
// type-value audit across every page (quirk #7: a typo like "upcooming"
// makes a race silently vanish from the grouped drawer)
// ---------------------------------------------------------------
console.log("\n— type-value audit —");
for (const page of ["index.html", "nc.html", "sc.html", "ga.html", "va.html", "md.html", "de.html", "nj.html", "ny.html", "ri.html", "nh.html", "ct.html", "vt.html", "me.html", "ma.html", "state.html"]) {
  const bad = [];
  for (const code of extractInlineScripts(page)) {
    for (const m of code.matchAll(/type\s*:\s*"([a-z]+)"/g)) {
      if (!VALID_TYPES.has(m[1])) bad.push(m[1]);
    }
  }
  check(bad.length === 0, `${page}: all type values are past/upcoming/scheduled${bad.length ? ` (bad: ${bad.join(", ")})` : ""}`);
}

summary("data-logic");
