# Louisiana — everything needed to build the page (banked Sept 3, 2026)

Researched and proved on Sept 3, 2026 but **not built** — the run's time went to Michigan and to a
live defect on the flagship (lesson #29). Per lesson #24 this file banks the ARTIFACT, not a
description of it: the map is in `counties.js`, ready to paste; the calendar and every race are
below with sources.

**Recommended donor:** a page with the `ds` model and a similar size. `ms.html` (82 counties,
4 districts) or `ar.html` (75, 4) are the closest in shape.

⚠ **Set `"countyNoun": "parish"` in the clone config.** `tools/clone-state.js` gained that option on
Sept 3 specifically for Louisiana. Without it the page renders "Acadia County" for every parish and
says "Click any of the 64 counties". With it, all ten user-visible strings convert. Default stays
"county", so no other state is affected.

---

## 1. THE GATE — open, but the calendar is unlike any other state on the site

**Map: SB 121 = Act 2 of the 2026 Regular Session, signed May 29, 2026.** Verified directly at the
Legislature's bill page (`legis.la.gov/legis/BillInfo.aspx?s=26RS&b=SB121&sbi=y`), which reads
"Signed by the Governor. Becomes Act No. 2" and describes it as "Provides for the redistricting of
Louisiana congressional districts." No live injunction; remedial proceedings are set for
**March 2–3, 2027**, after this election.

### ⚠⚠ TWO TRACKS ON ONE BALLOT — get this right or the page misleads every Louisiana voter

| Office | Track | What Nov 3, 2026 IS |
|---|---|---|
| **U.S. House** | majority-vote "jungle" open primary | the **FIRST ROUND**. A candidate wins outright only with a MAJORITY. **Runoff Dec 12, 2026.** |
| U.S. Senate, La. Supreme Court, PSC, BESE | closed party primaries, held in spring | the **GENERAL** — and it is decided by **PLURALITY, no runoff** |

The Secretary of State's own words, read directly from
`sos.la.gov/news-events/november-3-election-qualifying-reminders`:

> "Per Act 7 of the 2026 Regular Legislative Session, U.S. Representative is not considered a closed
> party office for purposes of the November and December election cycle, and anyone planning to
> qualify must do so by either paying the qualifying fee or via nominating petition regardless of
> party."

And on the plurality rule for the closed-primary offices: *"The candidate with the greatest number of
votes in the general will be declared the winner, with no majority required. This rule only applies
to offices with a closed-party primary."*

- The SoS's official name for the date is **"November 3, 2026 – U.S. Senate General/Open U.S.
  Representative Primary/Open Primary Election."** Dec 12 is "Open U.S. Representative General/Open
  General/Special Primary (14th State Senatorial District)."
- **Correction to carry forward:** closed party primaries came from **Act 1 of the 2024 FIRST**
  Extraordinary Session (HB 17), not the Second. The SoS says so twice.
- Act 7 was signed **May 14, 2026**; it voided the May 16/June 27 House races, moved House qualifying
  to **Aug 5–7, 2026**, and cut the petition threshold to 250 signatures.
- **NEVER call Nov 3 the general election for a Louisiana House race.** With 4–10 candidates per
  district and two open seats, December runoffs are likely.

### Voter mechanics for the footer
Registration deadline **Oct 5** (in person/mail/OMV) or **Oct 13** (GeauxVote online); early voting
**Oct 20–27** excluding Sunday Oct 25, 8:30 a.m.–6 p.m.; absentee request by **Oct 30, 4:30 p.m.**;
voted absentee must be received by **Nov 2, 4:30 p.m.**; polls **6 a.m.–8 p.m.** Sample ballots post
no later than 20 days out (~Oct 14).

---

## 2. THE MAP — `counties.js` in this directory is ready to paste

64 parishes, 6 districts, 15 split parishes each split two ways. Validated three ways with zero
mismatches, including a currency test against the SoS's live Nov 3 ballots in **all 64 parishes**.
Every district is the plurality of at least one parish, so none is orphaned. Full provenance is in
the file's own header comment.

---

## 3. STATEWIDE BALLOT

### U.S. Senate — ⭐ the story is that the incumbent lost his own primary
**Bill Cassidy did not retire. He RAN and finished THIRD in the closed Republican primary on
May 16, 2026 with 99,496 votes (24.8%)**, eliminated before the runoff. Official SoS results,
3,722/3,722 precincts: Julia Letlow 179,903 (44.8%), John Fleming 113,437 (28.3%), Cassidy 99,496
(24.8%), Mark Spencer 8,338 (2.1%). **June 27 runoff:** Letlow 180,002 (56.9%) def. Fleming 136,591.
Cause: Cassidy was one of seven Senate Republicans who voted to convict Trump at the second
impeachment trial and was censured by the state party; Trump endorsed Letlow on Jan 18, 2026. He is
the first elected incumbent senator to lose renomination since Richard Lugar in 2012, and remains the
sitting senator until noon Jan 3, 2027.

**Democratic primary:** Jamie Davis 163,549 (47.4%) → **runoff** Davis 156,789 (79.9%) over Gary
Crockett, carrying **all 64 parishes**.

**Certified November field is exactly two:** Julia Letlow (R, filed 02/13/2026) and "Jamie" Davis
(D, filed 02/11/2026).

Ratings: Cook **Solid R** (Aug 20; ⚠ read at second hand — the state table is login-gated, no
Datawrapper embed exists for the Senate page), Sabato **Safe R** (read off the Aug 26 map image),
Inside Elections **Solid R** (from their own JSON feed).
Only poll: PPP, **paid for by the Davis campaign**, July 21–22, 518 RV — Letlow 41, Davis 37, 22%
undecided. No independent public poll exists.
Money (FEC, through June 30): Letlow $6,210,122 raised / $1,427,072 on hand; Davis $1,983,548 /
$479,104. Outside spending: **$9,247,706 supporting Letlow** from Accountability Project Inc. and
**$0 of independent expenditure for or against Davis** — no national Democratic group has engaged.

Full candidate detail — positions, differentiators, and sourced supporters/opponents including
Letlow's 224-transaction STOCK Act disclosure and the Campaign Legal Center's FEC complaint over a
federal contractor's $100,000 super-PAC gift — is in the agent report; re-derive from the sources
listed there before publishing any of it.

### ⚠ Louisiana Supreme Court — NOT on the ballot, all three won unopposed
Three districts appear in the SoS candidate inquiry but **each has exactly one qualified candidate**,
and Louisiana declares such candidates elected without their names appearing on the ballot
(`sos.la.gov/elections-voting/how-candidates-are-elected`). **District 1** William "Billy" Burris (R)
— won the May 16 special GOP primary 57.7%, took office **June 17, 2026**, term to 2028. **District 3**
Cade R. Cole (R), incumbent, sole qualifier, full 10-year term to 2036. **District 4** Jay B. McCallum
(R), incumbent, sole qualifier. Court composition after these: 6 R, 1 D, 1 I.
⚠ These are DISTRICT races, not statewide, so on our model they would not be carded as statewide
anyway — but the page should say plainly that all three general elections were cancelled.

### Public Service Commission — DISTRICT races, 2 of 5 seats, both OPEN
Both incumbents term-limited. The PSC sets electricity rates and approves power plants, and the 2026
winners inherit the fight over who pays for AI data-centre load (Meta's $27B Richland Parish build;
Amazon's Shreveport–Bossier hub). ⚠ **Louisiana permits PSC candidates to take money from the
companies they would regulate**, which is the axis of both races.
- **District 1** (10 SE parishes): Stephanie Hilferty (R, state rep., won the runoff 62.5%),
  Connie Norris (D, retired educator, self-funded with a single $20,000 loan and no outside money),
  Christopher "Chris" Justin (No Party, engineer who worked on contract for the PSC itself, runs
  `servicemypole.org`, pledges zero utility money). ⚠ Energy and Policy Institute found **over half
  Hilferty's contributions came from PSC-regulated entities or people tied to them.**
  ⚠ Ballotpedia and Wikipedia OMIT Justin; the SoS certified list carries him in all 10 parishes, and
  the Illuminator ran a correction for leaving him out. **Trust the SoS.**
- **District 5** (24 N. La. parishes): John E. Atkins (R, Caddo Parish commissioner, ex-McKinsey energy
  consultant, won the GOP primary 88.4%, refuses utility donations and refunded two checks) vs.
  James Edward Green (D, Shreveport city councilman 16 years and a pastor, party-endorsed, reported
  only two campaign contributions total).

### BESE — one DISTRICT seat, and it is a SPECIAL election
Regular BESE elections are on the gubernatorial cycle (next Oct 9, 2027). **District 1** is on the
2026 ballot only because Paul Hollis left for a Trump administration job and **Gov. Landry appointed
Joseph Cao**, who took office Jan 14, 2026. Cao (R) won the GOP runoff 52.0%–48.0% over Ellie
Schroder. He faces **Angela Hershey (D)**, a retired high-school science teacher from Madisonville who
was unopposed for her nomination. The contest is squarely about the **LA GATOR** education-savings
programme, of which Cao is "a very strong proponent" and Hershey a critic.

### ⭐ TEN CONSTITUTIONAL AMENDMENTS, ALL ON NOV 3 — none on Dec 12
Source: the SoS's own PDF, `sos.la.gov/media/jo2die1s/proposed-constitutional-amendments-2026-nov.pdf`.
Ballot language there is verbatim and should be quoted rather than paraphrased.
1. Act 39 — transfer a disabled veteran's surviving spouse's extra property-tax exemption to a new home
2. Act 273 — let a taxing authority levy a lower millage without losing its maximum-rate adjustment
3. Act 271 — bar post-conviction bail for an aggravated offence against a minor child
4. Act 414 — **lifetime gubernatorial term limit** after more than one and a half terms
5. Act 606 — let a retirement system apply nonrecurring state money to any unfunded liability
6. Act 274 — let parishes extend an extra homestead exemption for owners 65+
7. Act 607 — allow public funds to replace drinking-water service lines on customer-owned property
8. Act 277 — prohibit expropriation by a foreign adversary
9. **Act 220 of the 2025 RS** — raise the income cap for the special assessment level (note the earlier session)
10. Act 272 — property-tax exemptions for rehabilitated blighted or derelict property

⚠ **Amendments 6 and 10 both purport to add Article VII § 21(P)** — that is what the SoS PDF says for
each, verbatim. Worth a footnote if both pass.
⚠ **Context worth carrying:** all five May 16, 2026 amendments FAILED, several lopsidedly (77–78% no
on two). Six of these ten are property-tax measures — the same category voters just rejected.

### ✅ VERIFIED NEGATIVE — no governor or state executive officers in 2026
Three affirmative sources: the SoS's own "Offices Regularly Scheduled to be Filled" list for the
congressional cycle contains no state executive; the SoS 2027 calendar sets the Gubernatorial Primary
for Oct 9, 2027; and the SoS's statewide office list for election 344 contains no such office.

---

## 4. U.S. HOUSE — all six districts, 39 certified candidates

Full sourced detail per candidate is in the agent report. Headlines:

- **LA-01** (R+20, Solid R) — **Steve Scalise**, House Majority Leader, in office since 2008;
  $10.6M raised, $3.9M on hand. Field of 4: Lauren Jewett (D, special-education teacher, the only
  Democrat), Randall Arrington (R, repeat challenger, term-limits platform), E. "Liddy" Glass (No Party).
- **LA-02** (D+25, Solid D) — **Troy Carter**, the state's only Democratic-held seat, on Energy and
  Commerce; no Democratic opponent. Field of 5. ⚠ **Renada Collins: Ballotpedia says Democrat, the
  SoS certified list says No Party. Use the SoS.**
- **LA-03** (R+18, Solid R) — **Clay Higgins**. Field of 6 including THREE Democrats, which splits the
  opposition four ways even with the party endorsement (John Day). Priscilla Gonzalez took 19% against
  Higgins in a four-way 2024 field.
- **LA-04** (R+17, Solid R) — **Speaker Mike Johnson**, the first Louisianan ever to hold the office;
  **$20,976,864 raised, $9,613,157 on hand**, roughly 35× all four challengers combined. ⚠ Republican
  challenger **Gordon Heslop ran in THREE STATES this cycle** — lost the TX-32 primary Mar 3 and the
  MO-08 primary Aug 4, then qualified in Louisiana Aug 7, presenting a Missouri ID while claiming
  Natchitoches residence.
- **LA-05 — OPEN** (R+17, Solid R), 9 candidates. Letlow vacated it for the Senate. ⚠ **Cathey's and
  Firment's houses moved out of LA-04 into the new LA-05 under Act 2**, which is why both entered on
  Aug 5 having never planned a run. **LAGOP endorsed Misti Cordell** — a first-time candidate — in a
  closed emergency meeting of eight, and the party chairman says he personally voted against
  endorsing anyone; Echols called it "a backroom popularity contest." Echols leads on money with
  $1.08M on hand, but **$2.43M of his $2.98M raised is his own loans.**
- **LA-06 — OPEN** (R+16, **was D+8**), 10 candidates. ⭐ **The seat Callais produced.** Do NOT
  describe it as a majority-Black Baton Rouge district — it no longer is. Inside Elections calculates
  Trump would have carried the new lines by 32 points against Harris +15 in the old. Sabato lists it
  under "SAFE GOP PICKUP". **Cleo Fields is not running for Congress anywhere** — verified against the
  certified Nov 3 ballot in all 64 parishes. ⚠ **Residency is the axis:** both leading Republicans
  (Blake Miguez, Rick Edmonds) were LA-05 candidates until Act 2 moved their addresses.
  ⚠ **Trump's endorsement of Miguez was for the OLD 5th District and its status for LA-06 is
  unconfirmed [Verify].**

---

## 5. Reusable access, discovered on this research

- ⭐ **SoS certified candidate list, plain HTML with a browser UA:**
  `voterportal.sos.la.gov/CandidateInquiry/ParishCandidate/RacesInParish?electionId=<id>&parishId=<n>`
  **electionId 344 = Nov 3, 2026; 345 = Dec 12; 342 = May 16; 343 = June 27.**
  ⚠ **Parish ids run 2–65, not 1–64** (0 and 1 return "No candidates").
- ⭐ **SoS results JSON API** — the graphical site is an Angular shell, but its data layer is open:
  `voterportal.sos.la.gov/ElectionResults/ElectionResults/Data?blob=<YYYYMMDD>/<file>` with files
  `ElectionRaces.htm`, `RacesCandidates_Multiparish.htm`, `Votes_Multiparish.htm`. All return JSON
  despite the `.htm` extension. `?blob=ElectionDates.htm` lists every election id and date.
- ⭐ **SoS statewide office list** — `.../CandidateInquiry/StatewideCandidate/OfficeList?electionId=<id>`
  is the state's own affirmative list of which offices are in an election. Best single source for
  "is X on the ballot".
- **FEC:** DEMO_KEY rate-limits at 40/hour. Two workarounds, both used: the bulk downloads
  `weball26.zip` and `cn26.zip` (better data and fully citable), and a working key embedded in
  fec.gov's own page JS (`curl https://www.fec.gov/data/candidates/senate/ | grep API_KEY`).
- **Inside Elections ratings JSON**, no auth:
  `insideelections.com/wp-content/themes/inside-elections/cache/ratings_latest_{house|senate|governor}_year=2026_district=all_clean.json`
  ⚠ One fetch served a stale 86KB variant — re-fetch and check `last_updated`.
- **Sabato** values live only in the map PNG; download and read it as an image.
- **Wikipedia parsed HTML with citation metadata:** `en.wikipedia.org/api/rest_v1/page/html/<Title>`.
- ⚠ **ballotpedia.org and lailluminator.com both work fine with `curl` + a browser UA** — the empty
  body and 403 are WebFetch problems only. Ballotpedia's Candidate Connection surveys were the only
  source of stated positions for about ten Louisiana candidates.

## 6. Dead ends and traps
- `sos.la.gov/ElectionsAndVoting/...` — all 404, site restructured; live paths are `/elections-voting/...`.
- `results.sos.la.gov` does not resolve. `voterportal.sos.la.gov/static/...` is an SPA catch-all.
- `api.census.gov/data/2020/dec/pl` is **key-gated too** — the gating is NOT limited to `cd119`, and an
  unkeyed request returns HTTP 200 with a "Missing Key" HTML page, so it looks like success.
- `legis.la.gov` member listings return an empty shell; use `senate.la.gov/Senators_FullInfo` and
  `house.louisiana.gov/H_Reps/H_Reps_FullInfo`.
- **Act 7's bill number could not be confirmed** — `legis.la.gov/legis/ByAct.aspx?sid=26rs` 404s. Its
  existence and effect are quoted verbatim by the SoS in two separate documents. [Verify the number.]
- **⚠ lindsaygarcia.com belongs to an unrelated person — do not link it.** Campaign sites that do not
  exist or are placeholders: Kate Cotten ("Launching Soon"), Mike Echols (parked; mikeechols.com is a
  different person), Mike Nichols (slogan only, image-only PDFs), Oscar Dantzler, Liddy Glass,
  Lisa Ballay, Rufus Craig.
- **Troy Carter's official House "About" page still describes the PRE-Act 2 district.** Do not reuse it.
- **Cook's per-race "Key Dates" are stale** — they show the abandoned closed-primary calendar
  (filing Dec 17, 2025; primary Apr 18, 2026).
- The Illuminator's voter-guide contest pages were gutted after the May primary was cancelled.
  Capture what you need rather than relying on those URLs later.

## 7. Discrepancies to resolve at build time
1. Renada Collins' party — SoS says No Party, Ballotpedia says Democratic. **Use the SoS.**
2. Scalise's term count — the Illuminator printed both "10th" and "11th" a day apart. Say
   "in office since 2008."
3. Priscilla Gonzalez's profession — Ballotpedia "marketing director" vs. Illuminator "Lafayette attorney".
4. John Day's profession — Illuminator gave two different descriptions five months apart.
5. Conrad Cable — his own site says first-generation farmer; two outlets say fifth-generation.
6. Michael Mebruer's St. Francisville address is in **LA-05** though he runs in LA-06. Legal —
   Congress requires only state residency — but worth a line.
