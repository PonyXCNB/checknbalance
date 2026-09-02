// Washington U.S. HOUSE — ten seats on the 2021 Redistricting Commission plan as amended by
// HCR 4407, UNCHANGED since 2022. Washington is on neither half of the post-Callais mid-decade
// redraw wave: HJR 4209, which would have let the Legislature draw a mid-decade congressional map,
// needed two-thirds in each chamber and never reached the ballot.
//
// ⚠⚠ WASHINGTON USES A TOP-TWO PRIMARY, AND IT CHANGES HOW EVERY RACE BELOW SHOULD BE READ.
// The two highest finishers on Aug 4 advance to November REGARDLESS OF PARTY — there are no party
// nominations. The party shown beside each name is a SELF-DECLARED BALLOT PREFERENCE the candidate
// wrote on their own filing form ("Prefers Democratic Party", "Prefers Trump Republican Party",
// "States No Party Preference"), not an endorsement by that party. Two Democrats can face each
// other in November; a third-place finisher is eliminated with no runoff.
//
// ✅ EVERY PRIMARY FIGURE BELOW IS OFFICIAL. County canvassing boards certified Aug 18, 2026 and
// Secretary of State Steve Hobbs certified the statewide canvass Aug 21, 2026; the figures were read
// from results.votewa.gov's own certified feed (isOfficialResults: true).
// ⚠ Election-night numbers circulated widely and DISAGREE with the certified canvass in at least two
// races — WA-3 (OPB had Gluesenkamp Perez narrowly FIRST) and WA-9 (mynorthwest had Smith at 50.9%).
// The certified figures are what is carried here. Treat any pre-Aug-21 percentage as stale.
//
// ⚠⚠ EVERY COOK PVI ON THIS PAGE IS AGGREGATOR-SOURCED AND MARKED. `cookpolitical.com` returns 403
// on every path tried — the PVI hub, the 2025 PVI district list, the Washington House analysis and
// individual race pages — as do insideelections.com, centerforpolitics.org and 270towin. The values
// were recovered from Ballotpedia, Wikipedia and search summaries of Cook's own pages. None of them
// is a direct read, and every one carries a [Verify] saying so. No handicapper rating is asserted
// anywhere except WA-8's, which is itself marked.
const HOUSE_RACES = {
  1: { name: "U.S. House — Washington District 1", region: "Northeastern King County and southern Snohomish County — the I-405 and Sammamish valley suburbs",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "DELBENE WON AN OUTRIGHT MAJORITY IN A SEVEN-WAY PRIMARY. ⚠ Washington uses a top-two primary: the two highest finishers advance regardless of party, and ballot party labels are self-declared preferences, not nominations. ✅ Certified Aug 21, 2026 by Secretary of State Steve Hobbs — DelBene 53.03%, Silva 26.21% of 160,573 votes.",
        candidates: [
          { name: "Suzan DelBene (incumbent)", party: "D", winner: false,
            positions: [
              "Make the expanded Child Tax Credit permanent",
              "Expand the low-income housing tax credit",
              "Roll back tariffs, defend the ACA and Medicaid"
            ],
            differentiators: [
              "In the House since 2012, Medina resident",
              "House Ways and Means Committee member",
              "DCCC chair, confirmed for a second straight cycle",
              "Raised 2.74 million dollars as of July 13"
            ],
            supporters: [
              "She cleared 53 percent outright against six challengers",
              "A Ways and Means seat gives the district real tax-writing leverage",
              "Endorsed by Gov. Bob Ferguson, Sen. Patty Murray and labor unions"
            ],
            opponents: [
              "Chairing the DCCC pulls her attention to national races, not the district",
              "Some Democrats have publicly called for a DCCC reset after high-profile special-election losses [Verify — reported by NOTUS, not independently confirmed]",
              "Critics cast a former Microsoft executive from Medina as distant from working-class constituents [Verify — structural argument]"
            ] },
          { name: "Mary Silva", party: "R", winner: false,
            positions: [
              "Tax incentives to attract tech and manufacturing",
              "Break up large health insurance monopolies",
              "Oppose vaccine mandates and public health restrictions"
            ],
            differentiators: [
              "Audiologist of roughly 20 years, Everett resident",
              "Second run; she lost the 2024 WA-1 primary",
              "Finished second with 26.21 percent, consolidating the GOP vote",
              "Raised about 3,200 dollars, mostly self-funded, per FEC"
            ],
            supporters: [
              "She consolidated the Republican vote in a field of five Democrats",
              "A practising clinician arguing health care consolidation drives up costs",
              "Endorsed by Stand for Health Freedom on vaccine-mandate opposition [Verify — reported by the Everett Herald]"
            ],
            opponents: [
              "Her campaign reported roughly 3,200 dollars in total receipts against DelBene's 2.74 million",
              "The King County Republican Party withdrew its endorsement of her [Verify — reported by the Everett Herald; no reason stated]",
              "DelBene took an outright majority in the primary, leaving little path in November [Verify — structural argument]"
            ] }
        ] }
    ] },

  2: { name: "U.S. House — Washington District 2", region: "The northwest corner — Whatcom, Skagit, Island and San Juan counties plus western Snohomish",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "LARSEN IS SEEKING A 14TH TERM AND TOOK ONLY 42 PERCENT IN A FOUR-WAY PRIMARY. ⚠ Top-two primary: the two highest finishers advance regardless of party; ballot labels are self-declared party preference. ✅ Certified Aug 21, 2026 — Larsen 42.34%, Feller 32.80% of 209,510; two other Democrats drew 24.8% between them, so the Democratic vote was split three ways.",
        candidates: [
          { name: "Rick Larsen (incumbent)", party: "D", winner: false,
            positions: [
              "Lower health care, housing, grocery and fuel costs",
              "Protect the Affordable Care Act and Medicaid",
              "Sustained federal transportation and aviation investment"
            ],
            differentiators: [
              "In office since 2001, seeking a 14th term",
              "Ranking member, House Transportation and Infrastructure Committee",
              "Led the primary with 42.34 percent",
              "Reported about 2 million dollars in contributions [Verify — Cascadia Daily News reporting, not a direct FEC read]"
            ],
            supporters: [
              "The top Democrat on Transportation and Infrastructure matters in an aviation, ferry and port district",
              "Democrats took roughly 67 percent of the combined primary vote",
              "A roughly 2 million dollar war chest against an opponent with no reported receipts"
            ],
            opponents: [
              "He drew only 42 percent while two fellow Democrats took a quarter of the vote",
              "Twenty-six years in the seat invites a generational-change argument [Verify — structural argument]",
              "Republicans argue a long-tenured incumbent owns the affordability problems he now campaigns on [Verify — structural argument]"
            ] },
          { name: "Edwin H. Feller", party: "R", winner: false,
            positions: [
              "Robust law enforcement, end sanctuary policies",
              "Expand nuclear and hydroelectric energy",
              "Lower taxes, cut federal spending"
            ],
            differentiators: [
              "83-year-old Lynden native, first run for any office",
              "Founded Feller Heating and Air Conditioning; roughly 60 years in the trades",
              "Built and serviced U.S. embassy facilities in dozens of countries",
              "No FEC financial reports filed for the 2025-2026 cycle"
            ],
            supporters: [
              "He consolidated the entire Republican vote at 32.8 percent with no primary rival of his party",
              "A lifelong district resident with decades of skilled-trades and overseas federal contracting work",
              "He runs as an outsider against an incumbent first elected in 2000"
            ],
            opponents: [
              "No campaign fundraising could be located in FEC filings [Verify — an absence of located records; his committee is registered but has filed no financials]",
              "He served as his own campaign manager through the primary",
              "Democrats outpolled Republicans roughly two to one in the district's primary [Verify — structural argument]"
            ] }
        ] }
    ] },

  3: { name: "U.S. House — Washington District 3", region: "Southwest Washington — Clark, Cowlitz, Lewis, Pacific, Skamania and Wahkiakum counties plus part of Thurston",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "THE DEMOCRATIC INCUMBENT FINISHED SECOND IN HER OWN PRIMARY. ⚠ Under Washington's top-two primary the top two advance regardless of party, so second place is not a loss — but it is a warning sign. ✅ Certified Aug 21, 2026 — Braun 39.66%, Gluesenkamp Perez 36.38% of 214,491; Democrats combined about 55 percent to Republicans' 43 percent, so the party totals and the candidate order point opposite ways. ⚠ This is the most competitive U.S. House race in Washington.",
        candidates: [
          { name: "Marie Gluesenkamp Perez (incumbent)", party: "D", winner: false,
            positions: [
              "Skilled trades and federal funding for the district",
              "Tribal management of sea lions to protect Columbia River salmon",
              "Worker and chemical safety, lower everyday costs"
            ],
            differentiators: [
              "Has held a Trump-won district since 2022",
              "Finished SECOND in her own certified primary, 36.38 percent",
              "Raised 6.29 million dollars with 2.06 million on hand through July 15, per FEC",
              "Endorsed by the Washington State Labor Council AFL-CIO and the State Building Trades Council"
            ],
            supporters: [
              "Democrats out-polled Republicans about 55 to 43 percent across the whole primary field",
              "She restored Chemical Safety Board funding and pressed a Longview mill to pay idled workers",
              "A three-to-one fundraising edge and proven crossover appeal in a Trump district"
            ],
            opponents: [
              "Nearly a third of Democratic primary voters backed progressive Brent Hennrich, who declined to endorse her",
              "Progressives fault her support for Israel, her SAVE Act vote and her fossil-fuel positions",
              "Finishing behind a Republican in the primary suggests eroded standing at home"
            ] },
          { name: "John Braun", party: "R", winner: false,
            positions: [
              "Keep federal income tax rates low",
              "Broad energy production to hold down prices",
              "Aligns with the Trump agenda except on tariffs"
            ],
            differentiators: [
              "Washington State Senate Republican Leader, 20th district, Centralia",
              "Finished FIRST in the certified primary with 39.66 percent",
              "Endorsed by President Trump in April 2026",
              "Army veteran; president of Braun Northwest, roughly 350 employees"
            ],
            supporters: [
              "He led the primary field and enters November with Trump's endorsement",
              "Statewide legislative leadership and a manufacturing payroll give him a governing resume",
              "He is seen as more mainstream and less polarising than the district's prior Republican nominee"
            ],
            opponents: [
              "Republicans took only about 43 percent of the combined primary vote",
              "He was outraised roughly three to one, 2.04 million to 6.29 million dollars",
              "Breaking with Trump on tariffs while running on his endorsement invites attacks from both directions [Verify — structural argument]"
            ] }
        ] }
    ] },

  4: { name: "U.S. House — Washington District 4", region: "Central Washington — Yakima, Benton, Grant, Okanogan and Klickitat counties plus parts of Adams, Douglas and Franklin",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "OPEN SEAT: REP. DAN NEWHOUSE (R) ANNOUNCED DEC 17, 2025 THAT HE WOULD NOT SEEK A SEVENTH TERM. He did not lose, withdraw or resign — he is serving out his term. ⚠ Top-two primary: the two highest finishers advance regardless of party. ✅ Certified Aug 21 — McKinney 34.80%, Duresky 29.92%. A DEMOCRAT PLACED SECOND in a district that has not elected one since Jay Inslee in 1992 [Verify — a historical claim from press summaries]. ⚠ Jerrod Sessler, Trump's 2024 endorsee who nearly beat Newhouse, ran THIRD at 14.59% and is eliminated; Trump endorsed McKinney this cycle.",
        candidates: [
          { name: "Amanda McKinney", party: "R", winner: false,
            positions: [
              "Commonsense water policy protecting Central Washington farms",
              "Backs Trump on border security and immigration enforcement",
              "Second Amendment, ending DEI, barring trans women from women's sports"
            ],
            differentiators: [
              "Yakima County commissioner since 2020",
              "Endorsed by President Trump and Speaker Mike Johnson",
              "Raised over 981,000 dollars by July 15, the most in the field",
              "Opposed prolonged COVID shutdowns and vaccine mandates"
            ],
            supporters: [
              "She pairs America First politics with genuine water and agriculture expertise",
              "Trump and Johnson endorsements are evidence she can deliver for the district",
              "Her county record shows her pushing back on federal regulation of farms and dairies"
            ],
            opponents: [
              "Local letters to the editor question what her large financial backers expect in return",
              "She would replace an independent-minded Republican with a straight party-line vote [Verify — structural argument]",
              "A national culture-war focus crowds out district problems like water and labor [Verify — structural argument]"
            ] },
          { name: "John Duresky", party: "D", winner: false,
            positions: [
              "Affordability is the district's top problem",
              "Supports some form of universal health care",
              "Raise Medicare and Medicaid rates for rural hospitals"
            ],
            differentiators: [
              "Retired Air Force major, roughly 37 years of federal service",
              "Former project control officer at the Hanford site",
              "The only Democrat among 11 primary candidates",
              "Endorsed by the WA State Labor Council and the Washington Education Association"
            ],
            supporters: [
              "A career veteran and federal worker can reach rural voters other Democrats cannot",
              "His second-place finish shows real crossover appeal in a deep-red seat",
              "He held town halls in small Klickitat County towns rather than only in the cities"
            ],
            opponents: [
              "The seat has not elected a Democrat since 1992 and rates about R+10 [Verify — both figures via aggregators; Cook's own site returned 403]",
              "He was heavily outraised in the primary and starts far behind on money",
              "Universal health care is a hard sell in Central Washington [Verify — structural argument]"
            ] }
        ] }
    ] },

  5: { name: "U.S. House — Washington District 5", region: "Eastern Washington — Spokane, Whitman, Walla Walla, Stevens, Asotin, Lincoln and the far northeast, plus parts of Adams and Franklin",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "FIRST-TERM INCUMBENT MICHAEL BAUMGARTNER (R) DREW 11 CHALLENGERS AND FINISHED UNDER HALF AT 47.40%. ⚠ Top-two primary: party labels are self-declared ballot preferences, not nominations. ✅ Certified Aug 21 — Baumgartner 47.40%, Carmela Conroy 18.85%, and independent Nate Powell a close third at 16.38%. This is a 2024 rematch. ⚠ Cook PVI R+5 [Verify — via Ballotpedia and Wikipedia; Cook's own site returned 403].",
        candidates: [
          { name: "Michael Baumgartner (incumbent)", party: "R", winner: false,
            positions: [
              "Supports the administration's military action against Iran",
              "Aligned with Trump on tariffs and immigration",
              "Sponsored a ban on prediction-market betting on wildfires"
            ],
            differentiators: [
              "First-term incumbent, elected 2024",
              "Former state senator and Spokane County treasurer",
              "Sits on Judiciary, Foreign Affairs, and Education and Workforce",
              "Beat Conroy 60.6 percent to 39.3 percent in 2024"
            ],
            supporters: [
              "Three substantive committee seats give Eastern Washington unusual early influence",
              "A 21-point 2024 win shows the district is comfortable with him",
              "Locally targeted bills such as his wildfire betting ban"
            ],
            opponents: [
              "The Spokesman-Review has described him as a party-line Trump vote on tariffs and Iran, both unpopular at home",
              "Eleven challengers ran against him and he still finished below 50 percent",
              "A 47 percent primary showing signals softness in a midterm against the president's party [Verify — structural argument]"
            ] },
          { name: "Carmela Conroy", party: "D", winner: false,
            positions: [
              "Opposes the war with Iran",
              "Runs on diplomatic and prosecutorial experience over party loyalty",
              "No detailed domestic platform beyond her campaign site could be located [Verify — an absence of located records]"
            ],
            differentiators: [
              "Retired U.S. consul general, foreign service 1996 to 2020",
              "Former Spokane County deputy prosecutor",
              "Former chair of the Spokane County Democratic Party, 2022 to 2024",
              "Second run against Baumgartner after losing in 2024"
            ],
            supporters: [
              "Decades of diplomatic service are exactly the check Congress needs during a war",
              "Her 2024 run gave her name recognition a first-time challenger would lack",
              "An R+5 seat is reachable in a midterm against the president's party"
            ],
            opponents: [
              "She lost this same matchup by more than 21 points in 2024",
              "She took under 19 percent in the primary while other Democrats and independents split the rest",
              "Her published platform is thin on the local economy [Verify — structural argument from limited located policy detail]"
            ] }
        ] }
    ] },

  6: { name: "U.S. House — Washington District 6", region: "The Olympic Peninsula and Kitsap — Clallam, Jefferson, Grays Harbor, Mason and Kitsap counties plus part of Pierce",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "INCUMBENT EMILY RANDALL (D) TOOK 58.77% IN THE PRIMARY, MORE THAN HER FOUR OPPONENTS COMBINED. ⚠ Top-two primary: the two highest finishers advance regardless of party. ✅ Certified Aug 21 — Randall 58.77%, Republican Teresa Fox 25.54%; Leon Lawson, who declared a preference for the Trump Republican Party, took 9.72%. ⚠ Cook PVI D+10 [Verify — via Ballotpedia; Cook's own site returned 403].",
        candidates: [
          { name: "Emily Randall (incumbent)", party: "D", winner: false,
            positions: [
              "Protect and strengthen the Affordable Care Act",
              "Lower out-of-pocket prescription drug costs",
              "Defend reproductive, mental and culturally relevant health care"
            ],
            differentiators: [
              "First term; won the open seat in 2024 with 56.8 percent",
              "First queer Latina to serve in the U.S. House",
              "Says she secured 17.9 million dollars for district projects [Verify — self-reported]",
              "Founded and co-chairs the Congressional Ferry Caucus"
            ],
            supporters: [
              "Federal money delivered for ferries, transit and wastewater across the district",
              "She is a dependable vote for the ACA and reproductive rights",
              "She has given attention to Puget Sound Naval Shipyard commuting and workforce needs"
            ],
            opponents: [
              "She graded her own first-term work bringing money home only a B-plus",
              "A first-term minority-party member has limited leverage to deliver [Verify — structural argument]",
              "Her emphasis fits urban Kitsap better than the rural Olympic Peninsula [Verify — structural argument]"
            ] },
          { name: "Teresa Fox", party: "R", winner: false,
            positions: [
              "Cut federal spending to bring down inflation",
              "Staff and fund rural law enforcement",
              "Fiscal restraint paired with naval readiness"
            ],
            differentiators: [
              "Occupational safety professional and emergency manager",
              "Worked in shipyards, naval facilities and at Olympic College",
              "Unanimously endorsed by all six county Republican parties in the district",
              "Runs explicitly as a non-politician against career politics"
            ],
            supporters: [
              "A shipyard safety career speaks directly to the district's largest employer",
              "Unified backing from every county Republican organisation in the district",
              "Voters want a citizen candidate focused on costs and public safety"
            ],
            opponents: [
              "She trailed Randall by 33 points in the primary in a D+10 seat",
              "She has never held elected office and no significant fundraising base was located [Verify — an absence of located records]",
              "County-party endorsements do not translate in a district Randall carried with 56.8 percent in 2024"
            ] }
        ] }
    ] },

  7: { name: "U.S. House — Washington District 7", region: "Seattle and its immediate neighbours — the district sits ENTIRELY inside King County",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "JAYAPAL TOOK 84% OF THE PRIMARY IN WASHINGTON'S MOST DEMOCRATIC SEAT, COOK PVI D+39 [Verify — PVI read via a search summary; Cook's own site returned 403]. ⚠ Washington's top-two primary advances the two leaders regardless of party; a listed party is a self-declared ballot preference, not a nomination. ✅ Certified Aug 21, 2026 — Jayapal 182,844 (84.36%), Nirav Sheth 21,282 (9.82%) of 216,741.",
        candidates: [
          { name: "Pramila Jayapal (incumbent)", party: "D", winner: false,
            positions: [
              "Medicare for All",
              "Legalization and a path to citizenship",
              "Higher minimum wage and universal childcare"
            ],
            differentiators: [
              "Chair emerita of the Congressional Progressive Caucus",
              "Ranking member on the House immigration subcommittee",
              "Ran Kidnapped and Disappeared oversight hearings on ICE",
              "Confirmed running for re-election to the House, not another office"
            ],
            supporters: [
              "Her Medicare for All and immigration work makes her the district's clearest progressive voice",
              "An 84 percent primary showing suggests broad satisfaction across a heavily Democratic seat",
              "She has used ranking-member status to force oversight hearings on immigration enforcement"
            ],
            opponents: [
              "Critics say a D+39 seat frees her to chase a national profile over local casework [Verify — structural argument]",
              "A conservative Seattle outlet faulted a fundraising email calling fellow Democrats Trump-lite [Verify — one opinion outlet, not independently confirmed]",
              "Republicans argue Medicare for All is unaffordable [Verify — a standard party critique, not a specific sourced attack]"
            ] },
          { name: "Nirav Sheth", party: "R", winner: false,
            positions: [
              "Law, order and public safety",
              "Lower cost of living",
              "Energy independence"
            ],
            differentiators: [
              "Former Marine Corps member and police officer",
              "Small business owner",
              "Campaigns on accountability in Washington D.C. and on homelessness",
              "Took under 10 percent in the certified primary"
            ],
            supporters: [
              "A Marine and policing background gives weight to his law-and-order message",
              "He puts homelessness and affordability at the centre rather than national culture fights",
              "He gives the district's Republican minority an actual name on the November ballot [Verify — structural argument]"
            ],
            opponents: [
              "He trailed Jayapal by roughly 75 points in the primary in a D+39 district",
              "No significant independent policy reporting on him could be located [Verify — an absence of located coverage, searched by name and by district]",
              "No campaign fundraising of any scale could be located [Verify — an absence of located records]"
            ] }
        ] }
    ] },

  8: { name: "U.S. House — Washington District 8", region: "The Cascade crest — Chelan and Kittitas counties plus the eastern suburbs of King, Pierce, Snohomish and part of Douglas",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "SCHRIER TOOK 53.69% OUTRIGHT AND OUTPOLLED ALL FOUR REPUBLICANS COMBINED, 102,853 to 83,595. ⚠ Long the state's most competitive seat, Cook PVI D+3 — but Cook moved it Likely D to Solid D and Sabato Likely to Safe Democratic for 2026 [Verify — both read via search summaries; both raters' sites returned 403]. ✅ Certified Aug 21 — Schrier 102,853, Spencer Meline 30,324 (15.83%).",
        candidates: [
          { name: "Kim Schrier (incumbent)", party: "D", winner: false,
            positions: [
              "Lower prescription drug and insulin costs",
              "Expand children's access to primary care",
              "Wildfire resilience and forest health"
            ],
            differentiators: [
              "A practising pediatrician before entering Congress",
              "Touts 18 bills signed under two presidents [Verify — self-reported]",
              "Won 53.69 percent outright in a six-candidate primary",
              "Flipped the seat in 2018 and has held it since"
            ],
            supporters: [
              "Her bipartisan health and wildfire bills show she can pass things in a divided House",
              "She outpolled all four Republicans combined in the August primary",
              "Handicappers have moved the district from competitive toward safe on her record"
            ],
            opponents: [
              "Republicans say she brands as a moderate but votes with her party on contested social issues",
              "Meline points to her vote against the Protect Kids Act as evidence of that gap",
              "Some progressives want more than incremental health legislation [Verify — structural argument]"
            ] },
          { name: "Spencer Meline", party: "R", winner: false,
            positions: [
              "Housing affordability and first-time buyer tax credits",
              "Limit institutional investors in single-family homes",
              "Small business support and public lands stewardship"
            ],
            differentiators: [
              "Owns three Leavenworth restaurants, lives in Cashmere",
              "Endorsed by the King County GOP",
              "Proposes a portable-mortgage pilot for COVID-era low rates",
              "Was outraised roughly 20 to 1 [Verify — the ratio is from local reporting, not read off FEC]"
            ],
            supporters: [
              "He offers a concrete housing platform rather than only national talking points",
              "He argues young workers are leaving for Texas and Idaho because costs priced them out",
              "He beat three other Republicans to consolidate the district's GOP vote"
            ],
            opponents: [
              "He trailed Schrier by nearly 38 points in the primary",
              "Calling Washington a lab of the radical left may not travel in D+3 suburbs [Verify — structural argument]",
              "Handicappers now rate the seat Solid or Safe Democratic rather than competitive"
            ] }
        ] }
    ] },

  9: { name: "U.S. House — Washington District 9", region: "South Seattle, Bellevue, Renton, Kent and Federal Way — the district sits ENTIRELY inside King County and is the population plurality of no county at all",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "SEATTLE SOCIALIST KSHAMA SAWANT RAN AND PLACED THIRD, AND WASHINGTON HAS NO RUNOFF, SO SHE IS ELIMINATED. ⚠ Adam Smith, in office since 1997, took only 47.13% against a split left — a majority of primary voters chose someone else. ✅ Certified Aug 21 — Smith 67,095, Doug Basler 31,070 (21.83%), Sawant 24,583 (17.27%), Melissa Chaudhry 17,811 (12.51%). ⚠ Cook PVI D+22 [Verify — via a search summary; Cook's own site returned 403].",
        candidates: [
          { name: "Adam Smith (incumbent)", party: "D", winner: false,
            positions: [
              "Stronger congressional oversight of the Pentagon",
              "Cutting off U.S. military aid to Israel",
              "Removing U.S.-Israel cooperation language from the NDAA"
            ],
            differentiators: [
              "Ranking member of the House Armed Services Committee",
              "Has held the seat since 1997",
              "Won only 47.13 percent of his own primary",
              "Shifted in 2026 to back cutting Israel aid"
            ],
            supporters: [
              "As ranking Armed Services Democrat he would lead the panel if Democrats take the House",
              "He changed his Israel position after constituent conversations, showing he listens",
              "He still finished about 25 points clear of his nearest challenger"
            ],
            opponents: [
              "A majority of primary voters picked someone other than the incumbent",
              "Critics on the left say his Israel shift came late and only under sustained pressure",
              "He has publicly blamed far-left activists for harassment, widening the rift with progressives"
            ] },
          { name: "Doug Basler", party: "R", winner: false,
            positions: [
              "Affordability and cost of living",
              "Public safety",
              "Pro-business, fewer barriers for employers"
            ],
            differentiators: [
              "Sixth general-election matchup against Adam Smith",
              "Also ran in 2014, 2016, 2018, 2020 and 2022, losing each time [Verify — the run count is from mynorthwest and Ballotpedia]",
              "Spokane native; advertising and video production business owner",
              "Finished ahead of Sawant on about a seventh of her fundraising"
            ],
            supporters: [
              "He consolidated the anti-Smith Republican vote to finish second in a crowded field",
              "He outran a far better funded socialist challenger on roughly 99,000 dollars raised",
              "Six cycles on the ballot give Republicans a familiar name here [Verify — structural argument]"
            ],
            opponents: [
              "He has lost to Smith five straight times, taking 29.2 percent in 2014 [Verify — the 2014 share is confirmed; later general shares were not checked]",
              "The district is Cook PVI D+22, well outside Republican reach [Verify — structural argument]",
              "Little detailed policy beyond a broad affordability and family frame could be located [Verify — an absence of located coverage]"
            ] }
        ] }
    ] },

  10: { name: "U.S. House — Washington District 10", region: "The South Sound — Olympia, Lacey and Tacoma's southern suburbs around Joint Base Lewis-McChord, spanning Thurston and Pierce counties",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "STRICKLAND TOOK ONLY 47.26% OF HER OWN PRIMARY WITH TWO OTHER DEMOCRATS ON THE BALLOT. ⚠ Republican Chris D. Chung sought Washington insurance commissioner as a DEMOCRAT in the 2024 primary — a party switch worth knowing about before you vote. ✅ Certified Aug 21 — Strickland 73,689, Chung 48,953 (31.40%), Alex Scheel (D) 16,074, Adam Arafat (D) 14,695. ⚠ Cook PVI D+9 [Verify — via a search summary; Cook's own site returned 403].",
        candidates: [
          { name: "Marilyn Strickland (incumbent)", party: "D", winner: false,
            positions: [
              "Military housing supply and full basic allowance for housing",
              "Pay raises for junior enlisted servicemembers",
              "Federal facility funding for Joint Base Lewis-McChord"
            ],
            differentiators: [
              "Serves on the House Armed Services Committee",
              "Secured 89 million dollars for a JBLM airfield fire and rescue station",
              "Former mayor of Tacoma [Verify — widely reported, not re-read from a primary source]",
              "Took 47.26 percent against two fellow Democrats"
            ],
            supporters: [
              "She delivers concrete JBLM appropriations in a district built around the base",
              "She backed a 14.5 percent pay raise for junior enlisted troops and restored full BAH",
              "She still finished about 16 points ahead of the field"
            ],
            opponents: [
              "More than half of primary voters chose someone other than the incumbent",
              "Anti-war Democrat Alex Scheel ran against her on ending U.S. military aid to Israel",
              "Critics say the base focus leaves civilian affordability comparatively thin [Verify — structural argument]"
            ] },
          { name: "Chris D. Chung", party: "R", winner: false,
            positions: [
              "Health care access, framed from pharmacy practice",
              "Public safety",
              "Better education"
            ],
            differentiators: [
              "A community pharmacist for more than 30 years",
              "Ran for insurance commissioner as a Democrat in 2024",
              "Ran for Federal Way mayor in 2025",
              "Best Republican primary share of Washington's four Puget Sound seats"
            ],
            supporters: [
              "Three decades running a community pharmacy give him direct experience with drug costs",
              "He was the only Republican on the ballot and consolidated 31 percent of the primary vote",
              "Having filed under both party labels, he can claim independence from either [Verify — structural argument]"
            ],
            opponents: [
              "Running as a Republican after seeking statewide office as a Democrat in 2024 invites consistency questions",
              "He trailed Strickland by nearly 16 points in a Cook PVI D+9 district",
              "No detailed policy platform beyond health, safety and education could be located [Verify — an absence of located records; searched by name and by district]"
            ] }
        ] }
    ] }
};
