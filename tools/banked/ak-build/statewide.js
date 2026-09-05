// ----- (2) STATEWIDE — races every Alaskan votes in -----
// ⚠ ALASKA'S BALLOT IS SHORT BY DESIGN. The attorney general is APPOINTED, there is no elected
// secretary of state (the lieutenant governor does that job), and there is no elected treasurer,
// auditor or education superintendent. So the statewide ballot is: U.S. Senate, the Governor and
// Lieutenant Governor ticket, two citizen initiatives, and ONE judicial retention.
// ⚠ TOP-FOUR OPEN PRIMARY + RANKED-CHOICE GENERAL. One primary for everyone; the top four
// advance; November is counted by ranked choice. Election night publishes FIRST CHOICES ONLY —
// the RCV rounds follow the final count, so a close race is not settled on the night.
// ⚠ AS 15.25.100: if an advancing candidate withdraws 64 or more days before the general, the
// next finisher is elevated. That fired THREE times in 2026 — once in the Senate race and, in
// the U.S. House race, four times over, putting the EIGHTH-place finisher on the ballot.
const STATEWIDE = [
  // ─────────────────────────── UPCOMING ───────────────────────────
  { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · Statewide", office: "U.S. Senator from Alaska (Class 2)",
    note: "A TOP-FOUR FIELD WITH TWO DAN SULLIVANS ON IT — AND A FOURTH CANDIDATE WHO FINISHED FIFTH. ✅ Mary Peltola led the certified Aug 18 primary with 49.54% to two-term Sen. Dan Sullivan's 41.40%. ✅ Fourth-place Democrat David Leslie withdrew on Sept 1, the deadline; under AS 15.25.100 the fifth-place finisher, Republican Gerald Heikes, took the slot. ⚠ Daniel J. Sullivan Jr. of Petersburg shares the incumbent's name and party label; the Alaska Supreme Court ordered him onto the ballot on June 29, and Republicans call him a spoiler — he denies it. ⚠ Election night reports FIRST CHOICES ONLY. The ranked-choice rounds follow the final count, so the winner may not be known until about Nov 18. ✅ RCV governs this election whatever happens to Ballot Measure 2, which is on the same ballot.",
    candidates: [
      { name: "Mary Peltola", party: "D", winner: false,
        positions: [
          "Cut the cost of energy, freight, childcare and housing",
          "Back ANWR and NPR-A oil and gas, with fishermen at the table",
          "Term limits, a congressional stock-trading ban, overturn Citizens United"],
        differentiators: [
          "Held this state's U.S. House seat from the 2022 special until 2025 — the first Alaska Native ever elected to Congress — and lost it to Begich in 2024",
          "Raised $6.9M in the second quarter of 2026 and held about $6M on June 30, outraising Sullivan's own committee",
          "Endorsed by the Alaska AFL-CIO and the American Federation of Government Employees"],
        supporters: [
          "Her 'fish, family and freedom' record shows she breaks with national Democrats when Alaska's interests diverge",
          "She pushed Willow through and wrote an ANWR bill, so resource development and fisheries protection are not opposites for her",
          "Record Alaska fundraising and organized labor behind her point to real statewide reach"],
        opponents: [
          "She co-sponsored the Alaska's Right to Produce Act and then urged House Democrats to vote it down, which critics read as having it both ways",
          "Sullivan's campaign argues that once in Washington she votes with Democratic leadership",
          "She already lost statewide in 2024, so the 2022 results may not repeat [Verify — structural argument]"] },
      { name: "Dan Sullivan (incumbent)", party: "R", winner: false,
        positions: [
          "Unleash Alaska energy — ANWR, Willow, Alaska LNG, the Ambler Road",
          "Extend the tax cuts and back the administration's agenda",
          "More military, Coast Guard and icebreaker presence in Alaska"],
        differentiators: [
          "Two-term senator and retired Marine colonel; chairs the Armed Services readiness and Commerce Coast Guard subcommittees",
          "Raised about $2M in the second quarter of 2026 and held over $8M on June 30 — a large cash edge even while being outraised",
          "President Trump said on Sept 2 that he will campaign for him in Alaska in the closing 30 days"],
        supporters: [
          "His subcommittee gavels turn directly into Alaska military construction, icebreakers and base investment",
          "He delivered the permitting and leasing decisions the resource economy runs on",
          "Cash on hand and a promised presidential visit are real closing-stretch advantages"],
        opponents: [
          "He voted for the reconciliation law critics say cut Medicaid and squeezed Alaska hospitals and clinics; he calls that fearmongering",
          "A sitting senator finishing second in his own primary's first-choice count is a warning sign [Verify — structural argument]",
          "Critics say he has traded independent Alaska judgment for loyalty to the administration"] },
      { name: "Daniel J. Sullivan Jr.", party: "R", winner: false,
        positions: [
          "Affordable housing, better health-care access, a lower cost of living",
          "Use tariffs strategically rather than broadly — the current ones raised prices",
          "Keep ranked-choice voting and the open primary"],
        differentiators: [
          "A Petersburg resident who spent about 15 years with the U.S. Forest Service ⚠ some national outlets instead describe him as a retired schoolteacher [Verify — the sources conflict and both may be true in sequence]",
          "Was an Alaskan Independence Party member and joined the Republicans after that party dissolved",
          "The Alaska Supreme Court ordered him onto the ballot on June 29, 2026, holding the Division of Elections could not add a 'good faith' eligibility test the constitution does not contain"],
        supporters: [
          "A court twice held he meets every lawful qualification, and keeping him off would have let officials invent eligibility rules",
          "He gives Republicans dissatisfied with the incumbent an alternative without crossing party lines",
          "He opposed the federal cuts that cost Alaska fisheries science and staffing"],
        opponents: [
          "The incumbent and Republican groups say a near-identical name and the same party label are there to confuse voters",
          "Republicans call him a spoiler and a reported inquiry examined possible coordination with Peltola, which both deny [Verify — reported in a summary source; no named Alaska outlet confirmed the detail]",
          "He drew under 3% and has negligible campaign infrastructure"] },
      { name: "Gerald L. Heikes", party: "R", winner: false,
        positions: [
          "Strongly opposes abortion, and was promoted as being to the incumbent's right on it",
          "[Verify] No campaign website or platform statement could be located",
          "[Verify] No further published positions could be located"],
        differentiators: [
          "A Palmer Republican and repeat candidate who also ran for Alaska's at-large U.S. House seat in 2020 and 2024",
          "Finished FIFTH, 109 votes behind David Leslie, and reached the ballot only when Leslie withdrew on Sept 1 under AS 15.25.100",
          "A super PAC, Right for Alaska, spent over $1M boosting him; a disclosed funder is William Harris of Lexington, Massachusetts, a prolific donor to Democrats who support abortion rights"],
        supporters: [
          "Anti-abortion conservatives get a candidate to the incumbent's right on the ballot",
          "Ranked-choice voting lets a voter rank him first without wasting the vote, because it transfers",
          "No organized supporter case for his candidacy could be located [Verify — an absence of located records]"],
        opponents: [
          "The money that elevated him came from a super PAC whose funding does not match its stated conservative purpose",
          "Repeated unsuccessful candidacies and no evident campaign organization [Verify — structural argument]",
          "He is on the ballot by operation of a withdrawal rule rather than by finishing in the top four"] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Governor of Alaska (OPEN SEAT)",
    note: "OPEN SEAT, AND THE NOVEMBER BALLOT WAS NOT SETTLED UNTIL THE LAST DAY. ⚠ Mike Dunleavy is term-limited. Jonathan Kreiss-Tomkins led the Aug 18 top-four primary with 22.5%; runner-up Tom Begich (20.8%) — a former state Senate minority leader, and the uncle of Republican U.S. Rep. Nick Begich III — WITHDREW on Aug 28 and endorsed him, leaving one Democrat against three Republicans under ranked-choice voting. ⚠ Former attorney general Treg Taylor, fifth at 7.3%, was DENIED CERTIFICATION after the Alaska Public Offices Commission voted 4-1 that his financial disclosure did not substantially comply; his running mate Candi English moved up to the governor's line with Taylor's wife Jodi Taylor as hers — and Jodi Taylor's disclosure carries the same defect. ✅ Sabato's Crystal Ball moved the race to Toss-up in early September. ⚠ Governor and Lieutenant Governor are nominated separately but run as ONE TICKET in November — the Division of Elections prints them jointly.",
    candidates: [
      { name: "Jonathan Kreiss-Tomkins / Zac Johnson", party: "D", winner: false,
        positions: [
          "Fully fund schools and forward-fund education by constitutional amendment",
          "A moratorium on new data centers until Alaska regulates AI",
          "Make every oil and gas producer pay the state corporate income tax"],
        differentiators: [
          "Ten years in the Alaska House for Sitka and southeast Alaska; chaired House State Affairs for six of them; first elected at 23 by 32 votes",
          "The field's top fundraiser at $1.8M in the mid-July APOC report — but over 75% of it from outside Alaska, including $372,000 from six Anthropic employees ⚠ reported as over $2M by late August [Verify — no as-of date given]",
          "The Division of Elections prints this ticket as “Registered Democrat / Nonpartisan” — running mate Zac Johnson, an Anchorage Assembly member, Marine infantry veteran and former state pilot, is registered Nonpartisan"],
        supporters: [
          "Ten years winning a district Trump carried, with crossover Republican support, is evidence he can win statewide",
          "He wrote a bipartisan elections bill with Republican Mike Shower and chaired a cross-ideological fiscal working group, so he can govern with a Republican-leaning legislature",
          "One Democrat against three Republicans is a real structural edge under ranked-choice voting"],
        opponents: [
          "His money is overwhelmingly from Outside — the largest single in-state gift was $7,000 — which raises the question of who he answers to",
          "Taking large sums from AI-company employees while proposing to regulate AI is a conflict, critics say",
          "He has never run a large organization, and the governor oversees a workforce of roughly 15,000"] },
      { name: "Bernadette Wilson / Mike Shower", party: "R", winner: false,
        positions: [
          "Pay the full statutory Permanent Fund Dividend — follow the formula in law",
          "School choice through education savings accounts and backpack funding",
          "No new taxes; zero-based budgeting and a spending cap instead of new revenue"],
        differentiators: [
          "Has never held elected office; owns Denali Disposal, an Anchorage garbage-hauling company",
          "About $910,000 raised through the pre-primary APOC report — the most individual donors in the field, but only third-most with Alaska addresses, and roughly 60% of the dollars from outside the state",
          "Endorsed by U.S. Rep. Nick Begich III and U.S. Rep. Byron Donalds ⚠ also reported as endorsed by Sen. Marsha Blackburn [Verify — sourced only to a partisan-leaning outlet]. Running mate: Mike Shower, a former state senator and Senate minority leader who resigned in Nov 2025 to campaign full time"],
        supporters: [
          "She was the top Republican vote-getter on Aug 18 and has the clearest claim to consolidate the party's vote",
          "An owner-operator who has never worked for government speaks to voters who think the state has stagnated",
          "National conservative validators suggest she can compete on money and message statewide"],
        opponents: [
          "Sons of former Gov. Wally Hickel, her great-uncle, publicly objected that her use of his legacy misrepresents his politics",
          "A fuel supplier won a default judgment against her business after she did not respond, and the state garnished her dividends for two years",
          "She took 10% in the primary and has no governing record against a budget above $12 billion [Verify — structural argument]"] },
      { name: "Dave Bronson / Josh Church", party: "R", winner: false,
        positions: [
          "Chase higher Permanent Fund investment returns to pay a full statutory dividend",
          "Build Alaska LNG and expand Cook Inlet drilling, importing LNG in the meantime",
          "Restrict industrial trawl bycatch and manage fisheries for Alaskans"],
        differentiators: [
          "Mayor of Anchorage from 2021 to 2024, and lost re-election with nearly 48%",
          "Secured roughly $200M for the Don Young Port of Alaska and handed project management to an outside engineering firm",
          "About $350,000 raised through the pre-primary report — the smallest war chest of the four. Running mate: Josh Church, a Fairbanks financial adviser who has not held elected office"],
        supporters: [
          "The only candidate who has actually run a large government, and in a genuinely hostile political environment",
          "He produced a concrete result at the Port after years of drift",
          "He refused mask and vaccine mandates during COVID, which is a credential with the Republican base"],
        opponents: [
          "His health director fabricated much of a résumé that his own HR never verified — critics call that a management failure",
          "His homeless navigation center collapsed mid-construction during a fight with the Assembly; he blames the Assembly and critics blame him",
          "Fellow Republicans asked him to withdraw to avoid splitting the party's vote and he refused"] },
      { name: "Candi English / Jodi Taylor", party: "R", winner: false,
        positions: [
          "Pro-resource-development — keep Alaska open for business [Verify — campaign framing; no standalone platform document located]",
          "Alaska-funded campaigns rather than Outside money; she cites 94% in-state contributions [Verify — the candidate's own claim]",
          "[Verify] She has no gubernatorial platform of her own — she campaigned as Treg Taylor's running mate and inherited the ticket's conservative posture"],
        differentiators: [
          "Founder and owner of Northern Solutions LLC, an Anchorage and Deadhorse machine shop, after roughly 20 years on the North Slope with ARCO Alaska",
          "The Taylor-English ticket raised about $1.6M through the pre-primary report, including over $600,000 Taylor self-funded and over $120,000 from English",
          "⚠ Neither she nor running mate Jodi Taylor has held elected office, and Jodi Taylor's own disclosure carries the same defect that disqualified Treg Taylor — she has 30 days to amend or risk disqualification"],
        supporters: [
          "A builder and operator who created one of Alaska's larger machine shops brings private-sector competence the state government lacks",
          "Her ticket's money came overwhelmingly from Alaskans, in contrast with the Democratic front-runner's",
          "She keeps a ballot line for the roughly 7% of primary voters who backed the Taylor ticket, rather than letting a disqualification erase them [Verify — structural argument]"],
        opponents: [
          "Critics including a longtime Alaska columnist call her a placeholder who will move votes to Wilson or Bronson rather than campaign",
          "She and her husband gave $100,000 together, above the $5,000 pre-election contribution limit, according to that reporting",
          "Running the disqualified candidate's wife looks to critics like circumventing an enforcement action, and a legislator has asked the state to prosecute over the disclosure"] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "Ballot Measure · Statewide", office: "Ballot Measures — Alaska (2 measures)",
    note: "TWO MEASURES ARE ON THE NOVEMBER BALLOT, AND MEASURE 2 WOULD UNDO THE VERY SYSTEM THIS ELECTION IS BEING RUN UNDER. ⚠ A THIRD, Measure 1 on campaign contribution limits, is ALREADY DECIDED — it was on the AUGUST PRIMARY ballot and passed with about 71% [Verify — certified totals not retrieved]. ✅ On Aug 27, 2026 the Alaska Supreme Court called the state's ballot summary for Measure 2 'true and impartial' but ordered one addition, that Governor and Lieutenant Governor would run separately, before the Sept 2 printing deadline. ⚠ WE DO NOT QUOTE THE BALLOT TITLES HERE: the Division's own title document is a scanned image with no readable text and has been superseded by that court-ordered revision, and the General Election Ballot Measure Pamphlet is not yet posted. The plain-language descriptions below are ours, not the state's wording.",
    candidates: [
      { name: "Ballot Measure 2 — repeal the open primary and ranked-choice voting", party: "I", winner: false,
        positions: [
          "A YES vote repeals the top-four open primary and returns to party primaries, repeals ranked-choice general elections so a plurality wins, repeals the 2020 campaign-disclosure law, and splits the Governor and Lieutenant Governor back into separately elected offices",
          "A NO vote keeps all of it: the top-four primary, the ranked-choice general, the 2020 disclosure rules and the joint ticket"],
        differentiators: [
          "A citizen initiative, sponsor code 24ESEG. Its sponsors include Bernadette Wilson — who is also on this ballot as a candidate for governor — along with Judy Eledge and Ken McCarty",
          "⚠ A NEARLY IDENTICAL REPEAL FAILED IN 2024 BY 743 VOTES — 160,973 no to 160,230 yes, confirmed by the state recount completed Dec 11, 2024",
          "⚠ Because it rewrites the governor's-race statutes, it would also undo the new Measure 1 contribution limits as they apply to candidates for Governor and Lieutenant Governor",
          "⚠ It does NOT affect this election. The Aug 18 primary was already run top-four, and the November count is ranked-choice regardless of the result [Verify — the measure's own effective date could not be confirmed from a primary source]"],
        supporters: [
          "Repeal Now, the yes campaign, argues party primaries and a simple plurality are easier to understand and harder to manipulate than ranked ballots",
          "Backers say the 2020 system was sold to voters and has not delivered the moderation it promised",
          "⚠ The yes side is heavily outspent — roughly $1.1M against the no campaign's $5.75M — but its money is concentrated: a Wisconsin super PAC gave the bulk of it after receiving $1.5M from Elon Musk [Verify — figures are journalist-reported from mixed filing dates, not read from a single APOC report]"],
        opponents: [
          "No on 2 argues the current system produced the state's most competitive elections in years and lets voters rank a sincere first choice without wasting a vote",
          "Opponents note the repeal would also delete the 'true source' disclosure law, which is about dark money rather than about ranked ballots",
          "⚠ The no campaign has raised roughly $5.75M, most of it from Unite America and a Washington nonprofit — so both sides are largely funded from outside Alaska [Verify — as-of dates are mixed]"] },
      { name: "Ballot Measure 3 — citizen-only voting language", party: "I", winner: false,
        positions: [
          "A YES vote rewrites AS 15.05.010 so that ONLY a United States citizen may vote in any Alaska election",
          "A NO vote leaves the statute as it reads today: a person may vote who is a citizen of the United States"],
        differentiators: [
          "A citizen initiative, sponsor code 25USCV, qualified on Mar 17, 2026 with 34,944 verified signatures against a 34,098 requirement, spread across all 40 state House districts",
          "Sponsored by Alaskans for Citizen Voting, described as an offshoot of the national Americans for Citizen Voting",
          "⚠ Noncitizen voting is ALREADY unlawful in Alaska elections; the measure changes the wording from a permissive statement to an exclusive one [Verify — the practical legal effect of the change has not been authoritatively analyzed in a source we could locate]"],
        supporters: [
          "Backers say making the rule exclusive rather than permissive closes an ambiguity before any local government can act on it",
          "Supporters point to the signature threshold being cleared in all 40 house districts as evidence of broad reach",
          "[Verify] No detailed Alaska-specific campaign case for the measure could be located beyond the sponsor's framing"],
        opponents: [
          "Critics say it addresses a problem that does not exist, since noncitizens already cannot vote in Alaska",
          "Opponents argue such measures invite added documentary-proof requirements that burden eligible voters [Verify — a general argument against this class of measure; no Alaska-specific opposition campaign was located]",
          "[Verify] No organized Alaska opposition committee could be located"] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "Judicial · Statewide · Retention", office: "Judicial Retention — Alaska (1 statewide jurist)",
    note: "ONLY ONE JUDGE APPEARS ON EVERY ALASKAN'S BALLOT — Supreme Court Justice Jude Pate. ✅ NO Court of Appeals judge stands for retention in 2026, in the Alaska Judicial Council's own words. ✅ The Council recommends YES on Pate, unanimously, in a release updated Sept 4, 2026. ⚠ TWENTY OTHER JUDGES ARE ON 2026 RETENTION BALLOTS BUT ONLY WITHIN THEIR OWN JUDICIAL DISTRICT — three in the First, one in the Second, twelve in the Third and four in the Fourth — so they are NOT carded here as statewide. ⚠ Two of those district judges carry a recommendation of NO: Kenai Superior Judge Kelly Lawson, 6-0, and Kenai District Judge Martin Fallon, 5-0 with one abstention. A third, Juneau Superior Judge Marianna Carpeneti, received NO RECOMMENDATION after the Council split three against, two for, with two abstentions.",
    candidates: [
      { name: "Justice Jude Pate — Alaska Supreme Court", party: "I", winner: false,
        positions: [
          "A YES vote retains him on the Alaska Supreme Court",
          "A NO vote removes him and the seat is refilled through the Judicial Council's nomination process"],
        differentiators: [
          "Appointed to the Supreme Court on Jan 20, 2023 ⚠ by Gov. Mike Dunleavy [Verify — inferred from the appointment date; the Council's own documents do not name the appointing governor]",
          "The Alaska Judicial Council recommends retention, and its vote was UNANIMOUS",
          "He previously stood for retention in 2022 in an earlier Superior Court position"],
        supporters: [
          "The Judicial Council's evaluation — which surveys attorneys, jurors, court staff, peace officers and social workers — returned a unanimous recommendation to retain",
          "Retention elections are designed to remove judges for demonstrated unfitness, and no such finding was made here",
          "[Verify] No organized campaign either for or against his retention could be located"],
        opponents: [
          "Alaska's retention ballot is the only regular public check on an appointed judiciary, and some voters use it to register disagreement with the court's direction [Verify — a general argument; no Alaska campaign against this justice was located]",
          "Critics of merit selection argue the Judicial Council that evaluates a judge also nominated them, which they say makes the recommendation less independent [Verify — a structural criticism of the system, not a finding about this justice]",
          "[Verify] No organized opposition to his retention could be located"] }
    ] },
  // ─────────────────────────── PAST ───────────────────────────
  // Past races keep EMPTY voices — the site's own convention (nc.html). Voices are for races
  // a voter can still act on.
  { date: "Aug 18, 2026", type: "past", scope: "Federal · Statewide · Primary", office: "U.S. Senate — Top-Four Open Primary",
    note: "ALASKA RUNS ONE PRIMARY FOR EVERYONE AND THE TOP FOUR ADVANCE — so nobody here was 'nominated' and no card carries a winner's badge. ✅ Results are OFFICIAL: the Division of Elections' Election Summary Report is stamped OFFICIAL RESULTS and dated Aug 31, 2026. ⚠ THE FOURTH-PLACE FINISHER IS NOT ON THE NOVEMBER BALLOT. Democrat David Leslie withdrew on Sept 1 — the last day it was possible — saying he had faced 'much pressure' from party leadership and other institutions, and under AS 15.25.100 the Director elevated fifth-place Republican Gerald Heikes in his place.",
    candidates: [
      { name: "Mary Peltola", party: "D", winner: false,
        positions: ["82,244 votes — 49.54%"],
        differentiators: ["Led the field; advanced to the Nov 3 ranked-choice general"],
        supporters: [], opponents: [] },
      { name: "Dan Sullivan (incumbent)", party: "R", winner: false,
        positions: ["68,726 votes — 41.40%"],
        differentiators: ["Second; advanced. ⚠ In the primary results PDF the party column for the OTHER Sullivan is blank; on the general-election candidate list he is listed as 'Registered Republican'"],
        supporters: [], opponents: [] },
      { name: "Daniel J. Sullivan Jr.", party: "R", winner: false,
        positions: ["4,107 votes — 2.47%"],
        differentiators: ["Third; advanced. On the ballot by order of the Alaska Supreme Court, June 29, 2026"],
        supporters: [], opponents: [] },
      { name: "David B. Leslie (WITHDREW Sept 1, 2026)", party: "D", winner: false,
        positions: ["Fourth — about 1,850 votes [Verify — derived from the reported 109-vote margin over Heikes, not read off the certified report]"],
        differentiators: ["Advanced, then withdrew on the Sept 1 deadline; his slot passed to the fifth-place finisher"],
        supporters: [], opponents: [] },
      { name: "Gerald L. Heikes", party: "R", winner: false,
        positions: ["1,741 votes — 1.05%"],
        differentiators: ["Fifth — 109 votes short of advancing on the night, and on the November ballot anyway once Leslie withdrew"],
        supporters: [], opponents: [] }
    ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Primary", office: "Governor — Top-Four Open Primary",
    note: "THE PRIMARY DID NOT SETTLE THIS BALLOT — TWO OF THE TOP FIVE ARE NOT THE PEOPLE WHOSE NAMES VOTERS SEE IN NOVEMBER. ⚠ Second-place Tom Begich — a former state Senate minority leader, and the UNCLE of Republican U.S. Rep. Nick Begich III — withdrew on Aug 28 and endorsed Kreiss-Tomkins. ⚠ Fifth-place Treg Taylor was denied certification after the Alaska Public Offices Commission voted 4-1 that his financial disclosure did not substantially comply, and his running mate Candi English took the governor's line instead. ⚠ Percentages below are as reported; raw vote counts for this contest are NOT carded because no certified per-candidate count could be read [Verify]. Turnout was roughly 167,000, about 27%.",
    candidates: [
      { name: "Jonathan Kreiss-Tomkins / Zac Johnson", party: "D", winner: false,
        positions: ["22.5% — led the field and advanced"],
        differentiators: ["The only Democrat on the November ballot after the runner-up withdrew and endorsed him"],
        supporters: [], opponents: [] },
      { name: "Tom Begich / Julia Hnilicka (WITHDREW Aug 28, 2026)", party: "D", winner: false,
        positions: ["20.8% — second, about 26,384 votes [Verify — the count is as reported; the percentage is the firmer figure]"],
        differentiators: ["⚠ NOT U.S. Rep. Nick Begich III, who is his NEPHEW and a Republican seeking re-election to Alaska's U.S. House seat on this same ballot. Tom Begich is a former Anchorage state senator and Senate minority leader, and a brother of former U.S. Sen. Mark Begich. He withdrew on Aug 28 and endorsed Kreiss-Tomkins"],
        supporters: [], opponents: [] },
      { name: "Bernadette Wilson / Mike Shower", party: "R", winner: false,
        positions: ["10.0% — third and the leading Republican"],
        differentiators: ["Advanced to the Nov 3 ranked-choice general"],
        supporters: [], opponents: [] },
      { name: "Dave Bronson / Josh Church", party: "R", winner: false,
        positions: ["8.1% — fourth"],
        differentiators: ["Advanced; declined Republican requests to withdraw and consolidate the party's vote"],
        supporters: [], opponents: [] },
      { name: "Treg Taylor / Candi English (TAYLOR DENIED CERTIFICATION, Aug 2026)", party: "R", winner: false,
        positions: ["7.3% — fifth"],
        differentiators: ["The former attorney general was kept off the November ballot after APOC voted 4-1 that his financial disclosure did not substantially comply; his running mate Candi English moved up to the governor's line"],
        supporters: [], opponents: [] }
    ] },
  { date: "Nov 3, 2020", type: "past", scope: "Federal · Statewide", office: "U.S. Senate — 2020 General",
    note: "THE LAST TIME THIS SEAT WAS ON THE BALLOT, AND THE LAST ONE HELD UNDER THE OLD RULES — 2020 was a partisan primary and a plurality general; ranked-choice voting and the top-four primary took effect afterwards. ✅ Certified by the Division of Elections on Nov 30, 2020. Turnout was 361,291 of 595,647 registered voters, 60.66%.",
    candidates: [
      { name: "Dan Sullivan (incumbent)", party: "R", winner: true,
        positions: ["191,112 votes — 53.90%"],
        differentiators: ["Won a second term by 12.7 points"],
        supporters: [], opponents: [] },
      { name: "Al Gross", party: "D", winner: false,
        positions: ["146,068 votes — 41.19%"],
        differentiators: ["Ran as an independent but held the Democratic nomination, so the state's own return labels him DEM"],
        supporters: [], opponents: [] },
      { name: "John Wayne Howe", party: "I", winner: false,
        positions: ["16,806 votes — 4.74%"],
        differentiators: ["Alaskan Independence Party — carded as independent because the site's party tags do not include the AIP"],
        supporters: [], opponents: [] }
    ] },
];
