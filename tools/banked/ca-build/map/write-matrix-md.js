const fs = require('fs');
const rows = JSON.parse(fs.readFileSync('tools/banked/ca-build/map/county-cds-from-blocks.json','utf8'));
const NAMES = {"001":"Alameda","003":"Alpine","005":"Amador","007":"Butte","009":"Calaveras","011":"Colusa","013":"Contra Costa","015":"Del Norte","017":"El Dorado","019":"Fresno","021":"Glenn","023":"Humboldt","025":"Imperial","027":"Inyo","029":"Kern","031":"Kings","033":"Lake","035":"Lassen","037":"Los Angeles","039":"Madera","041":"Marin","043":"Mariposa","045":"Mendocino","047":"Merced","049":"Modoc","051":"Mono","053":"Monterey","055":"Napa","057":"Nevada","059":"Orange","061":"Placer","063":"Plumas","065":"Riverside","067":"Sacramento","069":"San Benito","071":"San Bernardino","073":"San Diego","075":"San Francisco","077":"San Joaquin","079":"San Luis Obispo","081":"San Mateo","083":"Santa Barbara","085":"Santa Clara","087":"Santa Cruz","089":"Shasta","091":"Sierra","093":"Siskiyou","095":"Solano","097":"Sonoma","099":"Stanislaus","101":"Sutter","103":"Tehama","105":"Trinity","107":"Tulare","109":"Tuolumne","111":"Ventura","113":"Yolo","115":"Yuba"};
let md = '# CA county → CD matrix (AB 604 block equivalency)\n\n';
md += 'Source: Statewide Database `AB604.csv` (block GEOID → CD), downloaded Wave 88 from https://statewidedatabase.org/pub/data/d25/AB604.zip\n\n';
md += '**Plurality `d` is BLOCK-COUNT hint only** — not population-weighted. Do not ship `ca.html` until pop-weighted `d` + currency-test close.\n\n';
md += '| FIPS | County | Whole? | d_blockhint | ds |\n|------|--------|--------|-------------|----|\n';
for (const r of rows) {
  const whole = r.ds.length === 1 ? 'YES' : 'split';
  md += `| 06${r.cty} | ${NAMES[r.cty]} | ${whole} | ${r.d_blockhint} | ${r.ds.join(', ')} |\n`;
}
md += `\nWhole counties: ${rows.filter(r=>r.ds.length===1).length} / 58. Split: ${rows.filter(r=>r.ds.length>1).length}.\n`;
md += '\n## Colusa note\nSenate Office of Demographics table listed COLUSA under CD3; chaptered AB 604 §21404 lists COLUSA as a **whole county in CD4**, matching the block file (1,612/1,612 blocks → 4) and Appeal-Democrat (Feb 4, 2026). Prefer statute + block file over the Senate summary table.\n';
fs.writeFileSync('tools/banked/ca-build/map/county-cd-matrix.md', md);
console.log('wrote matrix md');
