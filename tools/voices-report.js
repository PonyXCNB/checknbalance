// tools/voices-report.js — inventory candidates MISSING supporters/opponents ("voices").
//
// The owner (July 24, 2026) made voices a required field for every candidate in an
// UPCOMING race: the side-by-side "Supporters say" / "Opponents say" blocks are a
// core function of the site, not a nice-to-have. This report finds the gaps cheaply
// so refresh runs never have to read a whole state page to find them.
//
// Usage:
//   node tools/voices-report.js            # all built pages, summary + detail
//   node tools/voices-report.js ny.html    # one page
//   node tools/voices-report.js --summary  # counts only
"use strict";
const path = require("path");
const { extractInlineScripts, cutAtD3, runScript } = require(path.join(__dirname, "..", "tests", "lib"));

const ALL_PAGES = ["nc.html", "sc.html", "ga.html", "va.html", "md.html", "de.html", "nj.html",
  "ny.html", "ri.html", "nh.html", "ct.html", "vt.html", "me.html", "ma.html", "wv.html"];

const args = process.argv.slice(2);
const summaryOnly = args.includes("--summary");
const pages = args.filter(a => a.endsWith(".html"));
const targets = pages.length ? pages : ALL_PAGES;

// Walk every race a page defines (STATEWIDE + HOUSE_RACES + LOCAL_RACES), not just
// what one county merges to, so nothing hides behind a district.
function racesFor(x) {
  const out = [];
  for (const r of x.STATEWIDE || []) out.push({ office: r.office, ...r });
  for (const [d, district] of Object.entries(x.HOUSE_RACES || {})) {
    for (const r of district.races || []) out.push({ office: r.office || district.name, ...r });
  }
  for (const [fips, list] of Object.entries(x.LOCAL_RACES || {})) {
    for (const r of list || []) out.push({ office: r.office || `local ${fips}`, ...r });
  }
  return out;
}

const totals = {};
for (const page of targets) {
  const code = extractInlineScripts(page)[0];
  const extra = `
    __exports.STATEWIDE = typeof STATEWIDE !== "undefined" ? STATEWIDE : [];
    __exports.HOUSE_RACES = typeof HOUSE_RACES !== "undefined" ? HOUSE_RACES : {};
    __exports.LOCAL_RACES = typeof LOCAL_RACES !== "undefined" ? LOCAL_RACES : {};
  `;
  const { sandbox, error } = runScript(cutAtD3(code), { extra });
  if (error) { console.log(`${page}: ERROR ${error.message}`); continue; }

  const gaps = [];
  let upcomingCands = 0;
  for (const race of racesFor(sandbox.__exports)) {
    // Past races intentionally carry empty voices (nc.html's own convention) —
    // the owner's requirement is about races voters can still act on.
    if (race.type !== "upcoming" && race.type !== "scheduled") continue;
    for (const c of race.candidates || []) {
      upcomingCands++;
      const sup = (c.supporters || []).filter(Boolean).length;
      const opp = (c.opponents || []).filter(Boolean).length;
      if (sup === 0 || opp === 0) {
        gaps.push({ office: race.office, name: c.name, sup, opp });
      }
    }
  }
  totals[page] = { gaps: gaps.length, of: upcomingCands };
  if (!summaryOnly && gaps.length) {
    console.log(`\n=== ${page} — ${gaps.length} of ${upcomingCands} upcoming-race candidates missing voices ===`);
    for (const g of gaps) {
      const miss = g.sup === 0 && g.opp === 0 ? "both" : g.sup === 0 ? "supporters" : "opponents";
      console.log(`${page} | ${g.office} | ${g.name} | missing: ${miss}`);
    }
  }
}

console.log("\n=== VOICES GAP SUMMARY (upcoming/scheduled races only) ===");
let g = 0, o = 0;
for (const [page, t] of Object.entries(totals)) {
  console.log(`${page.padEnd(10)} ${String(t.gaps).padStart(4)} missing / ${t.of} candidates`);
  g += t.gaps; o += t.of;
}
console.log(`${"TOTAL".padEnd(10)} ${String(g).padStart(4)} missing / ${o} candidates`);
