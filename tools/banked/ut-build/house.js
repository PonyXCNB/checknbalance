// Utah U.S. HOUSE — four seats, all run on the COURT-DRAWN "Map 1A", not the Legislature's plan.
//
// ⚠⚠ THE NUMBERING SHIFTED ONE SEAT DOWN THE LINE, AND THAT IS THE SINGLE EASIEST THING TO GET
// WRONG ABOUT UTAH IN 2026. Map 1A created a new Salt Lake County seat as CD1, and every existing
// member's territory was renumbered upward:
//   old CD1 (Blake Moore, northern Utah)  → NEW CD2
//   old CD2 (Celeste Maloy)               → NEW CD3
//   old CD3 (Mike Kennedy)                → NEW CD4
//   NEW CD1 is the Salt Lake County seat, OPEN, and the only Democratic-leaning seat in the state.
// ⚠ Blake Moore did NOT choose to switch districts — his district was renumbered under him. Do not
// write that he "left CD1 to run in CD2" (Deseret News, Apr 20, 2026: the new 2nd covers much of his
// old 1st, gaining Davis County and losing Morgan and Summit).
// ⚠ BURGESS OWENS IS NOT RUNNING. He announced Mar 4, 2026 that he would not seek re-election under
// the new map. His old seat's successor territory is contested by Mike Kennedy, who currently holds
// the 3rd District.
//
// ✅ EVERY CANDIDATE BELOW IS READ FROM THE LIEUTENANT GOVERNOR'S OWN CANDIDATE LIST
// (`vote.utah.gov/2026-candidate-filings/`, "Last updated: 8/31/2026"), which carries a STATUS
// column. Only rows marked `Election Candidate` are carded. Rows marked `Out in Convention`,
// `Out in Primary`, `Withdrew`, `Disqualified` or `Write-In` are NOT.
// ⚠ DELIBERATELY NOT CARDED: Babak "Bobby" Darvish (CD1), status `Write-In` — write-ins are not
// printed on a Utah ballot. And Jacob Paul Gottfredson (CD4, Unaffiliated), status `Disqualified` —
// the only disqualification anywhere on Utah's federal ballot; the state's list gives no reason.
// ⚠ AYDEN SCOTT (CD3, Unaffiliated) IS CARDED ON PURPOSE. He appears in no news roundup and not on
// politics1.com, which led one researcher to suspect he had withdrawn — but the STATE'S OWN LIST
// carries him as `Election Candidate`. A primary source beats an aggregator's silence. Nothing else
// about him could be found and his card says exactly that.
//
// ⚠ THE JUNE 23 PRIMARY FIGURES ARE MARKED UNOFFICIAL. Utah law has the lieutenant governor canvass
// multicounty races on the fourth Monday after the primary (July 20, 2026) and certify by Aug 1,
// which implies they are certified by now — but `electionresults.utah.gov` is a JavaScript app that
// renders nothing to a fetcher and every API path guessed against it 404s, so the `isOfficialResults`
// flag could not be read. RE-PULL and promote these to official when the site is readable.
// ⚠ COOK PVI FOR THE NEW LINES: D+12 (CD1), R+15 (CD2), R+21 (CD3), R+17 (CD4). Cook HAS recalculated
// on Map 1A, but `cookpolitical.com` 403s every path, so these were recovered from Wikipedia's Cook
// PVI table and, for CD1, independently corroborated by Deseret News. All carry [Verify].
const HOUSE_RACES = {
  1: { name: "U.S. House — Utah District 1", region: "The new Salt Lake County seat — it lies wholly inside Salt Lake County and is the only Democratic-leaning U.S. House district in Utah",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "OPEN SEAT: THE NEW CD1 LIES WHOLLY INSIDE SALT LAKE COUNTY UNDER COURT-DRAWN MAP 1A, and it is the only Democratic-leaning U.S. House seat Utah has. ✅ The Utah Supreme Court dismissed the Legislature's appeal Feb 20, 2026 and a federal three-judge panel refused to block the map Feb 23, so the map is final for 2026. ⚠ Cook PVI D+12 [Verify — via Wikipedia's Cook table, corroborated by Deseret News; Cook's own site returned 403]. ⚠ Ben McAdams won the June 23 Democratic primary with 51.90%, 29,737 of 57,295 [Verify — the state feed was still marked unofficial when pulled]. ⚠ There was no contested Republican primary, so Riley Owen never appeared in primary results; he was nominated at convention.",
        candidates: [
          { name: "Ben McAdams", party: "D", winner: false,
            positions: [
              "Save the Great Salt Lake as top priority",
              "Lower housing and health care costs",
              "Protect and expand Affordable Care Act coverage"
            ],
            differentiators: [
              "Former one-term U.S. Representative, 2019-2021, old UT-4",
              "Former two-term Salt Lake County mayor",
              "Lost the Democratic convention, then qualified by signature",
              "Raised about 2.26 million dollars through June 30, 2026"
            ],
            supporters: [
              "His county-mayor record shows he can actually deliver on housing and the lake",
              "A proven moderate is the safest fit for a blue-but-not-deep-blue seat",
              "A roughly 17-to-1 fundraising edge is evidence of broad backing"
            ],
            opponents: [
              "He is a retread who already lost a House seat to Burgess Owens in 2020",
              "Progressives say his centrism, including hedging on impeachment, blunts the message",
              "He lost the Democratic convention vote to Liban Mohamed before petitioning on"
            ] },
          { name: "Riley Owen", party: "R", winner: false,
            positions: [
              "Term limits and an age cap for Congress",
              "Ban congressional stock trading",
              "Tax credits for employer-paid maternity leave"
            ],
            differentiators: [
              "27-year-old Naval Reserve intelligence officer",
              "Former Trump White House policy staffer",
              "Won the GOP convention outright with 71.2 percent",
              "Calls his approach community conservatism"
            ],
            supporters: [
              "A young reform-minded Republican can win over unaffiliated Salt Lake voters",
              "His convention landslide shows the party is unified behind him",
              "Utah Republicans downballot still run well ahead of Trump in this district [Verify — structural argument]"
            ],
            opponents: [
              "He had about 9,500 dollars cash on hand to McAdams' 300,000 [Verify — Deseret News, Aug 11, 2026]",
              "A Trump White House resume is a liability in a district Harris carried decisively",
              "He has never held elected office"
            ] },
          { name: "Jesse West", party: "L", winner: false,
            positions: [
              "Stop funding foreign wars with U.S. tax dollars",
              "Shrink the federal government's reach into daily life",
              "Keep congressional focus on Utah's own priorities"
            ],
            differentiators: [
              "Salt Lake County family law attorney",
              "Vice chair of the Salt Lake County Libertarian Party",
              "Campaign slogan is Ski, Not War",
              "Nominated at the Libertarian convention on April 18, 2026"
            ],
            supporters: [
              "He offers an explicitly antiwar choice for voters unhappy with both major parties",
              "A convention-only, low-cost campaign keeps him free of donor obligations [Verify — structural argument]"
            ],
            opponents: [
              "FEC totals show no reported fundraising through June 30, 2026",
              "No Utah Libertarian has ever come close to winning a U.S. House seat [Verify — structural argument]"
            ] },
          { name: "Elias Henry Montgomery", party: "I", winner: false,
            positions: [
              "Legalize duplexes and townhomes to expand housing supply",
              "Independent redistricting to end gerrymandering",
              "A universal catastrophic health coverage floor"
            ],
            differentiators: [
              "Unaffiliated graduate researcher and data analyst [Verify — self-described on his campaign site]",
              "Would shift federal income taxation to the states over ten years",
              "Wants omnibus bills replaced with real-time public spending tracking",
              "Runs with no party organization behind him"
            ],
            supporters: [
              "His structural reform agenda is more concrete than either major party's [Verify — self-described on his campaign site]",
              "An independent gives Utahns a genuine choice outside the red-blue split [Verify — structural argument]"
            ],
            opponents: [
              "No FEC fundraising record for his campaign could be located [Verify — an absence of located records]",
              "Devolving federal income tax to the states sits far outside both parties' mainstream [Verify — structural argument]"
            ] }
        ] }
    ] },

  2: { name: "U.S. House — Utah District 2", region: "Northern Utah — Box Elder, Cache, Rich and Davis counties plus most of Weber; this is the territory Blake Moore represents as the old 1st District, renumbered by Map 1A",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "BLAKE MOORE DID NOT CHOOSE TO SWITCH SEATS: MAP 1A RENUMBERED HIS NORTHERN UTAH DISTRICT FROM 1 TO 2. It gained Davis County and lost Morgan and Summit. ⚠ Celeste Maloy, the old CD2 incumbent, was drawn into CD3, so Utah's whole numbering shifted one seat down the line. ✅ Moore beat state Rep. Karianne Lisonbee 56.67% to 43.33% on June 23 [Verify — the state feed was still marked unofficial when pulled]. ⚠ Cook PVI R+15 [Verify — via Wikipedia's Cook table; Cook's own site returned 403]; Inside Elections baselines the seat R+38, Solid Republican [Verify — headline figure only, the page returned 403]. ⚠ There was no contested Democratic primary; Peter Crosby was nominated at convention.",
        candidates: [
          { name: "Blake D. Moore (incumbent, currently 1st District)", party: "R", winner: false,
            positions: [
              "Make the 2017 tax cuts permanent",
              "Address mandatory spending to cut the debt",
              "Put downward pressure on health care costs"
            ],
            differentiators: [
              "House Republican Conference vice chair, fifth-ranking Republican",
              "First Utah Republican on the Ways and Means Committee",
              "Represents the old 1st District, renumbered as CD2 by Map 1A",
              "Beat a sitting state House majority whip in the primary"
            ],
            supporters: [
              "A leadership post gives Utah outsized influence in the House",
              "He helped make the 2017 tax cuts permanent in the 2025 reconciliation law",
              "Speaker Mike Johnson endorsed him in the primary [Verify — Deseret News headline, Mar 30, 2026]"
            ],
            opponents: [
              "Lisonbee blamed him for Republicans losing the redistricting fight",
              "About 43 percent of GOP primary voters backed a challenger, an unusual soft spot",
              "Crosby says his votes on public media cuts and Trump Accounts miss working families"
            ] },
          { name: "Peter Crosby", party: "D", winner: false,
            positions: [
              "Single-payer health care",
              "End tariffs and attack housing costs",
              "Federal water funding to restore the Great Salt Lake"
            ],
            differentiators: [
              "Won the Democratic nomination at convention with 76.6 percent",
              "Family tradition of military and public service [Verify — self-described on his campaign site]",
              "Opposes the Stratos data center absent community consent",
              "Raised about 60,000 dollars through June 30, 2026"
            ],
            supporters: [
              "He has canvassed northern Utah door to door since mid-2025",
              "Federal job cuts and the shrinking lake give Democrats real local traction",
              "He runs on a clear affordability-first platform"
            ],
            opponents: [
              "He faces a district Inside Elections baselines at R+38",
              "He raised roughly one fortieth of Moore's total through June 30",
              "Single-payer health care is a hard sell in a deeply Republican district [Verify — structural argument]"
            ] },
          { name: "Daniel R. Cottam", party: "L", winner: false,
            positions: [
              "Reduce federal spending and taxes [Verify — Libertarian Party platform; no Cottam statement located]",
              "Oppose federal intrusion into personal choices [Verify — Libertarian Party platform; no Cottam statement located]",
              "Non-interventionist foreign policy [Verify — Libertarian Party platform; no Cottam statement located]"
            ],
            differentiators: [
              "Bariatric surgeon by profession",
              "Has run previously for both Congress and governor",
              "Nominated at the Libertarian convention on April 18, 2026",
              "FEC totals show no reported fundraising through June 30, 2026"
            ],
            supporters: [
              "A practicing physician brings real health-system experience to the race",
              "He offers a limited-government alternative for Republicans unhappy with Moore [Verify — structural argument]"
            ],
            opponents: [
              "No reported federal fundraising could be located for this cycle [Verify — an absence of located records in FEC totals]",
              "His earlier statewide and congressional bids did not win [Verify — structural argument]"
            ] },
          { name: "Carlton E. Bowen", party: "I", winner: false,
            positions: [
              "Constitutionally limited federal government [Verify — Independent American Party platform; no Bowen statement located]",
              "Strict immigration and border enforcement [Verify — Independent American Party platform; no Bowen statement located]",
              "More state control over federal lands in Utah [Verify — Independent American Party platform; no Bowen statement located]"
            ],
            differentiators: [
              "Air Force veteran",
              "Former American Fork City Council member",
              "Independent American Party nominee, convention April 10, 2026",
              "FEC totals show no reported fundraising through June 30, 2026"
            ],
            supporters: [
              "He brings military service and municipal governing experience",
              "He offers a constitutionalist option to the right of Moore [Verify — structural argument]"
            ],
            opponents: [
              "No reported federal fundraising could be located for this cycle [Verify — an absence of located records in FEC totals]",
              "Independent American Party nominees routinely finish in low single digits in Utah [Verify — structural argument]"
            ] },
          { name: "Robert M. Moesinger", party: "I", winner: false,
            positions: [
              "Filed as unaffiliated rather than seeking any party nomination",
              "Running a small, largely self-financed campaign [Verify — FEC shows about 8,800 dollars raised]",
              "No published policy platform could be located [Verify — an absence of located records]"
            ],
            differentiators: [
              "General surgeon in Ogden with more than 30 years in practice",
              "Reached the ballot on the unaffiliated path [Verify — inferred from Utah's unaffiliated filing rules]",
              "Raised about 8,800 dollars through June 30, 2026",
              "The only candidate in the race with no party structure at all"
            ],
            supporters: [
              "A working surgeon would bring firsthand knowledge of health system costs [Verify — structural argument]",
              "He offers a nonpartisan option in a district with little real general-election competition [Verify — structural argument]"
            ],
            opponents: [
              "He raised well under one percent of Moore's total through June 30",
              "No campaign website or policy platform could be located [Verify — an absence of located records]"
            ] }
        ] }
    ] },

  3: { name: "U.S. House — Utah District 3", region: "Southern and eastern Utah — Washington, Iron, Beaver, Kane and Garfield in the southwest across to San Juan, Grand, Uintah and Carbon, plus Summit, Wasatch, Morgan and part of Utah County. Under the old map the southwest was CD2",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "MAP 1A REMADE THIS SEAT: the new UT-3 runs from Washington and Iron counties across southern and eastern Utah into part of Utah County — largely old UT-2 turf. ⚠ CELESTE MALOY CURRENTLY HOLDS THE 2ND DISTRICT SEAT, NOT THE 3RD; she is seeking a district number she has never represented. ✅ She beat Phil Lyman 65.7% to 34.3% on June 23 [Verify — the state feed was still marked unofficial when pulled]. ⚠ Cook PVI R+21 [Verify — via aggregators; Cook's own site returned 403]. ⚠ Six candidates are certified here, the fullest field in the state.",
        candidates: [
          { name: "Celeste Maloy (incumbent, currently 2nd District)", party: "R", winner: false,
            positions: [
              "State and local control of public lands",
              "Western water stability without hurting agriculture",
              "Domestic energy, fiscal restraint, border security"
            ],
            differentiators: [
              "Seats on Appropriations and Natural Resources",
              "Chairs the Congressional Western Caucus",
              "Former public lands and water attorney",
              "Raised 1.45 million dollars with 322,000 on hand, per FEC through June 30, 2026"
            ],
            supporters: [
              "Rural backers say she delivers on wildfire, water and public lands",
              "An Appropriations seat gives southern Utah unusual leverage",
              "She won every county in the new district except Lyman's home San Juan"
            ],
            opponents: [
              "Party delegates nearly ousted her at convention, 50.9% to 49.0%",
              "Critics say selling public land to fund water projects goes too far [Verify — a St. George News headline only, the article was not read]",
              "She is seeking a district number she has never represented"
            ] },
          { name: "Kent S. Udell", party: "D", winner: false,
            positions: [
              "Protect public lands and Colorado River water",
              "Regulate data center power and water use",
              "Cut cost of living for rural families"
            ],
            differentiators: [
              "Retired mechanical engineering professor from Moab",
              "Refuses corporate and PAC contributions",
              "Worked in petroleum, mining and ranching",
              "Raised about 14,000 dollars to Maloy's 287,000 [Verify — a Moab Times snapshot, not an FEC filing]"
            ],
            supporters: [
              "His energy expertise fits a district built on extraction and tourism",
              "His small-donor-only pledge appeals to voters tired of PAC money",
              "He argues the real divide is up and down, not left and right"
            ],
            opponents: [
              "Cook rates the seat R+21; no Democrat has a realistic path here [Verify — PVI via aggregators]",
              "His fundraising is a small fraction of the incumbent's",
              "He has never held elected office [Verify — an absence of located records]"
            ] },
          { name: "Michael R. Stoddard", party: "L", winner: false,
            positions: [
              "Libertarian nominee; no individual platform could be located [Verify — an absence of located records]",
              "A financial planning background suggests a fiscal focus [Verify — an inference from occupation, not a stated position]",
              "No issue statements found in state or news sources [Verify — an absence of located records]"
            ],
            differentiators: [
              "Nominated at the Libertarian convention, April 18, 2026",
              "Financial planner and accountant [Verify — a politics1.com listing]",
              "The only Libertarian certified on the UT-3 ballot"
            ],
            supporters: [
              "He offers libertarian-leaning voters an alternative in a safe Republican seat [Verify — structural argument]",
              "A convention nomination shows organised minor-party backing [Verify — structural argument]"
            ],
            opponents: [
              "No campaign website, fundraising or press coverage could be located [Verify — an absence of located records]",
              "Utah minor-party House candidates rarely clear low single digits [Verify — structural argument]"
            ] },
          { name: "Cassie Easley", party: "I", winner: false,
            positions: [
              "Constitution Party nominee; no individual platform could be located [Verify — an absence of located records]",
              "The party label implies constitutional limits on federal power [Verify — a party label, not her stated position]",
              "No issue statements located from her campaign [Verify — an absence of located records]"
            ],
            differentiators: [
              "Constitution Party state vice chair [Verify — a politics1.com listing]",
              "Southern Utah University student and community volunteer [Verify — Ballotpedia]",
              "Nominated at the Constitution Party convention, April 25, 2026"
            ],
            supporters: [
              "She gives religious-conservative voters an option to the right of the incumbent [Verify — structural argument]",
              "A party leadership role signals organisational support [Verify — structural argument]"
            ],
            opponents: [
              "No fundraising or campaign site could be located [Verify — an absence of located records]",
              "Third-party bids in Utah House races almost never break 2% [Verify — structural argument]"
            ] },
          { name: "Adonis Hooslyn", party: "I", winner: false,
            positions: [
              "Unaffiliated candidate; no platform could be located [Verify — an absence of located records]",
              "No stated issue positions found in any source [Verify — an absence of located records]",
              "Ran no contested nomination race, so no primary record exists"
            ],
            differentiators: [
              "Listed as a project coordinator [Verify — a politics1.com listing]",
              "Qualified as an unaffiliated candidate, not through a party convention",
              "Certified as an Election Candidate on the Lieutenant Governor's own list"
            ],
            supporters: [
              "He offers a non-party option in a race with a near-certain outcome [Verify — structural argument]",
              "He cleared Utah's unaffiliated ballot-access requirements on his own [Verify — structural argument]"
            ],
            opponents: [
              "No campaign website, fundraising or press coverage could be located [Verify — an absence of located records]",
              "Unaffiliated candidates without funding rarely register in polling [Verify — structural argument]"
            ] },
          { name: "Ayden Scott", party: "I", winner: false,
            positions: [
              "Unaffiliated candidate; no platform could be located [Verify — an absence of located records]",
              "No stated issue positions found in any source [Verify — an absence of located records]",
              "No convention or primary record; he qualified by filing"
            ],
            differentiators: [
              "Carried as an Election Candidate on the Lieutenant Governor's own list",
              "No occupation or biography could be located [Verify — an absence of located records]",
              "Omitted from at least one candidate roundup that listed the rest of the field [Verify — politics1.com does not list him]"
            ],
            supporters: [
              "He adds a second independent choice on a lopsided ballot [Verify — structural argument]",
              "He met Utah's unaffiliated signature and filing requirements [Verify — structural argument]"
            ],
            opponents: [
              "Nothing about the candidacy could be found beyond the state's own list [Verify — an absence of located records]",
              "He faces a district Cook scores R+21 with no visible campaign [Verify — structural argument]"
            ] }
        ] }
    ] },

  4: { name: "U.S. House — Utah District 4", region: "The suburban seat — the rest of Salt Lake County outside CD1, plus Tooele, Juab, Millard, Sanpete and Sevier counties and part of Utah County",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "NO PRIMARY WAS HELD HERE IN EITHER PARTY. ✅ Burgess Owens announced Mar 4, 2026 that he will not seek re-election under the new map, and Rep. Mike Kennedy — who currently holds the 3rd District — took the Republican nomination with 78.7% at the April 25 convention. ⚠ Under Map 1A this seat is the rest of Salt Lake County plus Tooele, Juab, Millard, Sanpete and Sevier; Cook scores it R+17 [Verify — via aggregators; Cook's own site returned 403]. ⚠ One unaffiliated filer, Jacob Paul Gottfredson, is marked DISQUALIFIED on the state's list — the only disqualification on Utah's federal ballot — and the list gives no reason.",
        candidates: [
          { name: "Mike Kennedy (incumbent, currently 3rd District)", party: "R", winner: false,
            positions: [
              "Secure the border, streamline legal immigration",
              "Fight inflation with tax and energy policy",
              "Expand domestic and geothermal energy production"
            ],
            differentiators: [
              "Family physician and attorney, a decade in the Legislature",
              "Won the GOP nomination outright at convention with 78.7%",
              "Sponsored the Utah law restricting transgender care for minors",
              "Raised 971,000 dollars with 392,000 on hand, per FEC through June 30, 2026"
            ],
            supporters: [
              "Backers cite an unusually productive freshman term on energy bills",
              "His convention landslide showed near-total party unity",
              "A doctor-lawyer resume reassures suburban Republicans"
            ],
            opponents: [
              "He is running in a district he has never represented",
              "Democrats call his transgender-care law out of step with suburban Salt Lake County [Verify — structural argument]",
              "No primary means voters never got to weigh alternatives"
            ] },
          { name: "Jonny Larsen", party: "D", winner: false,
            positions: [
              "Expand VA clinics and veterans' health care",
              "Protect Social Security and Medicare",
              "Economic policy aimed at working families"
            ],
            differentiators: [
              "Marine infantry sergeant, two Iraq deployments",
              "Systems administrator by trade [Verify — sources differ on health care versus IT]",
              "Loaned his own campaign 36,155 dollars",
              "Raised 53,600 dollars with 1,100 on hand, per FEC through June 30, 2026"
            ],
            supporters: [
              "Veterans say no one has pressed harder on VA access gaps in the district",
              "His combat record gives a Democrat credibility in a conservative seat",
              "He won the Democratic nomination without a divisive primary"
            ],
            opponents: [
              "Cook scores UT-4 at R+17; the arithmetic is daunting [Verify — PVI via aggregators]",
              "He ended June with about 1,100 dollars on hand",
              "He has never held elected office [Verify — an absence of located records]"
            ] },
          { name: "Taylor Wright", party: "L", winner: false,
            positions: [
              "Libertarian nominee; no individual platform could be located [Verify — an absence of located records]",
              "Hosts a podcast called Saving Humanity, contents not reviewed [Verify — described in press, not read]",
              "No issue statements found in state or news sources [Verify — an absence of located records]"
            ],
            differentiators: [
              "Nominated at the Libertarian convention, April 18, 2026",
              "Elementary school teacher and former college football coach",
              "Works with adults with special needs",
              "Lives in South Salt Lake, inside the redrawn district"
            ],
            supporters: [
              "He offers libertarian voters a choice in a race with no primary contest [Verify — structural argument]",
              "A teacher and caregiver background is an unusual profile for the ballot"
            ],
            opponents: [
              "No fundraising or campaign site could be located [Verify — an absence of located records]",
              "Utah Libertarian House candidates typically finish in low single digits [Verify — structural argument]"
            ] },
          { name: "Steven Burt", party: "I", winner: false,
            positions: [
              "Unaffiliated candidate; no platform could be located [Verify — an absence of located records]",
              "A solar industry background suggests an energy focus [Verify — an inference from career, not a stated position]",
              "No issue statements located from his campaign [Verify — an absence of located records]"
            ],
            differentiators: [
              "Attorney specialising in government affairs",
              "Former executive and in-house counsel for solar energy companies",
              "Qualified as an unaffiliated candidate rather than through a convention"
            ],
            supporters: [
              "Energy-law experience is directly relevant to the district's growth fights [Verify — structural argument]",
              "He gives voters a non-party option in a race with no primary [Verify — structural argument]"
            ],
            opponents: [
              "No fundraising or campaign website could be located [Verify — an absence of located records]",
              "Independents in Utah House races rarely clear low single digits [Verify — structural argument]"
            ] }
        ] }
    ] }
};
