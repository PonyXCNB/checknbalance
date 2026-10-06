# CA bank - Wave 94 (2026-10-06 ET): population-weighted plurality `d` CLOSED

## Status: open item #1 (pop-weighted `d`) CLOSED. Still NO `ca.html`.

### Method
- Block -> CD: Statewide Database `AB604.csv` (https://statewidedatabase.org/pub/data/d25/AB604.zip; byte-identical to `map/AB604.zip`, 1,599,989 bytes).
- Population: Statewide Database OFFICIAL **adjusted** 2020 P.L. 94-171 block file (incarcerated persons reallocated to last residence, Elections Code 21003) -
  https://statewidedatabase.org/pub/data/D20/PL94/state/state_PL94_2020_Adjusted_P24_DOJ_Block_csv.zip, field `Population P2` (519,723 blocks, total 39,523,437).
- Summed adjusted block population by county x CD. Script: `map/ca-popweight-adj.py` (run on public downloads; inputs not banked - 200 MB).
- Output: `map/ca-county-cd-popweighted.json` (`d`, `ds` ordered by population, per-CD county populations, plurality share, margin over 2nd).

### Validation (proves the join)
- All **52 of 52** district totals equal the official `A_POPULATI` in the AB 604 shapefile dbf
  (https://statewidedatabase.org/pub/data/d25/AB604%202025-08-16.zip) - 760,065-760,067 each, zero mismatches.
- Gotcha: `AB604.csv` starts with a UTF-8 BOM; without stripping it the first block (060650444033050, pop 29, CD-25) drops and CD-25 reads 29 short.
- Unadjusted Census PL P1 (cross-check) gives 754,875-778,145 per CD - i.e. AB 604 was NOT drawn on raw Census counts; use the adjusted file.

### Result
- 58 counties: 30 whole, 28 split (same split set as Wave 88).
- **9 split counties change `d` vs the Wave 88 block-count hint:** list:
  06029 Kern 20->22; 06037 Los Angeles 36->27 (tie); 06059 Orange 47->46; 06061 Placer 3->6; 06065 Riverside 25->39;
  06071 San Bernardino 23->33; 06073 San Diego 50->51; 06085 Santa Clara 16->17; 06099 Stanislaus 13->5.
- **Near-ties (shading only - `ds` carries every race):** Alameda 12 = 14 exactly (760,065 each) -> 12 by tie rule;
  Los Angeles 27 = 34 = 43 = 44 exactly (760,067 each) -> 27 by tie rule; Orange 46 over 47 by **1 person**; San Diego 51 over 50/52 by **1 person**.
  Tie rule: highest adjusted population, exact ties to the LOWEST district number. Same situation as Philadelphia on pa.html.
- **24 districts are the plurality of NO county** and are reachable only via `ds` (lesson #12):
  14, 16, 23, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 52. All 52 reachable through `ds`.

### Still required before `ca.html`
1. ~~Pop-weighted plurality `d`~~ **DONE Wave 94.**
2. Broader county sample-ballot currency-test (SLO BT-46 was one spot-check).
3. Full HOUSE (52 certified pairs, top-two) / STATEWIDE research + voices.
