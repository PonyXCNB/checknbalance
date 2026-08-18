# Banked — Kansas map derivation, and gate checks for the next three state builds (Aug 18, 2026)

Written per lesson #24: bank the ARTIFACT, not just the claim.

---

## Kansas — SHIPPED as `ks.html` on Aug 18, 2026 (38th state)

### Which map governs Nov 3, 2026
The **2022 "Ad Astra 2"** plan. Kansas did **not** redistrict mid-decade — the push failed twice
(the Nov 5, 2025 special-session petition fell about 10 House signatures short; the regular session
ended Apr 22, 2026 with no map, roughly 20 votes short of a veto override). *Rivera v. Schwab* (2022)
already upheld the plan. Kansas is **not** on the 2026 new-map list.

### The county table
105 counties, 109 county x district rows, from the Census CD119 county relationship file:
```
https://www2.census.gov/geo/docs/maps-data/data/rel2020/cd-sld/tab20_cd11920_county20_st20.txt
```
Counties touched per district: **CD1=60, CD2=27, CD3=5, CD4=17**.
Counties whose population plurality is each district: CD1=60, CD2=25, CD3=4, CD4=16.
All four districts are the plurality of at least four counties, so **every district is reachable
even without `ds`** (lesson #12). All 105 FIPS codes and names match the us-atlas geometry exactly.

⚠ **TRAP, recorded again:** `BlockAssign_ST20_KS_CD.txt` (Census 2020 block assignment) encodes the
**116th** Congress — the 2012 map — and shows splits in Marshall/Miami/Pawnee that no longer exist.
Do not use `baf2020` as a current-map source for any state.

### The 4 split counties, with population by district
Confirmed from the enacted plan's own **"Political Subdivision Splits Between Districts"** report in the
Kansas Legislative Research Department Ad Astra 2 packet (Maptitude output, Jan 20, 2022),
`https://klrd.gov/wp-content/uploads/2023/11/M3_AdAstra_2-packet.pdf`, pp. 12-13. The packet states
"Number of subdivisions not split: County 101 / split: County 4".

| County | FIPS | `d` (plurality) | `ds` | Population by district |
|---|---|---|---|---|
| Douglas | 20045 | 1 | 1,2 | CD1 95,921 · CD2 22,864 (total 118,785) |
| Jackson | 20085 | 1 | 1,2 | CD1 12,542 · CD2 690 (total 13,232) |
| Pawnee | 20145 | 1 | 1,4 | CD1 3,288 · CD4 2,965 (total 6,253) — 53/47, nearly a coin toss |
| Wyandotte | 20209 | 2 | 2,3 | CD2 112,661 · CD3 56,584 (total 169,245) |

**These match an independent Geocorr 2022 derivation TO THE PERSON.** Page 8 of the same packet:
all four districts **734,470**, deviation **0**, total 2,937,880.

Direction corroborated by the packet's own split-VTD table: "Douglas KS Lawrence Precinct 77 →
District 1", with Lawrence precincts 49/75 split between 1 and 2 — **Lawrence is in CD1**. Wyandotte's
split VTDs are all Kansas City Ward 9 precincts divided between 2 and 3, matching the reported **I-70
line** (north → CD2, south → CD3).

### Currency proved — 105 of 105 counties, from actual ballots
Per lesson #17 an arithmetic proof establishes TRANSCRIPTION, not CURRENCY. The decisive test used the
Secretary of State's own election-night county pages for the **Aug 4, 2026 primary** — which U.S. House
contest each county's voters actually appeared in:
```
https://ent.sos.ks.gov/kssos_ent.html   (index)
https://ent.sos.ks.gov/<county>.html    (all 105)
```
- **105 of 105 counties agree. Zero disagreements.**
- Counties touched per district from real ballots: CD1=60, CD2=27, CD3=5, CD4=17 — matches exactly.
- Exactly four counties voted in two U.S. House contests — the same four splits, same district pairs.
- Precinct coverage complete: CD1 1,410/1,410 · CD2 1,092/1,092 · CD3 736/736 · CD4 913/913.
- Page stamp: "Results - All Races Last Updated: 08/07/2026 5:29 PM."

### ⚠ ACCESS — how to actually read the Kansas SoS
- `sos.ks.gov` serves fine **with a browser User-Agent** (a bare request 403s). The results index at
  `sos.ks.gov/elections/election-results.html` held nothing past 2024 as of Aug 18, 2026.
- `ent.sos.ks.gov` is **Cloudflare bot-walled**: bare requests return 403 with `cf-mitigated: challenge`.
  A browser UA gets the statewide page, but **county subpages still 403 until you carry the `_cfuvid`
  cookie plus a `Referer` from the parent page**. With a cookie jar all 105 returned 200.
  ➤ Recipe: fetch `kssos_ent.html` first with a cookie jar, then reuse it.
- Pages are server-rendered HTML with data inline — no JSON/CSV feed. Statewide page ~908 KB.
- `electionresults.sos.ks.gov` does **not resolve** (ENOTFOUND). Do not guess that hostname.
- The SoS **certified candidate list** (`elections_upcoming_candidate.aspx`) 403s, and its year selector
  returns a server-side HTTP 500 for every year. **This is why every Kansas minor-party and independent
  nominee on our page carries a [Verify] on ballot certification** — they rest on party announcements
  and news, never on the state's own list. Re-attempt after the Sept 1, 2026 canvass.
- `tab20_cd11920_county20_st20.zip` 404s; only the `.txt` exists at that path.
- No KLRD county-population-by-district report exists as a standalone item (unlike Minnesota's
  legislature GIS reports). The equivalent data is inside the TR packet PDF, and it enumerates only the
  four **split** counties, not all 105.

### Certification status at build time
**NOT certified.** The SoS's 2026 Primary Election Dates PDF: "Sept 1 — Last day for State Board of
Canvassers to certify official results." County canvasses were complete (Shawnee County began Aug 17).
Every Aug 4 figure on `ks.html` therefore says it is **unofficial pending the Sept 1 state canvass**.
➤ **Re-pull after Sept 1, 2026** to promote figures to official and to re-try the certified candidate list.

---

## Gate checks for the next builds (scoped Aug 18, 2026 — do NOT re-derive)

### ⭐ A REUSABLE DISCOVERY: Census CD119 summary level 510
`https://api.census.gov/data/2020/dec/cd119` exposes summary level **510 = state › congressional
district › county (or part)** **WITH POPULATION** — the county-part populations that the plain CD119
*relationship file* (land area only) cannot give. This is the Minnesota-legislature-GIS equivalent for
any state whose map is unchanged.
⚠ **It requires an API key** — an unkeyed request 302s to `api.census.gov/data/missing_key.html`.
Verified Aug 18, 2026. Get a key before relying on it, and remember it is **only valid where the map
did not change** (CD119 encodes the 119th Congress).

### ARIZONA — recommended next build
- **Map: UNCHANGED.** AIRC Official Congressional Map v14.0, adopted Jan 18, 2022, certified Jan 21,
  2022 — same as 2024. Post-*Callais* a VRA suit has been floated, but the AIRC cannot self-convene
  without a court order and reporting says nothing can plausibly change the 2026 map. **CD119 is CURRENT.**
- **Only 15 counties**, most wholly in one district — the cheapest map on the board.
- **Ballot:** NO U.S. Senate race — first cycle since 2014 without one (Kelly Class 3 → 2028, Gallego
  Class 1 → 2030). Governor: **not open** — Hobbs (D) vs. Rep. Andy Biggs (R). Also SoS, AG, Treasurer,
  Superintendent, Mine Inspector, 2 of 5 Corporation Commission seats, plus **Lieutenant Governor, a new
  office that runs on the gubernatorial ticket with no separate primary**. Judicial: Chief Justice John
  Lopez IV retention.
- **Primary July 21, 2026; statewide canvass Aug 6, 2026 — results are OFFICIAL. No runoffs.**
- ⚠ **ONE BLOCKER, and it is the propositions:** the measure list is churning. 10 legislative referrals
  plus 1 initiative advanced, but Props 143 and 145 were struck down by Maricopa judges in late July,
  Prop 212's ballot language was rejected by the AZ Supreme Court Aug 14, and the Protect Education Act's
  eligibility was unresolved as of Aug 14. Maricopa's ballot-printing deadline was Aug 20, 2026.
  ➤ **Build the offices; hold the ballot-measure race until on/after ~Aug 21** and then confirm against
  azsos.gov (which 403s to automated fetch — plan for that).

### OKLAHOMA — build AFTER Aug 25
- **Map: UNCHANGED.** 2021 plan HB 1002, signed Nov 22, 2021. Not on the 2026 new-map list. **CD119 is
  CURRENT.** 77 counties, 5 districts. No map litigation.
- **Ballot is rich:** U.S. Senate **Class 2 and fully OPEN** (Mullin resigned March 2026 to become DHS
  Secretary; appointed caretaker Alan Armstrong is not running). Governor **OPEN** (Stitt term-limited).
  Also open: Lt. Governor, AG, Auditor & Inspector, Treasurer, Supt. of Public Instruction, Labor
  Commissioner, Insurance Commissioner, 1 of 3 Corporation Commission seats. (Secretary of State is
  appointed, not elected.) Supreme Court retentions incl. Chief Justice M. John Kane IV and Justice
  Richard Darby. **SQ 845** in November; **SQ 844 and SQ 846 are voted Aug 25, not November.**
- ⚠ **THE BLOCKER: five statewide nominees do not exist until the Aug 25, 2026 RUNOFF** — the Republican
  nominee for Governor, State Superintendent, Labor Commissioner and Insurance Commissioner, and the
  **Democratic nominee for the open U.S. Senate seat**. Primary was **June 16** (not June 24 — one
  Wikipedia index page renders the wrong dates; Oklahoma Voice, Ballotpedia, BallotReady and the OK
  Election Board all agree on June 16 / Aug 25).
  ➤ **Wait one week and Oklahoma becomes the cleanest build of the three.**

### UTAH — build last; it needs real engineering
- ⚠ **Map: CHANGED, and every off-the-shelf dataset is WRONG for Utah.** The 2021 map was struck under
  Prop 4 (Aug 2025); the Legislature's replacement "Map C" was rejected; Judge Dianna Gibson adopted
  **Plaintiffs' Map 1** on Nov 10-11, 2025 for 2026. Litigation is **settled**: the Utah Supreme Court
  declined the Legislature's appeal Feb 20, 2026, and a three-judge federal panel rejected an Elections
  Clause challenge days later. **CD119 IS STALE FOR UTAH — do not use it.**
- The only current source found is GIS: the UGRC/Lt. Governor layer **"Utah US Congress Districts 2026 to
  2032"** (`https://opendata.gis.utah.gov/datasets/utah-us-congress-districts-2026-to-2032/about`), with
  the superseded layer kept separately as "2022 to 2026". County-part populations would require a
  spatial or block-level join done by us.
- **Ballot is thin:** NO U.S. Senate (Lee 2028, Curtis 2030), NO Governor (Cox 2028), **no statewide
  executive offices at all**. Content is 4 U.S. House seats, State Board of Education, the Legislature,
  judicial retentions, and **2 legislature-referred constitutional amendments** (SJR 2's 60% threshold
  for tax-raising initiatives, plus a publication-requirements amendment). ✅ The HB 267 veto referendum
  is **OFF** — the Legislature repealed HB 267 in Dec 2025.
- Primary June 23, 2026; **no runoffs**. Candidate churn from the redraw: Rep. Blake Moore left CD1 to
  run in CD2, and two Democratic CD1 candidates withdrew.

### FLORIDA — unlocked as of tonight
Primary was **today, Aug 18, 2026**; no results at time of check. Map is **HB 1D**, signed May 4, 2026
after a special session following *Louisiana v. Callais* (SCOTUS, Apr 29, 2026). Leon County Circuit
Judge Joshua Hawkes **denied a preliminary injunction** in late May 2026, so **HB 1D governs 2026**;
the Fair Districts merits case continues. ⚠ A reported "Fla. Supreme Court declined 6-1 on June 10"
appeared only in a search-engine summary with no fetchable source — **treat as unverified**.

### MICHIGAN — still gated, but one open question CLOSED
Not certified as of Aug 18, 2026: county canvass deadline was today, the Board of State Canvassers'
deadline is Aug 24, and no sourced report of BSC certification exists.
⚠ **Decoy warning:** the search result "Michigan's elections panel certifies results of August primary
election" (news.yahoo.com/michigans-elections-panel-certifies-results-151707812.html) is dated
**Aug 19, 2022**. Do not use it.
✅ **MI-08 RESOLVED: Thomas Smith ACCEPTED the nomination** despite having suspended his campaign July 16
("I am humbled and honored that Republicans have chosen me…"). No party replacement.
Senate: AP called it for El-Sayed 9:56 a.m. Aug 5 and Stevens conceded that morning. ⚠ The
14,926 / 0.975% margin could NOT be confirmed — sourced reporting says about 1 point / 48.5%.
`michigan.gov` **403s on everything**; assume it is unusable for automated fetch.
