# -*- coding: utf-8 -*-
import io, json

RACES = []

def race(office, scope, note, cands=None):
    RACES.append({"office": office, "scope": scope, "note": note, "candidates": cands or []})

def c(name, party, pos, diff, sup, opp):
    return {"name": name, "party": party, "positions": pos,
            "differentiators": diff, "supporters": sup, "opponents": opp}

HEADER = """// Louisiana STATEWIDE 2026 ballot.
//
// ⚠⚠ LOUISIANA'S BALLOT RUNS ON TWO TRACKS AT ONCE AND THE PAGE MUST SAY SO, or it misleads every
// voter in the state. Read this before editing anything below.
//   • U.S. HOUSE: Act 7 of the 2026 Regular Session (signed May 14, 2026) pulled congressional races
//     back into Louisiana's majority-vote "jungle" system. NOV 3 IS ONLY THE FIRST ROUND. A candidate
//     wins outright only with a MAJORITY; otherwise the top two go to a RUNOFF ON DEC 12, 2026.
//     Never call Nov 3 the general election for a Louisiana House race.
//   • U.S. SENATE, SUPREME COURT, PSC and BESE: Act 1 of the 2024 FIRST Extraordinary Session moved
//     these to CLOSED PARTY PRIMARIES, held in spring. For them NOV 3 IS THE GENERAL — and it is
//     decided by PLURALITY, with no runoff. The Secretary of State says so in its own words.
//   • The SoS's official name for the date is "November 3, 2026 – U.S. Senate General/Open U.S.
//     Representative Primary/Open Primary Election."
//
// ⚠ THIS ARRAY IS SHOWN TO EVERY PARISH, so it carries only genuinely STATEWIDE contests: the U.S.
// Senate and the ten constitutional amendments. The Public Service Commission, BESE and the Supreme
// Court are DISTRICT offices — carding them here would tell a Shreveport voter about a New Orleans
// race. They are covered instead by one informational entry that names every candidate and the
// parishes each district covers, the same treatment Michigan's unopposed Court of Appeals seats get.
//
// ✅ VERIFIED NEGATIVE — NO GOVERNOR OR STATE EXECUTIVE OFFICER IS ON THE 2026 BALLOT. Established
// from three affirmative sources, not assumed: the SoS's own "Offices Regularly Scheduled to be
// Filled — Congressional/Presidential Elections" list contains no state executive office; the SoS's
// 2027 calendar sets the Gubernatorial Primary for Oct 9, 2027; and the SoS's own statewide office
// list for this election (electionId 344) contains no such office. Louisiana elects them in odd
// years.
//
// SOURCES: Louisiana Secretary of State — the certified candidate inquiry pulled for all 64 parishes
// (voterportal.sos.la.gov, electionId 344), the election-dates and qualifying-reminder pages, the
// how-candidates-are-elected rule, and the "2026 Proposed Constitutional Amendments" PDF, from which
// every ballot question below is quoted VERBATIM; the Louisiana Legislature's own bill pages;
// certified May 16 and June 27 closed-primary results from the SoS results feed; FEC bulk files
// weball26 and cn26; Cook Political Report, Sabato's Crystal Ball, Inside Elections; Louisiana
// Illuminator, The Advocate, Roll Call, Energy and Policy Institute, Bayou Progressive."""

# ─────────────────────────── U.S. SENATE ───────────────────────────
race("U.S. Senate — Louisiana", "Federal · Statewide",
 "⭐ THE INCUMBENT LOST HIS OWN PRIMARY, AND FINISHED THIRD. Bill Cassidy did not retire — he ran, and on May 16, 2026 he took 99,496 votes (24.8%) in the closed Republican primary, eliminated before the runoff. Certified Secretary of State results, all 3,722 precincts: Julia Letlow 179,903 (44.8%), John Fleming 113,437 (28.3%), Cassidy 99,496, Mark Spencer 8,338. Cassidy was one of seven Senate Republicans who voted to convict President Trump at the second impeachment trial and was censured by the state party; Trump endorsed Letlow on Jan 18, 2026, two days before she entered. He is the first elected incumbent senator to lose renomination since Richard Lugar in 2012, and remains Louisiana's senator until noon on Jan 3, 2027. ✅ RUNOFFS, June 27: Letlow beat Fleming 180,002 (56.9%) to 136,591; on the Democratic side Jamie Davis beat Gary Crockett 156,789 (79.9%) to 39,423, carrying ALL 64 PARISHES. ⚠ FOR THIS OFFICE NOV 3 IS THE GENERAL, NOT A FIRST ROUND — and it is decided by PLURALITY with no December runoff, because it came through a closed party primary. ⚠ Turnout on June 27 was 17%, with 47% more Republican than Democratic ballots cast statewide. Rated Solid or Safe Republican by Cook (Aug 20), Sabato (Aug 26) and Inside Elections. ⚠ The only public poll was commissioned and paid for by the Davis campaign — PPP, July 21–22, 518 registered voters: Letlow 41, Davis 37, with 22% undecided [Verify — no independent public poll of this matchup was located, and the campaign has not released the margin of error or crosstabs].",
 [c("Julia Letlow", "R",
    ["Secure the border and deport criminal illegal aliens — finish the wall, end catch-and-release, nationwide E-Verify",
     "Lower costs — permanently extend the 2017 tax cuts and make no-tax-on-tips and no-tax-on-overtime permanent",
     "Parents' rights — a national Parents' Bill of Rights, curriculum transparency, expanded school choice"],
    ["U.S. Representative for LA-05 since 2021 — her run is why that seat is open",
     "First Republican woman elected to Congress from Louisiana, originally elected with 65%",
     "Won the seat in a 2021 special election after her husband Luke died of COVID-19 complications; Ph.D. in communication; former university administrator",
     "$6,210,122 raised, $1,427,072 on hand (FEC, through June 30, 2026)",
     "Endorsed by President Trump and by Gov. Jeff Landry"],
    ["She holds Trump's endorsement in a state he carried by about 22 points, and won the runoff 57–43 after beating both a sitting senator and the state treasurer",
     "An Appropriations seat and a record she puts at more than $130 million in targeted federal support for Louisiana",
     "Roughly $9.25 million in outside spending has backed her, against none at all for her opponent"],
    ["⚠ In January 2026 she filed a 26-page report covering 224 previously undisclosed stock and bond transactions; Forbes found 211 were reported past the STOCK Act's 45-day deadline, some dating to 2024, worth roughly $266,000 to $3.5 million. Her office attributed it to a professionally managed account with discretionary authority [Verify — the underlying Forbes and NOTUS reporting is the citable part; the framing is her critics']",
     "Her own platform calls for banning members of Congress from trading individual stocks, which critics say sits awkwardly with that disclosure record",
     "The Campaign Legal Center has filed an FEC complaint alleging a Baton Rouge federal contractor gave $100,000 to a pro-Letlow super PAC while holding a NASA contract, which would violate the contractor contribution ban [Verify — an allegation; the FEC has made no finding]",
     "Davis centres the race on her vote for H.R.1 in 2025, which he says cut Medicaid and put 33 Louisiana rural hospitals at risk"]),
  c("\"Jamie\" Davis", "D",
    ["Affordability — raise the federal minimum wage, still $7.25 since 2009; roll back parts of the 2025 tax law; crack down on pump price-gouging",
     "The insurance crisis — a federal backstop for hurricane-exposed states and a stronger flood insurance programme, citing a $7,304 average Louisiana homeowner premium, third-highest in the country",
     "Hospitals and health care — restore cut coverage before more of the 33 at-risk rural hospitals close; Medicare drug-price negotiation"],
    ["Former Tensas Parish police juror — Louisiana's equivalent of a county commissioner — and a member of the Democratic State Central Committee",
     "Third-generation Delta crop farmer, about 3,200 acres of sorghum, corn, soy and cotton",
     "The first Black candidate to advance to a general election for a Louisiana U.S. Senate seat since Reconstruction",
     "$1,983,548 raised, $479,104 on hand, average donation $18, no corporate PACs (FEC, through June 30, 2026)"],
    ["He consolidated the Democratic field decisively — 47.4% then 79.9% — and carried every one of the 64 parishes, unusual reach for a rural north Louisiana Democrat",
     "A working farmer running on utility bills, home insurance and rural hospital closures is aimed at measurable Louisiana pain points, and his platform sources each figure",
     "His own campaign's poll put him within four points with 22% undecided, in a sample that self-reported the actual 2024 presidential result"],
    ["Louisiana has not elected a Democrat to the U.S. Senate since Mary Landrieu in 2008, and Trump took 60% of the state in 2024 [Verify — structural argument]",
     "He is behind roughly three to one in candidate fundraising and, more tellingly, has ZERO independent expenditure on his side against $9.25 million backing his opponent — no national Democratic group has engaged",
     "His prior office is a parish police jury seat; the Louisiana Illuminator described his primary win as a monumental leap onto the statewide stage for someone whose experience is limited to the Tensas Parish Police Jury"])])

# ─────────────────────────── DISTRICT OFFICES (informational) ───────────────────────────
race("Also on your ballot, by district — Public Service Commission, BESE, and three Supreme Court seats already decided",
 "State · District offices",
 "THESE ARE DISTRICT RACES, NOT STATEWIDE ONES, so they are named here rather than carded — only some parishes vote in each. ⚠⚠ THE THREE LOUISIANA SUPREME COURT SEATS WILL NOT APPEAR ON ANY BALLOT. Each drew exactly one qualified candidate, and Louisiana law declares such candidates elected without their names appearing at all: District 1 William 'Billy' Burris (R), who won a May 16 special primary 57.7% and took office June 17, 2026; District 3 Cade R. Cole (R), incumbent, a full ten-year term to 2036; District 4 Jay B. McCallum (R), incumbent. ⚠ PUBLIC SERVICE COMMISSION — two of five seats, BOTH OPEN because both incumbents are term-limited. The commission sets electricity rates and approves power plants, and the winners inherit the fight over who pays for AI data-centre load. ⚠ Louisiana, unlike several states with elected regulators, PERMITS PSC candidates to take money from the companies they would regulate. District 1 (10 southeastern parishes, replacing Eric Skrmetta): Stephanie Hilferty (R, state representative, won the runoff 62.5%), Connie Norris (D, retired educator, funded by a single $20,000 personal loan and no outside money) and Christopher 'Chris' Justin (No Party, an engineer who worked on contract for the PSC itself and pledges to take no utility money). District 5 (24 north Louisiana parishes, replacing Foster Campbell after a 50-year career): John E. Atkins (R, Caddo Parish commissioner and former energy consultant, won his primary 88.4% and refunded two utility contributions) vs. James Edward Green (D, Shreveport city councilman of 16 years and a pastor). ⚠ BESE DISTRICT 1 (St. Tammany plus parts of Tangipahoa, Orleans and Jefferson) is a SPECIAL election — regular BESE seats are on the governor's cycle, next in 2027. Gov. Landry appointed Joseph Cao (R), the former congressman, in January 2026; he won the Republican runoff 52.0–48.0 and faces Angela Hershey (D), a retired high-school science teacher, in a contest squarely about the LA GATOR education-savings programme. ⚠ Candidate cards are deliberately not shown for district races on this statewide page; check your own parish's sample ballot, published no later than 20 days before the election.")

# ─────────────────────────── CONSTITUTIONAL AMENDMENTS ───────────────────────────
AMENDMENTS = [
 (1, "Act 39 (2026 RS)",
  "Do you support an amendment to allow the surviving spouse of a deceased veteran with a service-connected disability, who receives the additional property tax exemption, to make a one-time transfer of the additional property tax exemption to a subsequent qualifying property?",
  "Effective Jan 1, 2027. Amends Article VII, Section 21(K)(1)."),
 (2, "Act 273 (2026 RS)",
  "Do you support an amendment to allow a local taxing authority to continue to levy a lower millage rate without losing its ability to adjust to the maximum authorized millage rate from a prior year's reassessment?",
  "Effective Jan 1, 2027. Amends Article VII, Section 23(C)."),
 (3, "Act 271 (2026 RS)",
  "Do you support an amendment to prohibit a defendant from being released on any post-conviction bail if the defendant is convicted of an aggravated offense against a minor child?",
  "Adds Article I, Section 18(C)."),
 (4, "Act 414 (2026 RS)",
  "Do you support an amendment to prohibit a person who has served more than one and one-half terms as governor from being elected as governor for any future term?",
  "A LIFETIME gubernatorial term limit. Amends Article IV, Section 3(B)."),
 (5, "Act 606 (2026 RS)",
  "Do you support an amendment to authorize a state retirement system to apply any nonrecurring state monies it receives to any of its unfunded accrued liability rather than requiring application to its oldest unfunded accrued liability?",
  "Amends Article VII, Section 10(D)(2)(b)(iii)."),
 (6, "Act 274 (2026 RS)",
  "Do you support an amendment to authorize parishes and municipalities to extend an additional property tax exemption for property subject to the homestead exemption that is owned and occupied by a person who is at least sixty-five years of age and who qualifies for the special assessment level?",
  "Effective Jan 1, 2028. Adds Article VII, Section 21(P). ⚠ Amendment 10 is also described by the Secretary of State as adding Article VII, Section 21(P) — that is what the state's own document says for each, verbatim. If both pass, expect a drafting question."),
 (7, "Act 607 (2026 RS)",
  "Do you support an amendment to allow for the use of public funds by a political subdivision for the purpose of identifying, inventorying, removing or replacing drinking water utility service lines made of or affected by materials as specified or prescribed by the Lead and Copper Rule Improvements of the United States Environmental Protection Agency, promulgated October 30, 2024, or subsequent promulgation, on property owned by utility customers?",
  "Amends Article VII, Section 14. In plain terms: it would let a local government spend public money replacing lead drinking-water lines that sit on private property."),
 (8, "Act 277 (2026 RS)",
  "Do you support an amendment to prohibit expropriation of property by a foreign adversary or an agent of a foreign adversary?",
  "Amends Article I, Section 4(B)(4)."),
 (9, "Act 220 of the 2025 Regular Session",
  "Do you support an amendment to increase the maximum amount of income a person may receive and still qualify for the special assessment level for residential property receiving the homestead exemption?",
  "Effective Jan 1, 2027. Amends Article VII, Section 18(G)(1)(a)(ii). ⚠ Note the session: this one was queued a YEAR earlier than the other nine."),
 (10, "Act 272 (2026 RS)",
  "Do you support an amendment to allow property tax exemptions for blighted or derelict properties that have been rehabilitated, and to require the legislature to enact laws providing for administration of these exemptions?",
  "Effective Jan 1, 2027. Adds Article VII, Section 21(P) — see the note on Amendment 6."),
]

CONTEXT = ("⚠ CONTEXT WORTH KNOWING BEFORE YOU VOTE: all FIVE constitutional amendments on Louisiana's "
           "May 16, 2026 ballot FAILED, several by lopsided margins — 78% no on the unclassified civil "
           "service amendment and 77% no on raising the judicial retirement age. Turnout was 831,886 of "
           "2,966,014 registered voters. SIX of these ten are property-tax measures, the same category "
           "voters rejected in May. ")

for num, act, question, effect in AMENDMENTS:
    race("Constitutional Amendment %d — %s" % (num, act),
         "State · Statewide · Ballot Measure",
         "OFFICIAL BALLOT QUESTION, QUOTED VERBATIM from the Secretary of State's own "
         "“2026 Proposed Constitutional Amendments” document: “%s” %s %s"
         "⚠ Ten amendments are on the Nov 3 ballot and NONE is on the Dec 12 ballot. "
         "This page deliberately does not card a Yes and No campaign for each measure: no organised "
         "campaign for or against most of these ten could be located, and inventing one would be worse "
         "than saying so [Verify — read the full text at sos.la.gov before voting]."
         % (question, effect, CONTEXT if num == 1 else ""))


def render(path):
    j = lambda x: json.dumps(x, ensure_ascii=False)
    out = HEADER.rstrip("\n") + "\nconst STATEWIDE = [\n"
    blocks = []
    for r in RACES:
        s  = '  { date: "Nov 3, 2026", type: "upcoming", scope: %s, office: %s,\n' % (j(r["scope"]), j(r["office"]))
        s += '    note: %s,\n' % j(r["note"])
        if not r["candidates"]:
            s += '    candidates: [] }'
        else:
            s += '    candidates: [\n'
            cards = []
            for cd in r["candidates"]:
                t  = '      { name: %s, party: %s, winner: false,\n' % (j(cd["name"]), j(cd["party"]))
                t += '        positions: [%s],\n'       % ",".join(j(x) for x in cd["positions"])
                t += '        differentiators: [%s],\n' % ",".join(j(x) for x in cd["differentiators"])
                t += '        supporters: [%s],\n'      % ",".join(j(x) for x in cd["supporters"])
                t += '        opponents: [%s] }'        % ",".join(j(x) for x in cd["opponents"])
                cards.append(t)
            s += ",\n".join(cards) + "\n    ] }"
        blocks.append(s)
    out += ",\n\n".join(blocks) + "\n];\n"
    io.open(path, "w", encoding="utf-8", newline="\r\n").write(out)
    print("wrote", len(RACES), "statewide races ->", path)

render("statewide.js")
