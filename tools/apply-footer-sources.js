#!/usr/bin/env node
// apply-footer-sources.js — three pages cloned from Ohio (ia, in, ky) shipped Ohio's footer
// "Sources:" line and a LOCAL_RACES comment about "Ohio county-level" research, verbatim. Found in
// the Sept 3, 2026 self-review; tests/uniformity.js now fails if any two pages share a Sources line.
//
// Each page's line names only what that page's own data notes actually cite.
// Idempotent; refuses to write if the Ohio text is absent AND the new text is absent.
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const OHIO = "Sources: Ohio Secretary of State, Ohio Redistricting Commission, Ballotpedia, Wikipedia, Cook Political Report, Sabato's Crystal Ball, Inside Elections, Ohio Capital Journal, Cleveland.com / The Plain Dealer, The Columbus Dispatch, Cincinnati Enquirer, Signal Ohio, WOSU, Spectrum News 1, AP/NBC.";
const OHIO_LOCAL = "// Sources: (none yet — Ohio county-level down-ballot research is the next phase.)";
const PAGES = {
  ia: ["Iowa", "Sources: Iowa Secretary of State (candidate filings and certifications), AP-called primary results, FEC filings, campaign sites, The Gazette, Iowa Public Radio, Ballotpedia, Wikipedia, Cook Political Report, Sabato's Crystal Ball, Inside Elections."],
  in: ["Indiana", "Sources: Indiana Secretary of State and Election Division (certified results and the general-election candidate list), AP-called primary results (WFYI, WNDU, WBOI), FEC filings, campaign sites, Ballotpedia, Wikipedia, Cook Political Report, Sabato's Crystal Ball, Inside Elections."],
  ky: ["Kentucky", "Sources: Kentucky Secretary of State, Kentucky Legislative Research Commission (district statutes), AP-called primary results, FEC filings, campaign sites, Kentucky Lantern, Lexington Herald-Leader, Ballotpedia, Wikipedia, Cook Political Report, Sabato's Crystal Ball, Inside Elections."],
};
let bad = 0;
for (const [ab, [name, line]] of Object.entries(PAGES)) {
  const file = path.join(ROOT, `${ab}.html`);
  const before = fs.readFileSync(file, "utf8");
  let s = before;
  const local = `// Sources: (none yet — ${name} county-level down-ballot research is the next phase.)`;
  if (!s.includes(line)) { if (!s.includes(OHIO)) { console.error(`✗ ${ab}.html: neither Ohio's nor ${name}'s Sources line found`); bad++; continue; } s = s.replace(OHIO, line); }
  if (!s.includes(local) && s.includes(OHIO_LOCAL)) s = s.replace(OHIO_LOCAL, local);
  if (s !== before) fs.writeFileSync(file, s);
  console.log(`${ab}.html: ${s === before ? "already correct" : "rewritten"}`);
}
process.exit(bad ? 1 : 0);
