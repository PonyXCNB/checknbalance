// Florida STATEWIDE 2026 ballot.
// ✅ CERTIFICATION: county canvassing boards filed official returns with the Department of State by
// noon Wed Aug 26, 2026; the ELECTIONS CANVASSING COMMISSION (Gov. DeSantis, AG Uthmeier,
// Agriculture Commissioner Simpson) met by phone and certified the federal, state and multicounty
// results on Thu Aug 27, 2026. Florida Election Watch now labels the Aug 18 file "Official Election
// Results." Every figure below is the state's own official number.
//
// VERIFIED NEGATIVES, all from the state's own "Offices Up for Election and Retention in 2026":
//   - RICK SCOTT'S SEAT IS NOT UP. The list reads "U.S. Senate (one of two seats)." Scott was
//     re-elected in 2024 and serves to Jan 3, 2031. The 2026 seat is the Rubio SPECIAL.
//   - NO CITIZEN INITIATIVE QUALIFIED. All 22 petition campaigns failed the 891,523-signature
//     threshold, so the reported recreational-marijuana and abortion measures are NOT on this ballot.
//   - EXACTLY ONE Supreme Court justice faces retention (Muñiz). The 22 District Court of Appeal
//     retentions are DISTRICT ballots, not statewide, and are deliberately not carded.
//   - NO minor-party, NPA or write-in candidate qualified for Attorney General or Chief Financial
//     Officer. Agriculture has exactly one write-in, who will not be printed on the ballot.
//
// ⚠ DELIBERATELY NOT CARDED: Desmond Meade and Jason Pizzo. Both were reported as NPA candidates for
// Governor, but neither appeared in two separate pulls of the official Division of Elections
// general-election listing. Publishing a candidate the state's own list does not carry would be
// worse than omitting them. Re-check the DOE list before adding either.
// ⚠ Ballot-measure cards follow the az.html convention: ONE race, each measure as a card.
const STATEWIDE = [
  // ─────────────────────────── UPCOMING ───────────────────────────
  { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · Statewide", office: "U.S. Senator from Florida (SPECIAL ELECTION)",
    note: "A SPECIAL ELECTION FOR THE FINAL TWO YEARS OF MARCO RUBIO'S TERM, WHICH ENDS JAN 3, 2029 — not a full six-year seat. Rubio resigned in Jan 2025 to become Secretary of State; Gov. DeSantis appointed Ashley Moody, who has never faced voters for this seat. ✅ Aug 18 primary results were certified by Florida's Elections Canvassing Commission on Aug 27, 2026. ⚠ Florida's other Senate seat is NOT on the ballot — Rick Scott was re-elected in 2024 and serves through Jan 2031. ⚠ Every public poll of this matchup predates the Aug 18 primary, so none is carded here.",
    candidates: [
      { name: "Ashley Moody (appointed incumbent)", party: "R", winner: false,
        positions: [
          "⚠ America First policies promoting law and order, economic prosperity and American sovereignty [Verify — third-person campaign copy; her site has no issues page]",
          "Enhance public safety, strengthen law enforcement and crack down on violent crime [Verify — a campaign bio page, not a first-person statement]",
          "Codify Trump immigration priorities; sponsored the Expedited Removal of Criminal Aliens Act"
        ],
        differentiators: [
          "Appointed U.S. Senator in Jan 2025; Florida Attorney General 2019–2025",
          "Won the Republican primary with 79.56% — 1,320,780 votes",
          "$8,491,175 cash on hand as of July 29, 2026",
          "Endorsed by President Trump and the Florida Police Chiefs Association"
        ],
        supporters: [
          "Points to tax relief she backed — no tax on tips, on overtime, or on Social Security",
          "Won the bipartisan 2026 Democracy Award for Best Constituent Service",
          "Law-enforcement groups describe a long record of reliable partnership"
        ],
        opponents: [
          "Democrats attack her healthcare votes, saying she backed Medicaid cuts and ending ACA subsidies",
          "⚠ Nixon has demanded her resignation over the leaked Aug 27, 2026 Hope Florida grand jury report; PolitiFact rated a sharper version of that claim Half True, finding she approved the Centene settlement but did NOT personally move money to a political committee",
          "Critics note she was appointed rather than elected and has run a low-exposure campaign [Verify — structural argument]"
        ] },
      { name: "Angie Nixon", party: "D", winner: false,
        positions: [
          "Medicare for All — she argues the richest country on earth should guarantee healthcare",
          "Housing is a human right, not a speculative asset",
          "Make billionaires and corporations pay their fair share"
        ],
        differentiators: [
          "Florida state Representative, House District 13 (Jacksonville)",
          "Won the Democratic primary with 56.06% — 705,835 votes — over Alex Vindman's 43.94%",
          "$264,978 cash on hand as of July 29, 2026 — roughly a thirty-second of Moody's",
          "Endorsed by Sen. Bernie Sanders on Aug 20, 2026"
        ],
        supporters: [
          "Her affordability message — groceries, childcare, property insurance that doubled in four years — targets cost-squeezed voters",
          "Beat a far better-funded opponent by twelve points, which supporters cite as proof organising can beat money",
          "Analysts credit her ground game and her read of the Democratic primary electorate"
        ],
        opponents: [
          "⚠ Moody and the RNC argue her Democratic Socialists of America membership puts her far outside Florida's mainstream; PolitiFact concluded that specific attack misleads by conflating the DSA platform with Nixon's own stated positions",
          "Some Florida Democrats fear the socialist label is a liability with Cuban- and Venezuelan-American voters",
          "Pro-Israel critics object to her ceasefire resolution and her call to cut U.S. aid to Israel"
        ] },
      { name: "Neil J. Gillespie", party: "I", winner: false,
        positions: [
          "⚠ No published platform could be located — no campaign website was found [Verify]",
          "",
          ""
        ],
        differentiators: [
          "Qualified NPA candidate on the official Division of Elections general-election listing",
          "The only non-major-party candidate in this race — no Libertarian and no write-in qualified",
          "No FEC filing activity could be located [Verify]"
        ],
        supporters: [
          "Gives voters dissatisfied with both nominees a ballot option in a race every major forecaster rates Solid or Safe Republican [Verify — structural argument]"
        ],
        opponents: [
          "No detectable campaign organisation, fundraising or public events could be located [Verify — an absence of located records]",
          "NPA candidates in modern Florida statewide races have not exceeded low single digits [Verify — structural argument]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Governor and Lieutenant Governor of Florida",
    note: "OPEN SEAT — RON DeSANTIS IS TERM-LIMITED. Governor and Lieutenant Governor run as a single joint ticket; under Fla. Stat. § 99.063 the nominee must designate a running mate by 5 p.m. on the ninth day after the primary, which is why Byron Donalds named state Sen. Bryan Avila on Aug 25. ✅ Primary results certified Aug 27, 2026. ⚠ This is not a two-way ballot — a Libertarian ticket plus several no-party and write-in tickets also qualified. ⚠ Two fetches of the same Division of Elections page returned different ticket totals (10 and 17), so the exact number of qualified tickets is NOT stated here; the named candidates below are reliable [Verify].",
    candidates: [
      { name: "Byron Donalds — with Bryan Avila", party: "R", winner: false,
        positions: [
          "Reform property taxes with the goal of eliminating homestead property taxes entirely; backs Amendment 3 as a first step",
          "Regulatory reforms he says can cut property insurance costs 20–25%, including changing the Hurricane Catastrophe Fund cash buildup factor",
          "Lower taxes, less regulation, and schools that put students first"
        ],
        differentiators: [
          "U.S. Representative for FL-19 since 2021, giving up that seat to run",
          "Won the Republican primary with 47.79% — 811,131 votes — over Lt. Gov. Jay Collins' 25.16%",
          "His affiliated PAC has raised nearly $100M since Feb 2025, roughly half of it spent [Verify — sourced to WLRN reporting, not a single filing]",
          "⚠ Endorsed by President Trump and Sen. Rick Scott; DeSantis WITHHELD his endorsement in the primary"
        ],
        supporters: [
          "Trump's early backing and a ten-to-one money advantage cleared the field and give him a dominant general-election footing",
          "Supporters credit a concrete affordability agenda built on property-tax elimination and insurance deregulation",
          "Would be Florida's first Black governor, which allies argue broadens the Republican coalition"
        ],
        opponents: [
          "Jolly alleges he has been bought by special interests including data centres; roughly $5.8M in donations and spending benefiting him traces to AI investors and utilities",
          "He has published no independent analysis supporting his 20–25% insurance-savings claim, and no timeline",
          "He was among nearly 150 Republicans who voted to object to the 2020 election results"
        ] },
      { name: "David Jolly — with Gwen Graham", party: "D", winner: false,
        positions: [
          "A state catastrophic fund to remove disaster risk from the private insurance market and cut property and car insurance rates",
          "Dramatically increase investment in public schools",
          "A sweeping ethics package to protect taxpayers from what he calls legalised graft in Tallahassee"
        ],
        differentiators: [
          "⚠ A former REPUBLICAN U.S. Representative (FL-13) who registered as a Democrat in 2025; his running mate Gwen Graham is a former U.S. Representative and daughter of Gov./Sen. Bob Graham",
          "Won the Democratic primary with 60.95% — 762,160 votes — as a joint Jolly–Graham ticket",
          "$2.9M cash on hand in the campaign account plus $864,937 in his political committee [Verify — the as-of date was not stated in the reporting]",
          "Endorsed by the Florida AFL-CIO, the Florida Education Association and 60 current and former Democratic officials"
        ],
        supporters: [
          "Organised labour and the teachers' union argue his affordability platform — insurance, housing, wages — matches voters' top concern",
          "A Hart Research poll completed Aug 13, 2026 had him at 46% to Donalds' 45% [Verify — Hart Research is a Democratic firm, and the RealClearPolling average has Donalds +5]",
          "Allies say his crossover profile can win back suburban voters Democrats lost in the DeSantis era"
        ],
        opponents: [
          "The Republican Party of Florida calls him a political chameleon and Graham a nepo baby, arguing neither has consistent convictions",
          "Analysts compare him to Charlie Crist, another former Republican whom DeSantis beat badly in 2022",
          "He is being outraised by roughly ten to one, which limits statewide paid communication"
        ] },
      { name: "Scott Eckhard Jewett — with Nicole Skelly", party: "L", winner: false,
        positions: [
          "⚠ No detailed platform could be located — no campaign website was found [Verify]",
          "",
          ""
        ],
        differentiators: [
          "Libertarian Party of Florida nominee; qualified without primary opposition",
          "Running mate is Nicole Skelly",
          "No significant fundraising could be located [Verify]"
        ],
        supporters: [
          "Offers a third option in an open-seat race where both major nominees carry high negatives with independents [Verify — structural argument]"
        ],
        opponents: [
          "No measurable campaign presence, staff or advertising could be located [Verify — an absence of located records]",
          "Libertarian nominees have not cleared low single digits in recent Florida governor races [Verify — structural argument]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Attorney General of Florida",
    note: "NEITHER NOMINEE FACED A PRIMARY — both were unopposed, so this race was locked in at the June 12 qualifying deadline. James Uthmeier was appointed Attorney General in Feb 2025 after Ashley Moody moved to the U.S. Senate; he is seeking a first full term. ✅ Official Division of Elections records show no minor-party, NPA or write-in candidate qualified — a strict two-way race. ⚠ A grand jury report leaked Aug 27, 2026 found $10M from a Medicaid settlement was 'misappropriated' through the Hope Florida Foundation into political committees Uthmeier controlled. NO CHARGES HAVE BEEN FILED and he calls it a hoax.",
    candidates: [
      { name: "James Uthmeier (appointed incumbent)", party: "R", winner: false,
        positions: [
          "Keeping Florida safe, strong and free",
          "Prosecuting dangerous criminals and combatting illegal immigration",
          "Suing corporations he says jeopardise shareholder value by sexualising and indoctrinating children"
        ],
        differentiators: [
          "Attorney General since Feb 18, 2025, appointed by DeSantis; former DeSantis chief of staff",
          "Unopposed in the primary",
          "More than $9M across his campaign account and political committee as of late June 2026",
          "Endorsed by President Trump and the Florida Sheriffs Association"
        ],
        supporters: [
          "His office reports human-trafficking arrests and convictions each up more than 30% since he took office",
          "Consumer-protection actions include suing Roblox over child-safety claims and a Roku privacy resolution",
          "Club for Growth PAC and Gun Owners of America call his record proven and trustworthy for conservatives"
        ],
        opponents: [
          "⚠ A federal judge held him in civil contempt in June 2025 over a letter telling police a suspended immigration law was enforceable, writing that he offered implausible interpretations of his own words",
          "The leaked Hope Florida grand jury report ties committees he controlled to misappropriated settlement funds; Senate Democrats have called for his resignation",
          "CBS Miami's analysis pegged the Everglades detention facility at roughly $3,571 per detainee per day, about twenty-one times the national average"
        ] },
      { name: "José Javier Rodríguez", party: "D", winner: false,
        positions: [
          "Deliver real relief from skyrocketing insurance costs and electric bills",
          "Root out corruption and fraud in government and business alike",
          "Serve as a fair, independent advocate for all Floridians, not special interests"
        ],
        differentiators: [
          "Former Florida state senator and representative from Miami-Dade; former Assistant Secretary of Labor at the U.S. Department of Labor",
          "Unopposed in the primary",
          "About $215,000 cash on hand as of June 19, 2026 — roughly a forty-to-one disadvantage",
          "Endorsed by the Florida AFL-CIO and former Attorney General Bob Butterworth"
        ],
        supporters: [
          "Labour and former statewide officials argue his legislative and federal service make him unusually qualified for the office",
          "He frames the Attorney General as the people's lawyer, independent of the Governor rather than the executive's litigation arm",
          "Two 2026 public polls showed him narrowly ahead — Change Research 45–41 in May, MDW 43–40 in spring [Verify — horse-race polls, treat cautiously]"
        ],
        opponents: [
          "The Florida Republican Party calls him a failed politician and points to a bill it says would have gutted the death penalty",
          "The roughly forty-to-one cash gap sharply limits statewide advertising",
          "No Democrat has won a Florida Cabinet race since 2010 [Verify — structural argument]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Chief Financial Officer of Florida",
    note: "BLAISE INGOGLIA IS AN APPOINTED INCUMBENT SEEKING HIS FIRST ELECTION TO THE OFFICE — DeSantis named him CFO in July 2025 to replace Jimmy Patronis. ✅ Both nominees won contested primaries on Aug 18; results certified Aug 27, 2026. ✅ Official Division of Elections records show no minor-party, NPA or write-in candidate qualified. ⚠ The money gap is the defining fact: roughly $5.1M combined for Ingoglia against about $61,000 for Taddeo as of Aug 13, 2026.",
    candidates: [
      { name: "Blaise Ingoglia (appointed incumbent)", party: "R", winner: false,
        positions: [
          "Property-tax relief — he has said it would be political malfeasance not to put a substantial property-tax cut on the ballot [Verify — from launch coverage; his campaign site blocks automated retrieval]",
          "Hold local governments accountable through DOGE-style spending audits",
          "Push down property-insurance rates, launched with a $2M insurance-fraud crackdown"
        ],
        differentiators: [
          "Florida CFO and State Fire Marshal since July 2025; former state senator and Republican Party of Florida chair",
          "Won the Republican primary with 61.32% — 968,222 votes",
          "About $700,000 in the campaign account plus $4.4M across two political committees as of Aug 13, 2026",
          "Endorsed by the Florida Chamber of Commerce and 60 sheriffs"
        ],
        supporters: [
          "The Chamber credits him with Florida's lowest-in-the-nation debt per capita and homebuilding experience relevant to insurance fraud",
          "Supporters see his local-government audits as the first real outside scrutiny of city and county spending",
          "He has paired the audits with an insurance-accountability agenda aimed at rate relief"
        ],
        opponents: [
          "County officials say the audits lack context, omitting state-mandated spending; asked to substantiate an alleged $48M in wasteful county spending, he could not specify the source",
          "⚠ The audits have concentrated on Democratic-run governments, and critics including the Local Solutions Support Center call it consolidating power over local governments",
          "Taddeo argues he audits everyone but the state, citing the $1.2B Everglades detention facility with no-bid contracts and no audit"
        ] },
      { name: "Annette Taddeo", party: "D", winner: false,
        positions: [
          "Hold the big insurance companies accountable and lower costs for working families",
          "Audit politicians' spending and demand answers on behalf of taxpayers",
          "Floridians deserve to know how tax dollars are spent and who gets public contracts"
        ],
        differentiators: [
          "Former Florida state senator, District 40, 2017–2022; Miami small-business owner",
          "Won the Democratic primary with 65.64% — 796,723 votes",
          "Just under $30,000 in the campaign account plus about $31,000 in her political committee as of Aug 13, 2026",
          "Endorsed by Alex Sink, the last Democrat to hold the office, and the Florida AFL-CIO"
        ],
        supporters: [
          "Sink vouches for her independence — the central contrast with an appointee who answers to the Governor",
          "She argues affordability is the CFO's actual job, and proposes an insurance report card grading companies on claim response and payment delays",
          "Broad labour backing — AFL-CIO, Teamsters, SEIU, AFSCME, CWA — gives her a volunteer field operation she cannot buy"
        ],
        opponents: [
          "She entered days before the June 12 qualifying deadline and is outspent roughly seventy to one",
          "Critics point to prior statewide and federal losses, including a 2008 congressional run and a third-place Miami-Dade Commission finish",
          "Her background is small business and politics rather than insurance regulation or public finance, which is the explicit basis of the Chamber's case for Ingoglia"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Commissioner of Agriculture of Florida",
    note: "THE ONLY STATEWIDE RACE WITH A FULLY ELECTED REPUBLICAN INCUMBENT — Wilton Simpson won this office outright in 2022, unlike the appointed Attorney General, CFO and U.S. Senator. ✅ Both nominees won contested primaries on Aug 18; certified Aug 27, 2026. ⚠ The financial mismatch is extreme: about $26.8M across Simpson's accounts as of July 31, 2026 against roughly $1,300 for Mendoza Atkins, whose campaign is almost entirely a personal loan. ⚠ One write-in, Kyle 'KC' Gibson, qualified; Florida write-ins are not printed on the ballot.",
    candidates: [
      { name: "Wilton Simpson (incumbent)", party: "R", winner: false,
        positions: [
          "Lower taxes, limited government, personal freedom and quality of life",
          "First in the nation to outlaw lab-grown meat, which he frames as protecting Floridians from untested products",
          "Preserve farmland through the Rural and Family Lands Protection Program and the Florida Wildlife Corridor"
        ],
        differentiators: [
          "Commissioner of Agriculture since Jan 2023; former Florida Senate President; Pasco County egg farmer",
          "Won the Republican primary with 68.91% — 1,111,530 votes",
          "About $26.8M across his campaign account and four political committees as of July 31, 2026",
          "Endorsed by President Trump, Gov. DeSantis, and 61 of Florida's 67 sheriffs"
        ],
        supporters: [
          "Supporters say a working farmer with legislative credibility delivered the Right to Farm Act and the Florida Wildlife Corridor Act",
          "Cabinet-approved conservation easements added thousands of acres across nine counties, letting conservation and working agriculture coexist",
          "His department removed more than a million packages of illegal hemp products in about eighteen months"
        ],
        opponents: [
          "⚠ Integrity Florida says a $10M conservation easement to Siboney Ranch, followed shortly by a $100,000 donation to his committee, has the appearance of pay-to-play",
          "Sugar and utility money — $250,000 from Florida Crystals, $102,500 from U.S. Sugar, $250,000 from NextEra this cycle — draws conflict-of-interest criticism",
          "He championed a farm bill whose agricultural-disparagement provisions, stripped before floor passage, would have made it easier to sue environmentalists, scientists and journalists"
        ] },
      { name: "Joey Mendoza Atkins", party: "D", winner: false,
        positions: [
          "Implement a statewide moratorium on data centres",
          "Hold polluters directly responsible for cleanup and roll back corporate-sponsored anti-litigation laws",
          "Fight price gouging and suspend the state gas tax"
        ],
        differentiators: [
          "Miami trial attorney and former sports agent; former legal-aid attorney for migrant farmworkers",
          "Won the Democratic primary with 60.29% — 717,225 votes",
          "About $1,300 on hand; $1,685 raised plus an $8,480 personal loan",
          "Endorsed by the Florida Democratic Agricultural Caucus; no major statewide labour, environmental or newspaper endorsement could be located"
        ],
        supporters: [
          "He argues farmworker legal aid is the right kind of agriculture experience — that agriculture is about people, not only crops",
          "He reframes conservation around public benefit rather than acres preserved, a direct critique of easement-driven metrics",
          "He is the only candidate calling for a statewide data-centre moratorium, paired with rolling back litigation shields for large agricultural polluters"
        ],
        opponents: [
          "Essentially no campaign infrastructure — outspent by roughly twenty thousand to one",
          "No farming, ranching or agency-management background; his credential is legal advocacy",
          "He opposes the lab-grown-meat ban that is one of Simpson's signature accomplishments with growers, a hard sell in agricultural counties"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Florida Supreme Court — Merit Retention",
    note: "EXACTLY ONE FLORIDA SUPREME COURT JUSTICE IS ON THE 2026 RETENTION BALLOT — CHIEF JUSTICE CARLOS G. MUÑIZ. This is a nonpartisan yes/no vote, not a contest between candidates: a majority 'yes' grants a new six-year term, a majority 'no' creates a vacancy the Governor fills. ✅ The Division of Elections confirms only justices whose terms expire January 2027 appear. ⚠ Twenty-two District Court of Appeal judges also stand for retention, but those are DISTRICT ballots, not statewide, and are not carded here. ⚠ No Florida justice has ever been removed by a retention vote.",
    candidates: [
      { name: "Carlos G. Muñiz — Chief Justice (retain / do not retain)", party: "I", winner: false,
        positions: [
          "⚠ Merit-retention candidates do not campaign on a platform; Florida's judicial canons sharply limit what a sitting justice may say about issues",
          "",
          ""
        ],
        differentiators: [
          "Appointed to the Florida Supreme Court on Jan 22, 2019 by Gov. DeSantis; the 89th justice since statehood",
          "Chief Justice of Florida since July 1, 2022",
          "Last retained by voters in 2020, when 71% of Florida Bar poll respondents said he should be retained",
          "Qualified for merit retention alongside 22 District Court of Appeal judges"
        ],
        supporters: [
          "Supporters argue retention exists to protect judicial independence, and that judges should be removed for misconduct or incompetence, not for unpopular rulings",
          "The Florida Bar's most recent poll of attorneys on him produced a majority-retain result",
          "He was retained by voters once already and has served as Chief Justice through a full term with no disciplinary proceeding [Verify — an absence of located records, not a positive finding]"
        ],
        opponents: [
          "Critics point to his questioning at argument over whether 'natural person' in the Florida Constitution could include the unborn, warning that reading would support a total abortion ban",
          "Reform advocates argue retention votes have become meaningless because no Florida justice has ever lost one, effectively granting lifetime tenure",
          "Some voters object that he was appointed by the sitting Governor and has ruled favourably on that administration's priorities [Verify — a general criticism; no specific ruling tally was located]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Ballot Question", office: "Ballot Measures — Florida (3 amendments)",
    note: "EXACTLY THREE AMENDMENTS, AND ALL THREE ARE LEGISLATIVE REFERRALS — NO CITIZEN INITIATIVE QUALIFIED FOR FLORIDA'S 2026 BALLOT. All 22 petition campaigns failed the 891,523-signature threshold, so the widely reported recreational-marijuana and abortion measures are NOT on this ballot. ⚠ EACH AMENDMENT NEEDS 60% TO PASS, not a simple majority. ⚠ AMENDMENT 3'S BALLOT TITLE WAS REWRITTEN BY COURT ORDER: on Aug 3, 2026 Leon County Circuit Judge David Frank ruled the original title, 'Save Our Homes From Excessive Property Taxes,' was 'not fair or neutral' and read 'more akin to a political slogan.' DeSantis declined to appeal and AG Uthmeier filed revised language on Aug 14, 2026. Numbers, titles and sponsoring joint resolutions below are from the Division of Elections' own initiatives database.",
    candidates: [
      { name: "Amendment 1 — Budget Stabilization Fund", party: "I", winner: false,
        positions: [
          "A YES vote raises Florida's rainy-day fund cap from 10% to 25% of general revenue collections and requires the Legislature to transfer the lesser of $750 million or the amount needed to reach 25% each year unless certain conditions are met, while allowing withdrawals for critical state needs",
          "A NO vote leaves the existing 10% cap and the current transfer rules in place",
          ""
        ],
        differentiators: [
          "A constitutional amendment referred by the Legislature (HJR 5019); Division of Elections records it as Ballot Number 1, made ballot June 17, 2025",
          "Passed the House 100–1 and the Senate 29–4",
          "AGAINST: the Florida AFL-CIO, the Florida Education Association and the League of Women Voters"
        ],
        supporters: [
          "A larger reserve cushions Florida against hurricane costs and revenue shocks without emergency tax rises",
          "The near-unanimous bipartisan legislative votes suggest broad agreement that the current 10% cap is too low"
        ],
        opponents: [
          "Opponents argue reserves are being prioritised over schools and children's healthcare",
          "A mandatory annual transfer locks money away that a future Legislature might need for classrooms [Verify — structural argument]"
        ] },
      { name: "Amendment 2 — exempt farm equipment on agricultural land from property tax", party: "I", winner: false,
        positions: [
          "A YES vote exempts farm equipment — tractors, machinery, tools — from local property taxes when it is habitually located on land classified as agricultural, used for producing agricultural products or agritourism, and owned by that land's owner or leaseholder",
          "A NO vote leaves that equipment taxable by counties, school districts and other local governments",
          ""
        ],
        differentiators: [
          "A constitutional amendment referred by the Legislature (HJR 1215, Senate companion SJR 318); Ballot Number 2, made ballot June 18, 2025",
          "Passed 37–0 in the Senate and 110–1 in the House; first applies to tax years beginning Jan 1, 2027",
          "Legislative staff estimate roughly $31M a year in lost LOCAL revenue"
        ],
        supporters: [
          "Growers argue taxing the equipment that produces food is a direct tax on thin agricultural margins",
          "The unanimous Senate vote and near-unanimous House vote signal it is not a partisan measure"
        ],
        opponents: [
          "Rep. Anna Eskamani argues the benefit flows mainly to large agribusiness rather than small family farms",
          "The roughly $31M a year falls on counties and school districts, which have no way to replace it [Verify — structural argument]"
        ] },
      { name: "Amendment 3 — increased homestead exemption; lower cap on non-homestead assessment increases", party: "I", winner: false,
        positions: [
          "A YES vote raises the non-school homestead exemption to $150,000 in 2027 and $250,000 in 2028, and cuts the non-homestead assessment cap from 10% to 5%",
          "A NO vote leaves the current homestead exemption and the 10% non-homestead cap unchanged",
          ""
        ],
        differentiators: [
          "⚠ Its ballot title was REWRITTEN BY COURT ORDER on Aug 3, 2026 after a judge found the original 'more akin to a political slogan'",
          "Referred by the Legislature (CS/HJR 1F); Ballot Number 3, made ballot June 16, 2026",
          "State estimators put the recurring cost near $12 BILLION a year to local governments",
          "AGAINST: the Florida Fraternal Order of Police, Florida Sheriffs Association, Florida Fire Chiefs' Association, Florida Library Association, League of Women Voters and the Florida Democratic Party. FOR: DeSantis and Donalds"
        ],
        supporters: [
          "Supporters argue rising assessments are pricing longtime Florida homeowners out of their own homes",
          "Donalds calls it only a first step toward eliminating homestead property taxes entirely"
        ],
        opponents: [
          "Police, sheriffs, fire chiefs and libraries all oppose it, warning the roughly $12B a year comes out of the services they provide",
          "Florida TaxWatch, which is nonpartisan and has NOT opposed it, warns local governments may simply offset the losses with new fees",
          "Reporting notes it faces organised opposition with comparatively little organised support"
        ] } ] },

  // ─────────────────────────── PAST — Aug 18, 2026 primaries, all certified Aug 27 ───────────────────────────
  { date: "Aug 18, 2026", type: "past", scope: "Federal · Statewide · Democratic primary", office: "U.S. Senate (Special) — Democratic Primary",
    note: "THE BIGGEST UPSET OF FLORIDA'S PRIMARY NIGHT. State Rep. Angie Nixon, who joined the Democratic Socialists of America in June 2026, beat retired Lt. Col. Alexander Vindman — a key witness in Trump's first impeachment — by twelve points despite being heavily outraised. Total Democratic primary vote: 1,258,973. ⚠ Statewide turnout figures conflict: NBC 6 reported about 25%, Common Cause Florida 22.39% [Verify]. Certified Aug 27, 2026.",
    candidates: [
      { name: "Angie Nixon", party: "D", winner: true,
        positions: [], differentiators: ["705,835 votes — 56.06%", "Florida state Representative, House District 13 (Jacksonville)", "Raised $974,845 total"], supporters: [], opponents: [] },
      { name: "Alexander Vindman", party: "D", winner: false,
        positions: [], differentiators: ["553,138 votes — 43.94%", "Retired U.S. Army Lieutenant Colonel; a key witness in Trump's first impeachment", "Significantly outraised Nixon [Verify — exact FEC totals not pulled for the losing candidate]"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "Federal · Statewide · Republican primary", office: "U.S. Senate (Special) — Republican Primary",
    note: "APPOINTED SEN. ASHLEY MOODY CRUSHED A FOUR-WAY FIELD WITH NEARLY 80%, her first appearance on any ballot for this seat. Total Republican primary vote: 1,660,013. Certified Aug 27, 2026.",
    candidates: [
      { name: "Ashley Moody (appointed incumbent)", party: "R", winner: true,
        positions: [], differentiators: ["1,320,780 votes — 79.56%", "Appointed U.S. Senator Jan 2025; Florida Attorney General 2019–2025", "$8,491,175 cash on hand as of July 29, 2026", "Endorsed by President Trump"], supporters: [], opponents: [] },
      { name: "Chris Gleason", party: "R", winner: false,
        positions: [], differentiators: ["228,010 votes — 13.74%"], supporters: [], opponents: [] },
      { name: "Ernest 'Ernie' Rivera", party: "R", winner: false,
        positions: [], differentiators: ["79,973 votes — 4.82%"], supporters: [], opponents: [] },
      { name: "Neelam Taneja Perry", party: "R", winner: false,
        positions: [], differentiators: ["31,250 votes — 1.88%", "⚠ She ran as a REPUBLICAN — several aggregators wrongly list her as an NPA general-election candidate; the state's own records do not"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Republican primary", office: "Governor — Republican Primary",
    note: "BYRON DONALDS WON AN ELEVEN-CANDIDATE FIELD WITH 47.79%, nearly doubling second-place Lt. Gov. Jay Collins. Trump's early endorsement and a near-$100M committee operation cleared the field; ⚠ DeSantis pointedly WITHHELD his endorsement. Total Republican primary vote: 1,697,330. Certified Aug 27, 2026.",
    candidates: [
      { name: "Byron Donalds", party: "R", winner: true,
        positions: [], differentiators: ["811,131 votes — 47.79%", "U.S. Representative, FL-19, since 2021", "His affiliated PAC raised nearly $100M since Feb 2025", "Named state Sen. Bryan Avila as running mate on Aug 25"], supporters: [], opponents: [] },
      { name: "Jay Collins", party: "R", winner: false,
        positions: [], differentiators: ["427,014 votes — 25.16%", "The sitting Lieutenant Governor of Florida"], supporters: [], opponents: [] },
      { name: "James Fishback", party: "R", winner: false,
        positions: [], differentiators: ["177,809 votes — 10.48%", "Investor; drew support from Tucker Carlson"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Democratic primary", office: "Governor — Democratic Primary",
    note: "DAVID JOLLY AND GWEN GRAHAM WON AS A JOINT TICKET WITH 60.95% in a six-way field, after Orange County Mayor Jerry Demings withdrew for health reasons. ⚠ Jolly is a former REPUBLICAN congressman who registered as a Democrat in 2025. Total Democratic primary vote: 1,250,544. Certified Aug 27, 2026.",
    candidates: [
      { name: "David Jolly and Gwen Graham", party: "D", winner: true,
        positions: [], differentiators: ["762,160 votes — 60.95%", "Jolly is a former U.S. Representative (R, FL-13); Graham is a former U.S. Representative and daughter of Gov./Sen. Bob Graham", "Endorsed by the Florida AFL-CIO and the Florida Education Association"], supporters: [], opponents: [] },
      { name: "Dayna Marie Foster", party: "D", winner: false,
        positions: [], differentiators: ["189,421 votes — 15.15%"], supporters: [], opponents: [] },
      { name: "Dotie Joseph", party: "D", winner: false,
        positions: [], differentiators: ["119,968 votes — 9.59%", "Florida state Representative"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Party primaries", office: "Chief Financial Officer — Party Primaries",
    note: "THIS CARD COVERS BOTH PARTY PRIMARIES. Appointed CFO Blaise Ingoglia took 61.32% of the Republican vote; former state Sen. Annette Taddeo won the Democratic primary with 65.64%. Republican total 1,579,082; Democratic total 1,213,713. Certified Aug 27, 2026.",
    candidates: [
      { name: "Blaise Ingoglia (appointed incumbent)", party: "R", winner: true,
        positions: [], differentiators: ["968,222 votes — 61.32% (Republican primary)", "CFO and State Fire Marshal since July 2025, appointed by DeSantis", "Endorsed by the Florida Chamber of Commerce"], supporters: [], opponents: [] },
      { name: "Frank William Collige", party: "R", winner: false,
        positions: [], differentiators: ["610,860 votes — 38.68%", "U.S. Air Force veteran and licensed public adjuster, Baker County"], supporters: [], opponents: [] },
      { name: "Annette Taddeo", party: "D", winner: true,
        positions: [], differentiators: ["796,723 votes — 65.64% (Democratic primary)", "Former Florida state senator, District 40", "Endorsed by Alex Sink, the last Democrat to hold the office"], supporters: [], opponents: [] },
      { name: "Earle Ford", party: "D", winner: false,
        positions: [], differentiators: ["416,990 votes — 34.36%"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Party primaries", office: "Commissioner of Agriculture — Party Primaries",
    note: "THIS CARD COVERS BOTH PARTY PRIMARIES. Elected incumbent Wilton Simpson won the Republican nomination 68.91% to 31.09% over Matt Taylor; Miami trial attorney Joey Mendoza Atkins took the Democratic nomination with 60.29%. Republican total 1,613,042; Democratic total 1,189,715. Certified Aug 27, 2026.",
    candidates: [
      { name: "Wilton Simpson (incumbent)", party: "R", winner: true,
        positions: [], differentiators: ["1,111,530 votes — 68.91% (Republican primary)", "Commissioner of Agriculture since Jan 2023; former Senate President", "Endorsed by Trump and DeSantis"], supporters: [], opponents: [] },
      { name: "Matt Taylor", party: "R", winner: false,
        positions: [], differentiators: ["501,512 votes — 31.09%", "Campaigned as 'Matt the Welder'"], supporters: [], opponents: [] },
      { name: "Joey Mendoza Atkins", party: "D", winner: true,
        positions: [], differentiators: ["717,225 votes — 60.29% (Democratic primary)", "Miami trial attorney and former sports agent", "Raised $1,685 plus an $8,480 personal loan"], supporters: [], opponents: [] },
      { name: "Donald A. 'Don' Prichard", party: "D", winner: false,
        positions: [], differentiators: ["472,490 votes — 39.71%"], supporters: [], opponents: [] } ] },
];
