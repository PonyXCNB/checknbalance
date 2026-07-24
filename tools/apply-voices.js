// tools/apply-voices.js — inject researched "voices" (supporters/opponents) into a
// state page WITHOUT reformatting the rest of the file.
//
// Why this exists: the owner made voices required for every candidate in an upcoming
// race (July 24, 2026). Filling ~65 of them by hand-editing HTML is slow and error-prone,
// and re-serializing the whole data block would reflow thousands of unrelated lines.
// This does a targeted text substitution: it scans the file top-to-bottom tracking which
// race each candidate belongs to, and only rewrites the `"supporters": []` /
// `"opponents": []` pair belonging to a candidate we have researched data for.
//
// It is deliberately CONSERVATIVE:
//   - only touches candidates inside races whose type is "upcoming"
//   - only touches a candidate whose (office, name) pair is in the data file
//   - only overwrites arrays that are currently EMPTY (never clobbers existing voices)
//   - reports every key it could not place, so silent no-ops are impossible
//
// Usage: node tools/apply-voices.js <page.html> <voices.json> [--dry]
//
// voices.json shape:
//   { "<office>": { "<candidate name>": { "supporters": [...], "opponents": [...] } } }
// For U.S. House races the office key is the DISTRICT name, e.g.
//   "U.S. House — NY District 17".
"use strict";
const fs = require("fs");

const [, , pageArg, dataArg, ...flags] = process.argv;
if (!pageArg || !dataArg) {
  console.error("Usage: node tools/apply-voices.js <page.html> <voices.json> [--dry]");
  process.exit(2);
}
const dry = flags.includes("--dry");

let text = fs.readFileSync(pageArg, "utf8");
const VOICES = JSON.parse(fs.readFileSync(dataArg, "utf8"));

// Track which (office, name) pairs we actually placed, so we can report misses.
const wanted = new Set();
for (const office of Object.keys(VOICES)) {
  for (const name of Object.keys(VOICES[office])) wanted.add(`${office}||${name}`);
}
const placed = new Set();

// Scan for the structural tokens in document order. The page is JSON-ish: quoted keys,
// one per line. A district's own "name" is what supplies the office for House races,
// so we distinguish it from a candidate "name" by its shape.
const TOKEN = /"(?:office|type|name)":\s*"((?:[^"\\]|\\.)*)"/g;
const DISTRICT_NAME = /^U\.S\. House — [A-Z]{2} District \d+/;

let office = null;    // current race office (statewide) or district name (House)
let type = null;      // current race type
const jobs = [];      // { name, office, afterIndex }

let m;
while ((m = TOKEN.exec(text)) !== null) {
  const key = m[0].slice(1, m[0].indexOf('"', 1));
  // Unescape: names like  "Manual \"Jomo\" Williams"  must compare against the real
  // string, not the raw escaped source text.
  let value;
  try { value = JSON.parse(`"${m[1]}"`); } catch { value = m[1]; }
  if (key === "office") { office = value; continue; }
  if (key === "type") { type = value; continue; }
  // key === "name"
  if (DISTRICT_NAME.test(value)) {
    // Entering a new House district: it becomes the office until the next one.
    office = value;
    type = null;
    continue;
  }
  // A candidate name. Only queue it if we have data for it in an upcoming race.
  if (type !== "upcoming") continue;
  const lookup = VOICES[office] && VOICES[office][value];
  if (!lookup) continue;
  jobs.push({ name: value, office, afterIndex: m.index + m[0].length, voices: lookup });
}

// Apply from the BOTTOM UP so earlier indices stay valid as we splice.
jobs.sort((a, b) => b.afterIndex - a.afterIndex);

// Matches the empty voices pair that follows a candidate's differentiators.
const EMPTY_PAIR = /(\n(\s*)"supporters":\s*\[\s*\],\s*\n\s*"opponents":\s*\[\s*\])/;

let applied = 0, skippedNonEmpty = 0, notFound = 0;
for (const job of jobs) {
  // Look only at the slice belonging to this candidate — bounded so we cannot leak
  // into the NEXT candidate's arrays if this one already has voices.
  const slice = text.slice(job.afterIndex, job.afterIndex + 4000);
  const hit = EMPTY_PAIR.exec(slice);
  if (!hit) {
    // Either already filled or an unexpected shape; check which for the report.
    if (/"supporters":\s*\[\s*"/.test(slice)) skippedNonEmpty++;
    else notFound++;
    continue;
  }
  const indent = hit[2];
  const fmt = (arr) => arr.length
    ? "[\n" + arr.map(s => `${indent}  ${JSON.stringify(s)}`).join(",\n") + `\n${indent}]`
    : "[]";
  const replacement =
    `\n${indent}"supporters": ${fmt(job.voices.supporters || [])},` +
    `\n${indent}"opponents": ${fmt(job.voices.opponents || [])}`;

  const start = job.afterIndex + hit.index;
  text = text.slice(0, start) + replacement + text.slice(start + hit[1].length);
  placed.add(`${job.office}||${job.name}`);
  applied++;
}

console.log(`${pageArg}: ${applied} candidates filled` +
  (skippedNonEmpty ? `, ${skippedNonEmpty} already had voices (left alone)` : "") +
  (notFound ? `, ${notFound} had an unexpected shape` : ""));

const missing = [...wanted].filter(k => !placed.has(k));
if (missing.length) {
  console.log(`\n⚠ ${missing.length} researched entries did NOT match anything on the page:`);
  for (const k of missing) console.log(`   ${k.replace("||", "  |  ")}`);
  console.log("   (check the office string and the exact candidate name, incl. '(incumbent)')");
}

if (dry) { console.log("\n--dry: no file written"); process.exit(missing.length ? 1 : 0); }
fs.writeFileSync(pageArg, text);
console.log("\nWritten.");
process.exit(missing.length ? 1 : 0);
