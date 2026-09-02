// Utah STATEWIDE 2026 ballot.
//
// ⚠⚠ THE HEADLINE IS WHAT IS *NOT* HERE. Utah's 2026 ballot carries NO U.S. Senate race, NO
// Governor, and NO statewide executive office of any kind. This was established from the state's
// own documents, not inferred:
//   (a) The Lieutenant Governor's `2026 Candidate Filings` page (vote.utah.gov, "Last updated:
//       8/31/2026") has exactly five sections — Federal Offices, State Senate, State House, State
//       School Board, Judicial Retention. There is a "State Offices" NAV LINK at the top of that
//       page and NO State Offices section in the document at all.
//   (b) The LG's own `2026 Candidate Manual` is subtitled "A guide for U.S. House, state
//       legislative, and state board of education candidates" and never lists U.S. Senate.
//   (c) Seat classes: Mike Lee is Class III, term to Jan 3, 2029 (next up 2028); John Curtis is
//       Class I, sworn in 2025, term to Jan 3, 2031 (next up 2030). Both are sitting, so there is
//       no vacancy and no special election.
//   (d) Cox (Gov), Henderson (Lt. Gov), Brown (AG), Cannon (Auditor) and Oaks (Treasurer) were all
//       elected or re-elected in November 2024 to four-year terms and are next up in 2028.
//
// ⚠ THE STATE BOARD OF EDUCATION IS NOT STATEWIDE and is deliberately absent. Every row on the LG's
// list reads "State School Board District N"; the districts up in 2026 are 1, 2, 4, 5, 7 (a two-year
// unexpired term), 8, 11 and 14. Districts 11 and 14 are exactly the two that held contested
// REPUBLICAN primaries on June 23 — Utah's board races have been partisan since a 2016 law effective
// Jan 1, 2017, upheld by the Utah Supreme Court in September 2019.
//
// ✅ VERIFIED NEGATIVE — THE HB 267 VETO REFERENDUM IS OFF THE BALLOT. The petition had qualified
// with more than 250,000 valid signatures, the largest successful referendum drive in Utah history,
// but the Legislature REPEALED HB 267 through HB 2001 in a special session on Dec 9, 2025 (House
// 60-9), and a pending veto referendum is void once the targeted law is repealed.
// ✅ VERIFIED NEGATIVE — NO CITIZEN INITIATIVE QUALIFIED. The only one to submit signatures by the
// Feb 15, 2026 deadline was the drive to repeal Proposition 4 and abolish the Independent
// Redistricting Commission. Sponsors submitted over 200,000 signatures and more than 160,000 were
// verified — but SIGNATURE-REMOVAL REQUESTS dropped it below the 8% threshold in enough of the 26
// required Senate districts, and the Lieutenant Governor declared it insufficient (Apr 30, 2026).
//
// ⚠ THE BALLOT LETTERS (Amendment A / B) COULD NOT BE CONFIRMED. `ltgovernor.utah.gov`'s
// "Public notice: full text of proposed constitutional amendments" page still serves the SEPTEMBER
// 2024 notice (Amendments A-D of 2024); no 2026 equivalent was located. The two amendments below are
// therefore named by their referring resolution, not by a letter. RE-CHECK before Nov 3.
// ⚠ DELIBERATELY NOT PUBLISHED: a possible THIRD 2026 amendment concerning an "oath". It appeared
// only in one search snippet attributed to Vote Smart, whose page will not resolve (DNS failure), and
// no state source corroborates it. Fox 13's review of the 2026 session reports that the other
// amendments floated that year — Amendment D 2.0, judicial nomination/retention changes, term limits,
// an elected Secretary of State — did NOT advance, and Utah News Dispatch reported July 8, 2026 that
// lawmakers dropped the initiative-power amendment.
const STATEWIDE = [
  // ─────────────────────────── UPCOMING ───────────────────────────
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Constitutional Amendment — 60% Vote Requirement for Tax-Raising Citizen Initiatives (S.J.R. 2)",
    note: "RAISES THE BAR FOR TAX-RELATED CITIZEN INITIATIVES FROM A SIMPLE MAJORITY TO 60%. ✅ Referred by S.J.R. 2 of the 2025 session; Senate 21-8, House 55-17, every yes vote Republican. ⚠ The official ballot letter (Amendment A or B) could not be confirmed on any state page [Verify — no 2026 amendment notice located on ltgovernor.utah.gov, which still serves the September 2024 notice]. ⚠ The resolution's clause applying the new threshold to 2026 initiatives is moot — no citizen initiative qualified for this ballot.",
    candidates: [
      { name: "Yes — Require 60% for tax-raising initiatives", party: "I", winner: false,
        positions: [
          "60% approval for tax-raising initiatives",
          "Covers new taxes and expanded taxes",
          "Covers rate increases and property tax changes"
        ],
        differentiators: [
          "Sponsored by Sen. Lincoln Fillmore, R-South Jordan",
          "Passed on strictly party-line Republican votes",
          "Part of a broader 2025 initiative-restriction push alongside S.B. 73",
          "No separately organised Yes campaign could be located [Verify — an absence of located records]"
        ],
        supporters: [
          "Raising taxes on your neighbours should require broad consensus, not a bare majority.",
          "A supermajority guards taxpayers against narrow-margin tax hikes that are hard to undo."
        ],
        opponents: [
          "Sen. Kathleen Riebe calls it an onerous threshold for the public to speak.",
          "A 41% minority could veto what a clear majority of Utahns want.",
          "The Legislature itself can still raise taxes by simple majority [Verify — structural argument]."
        ] },
      { name: "No — Keep majority rule for tax initiatives", party: "I", winner: false,
        positions: [
          "Keeps a simple majority for every initiative",
          "No change to Article VI initiative power",
          "Tax measures judged like any other initiative"
        ],
        differentiators: [
          "Opposed by Senate Democrats including Kathleen Riebe",
          "Aligned with initiative-rights groups active in 2025 [Verify — inferred from their S.B. 73 opposition, not a stated 2026 position]",
          "Follows the 2024 Amendment D fight over initiative power",
          "No formal No campaign committee could be located [Verify — an absence of located records]"
        ],
        supporters: [
          "One person, one vote should settle tax questions the same as any other.",
          "Utah already layered new initiative restrictions on in 2025; this compounds them."
        ],
        opponents: [
          "Permanent tax increases deserve a higher bar than ordinary legislation.",
          "Genuinely popular tax measures would still clear 60% [Verify — structural argument]."
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Constitutional Amendment — Publication Requirements for Proposed Constitutional Amendments (H.J.R. 10)",
    note: "REPLACES THE 1895-ERA NEWSPAPER NOTICE RULE WITH PUBLICATION IN A MANNER PROVIDED BY STATUTE FOR 60 DAYS. ✅ Referred by H.J.R. 10 of 2025, sponsor Rep. Anthony Loubet, R-Kearns. ⚠ THIS IS THE LEGISLATURE ANSWERING ITS OWN 2024 DEFEAT: Utah courts voided both Amendment A and Amendment D that year partly because the old newspaper rule was not met. ⚠ Ballot letter unconfirmed [Verify — no 2026 amendment notice located on any state site]. ⚠ No legal challenge to either 2026 amendment could be located, searched two ways.",
    candidates: [
      { name: "Yes — Modernise how amendments are published", party: "I", winner: false,
        positions: [
          "Publication in a manner provided by statute",
          "60 calendar days before the general election",
          "Ends the county-by-county newspaper mandate"
        ],
        differentiators: [
          "Sponsored by Rep. Anthony Loubet, R-Kearns",
          "Framed as matching other states' practice",
          "The Legislature would set the notice method by statute",
          "No organised Yes campaign could be located [Verify — an absence of located records]"
        ],
        supporters: [
          "Newspapers are no longer how most Utahns get their news.",
          "Statutory notice can reach more voters at lower cost than county newspaper ads."
        ],
        opponents: [
          "It lets the Legislature write the rules that police the Legislature.",
          "Alliance for a Better Utah warns the constitution is supposed to be hard to change."
        ] },
      { name: "No — Keep the newspaper publication requirement", party: "I", winner: false,
        positions: [
          "Keeps the two-month newspaper publication rule",
          "Notice in a newspaper in every county publishing one",
          "Notice fixed in the constitution, not in statute"
        ],
        differentiators: [
          "Caution voiced by Alliance for a Better Utah",
          "The rule dates to 1895 and was enforced in 2024",
          "Its enforcement voided Amendment A and Amendment D in 2024",
          "No formal No campaign committee could be located [Verify — an absence of located records]"
        ],
        supporters: [
          "The hard notice rule is exactly what caught the 2024 failures.",
          "Loosening notice makes it easier to rush amendments past voters."
        ],
        opponents: [
          "Newspaper-only notice is outdated and expensive.",
          "A statute can still set strict, enforceable notice standards [Verify — structural argument]."
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "Judicial · Statewide", office: "Judicial Retention — Utah Supreme Court and Court of Appeals (7 jurists)",
    note: "ONE SUPREME COURT JUSTICE AND SIX COURT OF APPEALS JUDGES FACE STATEWIDE RETAIN / DO NOT RETAIN VOTES. ⚠ THIS IS NOT A ROUTINE RETENTION YEAR: the Utah Republican Party is actively campaigning for a NO vote on Justice Pohlman over the court's 2024 Proposition 4 redistricting ruling — the ruling that produced the very map these congressional races are run on. The Utah State Bar has pushed back, and Gov. Cox has called the campaign a legitimate check on judicial power. ⚠ Justice Diana Hagen resigned May 8, 2026 and is off the ballot, leaving Pohlman alone from the high court. ⚠ The Judicial Performance Evaluation Commission publishes a formal retain / do-not-retain recommendation for each judge at judges.utah.gov — THE SINGLE BEST SOURCE FOR THIS RACE — but that site returns HTTP 401 to every automated client, so no 2026 JPEC recommendation is carried here. Open judges.utah.gov in a browser before you vote. ⚠ District and juvenile court judges also stand for retention on Nov 3 but only within their own judicial district, so which ones you see depends on your address; they are not listed here. ✅ The seven names below are read from the Lieutenant Governor's own candidate-status list.",
    candidates: [
      { name: "Jill M. Pohlman — Supreme Court (retain / do not retain)", party: "I", winner: false,
        positions: [
          "Appointed to the Supreme Court in 2022",
          "Serves as Associate Chief Justice",
          "Joined the 2024 Proposition 4 redistricting ruling"
        ],
        differentiators: [
          "The only Supreme Court justice on the 2026 ballot",
          "Target of an announced Utah GOP no-retention campaign",
          "Retained to the Court of Appeals in 2020 with about 83% [Verify — Ballotpedia figure, not checked against a canvass]",
          "Her 2026 JPEC recommendation could not be retrieved [Verify — judges.utah.gov returns HTTP 401 to fetchers]"
        ],
        supporters: [
          "The Utah State Bar says disagreement with one ruling is no basis for removing a judge.",
          "Judges should not decide cases looking over their shoulder at legislators.",
          "Bar leaders urge voters to use JPEC's nonpartisan evaluation rather than party politics."
        ],
        opponents: [
          "Utah GOP chair Rob Axson says the justices ignored the constitution.",
          "Gov. Cox calls the retention campaign a legitimate check on judicial power.",
          "Critics tie her to a ruling that forced Utah onto new congressional maps."
        ] },
      { name: "Gregory Keith Orme — Court of Appeals (retain / do not retain)", party: "I", winner: false,
        positions: [
          "On the Court of Appeals since 1987",
          "The longest-serving judge on the court",
          "Hears appeals assigned by the Supreme Court"
        ],
        differentiators: [
          "Has been retained repeatedly since the court was created",
          "Six-year term expires January 3, 2027 [Verify — Ballotpedia]",
          "Name as it appears on the Lieutenant Governor's own ballot-question list",
          "No 2026 JPEC recommendation retrievable [Verify — judges.utah.gov blocked]"
        ],
        supporters: [
          "Nearly four decades of appellate experience anchors the court.",
          "Retention elections are not meant to punish individual rulings."
        ],
        opponents: [
          "Very long tenure invites arguments for turnover [Verify — structural argument].",
          "No organised opposition campaign against him could be located [Verify — an absence of located records]."
        ] },
      { name: "Michele M. Christiansen Forster — Court of Appeals (retain / do not retain)", party: "I", winner: false,
        positions: [
          "Appellate judge since 2010",
          "Former district court judge",
          "Hears civil and criminal appeals statewide"
        ],
        differentiators: [
          "Retained in 2020 with about 82% [Verify — Ballotpedia figure]",
          "Term expires January 3, 2027 [Verify — Ballotpedia]",
          "One of six appellate judges on a single ballot",
          "No 2026 JPEC recommendation retrievable [Verify — judges.utah.gov blocked]"
        ],
        supporters: [
          "A strong prior retention margin signals broad public confidence.",
          "Experienced appellate judges shorten the backlog for litigants."
        ],
        opponents: [
          "Voters get almost no information about appellate judges beyond the JPEC report [Verify — structural argument].",
          "No organised opposition campaign against her could be located [Verify — an absence of located records]."
        ] },
      { name: "David Ned Mortensen — Court of Appeals (retain / do not retain)", party: "I", winner: false,
        positions: [
          "Appointed to the Court of Appeals in 2016",
          "Previously a district court judge",
          "Hears appeals assigned by the Supreme Court"
        ],
        differentiators: [
          "Retained once before, in 2020 [Verify — Ballotpedia]",
          "Term expires January 3, 2027 [Verify — Ballotpedia]",
          "A full six-year appellate record for JPEC to evaluate",
          "No 2026 JPEC recommendation retrievable [Verify — judges.utah.gov blocked]"
        ],
        supporters: [
          "A full six-year record gives the evaluation commission real data to work from.",
          "Continuity on a busy intermediate court helps litigants get consistent rulings."
        ],
        opponents: [
          "An unopposed retention gives voters no alternative to weigh him against [Verify — structural argument].",
          "No organised opposition campaign against him could be located [Verify — an absence of located records]."
        ] },
      { name: "Ryan M. Harris — Court of Appeals (retain / do not retain)", party: "I", winner: false,
        positions: [
          "Appointed to the Court of Appeals in 2017",
          "Former civil litigator",
          "Hears civil and criminal appeals statewide"
        ],
        differentiators: [
          "Retained in 2020 with about 75% [Verify — Ballotpedia figure]",
          "The lowest 2020 retention share among these judges [Verify — comparison of Ballotpedia figures]",
          "Term expires January 3, 2027 [Verify — Ballotpedia]",
          "No 2026 JPEC recommendation retrievable [Verify — judges.utah.gov blocked]"
        ],
        supporters: [
          "He cleared the retention threshold comfortably last cycle.",
          "A private-practice background broadens the experience on the bench."
        ],
        opponents: [
          "A weaker prior margin invites a closer look this time [Verify — structural argument].",
          "No organised opposition campaign against him could be located [Verify — an absence of located records]."
        ] },
      { name: "John David Luthy — Court of Appeals (retain / do not retain)", party: "I", winner: false,
        positions: [
          "Appointed to the Court of Appeals in 2019 [Verify — appointment year from an aggregator, not a Utah Courts source]",
          "Former district court judge",
          "Hears appeals assigned by the Supreme Court"
        ],
        differentiators: [
          "Among the six judges whose terms expire January 3, 2027 [Verify — Ballotpedia]",
          "A relatively newer appellate judge",
          "Name as it appears on the Lieutenant Governor's own ballot-question list",
          "No 2026 JPEC recommendation retrievable [Verify — judges.utah.gov blocked]"
        ],
        supporters: [
          "Trial-bench experience informs how he reviews the record on appeal.",
          "JPEC's minimum performance standards are the proper yardstick, not politics."
        ],
        opponents: [
          "A shorter appellate record gives voters less to judge him on [Verify — structural argument].",
          "No organised opposition campaign against him could be located [Verify — an absence of located records]."
        ] },
      { name: "Amy Jo Oliver — Court of Appeals (retain / do not retain)", party: "I", winner: false,
        positions: [
          "An appellate judge appointed this decade [Verify — appointment year not confirmed from a Utah Courts source]",
          "Hears civil and criminal appeals statewide",
          "Facing an early retention vote [Verify — inferred from her recent appointment, not separately confirmed]"
        ],
        differentiators: [
          "Among the six judges whose terms expire January 3, 2027 [Verify — Ballotpedia]",
          "The newest of the six on the 2026 ballot [Verify — aggregator only]",
          "A statewide question, unlike the district court judges",
          "No 2026 JPEC recommendation retrievable [Verify — judges.utah.gov blocked]"
        ],
        supporters: [
          "New judges are measured against exactly the same JPEC standards as veterans.",
          "Retention is how voters confirm or reject a merit-selection appointment."
        ],
        opponents: [
          "She has the least public record of the six on this ballot [Verify — structural argument].",
          "No organised opposition campaign against her could be located [Verify — an absence of located records]."
        ] }
    ] }
];
