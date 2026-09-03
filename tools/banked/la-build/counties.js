// Louisiana parish -> U.S. House district.
// MAP: SB 121 = ACT 2 OF THE 2026 REGULAR SESSION, signed May 29, 2026 - verified at the
// Legislature's own bill page, which reads "Signed by the Governor. Becomes Act No. 2".
// This is a THIRD map, not SB8/Act 2 of 2024 and not HB1. After *Louisiana v. Callais* (decided
// Apr 29, 2026) Gov. Landry suspended the scheduled May 16 congressional primaries on Apr 30 and
// the Legislature redrew. NO INJUNCTION IS LIVE: the three-judge W.D. La. court cancelled its June
// hearing and remedial proceedings are set for March 2-3, 2027, after this election.
// THE 6TH DISTRICT WAS DISMANTLED. Cleo Fields did not qualify for any House seat; he announced on
// July 21, 2026 that he would not seek re-election "in the 6th District or any other district in
// Louisiana" and is instead expected to run for Louisiana Senate District 14, his old seat, which
// came open when Sen. Larry Selders died July 7, 2026. Cook's own PVI file moves LA-06 from D+8 to
// R+16 - a -24.5 shift, an order of magnitude larger than any other district in the state.
// VALIDATED THREE WAYS, ZERO MISMATCHES:
//   (1) The Legislature's OWN published crosswalk - redist.legis.la.gov, Act 2 "Report - Population
//       and Party by Parish" - which is lesson #25 for the third build running: the state published
//       the answer outright. It parses to 79 parish-district records over 64 parishes, summing to
//       4,657,757, Louisiana's exact 2020 census population.
//   (2) The Act 2 block-equivalency file (142,968 blocks), independently yielding the identical 15
//       split parishes and identical district sets.
//   (3) THE CURRENCY TEST (lesson #17): because Act 7 moved U.S. House to a November open primary,
//       there was no spring House primary to test against - so the better test was run instead. The
//       Secretary of State's certified candidate list was queried for ALL 64 PARISHES (election id
//       344 = Nov 3, 2026) and the set of House district contests actually on each parish's ballot
//       matches this table EXACTLY. 64 of 64, zero contradictions.
// 15 split parishes, each split exactly two ways. Closest plurality call is St. Charles at
// 52.1%/47.9% (D2 27,393 to D6 25,156); nothing else is within reach of rounding.
// Per-district deviation from the 776,292.83 ideal runs -44 to +62, a range of 107 people (0.0138%).
// REACHABILITY: every district 1-6 is the population plurality of at least one parish, so none is
// orphaned. Parishes per plurality district: D1 4, D2 6, D3 10, D4 14, D5 23, D6 7 = 64.
// 'd' is the population-plurality district (drives map shading); 'ds' lists EVERY district in the
// parish (drives which races the drawer shows).
const COUNTIES = {
  "22001": { n: "Acadia", d: 3 },
  "22003": { n: "Allen", d: 4 },
  "22005": { n: "Ascension", d: 6, ds: [2, 6] },
  "22007": { n: "Assumption", d: 6 },
  "22009": { n: "Avoyelles", d: 5 },
  "22011": { n: "Beauregard", d: 4 },
  "22013": { n: "Bienville", d: 4 },
  "22015": { n: "Bossier", d: 4 },
  "22017": { n: "Caddo", d: 4 },
  "22019": { n: "Calcasieu", d: 3, ds: [3, 4] },
  "22021": { n: "Caldwell", d: 5 },
  "22023": { n: "Cameron", d: 3 },
  "22025": { n: "Catahoula", d: 5 },
  "22027": { n: "Claiborne", d: 4 },
  "22029": { n: "Concordia", d: 5 },
  "22031": { n: "De Soto", d: 4 },
  "22033": { n: "East Baton Rouge", d: 6, ds: [2, 6] },
  "22035": { n: "East Carroll", d: 5 },
  "22037": { n: "East Feliciana", d: 5 },
  "22039": { n: "Evangeline", d: 4 },
  "22041": { n: "Franklin", d: 5 },
  "22043": { n: "Grant", d: 5 },
  "22045": { n: "Iberia", d: 3 },
  "22047": { n: "Iberville", d: 2, ds: [2, 6] },
  "22049": { n: "Jackson", d: 5 },
  "22051": { n: "Jefferson", d: 1, ds: [1, 2] },
  "22053": { n: "Jefferson Davis", d: 3 },
  "22055": { n: "Lafayette", d: 3 },
  "22057": { n: "Lafourche", d: 6, ds: [1, 6] },
  "22059": { n: "LaSalle", d: 5 },
  "22061": { n: "Lincoln", d: 5 },
  "22063": { n: "Livingston", d: 6 },
  "22065": { n: "Madison", d: 5 },
  "22067": { n: "Morehouse", d: 5 },
  "22069": { n: "Natchitoches", d: 4 },
  "22071": { n: "Orleans", d: 2, ds: [1, 2] },
  "22073": { n: "Ouachita", d: 5 },
  "22075": { n: "Plaquemines", d: 1 },
  "22077": { n: "Pointe Coupee", d: 6 },
  "22079": { n: "Rapides", d: 5 },
  "22081": { n: "Red River", d: 4 },
  "22083": { n: "Richland", d: 5 },
  "22085": { n: "Sabine", d: 4 },
  "22087": { n: "St. Bernard", d: 2, ds: [1, 2] },
  "22089": { n: "St. Charles", d: 2, ds: [2, 6] },
  "22091": { n: "St. Helena", d: 5 },
  "22093": { n: "St. James", d: 2 },
  "22095": { n: "St. John the Baptist", d: 2, ds: [2, 6] },
  "22097": { n: "St. Landry", d: 3, ds: [3, 5] },
  "22099": { n: "St. Martin", d: 3, ds: [3, 6] },
  "22101": { n: "St. Mary", d: 3 },
  "22103": { n: "St. Tammany", d: 1 },
  "22105": { n: "Tangipahoa", d: 5, ds: [1, 5] },
  "22107": { n: "Tensas", d: 5 },
  "22109": { n: "Terrebonne", d: 1, ds: [1, 3] },
  "22111": { n: "Union", d: 4 },
  "22113": { n: "Vermilion", d: 3 },
  "22115": { n: "Vernon", d: 4 },
  "22117": { n: "Washington", d: 5 },
  "22119": { n: "Webster", d: 4 },
  "22121": { n: "West Baton Rouge", d: 6, ds: [2, 6] },
  "22123": { n: "West Carroll", d: 5 },
  "22125": { n: "West Feliciana", d: 5 },
  "22127": { n: "Winn", d: 5 },
};
