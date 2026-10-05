// (2) STATEWIDE — Nov. 3, 2026 general, from the Texas Secretary of State
// Ballot Certification Report certified Aug. 28, 2026
// (sos.texas.gov/elections/forms/2026-ballot-cert.pdf).
// Party map: REP→R, DEM→D, LIB→L, GRE→G, IND→I.
// Write-in names named in Texas Tribune guides are NOT on that certification
// and are not carded. Judicial and State Board of Education races are also
// on the real November ballot but are outside this certification's statewide
// candidate block and are not carded here.
// Sources for the cards: Texas Tribune 2026 voter guides (Sep 15–Oct 5, 2026),
// CBS Texas, KERA, FOX 7, KLTV, Cook Political Report's public Senate page
// (cookpolitical.com/senate/race/488686, last updated Aug. 20, 2026),
// The Texan and the Tennessean on Cook's governor rating, Libertarian Party
// candidate page for Ted Brown, and Gov. Abbott's special-election proclamations.
const STATEWIDE = [
  { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · Statewide", office: "U.S. Senator from Texas",
    note: "OPEN SEAT. Cook Political Report's own Senate page, last updated Aug. 20, 2026, labels it OPEN because John Cornyn lost the Republican primary, and moved the rating from Lean Republican to Toss-up. Cook prints PVI R+6 (Apr. 27, 2026). Cook's summary says national Republicans may spend heavily to define James Talarico as too far left in a red state. Both major-party nominees have published affordability plans that need Congress; FOX 7 reported that neither published a full cost estimate. Nov. 3 also includes two STATE legislative specials for unexpired terms, on the same day as this general, only in the affected counties: Senate District 22 (Brian Birdwell vacancy — Bosque, Comanche, Eastland, Erath, Falls, Hamilton, Hill, Hood, McLennan, Somervell, and portions of Ellis and Tarrant) and House District 93 (Nate Schatzline vacancy, wholly inside Tarrant). Abbott's proclamations set both for Nov. 3, 2026, filing 6 p.m. Aug. 20, early voting Oct. 19–30. Those are not U.S. House races and are not carded here. The Texan noted a question about whether the order dates met the statutory 78th-day rule; this page does not treat that question as decided.",
    candidates: [
      { name: "Ken Paxton", party: "R", winner: false,
        positions: [
          "Protecting the Texas Promise: a $25,000 deduction for out-of-pocket medical expenses and a $5,000 healthy-lifestyle deduction (CBS Texas / KERA)",
          "A $50,000 first-time homebuyer deduction, plus another $50,000 down-payment deduction for a new primary residence (same plans)",
          "Double the child tax credit to $4,400 per child under 17 and make Trump Accounts permanent (CBS Texas)"
        ],
        differentiators: [
          "Republican nominee on the Aug. 28, 2026 Secretary of State certification",
          "Cook moved the race Lean Republican to Toss-up on Aug. 20, 2026 after Cornyn lost the primary (Cook's own page)",
          "His plan blames Biden-era prices; he argues the deductions are how Washington should answer them (CBS Texas)",
          "The plan items above all require Congress; FOX 7 said no full cost estimate was published"
        ],
        supporters: [
          "The deductions are concrete and aimed at medical bills, a first home, and parents (CBS Texas, KERA)",
          "Cook's own summary says a large national-Republican ad campaign could define the race on his terms",
          "He is the nominee Republican primary voters chose over the incumbent senator"
        ],
        opponents: [
          "Talarico's counter-plan argues the affordability crisis is about billionaires and tax breaks, not a deduction list (CBS Texas)",
          "Cook notes the risk Republicans themselves described: that nominating Paxton could cost a very expensive defense of a red-state seat",
          "A Toss-up rating from Cook is a real change from Lean Republican, not a safe-seat label"
        ] },
      { name: "James Talarico", party: "D", winner: false,
        positions: [
          "New American Dream: raise the minimum wage to $15, expand overtime, and cancel medical debt (KERA; CBS Texas)",
          "Stop hospital and insurer overcharging, reinstate enhanced ACA premium subsidies, and expand the CTC, EITC, and LIHTC (CBS Texas)",
          "Repeal top-1% tax breaks he calls the Big Ugly Bill, plus a cost-of-living tax cut and a repeal of tariffs (CBS Texas)"
        ],
        differentiators: [
          "Democratic nominee on the Aug. 28, 2026 Secretary of State certification; a state representative",
          "CBS Texas quoted him: I'll fight to unrig this economy",
          "Cook Toss-up as of Aug. 20, 2026, PVI R+6 (Cook's page)",
          "Same caveat as Paxton's plan: Congress has to pass it, and FOX 7 found no full cost estimate"
        ],
        supporters: [
          "The wage, medical-debt, and subsidy pieces are a direct answer to household bills (KERA, CBS Texas)",
          "Cook's move to Toss-up is the rating Democrats cite when they argue the seat is in play",
          "He puts the blame on billionaires and tariff costs rather than on a prior president alone (CBS Texas)"
        ],
        opponents: [
          "Cook's summary says Republican ads will cast him as too far left for a state with PVI R+6",
          "Paxton's plan offers specific dollar deductions; critics can say Talarico's list is a longer federal rewrite",
          "A red-state Senate seat is still a hard climb even when Cook calls it a Toss-up"
        ] },
      { name: "Ted Brown", party: "L", winner: false,
        positions: [
          "Abolish the federal income tax, dismantle the IRS and the Department of Education, and cut spending against a debt he puts near $40 trillion (KLTV, Sep. 28, 2026)",
          "An Ellis Island-style legal immigration system, free trade, and withdrawal from foreign conflicts and alliances including NATO (KLTV)",
          "A limited-government alternative to both major parties; he told KLTV his goal is to win and to promote liberty"
        ],
        differentiators: [
          "Libertarian nominee on the Aug. 28, 2026 Secretary of State certification; Libertarian convention Apr. 11, 2026 (Ballotpedia)",
          "UCLA political science, 1984; retired independent insurance adjuster; lives in Austin's Wells Branch (lp.org candidate page)",
          "In the party since 1979; former Libertarian Party of California chair; candidate coordinator for the Libertarian Party of Texas (lp.org)",
          "KLTV reported he received about 267,000 votes in a 2024 Senate run"
        ],
        supporters: [
          "He is a real third name on a Toss-up ballot, not a write-in (SoS certification)",
          "The platform is specific: taxes, the IRS, education, immigration, and NATO (KLTV)",
          "Decades in the party give him a volunteer list the other minor lines in Texas often lack (lp.org)"
        ],
        opponents: [
          "KLTV's own story frames the spoiler argument: in a Toss-up, a few points can decide the seat",
          "Abolishing the income tax and leaving NATO are far outside what either major nominee is offering",
          "No FEC cash figure is printed here; a current committee total was not pulled for this card [Verify]"
        ] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Governor of Texas",
    note: "Greg Abbott is seeking another term. The Texan and the Tennessean reported in August 2026 that Cook moved this race from Solid Republican to Likely Republican. Cook's own governor page was not re-read for this card, so the rating is cited through those two outlets. The Texas Tribune's Sep. 25, 2026 guide (Kayla Guo and Maria Mendez) is the source for the money, donors, and platforms below. Cash figures are as of June 30, 2026. Write-ins named in that guide are not on the Aug. 28 certification and are not carded.",
    candidates: [
      { name: "Greg Abbott (incumbent)", party: "R", winner: false,
        positions: [
          "Pause new data-center grid connections pending an audit, end data-center tax breaks, and pause Flock camera funding after the Tribune found a state network of at least $30 million (Tribune, Sep. 25)",
          "Abolish school property taxes for homeowners, require two-thirds voter approval for increases, and cut the appraisal cap from 10% to 3% (Tribune)",
          "Operation Lone Star, stricter bail including a constitutional amendment, a smokeable-hemp ban, and about $1 billion over two years for private-school vouchers (Tribune)"
        ],
        differentiators: [
          "First elected governor in 2014; previously the longest-serving attorney general, a Texas Supreme Court justice, and a Harris County district judge (Tribune)",
          "$67.4 million cash on hand June 30; raised $28.3 million from Jan. 1 to June 30 (Tribune)",
          "Named donors include Javaid Anwar $1.5 million, the Texas Republican Leadership Fund $1 million, and Elon Musk $500,000 (Tribune)",
          "Endorsed by Trump, the National Border Patrol Council, TMPA, and CLEAT (Tribune)"
        ],
        supporters: [
          "The cash gap is enormous: $67.4 million on hand against Hinojosa's $3 million (Tribune)",
          "Cook Likely Republican, via The Texan and the Tennessean, is still a Republican-favored race",
          "Border, bail, and voucher items match the record he is running on, not a new biography (Tribune)"
        ],
        opponents: [
          "He had called Texas the AI epicenter and is now pausing the data-center connections he courted (Tribune)",
          "The Tribune's Flock finding is the reason he paused that camera funding; critics call the network warrantless",
          "Hinojosa and teachers' groups oppose the voucher program and the property-tax plan's school-finance effects (Tribune)"
        ] },
      { name: "Gina Hinojosa", party: "D", winner: false,
        positions: [
          "A data-center moratorium until community protections exist, and an end to data-center tax breaks (Tribune, Sep. 25)",
          "A one-time $1,500 check from state savings, higher teacher pay, an end to standardized testing, and an educator in place of Education Commissioner Mike Morath (Tribune)",
          "Opposes vouchers; wants private equity reined in in health care; calls Flock cameras warrantless surveillance (Tribune)"
        ],
        differentiators: [
          "Fifth-term state representative; former Austin ISD board president; civil-rights and union lawyer (Tribune)",
          "Rice University's Mark Jones ranks her among the most liberal House members; vice chair of the Texas Legislative Progressive Caucus (Tribune)",
          "$3 million cash on hand; raised $7.4 million (Tribune)",
          "Endorsed by James Talarico, several Democratic U.S. representatives the Tribune lists including Lloyd Doggett, and the Texas AFL-CIO and Texas AFT (Tribune)"
        ],
        supporters: [
          "Her data-center and camera positions overlap Abbott's newer pauses, which supporters say shows the issue moved",
          "Teacher-pay and anti-voucher messages are aimed at public-school households (Tribune)",
          "The Tribune guide gives her a full platform, not a placeholder challenger"
        ],
        opponents: [
          "The money gap is about twenty to one in cash on hand (Tribune)",
          "A Likely Republican Cook rating, as reported by The Texan, is not a toss-up",
          "Jones's liberal ranking is the line Republicans use to argue she is to the left of the state (Tribune)"
        ] },
      { name: "Pat Dixon", party: "L", winner: false,
        positions: [
          "Opposes tax incentives, including for data centers, and would cut spending on business tax breaks and some Agriculture Department inspections (Tribune, Sep. 25)",
          "Cameras on private property or roads are acceptable; a statewide-network search should need probable cause (Tribune)",
          "Adults should be free to use hemp, THC, or marijuana if they do not harm others, with impaired driving punished; scholarship funds should follow the child (Tribune)"
        ],
        differentiators: [
          "Libertarian nominee on the Aug. 28 certification",
          "Lago Vista automation-business owner; two terms on the Lago Vista council; 10 years as Libertarian Party of Texas chair (Tribune)",
          "$6,374 cash on hand; raised $9,233 (Tribune)"
        ],
        supporters: [
          "The Tribune found actual positions, unlike several other Libertarian statewide nominees",
          "His camera and data-center views are specific, not a generic third-party line",
          "A former city council member is a local record voters in Lago Vista can check"
        ],
        opponents: [
          "Under $10,000 raised is not a statewide media budget (Tribune)",
          "Likely Republican at the top of the ticket leaves a Libertarian line with a structural ceiling",
          "Scholarship funds that follow the child will be read by voucher opponents as a voucher variant"
        ] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Lieutenant Governor of Texas",
    note: "Dan Patrick is seeking a fourth term. The Texas Tribune's Sep. 28, 2026 guide (Renzo Downey and Maria Mendez) is the source for the figures below, as of June 30, 2026. Write-ins Stephen Samuelson and Arturo Espinosa are not carded.",
    candidates: [
      { name: "Dan Patrick (incumbent)", party: "R", winner: false,
        positions: [
          "Expand the homestead exemption and lower the age for the senior exemption; he describes the agenda as Christian-first (Tribune, Sep. 28)",
          "School vouchers, a ban on THC sales, and preserving the abortion ban (Tribune)",
          "Letter-grade penalties for schools that do not remove graphic books; a study of foreign-national surrogacy; transmission lines should protect landowners (Tribune)"
        ],
        differentiators: [
          "Lieutenant governor since 2015; state senator 2007–2015; former talk-radio host; won the March primary outright (Tribune)",
          "$35.3 million cash on hand; raised $6 million (Tribune)",
          "Donors include an Elon Musk trust $500,000, Kenneth Fisher $400,000, and Harlan Crow $250,000 (Tribune)",
          "Endorsed by Trump, Abbott, Cornyn, Cruz, and Texas Right to Life (Tribune)"
        ],
        supporters: [
          "The cash lead, $35.3 million to Goodwin's $317,571, is the practical argument (Tribune)",
          "Property-tax cuts are the item his own materials lead with (Tribune)",
          "He also backed a film incentive and a dementia-research institute, which the Tribune notes drew fiscal-hawk blowback"
        ],
        opponents: [
          "A THC ban is the clear split with Goodwin, who wants age, testing, and labels instead (Tribune)",
          "The book-rating penalty and the abortion ban are the Democratic case against a fourth term",
          "Fiscal hawks in his own party objected to the film incentive and the dementia institute (Tribune)"
        ] },
      { name: "Vikki Goodwin", party: "D", winner: false,
        positions: [
          "Public-school funding and teacher pay, water infrastructure, and the Fair Rent Incentive Act (Tribune, Sep. 28)",
          "Repeal the abortion ban and expand Medicaid plus a statewide health program (Tribune)",
          "THC rules on age, testing, and labeling rather than a ban; a data-center moratorium; limits on ICE after the Lorenzo Salgado Araujo shooting in Houston (Tribune)"
        ],
        differentiators: [
          "Austin state representative since 2018; author of Cati's Act on drowning prevention and the Natalia Cox Act on domestic-violence notice (Tribune)",
          "Mark Jones ranks her among the most liberal House members; whip of the Legislative Progressive Caucus (Tribune)",
          "$317,571 cash on hand; raised $757,078; Don Henley gave $109,000 (Tribune)",
          "Won the May runoff; endorsed by Greg Casar, Lloyd Doggett, and more than 35 Democratic representatives (Tribune)"
        ],
        supporters: [
          "The drowning and domestic-violence bills are enacted work, not a platform promise (Tribune)",
          "Her THC position is regulation, which supporters contrast with Patrick's ban",
          "Water and rent items match Austin and suburban household issues the Tribune records"
        ],
        opponents: [
          "The cash gap against Patrick is roughly a hundred to one (Tribune)",
          "The liberal ranking is the Republican attack line (Tribune)",
          "A fourth-term presiding officer with Trump's endorsement is the structural favorite"
        ] },
      { name: "Anthony Cristo", party: "L", winner: false,
        positions: [
          "Lower property taxes by cutting spending and by treating the surplus as overtaxing (Tribune, Sep. 28)",
          "A free market and working immigrants (Tribune)",
          "He says it is time to legalize marijuana (Tribune)"
        ],
        differentiators: [
          "Libertarian nominee on the Aug. 28 certification",
          "San Antonio high-school teacher; ran in TX-34 in 2020 and TX-15 in 2018 (Tribune)",
          "$777 cash on hand; raised $1,694 (Tribune)"
        ],
        supporters: [
          "The Tribune recorded a short, checkable platform rather than an empty filing",
          "A teacher on the ballot is a different biography from the two major nominees",
          "Legalization is a clear third position between Patrick's ban and Goodwin's regulation"
        ],
        opponents: [
          "Under $2,000 raised cannot fund a statewide campaign (Tribune)",
          "Prior congressional losses are the record voters can look up (Tribune)",
          "No additional endorsement list was in the Tribune guide [Verify]"
        ] },
      { name: "Kevin McCormick", party: "G", winner: false,
        positions: [
          "Public bus fleets, sustainable agriculture and hemp for the rural economy, and renewable energy (Tribune, Sep. 28)",
          "Ranked-choice voting, a single statewide primary, and limits on gerrymandering (Tribune)",
          "Appraisals based on rent or lease rather than sale comps; more teachers; fewer toxic chemicals (Tribune)"
        ],
        differentiators: [
          "Green nominee on the Aug. 28 certification",
          "University of Houston Law, 1986; math teacher at Jefferson High School in San Antonio; ran in TX-24 in 2016 (Tribune)",
          "$94 cash on hand; raised $151; endorsed by Arshira Papari, Green nominee in HD-49 (Tribune)"
        ],
        supporters: [
          "The voting-system and appraisal ideas are specific, not a slogan (Tribune)",
          "A law degree and a classroom job are both on the record (Tribune)",
          "He is the only Green on this four-way ballot"
        ],
        opponents: [
          "$151 raised is the smallest statewide total in this guide (Tribune)",
          "Ranked-choice voting is not the system Texas uses, so the platform cannot take effect from this office alone",
          "A prior TX-24 run did not put him in Congress (Tribune)"
        ] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Attorney General of Texas",
    note: "OPEN — Ken Paxton is the Republican nominee for U.S. Senate, not for this office. The Texas Tribune's Oct. 5, 2026 guide (Eleanor Klibanoff and Maria Mendez) is the source. Mayes Middleton beat Chip Roy in the May runoff. The Tribune's fundraising line for Middleton says $9.8 million raised between Jan. 1 and 30; this card does not expand that date range.",
    candidates: [
      { name: "Mayes Middleton", party: "R", winner: false,
        positions: [
          "Enforce the Trump border and deportation agenda, uphold abortion laws, and fight what he calls the woke-left's gender agenda (Tribune, Oct. 5)",
          "Wants the attorney general empowered to prosecute any state-law violation, including election crimes; courts have said those belong to local prosecutors (Tribune)",
          "Transparency for tax dollars, protect oil and gas jobs, and prevent foreign adversaries from buying Texas property (Tribune)"
        ],
        differentiators: [
          "State senator since 2023; state representative 2019–2023; president of Middleton Oil; University of Texas Law (Tribune)",
          "Self-funded about two-thirds of the campaign, more than $17 million of his own money since the 2025 launch (Tribune)",
          "$911,117 cash on hand June 30; the Tribune reports $9.8 million raised in a January window it dates Jan. 1–30 (Tribune)",
          "Endorsed by Texas Eagle Forum, True Texas Project, and Conservative Republicans of Texas (Tribune)"
        ],
        supporters: [
          "The self-funding means he is not dependent on a small-donor list (Tribune)",
          "Beating Chip Roy in a runoff is a demonstrated primary win, not a clearance (Tribune)",
          "Border and abortion positions match the Republican primary he won"
        ],
        opponents: [
          "Expanding criminal prosecution beyond what courts have allowed local prosecutors is the legal fight Johnson is running on (Tribune)",
          "More than $17 million of his own money is also the criticism that the office is being bought (Tribune)",
          "The Tribune's Jan. 1–30 fundraising window is oddly narrow; readers should not treat $9.8 million as a half-year total"
        ] },
      { name: "Nathan Johnson", party: "D", winner: false,
        positions: [
          "Criticizes Paxton's record as a radical MAGA agenda and would sue the federal government over border tactics he says violate the Constitution (Tribune, Oct. 5)",
          "Consumer protection and competition, and investigations of officials regardless of party (Tribune)",
          "Cooperate with local district attorneys rather than expand the attorney general's criminal power; reinvest in child support and official opinions (Tribune)"
        ],
        differentiators: [
          "Dallas state senator since 2019; Thompson Coburn litigator and mediator; says 134 bills since 2019 (Tribune)",
          "$290,566 cash on hand; raised $978,427 (Tribune)",
          "The Tribune reports endorsements from former Republican Texas Supreme Court justices, plus labor, Sierra Club, and Everytown",
          "Against Tarrant County voting-site reductions (Tribune)"
        ],
        supporters: [
          "Former Republican justices on an endorsement list are the crossover argument (Tribune)",
          "Leaving criminal cases with local prosecutors matches what the Tribune says the courts have already held",
          "A sitting senator with 134 bills is a legislative record, not a first campaign"
        ],
        opponents: [
          "Cash on hand is about a third of Middleton's, and Middleton has already spent millions of his own (Tribune)",
          "The Paxton-record attack is about a man who is no longer the nominee for this office",
          "No single public poll is printed here as a margin; the Tribune described the race as close without this card inventing a number"
        ] },
      { name: "Tom Oxford", party: "L", winner: false,
        positions: [
          "The Tribune's Oct. 5 guide found no public policy stances for this campaign [Verify]",
          "The Libertarian Party of Texas platform is the nearest party document, and it is not a candidate questionnaire [Verify]",
          "He is the certified Libertarian line, so voters can choose a third name (SoS certification)"
        ],
        differentiators: [
          "Oxford Law PLLC in Jefferson County; University of Texas and University of Houston Law; practicing since 1982 in injury, immigration, and civil rights (Tribune)",
          "Has argued in the Texas Supreme Court and the Fifth Circuit (Tribune)",
          "$0 cash on hand; raised $394, an in-kind from Liberty Booster PAC (Tribune)"
        ],
        supporters: [
          "Four decades in court is a professional record the Tribune confirmed",
          "A third line exists on an open seat",
          "Appellate argument experience is unusual for a minor-party nominee (Tribune)"
        ],
        opponents: [
          "The Tribune could not find a 2026 platform, so this card does not invent one",
          "$394 raised, all in-kind, is not a campaign (Tribune)",
          "Voters who want a Libertarian policy list will not find one on his filing"
        ] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Comptroller of Public Accounts",
    note: "OPEN. Glenn Hegar left to become Texas A&M chancellor in 2025. Abbott appointed Kelly Hancock acting; Hancock lost the primary and stepped down; Abbott then appointed Don Huffines until the election. Texas Tribune guide, Sep. 29, 2026. Figures as of June 30.",
    candidates: [
      { name: "Don Huffines", party: "R", winner: false,
        positions: [
          "No state salary if elected; a DOGE-style audit and property-tax relief (Tribune, Sep. 29)",
          "Study the cost of undocumented immigration and implement vouchers with transparency (Tribune)",
          "Audit highway contracts; he has criticized a federal border barrier in Big Bend (Tribune)"
        ],
        differentiators: [
          "Appointed acting comptroller after Hancock stepped down; not yet elected to the office (Tribune)",
          "Co-founder of Huffines Communities; state senator 2015–2019; challenged Abbott in the 2022 Republican primary (Tribune)",
          "$1 million cash on hand; raised $6.2 million, of which $3.2 million was his own (Tribune)",
          "Endorsed by Ted Cruz and U.S. Reps. Chip Roy, Wesley Hunt, Ronny Jackson, Keith Self, and Brandon Gill (Tribune)"
        ],
        supporters: [
          "Refusing a salary is a checkable promise (Tribune)",
          "Cruz and a bloc of Republican House members are on the endorsement list (Tribune)",
          "Self-funding $3.2 million kept the campaign open after the appointment scramble (Tribune)"
        ],
        opponents: [
          "He is an appointee finishing someone else's term, which is the argument for an elected replacement (Tribune)",
          "His 2022 primary against Abbott is still the intra-party history (Tribune)",
          "A DOGE audit is a slogan until the office publishes findings"
        ] },
      { name: "Sarah Eckhardt", party: "D", winner: false,
        positions: [
          "Focus the office on safety rather than social issues, and root out no-bid donor contracts (Tribune, Sep. 29)",
          "Audit vouchers and the cost of refusing Medicaid expansion (Tribune)",
          "A data-center moratorium; against proof-of-legal-status rules for professional licenses (Tribune)"
        ],
        differentiators: [
          "Travis County state senator since 2020; Travis County judge for five years; former prosecutor (Tribune)",
          "Among the most liberal Senate Democrats by voting record; called Patrick a bully over the redistricting filibuster (Tribune)",
          "$240,002 cash on hand; raised $394,531 (Tribune)",
          "Endorsed by the Texas AFL-CIO and the Houston LGBTQ+ Political Caucus (Tribune)"
        ],
        supporters: [
          "County judge plus senator is executive and legislative experience (Tribune)",
          "Auditing vouchers and no-bid contracts is a comptroller-shaped platform (Tribune)",
          "Labor and the Houston LGBTQ+ caucus are named endorsers, not inferred ones"
        ],
        opponents: [
          "Raised under $400,000 against Huffines's $6.2 million (Tribune)",
          "The liberal voting record is the Republican contrast (Tribune)",
          "The Patrick-bully remark is a style argument opponents will replay (Tribune)"
        ] },
      { name: "V. Alonzo Echavarria-Garza", party: "L", winner: false,
        positions: [
          "The Tribune's Sep. 29 guide found no policy stances for this campaign [Verify]",
          "He is the certified Libertarian nominee, including a 2022 comptroller run the Tribune notes",
          "Occupation on the record is chief financial officer, which is the relevant professional claim"
        ],
        differentiators: [
          "Hearne city manager since 2022; Hearne CFO 2017–2022 (Tribune, citing LinkedIn)",
          "Also ran for comptroller in 2022 (Tribune)",
          "$0 cash on hand; raised $394, Liberty Booster PAC in-kind (Tribune)"
        ],
        supporters: [
          "A city CFO is closer to the office's work than a generic protest filing (Tribune)",
          "The certification puts him on the ballot",
          "A prior statewide run means the name is not new to the Libertarian line"
        ],
        opponents: [
          "No 2026 platform was in the Tribune piece, so none is invented here",
          "$394 in-kind is the entire reported raise (Tribune)",
          "City-manager experience in Hearne is local, not a state-audit record"
        ] },
      { name: "Shehla Faizi", party: "G", winner: false,
        positions: [
          "Tax transparency; no data-center tax breaks; prioritize disaster relief and public schools (Tribune, Sep. 29)",
          "Divest foreign bonds and end Texas anti-boycott contract laws on Israel, fossil fuels, and firearms (Tribune)",
          "Administer voucher money without bias against Islamic schools, and challenge sheriff ICE-cooperation grants (Tribune)"
        ],
        differentiators: [
          "Green nominee on the Aug. 28 certification",
          "Graphic design background in Karachi; master's in journalism and strategic communication; Stein/Ware 2024 volunteer and a podcaster (Tribune)",
          "$3,433 cash on hand; raised $4,250 (Tribune)"
        ],
        supporters: [
          "The Tribune recorded specific contract and tax positions, not an empty Green filing",
          "Disaster relief and school funding are comptroller-adjacent",
          "She is the only Green on this ballot line"
        ],
        opponents: [
          "$4,250 raised cannot contest a $6 million Republican campaign (Tribune)",
          "Ending anti-boycott contract laws is a sharp split with the current Republican state government",
          "No Texas elected office is on the biography the Tribune printed"
        ] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Commissioner of the General Land Office",
    note: "The General Land Office manages about 13 million acres, the Permanent School Fund, Veterans Land Board loans, the Alamo, and disaster aid. Texas Tribune guide, Sep. 18, 2026. Dawn Buckingham's campaign-site dollar claims are attributed as campaign claims. Figures as of June 30.",
    candidates: [
      { name: "Dawn Buckingham (incumbent)", party: "R", winner: false,
        positions: [
          "Geothermal, small modular reactors, and gas on state lands; a border wall and the Jocelyn Initiative (Tribune, Sep. 18)",
          "She ordered federal contractors to stop clearing a state tract in Big Bend, a break with the Trump administration on that tract (Tribune)",
          "Her campaign site claims about $6 billion to public education, more than $1.5 billion in veteran home help, and more than $9 billion in disaster recovery during her tenure"
        ],
        differentiators: [
          "First woman elected land commissioner, 2022; first Republican senator from Travis County and first woman in SD-24, 2016; eyelid surgeon (Tribune)",
          "Permanent School Fund above $57 billion and more than $2.4 billion a year to K-12, as the Tribune describes the office",
          "$3,216,157 cash on hand; raised $646,865 (Tribune)",
          "Endorsed by Trump, both other railroad commissioners, Speaker Dustin Burrows, and 41 House members (Tribune)"
        ],
        supporters: [
          "The school-fund and disaster-aid totals, if the campaign figures hold, are the incumbency argument",
          "Stopping the Big Bend clearing is a documented split with federal contractors (Tribune)",
          "Trump's endorsement plus the oil and cattle associations the Tribune lists are the coalition"
        ],
        opponents: [
          "Harvey discrimination findings were later reversed or closed; the history is still part of the office (Tribune)",
          "After an Alamo Trust Indigenous Peoples' Day post, the CEO was forced out; she called the post woke (Tribune)",
          "Flores opposes both the CEO's ouster and the five-seat Republican redraw (Tribune)"
        ] },
      { name: "Benjamin Flores", party: "D", winner: false,
        positions: [
          "Encourage data centers to lease state land, and use land swaps for affordable housing (Tribune, Sep. 18)",
          "Maximize the Permanent School Fund and oppose vouchers; faster disaster debris contracts and a pre-vetted contractor roster (Tribune)",
          "Veteran homelessness help, childcare, a VA hospital in the Rio Grande Valley, and assisted living on the Coastal Bend (Tribune)"
        ],
        differentiators: [
          "Bay City council since 2023; about 30 years in cybersecurity and compliance; born in Mexico, to the U.S. in 1996 (Tribune)",
          "Switched from a governor bid; runs a 10-acre heritage-pig operation in Bay City (Tribune)",
          "$3,001 cash on hand; raised $8,139 (Tribune)",
          "Endorsed by Gene Wu, Eddie Morales Jr., the AFL-CIO, and the Sierra Club (Tribune)"
        ],
        supporters: [
          "Disaster-contract speed is a land-office job, not a side issue (Tribune)",
          "Opposing the Alamo Trust CEO's ouster is a specific cultural split with the incumbent (Tribune)",
          "A city council term is a current local office"
        ],
        opponents: [
          "Under $10,000 raised against $3.2 million on hand is not a close money race (Tribune)",
          "He switched from the governor's race, which opponents call a fallback (Tribune)",
          "Data-center leases on state land cut against Democrats who want a moratorium"
        ] },
      { name: "Neill Snider", party: "L", winner: false,
        positions: [
          "Reduce taxes by maximizing land profits or selling property (Tribune, Sep. 18)",
          "Responsible energy and fair leasing (Tribune)",
          "More transparency at the General Land Office (Tribune)"
        ],
        differentiators: [
          "Libertarian nominee on the Aug. 28 certification",
          "Waco mechanical contractor and small cattle operator (Tribune)",
          "$0 cash on hand; raised $694 (Tribune)"
        ],
        supporters: [
          "The Tribune found three real positions, including a willingness to sell land",
          "A working contractor is a different resume from the surgeon-incumbent and the council member",
          "Transparency is a checkable demand on an office that handles disaster contracts"
        ],
        opponents: [
          "$694 raised is not a statewide campaign (Tribune)",
          "Selling state land is the opposite of both major nominees' school-fund pitch",
          "No endorsement list was in the Tribune guide [Verify]"
        ] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Commissioner of Agriculture",
    note: "Sid Miller lost the Republican primary to Nate Sheets, whom Abbott backed. Clayton Tucker was unopposed in the Democratic primary. Texas Tribune guide, Sep. 24, 2026. Figures as of June 30.",
    candidates: [
      { name: "Nate Sheets", party: "R", winner: false,
        positions: [
          "Clean food at home and in schools; data centers should invest in water and agriculture funds and lose their tax breaks (Tribune, Sep. 24)",
          "Rural agriculture jobs, power to investigate agroterrorism, and federal E-Verify plus a state citizenship-for-employment bill (Tribune)",
          "Cut farm transport costs and build an agriculture marketplace (Tribune)"
        ],
        differentiators: [
          "Founder of Nature Nate's honey, sold in 2021; resigned as CEO in 2024; six years in the Naval Reserve (Tribune)",
          "Texas State University; former communications director at E3 Partners; runs as MAHA (Tribune)",
          "$104,510 cash on hand; raised $1.9 million (Tribune)",
          "Endorsed by Abbott, Texas Cattle Feeders, Angela Paxton, and Rick Santorum (Tribune)"
        ],
        supporters: [
          "Beating the incumbent with Abbott's help is the primary fact (Tribune)",
          "A food-company founder is a direct industry biography",
          "$1.9 million raised is real money for a down-ballot office (Tribune)"
        ],
        opponents: [
          "E-Verify and citizenship-for-employment split him from farm groups worried about labor, a tension the platform invites",
          "MAHA branding is a national slogan opponents will tie to regulation of producers",
          "He is not the incumbent; Miller's loss means the office changes hands if Sheets wins"
        ] },
      { name: "Clayton Tucker", party: "D", winner: false,
        positions: [
          "Agriculture Development Districts aimed at data centers; preserve family farms; lower food costs and remove chemicals (Tribune, Sep. 24)",
          "Work on microplastics and PFAS; hemp as a crop that could help farmers (Tribune)",
          "Grow the AgriStress program, rebuild cooperatives, and support young farmers (Tribune)"
        ],
        differentiators: [
          "Lampasas family ranch; Trade Justice Education Fund; National Science Foundation water and agriculture researcher (Tribune)",
          "Secretary of the Texas Farmers Union; kindergarten teacher; Texas Progressive Caucus (Tribune)",
          "$162,456 cash on hand; raised $264,673; Don Henley $50,000 and the Talarico campaign $10,000 (Tribune)",
          "Endorsed by Lloyd Doggett, Greg Casar, Jamie Raskin, and the AFL-CIO (Tribune)"
        ],
        supporters: [
          "More cash on hand than Sheets ($162,456 to $104,510) even though Sheets raised more (Tribune)",
          "Farmers Union and a working ranch are industry roots, not only a party label",
          "The data-center district idea is a specific rural counter to tax breaks"
        ],
        opponents: [
          "Sheets raised $1.9 million to Tucker's $264,673 (Tribune)",
          "Abbott's endorsement of Sheets is the structural Republican advantage",
          "Progressive Caucus membership is the contrast Republicans will draw (Tribune)"
        ] },
      { name: "Austin R. Kelly", party: "L", winner: false,
        positions: [
          "Cut regulations on hemp, cottage food, local meat, raw commodities, and small producers (Tribune, Sep. 24)",
          "End licensing schemes, defend absolute property rights, and oppose warrantless inspections and convenience eminent domain (Tribune)",
          "Audit the Department of Agriculture, publish a water and brush-control literature review, and monitor biosecurity (Tribune)"
        ],
        differentiators: [
          "Libertarian nominee; Comanche County; ARK Ecological Consulting; Texas A&M lecturer in rangeland, botany, and ecology (Tribune)",
          "$0 cash on hand; raised $494 (Tribune)",
          "The Tribune notes a Libertarian endorsement alongside Ted Brown",
          "Contact on the guide: kellyforagtx@gmail.com"
        ],
        supporters: [
          "The platform is unusually specific for a minor-party down-ballot race (Tribune)",
          "A range scientist is a relevant professional credential",
          "Cottage-food and local-meat deregulation is a concrete producer issue"
        ],
        opponents: [
          "$494 raised cannot match either major nominee (Tribune)",
          "Absolute property rights collide with the biosecurity monitoring he also wants",
          "No major-party endorsement was recorded"
        ] }
    ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Railroad Commissioner",
    note: "The Railroad Commission does not regulate railroads. Since 2005 it regulates oil, gas, pipelines, coal and uranium surface mining, hydrogen, and carbon-dioxide injection. Bo French beat incumbent Jim Wright in the primary even though Abbott and Patrick had backed Wright. Texas Tribune guide, Sep. 15, 2026, and the Tribune's Sep. 18 follow-up. The endorsement list in the Sep. 15 guide includes Abbott and Patrick; Abbott's earlier line against French's agenda, spoken while he was backing Wright, is also in the Tribune and is not erased by a later endorsement. Figures as of June 30.",
    candidates: [
      { name: "Bo French", party: "R", winner: false,
        positions: [
          "End DEI at the commission, end what he calls Chinese government influence, and pursue energy partnerships with Israel (Tribune, Sep. 15)",
          "Pro-family credentialing for the industry (Tribune)",
          "He has called for deporting 100 million people, a figure the Tribune notes would include citizens, and has framed policy around what he calls an Islamic invasion (Tribune)"
        ],
        differentiators: [
          "Former Tarrant County Republican Party chair; energy investor; family oil business in Midland (Tribune)",
          "Beat incumbent Jim Wright despite Abbott and Patrick backing Wright in the primary (Tribune, Sep. 18)",
          "$223,192 cash on hand; raised $333,603; Texas Freedom Fund (Dunn/Wilks) gave $773,500 (Tribune)",
          "The Sep. 15 guide lists later endorsements from Abbott, Patrick, Wayne Christian, Christi Craddick, and TXOGA PAC"
        ],
        supporters: [
          "Primary voters retired an incumbent the governor and lieutenant governor had endorsed (Tribune)",
          "Oil-and-gas money, including TXOGA PAC on the later list, is an industry signal (Tribune)",
          "A family oil business is a direct tie to the minerals the commission regulates"
        ],
        opponents: [
          "The Tribune has reported racist posts about Asian students at the University of Texas, a CPAC call to deport 100 million people, a poll asking whether Jews or Muslims were a bigger threat, and a link he drew between Jewish opponent Jon Rosenthal and the Bolshevik Revolution (Tribune; The Forward)",
          "John Cornyn said he will not vote for French (Tribune, Sep. 18). Karl Rove said he would break a 30-year Republican-only habit to vote against him, calling him a bigot (Tribune)",
          "While backing Wright, Abbott said French's agenda would wreck the oil-and-gas record; that quote remains on the record even if the endorsement list later changed (Tribune)"
        ] },
      { name: "Jon Rosenthal", party: "D", winner: false,
        positions: [
          "Enforce existing rules, add regional community liaisons and Spanish and Vietnamese access, and run a 24/7 hotline (Tribune, Sep. 15)",
          "Scrutinize utility gas rates, capture gas, end routine flaring, and require leak detection (Tribune)",
          "Repurpose wells for geothermal or carbon dioxide, publish well-plugging dashboards, and deny new permits to violators (Tribune)"
        ],
        differentiators: [
          "Four-term state representative from Houston; oilfield mechanical engineer for more than 20 years; Jewish (Tribune)",
          "$167,879 cash on hand; raised $64,511; Don Henley gave $25,000 (Tribune)",
          "Endorsed by Hawk Dunlap, a 2026 Republican primary candidate and commission critic, plus the Sierra Club and the Texas AFL-CIO (Tribune)",
          "He argues the IRA and the infrastructure law helped energy, and that the Trump administration and the commission do the industry's bidding (Tribune)"
        ],
        supporters: [
          "Twenty years as an oilfield engineer is industry experience from the equipment side (Tribune)",
          "Flaring, leaks, and well-plugging are the commission's actual docket (Tribune)",
          "A Republican primary rival's endorsement is an unusual crossover (Tribune)"
        ],
        opponents: [
          "He raised $64,511, less than French, in a Republican-leaning statewide office (Tribune)",
          "French and allied voices have used Rosenthal's religion as an attack; the Tribune and The Forward reported the Bolshevik comparison",
          "Cornyn's refusal to vote for French did not become an endorsement of Rosenthal (Tribune, Sep. 18)"
        ] },
      { name: "Arthur DiBianca", party: "L", winner: false,
        positions: [
          "Free-market energy without subsidies or mandates, and competitive access to pipelines (Tribune, Sep. 15)",
          "Mineral and surface rights against eminent domain (Tribune)",
          "Operators, not taxpayers, should plug abandoned wells and carry environmental risk (Tribune)"
        ],
        differentiators: [
          "Libertarian nominee; retired; Austin Libertarian activist (Tribune)",
          "Prior runs: SD-21 in 2022, CD-21 in 2020, HD-51 in 2014 (Tribune)",
          "$0 cash on hand; raised $694; votedibianca@gmail.com (Tribune)"
        ],
        supporters: [
          "Well-plugging paid by operators is a specific answer to a commission backlog (Tribune)",
          "No-subsidy energy policy is distinct from both major nominees",
          "The certification gives voters a third name on a race that drew national attention"
        ],
        opponents: [
          "$694 raised is not a campaign against industry PAC money (Tribune)",
          "Three prior losses are the electoral record (Tribune)",
          "Pipeline-access rules and eminent-domain limits are in tension with each other if a line has to be built"
        ] }
    ] }
];
