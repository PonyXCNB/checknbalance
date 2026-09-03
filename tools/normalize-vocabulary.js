#!/usr/bin/env node
// normalize-vocabulary.js — one vocabulary for the things every page names differently.
//
// Found in the Sept 3, 2026 site self-review: 1,152 races across 46 pages carried 53 distinct
// "scope" strings for five ideas, five spellings of "(open seat)", two of "Federal · District",
// 620 candidate cards padded with empty strings, House titles that spell the state out on four
// pages and abbreviate it on 42, and a renderer whose ONLY behavioural test is /Ballot Measure/i —
// so a constitutional amendment whose scope said "State · Ballot Question" showed a voter
// "Candidates not yet announced." This script applies the mechanical part of the fix. Everything
// here is a pure text rewrite of a race or card's LABELS; it never touches a fact.
//
// Canonical grammar for scope:  <Level> · <Reach>[ · <Qualifier>]
//   Level     Federal | State | Judicial | Ballot Measure | Local
//   Reach     Statewide | District N | At-Large | County | House District N | Senate District N
//   Qualifier Primary | Runoff | Special | Retention
//
// Usage:  node tools/normalize-vocabulary.js          (rewrite in place, print a report)
//         node tools/normalize-vocabulary.js --check  (report only)
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const CHECK = process.argv.includes("--check");

// ── 1. Exact scope-string mapping (from the review's table) ─────────────────────────────────
const SCOPE_MAP = {
  "State · Statewide · Ballot Measure": "Ballot Measure · Statewide",
  "State · Statewide · Ballot Measures": "Ballot Measure · Statewide",
  "State · Statewide · ballot measures": "Ballot Measure · Statewide",
  "State · Ballot Question": "Ballot Measure · Statewide",
  "Statewide · Ballot Question": "Ballot Measure · Statewide",
  "State · Ballot Measure": "Ballot Measure · Statewide",
  "State · Statewide · Republican primary": "State · Statewide · Primary",
  "State · Statewide · Democratic primary": "State · Statewide · Primary",
  "State · Statewide · Party primaries": "State · Statewide · Primary",
  "Federal · Statewide · Democratic primary": "Federal · Statewide · Primary",
  "Federal · Statewide · Republican primary": "Federal · Statewide · Primary",
  "Judicial · Statewide · nonpartisan": "Judicial · Statewide",
  "Judicial · Statewide · partisan": "Judicial · Statewide",
  "Statewide · Nonpartisan": "Judicial · Statewide",          // nv Supreme Court; or.html handled below
  "State · Statewide · Nonpartisan": "Judicial · Statewide",  // wv
  "Judicial · Statewide · retention": "Judicial · Statewide · Retention",
  "State · Statewide · Education": "State · Statewide",
  "State · Statewide · nonpartisan": "State · Statewide",
  "State · District offices": "State · District",
  "Local · Countywide": "Local · County",
  "Local · Countywide · 2 seats": "Local · County",
  "Local · Countywide · 4 seats": "Local · County",
  "Local · Judicial District": "Judicial · District 6",
  "State · NC House 20": "State · House District 20",
  "State · NC Senate 7": "State · Senate District 7",
  "State · NC House 18 & 19": "State · House Districts 18 & 19",
};
// fl.html's House primaries carried "Federal · District · <Party> primary" — no district number.
// The renderer synthesises "Federal · District N" only when scope is absent, and those races'
// titles already say which primary they are, so the scope key is simply removed (see step c).
const NUMBERLESS_DISTRICT_RE = /scope: "Federal · District(?: · (?:Democratic|Republican) primary)?",\s*/g;
// Judicial district scopes: "Judicial · Court of Appeals District N · nonpartisan" -> "Judicial · District N"
const JUD_DIST_RE = /"Judicial · Court of Appeals District (\d+) · nonpartisan"/g;
// Nebraska education boards: "Education · … District N · nonpartisan[ · special]" -> "State · District N[ · Special]"
const EDU_DIST_RE = /"Education · [^"]*District (\d+) · nonpartisan( · special)?"/g;

// ── 2. Per-page overrides that need the office title to decide ──────────────────────────────
function classifyBareStatewide(office) {
  if (/U\.S\. Senat|President/i.test(office)) return "Federal · Statewide";
  if (/Amendment|Measure|Question|Proposition|Initiative/i.test(office)) return "Ballot Measure · Statewide";
  if (/Supreme Court|Court of Appeals|Justice/i.test(office)) return "Judicial · Statewide";
  return "State · Statewide";
}

const AT_LARGE = new Set(["de", "nd", "sd", "vt", "wy"]);
const SPECIAL_TAGS = [/\(Special\)/g, /\(special election\)/g, /\(Special election\)/g, /\(SPECIAL\)/g, /\(Special Election\)/g];

const pages = fs.readdirSync(ROOT).filter(f => /^[a-z]{2}\.html$/.test(f)).sort();
const report = [];
let totalChanged = 0;

for (const page of pages) {
  const ab = page.slice(0, 2);
  const file = path.join(ROOT, page);
  const before = fs.readFileSync(file, "utf8");
  let s = before;
  const changes = [];
  const count = (re) => (s.match(re) || []).length;

  // (a) exact scope mappings
  for (const [from, to] of Object.entries(SCOPE_MAP)) {
    const re = new RegExp('scope: "' + from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '"', "g");
    const n = count(re);
    if (n) { s = s.replace(re, 'scope: "' + to + '"'); changes.push(`${n}× scope "${from}" → "${to}"`); }
  }
  {
    const n = count(JUD_DIST_RE);
    if (n) { s = s.replace(JUD_DIST_RE, '"Judicial · District $1"'); changes.push(`${n}× judicial district scope`); }
    const m = count(EDU_DIST_RE);
    if (m) { s = s.replace(EDU_DIST_RE, (_, d, sp) => `"State · District ${d}${sp ? " · Special" : ""}"`); changes.push(`${m}× education-board district scope`); }
  }

  // (b) bare "Statewide" — needs the office on the same race. Two layouts exist: same line, or
  //     scope on its own line followed within a few lines by office:.
  {
    let n = 0;
    s = s.replace(/scope: "Statewide",(\s+)office: "([^"]*)"/g, (_, ws, office) => { n++; return `scope: "${classifyBareStatewide(office)}",${ws}office: "${office}"`; });
    // or.html's six-office nonpartisan card is State, not Judicial
    if (ab === "or") s = s.replace(/scope: "Judicial · Statewide",(\s+)office: "([^"]*(?:Labor|Superintendent|six)[^"]*)"/g, (_, ws, o) => `scope: "State · Statewide",${ws}office: "${o}"`);
    // "State · Judicial" (in/ky/oh) — the reach depends on the court named in the office
    let j = 0;
    s = s.replace(/scope: "State · Judicial",(\s+)office: "([^"]*)"/g, (_, ws, office) => {
      j++;
      const dist = office.match(/(\d+)(?:st|nd|rd|th) District/);
      const q = /Retention/i.test(office) ? " · Retention" : /\(special\)/i.test(office) ? " · Special" : "";
      const scope = dist ? `Judicial · District ${dist[1]}${q}` : `Judicial · Statewide${q}`;
      return `scope: "${scope}",${ws}office: "${office}"`;
    });
    if (j) changes.push(`${j}× "State · Judicial" classified by court`);
    if (n) changes.push(`${n}× bare "Statewide" classified by office`);
    const left = count(/scope: "Statewide"/g);
    if (left) changes.push(`⚠ ${left}× bare "Statewide" could NOT be classified (office not on the same line)`);
  }

  // (c) "Federal · District" with no number on House races — delete so the renderer synthesises
  //     "Federal · District N". The primary variants keep a Primary qualifier via the renderer? No:
  //     the renderer only synthesises when scope is falsy, so a primary must carry its own number.
  //     We drop the bare form and leave "Federal · District · Primary" for a per-district pass below.
  {
    const n = count(NUMBERLESS_DISTRICT_RE);
    if (n) { s = s.replace(NUMBERLESS_DISTRICT_RE, ""); changes.push(`${n}× numberless "Federal · District…" scope removed (renderer supplies "Federal · District N")`); }
  }

  // (d) At-large states: explicit "Federal · At-Large" on every House race object, and a uniform title
  if (AT_LARGE.has(ab)) {
    const m = s.match(/const HOUSE_RACES = \{([\s\S]*?)\n\};/);
    if (m) {
      let block = m[1], k = 0;
      block = block.replace(/scope: "Federal · Statewide( · Primary)?"/g, (_, q) => `scope: "Federal · At-Large${q || ""}"`);
      // (The lookahead covers the whitespace too, or a re-run would insert a second scope key.)
      // Race objects come in two layouts — `{ date: …, type: …,` on one line, or `{` alone with
      // date/type on the next line(s). Either way the scope goes right after type.
      block = block.replace(/(date: "[^"]+",\s*type: "[^"]+",)(?!\s*scope:)/g, (all, head) => { k++; return `${head} scope: "Federal · At-Large",`; });
      block = block.replace(/(scope: "Federal · At-Large(?: · Primary)?",)(?:\s*scope: "Federal · At-Large",)+\s*/g, "$1 ");   // repair any earlier duplicates
      // A race whose own scope came AFTER its note got a second, plain one added above; drop the added key.
      block = block.replace(/scope: "Federal · At-Large", (?=[^{}]*?scope: ")/g, () => { k--; return ""; });
      block = block.replace(/name: "U\.S\. House — [A-Za-z ]+ (?:At-Large|\(at-large\))"/, `name: "U.S. House — ${ab.toUpperCase()} At-Large"`);
      s = s.replace(m[0], `const HOUSE_RACES = {${block}\n};`);
      changes.push(`at-large: House race scopes → "Federal · At-Large"${k ? ` (${k} added)` : ""}, title → "U.S. House — ${ab.toUpperCase()} At-Large"`);
    }
  }

  // (e) House district titles: full state name → postal abbreviation (la mi ut wa)
  {
    const fullName = (s.match(/<title>([A-Za-z ]+?) Elections Hub<\/title>/) || [])[1];
    if (fullName) {
      const re = new RegExp(`name: "U\\.S\\. House — ${fullName} District (\\d+)"`, "g");
      const n = count(re);
      if (n) { s = s.replace(re, `name: "U.S. House — ${ab.toUpperCase()} District $1"`); changes.push(`${n}× House title "${fullName} District N" → "${ab.toUpperCase()} District N"`); }
    }
  }

  // (f) Case and spelling of the open-seat and special tags in office titles
  {
    const n = count(/\(open seat\)/g);
    if (n) { s = s.replace(/\(open seat\)/g, "(OPEN SEAT)"); changes.push(`${n}× "(open seat)" → "(OPEN SEAT)"`); }
    let m = 0;
    for (const re of SPECIAL_TAGS) { m += count(re); s = s.replace(re, "(SPECIAL ELECTION)"); }
    if (m) changes.push(`${m}× special-election tag → "(SPECIAL ELECTION)"`);
  }

  // (g) Empty-string padding inside the four card arrays. The arrays are scanned to their matching
  //     bracket with string literals respected — a "[Verify]" inside an item must not end the array.
  {
    let n = 0;
    const re = /(positions|differentiators|supporters|opponents): \[/g;
    let out = "", last = 0, m;
    while ((m = re.exec(s))) {
      const start = m.index + m[0].length;
      let i = start, depth = 1, inStr = false;
      for (; i < s.length && depth > 0; i++) {
        const ch = s[i];
        if (inStr) { if (ch === "\\") i++; else if (ch === '"') inStr = false; }
        else if (ch === '"') inStr = true;
        else if (ch === "[") depth++;
        else if (ch === "]") depth--;
      }
      const end = i - 1;                       // index of the closing bracket
      const body = s.slice(start, end);
      out += s.slice(last, start);
      if (/""/.test(body)) {
        const items = body.match(/"(?:[^"\\]|\\.)*"/g) || [];
        const kept = items.filter(x => x !== '""');
        n += items.length - kept.length;
        out += kept.join(",");
      } else out += body;
      last = end;
      re.lastIndex = end;
    }
    s = out + s.slice(last);
    if (n) changes.push(`${n} empty-string pads removed`);
  }

  // (h) The ct.html "(R)" name suffixes duplicate the party tag
  if (ab === "ct") {
    const n = count(/name: "([^"]+) \(R\)"/g);
    if (n) { s = s.replace(/name: "([^"]+) \(R\)"/g, 'name: "$1"'); changes.push(`${n}× "(R)" stripped from candidate names`); }
  }

  if (s !== before) {
    totalChanged++;
    if (!CHECK) fs.writeFileSync(file, s);
  }
  if (changes.length) report.push(`${page}\n    ` + changes.join("\n    "));
}

console.log(report.join("\n") || "nothing to change");
console.log(`\n${totalChanged} page(s) ${CHECK ? "would change" : "rewritten"}`);
