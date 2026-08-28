// Wyoming STATEWIDE 2026 ballot.
// ✅ CERTIFICATION: the Wyoming State Canvassing Board — SoS Chuck Gray, Gov. Mark Gordon, Auditor
// Kristi Racines and Treasurer Curt Meier — met Wed Aug 26, 2026 at 10:00 MST in the Capitol
// Complex Auditorium, Cheyenne, and certified the Aug 18 primary. The Secretary of State posts the
// results under the heading "2026 Official Primary Election Results." Every vote figure below is
// read from the SoS's own `2026 Primary Results Summaries - OFFICIAL.xlsx`, not an election-night
// tally.
//
// ⚠⚠ THE HEADLINE: FIVE OF SEVEN TOP OFFICES ARE OPEN. U.S. Senate (Lummis retiring, announced Dec
// 19, 2025), U.S. House (Hageman vacated it to run for Senate), Governor (Gordon declined a third
// term in April 2026), Secretary of State (Gray vacated it to run for the House) and Superintendent
// of Public Instruction (Degenfelder vacated it to run for Governor). Only Auditor and Treasurer
// have incumbents seeking re-election — and NO DEMOCRAT FILED against either.
//
// VERIFIED NEGATIVES: Lummis is NOT running. Gordon is NOT running. Hageman is NOT running for the
// House. Gray is NOT running for Secretary of State. There is NO Democratic nominee for State
// Auditor or State Treasurer — no candidate filed, and the SoS's own Successful Write-Ins document
// shows only three LEGISLATIVE districts produced qualifying write-ins, none statewide.
// ⚠ BARRASSO IS NOT UP: the SoS offices-up document lists exactly one "U.S. Senator (6 year term)."
// Barrasso holds Class 1 (re-elected 2024, term to Jan 2031); the 2026 seat is Lummis's Class 2.
// ⚠ GORDON WAS NOT TERM-LIMITED BY ANY COURT-TESTED RULE. The Wyoming Supreme Court has struck down
// term limits for legislators and other offices but has NEVER ruled on the gubernatorial statute,
// which was never challenged. Gordon weighed a challenge and in April 2026 declined to bring one.
// ⚠ THE GENERAL-ELECTION MINOR-PARTY / INDEPENDENT FIELD IS NOT FULLY KNOWN. Minor-party filing
// closed Aug 17 and independent filing Aug 24, but as of Aug 28 the SoS had NOT published the
// general-election candidate roster (the links exist but return 404). Only Rebecca Bextel
// (Constitution Party, Governor) is confirmed, via press. RE-PULL the roster after Sept 1.
const STATEWIDE = [
  // ─────────────────────────── UPCOMING ───────────────────────────
  { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · Statewide", office: "U.S. Senator from Wyoming (Class 2)",
    note: "OPEN SEAT — CYNTHIA LUMMIS IS RETIRING, and U.S. Rep. Harriet Hageman won the Republican nomination on Aug 18 with 64.7%. ⚠ Wyoming's other seat (John Barrasso, Class 1) is NOT on the 2026 ballot; the Secretary of State's official 'Offices Up for Election' lists exactly one U.S. Senate seat. ✅ Primary figures here are OFFICIAL — certified by the Wyoming State Canvassing Board on Aug 26, 2026. ⚠ No Democrat has won a statewide race in Wyoming since 2006 [Verify — a press summary, not an authoritative election-history source], and Hageman has outraised Byrd by roughly a hundred to one. ✅ Trump endorsed Hageman, as did the retiring Lummis.",
    candidates: [
      { name: "Harriet Hageman", party: "R", winner: false,
        positions: [
          "Fight what she calls the bloated administrative state",
          "Develop Wyoming energy to create jobs",
          "Multiple use and sustained yield on federal lands"
        ],
        differentiators: [
          "U.S. Representative for Wyoming at-large since 2023, giving up the seat to run",
          "Won the Aug 18 Republican primary with 83,807 votes — 64.7%",
          "Raised $2,435,023 and spent $2,402,617 as of Aug 27, 2026",
          "Endorsed by President Trump and by retiring Sen. Lummis"
        ],
        supporters: [
          "Her water and natural-resources law background makes her an effective advocate against federal land regulation",
          "She secured $205 million for Wyoming through the Rural Health Transformation Program",
          "A Trump-aligned senator maximises Wyoming's leverage with the current administration"
        ],
        opponents: [
          "Her fundraising leans heavily on out-of-state energy and industry PACs rather than Wyoming donors",
          "Critics say she prioritises national culture-war fights over Wyoming-specific constituent work [Verify — a characterisation drawn from primary-campaign commentary, not a single authoritative source]",
          "35% of Republican primary voters chose someone else despite her overwhelming money and endorsement advantage"
        ] },
      { name: "James Byrd", party: "D", winner: false,
        positions: [
          "Federal permitting reform to scale advanced nuclear and minerals",
          "Keep public lands public; oppose privatisation",
          "Protect rural healthcare, lower drug costs, expand telehealth"
        ],
        differentiators: [
          "Wyoming House of Representatives 2009–2019 (District 44, Cheyenne)",
          "Former House Minority Whip 2013–15 and Minority Caucus Leader 2015–17",
          "Won the Aug 18 Democratic primary with 9,591 votes — 77.6%",
          "Raised $22,559 and spent $23,293 as of Aug 27, 2026"
        ],
        supporters: [
          "A decade of legislative experience and elected caucus leadership, in a state where Democrats rarely field seasoned candidates",
          "A fifth-generation Wyomingite with private-sector energy and IT experience, arguing for diversification rather than abandoning fossil fuels",
          "He argues the current delegation does not represent Wyoming's actual values in Washington"
        ],
        opponents: [
          "Faces the most Republican statewide electorate in the country [Verify — structural argument]",
          "Outraised roughly a hundred to one, with no realistic path to statewide paid media [Verify — structural argument]",
          "He was the losing 2018 Democratic nominee for Secretary of State, so he has not previously won statewide"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Governor of Wyoming",
    note: "OPEN SEAT — GOV. MARK GORDON DECLINED TO SEEK A THIRD TERM in April 2026, and state Sen. Eric Barlow beat TRUMP-ENDORSED Superintendent Megan Degenfelder 45.0% to 29.6%. ⚠ Gordon was NOT settled law as term-limited: the Wyoming Supreme Court has struck down term limits for legislators and other offices but has never ruled on the gubernatorial statute, which remains untested. He weighed a challenge and chose not to bring one. ⚠ This is a three-way general — Constitution Party nominee Rebecca Bextel is on the ballot alongside the major-party nominees. ✅ Primary figures are OFFICIAL, certified Aug 26, 2026.",
    candidates: [
      { name: "Eric Barlow", party: "R", winner: false,
        positions: [
          "Cash-based budgeting and right-sized government",
          "Oppose wholesale sale of public lands; multiple use with local stewardship",
          "Let local communities decide data-centre siting; protect water and power rates"
        ],
        differentiators: [
          "Current Wyoming state senator; five terms in the state House including Majority Leader and Speaker",
          "Large-animal veterinarian and Campbell County rancher from Gillette",
          "Won the Aug 18 Republican primary with 58,825 votes — 45.0% — BEATING TRUMP'S PICK",
          "Raised $1,673,103 and spent $1,481,846 as of Aug 17, 2026; top donor Civil Leadership PAC at $168,250"
        ],
        supporters: [
          "His House speakership and Senate service give him the institutional experience to run the state from day one",
          "Defeating a Trump-endorsed rival shows Wyoming Republicans wanted a governing conservative over a national-profile one",
          "His public-lands legislation is evidence he will resist federal land disposal"
        ],
        opponents: [
          "Hard-right critics say his willingness to compromise and his leadership-PAC funding mark him as an establishment figure [Verify — a characterisation of primary-campaign criticism]",
          "He lost the Trump endorsement to Degenfelder and won with under half the primary vote",
          "Bextel's Constitution Party candidacy is explicitly pitched at conservatives who consider him insufficiently right-wing"
        ] },
      { name: "Kenneth R. Casner", party: "D", winner: false,
        positions: [
          "⚠ No platform positions could be located — he did not respond to WyoFile's candidate questionnaire and no campaign website was found [Verify]",
          "",
          ""
        ],
        differentiators: [
          "Democratic nominee, effectively unopposed in the Aug 18 primary with 10,710 votes",
          "Reported $0 raised and $0 spent as of Aug 17, 2026",
          "⚠ No campaign website could be located; his listed contact is a personal email address",
          "No prior elected office could be identified [Verify]"
        ],
        supporters: [
          "Gives Wyoming Democrats a name on the ballot in an open-seat governor's race rather than ceding it entirely [Verify — structural argument]",
          "Cleared the primary with no money at all, so the Democratic line is filled [Verify — structural argument]"
        ],
        opponents: [
          "No campaign presence, website or fundraising could be located [Verify — an absence of located records]",
          "He did not answer the state's principal nonpartisan candidate questionnaire, leaving voters no stated positions",
          "Faces the most Republican electorate in the country with zero reported resources [Verify — structural argument]"
        ] },
      { name: "Rebecca Bextel", party: "I", winner: false,
        positions: [
          "Expand energy production",
          "Second Amendment protections and school choice",
          "Reduce government regulation"
        ],
        differentiators: [
          "⚠ CONSTITUTION PARTY nominee — carded as 'I' only because this site's party codes have no Constitution Party value; she was nominated unanimously at the party's Cheyenne convention in May 2026",
          "Teton County (Jackson) conservative activist; qualified via the minor-party route, not the Aug 18 primary",
          "A central figure in the February 2026 'Checkgate' episode, handing cheques to state representatives on the House floor; a House investigative committee found NO wrongdoing",
          "Frames her run as giving conservatives two lanes for the same race"
        ],
        supporters: [
          "She argues conservatives deserve a second option when the Republican nominee is seen as too moderate",
          "Constitution Party organisers hope her run establishes Wyoming as a viable three-party state",
          "The 'Checkgate' inquiry cleared her, which supporters cite as vindication"
        ],
        opponents: [
          "Critics say a third conservative candidacy only splits the Republican vote to no purpose [Verify — structural argument]",
          "The cheque-distribution episode drew an ethics inquiry that, while it found no wrongdoing, dominated her public profile",
          "Minor-party statewide candidates in Wyoming have never come close to winning [Verify — structural argument]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Wyoming Secretary of State (OPEN SEAT)",
    note: "OPEN SEAT — INCUMBENT CHUCK GRAY GAVE IT UP TO RUN FOR CONGRESS, and Converse County Commissioner Robert Short won a four-way Republican primary with 45.4%. ⚠ WYOMING HAS NO LIEUTENANT GOVERNOR, so the Secretary of State is first in the line of gubernatorial succession as well as the state's chief election officer. ⚠ The office has been the centre of repeated litigation under Gray, including suits over voter-data transfers to the U.S. Justice Department, candidate ballot access, and the closed-primary system. ✅ Primary figures are OFFICIAL, certified Aug 26, 2026.",
    candidates: [
      { name: "Robert Short", party: "R", winner: false,
        positions: [
          "Assess recent election-law changes before adding new ones",
          "Strengthen county clerk relationships with training and resources",
          "Require disclosure of dark-money political spending in Wyoming"
        ],
        differentiators: [
          "Converse County Commissioner for more than eleven years, elected three times; former election judge",
          "Vice-president of the Wyoming County Commissioners Association",
          "Won the Aug 18 Republican primary with 53,325 votes — 45.4% — over Rachel Williams at 32.9%",
          "Raised $429,521 and spent $401,645 as of Aug 17, 2026, including $260,600 of his own money"
        ],
        supporters: [
          "County commissioners and election judges say he understands election administration from the county side, where it actually happens",
          "His pause-and-assess stance appeals to clerks fatigued by rapid statutory change",
          "Twenty years in nuclear science and running a 120-employee business argue for administrative competence"
        ],
        opponents: [
          "He self-funded more than half his campaign, which critics read as buying a low-information down-ballot race [Verify — structural argument]",
          "Election-integrity activists may see 'assess before changing' as a retreat from Gray's agenda [Verify — structural argument]",
          "He won with under half the primary vote in a four-way field"
        ] },
      { name: "Bryan McCarty", party: "D", winner: false,
        positions: [
          "Administer existing election rules and advise legislators on practicality",
          "Use the Secretary of State's seat on the land board to keep public lands public",
          "Eliminate dark money from campaign finance"
        ],
        differentiators: [
          "Democratic nominee, unopposed in the Aug 18 primary with 11,211 votes",
          "Career in the railroad industry with internal-audit and Six Sigma training; no prior elected office",
          "A Wyoming resident of seven years, living in Worland",
          "Raised $1,104 and spent $974 as of Aug 17, 2026"
        ],
        supporters: [
          "An audit and regulatory-compliance background is directly relevant to an office that oversees business filings",
          "He and his Republican opponent independently call for dark-money disclosure, which suggests cross-party appetite for it",
          "He emphasises administering the law as written rather than making the office a political platform"
        ],
        opponents: [
          "Raised about $1,100 against an opponent who spent over $400,000 [Verify — structural argument]",
          "Seven years' residency is short for a statewide office in Wyoming and would likely be used against him [Verify — structural argument]",
          "No prior elected experience and no campaign website beyond a social-media page"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Wyoming State Auditor",
    note: "NO DEMOCRAT FILED — INCUMBENT REPUBLICAN KRISTI RACINES IS EFFECTIVELY UNOPPOSED for a third term. She was unopposed in the Aug 18 Republican primary as well, taking 107,041 votes. ⚠ The Democratic primary drew NO candidate at all, and the Secretary of State's official Successful Write-In Candidates document confirms no statewide write-in reached the 25-vote threshold, so no Democratic nominee exists. ⚠ Minor-party and independent filing deadlines (Aug 17 and Aug 24) have passed but the Secretary of State had not published the general-election candidate roster as of Aug 28, so a third-party or independent challenger cannot be fully ruled out [Verify]. ✅ Primary figures are OFFICIAL, certified Aug 26, 2026.",
    candidates: [
      { name: "Kristi Racines (incumbent)", party: "R", winner: false,
        positions: [
          "Modernise the state's electronic accounting system against sophisticated fraud",
          "Expand public access to state financial data",
          "Balance revenue, community concerns and access on state trust lands"
        ],
        differentiators: [
          "Wyoming State Auditor since 2019, seeking a third term",
          "A CPA; former Chief Fiscal Officer and HR Director for Wyoming's judicial branch, managing an $80 million budget",
          "Unopposed in the Aug 18 Republican primary with 107,041 votes",
          "Raised $31,050 and spent $16,562 as of Aug 17, 2026"
        ],
        supporters: [
          "A working CPA running the state's accounting function, with two terms of experience in it",
          "Her transparency initiatives have expanded public access to state spending data",
          "She sits on the State Loan and Investment Board and the State Canvassing Board, roles that reward continuity"
        ],
        opponents: [
          "She runs unopposed, so voters get no accountability contest for an office that oversees all state spending [Verify — structural argument]",
          "As a sitting member of the State Loan and Investment Board she shares responsibility for board decisions criticised during the 2026 primaries, including wind-energy approvals [Verify — that criticism was directed at the board generally in primary attack ads, not at Racines specifically]",
          "A third term raises the usual entrenchment objections in an office with no term limit [Verify — structural argument]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Wyoming State Treasurer",
    note: "NO DEMOCRAT FILED — INCUMBENT REPUBLICAN CURT MEIER IS EFFECTIVELY UNOPPOSED after winning a contested primary 68.0% to 31.6% over Scott Smith. The office manages roughly $34 BILLION in state trust assets. ⚠ As with State Auditor, no Democrat filed and no statewide write-in qualified, so there is no Democratic nominee. ⚠ The Secretary of State had not published the general-election roster as of Aug 28, so minor-party or independent entries cannot be fully ruled out [Verify]. ✅ Primary figures are OFFICIAL, certified Aug 26, 2026.",
    candidates: [
      { name: "Curt Meier (incumbent)", party: "R", winner: false,
        positions: [
          "Disciplined investment strategies to protect taxpayer resources",
          "Generate state revenue through investment returns rather than taxation",
          "Diversify Wyoming's revenue streams and back economic development"
        ],
        differentiators: [
          "Wyoming State Treasurer since 2019; oversees about $34 billion in trust assets",
          "Two decades in the Wyoming Legislature with budget, taxation and state-finance committee roles",
          "Won the Aug 18 Republican primary with 78,712 votes — 68.0% — over Scott Smith's 31.6%",
          "Raised $234,390 and spent $126,795 as of Aug 17, 2026, including $90,000 of his own money"
        ],
        supporters: [
          "He argues investment returns can substitute for tax increases in a state with volatile mineral revenue",
          "A long legislative record on taxation and appropriations before taking the office",
          "He won a contested primary by better than two to one"
        ],
        opponents: [
          "Nearly a third of Republican primary voters backed a challenger, an unusual level of dissent for an incumbent constitutional officer",
          "He self-funded $90,000 of his own campaign",
          "He faces no general-election opponent, so his investment strategy gets no public scrutiny in November [Verify — structural argument]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Wyoming Superintendent of Public Instruction (OPEN SEAT)",
    note: "OPEN SEAT — INCUMBENT MEGAN DEGENFELDER LEFT IT TO RUN FOR GOVERNOR AND LOST, and former House Speaker Steve Harshman won the Republican primary with 57.7%. ⚠ Democratic nominee Ana Cordova reported $912 raised against Harshman's $190,904, one of the widest resource gaps on the ballot. ⚠ The Superintendent sits on the State Loan and Investment Board and the Board of Land Commissioners, so the office carries authority well beyond schools. ✅ Primary figures are OFFICIAL, certified Aug 26, 2026.",
    candidates: [
      { name: "Steve Harshman", party: "R", winner: false,
        positions: [
          "Foster collaboration among school districts",
          "Address student screen time and social-media health effects",
          "Emphasise early reading instruction and expand Career and Technical Education"
        ],
        differentiators: [
          "Former Speaker of the Wyoming House; career teacher and coach at Natrona County Central High School",
          "Authored the Hathaway Scholarship programme",
          "Won the Aug 18 Republican primary with 67,792 votes — 57.7% — over Tom Kelly's 31.2%",
          "Raised $190,904 and spent $180,855 as of Aug 17, 2026 — the most in the field"
        ],
        supporters: [
          "A career classroom teacher and coach running the schools agency, rather than a political appointee",
          "He authored the Hathaway Scholarship, which has funded thousands of Wyoming students",
          "Speakership experience means he can move education funding through the Legislature"
        ],
        opponents: [
          "Conservatives who backed Degenfelder's curriculum and parental-rights agenda see him as a return to establishment education politics [Verify — a characterisation of primary-campaign criticism]",
          "His largest disclosed donor is a utility PAC, which critics note is unrelated to education",
          "Long legislative tenure invites the argument that he is part of the system he would now oversee [Verify — structural argument]"
        ] },
      { name: "Ana Cordova", party: "D", winner: false,
        positions: [
          "Make local public schools the best choice so parents stop considering alternatives",
          "Strengthen science curriculum and instruction",
          "Support public schools over voucher-style alternatives [Verify — inferred from her stated top priority, not a separately stated plank]"
        ],
        differentiators: [
          "Degrees in biochemistry (New Mexico State), human genetics (Johns Hopkins) and law (Northwestern)",
          "A third-generation Wyomingite born and raised in Cheyenne; taught university classes and built middle- and high-school science curricula",
          "Won the Aug 18 Democratic primary with 7,303 votes — 61.3% — over Sergio A. Maldonado Sr.'s 36.2%",
          "Raised $912 and spent $557 as of Aug 17, 2026"
        ],
        supporters: [
          "Unusually deep academic and curriculum-development credentials for a down-ballot state candidate",
          "She won a genuinely contested Democratic primary rather than walking in unopposed",
          "She frames the race around strengthening public schools rather than restructuring them"
        ],
        opponents: [
          "Raised under $1,000 against an opponent with $190,000 — no capacity for statewide outreach [Verify — structural argument]",
          "No prior elected office and no standalone campaign website",
          "Faces an electorate that has not elected a Democrat statewide since 2006 [Verify — a press summary, not an authoritative source]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Statewide", office: "Judicial Retention — Wyoming (3 jurists)",
    note: "THREE JURISTS FACE STATEWIDE RETENTION: two of Wyoming's five Supreme Court justices, both appointed by Gov. Mark Gordon, plus the single judge of the statewide Chancery Court. Wyoming uses MERIT SELECTION — justices are appointed, then face an unopposed yes/no retention vote, and win a full eight-year term (six for Chancery) if retained. ⚠ These are NONPARTISAN: there is no opponent and no party label, and each card is carded party 'I' by this site's convention. ⚠ Wyoming has never removed a Supreme Court justice by retention vote [Verify — no authoritative source could be read], though both justices have publicly discussed rising legislative and public scrutiny of the court. Source: Wyoming Secretary of State, '2026 Judges Standing for Retention,' dated July 31, 2026.",
    candidates: [
      { name: "Bridget Hill — Supreme Court (retain / do not retain)", party: "I", winner: false,
        positions: [
          "⚠ Retention races carry no platform — justices do not campaign on positions",
          "",
          ""
        ],
        differentiators: [
          "Appointed to the Wyoming Supreme Court by Gov. Gordon; took office May 28, 2025",
          "Previously Wyoming Attorney General",
          "Standing for her FIRST retention vote; a full term is eight years",
          "Unopposed — the ballot question is simply retain or do not retain"
        ],
        supporters: [
          "She served as the state's chief legal officer before joining the court, an unusually direct preparation for it",
          "Wyoming's merit-selection system is designed to keep judicial selection out of partisan campaigning",
          "No organised opposition campaign could be located [Verify — an absence of located records]"
        ],
        opponents: [
          "Her prior role as Attorney General raises recusal questions in cases the state litigated on her watch [Verify — structural argument]",
          "Some legislators have pushed for greater scrutiny of the judiciary, which could translate into retention opposition [Verify — general scrutiny reported by WyoFile; no organised 'no' campaign was identified]",
          "She served barely a year before facing voters, giving them a thin record to judge"
        ] },
      { name: "Robert C. Jarosh — Supreme Court (retain / do not retain)", party: "I", winner: false,
        positions: [
          "⚠ Retention races carry no platform — justices do not campaign on positions",
          "",
          ""
        ],
        differentiators: [
          "Appointed to the Wyoming Supreme Court by Gov. Gordon on Jan 19, 2024; took office March 27, 2024",
          "Standing for his FIRST retention vote; a full term is eight years",
          "Came to the court from private practice in Cheyenne [Verify — background from an aggregator lead, not confirmed against a primary source]",
          "Unopposed — retain or do not retain"
        ],
        supporters: [
          "Two and a half years of sitting opinions give voters a real record",
          "Merit selection and retention are designed to insulate judges from campaign fundraising",
          "No organised opposition campaign could be located [Verify — an absence of located records]"
        ],
        opponents: [
          "He was appointed rather than elected, which critics of merit selection say gives voters too little say [Verify — structural argument]",
          "Rising legislative scrutiny of the Wyoming judiciary could produce protest 'no' votes [Verify — general scrutiny reported by WyoFile; no organised 'no' campaign was identified]",
          "Retention ballots draw high undervote rates, so outcomes turn on a small, low-information slice of the electorate [Verify — structural argument]"
        ] },
      { name: "Benjamin M. Burningham — Chancery Court (retain / do not retain)", party: "I", winner: false,
        positions: [
          "⚠ Retention races carry no platform — judges do not campaign on positions",
          "",
          ""
        ],
        differentiators: [
          "Judge of the Wyoming Chancery Court, the state's specialised business and commercial court",
          "⚠ Because the Chancery Court is STATEWIDE, its single judge stands for retention before all voters — not just one district",
          "Six-year term; listed on the Secretary of State's official retention roster dated July 31, 2026",
          "Unopposed — retain or do not retain"
        ],
        supporters: [
          "The Chancery Court was created to resolve commercial disputes quickly, a selling point for Wyoming's business-registration economy",
          "Retention keeps continuity in a court with a single judge",
          "No organised opposition campaign could be located [Verify — an absence of located records]"
        ],
        opponents: [
          "A one-judge statewide court concentrates significant commercial-law authority in one person [Verify — structural argument]",
          "The court's low public profile means most voters will decide with essentially no information [Verify — structural argument]",
          "Critics of specialised business courts argue they advantage corporate litigants [Verify — structural argument]"
        ] } ] },
  { date: "Nov 3, 2026", type: "upcoming", scope: "State · Ballot Question", office: "Ballot Measures — Wyoming (1 measure)",
    note: "ONE CERTIFIED STATEWIDE MEASURE, AND IT IS WYOMING'S FIRST CITIZEN INITIATIVE IN ROUGHLY THIRTY YEARS — and the first ever on tax policy. ⚠ THERE ARE NO CONSTITUTIONAL AMENDMENTS on Wyoming's 2026 ballot; this is the sole statewide proposition, per the official 2026 Wyoming Voter's Guide. ⚠ PASSAGE REQUIRES A MAJORITY OF ALL VOTERS VOTING IN THE GENERAL ELECTION, not just those voting on the measure — so an abstention counts as an effective NO. ⚠ The Secretary of State's official fiscal note projects a STATE revenue decrease of $92,614,266 in FY2028 and $95,855,766 in FY2029, and expressly states that figure covers the STATE ONLY and EXCLUDES the impact on counties, school districts and other local governments.",
    candidates: [
      { name: "Proposed Initiative Proposition Number One — homeowner's primary residence property tax exemption", party: "I", winner: false,
        positions: [
          "A YES vote exempts 50% of the assessed value of a qualified homeowner's primary residence from property tax, requiring one year of Wyoming residency and six months' occupancy in the prior tax year",
          "A NO vote leaves the current property tax base for schools and local services in place",
          ""
        ],
        differentiators: [
          "A citizen initiative qualified by petition — the first in Wyoming in about thirty years and the first ever on tax policy",
          "Sponsored by the People's Initiative to Limit Property Tax in Wyoming; committee member Brent Bien also ran THIRD in the Republican gubernatorial primary",
          "One exemption per property and per owner per year, with penalties for false claims",
          "AGAINST: Vote NO on Initiative #1, led by Executive Director Hank Hoversland"
        ],
        supporters: [
          "Bien argues seniors and long-term homeowners are being taxed out of their homes as assessed values climb",
          "Proponents say the fiscal hit is overstated because residential property is only about 29% of Wyoming's total assessed value",
          "Supporters say the Legislature repeatedly promised property tax relief and delivered too little, so voters should act directly"
        ],
        opponents: [
          "The organised opposition warns the shortfall means cuts to services, citing libraries and recreation districts already cut by earlier Wyoming tax-relief measures",
          "The state's own fiscal note puts the loss near $92.6M in FY2028 and $95.9M in FY2029 — and EXCLUDES counties, schools and special districts entirely",
          "Opponents warn the lost revenue could push the state or localities toward higher sales taxes, which fall harder on lower-income residents"
        ] } ] },

  // ─────────────────────────── PAST — Aug 18, 2026 primaries, all certified Aug 26 ───────────────────────────
  { date: "Aug 18, 2026", type: "past", scope: "Federal · Statewide · Republican primary", office: "U.S. Senate — Republican Primary",
    note: "HARRIET HAGEMAN WON THE NOMINATION FOR WYOMING'S OPEN SENATE SEAT WITH 64.7%, more than doubling second-place Sam Mead. Turnout was 129,605 votes including write-ins. ✅ Hageman had Trump's endorsement and that of retiring incumbent Cynthia Lummis, and outraised Mead roughly eight to one. Certified Aug 26, 2026.",
    candidates: [
      { name: "Harriet Hageman", party: "R", winner: true,
        positions: [], differentiators: ["83,807 votes — 64.7%", "U.S. Representative, Wyoming at-large", "Endorsed by Trump and by Sen. Lummis", "Raised $2.44M through Aug 27, 2026"], supporters: [], opponents: [] },
      { name: "Sam Mead", party: "R", winner: false,
        positions: [], differentiators: ["35,879 votes — 27.7%", "Strongest showing in Teton County (2,779 votes)", "Campaign fund roughly an eighth of Hageman's"], supporters: [], opponents: [] },
      { name: "Jimmy Skovgard", party: "R", winner: false,
        positions: [], differentiators: ["3,527 votes — 2.7%", "⚠ Plaintiff in the lawsuit challenging Wyoming's closed primary, which SoS Chuck Gray moved to dismiss"], supporters: [], opponents: [] },
      { name: "Jill M. Edwards", party: "R", winner: false,
        positions: [], differentiators: ["3,431 votes — 2.6%"], supporters: [], opponents: [] },
      { name: "John Holtz", party: "R", winner: false,
        positions: [], differentiators: ["2,539 votes — 2.0%"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "Federal · Statewide · Democratic primary", office: "U.S. Senate — Democratic Primary",
    note: "FORMER STATE REP. JAMES BYRD TOOK THE DEMOCRATIC SENATE NOMINATION WITH 77.6%. ⚠ Total Democratic Senate primary turnout was 12,363 — under a tenth of the Republican side. Certified Aug 26, 2026.",
    candidates: [
      { name: "James Byrd", party: "D", winner: true,
        positions: [], differentiators: ["9,591 votes — 77.6%", "Wyoming House 2009–2019; Minority Caucus Leader 2015–17", "The 2018 Democratic nominee for Secretary of State"], supporters: [], opponents: [] },
      { name: "Billy Benavidez", party: "D", winner: false,
        positions: [], differentiators: ["2,499 votes — 20.2%", "Strongest in Natrona County (263 votes)"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Republican primary", office: "Governor — Republican Primary",
    note: "STATE SEN. ERIC BARLOW BEAT TRUMP-ENDORSED SUPERINTENDENT MEGAN DEGENFELDER 45.0% TO 29.6%, a 20,079-vote margin for an open governorship. ⚠ TRUMP ENDORSED THE LOSER HERE ON THE SAME NIGHT HIS ENDORSEE HAGEMAN WON THE SENATE PRIMARY — the two races produced opposite verdicts on his backing. ⚠ Third-place finisher Brent Bien is also the sponsoring committee member behind Proposition One, the property tax initiative on the November ballot. Certified Aug 26, 2026.",
    candidates: [
      { name: "Eric Barlow", party: "R", winner: true,
        positions: [], differentiators: ["58,825 votes — 45.0%", "Current state senator; former Speaker of the Wyoming House", "Defeated the Trump-endorsed candidate"], supporters: [], opponents: [] },
      { name: "Megan Degenfelder", party: "R", winner: false,
        positions: [], differentiators: ["38,746 votes — 29.6%", "The sitting Wyoming Superintendent of Public Instruction, endorsed by President Trump", "Gave up her statewide office to run, leaving Superintendent open"], supporters: [], opponents: [] },
      { name: "Brent Bien", party: "R", winner: false,
        positions: [], differentiators: ["30,850 votes — 23.6%", "2022 gubernatorial candidate; retired Marine Corps colonel", "Sponsoring committee member of Proposition One, the property tax initiative"], supporters: [], opponents: [] },
      { name: "Curt Blake", party: "R", winner: false,
        positions: [], differentiators: ["2,161 votes — 1.7%", "Professional bull rider and rodeo producer"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Republican primary", office: "Secretary of State — Republican Primary",
    note: "CONVERSE COUNTY COMMISSIONER ROBERT SHORT WON THE NOMINATION FOR THE OPEN SECRETARY OF STATE OFFICE WITH 45.4%. Incumbent Chuck Gray vacated the seat to run for Congress. ⚠ Rachel Williams ran second with 32.9% and carried Natrona County outright with 5,016 votes. ⚠ A fifth name, Jason Fearneyhough, appeared only on Carbon County ballots after withdrawing and drew 56 votes, which the Secretary of State reports for completeness. Certified Aug 26, 2026.",
    candidates: [
      { name: "Robert Short", party: "R", winner: true,
        positions: [], differentiators: ["53,325 votes — 45.4%", "Converse County Commissioner, eleven-plus years; former election judge", "Raised $429,521, including $260,600 of his own money"], supporters: [], opponents: [] },
      { name: "Rachel Williams", party: "R", winner: false,
        positions: [], differentiators: ["38,573 votes — 32.9%", "Carried Natrona County with 5,016 votes"], supporters: [], opponents: [] },
      { name: "CJ Young", party: "R", winner: false,
        positions: [], differentiators: ["17,847 votes — 15.2%", "Strongest in Laramie County (3,556 votes)"], supporters: [], opponents: [] },
      { name: "Qwenton Eagle Oviatt", party: "R", winner: false,
        positions: [], differentiators: ["7,087 votes — 6.0%"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Republican primary", office: "State Treasurer — Republican Primary",
    note: "INCUMBENT TREASURER CURT MEIER TURNED BACK A PRIMARY CHALLENGE 68.0% TO 31.6%. ⚠ Challenger Scott Smith took 36,619 votes — a substantial protest showing against a sitting constitutional officer. ⚠ NO DEMOCRAT FILED for this office, so Meier's primary win effectively decided it. Certified Aug 26, 2026.",
    candidates: [
      { name: "Curt Meier (incumbent)", party: "R", winner: true,
        positions: [], differentiators: ["78,712 votes — 68.0%", "State Treasurer since 2019; about $34B in trust assets", "Two decades in the Wyoming Legislature"], supporters: [], opponents: [] },
      { name: "Scott Smith", party: "R", winner: false,
        positions: [], differentiators: ["36,619 votes — 31.6%", "Carried no county outright but ran close in Natrona (4,701) and Park (3,236)"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Republican primary", office: "Superintendent of Public Instruction — Republican Primary",
    note: "FORMER HOUSE SPEAKER STEVE HARSHMAN WON THE OPEN SUPERINTENDENT NOMINATION WITH 57.7%, nearly doubling second-place Tom Kelly. Incumbent Megan Degenfelder had vacated the office to run for governor. ⚠ Harshman dominated his home Natrona County with 10,545 votes. Certified Aug 26, 2026.",
    candidates: [
      { name: "Steve Harshman", party: "R", winner: true,
        positions: [], differentiators: ["67,792 votes — 57.7%", "Former Speaker of the Wyoming House; career teacher and coach", "Authored the Hathaway Scholarship", "Raised $190,904 — the most in the field"], supporters: [], opponents: [] },
      { name: "Tom Kelly", party: "R", winner: false,
        positions: [], differentiators: ["36,627 votes — 31.2%", "Carried Campbell County with 3,044 votes"], supporters: [], opponents: [] },
      { name: "Chad Auer", party: "R", winner: false,
        positions: [], differentiators: ["12,641 votes — 10.8%", "Strongest in Laramie County (3,151 votes)"], supporters: [], opponents: [] } ] },
  { date: "Aug 18, 2026", type: "past", scope: "State · Statewide · Democratic primary", office: "Superintendent of Public Instruction — Democratic Primary",
    note: "ANA CORDOVA WON THE DEMOCRATIC NOMINATION WITH 61.3% over Sergio A. Maldonado Sr. ⚠ Total turnout was 11,906 — about a tenth of the Republican primary for the same office. Certified Aug 26, 2026.",
    candidates: [
      { name: "Ana Cordova", party: "D", winner: true,
        positions: [], differentiators: ["7,303 votes — 61.3%", "Degrees in biochemistry, human genetics and law", "Carried Laramie County with 1,819 votes"], supporters: [], opponents: [] },
      { name: "Sergio A. Maldonado Sr.", party: "D", winner: false,
        positions: [], differentiators: ["4,315 votes — 36.2%", "Carried Fremont County, home to the Wind River Reservation, 515 to 320"], supporters: [], opponents: [] } ] },
];
