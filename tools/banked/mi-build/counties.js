// Michigan county -> U.S. House district.
// MAP: the Michigan Independent Citizens Redistricting Commission's "Chestnut" congressional plan,
// adopted Dec 28, 2021 and effective Mar 26, 2022. UNCHANGED since - it governed 2022, 2024 and 2026.
// CURRENCY, established three independent ways rather than assumed (lesson #13/#17):
//   (1) Michigan is NOT among the ten states with new 2026 congressional maps. *Agee v. Benson*
//       struck 13 STATE LEGISLATIVE districts on racial-predominance grounds and never touched the
//       congressional plan; *Banerian v. Benson* was rejected and its SCOTUS appeal dismissed as moot
//       in Nov 2022. The Michigan Constitution bars mid-decade congressional redraws and the MICRC is
//       dormant.
//   (2) Cook Political Report's own 2026 PVI data file gives ALL 13 Michigan districts an IDENTICAL
//       2025 and 2026 PVI. Cook recalculates PVI on new lines - in the same file Alabama's redrawn
//       AL-02 moves D+5 to R+7 and Louisiana's LA-06 moves D+8 to R+16 - so a zero shift across all
//       13 is affirmative evidence that Cook is scoring the same lines.
//   (3) THE CURRENCY TEST (lesson #17), which is the decisive one: the Secretary of State's own
//       machine-readable county canvass for the Aug 4, 2026 primary
//       (mvic.sos.state.mi.us/VoteHistory/GetElectionResultFile?electionId=706, header "STATE PRIMARY,
//       OFFICIAL", 83/83 counties, updated Aug 24, 2026) records which U.S. House contest actually
//       appeared on each county's ballot. 83 OF 83 COUNTIES MATCH THIS TABLE EXACTLY, ZERO
//       CONTRADICTIONS - including all six districts in Oakland, all three in Wayne, all three in
//       Ottawa, and every sliver (Genesee CD7 = 32 votes, Ottawa CD2 = 545, Monroe CD6 = 483,
//       Tuscola CD8 = 286, Eaton CD2 = 998, Wexford CD1 = 940).
// TRANSCRIPTION: from the MICRC's OWN county-split report (MI_Counties_Chestnut.pdf, 84 pages, one per
// county, inside MI_County-Splits-for-Final-Plans.zip at michigan.gov/micrc) - the state's own
// redistricting authority publishing the crosswalk outright (lesson #25). Cross-checked against an
// independent MCDC Geocorr 2022 county-to-cd118 pop20 pull: 104 county-district pieces totalling
// 10,077,331, exactly Michigan's 2020 census population. THE TWO SOURCES AGREE ON ALL 83 COUNTIES -
// zero district-set differences, zero plurality differences. Ideal district = 775,179.3; districts run
// CD5 774,544 (-0.082%) to CD13 775,666 (+0.063%), a max-min spread of 1,122. That nonzero deviation
// is real and is what *Banerian* attacked and lost on.
// 15 split counties. Closest plurality call is Muskegon at 62.2%/37.8% - nothing is marginal.
// WARNING - CD12 IS THE PLURALITY OF NO COUNTY (lesson #12, at full stretch, as with PA-3 and WA-9).
// It is the runner-up in Wayne (679,655 behind CD13's 775,666) and third in Oakland (95,592). It exists
// ONLY in the 'ds' arrays of Wayne (26163) and Oakland (26125). Drop 'ds' and Michigan's 12th district
// becomes completely unreachable - a Dearborn or Southfield voter would never see their own House race.
// NOTE, not a contradiction: in Wayne the population plurality is CD13 but CD12 cast MORE primary votes
// (135,119 to 130,278). 'd' follows the population-plurality rule used site-wide; a turnout rule would
// flip Wayne's shading.
// 'd' is the population-plurality district (drives map shading); 'ds' lists EVERY district in the county
// (drives which races the drawer shows).
const COUNTIES = {
  "26001": { n: "Alcona", d: 1 },
  "26003": { n: "Alger", d: 1 },
  "26005": { n: "Allegan", d: 4 },
  "26007": { n: "Alpena", d: 1 },
  "26009": { n: "Antrim", d: 1 },
  "26011": { n: "Arenac", d: 1 },
  "26013": { n: "Baraga", d: 1 },
  "26015": { n: "Barry", d: 2 },
  "26017": { n: "Bay", d: 8 },
  "26019": { n: "Benzie", d: 1 },
  "26021": { n: "Berrien", d: 5, ds: [4, 5] },
  "26023": { n: "Branch", d: 5 },
  "26025": { n: "Calhoun", d: 4, ds: [4, 5] },
  "26027": { n: "Cass", d: 5 },
  "26029": { n: "Charlevoix", d: 1 },
  "26031": { n: "Cheboygan", d: 1 },
  "26033": { n: "Chippewa", d: 1 },
  "26035": { n: "Clare", d: 2 },
  "26037": { n: "Clinton", d: 7 },
  "26039": { n: "Crawford", d: 1 },
  "26041": { n: "Delta", d: 1 },
  "26043": { n: "Dickinson", d: 1 },
  "26045": { n: "Eaton", d: 7, ds: [2, 7] },
  "26047": { n: "Emmet", d: 1 },
  "26049": { n: "Genesee", d: 8, ds: [7, 8] },
  "26051": { n: "Gladwin", d: 2 },
  "26053": { n: "Gogebic", d: 1 },
  "26055": { n: "Grand Traverse", d: 1 },
  "26057": { n: "Gratiot", d: 2 },
  "26059": { n: "Hillsdale", d: 5 },
  "26061": { n: "Houghton", d: 1 },
  "26063": { n: "Huron", d: 9 },
  "26065": { n: "Ingham", d: 7 },
  "26067": { n: "Ionia", d: 2 },
  "26069": { n: "Iosco", d: 1 },
  "26071": { n: "Iron", d: 1 },
  "26073": { n: "Isabella", d: 2 },
  "26075": { n: "Jackson", d: 5 },
  "26077": { n: "Kalamazoo", d: 4, ds: [4, 5] },
  "26079": { n: "Kalkaska", d: 1 },
  "26081": { n: "Kent", d: 3, ds: [2, 3] },
  "26083": { n: "Keweenaw", d: 1 },
  "26085": { n: "Lake", d: 2 },
  "26087": { n: "Lapeer", d: 9 },
  "26089": { n: "Leelanau", d: 1 },
  "26091": { n: "Lenawee", d: 5 },
  "26093": { n: "Livingston", d: 7 },
  "26095": { n: "Luce", d: 1 },
  "26097": { n: "Mackinac", d: 1 },
  "26099": { n: "Macomb", d: 10, ds: [9, 10] },
  "26101": { n: "Manistee", d: 2 },
  "26103": { n: "Marquette", d: 1 },
  "26105": { n: "Mason", d: 2 },
  "26107": { n: "Mecosta", d: 2 },
  "26109": { n: "Menominee", d: 1 },
  "26111": { n: "Midland", d: 8, ds: [2, 8] },
  "26113": { n: "Missaukee", d: 1 },
  "26115": { n: "Monroe", d: 5, ds: [5, 6] },
  "26117": { n: "Montcalm", d: 2 },
  "26119": { n: "Montmorency", d: 1 },
  "26121": { n: "Muskegon", d: 3, ds: [2, 3] },
  "26123": { n: "Newaygo", d: 2 },
  "26125": { n: "Oakland", d: 11, ds: [6, 7, 9, 10, 11, 12] },
  "26127": { n: "Oceana", d: 2 },
  "26129": { n: "Ogemaw", d: 1 },
  "26131": { n: "Ontonagon", d: 1 },
  "26133": { n: "Osceola", d: 2 },
  "26135": { n: "Oscoda", d: 1 },
  "26137": { n: "Otsego", d: 1 },
  "26139": { n: "Ottawa", d: 4, ds: [2, 3, 4] },
  "26141": { n: "Presque Isle", d: 1 },
  "26143": { n: "Roscommon", d: 1 },
  "26145": { n: "Saginaw", d: 8 },
  "26147": { n: "St. Clair", d: 9 },
  "26149": { n: "St. Joseph", d: 5 },
  "26151": { n: "Sanilac", d: 9 },
  "26153": { n: "Schoolcraft", d: 1 },
  "26155": { n: "Shiawassee", d: 7 },
  "26157": { n: "Tuscola", d: 9, ds: [8, 9] },
  "26159": { n: "Van Buren", d: 4 },
  "26161": { n: "Washtenaw", d: 6 },
  "26163": { n: "Wayne", d: 13, ds: [6, 12, 13] },
  "26165": { n: "Wexford", d: 2, ds: [1, 2] },
};
