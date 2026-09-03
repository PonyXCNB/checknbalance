#!/usr/bin/env node
// apply-dc-races.js — the District of Columbia's marquee 2026 races, inserted into state.html's
// STATE_RACES so DC earns the "marquee races built" tier honestly (it had worn the label with no
// races behind it until the Sept 3, 2026 self-review; the owner asked for DC to be researched).
//
// Sources (read Sept 3, 2026; anything not read from DCBOE or a named article carries [Verify]):
//   DCBOE 2026 elections index and the "November 3, 2026 General Election" candidate roster PDF
//   dated 07/15/2026 (every name, party label and petition date below); DCBOE news (July 16 special-
//   election audit; Initiative 86); AP via WSLS Aug 24, 2026 (White's "Defend DC"); NBC News June 18,
//   2026 (mayoral concession, Trump remarks); Washingtonian Aug 17, 2026 (every Republican candidate);
//   WJLA June 2026 (attorney general); WTOP June 22, 2026 (at-large and Ward 1 primaries); Hill Rag
//   Jan 15, 2026 (at-large platforms); 51st.news June 25, 2026 (uncertified ward results and the
//   November FAQ); politics1.com (minor-candidate bios); Wikipedia race pages for DCBOE-derived vote
//   totals — every total is marked [Verify certified canvass] because electionresults.dcboe.org
//   renders only in a browser.
//
// Idempotent: does nothing if "  DC: [" is already present. Refuses to write if STATE_RACES is absent.
"use strict";
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "state.html");
const original = fs.readFileSync(file, "utf8");
const eol = /\r\n/.test(original) ? "\r\n" : "\n";
let s = original.replace(/\r\n/g, "\n");

const DC = `  DC: [
    // ---------- UPCOMING — Nov 3, 2026 general (DCBOE candidate roster dated July 15, 2026) ----------
    {
      key: "delegate", date: "Nov 3, 2026", type: "upcoming", scope: "Federal · At-Large",
      office: "Delegate to the U.S. House — District of Columbia (OPEN SEAT)",
      note: "Eleanor Holmes Norton (D), delegate since 1991, ended her reelection campaign on Jan 26, 2026 after months of questions about her health [Verify — reported by NPR and the Washington Blade; read only in search summaries]. At-large Councilmember Robert White won the June 16 Democratic primary with 63.6% in a five-way field. In a city that gave Kamala Harris about 90% in 2024, the Democratic nominee is the overwhelming favorite. ⚠ The November roster is DCBOE's July 15, 2026 list — [Verify] no post-challenge changes.",
      candidates: [
        { name: "Robert White", party: "D", winner: false,
          positions: [
            "Defend DC home rule against congressional intervention — a 'Defend DC' effort to recruit, train and bus residents to campaign in nearby House districts against members who back federal control (AP, Aug 24, 2026)",
            "Launch a PAC to support congressional candidates who back DC statehood and local control (AP, Aug 24, 2026)",
            "Opposes the extended National Guard deployment and the House bill codifying the 'Safe and Beautiful' executive order (AP, Aug 24, 2026)"
          ],
          differentiators: [
            "At-large councilmember since 2017; attorney and former congressional aide (politics1.com)",
            "Won the primary 63.6% to 20.9% over Ward 2 Councilmember Brooke Pinto (DCBOE-derived totals [Verify certified canvass])",
            "Backed by Sen. Elizabeth Warren, Reps. Clyburn, Frost and Jayapal, the Congressional Black Caucus, the Progressive Caucus and AFGE [Verify at campaign site]"
          ],
          supporters: [
            "An experienced legislator with national progressive and CBC backing who will fight congressional overreach rather than absorb it [Verify]",
            "'Congress has used its power over D.C. to attack us' — he offers a plan to change Congress, not just lobby it (AP, Aug 24, 2026)"
          ],
          opponents: [
            "Political scientist Michael Fauntroy questioned whether 'Defend DC' is feasible in gerrymandered districts and whether White has the networks to execute it (AP, Aug 24, 2026)",
            "His Republican rival argues that '50 years of one-party rule has not worked' (Washingtonian, Aug 17, 2026)"
          ] },
        { name: "Denise Rosado", party: "R", winner: false,
          positions: [
            "Exempt DC residents from federal income tax instead of pursuing statehood (Washingtonian, Aug 17, 2026)",
            "Restore the Commanders' former team name (Washingtonian, Aug 17, 2026)",
            "Incentivize AI companies to invest in DC (Washingtonian, Aug 17, 2026)"
          ],
          differentiators: [
            "Attorney; former FCC lawyer, former Arizona assistant attorney general and administrative law judge (Washingtonian, Aug 17, 2026)",
            "A former Democrat (Washingtonian, Aug 17, 2026)",
            "Unopposed in the June 16 Republican primary [Verify vote total]"
          ],
          supporters: ["'We need diverse choices' — a check on one-party rule (Washingtonian, Aug 17, 2026)"],
          opponents: ["A longshot in a roughly 90% Democratic city; her tax-exemption plan drops the statehood goal most DC voters support (Washingtonian, Aug 17, 2026)"] },
        { name: "Kymone Freeman", party: "G", winner: false,
          positions: ["DC statehood and social-justice advocacy [Verify 2026 platform]"],
          differentiators: ["Co-founder of the social-justice radio station We Act Radio; the DC Statehood Green Party's 2024 delegate nominee (politics1.com)"],
          supporters: [], opponents: [] }
      ]
    },
    {
      key: "mayor", date: "Nov 3, 2026", type: "upcoming", scope: "Local · District",
      office: "Mayor of the District of Columbia (OPEN SEAT)",
      note: "Muriel Bowser (D) announced on Nov 25, 2025 that she would not seek a fourth term. Ward 4 Councilmember Janeese Lewis George, a democratic socialist, won the June 16 Democratic primary outright with 54.1% to former Councilmember Kenyan McDuffie's 35.1% — no ranked-choice rounds were needed in DC's first ranked-choice mayoral primary. President Trump said he 'won't put up with it' and floated a federal takeover if she won; she called that 'an attack on democracy itself' (NBC News, June 18, 2026). The Democratic nominee has won every mayoral election since home rule began in 1974. ⚠ No Republican qualified; the November field is DCBOE's July 15 roster [Verify final].",
      candidates: [
        { name: "Janeese Lewis George", party: "D", winner: false,
          positions: [
            "Universal child care [Verify — campaign site could not be reached]",
            "Social housing and housing affordability [Verify — campaign site could not be reached]",
            "Defend home rule: 'Threatening Home Rule because you do not like how residents vote is an attack on democracy itself' (NBC News, June 18, 2026)"
          ],
          differentiators: [
            "Ward 4 councilmember since 2021; attorney; identifies as a democratic socialist (NBC News, June 18, 2026; politics1.com)",
            "Won the primary 54.1% to 35.1% (76,276 to 49,414), a majority in round one (DCBOE-derived totals [Verify certified canvass])",
            "Endorsed by Rep. Ilhan Omar, AFL-CIO and SEIU locals, the Sierra Club, Our Revolution DC and former AG Karl Racine; Bowser stayed publicly neutral [Verify]"
          ],
          supporters: [
            "Part of a national wave of democratic-socialist municipal wins — a mandate for child care and housing (NBC News, June 18, 2026)",
            "A broad labor and progressive coalition; led every public poll of the primary [Verify poll citations]"
          ],
          opponents: [
            "Business, restaurant and realtor groups lined up behind McDuffie, fearing her agenda for the city's economy [Verify]",
            "Her win drew an explicit federal-takeover threat from the President, raising the stakes of a confrontation with the White House (NBC News, June 18, 2026)"
          ] },
        { name: "Rhonda Hamilton", party: "I", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["Nonprofit founder, financial advisor and former realtor; ran for mayor in 2022 (politics1.com); qualified by petition Aug 5, 2026 (DCBOE roster)"],
          supporters: [], opponents: [] },
        { name: "Robert L. Gross", party: "G", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["IT specialist and Air Force veteran; won the Statehood Green primary with 420 votes over write-ins (politics1.com [Verify certified])"],
          supporters: [], opponents: [] }
      ]
    },
    {
      key: "attorney-general", date: "Nov 3, 2026", type: "upcoming", scope: "Local · District",
      office: "Attorney General — District of Columbia",
      note: "Brian Schwalb (D), elected in 2022, seeks a second four-year term after beating ANC commissioner J.P. Szymkowicz 90.6% to 8.9% in the primary. He faces immigration lawyer Manuel Rivera (R), a self-described 'unconventional Republican' and former conservative Democrat. Schwalb's suits against the federal police takeover and immigration actions frame the race.",
      candidates: [
        { name: "Brian Schwalb (incumbent)", party: "D", winner: false,
          positions: [
            "Oppose federal takeover of DC governance — blocked the police takeover in court and filed suits protecting residents (WJLA candidate guide, June 2026)",
            "'Swift and certain consequences' for youth offenders plus prevention; cites an 85% prosecution rate for violent juvenile cases (WJLA, June 2026)",
            "Keep illegal guns out of DC; target slumlords and social-media harms to young people (WJLA, June 2026 [Verify])"
          ],
          differentiators: [
            "Former Justice Department trial attorney and Venable LLP managing partner (WJLA, June 2026)",
            "115,909 votes (90.6%) in the primary (DCBOE-derived [Verify certified canvass])"
          ],
          supporters: ["The office that stood up to the federal police takeover; balances accountability with youth intervention (WJLA, June 2026)"],
          opponents: [
            "Rivera: 'flashy lawsuits' whose settlements return 'less than a penny on the dollar' to residents (WJLA, June 2026)",
            "His primary challenger said the office 'allowed crime to fester' and did not take juvenile crime seriously enough (WJLA, June 2026)"
          ] },
        { name: "Manuel Rivera", party: "R", winner: false,
          positions: [
            "Prioritize juvenile crime, homelessness, drug addiction and domestic violence (WJLA, June 2026)",
            "Improve the office's efficiency and transparency; use private law firms rather than 'flashy lawsuits' (WJLA, June 2026; Washingtonian, Aug 17, 2026)",
            "A less adversarial posture toward the federal government — 'We're not at war' (WJLA, June 2026)"
          ],
          differentiators: [
            "Immigration lawyer with about 40 years' experience; former conservative Democrat who helped establish DC's workers'-compensation law for undocumented workers (Washingtonian, Aug 17, 2026)",
            "Won the Republican primary with 2,530 votes over write-ins (DCBOE-derived [Verify certified])"
          ],
          supporters: ["Victim-focused priorities and a check on litigation spending (WJLA, June 2026)"],
          opponents: ["A longshot; his conciliatory stance on federal intervention is out of step with a city that fought the takeover (Washingtonian, Aug 17, 2026)"] }
      ]
    },
    {
      key: "council-chair", date: "Nov 3, 2026", type: "upcoming", scope: "Local · District",
      office: "Chairman of the Council — District of Columbia",
      note: "Phil Mendelson (D), chairman since 2012, seeks a fifth term; he took 95.8% in the Democratic primary. The Office of Campaign Finance fined him and his committee $4,000 for printing campaign material on government printers [Verify — OCF order and Washington City Paper report seen only in search summaries]. Challenger Abi-Ananiah Prudent (R) is a faith-based organizer who moved to DC two years ago. ⚠ Former Councilmember Jack Evans announced a primary run in January (Hill Rag, Jan 28, 2026) — [Verify] whether he appeared on the June ballot.",
      candidates: [
        { name: "Phil Mendelson (incumbent)", party: "D", winner: false,
          positions: ["[Verify] 2026 platform not yet read"],
          differentiators: [
            "Council chairman since 2012, on the Council since 1999",
            "104,316 votes (95.8%) in the primary (DCBOE-derived [Verify certified canvass])",
            "Endorsed by UFCW Local 400 and the Capital Stonewall Democrats [Verify]"
          ],
          supporters: ["Institutional steadiness as the Council manages a federal takeover fight and a new mayor [Verify — structural argument]"],
          opponents: ["Fined $4,000 by the Office of Campaign Finance for using government resources for campaign printing [Verify]"] },
        { name: "Abi-Ananiah Prudent", party: "R", winner: false,
          positions: ["Address crime through a faith-based approach; a 'resident-first', accountable government (Washingtonian, Aug 17, 2026)"],
          differentiators: ["Georgia native and Navy Yard resident, formerly with Concerned Women for America; moved to DC two years ago (Washingtonian, Aug 17, 2026)"],
          supporters: ["A choice on the ballot in a one-party city (Washingtonian, Aug 17, 2026)"],
          opponents: ["A newcomer to the city with no local governing record (Washingtonian, Aug 17, 2026)"] }
      ]
    },
    {
      key: "council-at-large", date: "Nov 3, 2026", type: "upcoming", scope: "Local · District",
      office: "Council At-Large — two seats",
      note: "Two of the four at-large seats are up: Anita Bonds (D) is retiring, and the seat Kenyan McDuffie (I) vacated to run for mayor was filled in a June 16 special election by former Councilmember Elissa Silverman (I), who now seeks a full term. Under the Home Rule Act no more than two of the four at-large seats may be held by the majority party, so in practice one of the two seats filled each cycle goes to the top non-Democratic finisher [Verify the statutory wording and how ranked-choice tabulation applies to a two-seat race]. Democratic nominee Oye Owolewa, the outgoing shadow representative, won an eight-round ranked-choice primary. Four independents, a Republican and a Statehood Green compete for the non-Democratic seat.",
      candidates: [
        { name: "Oye Owolewa", party: "D", winner: false,
          positions: ["Affordable housing (Hill Rag, Jan 15, 2026)", "DC statehood advocacy (Hill Rag, Jan 15, 2026)", "Traffic safety (Hill Rag, Jan 15, 2026)"],
          differentiators: [
            "DC's shadow representative since 2021; pharmacist; former ANC commissioner; son of Nigerian immigrants (WTOP, June 22, 2026)",
            "Won the primary in the final round with 50.9% over Lisa Raymond (27.8%) after starting at 34.4% (WTOP, June 22, 2026 [Verify certified rounds])"
          ],
          supporters: ["A proven statehood advocate with a city-wide base (WTOP, June 22, 2026)"],
          opponents: ["Started the primary with barely a third of first choices in a nine-way field (WTOP, June 22, 2026)"] },
        { name: "Elissa Silverman (incumbent)", party: "I", winner: false,
          positions: [
            "'Standing up to political intimidation'; reduce truancy (Hill Rag, Jan 15, 2026)",
            "Refuses corporate contributions; campaign-finance reform [Verify]",
            "Author of DC's 2016 paid family leave law; budget oversight and labor protections [Verify]"
          ],
          differentiators: [
            "At-large member 2015–2023 and a former journalist; won the June 16 special election with 55.4% (73,246 votes) over interim appointee Doni Crawford (25.8%) and Jacque Patterson (17.8%); sworn in July 17, 2026 (DCBOE-derived [Verify certified])",
            "Lost her 2022 reelection bid, finishing third"
          ],
          supporters: ["An independent watchdog with a labor and good-government record [Verify]"],
          opponents: ["Voters removed her in 2022; establishment figures have opposed her before [Verify]"] },
        { name: "Darrell Green", party: "R", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["Lifelong DC resident, retired MPD officer and small-business owner [Verify — DC GOP candidate page seen only in a search summary]"],
          supporters: [], opponents: [] },
        { name: "Darryl Moch", party: "G", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["DC Statehood Green Party chair, pastor and frequent candidate (politics1.com)"],
          supporters: [], opponents: [] },
        { name: "Joseph Jackson", party: "I", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["Go-go music industry advocate; 2024 at-large candidate (politics1.com); qualified by petition (DCBOE roster)"],
          supporters: [], opponents: [] },
        { name: "Nina Taylor", party: "I", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["Nonprofit executive (politics1.com); qualified by petition (DCBOE roster)"],
          supporters: [], opponents: [] },
        { name: "Danielle Urey", party: "I", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["Workforce-development professional; former Cottage City, Md. commissioner (politics1.com); qualified by petition (DCBOE roster)"],
          supporters: [], opponents: [] }
      ]
    },
    {
      key: "council-ward-1", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 1",
      office: "Council — Ward 1 (OPEN SEAT)",
      note: "Brianne Nadeau (D) is not seeking a fourth term — the first open Ward 1 seat in 44 years [Verify — WUSA9, seen in a search summary]. Aparna Raj, a 32-year-old tenant organizer and former Metro DC DSA chair, won the Democratic primary in the fourth ranked-choice round with 52.3% over Miguel Trindade Deramo (26.7%). She faces a Republican, a Statehood Green and an independent in November.",
      candidates: [
        { name: "Aparna Raj", party: "D", winner: false,
          positions: ["Housing affordability and tenant protections (WTOP, June 22, 2026)"],
          differentiators: [
            "Tenant organizer; former chair of the Metro DC Democratic Socialists of America (WTOP, June 22, 2026)",
            "Round 1: 47.4%; final (round 4): 52.3% (DCBOE-derived [Verify certified canvass])",
            "Backed by ATU Local 689, the Working Families Party and Sierra Club DC [Verify]"
          ],
          supporters: ["Heavy union and progressive support; a renter's voice for a renter-majority ward (WTOP, June 22, 2026)"],
          opponents: ["Critics of the DSA slate argue the ward needs pragmatists on crime and services [Verify — no direct reporting read]"] },
        { name: "Jett James Jasper", party: "R", winner: false,
          positions: ["Crime, litter and graffiti (Washingtonian, Aug 17, 2026)"],
          differentiators: ["Adams Morgan resident who works at the Leadership Institute; moved to DC two years ago (Washingtonian, Aug 17, 2026)"],
          supporters: ["'Having a choice … is important to democracy' (Washingtonian, Aug 17, 2026)"], opponents: [] },
        { name: "Jude Crannitch", party: "G", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["DC Statehood Green nominee (DCBOE roster)"], supporters: [], opponents: [] },
        { name: "Ryan Prince", party: "I", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Independent; qualified by petition Aug 4, 2026 (DCBOE roster)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "council-ward-3", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 3",
      office: "Council — Ward 3",
      note: "Matt Frumin (D), first elected in 2022, was unopposed in the primary and is the only candidate on the November ballot; only write-ins oppose him (DCBOE roster, July 15, 2026).",
      candidates: [
        { name: "Matthew Frumin (incumbent)", party: "D", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["16,123 votes (96.1%) in the primary (DCBOE-derived [Verify certified])", "Unopposed on the general-election ballot (DCBOE roster)"],
          supporters: [], opponents: [] }
      ]
    },
    {
      key: "council-ward-5", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 5",
      office: "Council — Ward 5",
      note: "Zachary Parker (D), first elected in 2022, won renomination with about 78% over Bernita Carmichael (about 14%) and Bridget French (about 7%) (51st, June 25, 2026 — uncertified [Verify DCBOE canvass]). He faces Peruvian-born debt-collection lawyer Jeffrey Kihien-Palza (R) and Statehood Green Joyce Robinson-Paul.",
      candidates: [
        { name: "Zachary Parker (incumbent)", party: "D", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["About 78% in the primary (51st, June 25, 2026 [Verify certified])", "Endorsed by IAFF Local 36 among others [Verify]"],
          supporters: [], opponents: [] },
        { name: "Jeffrey Kihien-Palza", party: "R", winner: false,
          positions: ["Rat abatement (Washingtonian, Aug 17, 2026)", "Supports a higher 'family wage' minimum wage (Washingtonian, Aug 17, 2026)", "Streamline eviction processes (Washingtonian, Aug 17, 2026)"],
          differentiators: ["Born in Peru, 27 years in the United States; debt-collection lawyer, consultant and property owner (Washingtonian, Aug 17, 2026)"],
          supporters: [], opponents: ["Motivated in part by his own difficulty evicting tenants — a landlord's-eye platform in a tenant-heavy city (Washingtonian, Aug 17, 2026)"] },
        { name: "Joyce Robinson-Paul", party: "G", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["DC Statehood Green nominee (DCBOE roster)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "council-ward-6", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 6",
      office: "Council — Ward 6",
      note: "Charles Allen (D), on the Council since 2015, won renomination with about 76% over Gloria Nauden (about 18%) and Michael Murphy (about 6%) (51st, June 25, 2026 — uncertified [Verify]). He faces Jorge Rice (R), a federal-agency conflict mediator who entered politics after being assaulted on the streetcar in 2024.",
      candidates: [
        { name: "Charles Allen (incumbent)", party: "D", winner: false,
          positions: ["[Verify] platform not yet read"],
          differentiators: ["About 76% in the primary (51st, June 25, 2026 [Verify certified])", "Organized-labor backing [Verify]"],
          supporters: [], opponents: [] },
        { name: "Jorge Rice", party: "R", winner: false,
          positions: ["Crime reduction and local accountability (Washingtonian, Aug 17, 2026)"],
          differentiators: ["Longtime Capitol Hill resident; conflict mediator for federal agencies; broke his nose in a 2024 streetcar assault (Washingtonian, Aug 17, 2026)"],
          supporters: ["Decided to run rather than 'sit behind the computer and complain' (Washingtonian, Aug 17, 2026)"], opponents: [] }
      ]
    },
    {
      key: "shadow-senator", date: "Nov 3, 2026", type: "upcoming", scope: "Federal · At-Large",
      office: "U.S. Senator (Shadow) — District of Columbia",
      note: "An unpaid lobbying post recognized only by the District; the holder is not seated in the Senate. Paul Strauss (D), shadow senator since 1997, seeks another six-year term; he took 97.3% in the primary and is the only name on the November ballot (DCBOE roster, July 15, 2026).",
      candidates: [
        { name: "Paul Strauss (incumbent)", party: "D", winner: false,
          positions: ["DC statehood advocacy in Congress"],
          differentiators: ["102,765 votes (97.3%) in the primary; the Republican and Statehood Green primaries produced write-ins only (DCBOE-derived [Verify certified])"],
          supporters: [], opponents: [] }
      ]
    },
    {
      key: "shadow-representative", date: "Nov 3, 2026", type: "upcoming", scope: "Federal · At-Large",
      office: "U.S. Representative (Shadow) — District of Columbia (OPEN SEAT)",
      note: "Incumbent Oye Owolewa (D) announced on Aug 22, 2025 that he would not seek reelection and instead ran for Council at-large [Verify — WTOP, seen in a search summary]. Franklin Garcia (D), who held the post from 2015 to 2021, won the primary with 97.9% and is the only name on the November ballot (DCBOE roster).",
      candidates: [
        { name: "Franklin Garcia", party: "D", winner: false,
          positions: ["DC statehood advocacy [Verify 2026 platform]"],
          differentiators: ["Shadow representative 2015–2021; 2020 Council candidate", "99,964 votes (97.9%) in the primary (DCBOE-derived [Verify certified])"],
          supporters: [], opponents: [] }
      ]
    },
    {
      key: "sboe-ward-1", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 1",
      office: "State Board of Education — Ward 1",
      note: "Nonpartisan seat, four-year term. Four of the eight ward seats (1, 3, 5, 6) are up this year. Ben Williams is the only candidate on DCBOE's July 15, 2026 roster [Verify final list].",
      candidates: [ { name: "Ben Williams", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] } ]
    },
    {
      key: "sboe-ward-3", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 3",
      office: "State Board of Education — Ward 3",
      note: "Nonpartisan seat. Aaron Wesolowski and Eric Goulet qualified (DCBOE roster, July 15, 2026) [Verify final list and incumbent status].",
      candidates: [
        { name: "Aaron Wesolowski", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] },
        { name: "Eric Goulet", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "sboe-ward-5", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 5",
      office: "State Board of Education — Ward 5",
      note: "Nonpartisan seat. Jon Alfuth and Lynn Jennings qualified (DCBOE roster, July 15, 2026) [Verify final list and incumbent status].",
      candidates: [
        { name: "Jon Alfuth", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] },
        { name: "Lynn Jennings", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "sboe-ward-6", date: "Nov 3, 2026", type: "upcoming", scope: "Local · Ward 6",
      office: "State Board of Education — Ward 6",
      note: "Nonpartisan seat. David Parker, Joshua Wiley and Amber A. Williams qualified (DCBOE roster, July 15, 2026) [Verify final list and incumbent status].",
      candidates: [
        { name: "David Parker", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] },
        { name: "Joshua Wiley", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] },
        { name: "Amber A. Williams", party: "NP", winner: false, positions: ["[Verify] platform not yet read"], differentiators: ["Nonpartisan office (DCBOE roster)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "initiative-86", date: "Nov 3, 2026", type: "upcoming", scope: "Ballot Measure · District",
      office: "Initiative Measure No. 86 — Prohibiting Force-Feeding of Birds Act (foie gras ban)",
      note: "Would ban force-feeding birds to enlarge their livers and prohibit the commercial sale, distribution and importation of foie gras and similar products in DC, with fines of $1,000 to $5,000 per violation and license suspension for repeat offenders; effective July 1, 2027 if approved. DCBOE verified 31,726 valid signatures on Aug 5, 2026 against a 23,940 requirement [Verify — WTOP, Washingtonian and WJLA reports seen in search summaries; the measure is named on DCBOE's news page]. Backed by Pro-Animal DC; restaurant opposition has been reported [Verify organized opposition committee]. ⚠ The rent-freeze measure, Initiative 88, did NOT qualify — a landlord-industry lawsuit blocked signature gathering and it missed the deadline [Verify].",
      candidates: []
    },

    // ---------- PAST — June 16, 2026 primaries and the at-large special election ----------
    {
      key: "primary-mayor", date: "Jun 16, 2026", type: "past", scope: "Local · District · Primary",
      office: "Mayor — Democratic Primary",
      note: "DC's first ranked-choice mayoral primary ended in round one: Lewis George cleared 50% of first choices. Counting took days because of mail-ballot rules and ranked-choice tabulation; McDuffie conceded June 18 (NBC News). Totals are DCBOE-derived — [Verify against the DCBOE certified canvass and its certification date].",
      candidates: [
        { name: "Janeese Lewis George", party: "D", winner: true, positions: [], differentiators: ["76,276 votes (54.1%)"], supporters: [], opponents: [] },
        { name: "Kenyan McDuffie", party: "D", winner: false, positions: [], differentiators: ["49,414 votes (35.1%); former at-large councilmember (I) who rejoined the Democratic Party to run; backed by Eric Holder, Tom Perez, Sen. Angela Alsobrooks and former mayors Pratt and Williams [Verify]"], supporters: [], opponents: [] },
        { name: "Rini Sampath", party: "D", winner: false, positions: [], differentiators: ["4,544 votes (3.2%)"], supporters: [], opponents: [] },
        { name: "Gary Goodweather", party: "D", winner: false, positions: [], differentiators: ["4,403 votes (3.1%)"], supporters: [], opponents: [] },
        { name: "Vincent Orange", party: "D", winner: false, positions: [], differentiators: ["3,582 votes (2.5%); former councilmember"], supporters: [], opponents: [] },
        { name: "Hope Solomon", party: "D", winner: false, positions: [], differentiators: ["1,501 votes (1.1%)"], supporters: [], opponents: [] },
        { name: "Ernest Johnson", party: "D", winner: false, positions: [], differentiators: ["717 votes (0.5%)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "primary-delegate", date: "Jun 16, 2026", type: "past", scope: "Federal · At-Large · Primary",
      office: "Delegate to the U.S. House — Democratic Primary (OPEN SEAT)",
      note: "The first open delegate primary since 1990. Robert White won a first-round majority over Ward 2 Councilmember Brooke Pinto, former Microsoft executive Kinney Zalesne, Trent Holbrook and former NRC chairman Greg Jaczko. DCBOE-derived totals [Verify certified canvass].",
      candidates: [
        { name: "Robert White", party: "D", winner: true, positions: [], differentiators: ["86,871 votes (63.6%)"], supporters: [], opponents: [] },
        { name: "Brooke Pinto", party: "D", winner: false, positions: [], differentiators: ["28,550 votes (20.9%); Ward 2 councilmember"], supporters: [], opponents: [] },
        { name: "Kinney Zalesne", party: "D", winner: false, positions: [], differentiators: ["10,666 votes (7.8%)"], supporters: [], opponents: [] },
        { name: "Trent Holbrook", party: "D", winner: false, positions: [], differentiators: ["6,100 votes (4.5%)"], supporters: [], opponents: [] },
        { name: "Gregory Jaczko", party: "D", winner: false, positions: [], differentiators: ["3,936 votes (2.9%); former Nuclear Regulatory Commission chairman"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "primary-council-at-large", date: "Jun 16, 2026", type: "past", scope: "Local · District · Primary",
      office: "Council At-Large — Democratic Primary (OPEN SEAT)",
      note: "Nine Democrats sought the seat Anita Bonds is vacating. Owolewa led round one with 34.4% and reached 50.9% in the eighth ranked-choice round (WTOP, June 22, 2026 [Verify certified rounds]). Only the final-round leaders are listed.",
      candidates: [
        { name: "Oye Owolewa", party: "D", winner: true, positions: [], differentiators: ["Final round: 59,189 votes (50.9%); round 1: 34.4%"], supporters: [], opponents: [] },
        { name: "Lisa Raymond", party: "D", winner: false, positions: [], differentiators: ["Final round: 27.8%; nonprofit major-gifts officer focused on child care, housing and home rule (Hill Rag, Jan 15, 2026)"], supporters: [], opponents: [] },
        { name: "Kevin B. Chavous", party: "D", winner: false, positions: [], differentiators: ["Round 1: 13.3%; lawyer endorsed by retiring incumbent Anita Bonds (Hill Rag, Jan 15, 2026) [Verify final-round share]"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "special-council-at-large", date: "Jun 16, 2026", type: "past", scope: "Local · District · Special",
      office: "Council At-Large — Special Election (remainder of the McDuffie term)",
      note: "Held the same day as the primary to fill the non-Democratic at-large seat Kenyan McDuffie resigned on Jan 5, 2026 to run for mayor; the Council had appointed Doni Crawford as interim member. All three candidates ran as independents. Silverman was sworn in July 17, 2026 after certification and must win again on Nov 3 for a full term (DCBOE manual-audit notice, July 16, 2026 [Verify certified totals]).",
      candidates: [
        { name: "Elissa Silverman", party: "I", winner: true, positions: [], differentiators: ["73,246 votes (55.4%)"], supporters: [], opponents: [] },
        { name: "Doni Crawford", party: "I", winner: false, positions: [], differentiators: ["34,080 votes (25.8%); interim appointee"], supporters: [], opponents: [] },
        { name: "Jacque Patterson", party: "I", winner: false, positions: [], differentiators: ["23,487 votes (17.8%)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "primary-attorney-general", date: "Jun 16, 2026", type: "past", scope: "Local · District · Primary",
      office: "Attorney General — Democratic Primary",
      note: "Schwalb beat Foxhall ANC commissioner J.P. Szymkowicz, who ran on 'crime, crime, crime' and juvenile detention (WJLA, June 2026). DCBOE-derived totals [Verify certified].",
      candidates: [
        { name: "Brian Schwalb (incumbent)", party: "D", winner: true, positions: [], differentiators: ["115,909 votes (90.6%)"], supporters: [], opponents: [] },
        { name: "J.P. Szymkowicz", party: "D", winner: false, positions: [], differentiators: ["11,381 votes (8.9%)"], supporters: [], opponents: [] }
      ]
    },
    {
      key: "primary-council-ward-1", date: "Jun 16, 2026", type: "past", scope: "Local · Ward 1 · Primary",
      office: "Council — Ward 1 Democratic Primary (OPEN SEAT)",
      note: "A five-way ranked-choice race for Brianne Nadeau's open seat, decided in round four. DCBOE-derived totals [Verify certified].",
      candidates: [
        { name: "Aparna Raj", party: "D", winner: true, positions: [], differentiators: ["Round 1: 9,203 (47.4%); round 4: 9,729 (52.3%)"], supporters: [], opponents: [] },
        { name: "Miguel Trindade Deramo", party: "D", winner: false, positions: [], differentiators: ["Round 4: 4,967 (26.7%)"], supporters: [], opponents: [] },
        { name: "Rashida Brown", party: "D", winner: false, positions: [], differentiators: ["Round 4: 3,906 (21.0%)"], supporters: [], opponents: [] },
        { name: "Jackie Reyes-Yanes", party: "D", winner: false, positions: [], differentiators: ["1,739 (9.0%); eliminated in round 3"], supporters: [], opponents: [] },
        { name: "Terry Lynch", party: "D", winner: false, positions: [], differentiators: ["1,045 (5.4%); eliminated in round 2"], supporters: [], opponents: [] }
      ]
    }
  ],
`;

// Look inside the STATE_RACES block only — the OFFICIAL table also has a "DC:" line.
const start = s.indexOf("const STATE_RACES = {\n");
const end = start === -1 ? -1 : s.indexOf("\n};", start);
if (start === -1 || end === -1) { console.error("✗ state.html: STATE_RACES block not found — NOT written"); process.exit(1); }
const block = s.slice(start, end);
if (block.includes("\n  DC: [")) { console.log("state.html: DC races already present"); process.exit(0); }
if (/\$\{|`/.test(DC)) { console.error("✗ DC data contains a backtick or ${ — it is interpolated into template literals"); process.exit(1); }
s = s.slice(0, end) + "\n" + DC.replace(/\n$/, "") + s.slice(end);
fs.writeFileSync(file, s.replace(/\n/g, eol));
console.log("state.html: DC races inserted");
