// Wyoming county -> U.S. House district.
// ⚠ WYOMING HAS EXACTLY ONE AT-LARGE U.S. HOUSE SEAT, so there is NO county->district derivation
// to do and NO county is split: every one of the 23 counties sees an identical statewide ballot and
// every `d` is 1 by definition. This is the site's simplest map — the opposite extreme from
// Florida's 19 split counties.
// Confirmed two ways: the Secretary of State's "2026 Offices Up for Election" lists
// "U.S. House of Representatives (2 year term)" with NO district number, and the official primary
// results summary tabulates a single statewide "United States Representative" contest across all
// 23 counties.
// FIPS codes from the U.S. Census Bureau's 2020 national county file; the 23 entries match the
// Secretary of State's own county list exactly.
const COUNTIES = {
  "56001": { n: "Albany", d: 1 },
  "56003": { n: "Big Horn", d: 1 },
  "56005": { n: "Campbell", d: 1 },
  "56007": { n: "Carbon", d: 1 },
  "56009": { n: "Converse", d: 1 },
  "56011": { n: "Crook", d: 1 },
  "56013": { n: "Fremont", d: 1 },
  "56015": { n: "Goshen", d: 1 },
  "56017": { n: "Hot Springs", d: 1 },
  "56019": { n: "Johnson", d: 1 },
  "56021": { n: "Laramie", d: 1 },
  "56023": { n: "Lincoln", d: 1 },
  "56025": { n: "Natrona", d: 1 },
  "56027": { n: "Niobrara", d: 1 },
  "56029": { n: "Park", d: 1 },
  "56031": { n: "Platte", d: 1 },
  "56033": { n: "Sheridan", d: 1 },
  "56035": { n: "Sublette", d: 1 },
  "56037": { n: "Sweetwater", d: 1 },
  "56039": { n: "Teton", d: 1 },
  "56041": { n: "Uinta", d: 1 },
  "56043": { n: "Washakie", d: 1 },
  "56045": { n: "Weston", d: 1 },
};
