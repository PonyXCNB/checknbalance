const fs = require('fs');
const path = 'tools/banked/ca-build/map/ab604/AB604.csv';
const raw = fs.readFileSync(path, 'utf8').trim().split(/\r?\n/);
const byCounty = {};
for (const line of raw) {
  const m = line.match(/"?(\d{15})"?\s*,\s*"?(\d+)"?/);
  if (!m) continue;
  const geoid = m[1];
  const cd = +m[2];
  const cty = geoid.slice(2, 5);
  if (!byCounty[cty]) byCounty[cty] = {};
  byCounty[cty][cd] = (byCounty[cty][cd] || 0) + 1;
}
const counties = Object.keys(byCounty).sort();
console.log('counties', counties.length);
let splits = 0, wholes = 0;
const rows = [];
for (const cty of counties) {
  const cds = Object.entries(byCounty[cty])
    .map(([cd, n]) => ({ cd: +cd, n }))
    .sort((a, b) => b.n - a.n || a.cd - b.cd);
  const ds = cds.map((x) => x.cd);
  if (ds.length > 1) splits++;
  else wholes++;
  rows.push({
    cty,
    d_blockhint: ds[0],
    ds,
    blocks: Object.fromEntries(cds.map((x) => [x.cd, x.n])),
  });
}
console.log('whole', wholes, 'split', splits);
fs.writeFileSync(
  'tools/banked/ca-build/map/county-cds-from-blocks.json',
  JSON.stringify(rows, null, 2)
);
const splitRows = rows.filter((r) => r.ds.length > 1);
console.log(
  'split counties:',
  splitRows.map((r) => r.cty + ':' + r.ds.join('/')).join(', ')
);
console.log('wrote county-cds-from-blocks.json');
