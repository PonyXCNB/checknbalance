// Does each page's RUNTIME merge actually honour `ds`, or only the map shading?
// Lesson #12's whole point: a split-county voter must see EVERY district that overlaps them.
const fs = require("fs");
const ROOT = "C:/Users/Brend/checknbalance";
const { extractInlineScripts, cutAtD3, runScript } = require(ROOT + "/tests/lib");
const EXTRA = `
  __exports.getCountyElections = getCountyElections;
  __exports.COUNTIES = COUNTIES;
  __exports.HOUSE_RACES = HOUSE_RACES;
`;
const pages = fs.readdirSync(ROOT).filter(f => /^[a-z]{2}\.html$/.test(f));
const bad = [], ok = [], noSplit = [];
for (const p of pages) {
  const { sandbox, error } = runScript(cutAtD3(extractInlineScripts(p)[0]), { extra: EXTRA });
  if (error) { console.log(p, "ERROR", error.message); continue; }
  const x = sandbox.__exports;
  const splits = Object.entries(x.COUNTIES).filter(([, c]) => Array.isArray(c.ds) && c.ds.length > 1);
  if (!splits.length) { noSplit.push(p); continue; }
  // pick the county with the MOST overlapping districts — the hardest case
  splits.sort((a, b) => b[1].ds.length - a[1].ds.length);
  const [fips, county] = splits[0];
  const res = x.getCountyElections(fips);
  const shown = new Set(res.elections.filter(e => /U\.S\. House/.test(e.office || "")).map(e => e.office));
  const line = `${p.padEnd(9)} ${county.n} ds=[${county.ds}] -> ${shown.size} of ${county.ds.length} House races shown`;
  (shown.size >= county.ds.length ? ok : bad).push(line);
}
console.log("\n=== HONOURS ds (" + ok.length + ") ===");
ok.forEach(x => console.log("  " + x));
console.log("\n=== IGNORES ds — split-county voters see only ONE district (" + bad.length + ") ===");
bad.forEach(x => console.log("  " + x));
console.log("\n=== no split counties (" + noSplit.length + "): " + noSplit.join(" "));
