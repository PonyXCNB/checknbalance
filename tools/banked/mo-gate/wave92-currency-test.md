# Missouri currency-test — Wave 92 (2026-10-01 ET)

## Status: MAP GATE CLOSED (Wave 89); currency-test FURTHER ADVANCED — still NOT closed statewide — still NO mo.html

Map which-plan unchanged: SCOTUS **26A388** stay → November uses **2022 map**.

### New Wave 92 evidence

| Item | FIPS / note | Evidence | mo-cd120 | Match |
|------|-------------|----------|----------|-------|
| Clay County election board | 29047 | Official Sept 11, 2026 statement: proceeding with **2022 Congressional maps** for Nov 3 after SCOTUS stay + MO Supreme Court + SoS instructions. HB1 primary map will **not** be used. Banked `currency-w92/clay-elections.html` from voteclaycountymo.gov/elections. | [5, 6] | **YES on which-map** — still OPEN for public CD-5 and CD-6 sample styles (lookup/ArcGIS only) |
| Boone County Clerk (press) | 29019 | Clerk Brianna Lennon: Nov returns to 2022/2024 lines — Boone split **CD-3 and CD-4** (not the HB1 3/5 split). Voters should use 2022 assignment. KOMU / Columbia Missourian / ABC17. | [3, 4] | **YES guide-level** — still no public dual-district countywide sample PDF |
| St. Louis County | 29189 | Re-pulled `FIO.pdf` — still **April 7, 2026 municipal** content report (same Wave 91 dead end). `August2026FIO.pdf` now **404**. stlouiscovotes.info "Candidates and Issues" PDF link points to a **2020** file. Sample-ballot lookup exists but is address-gated. St. Louis American Sept 8 guide still lists County CD-1 + CD-2 (guide-level only). | [1, 2] | **Still OPEN** for official Nov FIO/sample with both CD labels |

### Still OPEN (unchanged blockers)

| Split / item | Status |
|--------------|--------|
| St. Louis County [1, 2] | No Nov countywide FIO/sample with both CD labels |
| Jackson CD-4 / CD-6 sample styles | OPEN — only KC CD-5 styles unlocked (Wave 91) |
| Clay [5, 6] sample styles | Which-map closed; sample PDFs still open |
| Jefferson [3, 8] | jeffcomo.gov still no county-wide Nov sample |
| Boone [3, 4] | Clerk confirms 2022; no public dual-district PDF |
| Warren [2, 3] | Clerk site still not a Nov dual-CD close |
| Onder / Herrera parcels | OPEN |

### Build rule

- **Still NO `mo.html`.** Need St. Louis County / remaining Jackson styles / Clay sample PDFs / Jefferson / Boone / Warren sample-level closes + continuity/parcel.
- Keep `tools/banked/mo-cd120.json` / splits bank.

### Sources

1. https://www.voteclaycountymo.gov/elections (Sept 11, 2026 2022-map implementation statement)
2. https://www.komu.com/news/elections/how-the-missouri-supreme-courts-redistricting-decision-will-affect-boone-county/article_002b9926-f45d-40c1-9b33-c8b5a19d505a.html
3. https://abc17news.com/news/missouri/2026/09/22/county-clerk-offices-warn-residents-of-ballot-changes-amid-congressional-map-lawsuits/
4. https://extcontent.stlouisco.com/BOE/FIO/FIO.pdf (still April municipal — discarded for Nov)
5. https://stlouiscovotes.info/voting/whats-on-the-ballot/ (Candidates PDF link is 2020 — discarded)
6. Prior Wave 91 bank + SCOTUS 26A388 notes
