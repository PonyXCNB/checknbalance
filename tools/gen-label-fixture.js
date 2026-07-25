// tools/gen-label-fixture.js — DEV-ONLY. Regenerates tests/fixtures/state-label-rings.json,
// the geometry that tests/label-fit.js checks the national map's labels against.
//
// WHY THIS EXISTS
// index.html loads us-atlas TopoJSON from a CDN at runtime, and the test suite must stay
// zero-dependency and offline. So we project the state outlines ONCE, here, and bake the
// result into a fixture the test can read with plain fs.readFileSync.
//
// HOW TO RUN (one-off; needs two packages the site itself does not use):
//   mkdir /tmp/labelgen && cd /tmp/labelgen
//   npm install d3-geo topojson-client
//   npm pack us-atlas@3 && tar xzf us-atlas-3.0.1.tgz
//   NODE_PATH=/tmp/labelgen/node_modules node <repo>/tools/gen-label-fixture.js \
//     --atlas /tmp/labelgen/package/states-10m.json
//
// IMPORTANT: if you change the map's size or projection in index.html, the fixture is stale.
// The projection parameters are written into the fixture's `meta` block and tests/label-fit.js
// re-reads them from index.html and FAILS if they no longer match — it will tell you to re-run
// this script rather than quietly checking against the wrong geometry.
"use strict";
const fs = require("fs");
const path = require("path");

let d3, topojson;
try {
  d3 = require("d3-geo");
  topojson = require("topojson-client");
} catch (e) {
  console.error("Missing dev deps. See the header of this file — you need d3-geo and\n" +
    "topojson-client on NODE_PATH, plus a local copy of us-atlas states-10m.json.");
  process.exit(1);
}

const atlasArg = process.argv.indexOf("--atlas");
if (atlasArg === -1 || !process.argv[atlasArg + 1]) {
  console.error("usage: node tools/gen-label-fixture.js --atlas <path to states-10m.json>");
  process.exit(1);
}
const REPO = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(REPO, "index.html"), "utf8");

// ---- read the projection parameters straight out of the page, so they can never drift apart ----
const dims = indexHtml.match(/const width\s*=\s*(\d+),\s*height\s*=\s*(\d+)/);
const fit = indexHtml.match(/fitSize\(\[\s*width\s*-\s*(\d+)\s*,\s*height\s*-\s*(\d+)\s*\]/);
if (!dims || !fit) throw new Error("Could not read width/height/fitSize out of index.html");
const width = +dims[1], height = +dims[2], padX = +fit[1], padY = +fit[2];

// ---- the callout states use leader lines, not inline labels, so they are not checked ----
const calloutBlock = indexHtml.match(/const CALLOUTS = \[([\s\S]*?)\];/)[1];
const CALLOUT = new Set([...calloutBlock.matchAll(/fips:\s*"(\d{2})"/g)].map(m => m[1]));

const stBlock = indexHtml.match(/const ST = \{([\s\S]*?)\};/)[1];
const ST = {};
for (const m of stBlock.matchAll(/"(\d{2})"\s*:\s*"([A-Z]{2})"/g)) ST[m[1]] = m[2];

const us = JSON.parse(fs.readFileSync(process.argv[atlasArg + 1], "utf8"));
const states = topojson.feature(us, us.objects.states).features;
const projection = d3.geoAlbersUsa().fitSize([width - padX, height - padY],
  { type: "FeatureCollection", features: states });

function projectRing(ring) {
  const out = [];
  for (const c of ring) {
    const p = projection(c);
    if (p && isFinite(p[0]) && isFinite(p[1])) out.push(p);
  }
  return out;
}
function ringArea(r) {
  let a = 0;
  for (let i = 0, n = r.length, j = n - 1; i < n; j = i++)
    a += r[j][0] * r[i][1] - r[i][0] * r[j][1];
  return Math.abs(a / 2);
}
function distToSeg(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}
// Ramer-Douglas-Peucker. EPS is chosen so the fixture stays small while moving any boundary
// by at most ~0.37px; tests/label-fit.js adds that back as slack so it can never false-PASS.
const EPS = 0.5;
function rdp(pts, eps) {
  if (pts.length < 3) return pts;
  let dmax = 0, idx = 0;
  const a = pts[0], b = pts[pts.length - 1];
  for (let i = 1; i < pts.length - 1; i++) {
    const d = distToSeg(pts[i], a, b);
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax > eps) return rdp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(pts.slice(idx), eps));
  return [a, b];
}

const out = { meta: { width, height, padX, padY, simplifyEps: EPS,
  atlas: "us-atlas@3 states-10m", generated: "tools/gen-label-fixture.js" }, rings: {} };

for (const feat of states) {
  const fips = String(feat.id).padStart(2, "0");
  if (CALLOUT.has(fips) || !ST[fips]) continue;
  const polys = feat.geometry.type === "Polygon" ? [feat.geometry.coordinates] : feat.geometry.coordinates;
  const rings = polys.map(p => projectRing(p[0])).filter(r => r.length > 3)
    .sort((a, b) => ringArea(b) - ringArea(a));
  if (!rings.length) continue;
  // Keep every ring big enough to host a label; a label may legitimately sit on a
  // secondary landmass (Michigan's Lower Peninsula, Hawaii's Big Island).
  out.rings[fips] = rings.filter(r => ringArea(r) > 40)
    .map(r => rdp(r, EPS).map(p => [+p[0].toFixed(1), +p[1].toFixed(1)]));
}

const dest = path.join(REPO, "tests", "fixtures", "state-label-rings.json");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, JSON.stringify(out));
const pts = Object.values(out.rings).flat().reduce((a, r) => a + r.length, 0);
console.log(`wrote ${dest}`);
console.log(`${Object.keys(out.rings).length} states, ${pts} points, ` +
  `${(fs.statSync(dest).size / 1024).toFixed(1)} KB, projection ${width}x${height} fit[-${padX},-${padY}]`);
