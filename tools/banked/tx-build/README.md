# Texas build bank — Wave 91 (2026-09-30)

**STATUS: unbuilt / map matrix BANKED. No `tx.html`.**

## Map which-plan

- **2026 uses Plan C2333** (89th Leg., 2nd C.S.). TLC current-districts; SCOTUS upheld Apr 2026.
- Census CD119 / PlanC2193 is **STALE**.

## Wave 91 — county↔CD matrix CLOSED (official TLC)

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

## Still required before tx.html

1. ~~Official PlanC2333 county↔CD matrix~~ **DONE Wave 91**.
2. **Currency-test** vs county sample ballots / voter-lookup CD labels (next gate).
3. Voices for every upcoming nominee.
4. Confirm Nov 3 specials (SD-22, HD-93) — card carefully if overlapping.
5. Draft `COUNTIES` with `d`/`ds` offline from `county-cd-matrix.json` + FIPS join.

## Sources

- https://data.capitol.texas.gov/dataset/planc2333
- https://data.capitol.texas.gov/dataset/748c952b-e926-4f44-8d01-a738884b3ec8/resource/3b10b88d-f7cb-4e18-bb0c-32f30cf75b6c/download/planc2333_r150.xls
- https://www.sos.texas.gov/elections/forms/2026-ballot-cert.pdf
- https://redistricting.capitol.texas.gov/current-districts
