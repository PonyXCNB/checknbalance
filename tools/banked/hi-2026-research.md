# Hawaii 2026 — checknbalance.org research file
Compiled Aug 11, 2026. Primary was **Saturday, Aug 8, 2026**. General is **Tuesday, Nov 3, 2026**.

**Primary source of record for everything below:** Hawaii Office of Elections official results files
- Statewide summary: `https://elections.hawaii.gov/wp-content/results/2026%20Primary/summary.txt` (fetched Aug 11, 2026)
- Statewide precinct detail: `https://elections.hawaii.gov/wp-content/results/2026%20Primary/media.txt` (fetched Aug 11, 2026)
- Results index: https://elections.hawaii.gov/election-results/
- 2024 general: `https://elections.hawaii.gov/wp-content/results/2024%20General/summary.txt`
- 2022 general: `https://files.hawaii.gov/elections/files/results/2022/general/summary.txt`

All precincts reported in the file used (e.g. Governor 494/494; U.S. Rep Dist I 223/223; Dist II 273/273).

> ⚠ **CORRECTION TO THE BANKED NOTE.** The banked note said HI-1 Case "~57%" / Keohokalole "~34%" and HI-2 Tokuda "~84%". The official state file says **Case 58.5% / Keohokalole 37.4%** (share of the Democratic primary vote) and **Tokuda 91.5%**. The banked figures are wrong and were not used. The banked note's substance — Green renominated, Case and Tokuda renominated, all incumbents renominated — is **confirmed**.

---

## 0. Method note — how the November ballot was derived

Hawaii runs a **partisan primary with separate party ballots**, plus a nonpartisan track. Who advances is set by **HRS §12-41(b)**, stated verbatim on the Office of Elections' own page (https://elections.hawaii.gov/candidates/nonpartisan-candidates-in-partisan-contests/, page last updated Mar 12, 2021):

> To appear on the general election ballot, nonpartisan candidates running in partisan elections must meet one of the following qualifications: **Method 1**: receive at least 10% of the votes cast for the office. **Method 2**: receive a vote equal to or greater than the lowest vote received by the partisan candidate who was nominated.

The same page's worked example shows that **each qualified party's nominee advances regardless of vote total** (its sample Green candidate advances on 50 votes out of 1,915). Applying the rule to the official Aug 8 counts:

| Office | Office-wide total | 10% threshold | Lowest *nominated* partisan | Top nonpartisan | Nonpartisan advances? |
|---|---|---|---|---|---|
| U.S. Rep. Dist I | 128,734 | 12,874 | Conley (G) 397 | Berning 972 | **YES** (Method 2) |
| U.S. Rep. Dist II | 128,557 | 12,856 | Awa (R) 26,185 | Codelia 1,226 | **NO** |
| Governor | 258,656 | 25,866 | Cordery (R) 36,308 | Hill 1,320 | **NO** |
| Lieutenant Governor | 258,709 | 25,871 | Anthony (R) 16,930 | Kamau 2,515 | **NO** |

⚠ `[Verify]` — this ballot composition is **derived** from the state's own published rule applied to the state's own certified counts. It was not read off an official "2026 General Election candidate list," which the Office of Elections had not yet posted as of Aug 11, 2026. The arithmetic is shown above so it can be re-checked. Re-confirm against the official general-election candidate list once posted.

---

## 1. COUNTY → U.S. HOUSE DISTRICT MAP

### 1a. Geometry verified locally (not assumed)
Downloaded `us-atlas@3` `counties-10m.json` from `https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json` and enumerated all geometries with an id starting `15`. **Exactly five**, with these exact `properties.name` spellings:

| FIPS | `properties.name` |
|---|---|
| 15001 | `Hawaii` |
| 15003 | `Honolulu` |
| 15005 | `Kalawao` |
| 15007 | `Kauai` |
| 15009 | `Maui` |

Note the spellings carry **no ʻokina and no macrons** in this dataset (`Hawaii`, `Kauai`, not `Hawaiʻi`/`Kauaʻi`). Match them exactly or the join fails.

### 1b. Which map governs 2026
See §1e below — sourced, not assumed.

### 1c. The Honolulu split, proved from official precinct data
Hawaii precinct IDs are `HH-PP` where `HH` is the **state House district**. Every precinct in the official `media.txt` carries exactly one U.S. House contest, so the county↔district crosswalk can be computed directly rather than inferred. Counties were fingerprinted by which county council contest each precinct carried (Honolulu = Council Dist II/IV/VIII in Roman numerals; Hawaii = Council Dist 1–9 in Arabic; Maui = the named Wailuku-Waihee-Waikapu / Kahului / Upcountry seats; Kauai = at-large Councilmember + Mayor), then confirmed against contiguous state-House-district ranges (Hawaii Co. = HD 1–8, Maui Co. = HD 9–14, Kauai Co. = HD 15–17, Honolulu Co. = HD 18–51).

**Registered voters by county × U.S. House district (Hawaii Office of Elections, Aug 8, 2026 primary precinct file):**

| County | HI-1 | HI-2 | County total |
|---|---:|---:|---:|
| Hawaii (15001) | 0 | 134,573 | 134,573 |
| **Honolulu (15003)** | **395,331** | **150,709** | **546,040** |
| Kauai (15007) | 0 | 49,060 | 49,060 |
| Maui (15009) | 0 | 116,870 | 116,870 |
| **Statewide** | **395,331** | **451,212** | **846,543** |

**Validation:** the column sums to **846,543**, which is exactly the registered-voter figure the state's own `summary.txt` prints for every contest. Zero precincts were split between the two U.S. House districts.

**Honolulu County is split: HI-1 holds 72.4% of its registered voters, HI-2 holds 27.6%. The plurality is HI-1.** So Honolulu gets `d: 1` **and** `ds: [1, 2]`.

All four neighbor-island counties are **wholly inside HI-2** — no HI-1 precinct exists outside Honolulu County. This is consistent with the structural fact that HI-1 lies entirely within the City & County of Honolulu.

### 1d. Kalawao County (15005)
Kalawao — the Kalaupapa settlement on Molokaʻi's north shore, one of the smallest county-equivalents in the United States — has **no county government** and appears in no county-council contest. Its voters are administered within Maui County's election precincts (Molokaʻi sits in state House District 13, which the official file shows carrying **only** `U.S. Representative, Dist II`). Kalawao is therefore **HI-2**, with no ambiguity: every precinct on Molokaʻi, and every precinct in Maui County, is HI-2.

*Population context (2020 census):* Kalawao is the least-populous county in the U.S. (~80–100 residents). It is included here only because it is a real geometry in `counties-10m.json` and would otherwise render as a hole in the map.

### 1e. Redistricting status for 2026
*(sourced below in §5 — Districts research)*

---

## 2. THE STATEWIDE BALLOT

### 2a. U.S. SENATE — THERE IS **NO** 2026 HAWAII U.S. SENATE RACE

Three independent confirmations:
1. The official Aug 8, 2026 primary summary file contains **87 distinct contest titles and not one of them is "U.S. Senator."** The only federal contests are `U.S. Representative, Dist I` and `U.S. Representative, Dist II`.
2. **Brian Schatz (Class 3)** was last elected in the **2022** general — official 2022 file: Schatz (D) 290,894 (71.2%) def. Bob McDermott (R) 106,358 (26.0%). A six-year term from Jan 2023 runs to **Jan 2029**, so that seat is next up in **2028**.
3. **Mazie Hirono (Class 1)** was last elected in the **2024** general — official 2024 file: Hirono (D) 324,194 (64.6%) def. Bob McDermott (R) 160,075 (31.9%). Next up in **2030**.

State this plainly on the page: **Hawaii has no U.S. Senate election in 2026.**

### 2b. GOVERNOR AND LIEUTENANT GOVERNOR — the mechanic
Confirmed directly from the official results files, which is stronger than a secondary description:
- In the **primary**, Governor and Lieutenant Governor are **two separate contests** with **separate candidate fields and separate vote totals**. The 2026 file lists `Governor` and `Lieutenant Governor` as distinct contests, each with its own D, R and nonpartisan fields. Voters nominate each office independently — a party's Governor and Lt. Governor nominees are chosen by separate votes and need not have run together.
- In the **general**, they run as a **single joint ticket**. The 2022 general file's contest is titled **`Governor and Lieutenant Governor`** and its ballot lines read literally: `(D) GREEN, Josh / For GOVERNOR / LUKE, Sylvia / For LIEUTENANT GOVERNOR` and `(R) AIONA, Duke / For GOVERNOR / TUPAI, Seaula, Jr. / For LIEUTENANT GOVERNOR`. One vote, one combined total.
- **2022 result for context:** Green/Luke 261,025 (63.2%) def. Aiona/Tupai 152,237 (36.8%); total 413,262.

**2026 nominees (derived per §0):** **Green/Kawakami (D)** vs **Cordery/Anthony (R)**. No third line qualified.

### 2c. Other statewide offices, OHA, ballot measures, judicial
*(sourced below in §6 — Statewide ballot research)*

---

## 3. OFFICIAL AUG 8, 2026 PRIMARY RESULTS (source: Hawaii Office of Elections summary.txt)

### Governor — all-party total 258,656

| Party | Candidate | Votes | % of party | % of office |
|---|---|---:|---:|---:|
| Democratic | **GREEN, Josh** (nominee) | 183,872 | 88.5% | 71.1% |
| Democratic | SHIM, Lauren Kapoliahi'iaka | 11,156 | 5.4% | 4.3% |
| Democratic | LUCAS-TADEO, George (Teva) | 8,094 | 3.9% | 3.1% |
| Democratic | BOURGOIN, Duke | 4,585 | 2.2% | 1.8% |
| Republican | **CORDERY, Gary** (nominee) | 36,308 | 75.9% | 14.0% |
| Republican | FUJIYAMA, Ken | 11,554 | 24.1% | 4.5% |
| Nonpartisan | **HILL, Bu Laia** (nominee) | 1,320 | 42.8% | 0.5% |
| Nonpartisan | WILLIAMSON, Calvert A. | 869 | 28.2% | 0.3% |
| Nonpartisan | LEWMAN, Clyde McClain (Mac) | 507 | 16.4% | 0.2% |
| Nonpartisan | GIUFFRE, John M. (Raghu) | 391 | 12.7% | 0.2% |

### Lieutenant Governor — all-party total 258,709

| Party | Candidate | Votes | % of party | % of office |
|---|---|---:|---:|---:|
| Democratic | **KAWAKAMI, Derek S.K.** (nominee) | 139,935 | 66.1% | 54.1% |
| Democratic | BELATTI, Della Au | 55,093 | 26.0% | 21.3% |
| Democratic | CHOI, John | 12,978 | 6.1% | 5.0% |
| Democratic | PULETASI, Sam | 2,146 | 1.0% | 0.8% |
| Democratic | CUADRA, Ku L. (Bobby) | 1,409 | 0.7% | 0.5% |
| Republican | **ANTHONY, Daniel** (nominee) | 16,930 | 37.9% | 6.5% |
| Republican | MEJIA, Margaret Rose | 10,794 | 24.2% | 4.2% |
| Republican | PETERS, Robert E. | 8,866 | 19.9% | 3.4% |
| Republican | CRESENCIA, Hopelin (Hope) | 8,043 | 18.0% | 3.1% |
| Nonpartisan | **KAMAU, Kilakila** (nominee) | 2,515 | 100.0% | 1.0% |

### U.S. Representative, Dist I — all-party total 128,734

| Party | Candidate | Votes | % of party | % of office |
|---|---|---:|---:|---:|
| Democratic | **CASE, Ed** (nominee) | 63,679 | 58.5% | 49.5% |
| Democratic | KEOHOKALOLE, Jarrett K. | 40,740 | 37.4% | 31.6% |
| Democratic | BOOKER, Jennifer | 2,426 | 2.2% | 1.9% |
| Democratic | KISWANTO, Nicholas (Nick) | 1,021 | 0.9% | 0.8% |
| Democratic | FATULA, Ben | 1,019 | 0.9% | 0.8% |
| Republican | **LAM, Adriel C.** (nominee) | 18,480 | 100.0% | 14.4% |
| Green | **CONLEY, Jordan S.** (nominee) | 397 | 100.0% | 0.3% |
| Nonpartisan | **BERNING, Nathan M.** (nominee) | 972 | 100.0% | 0.8% |

### U.S. Representative, Dist II — all-party total 128,557

| Party | Candidate | Votes | % of party | % of office |
|---|---|---:|---:|---:|
| Democratic | **TOKUDA, Jill N.** (nominee) | 91,832 | 91.5% | 71.4% |
| Democratic | KING, Steven | 3,908 | 3.9% | 3.0% |
| Democratic | GUITHUES, Greg | 3,148 | 3.1% | 2.4% |
| Democratic | BASIN, Kirill | 1,522 | 1.5% | 1.2% |
| Republican | **AWA, Brenton** (nominee) | 26,185 | 100.0% | 20.4% |
| Nonpartisan | **CODELIA, Edward A.** (nominee) | 1,226 | 62.5% | 1.0% |
| Nonpartisan | TERRY, Randall | 736 | 37.5% | 0.6% |

---

## 4. OHA AT-LARGE TRUSTEE — how many seats, derived from official data

The Aug 8 primary carried exactly one OHA contest, `At-Large Trustee`, party code `NON` (nonpartisan), with **15 candidates**, on **all 494 precincts** and all 846,543 registered voters (i.e. it appeared on every primary ballot regardless of party).

**Seat count derived arithmetically from the official file.** In a vote-for-N contest, `candidate votes + blank votes + overvotes = N × ballots cast`. From the state's own numbers:
- candidate votes **493,373**; blank votes **346,351** (339,544 mail + 6,807 in-person); overvotes **534** → sum **840,258**
- ballots cast **280,442** (sum of the `Ballots` field over all 494 unique precinct-splits in `media.txt`)

| Hypothesis | Expected | Difference |
|---|---:|---:|
| vote-for-2 | 560,884 | +279,374 ✗ |
| **vote-for-3** | **841,326** | **−1,068 (0.13%) ✓** |
| vote-for-4 | 1,121,768 | −281,510 ✗ |

**⇒ Three (3) OHA at-large trustee seats are on the 2026 ballot**, and voters chose up to three. The 0.13% residual is the expected rounding from invalid/undeliverable ballots.

**No candidate won a majority outright** (top vote-getter Galuteria's 74,671 is well under half of 280,442 ballots), so the contest proceeds to the general.

⚠ `[Verify]` — the seat count above is an arithmetic inference from official vote data, not a quoted OHA/Office of Elections statement. The *identity* of who advances depends on HRS §13D-3's "top 2 per seat" rule (→ top 6 for 3 seats). See §6 for sourcing.

### Note on census population figures
`api.census.gov` now rejects keyless requests (`HTTP 302 → /missing_key.html`, header `X-DataWebAPI-KeyError: 1`, checked Aug 11, 2026). No API key was obtained (creating accounts is out of scope for this research). The Honolulu-County plurality finding in §1c therefore rests on **official registered-voter counts from the Hawaii Office of Elections precinct file**, which is a primary source and reconciles exactly to the statewide total. Census population figures sourced separately appear in §5.


---

## 7. READY-TO-PASTE BLOCK 1 — COUNTIES

```js
// ----- All 5 Hawaii county-equivalents, keyed by FIPS -----
// Geometry: us-atlas@3 counties-10m.json (state FIPS 15) — 5 geometries, names verified
//   verbatim: "Hawaii", "Honolulu", "Kalawao", "Kauai", "Maui" (no okina/macrons in this dataset).
// District assignment: Hawaii Office of Elections official Aug 8, 2026 primary precinct file
//   https://elections.hawaii.gov/wp-content/results/2026%20Primary/media.txt (fetched Aug 11, 2026)
//   Cross-tab of registered voters by county x U.S. House contest (sums exactly to the state's
//   published 846,543 registered voters; no precinct is split between HI-1 and HI-2):
//     Hawaii   15001 -> HI-2 only          134,573 reg
//     Honolulu 15003 -> SPLIT: HI-1 395,331 (72.4%) / HI-2 150,709 (27.6%)  => plurality HI-1
//     Kalawao  15005 -> HI-2 (Kalaupapa, Molokai; no county govt; votes in Maui Co. precincts,
//                       state House Dist 13, which carries only "U.S. Representative, Dist II")
//     Kauai    15007 -> HI-2 only           49,060 reg
//     Maui     15009 -> HI-2 only          116,870 reg
// Honolulu carries an explicit ds list so HI-1 and HI-2 both stay visible on the map.
const COUNTIES = {
  "15001": { n: "Hawaii",   d: 2 },
  "15003": { n: "Honolulu", d: 1, ds: [1, 2] },
  "15005": { n: "Kalawao",  d: 2 },
  "15007": { n: "Kauai",    d: 2 },
  "15009": { n: "Maui",     d: 2 }
};
```

**Why the `ds` matters here:** HI-1 exists *only* inside Honolulu County, and HI-2 is the plurality district of all four other county-equivalents. Without `ds: [1, 2]` on Honolulu, HI-2 would still render (it is the plurality of Hawaii, Kalawao, Kauai and Maui), but Honolulu's HI-2 share — 150,709 registered voters, more than Maui and Kauai counties combined — would be invisible. HI-1 is the plurality of Honolulu, so HI-1 itself is not at risk of disappearing.


---

## 5. DISTRICTS — map in force, populations, PVI

### 5a. Which map governs 2026
**The plan adopted by the 2021 Hawaii Reapportionment Commission on Jan 28, 2022. No change since.**
- Hawaii Office of Elections, Reapportionment Commission page (fetched Aug 11, 2026) — https://elections.hawaii.gov/about-us/boards-and-commissions/reapportionment/ — still presents the 2021 Commission Final Report and Plan (report dated Feb 25, 2022) and the `Congressional_Final_2022.zip` shapefile as operative. Status line: "No meeting scheduled at this time"; last meeting listed Mar 7, 2022.
- Official plan text: "2021 Reapportionment Plans — Metes and Bounds," Jan 28, 2022 — https://elections.hawaii.gov/wp-content/uploads/2021-Reapportionment-Plans-Metes-and-Bounds.pdf
- **Hard geographic proof of no change:** Census CD-to-county relationship files for the 118th and 119th Congress are identical in geography for Hawaii (same land/water areas, same county parts):
  https://www2.census.gov/geo/docs/maps-data/data/rel2020/cd-sld/tab20_cd11820_county20_st15.txt and `...tab20_cd11920_county20_st15.txt`
- All About Redistricting (Loyola Law School), updated Mar 16, 2022 — https://redistricting.lls.edu/state/hawaii/ — congressional map "was not challenged in court."
- Structural bar: Hawaii Const. Art. IV convenes the commission only in years ending in 1 (next 2031).
- ⚠ `[Verify]` — this rests on convergent evidence (unchanged state page, identical CD118/CD119 census geography, no tracker activity, constitutional bar), **not** on an affirmative "we did not redistrict" statement.

### 5b. Populations (2020 census) — the plurality proved a second way
Source: US Census Bureau, **2020 Census 119th Congressional District Summary File, Hawaii** (v. 2024-12-05), field POP100 — https://www2.census.gov/programs-surveys/decennial/2020/data/119th-congressional-district-summary-file/Hawaii/hi2020.cd19.zip

| Geography | 2020 population |
|---|---:|
| Hawaii statewide | 1,455,271 |
| HI-1 total | 726,395 |
| HI-2 total | 728,876 |
| **HI-1 ∩ Honolulu County (part)** | **726,395** |
| **HI-2 ∩ Honolulu County (part)** | **290,113** |
| HI-2 ∩ Hawaii County (whole) | 200,629 |
| HI-2 ∩ Kalawao County (whole) | **82** |
| HI-2 ∩ Kauai County (whole) | 73,298 |
| HI-2 ∩ Maui County (whole) | 164,754 |

Arithmetic closes exactly: 726,395 + 728,876 = 1,455,271. **Honolulu County = 1,016,508.**
- HI-1 = **71.46%** of Honolulu County; HI-2 = **28.54%**. Margin 436,282 people.
- **HI-1 is not merely the plurality of Honolulu County — it is an outright majority.** This agrees with the independent registered-voter computation in §1c (72.4% / 27.6%).
- Two useful framings: HI-1 is **100% contained** in Honolulu County (the only county it touches); Honolulu County supplies **39.8% of HI-2's population**, so HI-2 is a *plurality-Oahu* district, not a pure neighbor-islands district.
- Honolulu is the **only split county in the state** — in the Census relationship file, Hawaii, Kalawao, Kauai and Maui each show `AREALAND_PART` exactly equal to full county land area.

### 5c. Kalawao County (15005) — confirmed HI-2
Census 2020 CD119 Summary File record `5101900US1502005`, "Kalawao County," **POP100 = 82**, listed under Congressional District 2 with **no "(part)" qualifier**. Relationship file corroborates (Kalawao `AREALAND_PART` = full county land area, 31,057,603 m²). The state plan text places Molokaʻi wholly in the 2nd district.

### 5d. Cook PVI — sourced, not estimated
**HI-1 = D+13** (rank 96/435) · **HI-2 = D+12** (rank 114/435)
Cook Political Report, "2025 Cook PVI: District Map and List (119th Congress)," published **Apr 3, 2025** — https://www.cookpolitical.com/cook-pvi/2025-partisan-voting-index/district-map-and-list
*Sourcing note:* the page returned HTTP 200 (no 403) but renders its table as a Datawrapper embed; the underlying data file at `https://datawrapper.dwcdn.net/vcf6i/1/dataset.csv` reads verbatim `HI-01 … D+13 … 96` and `HI-02 … D+12 … 114`.

### 5e. Composition (official state plan text, Metes and Bounds pp. 53–54, Jan 28, 2022)
- **HI-1:** Sand Island, Mokauea, Ford Island, Laulaunui Is., plus Hawaii Kai, Niu Valley, Wailupe, Waialae, Kaimuki, Wilhelmina Rise, Waikiki, Manoa, Pacific Heights, Chinatown, Kalihi, Aiea, Waimalu, Pearl City, Waipahu, Honouliuli, Fernandez Village, Ewa Beach, Ewa, part of Kalaeloa, part of Royal Kunia, Mililani, Waipio Acres.
- **HI-2 (Oahu portion):** Kahuku, Laie, Hauula, Punaluu, Kaaawa, Kahaluu, Ahuimanu, Kaneohe, Puohala Village, Kailua, Keolu Hills, Waimanalo, Whitmore Village, Wahiawa, part of Royal Kunia, part of Makakilo, part of Kalaeloa, Nanakuli, Maili, Waianae, Makaha, Mokuleia, Waialua, Haleiwa, Kawailoa Beach, Waimea, Sunset Beach, Waialee, Kawela Bay.
- **HI-2 (rest):** Hawaii, Maui, Kahoolawe, Lanai, Molokai, Kauai, Niihau, Kaula, and the Northwestern Hawaiian Islands from Kure Atoll to Nihoa (excluding Midway).

> ⚠ Do **not** use the Wikipedia infobox populations (HI-1 719,060; HI-2 727,086, labelled "2024") — those are ACS-era estimates and conflict with the census figures above. Nothing here rests on them.

