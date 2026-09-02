// Washington STATEWIDE 2026 ballot — five Supreme Court seats and three ballot measures.
//
// ⚠⚠ THERE IS NO FEDERAL OR EXECUTIVE STATEWIDE RACE IN WASHINGTON IN 2026, and that is the single
// most useful thing this page can tell a voter. Established from term structure, not assumed:
//   • U.S. SENATE: none. Patty Murray holds the Class 3 seat (term to Jan 3, 2029, next up 2028);
//     Maria Cantwell holds Class 1 (re-elected 2024, term to Jan 3, 2031). CLASS 2 is the class up
//     in 2026 and Washington has no Class 2 seat. Corroborated by The Green Papers' 2026 Washington
//     page, which states outright that no Senate seat is up.
//   • Every statewide EXECUTIVE office was filled in November 2024 for a four-year term and is next
//     up in 2028: Governor (Ferguson), Lieutenant Governor (Heck), Secretary of State (Hobbs —
//     who is the officer that certified the Aug 21, 2026 canvass, confirming he is still in post),
//     Attorney General (Nick Brown), Treasurer (Pellicciotti), Auditor (McCarthy), Commissioner of
//     Public Lands, Insurance Commissioner (Kuderer) and the nonpartisan Superintendent of Public
//     Instruction. No 2026 statewide executive vacancy or special election was located.
//   • NO CONSTITUTIONAL AMENDMENT. The only serious 2026 candidate, HJR 4209 (mid-decade
//     congressional redistricting), needed two-thirds in each chamber, never got it, and the
//     leg.wa.gov bill page shows no action past the January committee referral. ⚠ SJR 8201
//     (long-term care fund investment) is a DIFFERENT measure and was on the NOVEMBER 2025 ballot.
//   • NO ADVISORY VOTES. Washington repealed the tax advisory-vote requirement in 2023.
//
// ⚠⚠ THE COURT RACES ARE THE WHOLE STATEWIDE BALLOT, AND THERE ARE FIVE OF THEM, NOT FOUR.
// Positions 1, 3, 5 and 7 held an Aug 4 primary. **POSITION 4 HELD NO PRIMARY AT ALL** and goes
// straight to November, because RCW 29A.52.220 bars a primary for a nonpartisan position when no
// more than two candidates file after the withdrawal deadline. Confirmed three independent ways:
// the statute itself; the certified Aug 4 results feed, which contains Positions 1, 3, 5 and 7 and
// NO Position 4; and Wikipedia's 2026 Washington Supreme Court election article, which opens
// "to elect five members."
// ⚠ A PREMISE IN OUR OWN BUILD BRIEF WAS WRONG AND WAS REFUTED BY READING THE STATUTE. The brief
// said RCW 29A.52.231 elects a judicial candidate outright on a primary majority. It does not —
// that section contains ONLY the designation that supreme, appeals, superior and district court
// offices are nonpartisan. So Melody's 52.90% and Stephens's 54.37% did NOT end their races; all
// four primaried seats send their top two to November regardless of share.
//
// ✅ EVERY PRIMARY FIGURE BELOW IS OFFICIAL — certified by Secretary of State Steve Hobbs on
// Aug 21, 2026, read from results.votewa.gov's own certified feed (isOfficialResults: true).
// ⚠ Wikipedia reports different Position 5 percentages (Angelis 34.23 / Larson 30.35 / Amamilo
// 25.80 / Miller 12.68) on different raw totals. The CERTIFIED figures are used here.
//
// ⚠ NO BAR-ASSOCIATION RATING is carried for the candidates in Positions 1, 3, 5 or 7 — none could
// be located. The "exceptionally well qualified" ratings for both Position 4 candidates come from an
// advocacy group's voter guide, not from the bar associations' own sheets, and are marked.
// ⚠ sos.wa.gov 403s every path, so the exact printed ballot titles of the three measures could not
// be read from the Secretary of State's own pages. The measure numbers are reported in both
// "IP26-645" and "Initiative 645" forms; both are given.
const STATEWIDE = [
  // ─────────────────────────── UPCOMING ───────────────────────────
  { date: "Nov 3, 2026", type: "upcoming", scope: "Judicial · Statewide", office: "Washington Supreme Court — Justice Position 1 (special election)",
    note: "OFFICIAL: MELODY TOOK 52.90% IN THE AUG 4 PRIMARY, 923,965 of 1,746,550. ✅ Certified by SoS Steve Hobbs on Aug 21, 2026. ✅ The November matchup is Melody vs. Scott Edwards (29.39%); Laura Christensen Colberg (17.47%) is eliminated. ⚠ A primary majority does NOT elect a judge outright in Washington when three candidates file — the top two advance regardless of share. ⚠ This is a nonpartisan office, but a state party has endorsed in it.",
    candidates: [
      { name: "Colleen Melody (incumbent)", party: "I", winner: false,
        positions: [
          "Careful fact-based rulings, few easy answers",
          "Civil rights and anti-discrimination enforcement focus",
          "Says appointment plus election gives real accountability"
        ],
        differentiators: [
          "Appointed by Gov. Ferguson, took the bench Jan 1, 2026",
          "Led the state Attorney General's civil rights division for 11 years",
          "Fills the seat vacated by Justice Mary Yu",
          "Endorsed by the eight other sitting justices"
        ],
        supporters: [
          "Eight sitting justices and two former governors back her",
          "Eleven years enforcing state and federal civil rights law",
          "She led the primary by more than 400,000 votes"
        ],
        opponents: [
          "Critics say a Ferguson appointee owes the governor deference",
          "She never served as a trial or appellate judge before her appointment",
          "Union and teacher-PAC money cuts against her independence claim [Verify — the framing opponents use, not an established fact]"
        ] },
      { name: "Scott Edwards", party: "I", winner: false,
        positions: [
          "Interpret statutes exactly as written",
          "Judges should not inject policy preferences",
          "Restore separation of powers and principled judgment"
        ],
        differentiators: [
          "Tax attorney; partner experience at Ballard Spahr and Perkins Coie",
          "Teaches tax law at the University of Washington",
          "Carried the Washington State Republican Party endorsement",
          "Raised about 53,000 dollars to Melody's 205,000"
        ],
        supporters: [
          "He argues the court is among the most progressive in the country",
          "Deep tax expertise as an income tax case heads to the court",
          "Republican organisations consolidated behind him after the primary [Verify — inferred from the party co-endorsing both challengers in the primary]"
        ],
        opponents: [
          "He has never served as a judge at any level",
          "He trailed Melody by more than 23 points in the primary",
          "A party endorsement sits badly with a nonpartisan bench"
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "Judicial · Statewide", office: "Washington Supreme Court — Justice Position 3 (OPEN SEAT)",
    note: "OPEN SEAT: JUSTICE RAQUEL MONTOYA-LEWIS IS NOT SEEKING RE-ELECTION. ✅ Certified primary: David Stevens 35.19% (612,267 of 1,740,028), Jaime Michelle Hawk 33.27%, Mike Diaz 31.25% — a near three-way tie in which no candidate came close to a majority. ✅ Stevens vs. Hawk in November. ⚠ Nonpartisan office.",
    candidates: [
      { name: "David Stevens", party: "I", winner: false,
        positions: [
          "Strict constitutional text over policy consequences",
          "Opposes race-conscious rules in jury selection",
          "Called the capital gains ruling the product of sophistry"
        ],
        differentiators: [
          "Mason County superior court judge and Navy veteran",
          "Former public defender, first in his family to attend college",
          "Raised about 40,000 dollars, far less than both rivals",
          "Aided by roughly 50,000 dollars of taxpayer-group outside spending"
        ],
        supporters: [
          "He brings rural trial bench experience the court now lacks",
          "He argues recent court rule changes overstepped the judicial role",
          "He led the primary while being outspent about five to one"
        ],
        opponents: [
          "His criticism of racial-bias jury rules alarms civil rights groups",
          "Outside taxpayer-advocacy spending raises independence questions",
          "He has the least appellate experience of the three primary candidates [Verify — a comparison drawn from reported biographies, not a formal assessment]"
        ] },
      { name: "Jaime Michelle Hawk", party: "I", winner: false,
        positions: [
          "Access to justice and equal treatment in court",
          "Public defense experience should inform criminal rulings",
          "Supports the court's work on bias in jury selection [Verify — inferred from her Minority and Justice Commission role]"
        ],
        differentiators: [
          "King County superior court judge",
          "Former ACLU of Washington attorney",
          "Served as both a state and a federal public defender",
          "Raised about 218,000 dollars; endorsed by Gov. Ferguson"
        ],
        supporters: [
          "Broad Democratic, judicial and labor endorsements statewide",
          "She combines public defense and civil liberties experience",
          "She sits on the court's Minority and Justice Commission"
        ],
        opponents: [
          "Critics read her ACLU background as ideological [Verify — structural argument]",
          "She finished second in the primary despite outspending Stevens",
          "A King County base may not travel across eastern Washington [Verify — structural argument]"
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "Judicial · Statewide", office: "Washington Supreme Court — Justice Position 4 (OPEN SEAT, no primary was held)",
    note: "NO PRIMARY WAS HELD IN THIS RACE, SO IT APPEARS ON NO AUGUST RESULTS SHEET. ✅ RCW 29A.52.220 bars a primary for a nonpartisan position when no more than two candidates file after the withdrawal deadline, so Ian Birk and Sean O'Donnell go straight to November. ⚠ OPEN SEAT: Justice Charles W. Johnson reached the mandatory judicial retirement age of 75 and is ineligible to run again. ⚠ Nonpartisan office. ⚠ If you looked only at the August returns you would never know this race exists — that is exactly why it is carded here.",
    candidates: [
      { name: "Ian Birk", party: "I", winner: false,
        positions: [
          "Affordability and equal access to the courts",
          "Warns the rule of law is under strain this cycle",
          "A consumer and tenant perspective on the bench [Verify — drawn from his practice background, not a stated plank]"
        ],
        differentiators: [
          "Sitting Court of Appeals Division I judge since 2022",
          "Twenty years in private practice for renters and consumers",
          "Rated exceptionally well qualified by bar groups [Verify — via an advocacy group's voter guide; the bar associations' own sheets were unreachable]",
          "Endorsed by former Gov. Inslee and four sitting justices"
        ],
        supporters: [
          "He already does appellate work day to day",
          "He has a long judicial, labor and Democratic endorsement list",
          "He carries top bar ratings from multiple associations"
        ],
        opponents: [
          "A plaintiff-side practice reads as one-sided to critics [Verify — structural argument]",
          "He has less trial bench time than his opponent",
          "His endorsement list skews to one party in a nonpartisan race"
        ] },
      { name: "Sean O'Donnell", party: "I", winner: false,
        positions: [
          "The legal system is too expensive for ordinary people",
          "Consensus building across opposing groups",
          "Trial experience should shape appellate review [Verify — inferred from his candidate-forum pitch]"
        ],
        differentiators: [
          "King County superior court judge since 2013",
          "Twelve years as a prosecutor before taking the bench",
          "Rated exceptionally well qualified by bar groups [Verify — via an advocacy group's voter guide; the bar associations' own sheets were unreachable]",
          "Endorsed by former Gov. Gregoire and Justice Helen Whitener"
        ],
        supporters: [
          "He is endorsed by groups that usually oppose each other",
          "Thirteen years actually running trials",
          "He carries top bar ratings, matching his opponent"
        ],
        opponents: [
          "A prosecutorial background worries defence advocates [Verify — structural argument]",
          "He has no appellate bench experience",
          "He has fewer progressive-organisation endorsements than Birk"
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "Judicial · Statewide", office: "Washington Supreme Court — Justice Position 5 (special election)",
    note: "OFFICIAL: ANGELIS LED WITH 35.84%, 623,396 of 1,739,425 — THE WEAKEST SHOWING BY ANY INCUMBENT ON THIS BALLOT. ✅ Certified Aug 21, 2026. ✅ Angelis vs. Dave Larson (32.17%); Sharonda Amamilo (21.33%) and Greg Miller (10.44%) are eliminated. ⚠ This is the closest of the five races. ⚠ Angelis was appointed by Gov. Ferguson in 2026 to the seat of retired Justice Barbara Madsen; his exact swearing-in date is reported inconsistently. ⚠ Nonpartisan office.",
    candidates: [
      { name: "Theo Angelis (incumbent)", party: "I", winner: false,
        positions: [
          "Documents his own potential bias before each case",
          "Appellate specialisation is the core qualification",
          "Rejects claims the court chases public opinion"
        ],
        differentiators: [
          "Appointed by Gov. Ferguson in 2026 for Justice Madsen's seat",
          "Twenty-six years as a K and L Gates partner in appellate work",
          "First justice of Middle Eastern descent on the court",
          "Endorsed by the eight other sitting justices and two former governors"
        ],
        supporters: [
          "A career appellate litigator matched to the court's actual work",
          "Backed by every other sitting justice plus Inslee and Gregoire",
          "He led a crowded four-way primary field"
        ],
        opponents: [
          "He won only about 36 percent, the weakest incumbent showing on the ballot",
          "He never served as a judge before his appointment months ago",
          "Critics call him a governor's pick facing voters too early"
        ] },
      { name: "Dave Larson", party: "I", winner: false,
        positions: [
          "Judges must not be swayed by public pressure",
          "Says the court has drifted from judicial ethics",
          "Emphasises municipal and community court reform [Verify — carried over from his prior campaigns, not restated this cycle]"
        ],
        differentiators: [
          "Retired Federal Way Municipal Court judge",
          "Has run for the state Supreme Court in 2000, 2016, 2020 and 2024",
          "Narrowly lost a high court race in 2024",
          "Republican party organisations consolidated behind him"
        ],
        supporters: [
          "A long municipal bench record and repeated statewide campaigns",
          "He argues the court answers to opinion rather than ethics rules",
          "He finished within four points of a sitting justice"
        ],
        opponents: [
          "Four previous losing Supreme Court campaigns",
          "Municipal court work is far removed from appellate review [Verify — structural argument]",
          "Party backing conflicts with nonpartisan judicial norms"
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "Judicial · Statewide", office: "Washington Supreme Court — Justice Position 7 (Chief Justice)",
    note: "OFFICIAL: CHIEF JUSTICE STEPHENS TOOK 54.37%, 938,584 of 1,726,167. ✅ Certified Aug 21, 2026. ✅ Stephens vs. Todd A. Bloom (27.13%); Karim A. Merchant (12.03%) and David R Shelvey (6.24%) are eliminated. ⚠ Her outright majority did NOT end the race, because four candidates filed and Washington's top-two rule sends the leading pair to November regardless. ⚠ Nonpartisan office.",
    candidates: [
      { name: "Debra L. Stephens (incumbent)", party: "I", winner: false,
        positions: [
          "Rule of law and equal justice for all",
          "Court transparency and access to justice",
          "A constitutional duty to fully fund public schools"
        ],
        differentiators: [
          "Chief Justice; on the court since January 2008",
          "Authored the 2012 McCleary school funding decision",
          "Wrote the 2023 opinion upholding the capital gains tax",
          "First woman from eastern Washington on the court"
        ],
        supporters: [
          "Eighteen years of appellate opinions and court leadership",
          "McCleary drove billions of dollars to public schools",
          "She won an outright majority against three challengers"
        ],
        opponents: [
          "Critics call McCleary judicial overreach into the state budget",
          "The capital gains ruling drew accusations of sophistry",
          "Long tenure invites the argument for turnover [Verify — structural argument]"
        ] },
      { name: "Todd A. Bloom", party: "I", winner: false,
        positions: [
          "An originalist reading of constitutional text",
          "Restore public confidence in the courts",
          "Says the Blake ruling harmed public safety"
        ],
        differentiators: [
          "Tax attorney and CPA; a Navy officer for a decade",
          "Twenty years as a FINRA arbitrator",
          "Ran for Congress as a Republican in 2016 and 2022",
          "Also ran for the state Supreme Court in 2024"
        ],
        supporters: [
          "Tax and finance expertise as an income tax case nears the court",
          "Military and arbitration decision-making experience",
          "He argues appointed justices may defer to those who named them"
        ],
        opponents: [
          "He has never served as a judge",
          "He raised only about 6,500 dollars against Stephens's 110,000",
          "Two prior Republican congressional runs undercut his nonpartisan claim"
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Initiative 645 (IP26-645) — Repeal the tax on income over one million dollars",
    note: "CERTIFIED JULY 15, 2026 AFTER 511,408 SIGNATURES WERE SUBMITTED, nearly double the requirement. ✅ It repeals the 9.9% tax on household income above one million dollars and bars state and local individual income taxes. ⚠ IT DOES NOT REPEAL THE CAPITAL GAINS TAX — a point both sides make. ⚠ Collection of the tax would not begin until 2029 either way. ⚠ Two lawsuits challenged the state's ballot-title wording. ⚠ The exact printed ballot title could not be read [Verify — sos.wa.gov returned 403 on every path].",
    candidates: [
      { name: "Yes — repeal the million-dollar income tax", party: "I", winner: false,
        positions: [
          "Repeal the 9.9 percent income tax before it takes effect",
          "Prohibit state and local taxes on individual income",
          "Define income for state tax purposes"
        ],
        differentiators: [
          "Filed by Let's Go Washington and Brian Heywood",
          "511,408 signatures, nearly double the requirement",
          "Collection of the tax would not start until 2029",
          "Leaves the existing capital gains tax in place"
        ],
        supporters: [
          "Heywood says the tax threatens Washington's no-income-tax identity",
          "Backers argue the one million dollar threshold will be lowered later",
          "The signature total nearly doubled the legal minimum"
        ],
        opponents: [
          "Gov. Ferguson says repeal defunds schools and child care",
          "SEIU put one million dollars into the opposition campaign",
          "Critics note it leaves the capital gains tax untouched anyway"
        ] },
      { name: "No — keep the million-dollar income tax", party: "I", winner: false,
        positions: [
          "Keep the tax on income above one million dollars",
          "Protect K-12, child care and early learning funding",
          "Preserve the Working Families Tax Credit"
        ],
        differentiators: [
          "Backed by Gov. Ferguson and organised labor",
          "SEIU donated one million dollars to the No campaign",
          "The Washington State PTA formally opposes the initiative",
          "Ferguson pledged to veto any lowering of the threshold"
        ],
        supporters: [
          "Only households above one million dollars would ever pay",
          "It funds schools, child care and the Working Families Tax Credit",
          "The governor has pledged to veto any threshold reduction"
        ],
        opponents: [
          "Voters distrust promises that the threshold will hold",
          "Washington voters have historically rejected income taxes [Verify — structural argument]",
          "Opponents of the tax warn high earners will leave the state [Verify — a standard argument; no specific source located]"
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Initiative 638 (IL26-638) — Fairness in Girls' Athletics",
    note: "IT REACHED THE BALLOT BECAUSE THE LEGISLATURE TOOK NO ACTION BEFORE ADJOURNING MARCH 12, 2026 — an Initiative to the Legislature goes to voters if lawmakers neither pass nor amend it. ✅ Certified by SoS Hobbs Jan 22, 2026 after Let's Go Washington filed 445,187 signatures. ⚠ It would require a health provider to verify a student's biological sex for female school athletics eligibility, by anatomy, genetics or testosterone levels. ⚠ Legislative Democrats declined to hold public hearings on it.",
    candidates: [
      { name: "Yes — approve the athletics eligibility rule", party: "I", winner: false,
        positions: [
          "Bar biologically male students from female school sports",
          "Require provider verification of biological sex",
          "Preserve fair competition for girls"
        ],
        differentiators: [
          "Filed by Let's Go Washington on June 2, 2025",
          "445,187 signatures submitted January 2, 2026",
          "Verification by anatomy, genetics or testosterone levels",
          "Legislative Democrats blocked public hearings on it"
        ],
        supporters: [
          "Backers say girls lose fair competition and opportunity without it",
          "Nearly 450,000 voters signed to put it on the ballot",
          "Lawmakers refused hearings rather than debate the measure"
        ],
        opponents: [
          "The Washington Education Association calls it the most extreme sports ban in the country",
          "Critics say it forces invasive medical exams on girls",
          "Opponents warn students could be forcibly outed"
        ] },
      { name: "No — reject the athletics eligibility rule", party: "I", winner: false,
        positions: [
          "Keep current school athletic eligibility rules",
          "Avoid invasive eligibility exams for students",
          "Protect student privacy and equal protection"
        ],
        differentiators: [
          "Opposed by the Washington Education Association",
          "The No Hate in Washington State coalition leads the opposition",
          "Critics argue it violates state privacy and equal protection guarantees",
          "It would add eligibility checks to routine school physicals"
        ],
        supporters: [
          "Educators say it would harm all girls who want to play",
          "Opponents argue it likely violates the state constitution",
          "The coalition warns of forced outing and student safety risks"
        ],
        opponents: [
          "Backers say it simply preserves fair girls' competition",
          "Nearly 450,000 signatures show real public demand",
          "Critics call the blocking of legislative hearings anti-democratic [Verify — structural argument]"
        ] }
    ] },

  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Initiative 1 (IL26-001) — Restoring Parents' Rights in Public Schools",
    note: "IT RE-ENACTS THE 2024 PARENTAL RIGHTS LAW (I-2081) THAT THE LEGISLATURE PARTLY REPEALED IN MAY 2025 — voters passed it, lawmakers rolled part of it back, and the sponsors are asking voters again. ✅ Certified to the Legislature, which held no hearing and adjourned March 12, 2026, sending it to the ballot. ⚠ Sponsored by Let's Go Washington, the same group behind Initiatives 638 and 645, so all three measures on this ballot come from one organisation.",
    candidates: [
      { name: "Yes — restore the parental rights law", party: "I", winner: false,
        positions: [
          "Parents may review school instructional materials",
          "Timely notification about their child's education",
          "Opt out of sexual health education"
        ],
        differentiators: [
          "Re-enacts Initiative 2081, approved by voters in 2024",
          "Responds to the Legislature's May 2025 partial repeal",
          "Sponsored by Let's Go Washington",
          "Majority Democrats declined to hold a public hearing"
        ],
        supporters: [
          "Voters already approved these rights once in 2024",
          "Lawmakers repealed part of what voters had backed",
          "The measure has drawn national parental-rights attention"
        ],
        opponents: [
          "The Washington Education Association says it would force outing of LGBTQ students",
          "Educators warn it strips protections from abused students",
          "Critics say it limits confidential student counselling"
        ] },
      { name: "No — keep the Legislature's 2025 revisions", party: "I", winner: false,
        positions: [
          "Keep the Legislature's 2025 revisions in place",
          "Protect confidential counselling for students",
          "Avoid mandatory disclosure of a student's identity"
        ],
        differentiators: [
          "Opposed by the Washington Education Association",
          "The No Hate in Washington State coalition opposes it",
          "Critics cite abuse and domestic violence protections",
          "It adds lesson-posting workload for teachers"
        ],
        supporters: [
          "Confidential counselling protects vulnerable students",
          "Educators warn about mandated outing of LGBTQ students",
          "New posting mandates add unfunded workload for schools"
        ],
        opponents: [
          "Backers note voters passed essentially this in 2024",
          "It is framed as lawmakers overriding a voter-approved law",
          "Parental review rights poll broadly well [Verify — structural argument, no poll located]"
        ] }
    ] }
];
