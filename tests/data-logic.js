// Test 3 — Data logic tests: run the pages' data + merge logic in Node and
// assert on the results.
//
//   nc.html    — getCountyElections("37129") (New Hanover) returns the full
//                merged race list with zero blank titles, valid types, and
//                well-formed candidates.
//   state.html — the openPanel merge ([...STATE_RACES[abbr], ...buildSeats(abbr)])
//                never shows the same office twice, has the right specials for
//                OH/FL, no Senate/Governor for WA, and delegate-only for DC.
//
// Run:  node tests/data-logic.js
"use strict";
const { extractInlineScripts, cutAtD3, runScript, makeChecker } = require("./lib");

const { check, summary } = makeChecker();
const VALID_TYPES = new Set(["past", "upcoming", "scheduled"]);
const VALID_PARTIES = new Set(["D", "R", "I", "L", "G"]);

// If this number changes because races were legitimately added/removed,
// update it here (and SITE_META.lastUpdated in nc.html).
const EXPECTED_NEW_HANOVER_RACES = 15;

// ---------------------------------------------------------------
// nc.html
// ---------------------------------------------------------------
console.log("— nc.html —");
{
  const code = extractInlineScripts("nc.html")[0]; // script #1 = data + logic, no d3
  const extra = `
    __exports.getCountyElections = getCountyElections;
    __exports.COUNTIES = COUNTIES;
    __exports.STATEWIDE = STATEWIDE;
    __exports.HOUSE_RACES = HOUSE_RACES;
    __exports.LOCAL_RACES = LOCAL_RACES;
    __exports.SITE_META = SITE_META;
  `;
  const { sandbox, error } = runScript(cutAtD3(code), { extra });
  check(!error, `nc.html data script runs${error ? ` — ${error.message}` : ""}`);
  if (!error) {
    const x = sandbox.__exports;
    check(Object.keys(x.COUNTIES).length === 100, "COUNTIES has all 100 NC counties");
    check(typeof x.SITE_META.lastUpdated === "string" && x.SITE_META.lastUpdated.length > 0,
      "SITE_META.lastUpdated is set");

    const result = x.getCountyElections("37129"); // New Hanover
    const races = (result && result.elections) || [];
    check(Array.isArray(result && result.elections), "getCountyElections('37129') returns { county, district, elections }");
    check(races.length === EXPECTED_NEW_HANOVER_RACES,
      `New Hanover has ${EXPECTED_NEW_HANOVER_RACES} races (got ${races.length})`);
    check(races.every(r => r.office && String(r.office).trim() !== ""),
      "every New Hanover race has a non-blank title");
    check(races.every(r => VALID_TYPES.has(r.type)),
      "every New Hanover race type is past/upcoming/scheduled");
    const allCandidates = races.flatMap(r => r.candidates || []);
    check(allCandidates.every(c => c.name && VALID_PARTIES.has(c.party)),
      "every New Hanover candidate has a name and a valid party (D/R/I/L/G)");

    check(x.getCountyElections("99999") === null, "unknown FIPS returns null");

    // every county in the state resolves and every race everywhere has a title + valid type
    let badCounty = null;
    for (const fips of Object.keys(x.COUNTIES)) {
      const res = x.getCountyElections(fips);
      const list = res && res.elections;
      if (!list || !list.every(r => r.office && VALID_TYPES.has(r.type))) { badCounty = fips; break; }
    }
    check(badCounty === null,
      `all 100 counties merge cleanly with titled, valid-type races${badCounty ? ` (bad: ${badCounty})` : ""}`);
  }
}

// ---------------------------------------------------------------
// state.html
// ---------------------------------------------------------------
console.log("\n— state.html —");
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

const FEATURED_ABBRS = ["GA", "AL", "SC", "FL", "NY", "VA", "MD", "DC", "NJ", "DE"];
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
for (const page of ["index.html", "nc.html", "state.html"]) {
  const bad = [];
  for (const code of extractInlineScripts(page)) {
    for (const m of code.matchAll(/type\s*:\s*"([a-z]+)"/g)) {
      if (!VALID_TYPES.has(m[1])) bad.push(m[1]);
    }
  }
  check(bad.length === 0, `${page}: all type values are past/upcoming/scheduled${bad.length ? ` (bad: ${bad.join(", ")})` : ""}`);
}

summary("data-logic");
