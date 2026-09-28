# Missouri gate — Wave 89 update (2026-09-28 ET)

## Status: MAP GATE CLOSED by SCOTUS; currency-test ADVANCED but NOT closed — still NO mo.html

### Litigation (SCOTUS docket 26A388) — DISPOSITION

- **Application:** People Not Politicians, et al. v. Robert Onder, et al., No. **26A388**, docketed Sept 22, 2026 (8th Cir 26-2797).
- **Sept 25, 2026:** Application for stay **GRANTED** (per curiam opinion). SCOTUS stayed the Sept 21 mandate / Sept 22 8th Cir order and the E.D. Mo. Sept 21–22 injunctions. Prior Sept 10 stay remains in effect.
- **Holding for Nov 2026:** District Court and Court of Appeals **must not** enjoin use of the **2022 map**, and **must not** require use of the **2025 map**, in the 2026 congressional election.
- Direct docket: https://www.supremecourt.gov/docket/docketfiles/html/public/26A388.html
- Opinion PDF: https://www.supremecourt.gov/opinions/25pdf/26a388_q86b.pdf
- Corroboration: SCOTUSblog case page; Missouri Independent (Sept 25); ABC17 (Sept 25); Justia Verdict (Sept 28).

### 8th Circuit Sept 28 5pm CT window

- The 8th Cir had stayed its own injunction until **Sept 28, 2026, 5:00 p.m. CT** pending SCOTUS review.
- **Moot for map choice:** SCOTUS already stayed that injunction on Sept 25 and ordered lower courts not to force the 2025 map. November remains on the **2022 map**.

### Currency-test (ADVANCED — Wave 89; still not closed statewide)

Public Nov 3, 2026 sample / voter-guide district labels matched to banked `mo-cd120.json` (2022 plan):

| County | FIPS | Sample / guide label | mo-cd120 | Match |
|--------|------|----------------------|----------|-------|
| Vernon | 29217 | U.S. Rep **District 4** (Alford / Herrera / Holbrook) — vernoncountymo.org Sample-Ballot-2.pdf | [4] | YES |
| St. Francois | 29187 | U.S. Rep **District 8** (Smith / Reichard / Sharpe) — sfcgov.org Nov sample PDF | [8] | YES |
| St. Charles | 29183 | Voter guide lists **District 2** (Wagner) **and** **District 3** (Onder) — sccmo.org | [2, 3] | YES (split) |
| Cole | 29051 | U.S. Rep **District 3** (Onder / Mann / Higgins) — colecounty.org Nov Combined Sample Ballot | [3] | YES |
| Greene | 29077 | U.S. Rep **District 7** (Burlison / Hesketh / Craig) — KSGF Greene sample PDF | [7] | YES |
| Jasper | 29097 | U.S. Rep **7th District** (Burlison / Hesketh / Craig) — KSGF Jasper sample PDF | [7] | YES |
| Barry | 29009 | U.S. Rep **District 7** (Burlison / Hesketh / Craig) — KSGF Barry sample PDF | [7] | YES |

- KSGF (Sept 24) hosts additional SW Missouri county sample PDFs (Christian, Newton, Taney, etc.) — same MO-7 corridor; not every PDF matrix-proved this pass beyond Greene/Jasper/Barry.
- **Still required before mo.html:** broader public Nov CD-label coverage for remaining districts (esp. MO-1/5/6 splits: St. Louis City/County, Jackson, Clay) — spot checks above are strong but not a 115-county close.
- PDFs mirrored under `tools/banked/mo-build/currency-w89/`.

### Continuity / parcel (still open)

- Certified Nov House pairs (Aug 25 SoS list) stand: MO-1 Bell/Berry; MO-2 Wagner/Wellman; MO-3 Onder/Mann; MO-4 Alford/Herrera; MO-5 Cleaver/Brattin; MO-6 Stigall/Smead; MO-7 Burlison/Hesketh; MO-8 Smith/Reichard (+ Libertarians per cert).
- Parcel/VTD residence flags still banked open: Brattin (Cass / Harrisonville vs MO-5 geography); Onder (Lake St. Louis split); Herrera (KC parcel vs Raymore office). Do not invent clearances.

### Ballot measures (sample-ballot corroboration Wave 89)

Vernon + St. Francois + St. Charles guides show statewide: **Amendments 3, 6, 7, 8** and **Proposition A** (plus Auditor + Wilson retention). Amendment **6** (initiative/referendum) appears on Nov samples — keep when drafting statewide; earlier bank notes that listed only 3/7/8 + Prop A are incomplete.

### Build rule

- **Still NO `mo.html`.** Map which-plan is settled (2022). Currency-test not closed statewide; continuity/parcel unfinished.
- Keep `tools/banked/mo-cd120.json` and `mo-build/`.

### Sources

1. https://www.supremecourt.gov/docket/docketfiles/html/public/26A388.html
2. https://www.supremecourt.gov/opinions/25pdf/26a388_q86b.pdf
3. https://www.scotusblog.com/cases/people-not-politicians-v-onder-2/
4. https://missouriindependent.com/2026/09/25/us-supreme-court-again-blocks-missouris-gerrymandered-congressional-map/
5. https://vernoncountymo.org/wp-content/uploads/Sample-Ballot-2.pdf
6. https://www.sfcgov.org/download/clerk/elections/Sample-Ballot-General-Election-November-3-2026.pdf
7. https://www.sccmo.org/2424/November-3-2026-General-Election-Voter-G
8. Prior: `wave88-scotus-26A388.md`
