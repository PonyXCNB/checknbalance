# CA county → CD matrix (AB 604 block equivalency)

Source: Statewide Database `AB604.csv` (block GEOID → CD), downloaded Wave 88 from https://statewidedatabase.org/pub/data/d25/AB604.zip

**Plurality `d` is BLOCK-COUNT hint only** — not population-weighted. Do not ship `ca.html` until pop-weighted `d` + currency-test close.

| FIPS | County | Whole? | d_blockhint | ds |
|------|--------|--------|-------------|----|
| 06001 | Alameda | split | 12 | 12, 14, 17, 10 |
| 06003 | Alpine | YES | 5 | 5 |
| 06005 | Amador | YES | 5 | 5 |
| 06007 | Butte | YES | 1 | 1 |
| 06009 | Calaveras | YES | 5 | 5 |
| 06011 | Colusa | YES | 4 | 4 |
| 06013 | Contra Costa | split | 10 | 10, 8, 9 |
| 06015 | Del Norte | YES | 2 | 2 |
| 06017 | El Dorado | split | 7 | 7, 3, 5 |
| 06019 | Fresno | split | 21 | 21, 22, 5, 20, 18, 13 |
| 06021 | Glenn | YES | 1 | 1 |
| 06023 | Humboldt | YES | 2 | 2 |
| 06025 | Imperial | YES | 25 | 25 |
| 06027 | Inyo | YES | 5 | 5 |
| 06029 | Kern | split | 20 | 20, 22, 23 |
| 06031 | Kings | split | 20 | 20, 22, 18 |
| 06033 | Lake | split | 1 | 1, 4 |
| 06035 | Lassen | YES | 1 | 1 |
| 06037 | Los Angeles | split | 36 | 36, 27, 30, 28, 44, 43, 31, 41, 37, 38, 32, 34, 29, 42, 26, 23, 45, 35 |
| 06039 | Madera | split | 5 | 5, 13, 22 |
| 06041 | Marin | YES | 2 | 2 |
| 06043 | Mariposa | YES | 5 | 5 |
| 06045 | Mendocino | split | 1 | 1, 2 |
| 06047 | Merced | YES | 13 | 13 |
| 06049 | Modoc | YES | 2 | 2 |
| 06051 | Mono | YES | 5 | 5 |
| 06053 | Monterey | split | 18 | 18, 19 |
| 06055 | Napa | YES | 4 | 4 |
| 06057 | Nevada | YES | 3 | 3 |
| 06059 | Orange | split | 47 | 47, 46, 45, 42, 40, 41, 38, 49 |
| 06061 | Placer | split | 3 | 3, 6, 4 |
| 06063 | Plumas | YES | 1 | 1 |
| 06065 | Riverside | split | 25 | 25, 39, 40, 48, 23, 35, 33 |
| 06067 | Sacramento | split | 7 | 7, 6, 3, 4, 8 |
| 06069 | San Benito | YES | 18 | 18 |
| 06071 | San Bernardino | split | 23 | 23, 33, 35, 28, 31, 25 |
| 06073 | San Diego | split | 50 | 50, 51, 52, 49, 48 |
| 06075 | San Francisco | split | 11 | 11, 15 |
| 06077 | San Joaquin | split | 9 | 9, 13, 7, 8, 5 |
| 06079 | San Luis Obispo | split | 24 | 24, 19 |
| 06081 | San Mateo | split | 15 | 15, 16 |
| 06083 | Santa Barbara | YES | 24 | 24 |
| 06085 | Santa Clara | split | 16 | 16, 17, 18, 19 |
| 06087 | Santa Cruz | split | 19 | 19, 18 |
| 06089 | Shasta | YES | 2 | 2 |
| 06091 | Sierra | YES | 1 | 1 |
| 06093 | Siskiyou | YES | 2 | 2 |
| 06095 | Solano | YES | 8 | 8 |
| 06097 | Sonoma | split | 1 | 1, 4, 2 |
| 06099 | Stanislaus | split | 13 | 13, 5 |
| 06101 | Sutter | YES | 4 | 4 |
| 06103 | Tehama | YES | 1 | 1 |
| 06105 | Trinity | YES | 2 | 2 |
| 06107 | Tulare | split | 20 | 20, 22, 21 |
| 06109 | Tuolumne | YES | 5 | 5 |
| 06111 | Ventura | split | 26 | 26, 24, 32 |
| 06113 | Yolo | split | 4 | 4, 6, 8 |
| 06115 | Yuba | YES | 4 | 4 |

Whole counties: 30 / 58. Split: 28.

## Colusa note
Senate Office of Demographics table listed COLUSA under CD3; chaptered AB 604 §21404 lists COLUSA as a **whole county in CD4**, matching the block file (1,612/1,612 blocks → 4) and Appeal-Democrat (Feb 4, 2026). Prefer statute + block file over the Senate summary table.
