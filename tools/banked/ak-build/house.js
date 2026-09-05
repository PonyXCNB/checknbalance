// ----- (3) The U.S. House race -----
// ⚠ ALASKA HAS ONE AT-LARGE SEAT. Every borough and census area votes the same congressional
// ballot, so there is exactly one district entry and no county-to-district lookup exists.
const HOUSE_RACES = {
  1: { name: "U.S. House — AK At-Large", region: "The entire state — all 29 boroughs and census areas vote the same congressional ballot",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · At-Large",
        note: "EIGHTH PLACE IS ON THE BALLOT. ✅ Rep. Nick Begich won the certified Aug 18 primary with 72,696 votes (44.62%) over nonpartisan Bill Hill's 53,008 (32.53%). ✅ Mary Peltola is NOT in this race — she is running for the U.S. Senate. ⚠ Then FOUR candidates quit by the 5 p.m. Aug 31 deadline: Democrats Matt Schultz (3rd), John Williams (5th) and Yaquelin Reynoso (7th), and Republican Clay Strickland (6th). Under AS 15.25.100 that lifted Democrat Eric Hafner — who is in a New York federal prison and has never visited Alaska — to third, and Libertarian Jim McDermott, who took 1.20%, to fourth. ⚠ Cook, Sabato and Inside Elections all read Likely Republican, but every one of those ratings dates to late 2025, before the primary and the withdrawals [Verify — all three sites blocked direct access; ratings read via Wikipedia]. ⚠ Ranked-choice transfers decided both 2022 and 2024 here.",
        candidates: [
          { name: "Nick Begich (incumbent)", party: "R", winner: false,
            positions: [
              "Expand oil, gas and mineral development in the NPR-A and ANWR",
              "Make the tax cuts permanent, including no tax on tips and overtime",
              "Raise Alaska's share of federal resource revenue from 50% to 70%"],
            differentiators: [
              "First-term incumbent, endorsed by President Trump on May 8, 2025; vice chair of the Natural Resources energy and mineral resources subcommittee and of the Transportation railroads subcommittee",
              "Six bills signed into law as of Aug 19, 2026 — more than any other member — including the Alaska Native Village Municipal Lands Restoration Act and two resolutions undoing Central Yukon and ANWR coastal-plain protections",
              "FEC committee C00792341: $5,470,446 raised and $3,119,158 on hand through July 29, 2026 — read from the FEC’s own bulk candidate-summary file rather than a news report"],
            supporters: [
              "He delivered concrete Alaska-specific wins in a single term, including exempting Alaska Native settlement-trust payments from SNAP eligibility calculations",
              "Resource development is jobs and a larger state revenue share, and he has moved actual legislation on both",
              "He won the primary outright by twelve points and holds a six-to-one cash advantage over his nearest rival"],
            opponents: [
              "He voted for the 2025 reconciliation bill despite its Medicaid and SNAP changes, calling it a great bill for Alaska, and on Jan 8, 2026 voted against a three-year extension of ACA subsidies that passed the House 230-196",
              "He has held no open in-person town hall, and a February 2025 telephone forum used screened questions",
              "State Sen. Forrest Dunbar argues the bipartisan framing is positioning while the votes track the national party almost without exception — and 55% of primary voters chose someone else"] },
          { name: "Bill Hill", party: "I", winner: false,
            positions: [
              "Lower the cost of gas and groceries for working Alaskans",
              "Ban stock trading by members of Congress and their spouses",
              "Champion community schools and fight corruption in Washington"],
            differentiators: [
              "Superintendent of the Bristol Bay School District 2013-2023 and Alaska Superintendent of the Year in 2023; a commercial fisherman since 1977 and owner of Bristol Bay Brailer; Dena'ina Athabascan, and a first-time candidate for any federal office",
              "FEC committee C00935437: $1,336,292 raised and $515,886 on hand through July 29, 2026, from the FEC’s own bulk file; the Wheel Dog PAC has spent over $2M supporting him",
              "Endorsed by the Alaska Democratic Party on Sept 1, 2026, by more than 20 labor groups including the Alaska AFL-CIO, and by Matt Schultz, the Democrat who quit and backed him"],
            supporters: [
              "A nonpartisan label fits a state where roughly 60% of voters are registered unaffiliated",
              "Rural and Alaska Native turnout plus ranked-choice transfers give him a genuine path from second place",
              "Three Democrats cleared out of the race, consolidating the anti-Begich vote behind him"],
            opponents: [
              "Alaska consultants across the spectrum call him a real long shot, and he trailed by twelve points in the primary",
              "He will not say which party he would caucus with, so voters cannot know what electing him delivers — and Republicans argue the nonpartisan label is functionally Democratic, since the state party endorsed him after he made policy commitments",
              "The NRCC attacked his remark that some communities need to get off the sauce of oil dependency as anti-development; he says he meant diesel costs in remote villages and that he backs Alaska LNG"] },
          { name: "Eric Hafner", party: "D", winner: false,
            positions: [
              "Drug-law reform and harm reduction [Verify — inferred from his own pamphlet biography, which lists no policy platform]",
              "Indigenous sovereignty and Native rights [Verify — same source and caveat]",
              "Labor and public education [Verify — same source and caveat]"],
            differentiators: [
              "⚠ HE IS INCARCERATED IN A NEW YORK FEDERAL PRISON, serving 240 months. He pleaded guilty in May 2022 in New Jersey federal court to threatening communications made with intent to extort and to conveying false bomb threats against government offices, a police department and two law firms — conduct between 2016 and 2018, per the U.S. Attorney’s own announcement",
              "⚠ He has never lived in Alaska and, barring a pardon, could not — the Constitution requires a representative to be an inhabitant of the state when elected, and his own FEC address is a mail-forwarding box in South Dakota. ⚠ Whether he could be SEATED is settled by no ruling; that would be the House’s own judgment [Verify]",
              "He was also on Alaska’s 2024 ballot, taking 3,417 first-choice votes (1.04%). ⚠ He is FEC-registered but appears in no financial summary at all — no receipts, no disbursements, no cash on hand"],
            supporters: [
              "An Anchorage judge held in an 18-page opinion that he is legally qualified to RUN, and the Alaska Supreme Court affirmed 4-1 in September 2024 ⚠ one 2026 account instead reports that the court never took the question up; the two framings conflict [Verify]",
              "The judge reasoned that ranked-choice voting limits the harm, because a voter can simply rank him last",
              "Ballot access should not turn on a candidate's popularity [Verify — an inference from that ruling's logic, not an argument any supporter has made]"],
            opponents: [
              "The Alaska Democratic Party sued to remove him in 2024, and its then-executive director called the precedent extremely dangerous",
              "He could not take the seat if elected, so a first-choice vote for him is functionally spent",
              "His Democrat label risks misleading voters into thinking he is the party’s candidate — it sued to remove him in 2024 and has endorsed Bill Hill. ⚠ In both cycles his candidacy has been amplified by opponents of the Democratic-aligned candidate: openly by the NRCC in 2024, and in August 2026 by an unidentified group texting Alaska voters without the required disclosures"] },
          { name: "James C. \"Jim\" McDermott", party: "L", winner: false,
            positions: [
              "Small government, and an end to IRS intimidation tactics against taxpayers",
              "At least half of Permanent Fund payouts must go to Alaskans, not to government",
              "A strong national defense, but no nation-building abroad"],
            differentiators: [
              "A retired Air Force master sergeant of 22 and a half years, later a business instructor at the University of Alaska Fairbanks and director of its Small Business Development Center; 35 years in Alaska and in Fairbanks since 2006. ⚠ His pamphlet lists exactly one public position: election commissioner with the Alaska Public Offices Commission",
              "This is his FOURTH run for this seat, improving each time: 5.2% in 2012, 7.6% in 2014 and about 10.3% in a three-way 2016 general ⚠ his own site says 10.4% [Verify — the pre-2020 result files are no longer posted]. Endorsed by the Alaska Libertarian Party",
              "⚠ He reached the November ballot from EIGHTH place on 1.20% — the lowest primary share of any Alaska general-election House candidate under the top-four system [Verify — no source states this superlative; it follows from the 2022 and 2024 results]"],
            supporters: [
              "Besides the incumbent, he is the only candidate on this ballot who unambiguously lives in Alaska, with 35 years here and deep Fairbanks roots",
              "His past showings above 10% suggest a genuine constituency for a limited-government option",
              "He pledges not to seek a third term, and says he left the Republican party over the Patriot Act and the NDAA — a long civil-liberties record rather than a flag of convenience"],
            opponents: [
              "He is on the ballot only because four higher finishers quit, and 98.8% of primary voters chose someone else",
              "He is FEC-registered but appears in no financial summary — no reported receipts at all — against opponents holding $3.1M and $516,000",
              "Critics of the top-four design say a cascade like this lets parties engineer the general-election field rather than letting voters choose it [Verify — reported as a general criticism of the system; no named critic made it about him]. He learned he had qualified from a reporter, and was tutoring at Fort Wainwright the next morning"] }
        ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · At-Large · Primary", office: "U.S. House — Top-Four Open Primary",
        note: "THE PRIMARY PUT FOUR PEOPLE THROUGH AND HALF OF THEM ARE NOT ON THE NOVEMBER BALLOT. ✅ Official results, Aug 31, 2026: 162,932 votes across 401 of 403 precincts. ⚠ Matt Schultz suspended his campaign on July 17 citing national Republican meddling and endorsed Bill Hill; Clay Strickland, John Williams and Yaquelin Reynoso all withdrew by the 5 p.m. Aug 31 deadline — 64 days before the election, the last moment AS 15.25.100 allows a replacement. ⚠ Nobody is 'nominated' in this system and no card carries a winner's badge; the top four simply advance.",
        candidates: [
          { name: "Nick Begich (incumbent)", party: "R", winner: false,
            positions: ["72,696 votes — 44.62%"],
            differentiators: ["Led the field and advanced"], supporters: [], opponents: [] },
          { name: "Bill Hill", party: "I", winner: false,
            positions: ["53,008 votes — 32.53%"],
            differentiators: ["Second; advanced. Listed by the Division of Elections as Nonpartisan"], supporters: [], opponents: [] },
          { name: "Matt Schultz (WITHDREW)", party: "D", winner: false,
            positions: ["13,149 votes — 8.07%"],
            differentiators: ["Third; suspended his campaign July 17, 2026 and endorsed Bill Hill, then withdrew before the deadline"], supporters: [], opponents: [] },
          { name: "Eric Hafner", party: "D", winner: false,
            positions: ["6,175 votes — 3.79%"],
            differentiators: ["Fourth; advanced, and remains on the November ballot"], supporters: [], opponents: [] },
          { name: "John B. Williams (WITHDREW Aug 31, 2026)", party: "D", winner: false,
            positions: ["4,413 votes — 2.71%"],
            differentiators: ["Fifth; withdrew on the morning of the deadline"], supporters: [], opponents: [] },
          { name: "Clay Strickland (WITHDREW)", party: "R", winner: false,
            positions: ["3,681 votes — 2.26%"],
            differentiators: ["Sixth; withdrew before Aug 31"], supporters: [], opponents: [] },
          { name: "Yaquelin Reynoso (WITHDREW Aug 31, 2026)", party: "D", winner: false,
            positions: ["2,928 votes — 1.80%"],
            differentiators: ["Seventh; withdrew before the 5 p.m. deadline"], supporters: [], opponents: [] },
          { name: "James C. \"Jim\" McDermott", party: "L", winner: false,
            positions: ["1,951 votes — 1.20%"],
            differentiators: ["Eighth — and on the November ballot, because four candidates ahead of him withdrew"], supporters: [], opponents: [] }
        ] },
      { date: "Nov 5, 2024", type: "past", scope: "Federal · At-Large", office: "U.S. House — 2024 General",
        note: "THE RANKED-CHOICE ROUNDS DECIDED IT, AND THEY BROKE FOR BEGICH. ✅ Official results, Nov 30, 2024. First choices: Begich 159,777 (48.49%), Peltola 152,948 (46.42%), John Wayne Howe 13,210 (4.01%), Eric Hafner 3,558 (1.08%). Hafner was eliminated first; when Howe went out, his ballots split 4,817 to Begich and 2,724 to Peltola — enough to settle it. ⚠ Nobody won a first-choice majority, which is exactly the situation ranked-choice voting exists to resolve, and which Ballot Measure 2 would end.",
        candidates: [
          { name: "Nick Begich", party: "R", winner: true,
            positions: ["Round 3: 164,861 votes — 51.22%"],
            differentiators: ["Won on the third round after starting 2.07 points ahead on first choices"], supporters: [], opponents: [] },
          { name: "Mary Peltola (incumbent)", party: "D", winner: false,
            positions: ["Round 3: 156,985 votes — 48.78%"],
            differentiators: ["Lost the seat she had held since the 2022 special election"], supporters: [], opponents: [] },
          { name: "John Wayne Howe", party: "I", winner: false,
            positions: ["Round 1: 13,210 votes — 4.01%"],
            differentiators: ["Alaskan Independence Party; eliminated in round 2, and his transfers decided the race"], supporters: [], opponents: [] }
        ] },
      { date: "Nov 8, 2022", type: "past", scope: "Federal · At-Large", office: "U.S. House — 2022 General",
        note: "THE OTHER DIRECTION — THE SAME SYSTEM, AND A DEMOCRAT WON. ✅ Official results, Nov 30, 2022. First choices: Peltola 128,755 (48.66%), Sarah Palin 68,330 (25.82%), Nick Begich 62,505 (23.62%), Chris Bye 4,999 (1.89%). ✅ Peltola finished the final round at 137,263 (54.96%) to Palin's 112,471 (45.04%). ⚠ She had already won the Aug 16, 2022 SPECIAL election for the remainder of Don Young's term, 51.48% to 48.52%, after Begich was eliminated and his ballots split toward Palin.",
        candidates: [
          { name: "Mary Peltola", party: "D", winner: true,
            positions: ["Final round: 137,263 votes — 54.96%"],
            differentiators: ["The first Alaska Native elected to Congress, and the first Democrat to hold this seat since 1973"], supporters: [], opponents: [] },
          { name: "Sarah Palin", party: "R", winner: false,
            positions: ["Final round: 112,471 votes — 45.04%"],
            differentiators: ["The former governor lost the same seat twice in one year, in the August special and again in November"], supporters: [], opponents: [] },
          { name: "Nick Begich", party: "R", winner: false,
            positions: ["Round 1: 62,505 votes — 23.62%"],
            differentiators: ["Eliminated before the final round in both 2022 contests, then won the seat outright in 2024"], supporters: [], opponents: [] }
        ] }
    ] }
};
