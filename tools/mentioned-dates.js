// mentioned-dates.js — find election-event dates that live only in a race's PROSE.
//
// Why this exists: `verify-report.js`'s calendar reads `race.date` and nothing else, so a
// date that appears only inside a note is invisible to it. That blind spot was real — on
// Sept 8, 2026 the calendar printed "(none)" while New Hampshire was voting in a primary
// its page described in thirteen separate strings, every one of them hanging off a race
// dated Nov 3. It is lesson #11's class again: the report asked the data, and the thing
// that mattered had only ever been written in prose.
//
// Three filters keep this from drowning in noise, and each was added after watching it fail:
//   1. PROXIMITY. The first version tested the whole string for an election keyword, so a
//      note that said "primary" once made every "cash on hand as of July 27" in it an
//      event. The keyword must now sit within NEAR_WINDOW characters of the date itself.
//   2. REPORTING PHRASES. Campaign-finance "as of" dates sit next to the word "primary"
//      constantly, and proximity alone does not separate them. A reporting phrase directly
//      BEFORE the date disqualifies it however election-y the rest of the sentence reads.
//   3. RESOLUTION. A passed date whose own sentence already reports the outcome is done,
//      not a finding. Those are hidden by default so what remains is what still needs work.
"use strict";

const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
const MONTH_DAY = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec)[a-z]*\.?\s+(\d{1,2})(?:\s*,?\s*(20\d\d))?/g;
const GENERAL = "2026-11-03";          // the general election itself is not a finding
const NEAR_WINDOW = 60;                // characters either side of the date the keyword must fall within
const ASOF_WINDOW = 30;                // characters before the date a reporting phrase must fall within
const EVENT = /primar|runoff|run-off|general election|special election|election day|ballot|filing deadline|withdrew|withdraw|certif|canvass|recount|nominating convention|goes? to the polls|polls open|early voting|absentee/i;
const ASOF = /(?:^|[^A-Za-z])(?:as of|through|reported? (?:on|through)|filed on|filing period|quarterly|quarter|cash on hand|raised|on hand)[^A-Za-z0-9]{0,12}$/i;
const RESOLVED = /\bwon\b|\bwins\b|result|certified|official|\bbeat\b|defeated|advanced|conceded|withdrew|declined|took \d|%/i;

// A bare "Sept 9" in a note means this cycle. Anything carrying an explicit year keeps it,
// so "the 2024 general" is never mistaken for something a voter can still act on.
function resolveDate(mon, day, year, defaultYear) {
  const mi = MONTHS[mon.slice(0, 3).toLowerCase()];
  const d = Number(day);
  if (mi === undefined || !(d >= 1 && d <= 31)) return null;
  const y = year ? Number(year) : defaultYear;
  const dt = new Date(Date.UTC(y, mi, d));
  if (dt.getUTCMonth() !== mi || dt.getUTCDate() !== d) return null;
  return dt.toISOString().slice(0, 10);
}

// Returns [{ iso, settled }] for every election-event date mentioned in `text`.
function scanText(text, defaultYear = 2026) {
  const found = [];
  if (typeof text !== "string") return found;
  for (const m of text.matchAll(MONTH_DAY)) {
    const around = text.slice(Math.max(0, m.index - NEAR_WINDOW), m.index + m[0].length + NEAR_WINDOW);
    if (!EVENT.test(around)) continue;
    if (ASOF.test(text.slice(Math.max(0, m.index - ASOF_WINDOW), m.index))) continue;
    const iso = resolveDate(m[1], m[2], m[3], defaultYear);
    if (!iso || iso === GENERAL) continue;
    found.push({ iso, settled: RESOLVED.test(around) });
  }
  return found;
}

module.exports = { scanText, resolveDate, GENERAL, NEAR_WINDOW, ASOF_WINDOW, EVENT, ASOF, RESOLVED, MONTH_DAY };
