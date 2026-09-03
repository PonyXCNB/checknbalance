// Test 3 — Data logic tests: run the pages' data + merge logic in Node and
// assert on the results.
//
//   nc.html /  — getCountyElections(sample county) returns the full merged
//   sc.html      race list with zero blank titles, valid types, and
//                well-formed candidates; all counties merge cleanly.
//   state.html — the openPanel merge ([...STATE_RACES[abbr], ...buildSeats(abbr)])
//                never shows the same office twice, has the right specials for
//                OH/FL, no Senate/Governor for WA, and delegate-only for DC.
//
// Run:  node tests/data-logic.js
"use strict";
const fs = require("fs");
const { extractInlineScripts, cutAtD3, runScript, makeChecker } = require("./lib");

const { check, summary } = makeChecker();
const VALID_TYPES = new Set(["past", "upcoming", "scheduled"]);
const VALID_PARTIES = new Set(["D", "R", "I", "L", "G", "NP"]);   // NP = nonpartisan office (DC school board)

// ---------------------------------------------------------------
// Fully built state pages (nc.html pattern)
// If a race count changes because races were legitimately added or
// removed, update it here (and SITE_META.lastUpdated on that page).
// ---------------------------------------------------------------
const STATE_PAGES = [
  { page: "nc.html", countyCount: 100, sampleFips: "37129", sampleName: "New Hanover", expectedRaces: 15 },
  { page: "sc.html", countyCount: 46,  sampleFips: "45019", sampleName: "Charleston",  expectedRaces: 17 },
  { page: "ga.html", countyCount: 159, sampleFips: "13121", sampleName: "Fulton",      expectedRaces: 18 },
  { page: "va.html", countyCount: 133, sampleFips: "51059", sampleName: "Fairfax",     expectedRaces: 9 },
  { page: "md.html", countyCount: 24,  sampleFips: "24031", sampleName: "Montgomery",  expectedRaces: 10 },
  { page: "de.html", countyCount: 3,   sampleFips: "10003", sampleName: "New Castle",  expectedRaces: 8 },
  { page: "nj.html", countyCount: 21,  sampleFips: "34003", sampleName: "Bergen",      expectedRaces: 6 },
  { page: "ny.html", countyCount: 62,  sampleFips: "36001", sampleName: "Albany",      expectedRaces: 6 },
  { page: "ri.html", countyCount: 5,   sampleFips: "44007", sampleName: "Providence",  expectedRaces: 10 },
  { page: "nh.html", countyCount: 10,  sampleFips: "33011", sampleName: "Hillsborough", expectedRaces: 6 },
  { page: "ct.html", countyCount: 8,   sampleFips: "09011", sampleName: "New London",  expectedRaces: 9 },
  { page: "vt.html", countyCount: 14,  sampleFips: "50007", sampleName: "Chittenden",  expectedRaces: 12 },
  { page: "me.html", countyCount: 16,  sampleFips: "23019", sampleName: "Penobscot",   expectedRaces: 9 },
  { page: "ma.html", countyCount: 14,  sampleFips: "25025", sampleName: "Suffolk",     expectedRaces: 15 },
  { page: "wv.html", countyCount: 55,  sampleFips: "54039", sampleName: "Kanawha",     expectedRaces: 10 },
  { page: "oh.html", countyCount: 88,  sampleFips: "39035", sampleName: "Cuyahoga",    expectedRaces: 17 },
  { page: "ky.html", countyCount: 120, sampleFips: "21111", sampleName: "Jefferson",   expectedRaces: 12 },
  { page: "in.html", countyCount: 92,  sampleFips: "18097", sampleName: "Marion",      expectedRaces: 12 },
  { page: "ia.html", countyCount: 99,  sampleFips: "19153", sampleName: "Polk",        expectedRaces: 15 },
  // Cook is deliberately the IL sample: it overlaps 11 districts via `ds`, so this count
  // (9 statewide + 11 districts x 2 races) is the regression guard on the multi-district merge.
  { page: "il.html", countyCount: 102, sampleFips: "17031", sampleName: "Cook",        expectedRaces: 31 },
  // Hinds is deliberately the MS sample: it is split between MS-2 and MS-3 via `ds`
  // (Jackson straddles the line), so this count guards the multi-district merge here too.
  { page: "ms.html", countyCount: 82,  sampleFips: "28049", sampleName: "Hinds",       expectedRaces: 15 },
  // Pulaski is deliberately the AR sample: Little Rock is split THREE ways (AR-1/2/4) via `ds`
  { page: "ar.html", countyCount: 75,  sampleFips: "05119", sampleName: "Pulaski",     expectedRaces: 33 },
  // Sarpy is deliberately the NE sample: it is split between NE-1 and NE-2 via `ds`
  { page: "ne.html", countyCount: 93,  sampleFips: "31153", sampleName: "Sarpy",       expectedRaces: 28 },
  // Bernalillo is deliberately the NM sample: Albuquerque is split between NM-1 and NM-2 via `ds`
  { page: "nm.html", countyCount: 33,  sampleFips: "35001", sampleName: "Bernalillo",  expectedRaces: 27 },
  // Adams is deliberately the CO sample: it spans FOUR districts (CO-4/6/7/8) via `ds`
  { page: "co.html", countyCount: 64,  sampleFips: "08001", sampleName: "Adams",       expectedRaces: 24 },
  { page: "or.html", countyCount: 36,  sampleFips: "41051", sampleName: "Multnomah",   expectedRaces: 13 },
  { page: "nv.html", countyCount: 17,  sampleFips: "32003", sampleName: "Clark",       expectedRaces: 19 },
  // South Dakota elects ONE at-large U.S. House member, so no county is split and every
  // county sees the identical race list — Minnehaha (Sioux Falls) is simply the largest.
  { page: "sd.html", countyCount: 66,  sampleFips: "46099", sampleName: "Minnehaha",   expectedRaces: 18 },
  // Ada is deliberately the ID sample: it is Idaho's ONLY split county (Boise sits mostly
  // in CD2 while Meridian and Eagle sit in CD1), so it carries `ds` and this count guards
  // the multi-district merge — 16 statewide + 3 races each from CD1 and CD2.
  { page: "id.html", countyCount: 44,  sampleFips: "16001", sampleName: "Ada",         expectedRaces: 22 },
  // Pondera is deliberately the MT sample: it is Montana's ONLY split county — the belief
  // that Montana splits none is wrong — so it carries `ds` and guards the multi-district merge.
  { page: "mt.html", countyCount: 56,  sampleFips: "30073", sampleName: "Pondera",     expectedRaces: 14 },
  // Philadelphia is deliberately the PA sample: PA-2 and PA-3 sit ENTIRELY inside it and PA-5
  // reaches in as well, so it carries ds:[2,3,5]. PA-3 is the plurality district of NO county
  // in the state — without `ds` it would be unreachable statewide (lesson #12), so this count
  // (4 statewide + 3 districts x 2 races) is the regression guard on that.
  { page: "pa.html", countyCount: 67,  sampleFips: "42101", sampleName: "Philadelphia", expectedRaces: 10 },
  // Davidson is deliberately the TN sample: under the map enacted May 7, 2026 (Pub. Ch. 3,
  // 2nd Extraordinary Session) Nashville is split THREE ways — districts 4, 6 and 7 — so it
  // carries `ds` and this count guards the multi-district merge on the new lines.
  { page: "tn.html", countyCount: 95,  sampleFips: "47037", sampleName: "Davidson",     expectedRaces: 16 },
  // Honolulu is deliberately the HI sample: it is Hawaii's ONLY split county and the only one
  // touching HI-1 (which sits entirely inside it), so it carries `ds` and this count guards the
  // multi-district merge. HI-1 holds the county as an outright 71.46% majority, not a plurality.
  { page: "hi.html", countyCount: 5,   sampleFips: "15003", sampleName: "Honolulu",     expectedRaces: 10 },
  // Jefferson is deliberately the AL sample: Birmingham is split between AL-7 (the city core,
  // and the county plurality) and AL-6 (the southern suburbs), so it carries `ds` and this count
  // guards the multi-district merge on the 2023 legislature map now in force.
  { page: "al.html", countyCount: 67,  sampleFips: "01073", sampleName: "Jefferson",    expectedRaces: 22 },
  // Milwaukee is deliberately the WI sample: it is split THREE ways (WI-4 holds 78.4% of it and
  // sits ENTIRELY inside it, with WI-1 and WI-5 reaching in), so it carries ds:[1,4,5] and this
  // count (6 statewide + 3 districts x 2 races) guards the multi-district merge.
  { page: "wi.html", countyCount: 72,  sampleFips: "55079", sampleName: "Milwaukee",    expectedRaces: 12 },
  // Minnesota: Hennepin is a THREE-district county (ds:[3,5,6]) and the sample is chosen for that
  // reason — MN-3 is the population plurality of NO county, so this is the only kind of county
  // through which MN-3 is reachable at all. 7 statewide (5 upcoming + 2 past) + 3 districts x 2.
  { page: "mn.html", countyCount: 87,  sampleFips: "27053", sampleName: "Hennepin",     expectedRaces: 13 },
  // North Dakota: one at-large district, no split counties. 10 statewide + the single House race.
  { page: "nd.html", countyCount: 53,  sampleFips: "38015", sampleName: "Burleigh",     expectedRaces: 11 },
  { page: "ks.html", countyCount: 105, sampleFips: "20209", sampleName: "Wyandotte",    expectedRaces: 10 },
  // Oklahoma: Oklahoma County is the deliberate sample because it is the only THREE-district
  // county in the state (ds:[3,4,5]) and so guards the multi-district merge. 14 statewide
  // (12 upcoming + the 2 Aug 25 state questions) + 3 districts x 1 race each.
  { page: "ok.html", countyCount: 77,  sampleFips: "40109", sampleName: "Oklahoma",     expectedRaces: 17 },
  // Arizona: Maricopa is the deliberate sample and the most extreme ds case on the site — it
  // touches EIGHT of the nine districts (all but AZ-6), and AZ-3, AZ-4, AZ-5 and AZ-8 are the
  // population plurality of NO county, so they are reachable ONLY through it. 9 statewide +
  // 8 districts x 1 race each.
  { page: "az.html", countyCount: 15,  sampleFips: "04013", sampleName: "Maricopa",     expectedRaces: 17 },
  // Florida: Miami-Dade is the deliberate sample — it touches FIVE districts (ds:[27,28,24,26,25])
  // and FL-24, FL-25 and FL-26 are the population plurality of NO county, so they are reachable
  // ONLY through Miami-Dade, Broward and Palm Beach (lesson #12). 13 statewide (7 upcoming incl.
  // the ballot-measure card + 6 Aug 18 primary cards) + 10 district races across those 5 seats.
  { page: "fl.html", countyCount: 67,  sampleFips: "12086", sampleName: "Miami-Dade",   expectedRaces: 23 },
  // Wyoming: ONE at-large U.S. House seat, so NO county is split and every county sees an
  // identical ballot — the simplest map on the site and the exact opposite of Florida's.
  // 15 statewide (8 upcoming incl. the retention and ballot-measure cards + 7 Aug 18 primary
  // cards) + 3 at-large House races. Every one of the 23 counties returns 18.
  { page: "wy.html", countyCount: 23,  sampleFips: "56021", sampleName: "Laramie",      expectedRaces: 18 },
  // Utah: the court-drawn Map 1A. Only THREE split counties (Salt Lake [1,4], Utah [3,4],
  // Weber [2,3]) and an unusually THIN statewide ballot — no U.S. Senate, no Governor, no
  // statewide executive office at all, so STATEWIDE is just 2 constitutional amendments plus
  // the appellate judicial retention card. Salt Lake carries ds, so it returns 3 + 2 = 5.
  { page: "ut.html", countyCount: 29,  sampleFips: "49035", sampleName: "Salt Lake",    expectedRaces: 5 },
  // King is deliberately the WA sample: it touches FOUR districts (1, 7, 8, 9) via `ds`, and
  // BOTH WA-7 AND WA-9 SIT ENTIRELY INSIDE IT — WA-9 is the population plurality of no county at
  // all, so without `ds` a voter in south Seattle or Renton would never see their own U.S. House
  // race (lesson #12). 8 statewide (5 Supreme Court seats + 3 initiatives) + 4 districts = 12.
  { page: "wa.html", countyCount: 39,  sampleFips: "53033", sampleName: "King",         expectedRaces: 12 },
  { page: "mi.html", countyCount: 83,  sampleFips: "26163", sampleName: "Wayne",        expectedRaces: 15 },
  // East Baton Rouge is deliberately the LA sample: it is split between LA-02 and LA-06 via `ds`,
  // and LA-06 is the seat *Louisiana v. Callais* redrew, so this count guards the merge on the new map.
  { page: "la.html", countyCount: 64,  sampleFips: "22033", sampleName: "East Baton Rouge", expectedRaces: 14 },
];

for (const cfg of STATE_PAGES) {
  console.log(`— ${cfg.page} —`);
  const code = extractInlineScripts(cfg.page)[0]; // script #1 = data + logic, no d3
  const extra = `
    __exports.getCountyElections = getCountyElections;
    __exports.COUNTIES = COUNTIES;
    __exports.SITE_META = SITE_META;
    __exports.HOUSE_RACES = HOUSE_RACES;
  `;
  const { sandbox, error } = runScript(cutAtD3(code), { extra });
  check(!error, `${cfg.page} data script runs${error ? ` — ${error.message}` : ""}`);
  if (error) continue;

  const x = sandbox.__exports;
  check(Object.keys(x.COUNTIES).length === cfg.countyCount,
    `${cfg.page}: COUNTIES has all ${cfg.countyCount} counties`);
  check(typeof x.SITE_META.lastUpdated === "string" && x.SITE_META.lastUpdated.length > 0,
    `${cfg.page}: SITE_META.lastUpdated is set`);

  // Clone-bug guard (shipped once on ma.html, July 2026): a page cloned from another
  // state keeps the donor's `<XX>_STATE_FIPS` value in the RENDERING script, so the map
  // silently draws the WRONG STATE while every data test still passes. The smoke test
  // cannot catch this — it cuts the script at the first `d3.` call. Compare the constant
  // against the COUNTIES keys, which are the source of truth for which state this is.
  const rawPage = fs.readFileSync(cfg.page, "utf8");
  const fipsDecl = rawPage.match(/const\s+[A-Z]{2}_STATE_FIPS\s*=\s*"(\d{2})"/);
  const countyPrefix = Object.keys(x.COUNTIES)[0].slice(0, 2);
  check(!!fipsDecl && fipsDecl[1] === countyPrefix,
    `${cfg.page}: map STATE_FIPS "${fipsDecl ? fipsDecl[1] : "MISSING"}" matches COUNTIES prefix "${countyPrefix}"`);

  // Second clone-bug guard, added Aug 9, 2026 after or.html AND nv.html both shipped
  // showing "MS" — Mississippi's initials — in the header crest and the footer, because
  // both were cloned from ms.html and those two strings are the easiest to miss: they are
  // pure presentation, so no data test and no runtime check could see them. Derive the
  // expected initials from the FILENAME, which is the one thing about a state page that
  // is never ambiguous.
  const expectAbbr = cfg.page.replace(".html", "").toUpperCase();
  const crest = rawPage.match(/<div class="crest">([^<]*)<\/div>/);
  check(!!crest && crest[1].trim() === expectAbbr,
    `${cfg.page}: header crest reads "${expectAbbr}" (got "${crest ? crest[1].trim() : "MISSING"}")`);
  // The footer is written either as initials ("OR Elections Hub") or spelled out
  // ("Ohio Elections Hub"); both are fine, but it must not name a DIFFERENT state.
  const footer = rawPage.match(/<strong>([^<]*) Elections Hub<\/strong>/);
  const footerName = footer ? footer[1].trim() : "";
  const footerOk = footerName === expectAbbr ||
    (x.SITE_META.name || "").startsWith(footerName + " ");
  check(footerOk,
    `${cfg.page}: footer says "${footerName} Elections Hub", matching the page's own state`);

  // ⚠ THIRD instance of the SAME clone bug, found Sept 2, 2026 — and it had been live on FIVE
  // pages. The Aug 9 fix above covered the crest and the footer, but the county drawer's
  // empty-state TITLE was never checked, so `id.html mt.html nv.html or.html sd.html` — the whole
  // ms.html clone lineage — all told a voter clicking an out-of-state county "Not in MS".
  // Lesson #16 made `"Not in <XX>"` a checked substitution in clone-state.js, which protects NEW
  // clones; nothing protected the pages that already existed. It surfaced only because
  // clone-state.js refused to write ut.html when it could not find "Not in NV" in the donor.
  // ➤ The general shape, for the third time: a pure-presentation string that no data test, parse
  //   check or runtime check can see. Every such string needs a filename-derived assertion.
  const notIn = rawPage.match(/title\.textContent\s*=\s*"Not in ([A-Z]{2})"/);
  check(!!notIn && notIn[1] === expectAbbr,
    `${cfg.page}: county drawer empty state reads "Not in ${expectAbbr}" (got "${notIn ? notIn[1] : "MISSING"}")`);
  // Same class of bug, same sentence: the empty-state body names the state in words.
  // ⚠ The NOUN varies: Louisiana has parishes and Alaska has boroughs, so this must not be
  // county-specific — it failed on la.html the first time it ran, the same rigidity the clone
  // tool had before `countyNoun` became config.
  const emptyBody = rawPage.match(/This (?:county|parish|borough) isn(?:&#39;|')t in our ([A-Za-z ]+) dataset\./);
  const emptyName = emptyBody ? emptyBody[1].trim() : "";
  check(!!emptyBody && (x.SITE_META.name || "").startsWith(emptyName + " "),
    `${cfg.page}: county drawer empty state names "${emptyName}", matching the page's own state`);
  // ⚠ FOURTH instance, found Sept 3, 2026 building Michigan — and again it was NINE pages.
  // The data-layer comment above COUNTIES names the state: "(1) COUNTIES — every DE county".
  // `ia in ky me nh oh ri wv` all inherited Delaware's abbreviation and `ma` inherited
  // Connecticut's. It is only a code comment, so no reader was ever misled — but it is the same
  // class, and a stale abbreviation here is what makes the NEXT clone fail: clone-state.js
  // refused to write mi.html because it could not find "every OH county" in the Ohio donor.
  // ➤ That refusal has now caught a real defect SIX times (quirks #16, #22, #23, #26, #28, this).
  const dataComment = rawPage.match(/\(1\) COUNTIES\s+[—-]\s+every ([A-Z]{2}) (?:county|parish|borough)([^\n]*)/);
  check(!!dataComment && dataComment[1] === expectAbbr,
    `${cfg.page}: COUNTIES data comment says "every ${expectAbbr} ..." (got "${dataComment ? dataComment[1] : "MISSING"}")`);
  // ...and the SECOND half of the same comment was wrong on the same nine pages, in a way the
  // abbreviation check could not see: it claimed "(all in the single at-large district)" on pages
  // with 2, 4, 6, 9, 13 and 15 districts, inherited from Delaware. A comment that contradicts the
  // page's own data is worth failing on, because the next person to read it is the next builder.
  const districtCount = Object.keys(x.HOUSE_RACES || {}).length;
  const claimsAtLarge = !!dataComment && /single at-large district/.test(dataComment[2]);
  check(!claimsAtLarge || districtCount === 1,
    `${cfg.page}: COUNTIES comment claims a single at-large district only if there is one (has ${districtCount})`);

  const result = x.getCountyElections(cfg.sampleFips);
  const races = (result && result.elections) || [];
  check(Array.isArray(result && result.elections),
    `${cfg.page}: getCountyElections('${cfg.sampleFips}') returns { county, district, elections }`);
  check(races.length === cfg.expectedRaces,
    `${cfg.page}: ${cfg.sampleName} has ${cfg.expectedRaces} races (got ${races.length})`);
  check(races.every(r => r.office && String(r.office).trim() !== ""),
    `${cfg.page}: every ${cfg.sampleName} race has a non-blank title`);
  check(races.every(r => VALID_TYPES.has(r.type)),
    `${cfg.page}: every ${cfg.sampleName} race type is past/upcoming/scheduled`);
  const allCandidates = races.flatMap(r => r.candidates || []);
  check(allCandidates.every(c => c.name && VALID_PARTIES.has(c.party)),
    `${cfg.page}: every ${cfg.sampleName} candidate has a name and a valid party (D/R/I/L/G)`);

  check(x.getCountyElections("99999") === null, `${cfg.page}: unknown FIPS returns null`);

  // every county resolves and every race everywhere has a title + valid type
  let badCounty = null;
  for (const fips of Object.keys(x.COUNTIES)) {
    const res = x.getCountyElections(fips);
    const list = res && res.elections;
    if (!list || !list.every(r => r.office && VALID_TYPES.has(r.type))) { badCounty = fips; break; }
  }
  check(badCounty === null,
    `${cfg.page}: all ${cfg.countyCount} counties merge cleanly with titled, valid-type races${badCounty ? ` (bad: ${badCounty})` : ""}`);

  // EVERY U.S. House district must be reachable from at least one county.
  // Counties shared by several districts store the full list in `ds`; a district that
  // is the plurality of NO county is invisible on the map, so a voter who lives in it
  // clicks their county and never sees their own House race. That shipped live on
  // ny.html (8 of 26 districts — the NYC seats) and ma.html (MA-3) and no test caught
  // it, because every other check only ever asked about ONE district per county.
  const reachable = new Set();
  for (const c of Object.values(x.COUNTIES)) {
    (c.ds && c.ds.length ? c.ds : [c.d]).forEach(d => reachable.add(d));
  }
  const unreachable = Object.keys(x.HOUSE_RACES).map(Number)
    .filter(d => !reachable.has(d)).sort((a, b) => a - b);
  check(unreachable.length === 0,
    `${cfg.page}: every one of the ${Object.keys(x.HOUSE_RACES).length} House districts is reachable from a county${unreachable.length ? ` (unreachable: ${unreachable.join(",")})` : ""}`);

  // ⚠⚠ AND THE RUNTIME MUST ACTUALLY USE `ds` — the check above only proves the DATA is
  // right. Found Sept 3, 2026: `nc.html`, the flagship, had carried `ds` on 12 split counties
  // since Aug 11 while its getCountyElections still read only `county.d`, so a Guilford,
  // Mecklenburg or Wake voter saw ONE of their possible U.S. House races. The Aug 11 fix added
  // the data and the map shading and never updated the merge; every test passed because every
  // test asked the data, not the function. This asks the FUNCTION.
  const splitCounties = Object.entries(x.COUNTIES)
    .filter(([, c]) => Array.isArray(c.ds) && c.ds.length > 1);
  if (splitCounties.length) {
    // use the county touching the most districts — the hardest case on the page
    splitCounties.sort((a, b) => b[1].ds.length - a[1].ds.length);
    const [splitFips, splitCounty] = splitCounties[0];
    const merged = x.getCountyElections(splitFips);
    const houseOffices = new Set((merged ? merged.elections : [])
      .filter(e => /U\.S\. House/.test(e.office || ""))
      .map(e => e.office));
    check(houseOffices.size >= splitCounty.ds.length,
      `${cfg.page}: getCountyElections('${splitFips}' ${splitCounty.n}) surfaces all ${splitCounty.ds.length} of its districts (got ${houseOffices.size})`);
  }

  console.log("");
}

// ---------------------------------------------------------------
// state.html
// ---------------------------------------------------------------
console.log("— state.html —");
// state.html's first inline script is now the <head> redirect (Sept 3, 2026); the data script is
// the one that declares STATE_RACES.
const stateCode = cutAtD3(extractInlineScripts("state.html").find(c => c.includes("const STATE_RACES")));
const stateExtra = `
  __exports.STATE_RACES = STATE_RACES;
  __exports.buildSeats = buildSeats;
  __exports.SEN_SPECIAL = SEN_SPECIAL;
`;

// Reproduce the openPanel merge for one state (the script's top-level code
// branches on ?state=, so each abbr gets its own run).
function seatsFor(abbr) {
  const { sandbox, error } = runScript(stateCode, { search: `?state=${abbr}`, extra: stateExtra });
  if (error) return { error };
  const x = sandbox.__exports;
  return { seats: [...(x.STATE_RACES[abbr] || []), ...x.buildSeats(abbr)], error: null };
}

function officeKind(seat) {
  const office = seat.office || "";
  if (seat.key) return seat.key === "senate-special" ? "senate-special"
    : seat.key === "senate" ? "senate"
    : seat.key === "governor" ? "governor"
    : seat.key === "delegate" ? "delegate" : seat.key;
  if (/^U\.S\. Senate — Special/.test(office)) return "senate-special";
  if (/^U\.S\. Senate/.test(office)) return "senate";
  if (/^Governor/.test(office)) return "governor";
  if (/^Delegate/.test(office)) return "delegate";
  if (/^U\.S\. House/.test(office)) return "house";
  return null;
}

// NC, SC, GA, VA, MD, DE, and NJ redirect to their own pages, so they are not tested here.
const FEATURED_ABBRS = ["AL", "FL", "NY", "DC"];
const ALL_TESTED = [...new Set([...FEATURED_ABBRS, "TX", "CA", "AK", "MO", "OH", "WA"])];   // AK/MO: the live generic-page states with unusual data

for (const abbr of ALL_TESTED) {
  const { seats, error } = seatsFor(abbr);
  if (error) { check(false, `${abbr}: merge runs — ${error.message}`); continue; }

  check(seats.every(s => s.office && String(s.office).trim() !== "" && VALID_TYPES.has(s.type)),
    `${abbr}: every seat has a title and a valid type`);

  // no office may appear twice (the coveredKeys suppression contract)
  const counts = {};
  for (const s of seats) { const k = officeKind(s); if (k) counts[k] = (counts[k] || 0) + 1; }
  const dupes = Object.entries(counts).filter(([, n]) => n > 1).map(([k]) => k);
  check(dupes.length === 0, `${abbr}: no duplicate offices${dupes.length ? ` (duplicated: ${dupes.join(", ")})` : ""}`);

  // full STATE_RACES candidates are well-formed
  const cands = seats.flatMap(s => s.candidates || []);
  check(cands.every(c => c.name && VALID_PARTIES.has(c.party)),
    `${abbr}: every candidate has a name and valid party`);
}

// state-specific expectations
{
  const oh = seatsFor("OH").seats || [];
  check(oh.some(s => officeKind(s) === "senate-special"), "OH: has the special Senate election");
  // Florida became a fully built page (fl.html) on Aug 28, 2026 and was removed from STATE_RACES,
  // so its special Senate election must now come from the GENERIC buildSeats path via SEN_SPECIAL.
  const fl = seatsFor("FL").seats || [];
  check(fl.some(s => officeKind(s) === "senate-special"), "FL: still has the special Senate election");
  const flRaw = runScript(stateCode, { search: "?state=FL", extra: stateExtra });
  check(!!flRaw.sandbox && !("FL" in (flRaw.sandbox.__exports.STATE_RACES || {})),
    "FL: removed from STATE_RACES — fl.html is the built page");

  const wa = seatsFor("WA").seats || [];
  check(!wa.some(s => officeKind(s) === "senate"), "WA: no Senate race (not a Class 2 state)");
  check(!wa.some(s => officeKind(s) === "governor"), "WA: no Governor race in 2026");
  check(wa.some(s => officeKind(s) === "house"), "WA: has the U.S. House entry");

  const dc = seatsFor("DC").seats || [];
  check(!dc.some(s => officeKind(s) === "senate"), "DC: no Senate race");
  check(!dc.some(s => officeKind(s) === "governor"), "DC: no Governor race");
  check(dc.some(s => officeKind(s) === "delegate"), "DC: has the House Delegate race");
}

// ---------------------------------------------------------------
// type-value audit across every page (quirk #7: a typo like "upcooming"
// makes a race silently vanish from the grouped drawer)
// ---------------------------------------------------------------
// ⚠ This list used to be hard-coded and it SILENTLY ROTTED: it stopped at nv.html, so the
// 15 pages built after Aug 9, 2026 (sd id mt pa tn hi al wi mn nd ks ok az fl wy) were never
// audited at all — the section still printed a wall of passes, which is indistinguishable from
// a section that is actually covering the site (the same failure shape as quirk #15). It is now
// DERIVED from STATE_PAGES, the one list a new state build is already required to update, so it
// cannot drift out of sync again. Found and fixed Aug 31, 2026.
console.log("\n— type-value audit —");
for (const page of ["index.html", ...STATE_PAGES.map(p => p.page), "state.html"]) {
  const bad = [];
  for (const code of extractInlineScripts(page)) {
    for (const m of code.matchAll(/type\s*:\s*"([a-z]+)"/g)) {
      if (!VALID_TYPES.has(m[1])) bad.push(m[1]);
    }
  }
  check(bad.length === 0, `${page}: all type values are past/upcoming/scheduled${bad.length ? ` (bad: ${bad.join(", ")})` : ""}`);
}

summary("data-logic");
