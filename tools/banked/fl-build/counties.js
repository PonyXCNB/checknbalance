// Florida county -> U.S. House district, for the map that governs Nov 3, 2026.
//
// MAP: plan EOGPCRP2026, enacted as HB 1D (2026D), Chapter 2026-229 — passed Apr 29, 2026
// (House 83-28, Senate 21-17), signed by Gov. DeSantis May 4, 2026 in a special session
// following Louisiana v. Callais. It redrew 21 of 28 districts.
//
// CURRENCY (lesson #17/#13 — this is the question an arithmetic proof CANNOT answer):
//   - Preliminary injunction DENIED May 26, 2026 (Judge Hawkes, Leon County Circuit), in the
//     consolidated Fair Districts suits (Equal Ground Education Fund v. Byrd; Common Cause v.
//     DeSantis; Thompson-Wynn v. Byrd). 1st DCA denied expedited review Jun 1.
//   - Florida Supreme Court denied the emergency petition Jun 10, 2026 FOR LACK OF JURISDICTION
//     (a jurisdictional denial, NOT a merits affirmance). NBC News, Jun 11, 2026.
//   - Merits appeal remains PENDING. Re-check the docket in early October 2026.
//   - PROVED against the state's own returns: all 67 Florida Election Watch county pages for the
//     Aug 18, 2026 primary were harvested and every "Representative in Congress, District N"
//     contest extracted. 65 of 67 counties testable (Brevard and Monroe held no congressional
//     primary), 65 consistent, ZERO conflicts. Of those, 18 counties DISCRIMINATE between the old
//     and new maps and ALL 18 match HB 1D; zero match the old plan. Citrus 12->15, Hernando
//     12->15, DeSoto/Hardee 18->16, Glades/Highlands/Okeechobee 18->9, Hendry 18->22,
//     Indian River 8->9, Pinellas [13,14]->[13,16], Sarasota [17]->[16,17].
//
// ⚠ THE CENSUS CD119 RELATIONSHIP FILE IS STALE FOR FLORIDA — proved, not assumed: it encodes the
// 2022 P000C0109 plan and DISAGREES WITH HB 1D ON 20 OF 67 COUNTIES. Do not use it for Florida.
//
// SOURCE: the Legislature's own published crosswalk — the "Assigned District Splits (by County)"
// report in the Florida Senate's Congressional Redistricting Data Packet
// (flsenate.gov/PublishedContent/Session/Congressional/Data_Packet.pdf), cross-checked against the
// EOGPCRP2026 block-assignment file (390,066 blocks). Zero disagreements on all 67 counties.
// Every district's pieces sum to 769,221 (D8 = 769,220); statewide total 21,538,187 = Florida's
// exact 2020 census population.
//
// `d` = population plurality (drives map shading). `ds` = EVERY overlapping district, ordered by
// population descending, so ds[0] === d. 48 whole counties, 19 split.
// ⚠ ds IS LOAD-BEARING HERE (lesson #12 at full stretch): FL-24, FL-25 and FL-26 are the plurality
// of NO county and are reachable ONLY through Miami-Dade / Broward / Palm Beach. Delete ds from the
// big southeastern counties and three districts vanish from the site. Five more districts sit
// ENTIRELY inside one county — FL-10 (Orange), FL-14 (Hillsborough), FL-20 (Broward),
// FL-23 (Palm Beach), FL-27 (Miami-Dade).
// ⚠ TWO ZERO-POPULATION OVERLAPS ARE DELIBERATELY EXCLUDED: the Legislature's report lists
// Hillsborough x D16 = 0 and Orange x D7 = 0 — water/cartographic slivers with no residents.
// Carding them would tell Tampa voters they might be in FL-16 and Orlando voters FL-7, both false.
const COUNTIES = {
  "12001": { n: "Alachua", d: 3 },
  "12003": { n: "Baker", d: 3 },
  "12005": { n: "Bay", d: 2 },
  "12007": { n: "Bradford", d: 3 },
  "12009": { n: "Brevard", d: 8 },
  "12011": { n: "Broward", d: 20, ds: [20, 22, 25, 26, 24] },
  "12013": { n: "Calhoun", d: 2 },
  "12015": { n: "Charlotte", d: 17 },
  "12017": { n: "Citrus", d: 15 },
  "12019": { n: "Clay", d: 4 },
  "12021": { n: "Collier", d: 19, ds: [19, 22] },
  "12023": { n: "Columbia", d: 3 },
  "12027": { n: "DeSoto", d: 16 },
  "12029": { n: "Dixie", d: 3 },
  "12031": { n: "Duval", d: 5, ds: [5, 4] },
  "12033": { n: "Escambia", d: 1 },
  "12035": { n: "Flagler", d: 6 },
  "12037": { n: "Franklin", d: 2 },
  "12039": { n: "Gadsden", d: 2 },
  "12041": { n: "Gilchrist", d: 3 },
  "12043": { n: "Glades", d: 9 },
  "12045": { n: "Gulf", d: 2 },
  "12047": { n: "Hamilton", d: 3 },
  "12049": { n: "Hardee", d: 16 },
  "12051": { n: "Hendry", d: 22 },
  "12053": { n: "Hernando", d: 15 },
  "12055": { n: "Highlands", d: 9 },
  "12057": { n: "Hillsborough", d: 14, ds: [14, 12, 15] },
  "12059": { n: "Holmes", d: 2 },
  "12061": { n: "Indian River", d: 9 },
  "12063": { n: "Jackson", d: 2 },
  "12065": { n: "Jefferson", d: 2 },
  "12067": { n: "Lafayette", d: 3, ds: [3, 2] },
  "12069": { n: "Lake", d: 11, ds: [11, 6] },
  "12071": { n: "Lee", d: 19, ds: [19, 17] },
  "12073": { n: "Leon", d: 2 },
  "12075": { n: "Levy", d: 3 },
  "12077": { n: "Liberty", d: 2 },
  "12079": { n: "Madison", d: 2 },
  "12081": { n: "Manatee", d: 16 },
  "12083": { n: "Marion", d: 3, ds: [3, 6] },
  "12085": { n: "Martin", d: 21 },
  "12086": { n: "Miami-Dade", d: 27, ds: [27, 28, 24, 26, 25] },
  "12087": { n: "Monroe", d: 28 },
  "12089": { n: "Nassau", d: 4 },
  "12091": { n: "Okaloosa", d: 1 },
  "12093": { n: "Okeechobee", d: 9 },
  "12095": { n: "Orange", d: 10, ds: [10, 11, 8, 9] },
  "12097": { n: "Osceola", d: 9, ds: [9, 18] },
  "12099": { n: "Palm Beach", d: 23, ds: [23, 21, 25, 22] },
  "12101": { n: "Pasco", d: 12, ds: [12, 15, 13] },
  "12103": { n: "Pinellas", d: 13, ds: [13, 16] },
  "12105": { n: "Polk", d: 18, ds: [18, 16, 9] },
  "12107": { n: "Putnam", d: 6 },
  "12109": { n: "St. Johns", d: 5, ds: [5, 6] },
  "12111": { n: "St. Lucie", d: 21 },
  "12113": { n: "Santa Rosa", d: 1 },
  "12115": { n: "Sarasota", d: 17, ds: [17, 16] },
  "12117": { n: "Seminole", d: 7 },
  "12119": { n: "Sumter", d: 11 },
  "12121": { n: "Suwannee", d: 3 },
  "12123": { n: "Taylor", d: 2 },
  "12125": { n: "Union", d: 3 },
  "12127": { n: "Volusia", d: 7, ds: [7, 6] },
  "12129": { n: "Wakulla", d: 2 },
  "12131": { n: "Walton", d: 1, ds: [1, 2] },
  "12133": { n: "Washington", d: 2 },
};
