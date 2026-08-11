# North Carolina county to U.S. House district, map governing the Nov 3, 2026 election

Research run: **Aug 11, 2026**. Target file: `C:\Users\Brend\checknbalance\nc.html`.

---

## STEP 1 - Which map governs (answered BEFORE any arithmetic)

**Answer: N.C. Session Law 2025-95** - Senate Bill 249, *"Realign Congressional Districts 2025"* - **chaptered Oct 22, 2025**.

| Claim | Source |
|---|---|
| Bill S249 became **SL 2025-95**, `Last Action: Ch. SL 2025-95 on 10/22/2025`; House 2nd-reading roll call [H]-620 passed 66-48 at 12:41 p.m. on 10/22/2025; sponsors Alexander, Daniel, Galey (primary) | NCGA bill page, fetched Aug 11 2026: https://www.ncleg.gov/BillLookUp/2025/S249 |
| NCGA's own redistricting portal files this plan under the heading **"Congressional (To be used for the 2026 Election) - Senate Bill 249: Realign Congressional Districts 2025 - ENACTED"** | https://www.ncleg.gov/Redistricting (fetched Aug 11 2026) |
| The **State Board of Elections** - the agency that actually administers the election - states: *"In October 2025, the General Assembly approved a new map for North Carolina's 14 congressional districts (N.C. Session Law 2025-95) for use in the 2026 elections."* | https://www.ncsbe.gov/results-data/voting-maps-redistricting (fetched Aug 11 2026; page still says this today) |
| The enacted plan's block-assignment CSV is internally timestamped **Oct 22 2025 16:39:06**, and the StatPack cover text reads `District plan definition file: 'SL 2025-95.csv', modified 10/22/2025 1:29 PM ... Generated 10/22/2025` | the downloaded artifacts themselves |
| NC redistricting bills are **not subject to gubernatorial veto** (N.C. Const. Art. II Sec. 22(5)), so ratification = enactment; there is no signature step to look for | N.C. Constitution |

### Litigation check

- A three-judge federal panel (Rushing, Myers, Schroeder) **denied the preliminary-injunction requests on Nov 26, 2025**, expressly allowing SL 2025-95 to be used in the 2026 elections. Plaintiffs: NC NAACP, Common Cause NC, and the *Williams v. Hall* voters, alleging the CD1 changes dismantle the eastern Black Belt. (WRAL, PBS NewsHour, NC Newsline, Carolina Public Press, The Hill - all Nov 26, 2025.)
- Merits litigation continues; **no ruling altering the map for 2026 was located.**
- CAUTION on one source that surfaced in search: `carolinajournal.com/no-ruling-before-august-in-nc-redistricting-trial/` describes a **June 2025** six-day trial about the **2023** maps (final briefs due Aug 5, *2025*). It predates the Oct 2025 redraw - do not read it as a 2026 development.

### The decisive, empirical currency proof

Rather than rely on prose, I checked what the state **actually did**. NCSBE's certified precinct-level results
for the **March 3, 2026 primary** (`https://dl.ncsbe.gov/ENRS/2026_03_03/results_pct_20260303.zip`) record,
for every county, which U.S. House contests appeared on its ballots. Aggregating county -> set of U.S. House
districts actually voted on:

- **Consistent with SL 2025-95 in 100 of 100 counties.**
- **Inconsistent with SL 2023-145 in 11 counties** - exactly the 11 counties whose district membership the new map changed (Beaufort, Carteret, Craven, Dare, Greene, Hyde, Lenoir, Onslow, Pamlico, Wayne, Wilson).
- The one apparent gap is Wake, observed as {4, 13} rather than {2, 4, 13}. Explained: **NC-2 had no primary contest in either party** - `US HOUSE ... DISTRICT 02` appears nowhere in the file - so it could not show up. Not a discrepancy.

This is the check that lesson #13 (Alabama) says must be done separately from the arithmetic. The map was not
merely enacted; it was **used**.

---

## STEP 2 - Derivation and the arithmetic proof

**Primary sources, joined locally (no summariser in the loop):**

1. **Enacted plan, block equivalency:** `SL 2025-95 - Block Assignment File` from the NCGA redistricting portal,
   linked from https://www.ncleg.gov/Redistricting as
   `https://webservices.ncleg.gov/ViewBillDocument/2025/7669/0/SL%202025-95%20-%20Block%20Assignment%20File`.
   Contains `SL 2025-95.csv`: 236,638 rows of `"Block","District"` at 2020 Census block level (15-digit GEOID).
2. **Populations:** 2020 Census P.L. 94-171 Redistricting Summary File for North Carolina,
   `https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/North_Carolina/nc2020.pl.zip`.
   Joined geoheader `ncgeo2020.pl` (SUMLEV `750` = block; LOGRECNO; GEOCODE) to segment 1 `nc000012020.pl` field `P0010001`.
3. **Contrast map:** `SL 2023-145 Congress - Block Assignment File` from the same portal - the plan that elected the current Congress in 2024.
4. **County name spellings:** `us-atlas@3` (3.0.1) `counties-10m.json`, `properties.name`, installed locally via `npm pack`. All 100 names matched the page's existing spellings exactly - no name changes needed.

**Join integrity:** 236,638 blocks in the P.L. file, 236,638 rows in each BAF, **zero blocks in one and not the
other**, for both the 2025 and the 2023 file. Block populations sum to **10,439,388** - North Carolina's official
2020 population.

### Per-district population (derived from the block join)

Ideal = 10,439,388 / 14 = **745,670.571**

| District | 2020 population | Deviation from ideal |
|---|---|---|
| NC-01 | 745,671 | +0.429 |
| NC-02 | 745,670 | -0.571 |
| NC-03 | 745,670 | -0.571 |
| NC-04 | 745,671 | +0.429 |
| NC-05 | 745,671 | +0.429 |
| NC-06 | 745,671 | +0.429 |
| NC-07 | 745,671 | +0.429 |
| NC-08 | 745,671 | +0.429 |
| NC-09 | 745,671 | +0.429 |
| NC-10 | 745,670 | -0.571 |
| NC-11 | 745,670 | -0.571 |
| NC-12 | 745,670 | -0.571 |
| NC-13 | 745,670 | -0.571 |
| NC-14 | 745,671 | +0.429 |
| **Total** | **10,439,388** | - |

**Total deviation (max - min) = 1 person.** Nine districts at 745,671, five at 745,670. A zero-deviation plan,
as expected for a congressional map.

### Independent confirmation of the transcription

The NCGA publishes its own **StatPack Report** for SL 2025-95
(`https://webservices.ncleg.gov/ViewBillDocument/2025/7665/0/SL%202025-95%20-%20StatPack%20Report`).
Its *Population Deviation Report* (p.1) lists, district by district:
`1: 745,671 (0) | 2: 745,670 (-1) | 3: 745,670 (-1) | 4-9: 745,671 (0) | 10: 745,670 (-1) | 11: 745,670 (-1) | 12: 745,670 (-1) | 13: 745,670 (-1) | 14: 745,671 (0) | Totals 10,439,388`.
**This matches my block-level derivation exactly, district for district.**

The same StatPack's *County - District Report* states **`Split Counties: 12`** - matching my derived count - and
its per-county population splits match mine to the person for every one of the 12 (e.g. Mecklenburg 117,166 /
745,670 / 252,646; Wake 745,670 / 231,502 / 152,238; Guilford 264,080 / 177,649 / 99,570; Onslow 4,853 /
199,723; Polk 5,779 / 13,549). Two independent paths to the same table.

### Split counties and their `ds` arrays (12 of 100; 115 county x district pairs)

Every county x district overlap in this plan has **non-zero population** - there are no zero-population phantom
splits to filter out.

| FIPS | County | `d` (plurality) | `ds` | Population by district |
|---|---|---|---|---|
| 37025 | Cabarrus | **8** | `[6, 8]` | NC-6 101,258; NC-8 124,546 |
| 37037 | Chatham | **4** | `[4, 9]` | NC-4 40,640; NC-9 35,645 |
| 37051 | Cumberland | **7** | `[7, 9]` | NC-7 191,667; NC-9 143,061 |
| 37067 | Forsyth | **10** | `[6, 10]` | NC-6 108,247; NC-10 274,343 |
| 37077 | Granville | **13** | `[1, 13]` | NC-1 10,818; NC-13 50,174 |
| 37081 | Guilford | **5** | `[5, 6, 9]` | NC-5 264,080; NC-6 177,649; NC-9 99,570 |
| 37119 | Mecklenburg | **12** | `[8, 12, 14]` | NC-8 117,166; NC-12 745,670; NC-14 252,646 |
| 37133 | Onslow | **3** | `[1, 3]` | NC-1 4,853; NC-3 199,723 |
| 37149 | Polk | **14** | `[11, 14]` | NC-11 5,779; NC-14 13,549 |
| 37155 | Robeson | **8** | `[7, 8]` | NC-7 38,268; NC-8 78,262 |
| 37163 | Sampson | **3** | `[3, 7]` | NC-3 46,127; NC-7 12,909 |
| 37183 | Wake | **2** | `[2, 4, 13]` | NC-2 745,670; NC-4 231,502; NC-13 152,238 |

**Reachability check (lesson #12): every one of the 14 districts IS the plurality district of at least one
county.** No NC district would be unreachable even if `ds` were omitted. Two districts sit *wholly inside* a
single county - **NC-2 entirely inside Wake** (745,670 of Wake's 1,129,410) and **NC-12 entirely inside
Mecklenburg** (745,670 of Mecklenburg's 1,115,482) - but in both cases that district is also the county's
plurality, so neither disappears. `ds` is still required so that a Wake voter sees NC-4 and NC-13, a Mecklenburg
voter sees NC-8 and NC-14, a Guilford voter sees NC-6 and NC-9, and so on.

---

## STEP 3 - What changed between the 2024 map (SL 2023-145) and the 2026 map (SL 2025-95)

**Only two districts moved at all: CD1 and CD3.** Every other district's county membership is identical between
the two plans. Eleven counties changed hands.

| County | Under SL 2023-145 (2024) | Under SL 2025-95 (2026) |
|---|---|---|
| Beaufort | NC-3 | NC-1 |
| Carteret | NC-3 | NC-1 |
| Craven | NC-3 | NC-1 |
| Dare | NC-3 | NC-1 |
| Greene | NC-1 | NC-3 |
| Hyde | NC-3 | NC-1 |
| Lenoir | NC-1 | NC-3 |
| Onslow | NC-3 | NC-1/3 |
| Pamlico | NC-3 | NC-1 |
| Wayne | NC-1 | NC-3 |
| Wilson | NC-1 | NC-3 |

- **NC-1 gained 6 whole counties** - Beaufort, Carteret, Craven, Dare, Hyde, Pamlico - **plus a 4,853-person
  sliver of Onslow**, and **lost 4 counties** to NC-3: Greene, Lenoir, Wayne, Wilson. County count 22 -> 25.
- **NC-3 is the mirror image**: gained Greene, Lenoir, Wayne, Wilson; lost Beaufort, Carteret, Craven, Dare,
  Hyde, Pamlico; keeps all but a sliver of Onslow. County count 11 -> 9.
- **Split-county count went 11 -> 12**: Onslow is newly split; no county became whole. The other 11 split
  counties (Cabarrus, Chatham, Cumberland, Forsyth, Granville, Guilford, Mecklenburg, Polk, Robeson, Sampson,
  Wake) are split identically in both plans.
- Ten counties' **plurality** district changed (all 11 above except Onslow, whose plurality stays NC-3 at 97.6%).

### The page's existing race note is CONFIRMED, exactly

`nc.html` line 1058 says: *"new map moved 6 GOP-leaning coastal counties into D1 in late 2025."*
The derivation confirms this precisely - **exactly six whole counties** (Beaufort, Carteret, Craven, Dare, Hyde,
Pamlico) moved into NC-1, all six coastal/eastern. **No correction needed.** The only things the note omits are
the 4,853-person Onslow sliver and the four counties shipped the other way into NC-3.

---

## What is wrong with the page today

**28 of 100 counties currently carry the wrong `d`.** That splits into two separate defects:

### (a) Nine counties are stale purely because of the new map
Carteret, Craven, Dare, Greene, Hyde, Lenoir, Pamlico, Wayne, Wilson. (Beaufort also changed districts, but the
page had it wrong under the old map in a way that is accidentally right under the new one.)

### (b) NINETEEN counties were ALREADY WRONG under the 2024 map the page claims to encode
This is a pre-existing transcription defect, not a currency defect, and it is the larger of the two. Checking the
page's table against a correct derivation of **SL 2023-145** - the map its own comment says it holds - 20
counties disagree, and 19 of those are still wrong today:

| County | page `d` | correct under 2024 map | correct under 2026 map |
|---|---|---|---|
| Alamance | 4 | 9 | 9 |
| Avery | 5 | 11 | 11 |
| Beaufort | 1 | 3 | 1 |
| Caswell | 6 | 13 | 13 |
| Chatham | 9 | 4 | 4 |
| Cumberland | 9 | 7 | 7 |
| Davie | 5 | 6 | 6 |
| Forsyth | 6 | 10 | 10 |
| Granville | 1 | 13 | 13 |
| Guilford | 6 | 5 | 5 |
| Harnett | 9 | 13 | 13 |
| Lee | 9 | 13 | 13 |
| Mitchell | 5 | 11 | 11 |
| Person | 4 | 13 | 13 |
| Pitt | 1 | 3 | 3 |
| Randolph | 6 | 9 | 9 |
| Robeson | 7 | 8 | 8 |
| Rockingham | 6 | 5 | 5 |
| Rowan | 8 | 6 | 6 |
| Sampson | 7 | 3 | 3 |

Several are consequential: **Cumberland (Fayetteville)** is listed as NC-9 but its plurality is NC-7 in both
maps; **Guilford (Greensboro)** is listed as NC-6 but is NC-5 in both; **Forsyth (Winston-Salem)** is listed as
NC-6 but is NC-10 in both; **Alamance** is listed as NC-4 but is NC-9 in both; **Rowan** is listed as NC-8 but is
NC-6 in both.

### (c) No county carries `ds` at all
All 12 split counties currently render only one district's race. Under the `ds` model, Mecklenburg voters should
also see NC-8 and NC-14, Wake voters NC-4 and NC-13, Guilford voters NC-6 and NC-9, and so on.

---

## Ready-to-paste block

```javascript
// ----- All 100 NC counties, keyed by FIPS -----
// Map: N.C. Session Law 2025-95 (Senate Bill 249, "Realign Congressional Districts 2025"),
//      ratified/enacted Oct 22, 2025 - the plan governing the Nov 3, 2026 election.
// `d` is the population-plurality district; `ds` lists every district a split county touches.
// Sources: NCGA Redistricting portal block-assignment file "SL 2025-95" (ncleg.gov), joined to
//          2020 Census P.L. 94-171 block populations (census.gov). County spellings: us-atlas@3.
const COUNTIES = {
  "37001": { n: "Alamance", d: 9 },
  "37003": { n: "Alexander", d: 5 },
  "37005": { n: "Alleghany", d: 5 },
  "37007": { n: "Anson", d: 8 },
  "37009": { n: "Ashe", d: 5 },
  "37011": { n: "Avery", d: 11 },
  "37013": { n: "Beaufort", d: 1 },
  "37015": { n: "Bertie", d: 1 },
  "37017": { n: "Bladen", d: 7 },
  "37019": { n: "Brunswick", d: 7 },
  "37021": { n: "Buncombe", d: 11 },
  "37023": { n: "Burke", d: 14 },
  "37025": { n: "Cabarrus", d: 8, ds: [6, 8] },
  "37027": { n: "Caldwell", d: 5 },
  "37029": { n: "Camden", d: 1 },
  "37031": { n: "Carteret", d: 1 },
  "37033": { n: "Caswell", d: 13 },
  "37035": { n: "Catawba", d: 10 },
  "37037": { n: "Chatham", d: 4, ds: [4, 9] },
  "37039": { n: "Cherokee", d: 11 },
  "37041": { n: "Chowan", d: 1 },
  "37043": { n: "Clay", d: 11 },
  "37045": { n: "Cleveland", d: 14 },
  "37047": { n: "Columbus", d: 7 },
  "37049": { n: "Craven", d: 1 },
  "37051": { n: "Cumberland", d: 7, ds: [7, 9] },
  "37053": { n: "Currituck", d: 1 },
  "37055": { n: "Dare", d: 1 },
  "37057": { n: "Davidson", d: 6 },
  "37059": { n: "Davie", d: 6 },
  "37061": { n: "Duplin", d: 3 },
  "37063": { n: "Durham", d: 4 },
  "37065": { n: "Edgecombe", d: 1 },
  "37067": { n: "Forsyth", d: 10, ds: [6, 10] },
  "37069": { n: "Franklin", d: 13 },
  "37071": { n: "Gaston", d: 14 },
  "37073": { n: "Gates", d: 1 },
  "37075": { n: "Graham", d: 11 },
  "37077": { n: "Granville", d: 13, ds: [1, 13] },
  "37079": { n: "Greene", d: 3 },
  "37081": { n: "Guilford", d: 5, ds: [5, 6, 9] },
  "37083": { n: "Halifax", d: 1 },
  "37085": { n: "Harnett", d: 13 },
  "37087": { n: "Haywood", d: 11 },
  "37089": { n: "Henderson", d: 11 },
  "37091": { n: "Hertford", d: 1 },
  "37093": { n: "Hoke", d: 9 },
  "37095": { n: "Hyde", d: 1 },
  "37097": { n: "Iredell", d: 10 },
  "37099": { n: "Jackson", d: 11 },
  "37101": { n: "Johnston", d: 13 },
  "37103": { n: "Jones", d: 3 },
  "37105": { n: "Lee", d: 13 },
  "37107": { n: "Lenoir", d: 3 },
  "37109": { n: "Lincoln", d: 10 },
  "37111": { n: "McDowell", d: 11 },
  "37113": { n: "Macon", d: 11 },
  "37115": { n: "Madison", d: 11 },
  "37117": { n: "Martin", d: 1 },
  "37119": { n: "Mecklenburg", d: 12, ds: [8, 12, 14] },
  "37121": { n: "Mitchell", d: 11 },
  "37123": { n: "Montgomery", d: 8 },
  "37125": { n: "Moore", d: 9 },
  "37127": { n: "Nash", d: 1 },
  "37129": { n: "New Hanover", d: 7 },
  "37131": { n: "Northampton", d: 1 },
  "37133": { n: "Onslow", d: 3, ds: [1, 3] },
  "37135": { n: "Orange", d: 4 },
  "37137": { n: "Pamlico", d: 1 },
  "37139": { n: "Pasquotank", d: 1 },
  "37141": { n: "Pender", d: 7 },
  "37143": { n: "Perquimans", d: 1 },
  "37145": { n: "Person", d: 13 },
  "37147": { n: "Pitt", d: 3 },
  "37149": { n: "Polk", d: 14, ds: [11, 14] },
  "37151": { n: "Randolph", d: 9 },
  "37153": { n: "Richmond", d: 8 },
  "37155": { n: "Robeson", d: 8, ds: [7, 8] },
  "37157": { n: "Rockingham", d: 5 },
  "37159": { n: "Rowan", d: 6 },
  "37161": { n: "Rutherford", d: 14 },
  "37163": { n: "Sampson", d: 3, ds: [3, 7] },
  "37165": { n: "Scotland", d: 8 },
  "37167": { n: "Stanly", d: 8 },
  "37169": { n: "Stokes", d: 5 },
  "37171": { n: "Surry", d: 5 },
  "37173": { n: "Swain", d: 11 },
  "37175": { n: "Transylvania", d: 11 },
  "37177": { n: "Tyrrell", d: 1 },
  "37179": { n: "Union", d: 8 },
  "37181": { n: "Vance", d: 1 },
  "37183": { n: "Wake", d: 2, ds: [2, 4, 13] },
  "37185": { n: "Warren", d: 1 },
  "37187": { n: "Washington", d: 1 },
  "37189": { n: "Watauga", d: 5 },
  "37191": { n: "Wayne", d: 3 },
  "37193": { n: "Wilkes", d: 5 },
  "37195": { n: "Wilson", d: 3 },
  "37197": { n: "Yadkin", d: 10 },
  "37199": { n: "Yancey", d: 11 }
};
```

---

## Files produced by this run (all in this directory)

| File | What it is |
|---|---|
| `baf25/SL 2025-95.csv` | enacted 2026 plan, block equivalency, from ncleg.gov |
| `baf23/SL 2023-145.csv` | 2024 plan, block equivalency, from ncleg.gov |
| `sl2025-95-statpack.pdf` / `sp.txt` | NCGA's own StatPack for SL 2025-95 (independent confirmation) |
| `pl/` | 2020 Census P.L. 94-171 North Carolina files |
| `derived_2025.json` / `derived_2023.json` | district populations + county x district population matrices |
| `ncsbe/results_pct_20260303.txt` | NCSBE certified March 3, 2026 primary precinct results (currency proof) |
| `counties_block.js` | the pasteable COUNTIES block |
| `build.py`, `final.py`, `writeup.py` | the join, comparison and report scripts |

## Unresolved / caveats

- The Census **CD119** relationship file was deliberately NOT used as a source (lesson #13), and the URL
  `https://www2.census.gov/geo/docs/maps-data/data/rel2020/cd119/tab20_cd11920_county20_natl.txt` returned **404**
  when tried for contrast purposes. It was not needed: the contrast here comes from the NCGA's own enacted
  **SL 2023-145** block file, a strictly better source for "the 2024 map".
- Merits litigation (*NC NAACP v. Berger*, *Williams v. Hall*) is still live before the three-judge panel. A
  post-primary merits ruling that changed the lines this close to November would be extraordinary and none was
  found, but this is the one thing that could change the answer before Nov 3. **Re-check before any late-October
  refresh.**
- `d` values are strict population pluralities computed from the enacted block file. For the 12 split counties a
  voter's actual district depends on their address, not their county - the page's existing 'verify with your
  county board of elections' caveat should stay.