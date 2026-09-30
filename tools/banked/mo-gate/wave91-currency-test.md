# Missouri currency-test — Wave 91 (2026-09-30 ET)

## Status: MAP GATE CLOSED (Wave 89); currency-test FURTHER ADVANCED — still NOT closed statewide — still NO mo.html

Map which-plan unchanged: SCOTUS **26A388** stay → November uses **2022 map**.

### New Wave 91 evidence

| County / style | FIPS | Sample / publication | mo-cd120 | Match |
|----------------|------|----------------------|----------|-------|
| Jackson (Kansas City Election Board ballot style) | 29095 | Official Nov 3, 2026 ballot `U.S. REPRESENTATIVE DISTRICT 5` — Brattin (R) / Cleaver (D) / Langkraehr (L). Banked `currency-w91/jackson-kc-cd5.pdf` (from kceb.org/ballots/). 26 probed KC styles all CD-5. | [4, 5, 6] | **PARTIAL YES** — CD-5 sample style closed for KC portion; CD-4 and CD-6 styles still not public without address lookup (JCEB sample-ballot tool is name/DOB gated) |

### Continuity note (Brattin)

KC CD-5 ballot lists **Rick Brattin** as the Republican nominee against Cleaver — consistent with Brattin running in **MO-5** under the 2022 map (not Cass CD-4). Still leave parcel/Harrisonville continuity open; do not invent street clearance.

### Still OPEN (unchanged blockers)

| Split / item | Status |
|--------------|--------|
| St. Louis County [1, 2] | No Nov countywide FIO/sample with both CD labels. Live `FIO.pdf` is **April 7, 2026 municipal** (dead end this pass). Guide-level CD-1+CD-2 still stands (St. Louis American). |
| Jackson CD-4 / CD-6 sample styles | OPEN — only KC CD-5 styles unlocked |
| Clay [5, 6] | Map-notice + ArcGIS lookup only; no countywide PDF |
| Jefferson [3, 8] | jeffcomo.gov still lookup-only / no county-wide sample |
| Boone [3, 4] | Clerk confirms 2022 map for Nov; no public dual-district publication PDF |
| Warren [2, 3] | Clerk site still August primary samples only |
| Onder / Herrera parcels | OPEN |

### Attempted downloads (not currency closes)

- Polk / Hickory Nov PDFs fetched; Polk is CID-font unreadable to text extract; Hickory is image-only. Not used as CD-label proof this wave.
- St. Louis County `extcontent.stlouisco.com/BOE/FIO/FIO.pdf` = April municipal — discarded.

### Build rule

- **Still NO `mo.html`.** Need St. Louis County / remaining Jackson styles / Clay / Jefferson / Boone / Warren sample-level closes + continuity/parcel.
- Keep `tools/banked/mo-cd120.json`.

### Sources

1. https://www.kceb.org/ballots/01-00033-01-NON.pdf (and sibling KC styles — all CD-5)
2. Prior Wave 90 bank + SCOTUS 26A388 notes
3. https://www.voteclaycountymo.gov/elections (2022-map implementation notice; sample via ArcGIS lookup)
4. https://jeffcomo.gov/386/County-wide-Sample-Ballot (still no county-wide Nov sample)
