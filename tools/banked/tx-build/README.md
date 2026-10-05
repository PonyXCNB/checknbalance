# Texas build bank

**STATUS: BUILT Wave 93 (2026-10-05).** `tx.html` is live. Counties, statewide, and all 38 House districts are in `wave93/`. The notes below are the Wave 92 map record; do not re-derive the county table.

## Map which-plan

- **2026 uses Plan C2333** (89th Leg., 2nd C.S.). TLC current-districts; SCOTUS upheld Apr 2026.
- Census CD119 / PlanC2193 is **STALE**.

## Wave 92 — currency-test CLOSED

Official SoS **District Chart Report — 2026 November 3rd General Election** compared to the Wave 91 PlanC2333 matrix:

- Banked: `wave92/2026-district-chart-nov-3-general-election.pdf` + extracted text + `currency-compare.json`
- **0 true contradictions** across 254 counties (245 exact + Harris manual set-presence; 8 whole-county page-break parse gaps)
- Chambers: SoS lists 14+36; voter-facing stays whole **CD-36** (0-pop water)
- Draft `COUNTIES` with FIPS: `wave92/counties-draft.json` (not live)

See `wave92/currency-test.md`.

## Wave 91 — county-CD matrix CLOSED (official TLC)

Downloaded from Capitol Data Portal dataset PLANC2333:

| File | Role |
|------|------|
| `wave91/PLANC2333_r150.xls` (+ `.pdf`) | Districts by County (Red-150) |
| `wave91/PLANC2333_r155.xls` (+ `.pdf`) | Split Counties (Red-155) |
| `wave91/county-cd-matrix.json` | Parsed 254-county matrix |
| `wave91/county-cd-matrix.md` | Split-county summary |

Derived facts:

- **254 counties** — **224 whole / 30 split** after excluding zero-pop overlaps.
- **All 38 districts** appear in the matrix.
- Plurality `d` is **2020 Census population-weighted** from Red-150 (not a block-count hint).
- **Chambers**: Red-150 lists CD-14 at **0 population** — excluded from voter-facing `ds`; treat as whole **CD-36** (FL water-sliver lesson).
- **Plurality of no county** (must ride `ds` on a parent): **CD 7, 18, 24, 30, 38** (Harris / Dallas / Fort Bend territory).

## Wave 90 bank (still stands)

- SoS Aug 28, 2026 ballot certification PDF + all 38 House pairs + statewide ticket in `wave90/`.

## Wave 93 — page shipped

1. ~~Official PlanC2333 county-CD matrix~~ **DONE Wave 91**.
2. ~~Currency-test vs official Nov district labels~~ **DONE Wave 92 (SoS district chart)**.
3. ~~Voices for every upcoming nominee~~ **DONE Wave 93** (109 candidates, 0 gaps).
4. ~~Nov 3 specials SD-22 and HD-93~~ **noted in the Senate race, not carded as U.S. House**.
5. ~~Clone and register~~ **DONE** — `tx.html` from `fl.html`, using `wave93/`.

## Sources

- https://data.capitol.texas.gov/dataset/planc2333
- https://www.sos.texas.gov/elections/forms/2026-district-chart-nov-3-general-election.pdf
- https://www.sos.texas.gov/elections/forms/2026-ballot-cert.pdf
- https://redistricting.capitol.texas.gov/current-districts
