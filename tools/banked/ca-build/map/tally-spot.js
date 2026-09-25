const fs = require('fs');
const lines = fs.readFileSync('tools/banked/ca-build/map/ab604/AB604.csv', 'utf8').split(/\r?\n/);
function tally(cty) {
  const c = {};
  let n = 0;
  for (const l of lines) {
    if (l.length < 10) continue;
    const parts = l.replace(/"/g, '').split(',');
    const geoid = parts[0];
    const cd = parts[1];
    if (!geoid || geoid.length !== 15) continue;
    if (geoid.slice(0, 2) !== '06') continue;
    if (geoid.slice(2, 5) !== cty) continue;
    n++;
    c[cd] = (c[cd] || 0) + 1;
  }
  console.log(cty, 'blocks', n, c);
}
['011', '025', '047', '095', '057', '101', '115', '067'].forEach(tally);
// sample first 3 Colusa lines
let shown = 0;
for (const l of lines) {
  const g = l.replace(/"/g, '').split(',')[0];
  if (g && g.slice(0, 5) === '06011') {
    console.log('sample', l);
    if (++shown >= 3) break;
  }
}
