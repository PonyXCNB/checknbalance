// Wyoming U.S. House — ONE at-large seat, so there is a single district entry and every county
// maps to it. Primary results are OFFICIAL, certified by the Wyoming State Canvassing Board on
// Aug 26, 2026, and read from the Secretary of State's own
// `2026 Primary Results Summaries - OFFICIAL.xlsx`.
const HOUSE_RACES = {
  1: { name: "U.S. House — Wyoming (at-large)", region: "The entire state — all 23 counties vote the same congressional ballot",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · Statewide",
        note: "OPEN SEAT — SECRETARY OF STATE CHUCK GRAY WON A NINE-WAY REPUBLICAN PRIMARY WITH JUST 24.9%, edging conservative activist Steve Friess by 6,165 votes. Harriet Hageman vacated the seat to run for the Senate. ⚠ Wyoming has exactly ONE at-large House seat — every county votes the same ballot and there is no district to look up. ✅ TRUMP ENDORSED NO ONE IN THIS PRIMARY, an unusual abstention in a race where most candidates positioned themselves as his ally — and the same night he endorsed in both the Senate and governor primaries. ✅ Primary figures are OFFICIAL, certified Aug 26, 2026.",
        candidates: [
          { name: "Chuck Gray", party: "R", winner: false,
            positions: [
              "Protect coal, oil, gas and soda ash industries",
              "Cut inflation by reducing federal debt and deficits",
              "Healthcare deregulation, cross-state insurance sales and price transparency"
            ],
            differentiators: [
              "Wyoming Secretary of State since 2023; previously a state representative from Casper",
              "Won the Aug 18 Republican primary with 31,224 votes — 24.9% — to Friess's 20.0%",
              "Raised $1,621,197 and spent $1,381,051 as of Aug 27, 2026, including a $1.38M personal contribution",
              "Additionally backed by Protecting Wyoming Values PAC, funded by his father"
            ],
            supporters: [
              "He has a documented record of advancing conservative priorities as a statewide elected official",
              "His election-integrity work as Secretary of State is exactly what House Republicans want on federal election policy",
              "He had statewide name recognition no other primary candidate could match"
            ],
            opponents: [
              "He won with under 25% — roughly three of four Republican primary voters preferred someone else",
              "A self-funded and family-PAC-funded campaign drew criticism that he lacks a Wyoming grassroots donor base",
              "⚠ He faces active litigation over his transfer of Wyoming voter rolls — including birth dates and partial Social Security numbers — to the U.S. Justice Department, plus separate suits over ballot access and closed primaries"
            ] },
          { name: "Lisa Kinney", party: "D", winner: false,
            positions: [
              "Pass the Public Lands in Public Hands Act",
              "Eliminate federal income tax for people earning under $100,000",
              "Restore ACA subsidies and regulate AI data centres"
            ],
            differentiators: [
              "Ten years in the Wyoming State Senate, including two as Minority Leader",
              "Attorney, former librarian and financial adviser; fifteen years working with Wind River Indian Reservation schools",
              "Won the Aug 18 Democratic primary with 9,344 votes — 76.5%",
              "Raised $17,946 and spent $15,414 as of Aug 27, 2026"
            ],
            supporters: [
              "Legislative leadership experience plus a public-lands platform that polls well across party lines in Wyoming",
              "A long record in Albany County civic life, including founding a Laramie library",
              "She argues her opponent won a divided primary and lacks majority Republican support"
            ],
            opponents: [
              "Unfunded against a well-financed opponent — she raised roughly 1% of Gray's total [Verify — structural argument]",
              "Wyoming's at-large seat has not elected a Democrat since 1976 [Verify — a historical claim from a press summary, not read from an authoritative source]",
              "At 75 on Election Day she would be among the oldest freshman House members [Verify — age from a candidate guide]"
            ] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · Statewide · Republican primary",
        note: "THE MARQUEE RACE OF THE NIGHT: CHUCK GRAY WON A NINE-CANDIDATE FIELD WITH JUST 24.9%, beating Steve Friess by 6,165 votes out of 125,371 cast. ⚠ A tenth name, Frank Chapman, appeared on ballots after withdrawing and still drew 2,162 votes, which the Secretary of State reports for completeness. ⚠ Trump endorsed no one in this race. Certified Aug 26, 2026.",
        candidates: [
          { name: "Chuck Gray", party: "R", winner: true, positions: [], differentiators: ["31,224 votes — 24.9%, a win with under a quarter of the vote", "Wyoming Secretary of State since 2023", "Self-funded $1.38M; also backed by a $1M PAC funded by his father"], supporters: [], opponents: [] },
          { name: "Steve Friess", party: "R", winner: false, positions: [], differentiators: ["25,059 votes — 20.0%; lost by 6,165", "Conservative activist who entered the race in April 2026", "Targeted by Protecting Wyoming Values PAC over his California background"], supporters: [], opponents: [] },
          { name: "Kevin Christensen", party: "R", winner: false, positions: [], differentiators: ["21,633 votes — 17.3%", "Ran on roughly $36,000 — a fraction of Gray's spending"], supporters: [], opponents: [] },
          { name: "Jillian Balow", party: "R", winner: false, positions: [], differentiators: ["12,591 votes — 10.0%", "Former Wyoming Superintendent of Public Instruction"], supporters: [], opponents: [] },
          { name: "Reid Rasner", party: "R", winner: false, positions: [], differentiators: ["10,808 votes — 8.6%"], supporters: [], opponents: [] },
          { name: "David Giralt", party: "R", winner: false, positions: [], differentiators: ["10,131 votes — 8.1%"], supporters: [], opponents: [] },
          { name: "Bo Biteman", party: "R", winner: false, positions: [], differentiators: ["6,257 votes — 5.0%", "Wyoming state senator from Sheridan County; led his home county with 1,862 votes"], supporters: [], opponents: [] },
          { name: "Keith B. Goodenough", party: "R", winner: false, positions: [], differentiators: ["3,343 votes — 2.7%"], supporters: [], opponents: [] },
          { name: "Richard Dodson", party: "R", winner: false, positions: [], differentiators: ["1,777 votes — 1.4%"], supporters: [], opponents: [] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · Statewide · Democratic primary",
        note: "FORMER STATE SENATE MINORITY LEADER LISA KINNEY WON THE DEMOCRATIC HOUSE NOMINATION WITH 76.5%. Turnout was 12,210 votes. Certified Aug 26, 2026.",
        candidates: [
          { name: "Lisa Kinney", party: "D", winner: true, positions: [], differentiators: ["9,344 votes — 76.5%", "Ten years in the Wyoming State Senate, two as Minority Leader", "Dominated her home Albany County with 1,435 votes"], supporters: [], opponents: [] },
          { name: "Elena Del Real", party: "D", winner: false, positions: [], differentiators: ["2,660 votes — 21.8%", "Strongest in Laramie County (660 votes)"], supporters: [], opponents: [] } ] } ] },
};
