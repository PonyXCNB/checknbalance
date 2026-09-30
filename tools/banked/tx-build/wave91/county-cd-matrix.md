# Plan C2333 county↔CD matrix — Wave 91

Source: TLC `PLANC2333_r150.xls` / `PLANC2333_r155.xls` (Capitol Data Portal).
Counties: **254** (224 whole / 30 split after excluding zero-pop overlaps).
Districts covered: 38 of 38.
Plurality of no county (need `ds`): **[7, 18, 24, 30, 38]**.

## Zero-population overlaps (excluded from `ds`)

- **Chambers**: official Red-150 lists CD [14] at 0 pop — treat as whole [36] for voter-facing `ds`.

## Split counties (positive-pop `ds`)

| County | Plurality `d` | `ds` |
|--------|---------------|------|
| Aransas | 15 | [15, 27] |
| Bastrop | 27 | [10, 27] |
| Bell | 31 | [17, 31] |
| Bexar | 20 | [20, 21, 23, 35] |
| Bowie | 1 | [1, 4] |
| Brazoria | 22 | [14, 22, 36] |
| Burnet | 31 | [11, 31] |
| Callahan | 25 | [19, 25] |
| Collin | 3 | [3, 4, 32] |
| Dallas | 33 | [5, 6, 24, 30, 32, 33] |
| Denton | 26 | [4, 13, 26] |
| El Paso | 16 | [16, 23] |
| Fort Bend | 22 | [7, 14, 18, 22] |
| Harris | 29 | [2, 7, 8, 9, 18, 22, 29, 36, 38] |
| Hays | 27 | [21, 27] |
| Hidalgo | 15 | [15, 28] |
| Hunt | 3 | [3, 32] |
| Jefferson | 14 | [14, 36] |
| Johnson | 6 | [6, 17, 25] |
| Maverick | 23 | [23, 28] |
| Montgomery | 2 | [2, 8] |
| Nueces | 34 | [27, 34] |
| Parker | 12 | [12, 25] |
| Refugio | 15 | [15, 27] |
| San Patricio | 15 | [15, 27] |
| Tarrant | 12 | [6, 12, 24, 25, 30] |
| Travis | 37 | [10, 11, 27, 37] |
| Walker | 10 | [8, 10] |
| Williamson | 17 | [11, 17, 31] |
| Wise | 26 | [13, 26] |
