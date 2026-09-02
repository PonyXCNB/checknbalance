// Utah county -> U.S. House district.
// ⚠⚠ UTAH'S MAP CHANGED, AND EVERY OFF-THE-SHELF CENSUS PRODUCT IS WRONG FOR UTAH.
// MAP: "Map 1A" — Plaintiffs' Map 1 as adjusted — adopted by Judge Dianna M. Gibson of Utah's Third
// Judicial District in *League of Women Voters of Utah v. Utah State Legislature*, No. 220901712,
// after she struck the 2021 congressional plan under Proposition 4 on Aug 25, 2025 and enjoined the
// Legislature's replacement (SB 1012, "Map C") on Nov 10, 2025. Her Nov 21, 2025 "Order Clarifying
// Boundary Issues Raised by Lieutenant Governor" resolved eight boundary questions raised by Lt. Gov.
// Henderson — seven needed no change; one Sandy annexation was adjusted — and produced Map 1A, whose
// shapefile went to the parties Nov 20, 2025. Reconsideration and a stay were denied Dec 5, 2025.
// ✅ THE LITIGATION IS FINAL FOR 2026. The Utah Supreme Court dismissed the Legislature's appeal on
// PROCEDURAL grounds Feb 20, 2026 (not a merits ruling). The federal Elections Clause challenge,
// *Powers Gardner v. Henderson*, No. 2:26-cv-00084 (D. Utah, three-judge panel), was denied a
// preliminary injunction unanimously Feb 23, 2026, voluntarily dismissed July 7 and dismissed July 8,
// 2026, with no appeal to the Supreme Court.
//
// ⚠⚠ THE CENSUS CD119 FILE IS STALE FOR UTAH AND WAS PROVED SO, NOT ASSUMED. `tab20_cd11920_county20_st49.txt`
// encodes the 2021 plan — its decisive tell is that SALT LAKE COUNTY APPEARS IN ALL FOUR DISTRICTS,
// the old "pizza slice" split, and it puts Washington/Iron/Beaver/Kane/Garfield in CD2 where Map 1A
// puts them in CD3. CD119 describes the map that elected the 119th Congress; Utah's court map first
// applies to the 120th. No CD120 census product exists yet. Do not use any CD119 product for Utah.
//
// SOURCE OF THIS TABLE: the UGRC / Lt. Governor SGID layer "Utah US Congress Districts 2026 to 2032"
// (ArcGIS item d3388c1f7d894ab789247f6442855d66, owner UtahAGRC), joined to all 71,207 Utah 2020
// census blocks with their POP100 and internal points from TIGERweb, aggregated to counties.
// ✅ THE JOIN IS EXACT, NOT APPROXIMATE: total 3,271,616 — Utah's official 2020 apportionment
// population — with 0 blocks unassigned and ALL FOUR DISTRICTS ON EXACTLY 817,904, deviation ZERO.
//
// ✅ CURRENCY PROVED FROM ACTUAL BALLOTS, and it REFUTES the 2021 map. The Lt. Governor's own June 23,
// 2026 primary results were pulled for all 29 county jurisdictions
// (electionresults.utah.gov/results/public/api/elections/<county>/Primary06232026/data). Only three
// congressional primaries were contested — DEM CD1, REP CD2, REP CD3 — which places 24 counties
// directly and the remaining 5 by elimination into CD4.
//   ⭐ THE DECISIVE OBSERVATION: SALT LAKE COUNTY SHOWED EXACTLY ONE CONGRESSIONAL CONTEST, the
//   Democratic CD1 primary, and ZERO votes in either the CD2 or CD3 primary. Under the 2021 map Salt
//   Lake sat in all four districts, so both of those primaries would necessarily have appeared there.
//   They did not. Second diagnostic: Washington, Iron, Beaver, Kane and Garfield were CD2 under the
//   2021 map and voted CD3 in June 2026.
// ⚠ The currency test is BLIND to CD4 — no CD4 primary was contested in either party — and blind to
// the two big splits inside Salt Lake and Utah counties. Those rest on the block-level population
// join above, which is why that join was validated to zero deviation before being trusted.
//
// ⚠ ONLY THREE SPLIT COUNTIES: Salt Lake, Utah and Weber. An independent area-intersection check
// against TIGER county polygons agreed; every other apparent "split" was under 0.02% of area and held
// ZERO population — reprojection slivers, not real, and deliberately excluded.
// ✅ WEBER'S 328-PERSON CD3 SLIVER IS REAL, not a sliver artefact: 73 actual Republican CD3 primary
// votes were cast in Weber County on June 23, 2026.
// ⚠ CD1 IS WHOLLY INSIDE SALT LAKE COUNTY — the new Salt Lake-based seat is the entire county's
// plurality at 817,904 of 1,185,238, with the remaining 367,334 in CD4. Without `ds` on Salt Lake,
// the ~31% of the county's residents who vote in CD4 would never see their own U.S. House race.
// ✅ RE-VERIFIED INDEPENDENTLY ON AUG 31, 2026. All 29 county feeds were pulled again from
// electionresults.utah.gov and compared against this table: **24 of 29 counties testable, ZERO
// conflicts**; the 5 blind counties (Juab, Millard, Sanpete, Sevier, Tooele) held no congressional
// primary and are placed in CD4 by elimination. Both decisive observations reproduced: Salt Lake
// showed ONLY the CD1 contest (under the 2021 map it would necessarily have shown CD2 and CD3 too),
// and Weber showed BOTH the CD2 and CD3 contests, confirming its 328-person CD3 sliver is real.
const COUNTIES = {
  "49001": { n: "Beaver", d: 3 },
  "49003": { n: "Box Elder", d: 2 },
  "49005": { n: "Cache", d: 2 },
  "49007": { n: "Carbon", d: 3 },
  "49009": { n: "Daggett", d: 3 },
  "49011": { n: "Davis", d: 2 },
  "49013": { n: "Duchesne", d: 3 },
  "49015": { n: "Emery", d: 3 },
  "49017": { n: "Garfield", d: 3 },
  "49019": { n: "Grand", d: 3 },
  "49021": { n: "Iron", d: 3 },
  "49023": { n: "Juab", d: 4 },
  "49025": { n: "Kane", d: 3 },
  "49027": { n: "Millard", d: 4 },
  "49029": { n: "Morgan", d: 3 },
  "49031": { n: "Piute", d: 3 },
  "49033": { n: "Rich", d: 2 },
  "49035": { n: "Salt Lake", d: 1, ds: [1, 4] },
  "49037": { n: "San Juan", d: 3 },
  "49039": { n: "Sanpete", d: 4 },
  "49041": { n: "Sevier", d: 4 },
  "49043": { n: "Summit", d: 3 },
  "49045": { n: "Tooele", d: 4 },
  "49047": { n: "Uintah", d: 3 },
  "49049": { n: "Utah", d: 3, ds: [3, 4] },
  "49051": { n: "Wasatch", d: 3 },
  "49053": { n: "Washington", d: 3 },
  "49055": { n: "Wayne", d: 3 },
  "49057": { n: "Weber", d: 2, ds: [2, 3] },
};
