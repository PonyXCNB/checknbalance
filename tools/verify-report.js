// verify-report.js — compact inventory of all [Verify] markers and upcoming
// race dates across the built state pages. The weekly refresh reads THIS
// (a few KB) instead of the full HTML pages (~550KB), then makes targeted
// edits. Also handy for a quick health check:  node tools/verify-report.js
"use strict";
const path = require("path");
const { extractInlineScripts, cutAtD3, runScript } = require(path.join(__dirname, "..", "tests", "lib.js"));
const { scanText } = require(path.join(__dirname, "mentioned-dates.js"));

const PAGES = ["nc.html", "sc.html", "ga.html", "va.html", "md.html", "de.html", "nj.html", "ny.html", "ri.html", "nh.html", "ct.html", "vt.html", "me.html", "ma.html", "wv.html", "oh.html", "ky.html", "in.html", "ia.html", "il.html", "ms.html", "ar.html", "ne.html", "nm.html", "co.html", "or.html", "nv.html", "sd.html", "id.html", "mt.html", "pa.html", "tn.html", "hi.html", "al.html", "wi.html", "mn.html", "nd.html", "ks.html", "ok.html", "az.html", "fl.html", "wy.html", "ut.html", "wa.html", "mi.html", "la.html", "ak.html"];

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

  // Dates that live only in prose. See tools/mentioned-dates.js for why the calendar
  // below cannot see them and what the scanner filters out.
  const texts = [race.note];
  for (const c of race.candidates || []) {
    for (const f of ["positions", "differentiators", "supporters", "opponents"]) {
      for (const v of c[f] || []) texts.push(v);
    }
  }
  for (const t of texts) {
    for (const hit of scanText(t)) {
      const key = page + "|" + hit.iso;
      const e = out.mentions.get(key) || { page, iso: hit.iso, n: 0, open: 0, sample: "", office: office || race.office };
      e.n++;
      if (!hit.settled) { e.open++; if (!e.sample) e.sample = t.slice(0, 110); }
      if (!e.sample) e.sample = t.slice(0, 110);
      out.mentions.set(key, e);
    }
  }
  // Calendar: any race still ahead of us that isn't the Nov 3 general.
  // ⚠ This MUST include `scheduled`, not just `upcoming`. It checked only `upcoming`
  // until Aug 9, 2026, and by then every `upcoming` race was dated Nov 3 — so the
  // section printed EMPTY on every run and the calendar quietly stopped existing.
  // Pending primaries and runoffs are typed `scheduled`, which is exactly the set
  // a refresh run needs to see.
  if ((race.type === "upcoming" || race.type === "scheduled") &&
      race.date && race.date !== "Nov 3, 2026") {
    out.calendar.push({ page, office: office || race.office, date: race.date, type: race.type });
  }
}

const out = [];
out.calendar = [];
out.mentions = new Map();
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
console.log("\n=== TIME-SENSITIVE (upcoming/scheduled, non-general dates) ===");
// Sort chronologically and mark anything already in the past — a date that has come and
// gone but is still typed `scheduled` is a stale card, which is its own kind of finding.
const TODAY = new Date();
const dated = out.calendar
  .map(c => ({ ...c, ts: new Date(c.date).getTime() }))
  .sort((a, b) => (isNaN(a.ts) ? 1 : isNaN(b.ts) ? -1 : a.ts - b.ts));
if (!dated.length) console.log("(none)");
for (const c of dated) {
  const past = !isNaN(c.ts) && c.ts < TODAY.getTime() ? "  ⚠ DATE HAS PASSED — refresh this card" : "";
  console.log(`${c.date} | ${c.page} | ${c.office} [${c.type}]${past}`);
}
// Election dates written into a note rather than into a race's own `date` field. The
// window is the last 14 days (so a primary that has happened keeps shouting until its
// refresh lands) and the next 30 (so the run before an election can prepare). A passed
// date whose sentence already reports its outcome is hidden — `--all` shows everything,
// `--days=N` widens both halves of the window.
const ALL = process.argv.includes("--all");
const DAYS = Number((process.argv.find(a => a.startsWith("--days=")) || "").slice(7)) || 0;
const todayISO = new Date().toISOString().slice(0, 10);
const lo = new Date(Date.now() - (DAYS || 14) * 864e5).toISOString().slice(0, 10);
const hi = new Date(Date.now() + (DAYS || 30) * 864e5).toISOString().slice(0, 10);
console.log(`\n=== ELECTION DATES MENTIONED IN RACE TEXT (${lo} .. ${hi}) ===`);
const near = [...out.mentions.values()]
  .filter(m => m.iso >= lo && m.iso <= hi)
  .filter(m => ALL || m.iso >= todayISO || m.open > 0)
  .sort((a, b) => (a.iso < b.iso ? -1 : a.iso > b.iso ? 1 : a.page < b.page ? -1 : 1));
if (!near.length) console.log("(none)");
for (const m of near) {
  const flag = m.iso < todayISO ? `⚠ PASSED — ${m.open} of ${m.n} mention(s) still read as pending`
             : m.iso === todayISO ? "⚠ TODAY" : "upcoming";
  console.log(`${m.iso} | ${m.page} | ${m.n} mention${m.n === 1 ? "" : "s"} | ${flag}`);
  console.log(`             ${m.office} — "${m.sample}"`);
}

console.log("\n=== MARKERS (page | office | who | field | text) ===");
for (const e of out) {
  for (const h of e.hits) {
    console.log(`${e.page} | ${e.office} | ${h.owner} | ${h.field} | ${h.text.slice(0, 140)}`);
  }
}
