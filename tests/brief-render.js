// Test 5 — the race "brief" (the context note shown inside an expanded race card).
//
// The note used to render inside the COLLAPSED accordion header, where notes running to
// 2,187 characters buried the candidate data the site exists to show. It was moved into
// the expanded panel on Aug 12, 2026 and restyled. Nothing at the data layer can see that
// regression, and no other suite would catch it, so this one exists to:
//
//   1. keep the note OUT of the collapsed header on every page, forever;
//   2. prove the ⚠ / ✅ segmentation is LOSSLESS — it is a presentation transform, so a
//      brief must contain exactly the note's own words, in order, and never drop a caveat;
//   3. keep the markup well-formed (no empty paragraphs, balanced tags, a Show more
//      toggle if and only if the brief is clamped);
//   4. catch the template-literal hazard: a note containing a backtick or ${ would break
//      the whole drawer at runtime, and every note is interpolated into a template string.
//
// Run:  node tests/brief-render.js
"use strict";
const fs = require("fs");
const vm = require("vm");
const { extractInlineScripts, cutAtD3, runScript, makeChecker } = require("./lib");

const { check, summary } = makeChecker();

const PAGES = fs.readdirSync(".")
  .filter(f => f.endsWith(".html"))
  .filter(f => fs.readFileSync(f, "utf8").includes("election-brief"))
  .sort();

check(PAGES.length >= 35, `found ${PAGES.length} pages rendering a brief (expected 35+)`);

// Block tags are paragraph boundaries in the DOM, so they must become whitespace before
// comparing, or adjacent paragraphs run together and every multi-segment note looks altered.
const stripTags = h => h
  .replace(/<\/(p|div|button)>/g, " ")
  .replace(/<[^>]+>/g, "")
  .replace(/\s+/g, " ")
  .trim();
// The flag glyphs move into their own span, so normalise them out of both sides.
const words = t => t.replace(/[⚠️✅]/g, "").replace(/\s+/g, " ").trim();

let totalNotes = 0;

for (const page of PAGES) {
  const src = fs.readFileSync(page, "utf8");

  // ---- 1. the note must not be rendered in the collapsed header ----
  check(!src.includes('class="election-note"'),
    `${page}: no legacy .election-note in the card header`);
  const summaryBlock = src.slice(src.indexOf('<div class="election-summary-main">'),
                                 src.indexOf('<div class="election-toggle">'));
  check(!/renderNote|\.note/.test(summaryBlock),
    `${page}: the summary header renders no note`);
  check(/<div class="election-detail"><div>\$\{renderNote\(/.test(src),
    `${page}: the brief is the first child of the expanded panel`);

  // ---- 2. pull the shipped helpers out of the page and exercise them for real ----
  const start = src.indexOf("function briefSegments(note) {");
  const end = src.search(/function render(Election|Seat)\(/);
  check(start !== -1 && end > start, `${page}: briefSegments/renderNote are present`);
  if (start === -1 || end <= start) continue;
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src.slice(start, end) + ";this.renderNote = renderNote;", ctx);

  // ---- 3. collect this page's real notes ----
  const code = extractInlineScripts(page)[0];
  const { sandbox, error } = runScript(cutAtD3(code), {
    extra: "__exports.S = typeof STATEWIDE !== 'undefined' ? STATEWIDE : [];" +
           "__exports.H = typeof HOUSE_RACES !== 'undefined' ? HOUSE_RACES : {};" +
           "__exports.L = typeof LOCAL_RACES !== 'undefined' ? LOCAL_RACES : {};" +
           "__exports.R = typeof STATE_RACES !== 'undefined' ? STATE_RACES : {};"
  });
  if (error) { check(false, `${page}: data script runs — ${error.message}`); continue; }
  const x = sandbox.__exports;
  const notes = [];
  const take = r => { if (r && r.note) notes.push(r.note); };
  (x.S || []).forEach(take);
  Object.values(x.H || {}).forEach(d => (d.races || []).forEach(take));
  Object.values(x.L || {}).forEach(a => (a || []).forEach(take));
  Object.values(x.R || {}).forEach(a => (a || []).forEach(take));

  let lossy = 0, malformed = 0, hazard = 0, mismatch = 0;
  for (const note of notes) {
    totalNotes++;
    const html = ctx.renderNote(note);
    const rendered = stripTags(html)
      .replace(/^About this race/, "")
      .replace(/Show more$/, "");
    if (words(rendered) !== words(note)) lossy++;
    if (/<p class="brief-(lead|flag)">\s*<\/p>/.test(html)) malformed++;
    if ((html.match(/<p /g) || []).length !== (html.match(/<\/p>/g) || []).length) malformed++;
    if (/brief-more/.test(html) !== /election-brief clamped/.test(html)) mismatch++;
    if (note.includes("${") || note.includes("`")) hazard++;
  }
  check(lossy === 0, `${page}: all ${notes.length} briefs reproduce their note exactly (${lossy} lossy)`);
  check(malformed === 0, `${page}: brief markup is well-formed (${malformed} bad)`);
  check(mismatch === 0, `${page}: Show more appears iff the brief is clamped (${mismatch} bad)`);
  check(hazard === 0, `${page}: no note contains a backtick or \${ (${hazard} would break the drawer)`);
}

console.log(`\n(${totalNotes} race notes exercised across ${PAGES.length} pages)`);
process.exit(summary("brief-render") ? 0 : 1);
