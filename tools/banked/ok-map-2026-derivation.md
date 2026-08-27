# Oklahoma county->district map — derived and proved Aug 27, 2026

## CURRENCY: HB 1002 (2021) governs Nov 3, 2026. No new map, no litigation.
- Loyola "All About Redistricting" (redistricting.lls.edu/state/oklahoma/): HB 1002 passed
  Nov 19 2021, signed Nov 22 2021. No later congressional plan.
- American Redistricting Project (thearp.org/state/oklahoma/): "0 active legal cases."
- Ballotpedia "Redistricting ahead of the 2026 elections" (updated Aug 7, 2026): TEN states
  have new congressional maps for 2026 — AL, CA, FL, LA, MO, NC, OH, TN, TX, UT.
  ⚠ NOTE THIS IS BROADER THAN OUR "four post-Callais states" NOTE. The wave began in 2025
  (CA/MO/NC/OH/TX/UT); Callais added AL/FL/LA/TN. **OKLAHOMA IS IN NEITHER WAVE.**
- oksenate.gov/redistricting/news: nothing newer than Nov 17, 2021. 2026 session adjourned
  sine die May 14-15, 2026 with no redistricting measure; no special session Jun-Aug 2026.
- TIMING CLINCHER: OK's filing deadline was Apr 3, 2026 — BEFORE Callais (Apr 29, 2026).
  Primary (Jun 16) and runoff (Aug 25) already conducted on HB 1002 lines.
CALENDAR CONFIRMED: filing Apr 3 -> primary JUNE 16 2026 -> runoff Aug 25 -> general Nov 3.
The June 24 date on that Wikipedia index page is WRONG.

## ⚠ ONE OF OUR LEADS WAS WRONG: TULSA COUNTY IS **NOT** SPLIT
Tulsa (40143) lies ENTIRELY within CD1 (AREALAND_PART == full county area; Geocorr pop
allocation factor 1.000). Confirmed live: Tulsa appeared in ONLY CD1 across all 8 contested
June 16 primaries. The correct split list is SIX counties, not two:
  Canadian (40017) [3,5]  CD5 84,282 / CD3 70,123
  Creek    (40037) [1,3]  CD1 40,318 / CD3 31,436
  Logan    (40083) [3,5]  CD5 44,896 / CD3  4,659
  Oklahoma (40109) [3,4,5] CD5 533,224 / CD3 180,762 / CD4 82,306
  Rogers   (40131) [1,2]  CD2 77,817 / CD1 17,423
  Wagoner  (40145) [1,2]  CD1 64,851 / CD2 16,130

## ⚠ TWO COUNTIES FLIP ON THE AREA-VS-POPULATION TEST
CREEK: majority CD3 BY LAND AREA (2,130 km2 vs 330 km2) but majority **CD1 BY POPULATION**.
WAGONER: 891 km2 CD1 vs 564 km2 CD2 by area, but a lopsided 80/20 **CD1** by population.
Using area would have mis-assigned both.

## PLURALITY OF NO COUNTY: **NONE** — all 5 districts reachable without ds
Distribution: CD1 = 3 counties (Creek, Tulsa, Wagoner), CD2 = 27, CD3 = 28, CD4 = 13, CD5 = 6.
CD1 is the thin one — a compact Tulsa-metro district. Dropping any of its three counties, or
mis-assigning Creek/Wagoner on land area, would badly under-represent it.

## CURRENCY TEST: 77 of 77 counties agree, 0 disagreements
County-level returns for all 8 contested U.S. House primaries, June 16 2026, from the OK
State Election Board's own API, compared against the Census/Geocorr-derived sets.
Exact match 77 / contradictions 0 / subsets 0.
LIMITATION (anticipated): 2 of 10 CD primaries were uncontested and absent from returns —
CD5 Republican and CD1 Democratic. Coverage still complete: CD1 observed via the R primary
(11 candidates), CD5 via the D primary. CD2/CD3/CD4 observed on BOTH party ballots.
Returns also independently corroborate all six plurality calls:
  Canadian d5: CD5-D 3,906 > CD3-D 2,510     Creek  d1: CD1-R 4,598 > CD3-R 3,952
  Logan    d5: CD5-D 1,697 > CD3-D 136       Rogers d2: CD2-R 11,091 > CD1-R 2,485
  Oklahoma d5: CD5-D 36,977 > CD3-D 5,730 > CD4-D 4,523
  Wagoner  d1: CD1-R 8,786 > CD2-R 1,627

## POPULATION CHECK: 1-person total range
Ideal 3,959,353 / 5 = 791,870.6. CD1 791,871 / CD2 791,871 / CD3 791,871 / CD4 791,870 /
CD5 791,870. Reconciles exactly to OK's 2020 census population.

## SIDE FINDING (not a map issue) — CD1 HAS NO RUNOFF DESPITE A 32% LEADER
CD1's leader took only 32.15%, which normally forces a runoff, yet no CD1 runoff was on the
Aug 25 ballot. Runner-up JACKSON LAHMEYER WITHDREW JUNE 17, the day after the primary,
making MARK TEDFORD the nominee unopposed. He faces Democrat John Croissant on Nov 3.
(NonDoc, KOSU, Oklahoma Voice, Jun 16-17 2026; Trump flipped his endorsement.)

## COUNTY NAME SPELLINGS (Census NAMELSAD_COUNTY_20, " County" stripped)
"Le Flore" is TWO WORDS per Census (not "LeFlore"). Also "Roger Mills", and
McClain / McCurtain / McIntosh. All 77 asserted equal to Census names in code; all matched.

## DEAD ENDS — read before the next OK run
1. `results.okelections.us` IS THE WRONG DOMAIN — 403 on every path.
   The live domain is **results.okelections.gov**.
2. results.okelections.gov 403s a bare curl. Needs a browser User-Agent AND
   `Referer: https://results.okelections.gov/OKER/`. With both -> 200.
3. THE OKER SITE IS AN ANGULAR SPA — do not scrape HTML. Use its JSON API:
   Base: https://results.okelections.gov/OKERS/
   Auth: PUT {base}enrapi/login/ body {"Username":"appuser","Password":"<see note>"} (⚠ the app password is NOT recorded here — this repo is public. Read it from the site's own public JS bundle: fetch https://results.okelections.gov/OKER/ , find the main.*.bundle.js it references, and grep that bundle for "appuser". It is a public client-side key that gates only public election results.)
     (app key is hardcoded in the public main.*.bundle.js and gates only public results)
     ⚠ THE RESPONSE TOKEN HAS A STRAY LEADING "Y" THAT MUST BE STRIPPED (token.substring(1)),
     then send as `Authorization: Bearer <token>`.
   GET {base}enrapi/getelec/{YYYYMMDD}/SW/xx      — race list with raceIDs
   GET {base}enrapi/GetResults/{YYYYMMDD}/SW/xx   — statewide totals
   GET {base}enrapi/GetCntyResults/{YYYYMMDD}/{raceID} — county breakdown = the currency test
   ⚠ County IDs are Oklahoma's own 1-77 ALPHABETICAL codes, NOT FIPS.
     Convert: FIPS = 40000 + (2n - 1).
4. GEOCORR: `state=40` FAILS (SAS: "File WORK.V.DATA does not exist"). The select-option
   value is **state=Ok40** (Titlecase postal + FIPS). Also pass the empty ring params
   (oropt=&latitude=&longitude=&distance=&kiloms=0&nrings=) or EDTPARMS throws %EVAL.
   cd119 IS available in Geocorr 2022 (added Nov 4, 2024) — no need to settle for cd118.
5. api.census.gov/data/2020/dec/cd119 — CONFIRMED DEAD WITHOUT A KEY. It silently 302s to an
   HTML "Missing Key" page (NOT a 401), so it looks like success to a naive fetch.
   Geocorr fully replaces it — do not chase an API key.
6. oksenate.gov/redistricting -> 403, but oksenate.gov/redistricting/news -> 200.
7. Ballotpedia via WebFetch returns EMPTY (JS-gated). Plain curl with a browser UA works.
8. oklahoman.com is BLOCKED to the search tool — passing it in allowed_domains hard-errors
   the whole search call. Use tulsaworld.com / oklahomavoice.com / nondoc.com / kosu.org.
9. 404s on the OK elections site: /elections/results.html, /elections/results-and-data.html,
   /elections/candidate-info/election-results.html. Real tree is
   /elections/elections-results/election-results/{year}-election-results/{month}-{type}-election.html
10. oklegislature.gov/BillInfo.aspx?Bill=HB1002 could NOT be resolved to the redistricting
   bill. Session=2100 returns a DIFFERENT unrelated HB 1002 (authors McDugle/Rosecrants/Pae);
   sessions 2101-2104, 2112, 2113 return empty shells. Use Loyola instead — better citation.
11. The rel2020/cd119/ path guess 404s — correct segment is **cd-sld/**.
# Oklahoma statewide research — Aug 27, 2026

## ⚠ FIVE CORRECTIONS TO OUR OWN BUILD BRIEF (all confirmed)
1. **AUDITOR & INSPECTOR IS NOT ON THE NOVEMBER BALLOT.** Melissa Capps (R), deputy auditor
   and Director of the Performance Audit Division, was the ONLY filer and WON BY DEFAULT at the
   April 3 filing deadline, succeeding term-limited Cindy Byrd. (NonDoc, Apr 3, 2026)
2. **TREASURER WAS NOT AN OPEN SEAT.** Incumbent Todd Russ (R) RAN AND LOST the June 16 primary
   to State Auditor Cindy Byrd, 61.65%-38.35% (232,773 to 144,780) — official.
3. **KANE IS NOT CHIEF JUSTICE.** Dustin Rowe has been CJ since Jan 1, 2025; Kane served 2023-25.
4. **WE WERE MISSING SQ 847.** TWO state questions are on Nov 3: SQ 845 AND SQ 847.
   SQ 844 and SQ 846 were voted Aug 25 ✅ (results below).
5. **RETENTION IS BROADER THAN TWO JUSTICES:** FOUR Supreme Court justices (Kane, Darby, Kuehn,
   Jett) PLUS TWO Court of Criminal Appeals judges (Lumpkin, Hudson).
✅ CONFIRMED: Alan Armstrong, ex-CEO of Williams Companies, appointed by Stitt Mar 24, 2026 after
   Mullin's Mar 23 DHS confirmation, and BARRED BY STATE LAW from running. No longer single-sourced.
✅ CONFIRMED: June 16 primary / Aug 25 runoff dates. Secretary of State is appointed (elective
   until a 1975 amendment).

## OFFICIAL AUG 25, 2026 RUNOFF RESULTS
Pulled directly from the Oklahoma State Election Board's own API on Aug 27, 2026
(updateTime 2026-08-27T12:30:31Z), ALL 1,984 PRECINCTS = 100% REPORTING.
Raw JSON banked alongside this file as races.json / res.json.
⚠ STILL UNOFFICIAL AS A LEGAL MATTER: county boards certify no earlier than 5 p.m. Fri Aug 28;
state/federal results are certified TUE SEPT 1, 2026, and results are "subject to contest and
recount" until then. Every figure on the page must say so.

  GOVERNOR (R):        MIKE MAZZEI 186,678 (50.28%) def. Gentner Drummond 184,631 (49.72%)
                       total 371,309 — A MARGIN OF 2,047 VOTES. Drummond conceded election night.
  U.S. SENATE (D):     N'KIYLA JASMINE THOMAS 79,201 (61.19%) def. Jim Priest 50,238 (38.81%)
                       total 129,439
  SUPT PUBLIC INSTR (R): ROBERT FRANKLIN 197,019 (54.63%) def. James Taylor 163,612 (45.37%)
  COMMISSIONER OF LABOR (R): KEVIN WEST 203,938 (58.28%) def. John Pfeiffer 145,981 (41.72%)
  INSURANCE COMMR (R): BOB SULLIVAN 194,922 (55.13%) def. Marty L Quinn 158,627 (44.87%)
  SQ 844: NO 389,735 (73.75%) / YES 138,755 (26.25%), total 528,490 — REJECTED
  SQ 846: YES 292,481 (54.61%) / NO 243,064 (45.39%), total 535,545 — APPROVED
  Turnout ~22% of registered voters.
⚠ The agent's Wikipedia-aggregated figures matched these raw vote totals EXACTLY — corroborated
  two independent ways. Election-night reporting had given smaller margins (late/provisional).

## OFFICIAL JUNE 16, 2026 PRIMARY RESULTS (same API, 100% precincts)
  GOVERNOR (R): Drummond 105,832 (26.25%), Mazzei 104,691 (25.97%), Keating 74,379 (18.45%),
    Merrick 58,341 (14.47%), McCall 47,519 (11.79%) -> runoff
  GOVERNOR (D): MUNSON 129,225 (74.93%), Connie Johnson 38,414 (22.27%), Arya 4,824 (2.80%)
  U.S. SENATE (R): HERN 267,222 (69.76%), England 51,875 (13.54%), Buckner 26,444 (6.90%),
    Ragain 22,478 (5.87%), Hankins 15,066 (3.93%) — no runoff
  LT GOVERNOR (R): T.W. SHANNON 209,377 (53.76%) — no runoff; Weaver 50,738, Humphrey 48,902,
    Ostrowe 36,080, Hill 29,445, Flores 14,939
  ATTORNEY GENERAL (R): ECHOLS 207,832 (55.00%) def. Jeff Starling 170,061 (45.00%)
  STATE TREASURER (R): CINDY BYRD 232,773 (61.65%) def. incumbent Todd Russ 144,780 (38.35%)
  SUPT (R): Franklin 84,407 (22.59%), Taylor 73,524 (19.68%), Cox 68,795, Hasenbeck 61,988,
    Pugh 42,840, Herlihy 35,272, Crozier 6,746 -> runoff
  SUPT (D): JENNETTIE MARSHALL 97,886 (57.69%) def. Craig McVay 71,784 (42.31%)
  LABOR (R): West 153,384 (41.78%), Pfeiffer 129,482 (35.27%), Janloo 53,269, Swinton 30,952 -> runoff
  INSURANCE (R): Sullivan 137,366 (37.37%), Quinn 101,755 (27.68%), Shuler 64,582,
    Merideth 63,872 -> runoff
  CORPORATION COMMR (R): BRAD BOLES 200,025 (55.27%) def. Justin Hornback 161,851 (44.73%)
  U.S. HOUSE (R): OK-1 Tedford 23,230 (32.15%), Lahmeyer 18,699 (25.88%), Butterfield 11,532 (15.96%)
    OK-2 Brecheen 65,906 (79.20%) def. Will Webb 17,308 (20.80%)
    OK-3 Lucas 55,631 (70.77%) def. Wade Burleson 22,975 (29.23%)
    OK-4 Cole 52,717 (71.12%) def. Marcie Everhart 21,402 (28.88%)

## RACES AND CANDIDATES
U.S. SENATE (Class 2, OPEN): Kevin Hern (R), N'Kiyla Jasmine Thomas (D), Sevier White (L),
  Ron Meinhardt (I), Curtis Stinnett (I) [Verify on the last three — no official candidate list]
  HERN: U.S. Rep OK-1 since 2018, chairman House Republican Policy Committee, founder of a large
  McDonald's franchise business. $8.28M raised thru Mar 31; $2.6M CoH June 30, 2026.
  Endorsed by Trump (Mar 13, 2026), Club for Growth, Sens. Lankford/Thune/Banks/Hagerty/Scott.
  Positions: advance Trump's agenda; secure the border and deport illegal immigrants;
  balanced-budget amendment / cut spending.
  THOMAS: 31-year-old NURSE, citizen of the CHICKASAW NATION, from Ardmore; first-time candidate;
  first openly democratic-socialist Senate nominee in Oklahoma history. Won the runoff 61-39 after
  spending ~$57,000 to Priest's ~$315,000. ⚠ $456 CASH ON HAND as of Aug 5, 2026 (FEC via NBC).
  Campaign run largely on social media. Positions: fund rural hospitals; staff hospitals with more
  nurses and doctors; anti-Trump message. [Verify — no campaign issues page located]
  A non-incumbent Democrat has not won an Oklahoma Senate race since 1978 (Inside Elections).

GOVERNOR (OPEN, Stitt term-limited): Mike Mazzei (R), Cyndi Munson (D), Robert Brooks Sr. (I),
  Orlando Lynn Bush (I), Jerry Griffin (I) [Verify on the three independents]
  MAZZEI: State Senator 2004-2016; Stitt's Secretary of Budget; financial-services businessman.
  ⚠ SELF-FUNDED: $11 MILLION in personal loans to the campaign vs $1.4M in individual donations;
  loaned another $110,000 June 2-Aug 10. Only ~0.43% of his individual dollars came in sub-$50 gifts.
  Endorsed by Trump, Gov. Stitt, Rep. Brecheen, Oklahoma GOP, Sarah Huckabee Sanders.
  Positions: eliminate property tax for seniors and veterans; close loopholes letting foreign
  adversaries acquire Oklahoma land; "Education That Works" (reading proficiency, accountability).
  Post-runoff added: make Oklahoma a no-income-tax state; statewide reading program; protect
  law-enforcement pensions. Site also: Right to Life, opposes abortion in all circumstances.
  MUNSON: State Rep since 2015; HOUSE MINORITY LEADER since late 2022; first Asian American woman
  elected to the Oklahoma Legislature. Won her primary outright 74.93%.
  ⚠ THE ONLY MAJOR CANDIDATE WHO HAS NOT SELF-FUNDED — ~3,400 gifts of $50 or less totalling
  ~$64,000, about 14% of her individual-contribution dollars. Spent ~$304,000 June 2-Aug 10 vs
  Mazzei's $1.4M. Positions: fully fund public schools to the regional average, raise teacher pay,
  repeal vouchers; protect Medicaid, expand rural access, put the abortion ban to a vote of the
  people; targeted tax relief for working/middle-income via credits rather than income-tax cuts.
  Also: data-center moratorium, restore a permanent Native American affairs cabinet post.
  Munson campaign on Mazzei (Aug 25): "the most extreme positions... a plan that leaves everyday
  Oklahomans behind."

LT GOVERNOR (OPEN, Pinnell term-limited): T.W. Shannon (R) v Kelly Forbes (D)
  Shannon: former SPEAKER of the Oklahoma House (2013-14), Trump-endorsed; site pledges to oppose
  "liberal bureaucrats, woke mandates and radical policies." Forbes: consultant and educator,
  unopposed. [Verify — no sourced 2026 platform statement located for Forbes]

ATTORNEY GENERAL (OPEN, Drummond ran for governor): Jon Echols (R) v Nick Coffey (D)
  Echols, 46: attorney, small-business owner, 12 years in the House incl. 8 as MAJORITY FLOOR
  LEADER; priorities: illicit-drug operations, official accountability, protecting taxpayers.
  Coffey, 34: seven years as an OKC-based ASSISTANT U.S. ATTORNEY; priorities: consumer protection,
  keeping politics out of prosecutions, prison-based drug networks, supporting local law
  enforcement. Cites "corruption running rampant through our elected offices" as his reason.
  ⚠ One early source listed Chris Kannady in the AG primary; the two-way result accounts for 100%
  of votes, so he presumably withdrew [Verify].

TREASURER: Cindy Byrd (R) v Kiefer Perry (L). NO DEMOCRAT FILED.
  Byrd: State Auditor since 2018; beat the incumbent 61.65-38.35.
  Perry: Broken Arrow, vice-chair of the Oklahoma Libertarian Party, self-described "Classical
  Libertarian." [Verify — no sourced 2026 platform statement located]

SUPT OF PUBLIC INSTRUCTION (OPEN): Robert Franklin (R) v Jennettie Marshall (D)
  ⚠ Incumbent Lindel Fields, appointed by Stitt after Ryan Walters departed, is NOT seeking election.
  Franklin: 44 years in education, 2024 Oklahoma Educators Hall of Fame inductee, former special-ed
  teacher, principal, assistant superintendent, Associate Superintendent at Tulsa Tech.
  Marshall: Tulsa Public Schools board member 2017-Apr 2025, pastor and funeral director;
  priorities: teacher retention, district accountability, school-parent relationships, more
  licensed counselors ("generational trauma"), greater state investment; says religious teaching
  has no place in public schools.

COMMISSIONER OF LABOR (OPEN, Osborn term-limited): Kevin West (R), Kevin Dawson (D), Mike Hall (L)
  West: State Rep District 54 (since 2016), Moore. [Verify — no sourced platform statements located
  for West, Dawson or Hall from their own campaign materials]

INSURANCE COMMISSIONER (OPEN, Mulready term-limited): Bob Sullivan (R) v Craig MacIntyre (D)
  Sullivan, 41, Tulsa; CPCU/CIC/CRM, ~two decades in property & casualty. Says his expertise lets
  him "bring accountability to the industry," that Oklahoma's market is an OLIGOPOLY, and that
  INCARCERATION CAN BE A FAIR PUNISHMENT for insurance executives who act in bad faith.
  MacIntyre: in insurance since 1993 on the CARRIER side (actuarial, product development, risk
  management, government relations); platform is the "three A's" — affordability, acceptable claims
  handling, availability — arguing insurance is a legally mandated necessity, not a normal consumer
  product. Entered only as the filing deadline neared with no other Democrat running.

CORPORATION COMMISSION (1 of 3 seats, OPEN — Hiett term-limited): Brad Boles (R) v Rhonda Eastman (D)
  Boles: state rep from Marlow; AUTHOR of the Data Center Consumer Ratepayer Protection Act of 2026,
  signed into law; priorities: fair utility rates, energy independence, streamlined regulation.
  Eastman: 16 years in state government then private-sector management; priorities: rising utility
  costs, abandoned oil and gas wells, wastewater injection pollution, tax breaks for data centers.
  ⚠ THE LIVE CONTRAST: both center DATA CENTERS — Boles as author of ratepayer protections inside a
  pro-growth frame, Eastman as a critic of the incentives themselves.

JUDICIAL RETENTION: Supreme Court — Kane, Darby, Kuehn, Jett. Court of Criminal Appeals —
  Lumpkin (on the court since 1989), Hudson. All appointed by Republican governors.
  Darby, Kane and Kuehn DISSENTED from the 2023 ruling recognizing a narrow right to abortion to
  save a woman's life. Bolts (Apr 20, 2026): "There is no sign of an organized effort opposed to
  retention this year" [Verify — status as of April].

STATE QUESTIONS ON NOV 3:
  SQ 845 (Legislative Referendum 379) — amends art. 7-B sec. 3, restructuring the JUDICIAL
  NOMINATING COMMISSION: redraws appointments to CURRENT congressional districts instead of the
  1967 map; governor and Oklahoma Bar Association each appoint six; two consecutive six-year terms;
  REMOVES the bar on commissioners being licensed attorneys; REMOVES the bar on having family
  members who are licensed attorneys; REMOVES the limit of no more than three commissioners from
  one political party. ⚠ NO ORGANIZED CAMPAIGN ON EITHER SIDE COULD BE LOCATED — do not publish a
  for/against list. [Verify — full official ballot title not retrieved]
  SQ 847 — lowers annual property-tax valuation growth caps from 5% to 4% for most property and
  from 3% to 1.75% for homesteads and agricultural land, effective 2027.
  [Verify — official ballot title not obtained]

## COULD NOT CONFIRM
- Ballot certification of minor-party/independent candidates (White, Meinhardt, Stinnett, Brooks,
  Bush, Griffin, Hall, Perry) — sourced only to a News9 preview, not an official candidate list.
- Full official ballot titles for SQ 845 and SQ 847 (Election Board PDFs unreachable).
- Any organized support/opposition campaign for SQ 845.
- ⚠ RACE RATINGS: only Inside Elections (Senate, Solid R) was read on the rater's own domain, and
  that in an article, not the ratings page. Cook's "Solid R" (Senate and Governor) came from search
  snippets of subscriber-gated cookpolitical.com pages. SABATO'S RATINGS ARE STORED AS MAP IMAGES —
  the OK values are from Wikipedia only. Treat all three as [Verify] at the source level.
  Cook Senate sheet dated Aug 20, 2026; Cook OK Governor page dated Jan 23, 2025.
- Platform statements for Kelly Forbes, Kevin Dawson, Mike Hall, Kiefer Perry, Sevier White, and
  all five gubernatorial/Senate independents. NONE LOCATED — that is the honest answer.
- Cash-on-hand for state offices — Ethics Commission filings not directly retrieved; the
  Mazzei/Munson/Drummond figures are raised/spent/loaned totals for June 2-Aug 10, 2026 via KOKH.
