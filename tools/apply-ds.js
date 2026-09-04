#!/usr/bin/env node
/**
 * apply-ds.js — add `ds` (the full list of U.S. House districts a county contains)
 * to a state page's COUNTIES table.
 *
 * WHY THIS EXISTS
 * ---------------
 * COUNTIES stores `d`, the county's POPULATION-PLURALITY congressional district. That is
 * what shades the map. But a voter in a SPLIT county may be in a different district than
 * their county's plurality, and `getCountyElections` shows every district listed in `ds`.
 * A page with no `ds` at all shows split-county voters exactly ONE U.S. House race — the
 * defect found on the flagship on Sept 3, 2026 (lesson #29). `tools/ds-merge-audit.js`
 * lists pages that carry no `ds`; this tool fills them in.
 *
 * USAGE
 *   node tools/apply-ds.js <page.html> <splits.json> [--dry]
 *
 * splits.json is  { "<5-digit FIPS>": [d1, d2, ...], ... }  — the FULL district list for
 * that county, in any order. The county's existing `d` MUST appear in its list; the tool
 * refuses to write otherwise, because that would mean the page and the map disagree.
 *
 * Idempotent: a county that already carries the same `ds` is left alone and reported as
 * "already applied". A county whose existing `ds` DIFFERS is rewritten and reported.
 * Refuses to write the file if any FIPS in the JSON is not in the page (a typo must not
 * silently no-op — the same rule that caught the apply-voices.js bug on Aug 3, 2026).
 *
 * Matches both COUNTIES spellings in use on the site:
 *   "45019":{n:"Charleston",d:6}          (compact)
 *   "39035": { n: "Cuyahoga", d: 11 }     (spaced)
 * and preserves whichever one the page already uses.
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2).filter(a => a !== "--dry");
const DRY = process.argv.includes("--dry");

if (args.length !== 2) {
  console.error("usage: node tools/apply-ds.js <page.html> <splits.json> [--dry]");
  process.exit(2);
}

const pagePath = path.resolve(args[0]);
const jsonPath = path.resolve(args[1]);
const pageName = path.basename(pagePath);

let html = fs.readFileSync(pagePath, "utf8");
const splits = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const applied = [];
const already = [];
const changed = [];
const missing = [];
const conflicts = [];

for (const [fips, listRaw] of Object.entries(splits)) {
  if (!/^\d{5}$/.test(fips)) {
    conflicts.push(`${fips}: not a 5-digit FIPS`);
    continue;
  }
  const list = [...new Set(listRaw.map(Number))];
  if (list.length < 2 || list.some(n => !Number.isInteger(n) || n < 1)) {
    conflicts.push(`${fips}: ds must be two or more positive district numbers`);
    continue;
  }

  // Capture the whole entry so we can rewrite it while keeping the page's own spacing.
  const entry = new RegExp(
    `("${fips}"\\s*:\\s*\\{\\s*n:\\s*"[^"]*"\\s*,\\s*d:\\s*)(\\d+)((?:\\s*,\\s*ds:\\s*\\[[^\\]]*\\])?)(\\s*\\})`
  );
  const m = html.match(entry);
  if (!m) { missing.push(fips); continue; }

  const d = Number(m[2]);
  if (!list.includes(d)) {
    conflicts.push(`${fips}: page plurality d=${d} is not in ds ${JSON.stringify(list)}`);
    continue;
  }

  // House style: plurality district first, then the rest ascending.
  const ordered = [d, ...list.filter(x => x !== d).sort((a, b) => a - b)];
  const rendered = `[${ordered.join(", ")}]`;

  if (m[3]) {
    const existing = m[3].match(/\[([^\]]*)\]/)[1]
      .split(",").map(s => Number(s.trim())).filter(n => !Number.isNaN(n));
    if (existing.length === ordered.length && existing.every((v, i) => v === ordered[i])) {
      already.push(fips);
      continue;
    }
    changed.push(`${fips}: [${existing.join(", ")}] -> ${rendered}`);
  } else {
    applied.push(`${fips}: ${rendered}`);
  }

  html = html.replace(entry, `$1$2, ds: ${rendered}$4`);
}

console.log(`\n=== apply-ds: ${pageName} ===`);
if (applied.length) {
  console.log(`  added ds to ${applied.length} counties:`);
  applied.forEach(s => console.log("    " + s));
}
if (changed.length) {
  console.log(`  CHANGED ds on ${changed.length} counties:`);
  changed.forEach(s => console.log("    " + s));
}
if (already.length) console.log(`  already applied: ${already.length}`);

let fatal = false;
if (missing.length) {
  console.error(`  !! ${missing.length} FIPS not found in ${pageName}: ${missing.join(", ")}`);
  fatal = true;
}
if (conflicts.length) {
  console.error(`  !! ${conflicts.length} conflicts:`);
  conflicts.forEach(s => console.error("    " + s));
  fatal = true;
}
if (fatal) {
  console.error(`  REFUSING TO WRITE ${pageName} — fix the input first.`);
  process.exit(1);
}

if (DRY) {
  console.log("  (--dry: nothing written)");
} else if (applied.length || changed.length) {
  fs.writeFileSync(pagePath, html);
  console.log(`  wrote ${pageName}`);
} else {
  console.log("  nothing to do");
}
