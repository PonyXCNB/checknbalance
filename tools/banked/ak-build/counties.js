// ----- (1) Borough / census area + the U.S. House district (Alaska has exactly one) -----
// ⚠ ALASKA HAS ONE AT-LARGE U.S. HOUSE SEAT, so every place below carries d:1 and no place
// can be split. There is no county->district lookup to get wrong here, and no `ds` anywhere.
//
// ⚠⚠ ALASKA HAS NO COUNTIES. It has 19 ORGANIZED BOROUGHS (some of them unified
// city-and-boroughs or municipalities) plus, covering the entire rest of the state, the
// UNORGANIZED BOROUGH, which the Census Bureau divides into CENSUS AREAS purely for
// statistics. A census area has no local government at all. Names below are the official
// Census NAMELSAD, so each already carries its own designation and placeLabel appends nothing.
//
// ⚠⚠ THE MAP'S GEOMETRY IS PRE-2019 AND THIS PAGE SAYS SO RATHER THAN PRETENDING OTHERWISE.
// The site draws from us-atlas@3 `counties-10m.json`, which carries 29 Alaska units and still
// contains VALDEZ-CORDOVA CENSUS AREA (02261). Alaska split that area on Jan 2, 2019 into
// CHUGACH (02063) and COPPER RIVER (02066), so 2020-vintage Census geography has 30 units, not
// 29 — verified in the Census Bureau's own county-to-congressional-district file, which lists
// Chugach and Copper River and no Valdez-Cordova. The atlas has not been rebuilt on the newer
// vintage. Because the shapes are what the browser draws, the table below MUST match the atlas;
// 02261 is therefore kept and labelled with what it has since become. Nothing here depends on
// the distinction — the whole state votes one at-large ballot — but the label should not lie.
//
// ⚠ These are NOT election districts. Alaska administers elections through 40 state House
// districts and four regional election offices, not through boroughs. The map is a way to find
// your place on it, not a ballot boundary.
const COUNTIES = {
  "02013":{n:"Aleutians East Borough",d:1},
  "02016":{n:"Aleutians West Census Area",d:1},
  "02020":{n:"Anchorage Municipality",d:1},
  "02050":{n:"Bethel Census Area",d:1},
  "02060":{n:"Bristol Bay Borough",d:1},
  "02068":{n:"Denali Borough",d:1},
  "02070":{n:"Dillingham Census Area",d:1},
  "02090":{n:"Fairbanks North Star Borough",d:1},
  "02100":{n:"Haines Borough",d:1},
  "02105":{n:"Hoonah-Angoon Census Area",d:1},
  "02110":{n:"Juneau City and Borough",d:1},
  "02122":{n:"Kenai Peninsula Borough",d:1},
  "02130":{n:"Ketchikan Gateway Borough",d:1},
  "02150":{n:"Kodiak Island Borough",d:1},
  "02158":{n:"Kusilvak Census Area",d:1},
  "02164":{n:"Lake and Peninsula Borough",d:1},
  "02170":{n:"Matanuska-Susitna Borough",d:1},
  "02180":{n:"Nome Census Area",d:1},
  "02185":{n:"North Slope Borough",d:1},
  "02188":{n:"Northwest Arctic Borough",d:1},
  "02195":{n:"Petersburg Borough",d:1},
  "02198":{n:"Prince of Wales-Hyder Census Area",d:1},
  "02220":{n:"Sitka City and Borough",d:1},
  "02230":{n:"Skagway Municipality",d:1},
  "02240":{n:"Southeast Fairbanks Census Area",d:1},
  "02261":{n:"Valdez-Cordova Census Area (split in 2019 into Chugach and Copper River)",d:1},
  "02275":{n:"Wrangell City and Borough",d:1},
  "02282":{n:"Yakutat City and Borough",d:1},
  "02290":{n:"Yukon-Koyukuk Census Area",d:1}
};
