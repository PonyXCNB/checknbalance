# California build bank — Wave 88 (2026-09-25)

Source of truth for Nov 3, 2026 general nominees:
- CA SoS Certified List of Candidates, dated **Aug 27, 2026**
- PDF: https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf
- Press: https://www.sos.ca.gov/administration/news-releases-and-advisories/2026-news-releases-and-advisories/california-secretary-state-shirley-n-weber-phd-certifies-candidate-list-november-3-2026-general-election

California is **top-two / jungle primary**: two advance regardless of party. Party preference is self-declared ballot preference (same pattern as WA). Do NOT invent D-vs-R general fields when both nominees share a party.

## Map currency — RESOLVED which map (Wave 88)

**2026 ballots use the Prop 50 / AB 604 mid-decade congressional map**, NOT the 2021 CRC plan and NOT Census CD119.

Evidence:
- CA SoS redistricting FAQ: Prop 50 (Nov 4, 2025) temporarily uses legislatively drawn CDs for 2026–2030; “your 2026 primary and general election ballots will include candidates for the new district.” https://www.sos.ca.gov/elections/california-redistricting
- Statute: AB 604 (Chapter 96, Statutes of 2025), chaptered Aug 21, 2025 — https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB604
- Block equivalency: Statewide Database `AB604.zip` → `AB604.csv` (block GEOID → CD). Downloaded Wave 88: https://statewidedatabase.org/pub/data/d25/AB604.zip (also mirrored under `map/AB604.zip`).

**CD119 / CRC 2021 is STALE for California** (same class of trap as AL/FL/TN mid-decade builds).

### County → CD matrix (Wave 88)

Derived offline from `AB604.csv` (58 counties; 30 whole / 28 split). See:
- `map/county-cds-from-blocks.json`
- `map/county-cd-matrix.md`

Regenerate: `node tools/banked/ca-build/map/derive-county-cds.js` (expects `map/ab604/AB604.csv` unzipped).

**Plurality `d` is still OPEN** — JSON `d_blockhint` is **block-count only**, not 2020 population. Do not treat it as shippable `d`. Next: join Census 2020 block pop (or MCDC Geocorr / SWDB report) for pop-weighted plurality; then currency-test against county sample-ballot / voter-lookup CD labels when counties publish Nov materials.

**Colusa gotcha:** Senate Demographics summary table listed COLUSA under CD3; chaptered AB 604 §21404 lists COLUSA as a **whole county in CD4**, matching the block file and Appeal-Democrat (Feb 4, 2026: Yuba/Sutter/Colusa → CD4). Prefer statute + block file over the Senate HTML table.

Senate Demographics county list (useful cross-check, with that Colusa caveat): https://sdmg.senate.ca.gov/committeehome/2025-congressional-districts

## No U.S. Senate in 2026 — verified negative

Padilla Class III → 2028; Schiff Class I → 2030. Omit Senate from statewide ticket.

## Statewide ticket (certified Aug 27, 2026)

| Office | Nominee 1 | Pref | Nominee 2 | Pref | Notes |
|--------|-----------|------|-----------|------|-------|
| Governor | Xavier Becerra | D | Steve Hilton | R | |
| Lt. Governor | Fiona Ma | D | Gloria Romero | R | |
| Secretary of State | Shirley N. Weber* | D | Donald P. (Don) Wagner | R | *incumbent |
| Controller | Malia M. Cohen* | D | Herb W Morgan | R | |
| Treasurer | Eleni Kounalakis | D | Jennifer Hawks | R | |
| Attorney General | Rob Bonta* | D | Michael E. Gates | R | |
| Insurance Commissioner | Ben Allen | D | Jane Kim | D | **D-vs-D** top-two |
| Superintendent of Public Instruction | Richard Barrera | NP | Sonja Shaw | NP | Nonpartisan |
| BOE Dist 1 | Nelson Esparza | D | Shannon Grove | R | |
| BOE Dist 2 | Sally J. Lieber* | D | John Pimentel | D | **D-vs-D** |
| BOE Dist 3 | Mike Gipson | D | Samuel P. Sukaton | D | **D-vs-D** |
| BOE Dist 4 | Tom Umberg | D | Denis Bilodeau | R | |

Supreme Court retention (all 58 counties): Kelli M. Evans; Joshua Groban. Plus Court of Appeal retentions by district — card from the cert PDF, not invent.

## U.S. House (52 districts) — certified pairs

Copy from cert PDF pages 4–13. Notable same-party / NPP pairs:
- CD-4: Eric Jones (D) / Mike Thompson (D)
- CD-6: Richard Pan (D) / Kevin Kiley (**NPP**)
- CD-7: Doris Matsui (D) / Mai Vang (D)
- CD-11: Connie Chan (D) / Scott Wiener (D)
- CD-12: Jamie Joyce (D) / Lateefah Simon (D)
- CD-14: Melissa Hernandez (D) / Aisha Wahab (D)
- CD-29: Angélica María Dueñas (D) / Luz Maria Rivas (D)
- CD-34: Jimmy Gomez (D) / Angela Gonzales-Torres (D)
- CD-37: Sydney Kamlager-Dove (D) / Samantha Mota (D)
- CD-40: Ken Calvert (R) / Young Kim (R) — **R-vs-R**
- CD-1: Mike McGuire (D) / James Gallagher (R)

Full CD 1–52 pairs are in the cert PDF; do not paraphrase from aggregators when the PDF is available.

## Build blockers / next research (before ca.html)

1. ~~Map which-plan~~ **DONE Wave 88** — Prop 50 / AB 604.
2. **Pop-weighted plurality `d`** for 28 split counties (block-hint only today).
3. **Currency-test** vs public Nov sample-ballot / address-lookup CD labels (county materials still rolling out; statewide VBM mail starts ~Oct 5).
4. **Voices** for every upcoming nominee before ship (site-wide 0-gap rule).
5. Scope: federal + statewide + retention first; State Senate (odd districts) / Assembly later.
6. **Do not start ca.html** until pop-weighted `d` + currency-test close and COUNTY_DATA skeleton is drafted offline.

## Wave status

- **87:** Banked statewide + House pair inventory from SoS cert PDF.
- **88:** Map plan proved (AB 604); county↔CD `ds` matrix from official block equivalency; Senate-table Colusa error noted; no `ca.html`.
