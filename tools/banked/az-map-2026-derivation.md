# Arizona county->district map — derived and proved Aug 27, 2026

## CURRENCY: no 2026 redraw. The 2022 AIRC map (v14.0) governs Nov 3, 2026.
DECISIVE EVENT: Aug 11, 2026 — AZ Senate President Warren Petersen PUBLICLY ABANDONED the
post-Callais plan to sue: "the lines would be very similar so a lawsuit probably wouldn't
make much sense." No suit was ever filed, so the court order the AIRC would need to
self-convene never existed. (KJZZ, Aug 11 2026)
AIRC's own site: the 2021 Commission "will complete its work on June 28, 2024. After this
time the IRC Office will be closed. A new Commission will be appointed in January 2031."
=> Census CD119 geography IS the 2026 geography for Arizona.
⚠ CORRECTION TO OUR BRIEF: the AIRC domain is **irc.az.gov**. `redistricting.az.gov` does
NOT resolve (DNS failure). Fix this lead.

## CURRENCY TEST: 15 of 15 counties agree, 0 disagree
Source is better than election returns — the AZ SoS's own
"State of Arizona Registration Report — 2026 Primary Election, July 21, 2026"
enumerates every CD broken down BY COUNTY, i.e. the map actually used to build the
July 21 ballots. All 30 county-district pairs match the Census CD119 relationship file.
  CD1 Maricopa
  CD2 Apache, Coconino, Gila, Graham, Maricopa, Mohave, Navajo, Pinal, Yavapai
  CD3 Maricopa
  CD4 Maricopa
  CD5 Maricopa, Pinal
  CD6 Cochise, Graham, Greenlee, Pima, Pinal
  CD7 Cochise, Maricopa, Pima, Pinal, Santa Cruz, Yuma
  CD8 Maricopa
  CD9 La Paz, Maricopa, Mohave, Yuma

## THREE TRAPS
1. PIMA'S PLURALITY IS CD6, NOT CD7. CD7 holds 80.6% of Pima's LAND but only 45.2% of its
   PEOPLE. Population CD6 571,618 vs CD7 471,815. Confirmed independently by 2026
   registered voters (CD6 397,061 vs CD7 249,129). The area-vs-population trap, live.
2. MARICOPA TOUCHES CD2 — small (3,583 people, 6 precincts, 1,361 registered voters) but
   real, confirmed by two independent official sources. Maricopa ds = all 8 except CD6.
3. FIPS 04010 DOES NOT EXIST. Greenlee is 04011, La Paz is 04012 (created 1983).

## MARICOPA'S `d` IS THE ONE INDETERMINATE CELL — documented, not hidden
CD1, CD3, CD4, CD8 lie ENTIRELY inside Maricopa, so by 2020 census they are a four-way
statistical tie: CD3 794,612 / CD1 794,611 / CD4 794,611 / CD8 794,610.
Strict census plurality would be CD3 BY ONE PERSON — pure noise.
By the SoS's own 2026 registered-voter count CD1 leads decisively:
CD1 508,843 / CD8 469,434 / CD4 416,152 / CD3 330,170.
DECISION: d = 1, on the 2026 registration figures. Stable and meaningful; a 1-person
census margin is not. `d` only drives map shading — every district is carried in `ds`.

## PLURALITY OF NO COUNTY: CD3, CD4, CD5, CD8
Reachable ONLY through Maricopa's ds (all four) and Pinal's ds (CD5). This is lesson #12
live: without ds, a Phoenix voter would never see their own House race.
CD5 is never a plurality anywhere — loses Maricopa (636,747) to the four in-county
districts and loses Pinal (157,865) to CD2 (177,463).

## POPULATION CHECK: deviation +/-1 person
AZ 2020 pop 7,151,502 / 9 = ideal 794,611.33. Range across all 9 districts = 2 people
(0.00025%). Every district's county parts sum exactly to its total; all nine sum exactly
to the state population.

## SOURCES THAT WORKED
- apps.azsos.gov/election/VoterReg/2026/State-Voter-Registration_July_2026.pdf  <-- BEST
  (linked from azsos.gov/elections/election-information/voter-registration-statistics)
- www2.census.gov/geo/docs/maps-data/data/rel2020/cd-sld/tab20_cd11920_county20_st04.txt
- MCDC Geocorr 2022, county->cd119 POPULATION. Working URL needs state=Az04 (NOT 04).
- irc.az.gov ; KJZZ Apr 30 + Aug 11 2026 ; 12News

## DEAD ENDS — do not repeat
- redistricting.az.gov DOES NOT RESOLVE. Use irc.az.gov. Its /maps/2021-maps/... 404s.
- CENSUS API IS FULLY KEY-GATED — both cd119 AND plain 2020/dec/pl 302 to missing_key.html.
  Keyless Census API is dead entirely, not just cd119.
- Geocorr broker fails silently 3 ways: state=04 -> SAS error (needs `Az04`); empty
  latitude/longitude/distance/kiloms -> %EVAL macro error (pass 0); checkboxes need =1
  not =on, and sort2/afacts2 must be OMITTED not sent empty. Errors hide in the SAS log.
- results.arizona.vote IS BEHIND CLOUDFLARE JS — 403 to curl with browser UA, 403 to
  WebFetch, /api/ 403s too. Unreachable. Use the registration report instead.
- azsos.gov's 403 is UA-BASED ONLY — a browser User-Agent gets a clean 200. Not a hard block.
- County election sites near-useless: pinal.gov login wall; cochise.az.gov + mohave.gov 404;
  yumacountyaz.gov + graham.az.gov 403; pima.gov + elections.maricopa.gov JS-only shells.
- axios.com 403s WebFetch.
# AZ statewide part 2 + ballot measures — researched Aug 27, 2026

## KEY CORRECTION TO OUR OWN BRIEF
John Lopez IV is **VICE Chief Justice**, NOT Chief Justice. Ann Timmer has been
Chief Justice since July 1, 2024 (term to June 30, 2029). Lopez became Vice Chief
the same date. ONE Supreme Court justice is up for retention in 2026: Lopez.

## BALLOT MEASURES — FIELD IS FINAL: 8 measures, ALL legislative referrals
10 referrals + 1 initiative -> 8. NO citizen initiative on the 2026 AZ ballot.
- Prop 143 STRUCK (Judge Greg Como, late Jul 2026, separate-amendment rule; GOP did NOT appeal)
- Prop 145 STRUCK (Judge Joseph Kreamer, late Jul 2026, separate-amendment rule)
- Prop 212 / Protect Education Act OFF: AZ Supreme Court rejected ballot description Aug 14,
  then Aug 18, 2026 held it short of the 255,949 valid signatures. Sponsors conceded.
- Prop 144 SURVIVED two challenges (Aug 19: Supreme Court, petitioners lacked standing)
- Props 142 and 318 challenged and UPHELD (Maricopa Superior Court)
Confirmed at azsos.gov/elections/ballot-measures (browser UA) Aug 27, 2026.
2026 Publicity Pamphlet NOT yet published; For/Against argument PDFs ARE posted.

ON THE BALLOT: 141 (vehicle-miles tax ban), 142 (bar preferential treatment/DEI),
144 (election requirements/voter ID incl. mail), 316 (cap municipal grocery tax at 2%),
317 (declare cartels terrorist orgs), 318 (student athletics/private spaces),
319 (ban photo enforcement), 320 (school district 60% classroom spending mandate)

## OFFICES
TREASURER — OPEN (Yee term-limited, ran for Supt). Nick Mansour (D) v Elijah Norton (R).
  Primary: Norton 54.4%/219,838 def Katherine Haley 45.6%/184,010. Mansour unopposed 484,646.
  Norton CoH $1,055,876.21 as of 6/30/2025 (largely self-funding). Mansour CoH $233,310 6/30/2025.
  Polls close: HighGround Aug 15-18 Mansour 41.8/Norton 39.0; Grayhouse Aug 9-11 Norton 41/Mansour 39.
  No Democrat has won this office since 1964. Norton settled a 2022 defamation suit for $50,000.
SUPERINTENDENT — OPEN, incumbent Tom Horne LOST primary. Teresa Leyba Ruiz (D) v Kimberly Yee (R)
  + Gerard Davis (G, write-in) + Stephen Neal Jr (No Labels, write-in).
  Primary: Yee 53.3%/317,711 def Horne 46.7%/278,716. Leyba Ruiz 79.8%/298,445 def Newby 20.2%/75,698.
  Yee CoH $245,613.43 6/30/26. Leyba Ruiz CoH $146,232.24 6/30/26.
  Yee ran to Horne's RIGHT on ESA regulation, backed by legislature's Freedom Caucus.
  Yee's own campaign site NOT retrieved -> her planks are [Verify].
MINE INSPECTOR — incumbent Les Presmyk (R) v Brian Matlock (D). Both unopposed in primary
  (Presmyk 523,952; Matlock 478,820). AZ is the ONLY state that elects a mine inspector.
  Presmyk APPOINTED by Gov. Hobbs (D) Sept 12, 2025 after Paul Marsh resigned - a D governor
  picking from 7 R applicants. 44+ yrs AZ mining; Gilbert Town Council 1999-2011.
  Presmyk platform NOT located [Verify]. Matlock: restore newsletters (last Mar 2024),
  more state inspection as MSHA thins, secure 100,000+ abandoned mines. CoH both [Verify].
CORPORATION COMMISSION — 2 of 5 seats, statewide at-large, VOTE FOR TWO, 6-yr terms.
  All 5 current members are Republicans.
  Ballot: Kevin Thompson (R, inc), Ralph Heap (R), Clara Pratte (D), Jonathon Hill (D), Mike Cease (G).
  Primary R: Thompson 35.8%/325,029, Heap 33.0%/299,319 DEFEATED incumbent Nick Myers 31.2%/283,126.
  Primary D: Pratte 53.4%/431,593, Hill 46.6%/377,169. G: Cease write-in 213 votes.
  Heap recruited by Freedom Caucus chair Sen. Jake Hoffman. Heap CoH only $899 as of 9/30/2025 [Verify].
  Pratte is Dine, co-founder Navajo Power, grew up in Tse Si'ani without running water/electricity.
  Hill: ASU researcher, PhD geological sciences. Pratte+Hill run as a JOINT TICKET.
JUDICIAL RETENTION — Justice John R. Lopez IV only. Ducey appointee 2016, retained 2020,
  term expires Jan 4, 2027. Authored 4-2 majority in Planned Parenthood Arizona v. Mayes
  (Apr 2024) holding the 1864 near-total abortion ban enforceable.
  AZ justices historically average ~73% yes; 2022 one fell to 56%, 2024 neither cleared 60%.
  2026 JPR rating NOT yet public (posts Sept 2026) [Verify]. No organized 2026 anti-retention
  campaign against Lopez located.
  Also on ballots but NOT statewide: 16 of 28 Court of Appeals, 72 of 183 Superior Court judges
  in Maricopa (54), Pima, Pinal, Coconino (2).

## COULD NOT CONFIRM
Yee's own site planks; Presmyk platform; current CoH for Norton/Mansour/Presmyk/Matlock/
Pratte/Hill/Thompson/Heap (seethemoney report links are GUID-based, not indexable);
2026 JPR rating for Lopez; Publicity Pamphlet (does not exist yet).
ACCESS: azsos.gov WORKS with a browser User-Agent (403 to plain fetch).
Ballotpedia: WebFetch returns empty, curl works.
