// Washington county -> U.S. House district.
// MAP: the Washington State Redistricting Commission's congressional plan adopted Nov 15-16, 2021 AS
// AMENDED BY HCR 4407 (House 88-7 Feb 2, 2022; Senate 35-14 Feb 8, 2022; filed with the Secretary of
// State Feb 8, 2022). UNCHANGED since — it governed 2022, 2024 and 2026. Washington is on NEITHER
// half of the post-*Louisiana v. Callais* mid-decade redraw wave: HJR 4209, which would have let the
// Legislature draw a mid-decade congressional map, needed two-thirds and never reached the ballot.
// ⚠ *SOTO PALMER v. HOBBS* IS NOT A CONGRESSIONAL CASE. It struck and redrew LD-15 in the Yakima
// Valley — STATE LEGISLATIVE districts only. Washington's congressional plan has never been
// challenged in court. The two live cert petitions from the Ninth Circuit's Aug 27, 2025 affirmance
// (*Trevino v. Hobbs* No. 25-918 and *Garcia v. Hobbs* No. 25-901) are also legislative-map cases,
// and both were distributed for the Sept 28, 2026 conference — after ballots are set.
//
// ✅ CURRENCY PROVED 39 OF 39 COUNTIES, ZERO CONTRADICTIONS — the strongest test available (lesson
// #17). The Secretary of State's own certified Aug 4, 2026 primary feed was pulled for all 39
// counties and every "U.S. Representative - Congressional District N" contest each county actually
// voted in was extracted. Every county's real ballot matches this table exactly, including all seven
// split counties. Source: results.votewa.gov/results/public/api/elections/<county>-county-wa/20260804/data
// (isOfficialResults: true). County canvassing boards certified Aug 18, 2026; Secretary of State
// Steve Hobbs certified the statewide canvass Aug 21, 2026.
// Independently corroborated a third way: the SoS's own Aug 21 "Certification of Candidates to the
// General Election" prints each district's county composition in its office headers, and those
// headers match this table county for county.
//
// POPULATIONS: MCDC Geocorr 2022, county -> cd119, 2020 census population weights (no API key
// needed; the state parameter is "Wa53"). Total reconciles to Washington's 2020 census population
// of 7,705,281 exactly. Cross-checked against the Census CD119 county relationship file
// (tab20_cd11920_county20_st53.txt), which produces the identical 50 county x district pairs.
//
// ⚠ SEVEN SPLIT COUNTIES, and `ds` is NOT optional here: WA-9 IS THE POPULATION PLURALITY OF NO
// COUNTY. Both WA-7 and WA-9 lie ENTIRELY inside King County, so without `ds` on King a voter in
// south Seattle, Renton or Federal Way could click their county and never see their own U.S. House
// race — lesson #12 exactly.
// ⚠ KING'S `d` IS A DOCUMENTED JUDGEMENT CALL. Geocorr reads WA-7 at 769,663 and WA-9 at 768,838 —
// 825 people apart, or 0.05%. But both districts sit wholly inside King and an enacted congressional
// plan is equal to within a person, so their true populations are each ~770,528 and the gap is
// Geocorr's block-allocation noise, not a real margin. `d: 7` follows Geocorr's read and is
// corroborated by turnout: WA-7 cast 216,741 primary ballots inside King to WA-9's 142,356. Nothing
// is hidden by the call — `ds` carries all four King districts.
// ⚠ Douglas County's WA-8 sliver is only 601 people, but it is REAL, not a water sliver: Douglas
// County voters actually appeared on the CD8 ballot on Aug 4, 2026. Keep it.
// ✅ RE-VERIFIED INDEPENDENTLY ON AUG 31, 2026, AND THE RE-RUN WAS EXACT. All 39 county feeds were
// pulled again from results.votewa.gov and the set of "U.S. Representative - Congressional District N"
// contests each county actually voted in was compared against this table: **39 of 39 counties matched
// EXACTLY** — not merely as a subset — including all seven split counties and King's four-district ds.
const COUNTIES = {
  "53001": { n: "Adams", d: 4, ds: [4, 5] },
  "53003": { n: "Asotin", d: 5 },
  "53005": { n: "Benton", d: 4 },
  "53007": { n: "Chelan", d: 8 },
  "53009": { n: "Clallam", d: 6 },
  "53011": { n: "Clark", d: 3 },
  "53013": { n: "Columbia", d: 5 },
  "53015": { n: "Cowlitz", d: 3 },
  "53017": { n: "Douglas", d: 4, ds: [4, 8] },
  "53019": { n: "Ferry", d: 5 },
  "53021": { n: "Franklin", d: 4, ds: [4, 5] },
  "53023": { n: "Garfield", d: 5 },
  "53025": { n: "Grant", d: 4 },
  "53027": { n: "Grays Harbor", d: 6 },
  "53029": { n: "Island", d: 2 },
  "53031": { n: "Jefferson", d: 6 },
  "53033": { n: "King", d: 7, ds: [1, 7, 8, 9] },
  "53035": { n: "Kitsap", d: 6 },
  "53037": { n: "Kittitas", d: 8 },
  "53039": { n: "Klickitat", d: 4 },
  "53041": { n: "Lewis", d: 3 },
  "53043": { n: "Lincoln", d: 5 },
  "53045": { n: "Mason", d: 6 },
  "53047": { n: "Okanogan", d: 4 },
  "53049": { n: "Pacific", d: 3 },
  "53051": { n: "Pend Oreille", d: 5 },
  "53053": { n: "Pierce", d: 10, ds: [6, 8, 10] },
  "53055": { n: "San Juan", d: 2 },
  "53057": { n: "Skagit", d: 2 },
  "53059": { n: "Skamania", d: 3 },
  "53061": { n: "Snohomish", d: 1, ds: [1, 2, 8] },
  "53063": { n: "Spokane", d: 5 },
  "53065": { n: "Stevens", d: 5 },
  "53067": { n: "Thurston", d: 10, ds: [3, 10] },
  "53069": { n: "Wahkiakum", d: 3 },
  "53071": { n: "Walla Walla", d: 5 },
  "53073": { n: "Whatcom", d: 2 },
  "53075": { n: "Whitman", d: 5 },
  "53077": { n: "Yakima", d: 4 },
};
