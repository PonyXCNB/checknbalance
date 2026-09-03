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

  // (i) American spelling. The newest pages carried 470+ British forms ("organised labour",
  //     "data centres", "licence-plate"). Word-boundary, case-preserving; proper nouns excluded
  //     (Centre County, PA is a real place). Applied to prose and data only — the <style> block
  //     is left alone (steps i and j share this split).
  const styleStart = s.indexOf("<style>"), styleEnd = s.indexOf("</style>");
  const styleBlock = (styleStart !== -1 && styleEnd !== -1) ? s.slice(styleStart, styleEnd) : "";
  const STYLE_TOKEN = " STYLE ";
  if (styleBlock) s = s.replace(styleBlock, STYLE_TOKEN);
  {
    let n = 0;
    const count2 = (re) => (s.match(re) || []).length;
    const stems = "organis|recognis|prioritis|modernis|apologis|weaponis|jeopardis|stabilis|characteris|scrutinis|legalis|incentivis|criminalis|mobilis|minimis|maximis|centralis|formalis|finalis|penalis|subsidis|capitalis|marginalis|normalis|realis|utilis|authoris|categoris|civilis|colonis|criticis|demonis|emphasis|energis|equalis|fertilis|generalis|harmonis|hospitalis|immunis|industrialis|liberalis|localis|memorialis|monopolis|nationalis|neutralis|optimis|patronis|politicis|popularis|privatis|publicis|radicalis|randomis|revitalis|sanitis|sensationalis|socialis|specialis|standardis|sterilis|summaris|symbolis|sympathis|terroris|theoris|traumatis|trivialis|unionis|urbanis|vandalis|victimis|visualis|vocalis|westernis";
    const ise = new RegExp("\\b(" + stems + ")(e|es|ed|ing|ation|ations)\\b", "gi");
    n += count2(ise); s = s.replace(ise, (m, a, b) => a.slice(0, -1) + (a.slice(-1) === "S" ? "Z" : "z") + b);
    // "emphasis" the noun survives: only the verb forms matched above because they need a suffix.
    const pairs = [
      [/\b(c)entre(s?)\b(?! (County|Hall|Township|Daily|Street|Avenue|Square|Court|Region|Wheel))/g, "$1enter$2"],
      [/\b(l)abour\b/g, "$1abor"], [/\b(p)rogramme(s?)\b/g, "$1rogram$2"], [/\b(d)efence(s?)\b/g, "$1efense$2"],
      [/\b(l)icence(s?)\b/g, "$1icense$2"], [/\b(f)avour(s|ed|ing|able|ably|ite|ites|itism)?\b/g, "$1avor$2"],
      [/\b(l)abell(ed|ing)\b/g, "$1abel$2"], [/\b(s)ignall(ed|ing)\b/g, "$1ignal$2"], [/\b(t)ravell(ed|ing|er|ers)\b/g, "$1ravel$2"],
      [/\b(c)heque(s?)\b/g, "$1heck$2"], [/\b(j)udgement(s?)\b/g, "$1udgment$2"], [/\b(a)rtefact(s?)\b/g, "$1rtifact$2"],
      [/\b(s)ulphur\b/g, "$1ulfur"], [/\b(a)nalys(e|es|ed|ing)\b/g, "$1nalyz$2"], [/\b(n)eighbourhood(s?)\b/g, "$1eighborhood$2"],
      [/\b(j)ewellery\b/g, "$1ewelry"], [/\b(c)olour(s|ed|ful|ing)?\b/g, "$1olor$2"], [/\b(h)onour(s|ed|ing|able)?\b/g, "$1onor$2"],
      [/\b(b)ehaviour(s|al)?\b/g, "$1ehavior$2"], [/\b(o)ffence(s?)\b/g, "$1ffense$2"], [/\b(c)ancell(ed|ing)\b/g, "$1ancel$2"],
      [/\b(m)odell(ed|ing)\b/g, "$1odel$2"], [/\b(f)ulfil\b/g, "$1ulfill"], [/\b(e)nrol(s?)\b/g, "$1nroll$2"], [/\b(g)rey\b/g, "$1ray"],
      [/\b(a)rmour\b/g, "$1rmor"], [/\b(h)arbour(s?)\b/g, "$1arbor$2"], [/\b(r)umour(s?)\b/g, "$1umor$2"], [/\b(m)ould(s|ed|ing)?\b/g, "$1old$2"],
      [/\b(p)ractis(e|ed|ing)\b/g, "$1ractic$2"], [/\b(s)ceptic(s|al|ism)?\b/g, "$1keptic$2"], [/\b(t)yre(s?)\b/g, "$1ire$2"],
      [/\b(d)ialogue(s?)\b/g, "$1ialog$2"], [/\b(c)atalogue(s?)\b/g, "$1atalog$2"], [/\b(k)ilometre(s?)\b/g, "$1ilometer$2"], [/\b(m)etre(s?)\b/g, "$1eter$2"],
      [/\b(a)eroplane(s?)\b/g, "$1irplane$2"], [/\b(a)luminium\b/g, "$1luminum"], [/\b(p)aediatric/g, "$1ediatric"], [/\b(o)rthopaedic/g, "$1rthopedic"],
      [/\b(a)naemi(a|c)\b/g, "$1nemi$2"], [/\b(h)aemorrhag/g, "$1emorrhag"], [/\b(m)anoeuvr(e|es|ed|ing)\b/g, "$1aneuver$2"],
    ];
    for (const [re, to] of pairs) { const k = count2(re); if (k) { n += k; s = s.replace(re, to); } }
    if (n) changes.push(`${n} British spellings → American`);
  }

  // (j) Research-process jargon that leaked into voter-facing text ("not carded", "this pass").
  {
    let n = 0;
    const count2 = (re) => (s.match(re) || []).length;
    const swaps = [
      [/\bnot carded\b/g, "not listed"], [/\bis carded\b/g, "is listed"], [/\bare carded\b/g, "are listed"], [/\bcarded here\b/g, "listed here"],
      [/\bcarded\b/g, "listed"], [/\bthis pass\b/g, "at this update"], [/\ba previous pass\b/g, "an earlier update"], [/\bprevious pass\b/g, "earlier update"],
      [/\bblocks automated (fetch|retrieval|access)\b/g, "could not be read"], [/\breturned 403 to automated fetch\b/g, "could not be read"],
    ];
    for (const [re, to] of swaps) { const k = count2(re); if (k) { n += k; s = s.replace(re, to); } }
    if (n) changes.push(`${n} research-jargon phrases reworded for voters`);
  }
  if (styleBlock) s = s.replace(STYLE_TOKEN, styleBlock);

  // (k) Past House primaries/runoffs carried no scope qualifier, so the drawer titled them exactly
  //     like the general ("U.S. House — IN District 1 · past"). Give them "Federal · District N ·
  //     Primary|Runoff"; the renderer appends " — Primary"/" — Runoff" to the inherited title.
  {
    const hm = s.match(/const HOUSE_RACES = \{([\s\S]*?)\n\};/);
    if (hm) {
      let block = hm[1], k = 0;
      // Walk district by district so the district number is known.
      block = block.replace(/\n  (\d+): \{([\s\S]*?)(?=\n  \d+: \{|$)/g, (all, dist, body) => {
        const out = body.replace(/(\{\s*date: "[^"]+",\s*type: "past",)((?:(?!candidates:)[\s\S])*?note: "((?:[^"\\]|\\.)*)")/g, (m, head, rest, note) => {
          if (/\bscope:|\boffice:/.test(rest)) return m;
          if (!/\b(primary|primaries|runoff)\b/i.test(note)) return m;
          const runoff = /\brunoff\b/i.test(note) && /(won|beat|defeated|took|routed|carried|prevailed)[^.]{0,80}\brunoff\b|\brunoff (was|result|winner|victory)/i.test(note);
          k++;
          return `${head} scope: "Federal · District ${dist} · ${runoff ? "Runoff" : "Primary"}",${rest}`;
        });
        return `\n  ${dist}: {${out}`;
      });
      if (k) { s = s.replace(hm[0], `const HOUSE_RACES = {${block}\n};`); changes.push(`${k} past House primary/runoff cards given a qualified scope`); }
    }
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
