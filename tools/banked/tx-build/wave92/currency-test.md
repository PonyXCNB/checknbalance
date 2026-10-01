# Texas SoS Nov 3 district-chart currency-test — Wave 92 (2026-10-01 ET)

## Status: CURRENCY-TEST CLOSED (official SoS district chart) — still NO tx.html

Plan which-plan unchanged: **PLANC2333** (Wave 91 TLC Red-150/155 matrix stands).

### What closed it

Downloaded and compared the Texas Secretary of State's own
**District Chart Report — 2026 November 3rd General Election**
(`2026-district-chart-nov-3-general-election.pdf`) — the US CONGRESS column lists which
congressional district(s) appear on each county's Nov ballot.

Machine compare vs `wave91/county-cd-matrix.json` (see `currency-compare.json`):

| Result | Count |
|--------|------:|
| Exact suffix match (SoS trailing CDs = bank `d`/`ds`) | 245 |
| Harris (wrapped SoS row; all 9 bank CDs present) | 1 |
| Page-break PARSE_GAP (Cooke–Dallam names; PDF column text not linear) | 8 |
| True contradictions | **0** |
| Missing counties | **0** |

The 8 PARSE_GAP counties are all **whole** single-CD counties in the matrix; the gap is PDF text
extraction across a page break, not a map conflict. Open the PDF page 2 by eye if you want
hand confirmation — nothing in the matrix needs changing.

### Chambers water sliver (unchanged rule)

SoS chart lists Chambers as **14, 36**. TLC Red-150 has CD-14 at **0 population**.
Voter-facing `COUNTIES` keeps Chambers **whole `d: 36`** (same FL water-sliver lesson as Wave 91).

### Draft COUNTIES

`counties-draft.json` — 254 FIPS keys joined from Census 2020 county codes + PlanC2333
`d`/`ds`. **Not wired into a live page.** Ready for a future `tx.html` clone.

### Still required before tx.html

1. ~~Official PlanC2333 county-CD matrix~~ DONE Wave 91
2. ~~Currency-test vs official Nov district labels~~ **DONE Wave 92 (SoS district chart)**
3. Voices for every upcoming nominee
4. Confirm Nov 3 specials (SD-22, HD-93) — card carefully if overlapping
5. Clone page + register in tests / BUILT / redirects

### Sources

1. https://www.sos.texas.gov/elections/forms/2026-district-chart-nov-3-general-election.pdf
2. https://www.sos.texas.gov/elections/laws/advisory2026-22.shtml
3. Wave 91 TLC PLANC2333 Red-150/155 matrix
4. https://www2.census.gov/geo/docs/reference/codes2020/national_county2020.txt (FIPS join only)
