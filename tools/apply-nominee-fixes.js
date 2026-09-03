#!/usr/bin/env node
// apply-nominee-fixes.js — resolve the three stale nominee placeholders found in the Sept 3, 2026
// self-review. Each was a bracketed "[GOP nominee — primary March 2026]"-style card that the site
// kept showing months after the state certified the ballot.
//
// Sources (read Sept 3, 2026; everything not read from a state election office is marked [Verify]):
//   NC-1   NCSBE 2026 candidate listing (Nov 3 contest: Buckhout R, Davis D, Bailey LIB) and the
//          State Board's official composite abstract for the Mar 3 primary (Buckhout 39.52%);
//          campaign site lauriebuckhoutforcongress.com/issues; The Assembly; Carolina Journal;
//          WUNC; NRCC (Trump endorsement); Ballotpedia news (fundraising through Jun 30).
//   VA-10  Va. Dept. of Elections Nov 3, 2026 federal candidate list (Beckwith R, Subramanyam D,
//          Malik I); official ENR results for the Aug 4 Republican primary (flagged official,
//          updated Aug 18); beckwithforcongress.com; Prince William Times; Loudoun Times-Mirror;
//          InsideNova; VPM.
//   VA-11  Va. Dept. of Elections Nov 3, 2026 federal candidate list (Purves R, Walkinshaw D,
//          Blais Green); the Aug 4 Republican primary ENR has no 11th-district contest;
//          votepurves.org; Patch candidate profile; FFXnow.
//
// Anchored exact-string replacements; refuses to write a page if any anchor is missing; idempotent.
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const CHECK = process.argv.includes("--check");

function patch(file, edits) {
  const p = path.join(ROOT, file);
  const original = fs.readFileSync(p, "utf8");
  const eol = /\r\n/.test(original) ? "\r\n" : "\n";
  let s = original.replace(/\r\n/g, "\n");
  const missing = [];
  for (const [label, from, to] of edits) {
    if (s.includes(from)) s = s.split(from).join(to);
    else if (!s.includes(to)) missing.push(label);
  }
  if (missing.length) { console.error(`✗ ${file}: anchors missing — NOT written:\n  ` + missing.join("\n  ")); process.exitCode = 1; return; }
  const out = s.replace(/\n/g, eol);
  if (out !== original && !CHECK) fs.writeFileSync(p, out);
  console.log(`${file}: ${out === original ? "nothing to change" : (CHECK ? "would be rewritten" : "rewritten")}`);
}

// ───────────────────────────── nc.html — NC-1 ─────────────────────────────
patch("nc.html", [
  ["NC-1 note", `        note: "Top GOP pickup target; new map moved 6 GOP-leaning coastal counties into D1 in late 2025.",
        candidates: [
          { name: "Don Davis (incumbent)", party: "D", winner: false,`,
   `        note: "Top GOP pickup target: the late-2025 remap moved six GOP-leaning coastal counties into NC-1. Laurie Buckhout won the March 3 Republican primary with 39.5% — certified by the State Board in April — clearing the 30% threshold that would have forced a runoff. Libertarian Tom Bailey is also on the certified November ballot. Ratings: Cook Lean Republican; Sabato's Crystal Ball moved the race to Toss-up in late July. [Verify Inside Elections rating]",
        candidates: [
          { name: "Don Davis (incumbent)", party: "D", winner: false,`],
  ["NC-1 GOP nominee card", `          { name: "[GOP nominee — primary March 2026]", party: "R", winner: false,
            positions: ["[Verify after primary]","[Verify after primary]","[Verify after primary]"],
            differentiators: ["Top early candidates: Rocky Mount Mayor Sandy Roberson, state Sen. Bobby Hanig, Commissioner Eric Rouse","Map redraw favors Republicans","NRCC pickup target"],
            supporters: ["Will represent the district's actual partisan lean","Fresh face after Davis's narrow 2024 win"],
            opponents: ["Crowded primary may produce a weak nominee","Will need to introduce themselves to many new constituents"] }
        ]`,
   `          { name: "Laurie Buckhout", party: "R", winner: false,
            positions: ["Cut taxes and lower the cost of living (campaign site)","Border security (campaign site)","Cut regulations on Eastern NC farmers and fishermen; supports the Trump tariffs (campaign site; WRAL)"],
            differentiators: ["Retired Army colonel who commanded troops in Iraq; worked on Pentagon cyber policy in 2025","2024 nominee — lost to Davis 49.5% to 47.8% on the old map; Trump endorsed her in March 2026","Won the March primary with 39.5% over Asa Buck (34.5%) and state Sen. Bobby Hanig (16.2%); raised $3.79M through June 30 to Davis's $4.29M, including a roughly $2M personal loan [Verify at FEC]"],
            supporters: ["The redrawn district would have gone to Trump by about 11.6 points, so a candidate who came within 1.7 points now runs on friendlier turf","Combat-command and Pentagon experience; NRCC polling in May had the race tied 41–41"],
            opponents: ["Davis has won tough races on less-red maps, has an incumbent's advantages, and has outraised her","Primary rivals contrasted their local roots with her roughly five years in North Carolina; the DCCC has made a similar attack [Verify]","Heavy self-funding and outside PAC spending [Verify]"] },
          { name: "Tom Bailey", party: "L", winner: false,
            positions: ["Reduce partisanship","Term limits","Fiscal restraint"],
            differentiators: ["Libertarian on the certified November ballot; ran as an independent in 2024","Local NC business owner"],
            supporters: ["A real alternative to the two-party system"],
            opponents: ["Drew votes from Buckhout in the 2024 race that Davis won by 1.7 points"] }
        ]`],
]);

// ───────────────────────────── va.html — VA-10 and VA-11 ─────────────────────────────
patch("va.html", [
  ["VA-10 note", `Sam Wong (~1.6%) — Wong had withdrawn after ballots were printed, so his name still drew votes. Figures are unofficial pending certification. The seat is D+6 and Harris carried it by about 8 points.",`,
   `Sam Wong (1.6%) — Wong had withdrawn in June, after ballots were printed, so his name still drew votes. Results are official (State Board of Elections, August 2026). Independent Ahsen Mujeeb Malik is also on the certified November ballot. Cook rates the seat Solid Democratic; it is D+6 and Harris carried it by about 8 points.",`],
  ["VA-10 nominee name", `          { name: "[Republican nominee — decided in the Aug 4, 2026 primary]", party: "R", winner: false,
            positions: [
              "Keep taxes low and cut regulation; recover improper federal payments (campaign site)",`,
   `          { name: "Dave Beckwith", party: "R", winner: false,
            positions: [
              "Keep taxes low and cut regulation; recover improper federal payments (campaign site)",`],
  ["VA-10 differentiators", `              "Won the primary outright with about 72.5% in a four-name field",`,
   `              "Won the primary outright with 72.5% in a four-name field; 61, of Sterling; lost the 2022 ranked-choice GOP nomination to Hung Cao",`],
  ["VA-10 independent", `              "No endorsement from the NRCC or any Virginia officeholder could be located [Verify]"
            ] }
        ]
      },
      {
        date: "Nov 5, 2024", type: "past",
        note: "Subramanyam won the open seat (Jennifer Wexton retired) 52.1% to 47.5%.",`,
   `              "No endorsement from the NRCC or any Virginia officeholder could be located [Verify]"
            ] },
          { name: "Ahsen Mujeeb Malik", party: "I", winner: false,
            positions: ["[Verify] — no platform located at this update"],
            differentiators: ["Independent, of Gainesville, on the certified November ballot (Va. Dept. of Elections)"],
            supporters: [], opponents: [] }
        ]
      },
      {
        date: "Nov 5, 2024", type: "past",
        note: "Subramanyam won the open seat (Jennifer Wexton retired) 52.1% to 47.5%.",`],
  ["VA-11 note", `        note: "James Walkinshaw (D), who won the 2025 special after Gerry Connolly's death, seeks a full term. The GOP side is unsettled. [Verify final Republican ballot]",`,
   `        note: "James Walkinshaw (D), who won the 2025 special after Gerry Connolly's death, seeks a full term. Republican Arthur Purves is his opponent — no primary was held in either party, and no other Republican qualified [Verify]. Green Party candidate Dianne Blais is also on the certified November ballot (Va. Dept. of Elections). The district is D+18.",`],
  ["VA-11 GOP card", `          { name: "[Republican candidate — unsettled]", party: "R", winner: false,
            positions: ["[Verify] — sources conflict on the GOP ballot","[Verify]","[Verify]"],
            differentiators: ["Possible candidates: banking executive Nathan Headrick (pledged $2M self-funding), 2024 nominee Michael Van Meter (20-year FBI veteran), or perennial candidate Arthur Purves [Verify final ballot]","District is D+18","[Verify]"],
            supporters: [
              "Whoever holds the line gives VA-11 Republicans a name on the ballot in a district the party has not seriously contested in years [Verify]"
            ],
            opponents: [
              "A D+18 district where the 2025 special was lost 75.1% to 24.7% [Verify]",
              "The Republican ballot line was still unsettled at this update, so no campaign, platform or fundraising can be assessed [Verify]"
            ] }
        ]`,
   `          { name: "Arthur Purves", party: "R", winner: false,
            positions: ["Cut the roughly $2 trillion federal deficit (campaign site)","Fight chronic disease by removing ultra-processed food from the food supply (campaign site)","Oppose carbon regulations that raise energy costs (campaign site)"],
            differentiators: ["Vienna resident since 1976; retired programmer; president of the Fairfax County Taxpayers Alliance for 29 years","Became the nominee without a primary — the only Republican to qualify [Verify]","Prior runs include the 2023 race for Fairfax board chair and the 2025 special-election GOP canvass; no fundraising located [Verify]"],
            supporters: ["Decades of scrutinizing county and school budgets","Gives Republicans a name on the ballot in a district the party has not seriously contested in years"],
            opponents: ["A district Walkinshaw won 75.1% to 24.7% in the 2025 special","A perennial candidate with weak prior showings and no visible fundraising [Verify]"] },
          { name: "Dianne Blais", party: "G", winner: false,
            positions: ["[Verify] — no platform located at this update"],
            differentiators: ["Green Party, of Fairfax, on the certified November ballot (Va. Dept. of Elections)"],
            supporters: [], opponents: [] }
        ]`],
  ["Van Meter 2024 aside", `            differentiators: ["20-year FBI veteran; may run again in 2026 [Verify]"],`,
   `            differentiators: ["20-year FBI veteran; not on the 2026 ballot"],`],
]);
