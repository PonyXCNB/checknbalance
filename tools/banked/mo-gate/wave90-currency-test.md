# Missouri currency-test — Wave 90 (2026-09-29 ET)

## Status: MAP GATE CLOSED (Wave 89); currency-test FURTHER ADVANCED — still NOT closed statewide — still NO mo.html

Map which-plan unchanged: SCOTUS **26A388** stay granted Sept 25, 2026 → November uses **2022 map**. See `tools/banked/mo-gate/wave89-scotus-26A388.md`.

### New official Nov sample / publication matches (Wave 90)

Compared public Nov 3, 2026 county sample ballots / publications to banked `tools/banked/mo-cd120.json`:

| County | FIPS | Sample / guide label | mo-cd120 | Match |
|--------|------|----------------------|----------|-------|
| St. Louis City | 29510 | **U.S. REP. DISTRICT 1** (Paul Berry III / Wesley Bell / Tom Schmitz) — Board of Election Commissioners `Nov26-All-Races-Sample-Ballot.pdf` | [1] | YES |
| Cass | 29037 | **DISTRICT 4** (Alford / Herrera / Holbrook) — casscounty.com DocumentCenter Nov 2026 Sample Ballot | [4] | YES |
| Benton | 29015 | **DISTRICT 4** (Alford / Herrera / Holbrook) — bentoncomo.com Nov sample PDF | [4] | YES |
| Camden | 29029 | **DISTRICT 3** (Onder / Mann / Higgins) **and** **DISTRICT 4** (Alford / Herrera / Holbrook) — camdencountymo.gov Publication | [3, 4] | YES (split) |
| Webster | 29225 | **DISTRICT 4** + **DISTRICT 7** (Burlison / Hesketh / Craig) — webstercountymo.gov Publication | [4, 7] | YES (split) |
| Miller | 29131 | **DISTRICT 3** (Onder / Mann) — millercounty Publication | [3] | YES |
| Lawrence | 29109 | **DISTRICT 7** (Burlison / Hesketh / Craig) — lawrencecountymo.org | [7] | YES |
| Stone | 29209 | **DISTRICT 7** — stonecountyclerk.com Publication | [7] | YES |
| Taney | 29213 | **DISTRICT 7** — media.taneycounty.org sample | [7] | YES |
| Howell | 29091 | **DISTRICT 8** (Smith / Reichard / Sharpe) — howellcountymo.gov Publication | [8] | YES |
| Phelps | 29161 | **Congress 8th District** (Smith / Reichard / Sharpe Lombard) — phelpscounty.org samples | [8] | YES |
| Barry | 29009 | **DISTRICT 7** — KY3-linked Barry sample (reconfirm) | [7] | YES |

PDFs mirrored under `tools/banked/mo-build/currency-w90/`.

Prior Wave 89 matches still stand: Vernon 4, St. Francois 8, St. Charles 2+3, Cole 3, Greene/Jasper/Barry 7.

### Priority splits — status after Wave 90

| Split | Bank | Wave 90 evidence | Status |
|-------|------|------------------|--------|
| St. Louis City | [1] | Official city all-precinct sample = CD-1 only | **CLOSED** (sample) |
| St. Louis County | [1, 2] | FOX2NOW Sep 15 geography + STLPR Sep 22 + St. Louis American Sep 8 list CD-1 and CD-2 for county; **no countywide Nov publication PDF** with both labels banked this pass (lookup / FIO.pdf on site was municipal-only) | ADVANCED (guide) — need county Nov sample/FIO |
| Jackson | [4, 5, 6] | FOX2NOW: most of Jackson in CD-5, small eastern slice CD-4; KCTV5 Sep 28 KC guide lists CD-4/5/6 nominees under 2022 map; KCEB absentee notice says ballots use **2022 map**. **No public countywide sample PDF** (address lookup only) | ADVANCED (guide) — need sample styles for 4/5/6 |
| Clay | [5, 6] | Clay BEC Sep 11 notice: implementing **2022 maps** for Nov; FOX2NOW: western Clay in CD-5. **No sample PDF** with both district labels | ADVANCED (map notice + guide) — need sample |
| Webster | [4, 7] | Official publication | **CLOSED** (sample) |
| Camden | [3, 4] | Official publication | **CLOSED** (sample) |
| St. Charles | [2, 3] | Closed Wave 89 | CLOSED |
| Jefferson | [3, 8] | jeffcomo.gov still lookup-only / "no county-wide sample" | OPEN |
| Boone | [3, 4] | No stable public Nov publication grabbed this pass | OPEN |
| Warren | [2, 3] | Not re-sampled this pass | OPEN |

### Continuity / parcel (still open)

Unchanged: Brattin (Cass / Harrisonville vs MO-5), Onder (Lake St. Louis), Herrera (KC parcel vs Raymore office). Do not invent clearances. Cass sample shows Brattin is **not** on Cass ballots (Cass is whole CD-4 Alford/Herrera) — consistent with Brattin running in MO-5 under 2022 map, not Cass CD-4.

### Ballot measures (corroborated again)

St. Louis City official sample + multiple county publications show Amendments **3, 6, 7, 8** and **Proposition A**.

### Build rule

- **Still NO `mo.html`.** Currency-test not closed for St. Louis County / Jackson / Clay sample-level + remaining splits (Jefferson/Boone/Warren) + continuity/parcel.
- Keep `tools/banked/mo-cd120.json`.

### Sources

1. https://www.stlouis-mo.gov/government/departments/board-election-commissioners/documents/upload/Nov26-All-Races-Sample-Ballot.pdf
2. https://casscounty.com/DocumentCenter/View/4496/November-2026-Sample-Ballotpdf
3. https://camdencountymo.gov/wp-content/uploads/Camden-Publication-110326.pdf
4. https://webstercountymo.gov/wp-content/uploads/2026/09/Webster-Publication-110326.pdf
5. https://www.ky3.com/2026/09/28/november-2026-election-see-sample-ballots-missouri-counties-ozarks/ (index of county PDFs)
6. https://fox2now.com/news/missouri/what-missouri-congressional-district-will-you-vote-in-this-november/
7. https://www.kctv5.com/2026/09/28/draft-missouri-voter-guide-what-you-need-know-november-elections/
8. https://www.voteclaycountymo.gov/elections (2022 map implementation notice)
9. https://kceb.org/important-notice-on-the-november-3-2026-election-absentee-voting/
