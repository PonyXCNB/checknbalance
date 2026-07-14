// verify-report.js — compact inventory of all [Verify] markers and upcoming
// race dates across the built state pages. The weekly refresh reads THIS
// (a few KB) instead of the full HTML pages (~550KB), then makes targeted
// edits. Also handy for a quick health check:  node tools/verify-report.js
"use strict";
const path = require("path");
const { extractInlineScripts, cutAtD3, runScript } = require(path.join(__dirname, "..", "tests", "lib.js"));

const PAGES = ["nc.html", "sc.html", "ga.html", "va.html", "md.html", "de.html", "nj.html", "ny.html"];

function loadData(page) {
  const code = extractInlineScripts(page)[0];
  const extra = `
    __exports.STATEWIDE = typeof STATEWIDE !== "undefined" ? STATEWIDE : [];
    __exports.HOUSE_RACES = typeof HOUSE_RACES !== "undefined" ? HOUSE_RACES : {};
    __exports.LOCAL_RACES = typeof LOCAL_RACES !== "undefined" ? LOCAL_RACES : {};
  `;
  const { sandbox, error } = runScript(cutAtD3(code), { extra });
  if (error) throw new Error(page + ": " + error.message);
  return sandbox.__exports;
}

function scanRace(page, office, race, out) {
  const hits = [];
  const check = (owner, field, val) => {
    if (typeof val === "string" && val.includes("[Verify")) hits.push({ owner, field, text: val });
  };
  check("(race)", "note", race.note);
  for (const c of race.candidates || []) {
    for (const f of ["positions", "differentiators", "supporters", "opponents"]) {
      (c[f] || []).forEach(v => check(c.name, f, v));
    }
  }
  if (hits.length) out.push({ page, office: office || race.office, date: race.date, type: race.type, hits });
  // calendar: anything upcoming that isn't the Nov 3 general is time-sensitive
  if (race.type === "upcoming" && race.date && race.date !== "Nov 3, 2026") {
    out.calendar.push({ page, office: office || race.office, date: race.date });
  }
}

const out = [];
out.calendar = [];
const counts = {};
for (const page of PAGES) {
  const d = loadData(page);
  const before = out.length;
  for (const r of d.STATEWIDE) scanRace(page, r.office, r, out);
  for (const dist of Object.values(d.HOUSE_RACES)) for (const r of dist.races) scanRace(page, dist.name, r, out);
  for (const races of Object.values(d.LOCAL_RACES)) for (const r of races) scanRace(page, r.office, r, out);
  counts[page] = out.slice(before).reduce((n, e) => n + e.hits.length, 0);
}

console.log("=== [Verify] MARKER REPORT ===");
console.log("Totals by page:", JSON.stringify(counts), "— grand total:", Object.values(counts).reduce((a, b) => a + b, 0));
console.log("\n=== TIME-SENSITIVE (upcoming, non-general dates) ===");
out.calendar.forEach(c => console.log(`${c.date} | ${c.page} | ${c.office}`));
console.log("\n=== MARKERS (page | office | who | field | text) ===");
for (const e of out) {
  for (const h of e.hits) {
    console.log(`${e.page} | ${e.office} | ${h.owner} | ${h.field} | ${h.text.slice(0, 140)}`);
  }
}
