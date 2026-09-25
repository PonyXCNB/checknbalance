const fs = require('fs');
const rows = JSON.parse(fs.readFileSync('tools/banked/ca-build/map/county-cds-from-blocks.json','utf8'));
// CA FIPS -> name (standard)
const NAMES = {"001":"Alameda","003":"Alpine","005":"Amador","007":"Butte","009":"Calaveras","011":"Colusa","013":"Contra Costa","015":"Del Norte","017":"El Dorado","019":"Fresno","021":"Glenn","023":"Humboldt","025":"Imperial","027":"Inyo","029":"Kern","031":"Kings","033":"Lake","035":"Lassen","037":"Los Angeles","039":"Madera","041":"Marin","043":"Mariposa","045":"Mendocino","047":"Merced","049":"Modoc","051":"Mono","053":"Monterey","055":"Napa","057":"Nevada","059":"Orange","061":"Placer","063":"Plumas","065":"Riverside","067":"Sacramento","069":"San Benito","071":"San Bernardino","073":"San Diego","075":"San Francisco","077":"San Joaquin","079":"San Luis Obispo","081":"San Mateo","083":"Santa Barbara","085":"Santa Clara","087":"Santa Cruz","089":"Shasta","091":"Sierra","093":"Siskiyou","095":"Solano","097":"Sonoma","099":"Stanislaus","101":"Sutter","103":"Tehama","105":"Trinity","107":"Tulare","109":"Tuolumne","111":"Ventura","113":"Yolo","115":"Yuba"};
// From Senate Office of Demographics table: CAPS = wholly contained in that CD
const SENATE_WHOLLY = {
  1:["Butte","Glenn","Lassen","Plumas","Sierra","Tehama"],
  2:["Del Norte","Humboldt","Marin","Modoc","Shasta","Siskiyou","Trinity"],
  3:["Nevada","Colusa"],
  4:["Napa","Sutter","Yuba"],
  5:["Alpine","Amador","Calaveras","Inyo","Mariposa","Mono","Tuolumne"],
  // 6 none wholly listed alone as CAPS-only in table... Placer/Sacramento/Yolo all lowercase=split
  8:["Solano"],
  11:["San Francisco"], // wait SF appears CD11 and CD15 in our data - Senate says CD11 San Francisco (no CAPS?) Table: CD11 San Francisco (not CAPS), CD12 Alameda (not CAPS)
  12:[], // Alameda not CAPS
  13:["Merced"],
  14:[],
  18:["San Benito"],
  24:["Santa Barbara"],
  25:["Imperial"],
  39:["Riverside"], // Senate: CD39 Riverside (CAPS?) Table says "Riverside" without CAPS for CD39 - "CD39 | Riverside" - all caps? Looking: "CD39 | Riverside" - Riverside alone, not CAPS in the fetch - actually "Riverside" not all caps so maybe split? Our data: 065 Riverside splits 25/39/40/48/23/35/33
  46:["Orange"], // CD46 Orange - but Orange splits many
  47:["Orange"],
  50:["San Diego"],
  51:["San Diego"],
  52:["San Diego"]
};
// Better: parse CAPS from the table text we have
const CAPS_FROM_TABLE = {
  1: ["BUTTE","GLENN","LASSEN","PLUMAS","SIERRA","TEHAMA"], // Lake, Mendocino, Sonoma split
  2: ["DEL NORTE","HUMBOLDT","MARIN","MODOC","SHASTA","SISKIYOU","TRINITY"],
  3: ["NEVADA","COLUSA"],
  4: ["NAPA","SUTTER","YUBA"],
  5: ["ALPINE","AMADOR","CALAVERAS","INYO","MARIPOSA","MONO","TUOLUMNE"],
  8: ["SOLANO"],
  13: ["MERCED"],
  18: ["SAN BENITO"],
  24: ["SANTA BARBARA"],
  25: ["IMPERIAL"],
};
const nameToFips = Object.fromEntries(Object.entries(NAMES).map(([f,n])=>[n.toUpperCase(),f]));
const expectedWhole = new Map(); // fips -> cd
for (const [cd, names] of Object.entries(CAPS_FROM_TABLE)) {
  for (const n of names) {
    const f = nameToFips[n];
    if (!f) { console.log('missing name', n); continue; }
    if (expectedWhole.has(f)) console.log('dup whole', n, expectedWhole.get(f), cd);
    expectedWhole.set(f, +cd);
  }
}
let ok=0, bad=[];
for (const [f, cd] of expectedWhole) {
  const row = rows.find(r=>r.cty===f);
  if (!row) { bad.push({f, reason:'missing'}); continue; }
  if (row.ds.length!==1 || row.ds[0]!==cd) bad.push({f, name:NAMES[f], expected:cd, got:row.ds});
  else ok++;
}
console.log('Senate CAPS wholes checked', expectedWhole.size, 'match', ok, 'mismatch', bad.length);
if (bad.length) console.log(JSON.stringify(bad,null,2));
const ourWholes = rows.filter(r=>r.ds.length===1);
console.log('Our whole count', ourWholes.length);
ourWholes.forEach(r=>console.log(r.cty, NAMES[r.cty], 'CD'+r.ds[0]));
