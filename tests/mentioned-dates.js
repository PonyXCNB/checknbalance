// mentioned-dates.js — the prose-date scanner behind verify-report.js's second calendar.
//
// The defect it exists to prevent: on Sept 8, 2026 the [Verify] report's calendar printed
// "(none)" while New Hampshire was voting. Every NH primary card is dated Nov 3 and says
// "Sept 8" only in prose, and the calendar reads `race.date` and nothing else. The last
// assertion here is the one that matters — it goes to the real pages and proves the
// scanner still sees a date that the race-date calendar cannot.
"use strict";
const path = require("path");
const { makeChecker } = require(path.join(__dirname, "lib.js"));
const { scanText } = require(path.join(__dirname, "..", "tools", "mentioned-dates.js"));
const { check, summary } = makeChecker();

const isos = s => scanText(s).map(h => h.iso);
const has = (s, iso) => isos(s).includes(iso);

// --- finds real election events ------------------------------------------------
check(has("Delaware's primary is Sept 15, 2026 (filing deadline July 14)", "2026-09-15"),
  "finds a primary date written into a note");
check(has("Rhode Island votes in its primary on Sept 9", "2026-09-09"),
  "a bare month/day with no year resolves to the current cycle");
check(has("He filed to withdraw on Aug 3, 2026, the withdrawal deadline", "2026-08-03"),
  "finds a withdrawal deadline");
check(has("The State Board canvasses the returns on Sept 1", "2026-09-01"),
  "finds a canvass date");

// --- rejects the noise that made the first version unusable ---------------------
check(isos("$369,303 on hand as of July 27, 2026 after winning a primary").length === 0,
  "a campaign-finance 'as of' date is not an election event, even beside the word primary");
check(isos("Raised $2.1M through June 30, 2026 ahead of the primary").length === 0,
  "a reporting-period 'through' date is not an election event");
check(isos("A retired teacher who moved to the district in March 2019").length === 0,
  "a biographical date with no election language nearby is ignored");
check(isos("Turnout in the Nov 3, 2026 general election").length === 0,
  "the general election itself is never a finding");
check(isos("The seat has been Republican since the Jan 6, 1997 swearing-in") .length === 0 ||
      !has("The seat has been Republican since the Jan 6, 1997 swearing-in", "2026-01-06"),
  "an explicit year is kept rather than being pulled into this cycle");

// --- resolution ------------------------------------------------------------------
check(scanText("Won the Sept 1 primary 64.8%")[0].settled === true,
  "a date whose sentence reports the outcome is marked settled");
check(scanText("Rhode Island votes in its primary on Sept 9")[0].settled === false,
  "a date with no outcome language is marked unsettled");

// --- invalid dates are not invented ---------------------------------------------
check(isos("the primary on Feb 30, 2026").length === 0, "Feb 30 is rejected, not rolled into March");

// --- and the real regression: the pages themselves --------------------------------
// nh.html's primary is Sept 8, 2026 and NO race on the page carries that as its `date`.
// If this ever fails because the page gained a Sept 8 race date, that is fine — but the
// scanner must still be the thing that would have caught it.
const { extractInlineScripts, cutAtD3, runScript } = require(path.join(__dirname, "lib.js"));
function load(page) {
  const extra = `
    __exports.STATEWIDE = typeof STATEWIDE !== "undefined" ? STATEWIDE : [];
    __exports.HOUSE_RACES = typeof HOUSE_RACES !== "undefined" ? HOUSE_RACES : {};
  `;
  const { sandbox, error } = runScript(cutAtD3(extractInlineScripts(page)[0]), { extra });
  if (error) throw new Error(page + ": " + error.message);
  return sandbox.__exports;
}
const nh = load("nh.html");
const allRaces = [...nh.STATEWIDE, ...Object.values(nh.HOUSE_RACES).flatMap(d => d.races)];
const texts = [];
for (const r of allRaces) {
  texts.push(r.note);
  for (const c of r.candidates || []) {
    for (const f of ["positions", "differentiators", "supporters", "opponents"]) {
      for (const v of c[f] || []) texts.push(v);
    }
  }
}
const proseHits = texts.flatMap(t => scanText(t)).filter(h => h.iso === "2026-09-08").length;
check(proseHits > 0, `nh.html: the Sept 8 primary is found in prose (${proseHits} mentions)`);

summary("mentioned-dates");
