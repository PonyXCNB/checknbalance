// Florida U.S. House districts 22-28 — HB 1D lines. Aug 18, 2026 primary CERTIFIED Aug 27, 2026.
// ✅ INDEPENDENT GEOGRAPHIC CONFIRMATION OF OUR COUNTY TABLE: the researcher cross-checked which
// counties actually ran which congressional primaries on the state's own results site and found
// FL-22 in Palm Beach, Broward, Collier and Hendry; FL-23 in Palm Beach ONLY; FL-25 in Palm Beach,
// Broward and Miami-Dade; FL-24 in Broward and Miami-Dade; FL-20 in Broward ONLY. Every one of
// those matches the `ds` arrays derived from the Legislature's own crosswalk — a third independent
// corroboration of the map.
// ⚠ TWO INCUMBENTS ARE RUNNING IN RENUMBERED SEATS: Frankel (FL-22 -> FL-23) and Moskowitz
// (FL-23 -> FL-25). Do not read either as an open seat.
// ⚠ Cook's 2026 PVI (its own Datawrapper files fejB0 / rAx2t, re-read at build time) vs the 2025
// old-map file: FL-22 D+4->R+4, FL-23 D+2->D+9, FL-24 D+18->D+22, FL-25 D+5->R+3,
// FL-26 R+16->R+7, FL-27 R+6 unchanged, FL-28 R+10 unchanged.
// ⚠ Sabato returned HTTP 403 to every attempt — NO Sabato rating is cited and none was taken from
// an aggregator. Inside Elections was read from its own public ratings API.
// ⚠ Money is from the FEC bulk "All Candidates" file weball26, reporting through each candidate's
// last filing — July 29, 2026 for most, June 30 for Jassenoff, Meidinger Hosey and Ehr.
// ⚠ Write-ins (Patricia Gonzalez in FL-24, Michaelangelo Hamilton in FL-25) are certified but do
// not appear on the printed ballot, so they are noted rather than carded.
  22: { name: "U.S. House — FL District 22", region: "Inland Palm Beach and Broward (Wellington, Parkland) west through Hendry County to southern Collier County and Marco Island",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "OPEN SEAT — HB 1D TURNED FL-22 FROM A PALM BEACH DEMOCRATIC SEAT INTO A REPUBLICAN-LEANING DISTRICT RUNNING FROM BROWARD TO THE OUTSKIRTS OF NAPLES. ⚠ Incumbent Lois Frankel is NOT running here — she filed in the renumbered FL-23. Cook's own 2026 PVI file moves this seat from D+4 to R+4, and its 2024 presidential figures under the new lines show Trump 211,914 to Harris 171,280. ✅ Cook rates it Lean Republican; Inside Elections rates it Tilt Republican, shifted from Solid Democratic on May 8, 2026. Certified Aug 27, 2026.",
        candidates: [
          { name: "Casey Askar", party: "R", winner: false,
            positions: ["Extend and expand the 2017 tax cuts; eliminate the estate tax and the marriage penalty", "Unleash domestic oil, gas, nuclear and coal production", "Deport criminal illegal aliens; keep a merit-based immigration policy"],
            differentiators: ["Won a seven-way Republican primary with 30.86%", "$1,048,396 cash on hand against $2,100,000 in reported debt, largely self-financed, as of July 29, 2026", "Endorsed by CPAC, Collier County Sheriff Kevin Rambosk, former Florida Senate President Kathleen Passidomo and Rep. Gus Bilirakis", "Marine veteran; chairman and CEO of Askar Family Office"],
            supporters: ["A multi-state business and job-creation record he puts at the centre of his campaign", "An explicitly Trump-aligned platform in a seat Trump carried by roughly eleven points under the new lines", "Consolidated establishment Republican and law-enforcement backing out of a fractured seven-way field"],
            opponents: ["He lives in Naples and previously ran in FL-19; critics call the Broward-to-Collier run carpetbagging", "Won only 30.9% of the Republican primary — nearly 70% of Republican voters chose someone else", "Finished third in the 2020 FL-19 primary and later sued winner Byron Donalds over campaign messaging"] },
          { name: "Pia Dandiya", party: "D", winner: false,
            positions: ["Lower housing, insurance, prescription and childcare costs; end tariffs raising grocery prices", "Ban members of Congress from trading individual stocks and close the lobbying revolving door", "Oppose any cut to Social Security or Medicare, or any rise in the retirement age"],
            differentiators: ["Won the Democratic primary with 68.57% over Kaysia Earley", "$1,296,684 cash on hand on $2,284,052 raised, as of July 29, 2026", "Added to the DCCC 'Red to Blue' programme in July 2026", "Former Harlem school principal, White House Fellow at the Department of Education, public-sector lead at Apple"],
            supporters: ["Ends the primary with more cash on hand than Askar and without his self-funded debt load", "National Democratic investment — DCCC Red to Blue plus a stated committee commitment to spend here", "Florida AFL-CIO endorsement and a first-time-candidate profile against a repeat candidate"],
            opponents: ["Has never held elected office", "Switched districts — she launched in FL-21 against Brian Mast before the new map was adopted", "Running in a seat Cook now scores R+4 and rates Lean Republican"] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Republican primary",
        note: "A NINE-FILER SCRAMBLE FOR THE NEW SEAT, DECIDED WITH UNDER 31%. 47,876 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Casey Askar", party: "R", winner: true, positions: [], differentiators: ["14,774 votes — 30.86%"], supporters: [], opponents: [] },
          { name: "Michael Carbonara", party: "R", winner: false, positions: [], differentiators: ["9,072 votes — 18.95%"], supporters: [], opponents: [] },
          { name: "Belinda Keiser", party: "R", winner: false, positions: [], differentiators: ["8,785 votes — 18.35%"], supporters: [], opponents: [] },
          { name: "David Burck", party: "R", winner: false, positions: [], differentiators: ["7,505 votes — 15.68%"], supporters: [], opponents: [] },
          { name: "Terri Hasdorff", party: "R", winner: false, positions: [], differentiators: ["3,683 votes — 7.69%"], supporters: [], opponents: [] },
          { name: "Michael Thompson", party: "R", winner: false, positions: [], differentiators: ["2,616 votes — 5.46%"], supporters: [], opponents: [] },
          { name: "Richard Evans", party: "R", winner: false, positions: [], differentiators: ["1,441 votes — 3.01%"], supporters: [], opponents: [] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Democratic primary",
        note: "DANDIYA WON BETTER THAN TWO TO ONE. 38,014 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Pia Dandiya", party: "D", winner: true, positions: [], differentiators: ["26,067 votes — 68.57%"], supporters: [], opponents: [] },
          { name: "Kaysia Earley", party: "D", winner: false, positions: [], differentiators: ["11,947 votes — 31.43%"], supporters: [], opponents: [] } ] } ] },
  23: { name: "U.S. House — FL District 23", region: "Palm Beach County — part of West Palm Beach south to Boynton Beach",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "LOIS FRANKEL IS RUNNING IN A RENUMBERED SEAT: she currently represents FL-22, but HB 1D redrew her Palm Beach territory as FL-23 and she filed there. ⚠ Do not read this as an open seat or as her 2024 district. Her own campaign site says she is running in District 23 after 'mid-decade gerrymandering' she strongly opposed, and calls the new seat very similar to her current one. ✅ THE REDRAW MADE HER SEAT SAFER, NOT WEAKER: Cook's PVI moves it from D+2 to D+9. Cook and Inside Elections both rate FL-23 Solid Democratic. Certified Aug 27, 2026.",
        candidates: [
          { name: "Lois Frankel (incumbent — currently represents FL-22)", party: "D", winner: false,
            positions: ["Lowering costs for Florida families", "Protecting Social Security, Medicare and Medicaid", "Defending democracy and voting rights"],
            differentiators: ["In Congress since 2013; founder and Chair Emerita of the Democratic Women's Caucus", "Won the Democratic primary with 74.72%", "$1,212,162 cash on hand, no reported debt, as of July 29, 2026", "Former Mayor of West Palm Beach 2003–2011 and first woman Democratic Leader of the Florida House"],
            supporters: ["The new FL-23 is more Democratic than the seat she holds now — Cook PVI D+2 to D+9", "Roughly a thirty-six-to-one cash advantage over Adeimy at the pre-primary filing", "A deep Palm Beach base: fourteen years in the Legislature, eight as mayor, seven House terms"],
            opponents: ["Adeimy runs against her as a career politician — she has held elected office almost continuously since the Florida House", "A long-tenure incumbent in a cycle with strong anti-incumbent sentiment [Verify — structural argument]", "Took 74.7% against two little-known primary opponents, leaving about a quarter of Democrats elsewhere"] },
          { name: "Deborah Adeimy", party: "R", winner: false,
            positions: ["Blames federal spending and money creation for inflation; wants spending restraint", "A strong military, law enforcement and Second Amendment protections", "Stand with Israel and defend the U.S. Constitution"],
            differentiators: ["Won the Republican primary with 73.67% over Paola Branda", "Third consecutive congressional run — lost Republican primaries in 2022 and 2024", "$33,691 cash on hand with $65,466 in debt, as of July 29, 2026", "Certified Financial Planner; career at JP Morgan, Morgan Stanley, Merrill Lynch and Citi Global Markets"],
            supporters: ["Twenty-five years in finance and fifth-generation West Palm Beach roots — her campaign's core pitch", "Won the Republican primary decisively after two prior losses, consolidating the local Republican vote", "Lists Fraternal Order of Police and PBA backing [Verify — her own site footnotes the list as '2024, partial']"],
            opponents: ["Cook and Inside Elections both rate FL-23 Solid Democratic", "Ended the pre-primary period with about $34K on hand against Frankel's $1.2M", "⚠ Her posted endorsement list is labelled 2024 rather than current [Verify — from her own site's footnote]"] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Democratic primary",
        note: "FRANKEL CLEARED 74% IN HER NEW DISTRICT NUMBER. 57,498 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Lois Frankel", party: "D", winner: true, positions: [], differentiators: ["42,964 votes — 74.72%"], supporters: [], opponents: [] },
          { name: "Victoria Doyle", party: "D", winner: false, positions: [], differentiators: ["13,438 votes — 23.37%"], supporters: [], opponents: [] },
          { name: "Mark Piper", party: "D", winner: false, positions: [], differentiators: ["1,096 votes — 1.91%"], supporters: [], opponents: [] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Republican primary",
        note: "ADEIMY WON HER NOMINATION ON THE THIRD ATTEMPT. 28,018 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Deborah Adeimy", party: "R", winner: true, positions: [], differentiators: ["20,641 votes — 73.67%"], supporters: [], opponents: [] },
          { name: "Paola Branda", party: "R", winner: false, positions: [], differentiators: ["7,377 votes — 26.33%"], supporters: [], opponents: [] } ] } ] },
  24: { name: "U.S. House — FL District 24", region: "Northern Miami-Dade and southern Broward — Miami Gardens, part of Miami, part of Hollywood",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "OPEN SEAT — FREDERICA WILSON IS RETIRING AND APPEARS NOWHERE ON FLORIDA'S 2026 U.S. HOUSE QUALIFIED LIST. She announced on May 29, 2026 that she would not seek re-election and endorsed Miami-Dade Commissioner Oliver Gilbert III at a hand-off event in Miami Gardens. ⚠ HB 1D redrew the seat: it now reaches further into Broward and takes in all of Miami Gardens, while Miami Beach moved out to FL-25. ✅ The seat got bluer, not weaker — Cook's PVI moves from D+18 to D+22, and Cook and Inside Elections both rate it Solid Democratic. ⚠ A qualified write-in, Patricia Gonzalez, is certified but will not appear on the printed ballot. Certified Aug 27, 2026.",
        candidates: [
          { name: "Oliver G. Gilbert III", party: "D", winner: false,
            positions: ["Healthcare for all and universal childcare and pre-K", "Eliminate federal income taxes for working families", "Expand rapid transit — including Miami-Dade's North Corridor — and stop ICE raids"],
            differentiators: ["Miami-Dade County Commissioner; Mayor of Miami Gardens 2012–2020", "Won a seven-way Democratic primary with 34.35% over state Sen. Shevrin Jones at 31.98%", "$229,093 cash on hand on $812,143 raised, as of July 29, 2026", "Endorsed by retiring Rep. Frederica Wilson"],
            supporters: ["Wilson's explicit hand-off endorsement — the most valuable local imprimatur in the district", "An executive record: two terms as Miami Gardens mayor plus county commission leadership", "The seat is D+22 under Cook's 2026 PVI and rated Solid Democratic by both major raters"],
            opponents: ["Won the primary by only about 1,400 votes over Shevrin Jones — a divided Democratic base to reunite", "County-commission incumbency invites an insider critique in a change year [Verify — structural argument]", "$229K on hand is modest for the expensive Miami media market"] },
          { name: "Te Mayonna Brown", party: "R", winner: false,
            positions: ["Mass deportations and no amnesty", "Eliminate the H-1B visa programme", "Make housing affordable again and stop drug-price rip-offs"],
            differentiators: ["Unopposed for the Republican nomination", "Real-estate developer, small-business owner and homeschooling mother", "$298,626 cash on hand on $313,318 raised, but $306,068 in reported debt, as of July 29, 2026"],
            supporters: ["The only Republican on the ballot — she banked her money instead of spending it in a primary", "Runs an affordable-housing plan drawn from her own development work", "Reported more cash on hand than Gilbert at the pre-primary filing"],
            opponents: ["FL-24 is D+22 under Cook's 2026 PVI and Solid Democratic at both Cook and Inside Elections", "⚠ Nearly all her reported cash is matched by campaign debt", "No prior elected office and no locatable endorsements [Verify — an absence of located records]"] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Democratic primary",
        note: "THE MARQUEE SOUTH FLORIDA CONTEST OF THE NIGHT — SEVEN CANDIDATES, AND GILBERT EDGED STATE SEN. SHEVRIN JONES BY ABOUT 2.4 POINTS. 59,520 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Oliver G. Gilbert III", party: "D", winner: true, positions: [], differentiators: ["20,445 votes — 34.35%"], supporters: [], opponents: [] },
          { name: "Shevrin 'Shev' Jones", party: "D", winner: false, positions: [], differentiators: ["19,034 votes — 31.98%; state senator"], supporters: [], opponents: [] },
          { name: "Kendrick Meek", party: "D", winner: false, positions: [], differentiators: ["10,309 votes — 17.32%"], supporters: [], opponents: [] },
          { name: "Rudolph Moise", party: "D", winner: false, positions: [], differentiators: ["4,520 votes — 7.59%"], supporters: [], opponents: [] },
          { name: "Jean Monestime", party: "D", winner: false, positions: [], differentiators: ["3,161 votes — 5.31%"], supporters: [], opponents: [] },
          { name: "Marshall L. Davis Sr.", party: "D", winner: false, positions: [], differentiators: ["1,272 votes — 2.14%"], supporters: [], opponents: [] },
          { name: "Roderick Vereen", party: "D", winner: false, positions: [], differentiators: ["779 votes — 1.31%"], supporters: [], opponents: [] } ] } ] },
  25: { name: "U.S. House — FL District 25", region: "The Atlantic coastal strip from Delray Beach and Boca Raton south through Deerfield Beach, Fort Lauderdale and Hollywood to Miami Beach",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "THE MARQUEE FLORIDA TOSS-UP: JARED MOSKOWITZ IS RUNNING IN A RENUMBERED SEAT THAT HB 1D FLIPPED FROM DEMOCRATIC TO REPUBLICAN-LEANING. He currently represents FL-23; the new FL-25 is a three-county coastal ribbon, and Cook's PVI moves it from D+5 to R+3, with 2024 presidential figures of Trump 204,494 to Harris 169,978. ⚠ Debbie Wasserman Schultz, this number's previous occupant, is NOT here — she ran in FL-20 and beat that seat's incumbent in the primary. ✅ Cook rates FL-25 Toss Up and Inside Elections also rates it Toss-up, shifted from Solid Democratic. ⚠ Libertarian Peter Jassenoff stays on the ballot after the Republican Party of Florida DROPPED its suit to remove him over a filing-fee technicality on Aug 14, 2026. A qualified write-in, Michaelangelo Hamilton, is certified but off the printed ballot. Certified Aug 27, 2026.",
        candidates: [
          { name: "Jared Moskowitz (incumbent — currently represents FL-23)", party: "D", winner: false,
            positions: ["Independent, bipartisan problem-solving and oversight of the administration", "Public and school safety — co-authored the Marjory Stoneman Douglas Public Safety Act", "Confronting antisemitism and extremism, and supporting U.S. allies including Israel"],
            differentiators: ["In Congress since 2022; former Director of Florida's Division of Emergency Management, appointed by Gov. DeSantis", "Won the Democratic primary with 63.48% over Oliver Adams Larkin", "$1,882,634 cash on hand — the largest in the race — as of July 29, 2026", "Marjory Stoneman Douglas High graduate; former Parkland city commissioner and state representative"],
            supporters: ["A crisis-management resume: ran Florida's hurricane and COVID response under a Republican governor", "Roughly a four-to-one cash advantage over Singer at the pre-primary filing", "A bipartisan brand fits a seat with a large bloc of unaffiliated voters [Verify — the 36% NPA registration figure is via an aggregator, not the state voter file]"],
            opponents: ["The new district voted for Trump by about nine points in 2024, per Cook's own 2026 PVI dataset", "Most of the new seat's coastal territory is not in the district he represents today [Verify — structural argument]", "Singer attacks him over Democratic Party ties and his Israel positioning"] },
          { name: "Scott Singer", party: "R", winner: false,
            positions: ["Keep taxes and costs low — he has pledged not to raise taxes", "Strong borders and national defence; an America First agenda", "Term limits and a ban on members of Congress trading stocks"],
            differentiators: ["Three-term Mayor of Boca Raton, 2018–2026", "Won a five-way Republican primary with 31.4% over George Moraitis at 27.41%", "$466,219 cash on hand against $579,453 in debt, as of July 29, 2026", "Inaugural chair of the America First Policy Institute Mayors' Council"],
            supporters: ["Campaigns on seven straight votes to lower Boca Raton's property tax rate", "The district moved sharply right under HB 1D — Cook PVI D+5 to R+3", "Long barrier-island residency and a condo-owner focus in a seat full of coastal condo precincts"],
            opponents: ["Won only 31.4% of a five-way primary — most Republicans backed someone else", "Trails Moskowitz roughly four to one in cash and carries more debt than cash on hand", "A Libertarian stayed on the ballot after his party's removal suit failed — a possible drain on his right flank"] },
          { name: "Peter Jassenoff", party: "L", winner: false,
            positions: ["⚠ No campaign website or published issue platform could be located [Verify]", "He self-describes as a former Republican who registered Libertarian a few years ago", "Running as the Libertarian Party of Florida's FL-25 nominee"],
            differentiators: ["Unopposed for the Libertarian nomination", "$60 cash on hand on $10,500 raised, as of June 30, 2026", "⚠ The Republican Party of Florida sued to strike him from the ballot over paying his filing fee by personal cheque, then DROPPED the suit Aug 14, 2026"],
            supporters: ["Republicans thought him consequential enough to litigate his removal in a toss-up seat — an implicit concession that he can move votes", "Offers a third option in a race both national parties are heavily nationalising [Verify — structural argument]"],
            opponents: ["Effectively unfunded at $60 cash on hand", "No locatable platform or public campaign presence [Verify — an absence of located records]", "No third-party candidate has won a Florida U.S. House seat in the modern era [Verify — structural argument]"] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Republican primary",
        note: "FIVE CANDIDATES, NO ONE NEAR A MAJORITY — SINGER TOOK IT BY UNDER FOUR POINTS. 37,885 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Scott Singer", party: "R", winner: true, positions: [], differentiators: ["11,896 votes — 31.4%"], supporters: [], opponents: [] },
          { name: "George R. Moraitis", party: "R", winner: false, positions: [], differentiators: ["10,384 votes — 27.41%"], supporters: [], opponents: [] },
          { name: "Dan Franzese", party: "R", winner: false, positions: [], differentiators: ["9,711 votes — 25.63%"], supporters: [], opponents: [] },
          { name: "Joseph 'Joe' Kaufman", party: "R", winner: false, positions: [], differentiators: ["4,701 votes — 12.41%"], supporters: [], opponents: [] },
          { name: "Raven Harrison", party: "R", winner: false, positions: [], differentiators: ["1,193 votes — 3.15%"], supporters: [], opponents: [] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Democratic primary",
        note: "MOSKOWITZ TURNED BACK A CHALLENGE FROM HIS LEFT. 44,631 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Jared Moskowitz", party: "D", winner: true, positions: [], differentiators: ["28,330 votes — 63.48%"], supporters: [], opponents: [] },
          { name: "Oliver Adams Larkin", party: "D", winner: false, positions: [], differentiators: ["16,301 votes — 36.52%"], supporters: [], opponents: [] } ] } ] },
  26: { name: "U.S. House — FL District 26", region: "Inland Miami-Dade — Hialeah, Doral, Miami Lakes — plus western Pembroke Pines and Miramar in Broward",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "HB 1D CUT FL-26'S REPUBLICAN LEAN IN HALF: Cook's own 2026 PVI file moves it from R+16 to R+7, the biggest partisan shift of any South Florida seat. The district dropped Collier County entirely and picked up Democratic-leaning Broward precincts around Pembroke Pines and Miramar. ⚠ Mario Díaz-Balart stayed put and both nominees were unopposed, so there was no Aug 18 primary here. ✅ Despite the shift, Cook and Inside Elections both still rate FL-26 Solid Republican. A no-party-affiliation candidate, Deborah Ann Meidinger Hosey, also qualified and appears on the ballot.",
        candidates: [
          { name: "Mario Díaz-Balart (incumbent)", party: "R", winner: false,
            positions: ["Lower costs and fiscal discipline", "Strong national defence — he chairs the National Security, State and Related Programs appropriations subcommittee", "Everglades restoration — founder and co-chair of the bipartisan Everglades Caucus"],
            differentiators: ["In Congress since 2003; Dean of the Florida delegation", "Vice Chair, House Committee on Appropriations", "Unopposed in the Republican primary", "$2,538,703 cash on hand, no reported debt, as of July 29, 2026"],
            supporters: ["As Appropriations vice chair, his campaign cites $128.5M in community project funding for South Florida across FY22–FY26", "Founded the Everglades Caucus; his campaign claims more than $6B delivered for restoration since his election", "Roughly a thirteen-to-one cash advantage over Locklin"],
            opponents: ["Locklin's campaign brands him a Trump puppet and runs an explicitly anti-corruption message", "The redraw made his seat nine PVI points less Republican", "Twenty-three years in Washington in a cycle running against incumbency [Verify — structural argument]"] },
          { name: "Nicole Locklin", party: "D", winner: false,
            positions: ["Universal healthcare — Medicare for All, a strong public option, or any model reaching universal coverage", "End wars that disrupt energy markets, cut unnecessary tariffs and build more housing", "Anti-corruption and accountability, including release of the Epstein files"],
            differentiators: ["First-time candidate; software lawyer at Databricks", "Unopposed in the Democratic primary", "$198,600 cash on hand on $347,681 raised, with $250,000 in debt, as of July 29, 2026", "Moved to Miami from Oklahoma in 2024"],
            supporters: ["Runs in a district far more competitive on paper than it was — Cook PVI R+16 to R+7 under HB 1D", "Publishes an unusually detailed, sourced issue platform on her own site", "Raised almost $350K as a first-time candidate against a twelve-term appropriator"],
            opponents: ["Díaz-Balart took over 70% in each of the last two elections", "Relocated to Miami only in 2024, an obvious residency line of attack", "Both Cook and Inside Elections still rate the seat Solid Republican"] },
          { name: "Deborah Ann Meidinger Hosey", party: "I", winner: false,
            positions: ["Put country above party — an explicitly non-partisan campaign", "Lower the cost of living; protect Social Security and Medicare; affordable healthcare at all ages", "Fiscally sound, transparent government; secure borders paired with clear pathways to lawful citizenship"],
            differentiators: ["No-party-affiliation candidate, qualified for the general election", "$1,540 cash on hand on $8,924 raised, as of June 30, 2026", "Publishes a full written platform despite minimal funding"],
            supporters: ["Gives voters an independent option in a seat neither national party is contesting hard", "Has done the work of publishing a substantive platform rather than a placeholder site"],
            opponents: ["$1,540 on hand against Díaz-Balart's $2.5M [Verify — structural argument]", "No prior elected office and no locatable endorsements [Verify — an absence of located records]", "NPA candidates rarely clear low single digits in Florida U.S. House races [Verify — structural argument]"] } ] } ] },
  27: { name: "U.S. House — FL District 27", region: "South Miami-Dade — part of Miami, Coral Gables, Cutler Bay and Palmetto Bay",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "ONE OF THE FEW SOUTH FLORIDA SEATS HB 1D BARELY TOUCHED: Cook's PVI is unchanged at R+6 and the 2024 presidential figures under the new lines are essentially identical to the old ones. ⚠ The line adjustments were minimal, but the district is not the same as 2024 on paper — it now runs south to Cutler Bay and Palmetto Bay. ✅ Salazar dominated her primary with 81.35%; Democrats picked former CBS Miami anchor Eliott Rodriguez by seven points. Cook rates FL-27 Likely Republican, and Inside Elections also rates it Likely Republican with no change. Certified Aug 27, 2026.",
        candidates: [
          { name: "María Elvira Salazar (incumbent)", party: "R", winner: false,
            positions: ["Lower taxes, support for small business, workforce training and job fairs", "Anti-socialism — sanctions and pressure on the Cuban, Venezuelan and Nicaraguan regimes", "Congressional term limits, and a legal pathway for undocumented immigrants through her Dignity Act"],
            differentiators: ["Three-term incumbent; won the Republican primary with 81.35% over V. Michael Arias", "$2,259,547 cash on hand as of July 29, 2026", "Lead sponsor of the Dignity Act, which would create a legal pathway for undocumented immigrants", "Former award-winning Spanish- and English-language broadcast journalist; daughter of Cuban exiles"],
            supporters: ["Roughly a seven-to-one cash advantage over Rodriguez at the pre-primary filing", "Has publicly distanced herself from the administration's deportation crackdown via the Dignity Act — a fit for a heavily immigrant district", "An 81% primary win signals no meaningful Republican dissent"],
            opponents: ["Rodriguez argues she has not delivered on affordability — that the community 'has simply become too expensive to live in'", "The Dignity Act has not become law, leaving her open to the charge that the distancing is rhetorical [Verify — structural argument]", "At R+6 this is the least-Republican seat any Miami-Dade Republican holds, and Cook rates it only Likely R"] },
          { name: "Eliott Rodriguez", party: "D", winner: false,
            positions: ["Affordability — expand workforce housing and stabilise property-insurance rates", "Oppose the administration's deportation crackdown, which he says falls hardest on Latino communities", "Protect Social Security and Medicare; support small businesses and government accountability"],
            differentiators: ["Former CBS News Miami anchor — twenty-five years on air, retired December 2025", "Won the Democratic primary with 53.51% over former prosecutor Robin Peguero", "$325,097 cash on hand on $661,173 raised, no reported debt, as of July 29, 2026", "Son of Cuban immigrants, like his opponent"],
            supporters: ["Decades of county-wide name recognition from nightly television news", "The best-funded Democrat in this race and debt-free heading into the general", "Immigration enforcement is a live local grievance he campaigns on in both languages"],
            opponents: ["Has never held elected office and won his own primary by only seven points", "Trails Salazar roughly seven to one in cash on hand", "The seat is R+6 and rated Likely Republican by both Cook and Inside Elections"] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Republican primary",
        note: "SALAZAR WAS NEVER THREATENED. 35,936 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "María Elvira Salazar", party: "R", winner: true, positions: [], differentiators: ["29,233 votes — 81.35%"], supporters: [], opponents: [] },
          { name: "V. Michael Arias", party: "R", winner: false, positions: [], differentiators: ["6,703 votes — 18.65%"], supporters: [], opponents: [] } ] },
      { date: "Aug 18, 2026", type: "past", scope: "Federal · District · Democratic primary",
        note: "A CLOSE TWO-WAY RACE — NAME RECOGNITION BEAT A PROSECUTORIAL RESUME BY ABOUT 2,300 VOTES. 32,388 votes cast. Certified Aug 27, 2026.",
        candidates: [
          { name: "Eliott Rodriguez", party: "D", winner: true, positions: [], differentiators: ["17,332 votes — 53.51%"], supporters: [], opponents: [] },
          { name: "Robin Peguero", party: "D", winner: false, positions: [], differentiators: ["15,056 votes — 46.49%"], supporters: [], opponents: [] } ] } ] },
  28: { name: "U.S. House — FL District 28", region: "South-western Miami-Dade — West Kendall, The Hammocks, Goulds, Homestead and Florida City — plus the Florida Keys",
    races: [
      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",
        note: "THE LEAST-CHANGED SOUTH FLORIDA SEAT UNDER HB 1D: Cook's PVI is identical before and after the redraw at R+10, and the 2024 presidential figures are unchanged. ⚠ Both nominees were unopposed, so there was no Aug 18 primary here — Monroe County ran no contested congressional primary at all. ✅ This is a Giménez–Ehr rematch; Ehr lost to Giménez in this district in 2024 [Verify — the 2024 result via an aggregator, not the state archive]. A no-party-affiliation candidate, Eddy Rojas, is also on the November ballot. Cook and Inside Elections both rate FL-28 Solid Republican.",
        candidates: [
          { name: "Carlos A. Giménez (incumbent)", party: "R", winner: false,
            positions: ["Lower taxes and balance the budget", "Protect the environment", "⚠ He sets his 'Day One' agenda from a constituent survey rather than a published issues platform — his campaign site has no issues page [Verify]"],
            differentiators: ["Three-term incumbent; Mayor of Miami-Dade County 2011–2020 and former Miami fire chief", "Unopposed in the Republican primary", "$692,873 cash on hand, no reported debt, as of July 29, 2026", "Born in Cuba in 1954; came to the U.S. in 1960 and settled in Little Havana"],
            supporters: ["Beat Ehr in this same district in 2024, and HB 1D did not make the seat any more Democratic", "A county-executive resume — nine years running Florida's largest county", "Both Cook and Inside Elections rate the seat Solid Republican"],
            opponents: ["Ehr's campaign charges he is complicit in corruption and anti-democratic extremism", "Publishes no detailed issues platform on his campaign site — voters are pointed to a survey instead", "Ehr is back for a rematch with a broader endorsement coalition than in 2024"] },
          { name: "Phil 'Felipe' Ehr", party: "D", winner: false,
            positions: ["Lower premiums and out-of-pocket costs through his proposed Healthcare Stability and Program Choice Act", "Enforce property-insurance anti-fraud laws and stabilise the homeowners market", "Build a full VA hospital or major VA facility in South Dade; protect the Everglades with a moratorium on large AI data centres"],
            differentiators: ["Retired U.S. Navy commander — twenty-six years of service; his first mission was the Mariel Boatlift", "Unopposed in the Democratic primary", "$454,610 cash on hand on $438,286 raised, but $644,084 in reported debt, as of June 30, 2026", "Endorsed by former U.S. Rep. Debbie Mucarsel-Powell, state Rep. Angie Nixon and former U.S. Ambassador Luis Moreno"],
            supporters: ["A Navy-service profile in a district with large veteran and Cuban-exile populations", "His endorsement coalition has grown well beyond 2024, spanning elected officials, veterans and faith leaders", "Runs the most legislation-specific platform in the race — a named healthcare bill and a concrete South Dade VA proposal"],
            opponents: ["Lost to Giménez in this district in 2024 [Verify — via an aggregator]", "⚠ $644K in reported campaign debt exceeds his cash on hand", "FL-28 is R+10 and rated Solid Republican by both Cook and Inside Elections"] },
          { name: "Eddy Rojas", party: "I", winner: false,
            positions: ["⚠ His campaign site states only that he is running for Congress in District 28; the page is script-rendered and no platform text could be retrieved [Verify]", "⚠ No published issue positions could be located from any source [Verify]", "Running with no party affiliation"],
            differentiators: ["No-party-affiliation candidate, qualified for the general election", "⚠ No campaign committee appears for him in the FEC's 2026 all-candidates bulk file [Verify]", "The third name on a ballot otherwise made up of two candidates who already faced each other in 2024"],
            supporters: ["Cleared Florida's qualifying process to appear on the November ballot", "Offers an alternative to a repeat matchup between the same two candidates as 2024 [Verify — structural argument]"],
            opponents: ["No detectable campaign-finance activity — no committee found in the FEC's 2026 candidate file [Verify]", "No retrievable platform or public campaign presence [Verify — an absence of located records]", "NPA candidates in Florida U.S. House races rarely exceed low single digits [Verify — structural argument]"] } ] } ] },
