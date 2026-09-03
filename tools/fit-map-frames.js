#!/usr/bin/env node
// fit-map-frames.js — give every state page a map frame shaped like the state, drawn upright.
//
// THE DEFECTS (Sept 3, 2026 site self-review):
//   (1) 37 pages used a square map frame (aspect-ratio 1/1, viewBox 0 0 1000 1000) and 8 early
//       pages a wide one (2.2/1, 1000x450), regardless of the state's shape. Measured live:
//       Tennessee's map filled 96% of its box's width and 33% of its height; New Jersey sat in a
//       2.2:1 box and filled 16% of it. A square frame on a 1158px card is 1158px tall — taller
//       than most laptop screens — so on 37 pages the county map could never be seen whole.
//   (2) Every page projected with d3.geoAlbers() at its DEFAULT central meridian (-96°), a conic
//       that keeps north "up" only along that meridian: Hawaii drew ~37° off, Maine ~16°, the
//       whole Northeast 12–15°. CLAUDE.md even said the pages used geoMercator. They did not.
//
// THE RULE: each page projects with a conic equal-area CENTRED ON ITS OWN STATE — rotated to the
// state's mid-longitude, standard parallels at 1/6 and 5/6 of its latitude range — so north is up
// everywhere and shapes match the official state map. The frame's aspect ratio is the aspect of
// the state's projected bounds under that same projection, computed here offline from the very
// us-atlas file the page fetches, clamped to [0.6, 3.0]. Tall states also get the map CARD
// narrowed so it hugs the map. The SVG viewBox matches, and the renderer reads its drawing size
// from the viewBox, so the shape lives in exactly one place per page. Alaska's Aleutians cross
// the antimeridian, so its longitudes are unwrapped before the midpoint is taken.
//
// Usage:  node tools/fit-map-frames.js            (rewrites every <xx>.html in place)
//         node tools/fit-map-frames.js --check    (report only)
"use strict";
const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = path.join(__dirname, "..");
const CHECK = process.argv.includes("--check");
const MIN_ASPECT = 0.6, MAX_ASPECT = 3.0;
const ATLAS = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const CACHE = path.join(__dirname, "banked", "counties-10m.json");

function fetchAtlas() {
  if (fs.existsSync(CACHE)) return Promise.resolve(JSON.parse(fs.readFileSync(CACHE, "utf8")));
  return new Promise((resolve, reject) => {
    https.get(ATLAS, res => {
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => { const buf = Buffer.concat(chunks); fs.writeFileSync(CACHE, buf); resolve(JSON.parse(buf.toString("utf8"))); });
    }).on("error", reject);
  });
}

// Every (lon, lat) vertex of a state's county geometry.
function statePoints(topo, fips) {
  const { transform, arcs } = topo;
  const pts = [];
  const walk = i => {
    const arc = arcs[i < 0 ? ~i : i];
    let x = 0, y = 0;
    for (const [dx, dy] of arc) {
      x += dx; y += dy;
      pts.push([x * transform.scale[0] + transform.translate[0], y * transform.scale[1] + transform.translate[1]]);
    }
  };
  for (const g of topo.objects.counties.geometries) {
    if (!String(g.id).startsWith(fips)) continue;
    if (g.type === "Polygon") g.arcs.forEach(r => r.forEach(walk));
    else if (g.type === "MultiPolygon") g.arcs.forEach(p => p.forEach(r => r.forEach(walk)));
  }
  return pts;
}

// The same projection the renderer will build: d3.geoConicEqualArea().rotate([-lon0, 0])
// .parallels([p1, p2]). Albers equal-area conic, per Snyder; the aspect of the projected bounding
// box is independent of scale and translation, which is all fitSize adds.
function conicAspect(pts, fips) {
  const rad = Math.PI / 180;
  let lons = pts.map(p => p[0]);
  if (fips === "02") lons = lons.map(l => (l > 0 ? l - 360 : l));   // Alaska: unwrap the Aleutians
  const lats = pts.map(p => p[1]);
  const lonMin = Math.min(...lons), lonMax = Math.max(...lons);
  const latMin = Math.min(...lats), latMax = Math.max(...lats);
  const lon0 = (lonMin + lonMax) / 2;
  const p1 = (latMin + (latMax - latMin) / 6) * rad, p2 = (latMax - (latMax - latMin) / 6) * rad;
  const n = (Math.sin(p1) + Math.sin(p2)) / 2;
  const C = Math.cos(p1) ** 2 + 2 * n * Math.sin(p1);
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (let i = 0; i < pts.length; i++) {
    const lam = (lons[i] - lon0) * rad, phi = lats[i] * rad;
    const rho = Math.sqrt(C - 2 * n * Math.sin(phi)) / n;
    const th = n * lam;
    const x = rho * Math.sin(th), y = -rho * Math.cos(th);
    if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  return { aspect: (maxX - minX) / (maxY - minY), lon0, p1: p1 / rad, p2: p2 / rad };
}

const FRAME_RE = /(\.map-frame \{[\s\S]*?aspect-ratio: )[0-9.]+ \/ 1(;)/;
const VIEWBOX_RE = /(<svg id="[a-z]{2}map" viewBox="0 0 1000 )\d+(")/;
const SHELL_RE = /(\.map-shell \{[\s\S]*?overflow: hidden;)(\r?\n  \})/;
const JS_SIZE_RE = /  const width  = 1000;\r?\n  const height = \d+;/;
const JS_SIZE_NEW = `  // Read the drawing size from the SVG's own viewBox, so the state's shape lives in one place.\n  const { width, height } = (() => { const vb = svg.node().viewBox.baseVal; return { width: vb.width || 1000, height: vb.height || 1000 }; })();`;
const PROJ_RE = /  const projection = d3\.geoAlbers\(\)\r?\n    \.fitSize\(/;
const PROJ_NEW = `  // A conic equal-area CENTRED ON THIS STATE, so north is up and the shape matches the official
  // state map. d3.geoAlbers() at its default -96° meridian tilted the far states by 12–37°.
  const [[lonMin, latMin], [lonMax, latMax]] = d3.geoBounds({ type: "FeatureCollection", features: ncCounties });
  const projection = d3.geoConicEqualArea()
    .rotate([-(lonMin + lonMax) / 2, 0])
    .parallels([latMin + (latMax - latMin) / 6, latMax - (latMax - latMin) / 6])
    .fitSize(`;

(async () => {
  const topo = await fetchAtlas();
  const pages = fs.readdirSync(ROOT).filter(f => /^[a-z]{2}\.html$/.test(f)).sort();
  let changed = 0;
  for (const page of pages) {
    const file = path.join(ROOT, page);
    const html = fs.readFileSync(file, "utf8");
    const eol = /\r\n/.test(html) ? "\r\n" : "\n";
    const fipsMatch = html.match(/const [A-Z]{2}_STATE_FIPS = "(\d{2})";/);
    if (!fipsMatch) { console.log(`${page}: no FIPS constant — skipped`); continue; }
    const { aspect: raw, lon0, p1, p2 } = conicAspect(statePoints(topo, fipsMatch[1]), fipsMatch[1]);
    const a = Math.round(Math.min(MAX_ASPECT, Math.max(MIN_ASPECT, raw)) * 100) / 100;
    const vbH = Math.round(1000 / a);
    const cur = (html.match(/\.map-frame \{[\s\S]*?aspect-ratio: ([0-9.]+ \/ 1)/) || [])[1];
    console.log(`${page}  conic centred lon ${lon0.toFixed(1)} parallels ${p1.toFixed(1)}/${p2.toFixed(1)}  aspect ${raw.toFixed(2)}  ->  frame ${a} / 1, viewBox 1000x${vbH}   (was ${cur})`);
    if (CHECK) continue;

    let out = html;
    if (!FRAME_RE.test(out)) throw new Error(`${page}: .map-frame aspect-ratio rule not found`);
    out = out.replace(FRAME_RE, `$1${a} / 1$2`);
    // Card hugs the map on tall states: cap the shell's width from the viewport height. 72vh keeps
    // the whole map on screen under the sticky header on a laptop; 760px caps it on tall monitors;
    // +16px is the card's own padding. Wide states are unaffected: the cap exceeds the layout width.
    out = out.replace(/\r?\n    max-width: calc\(min\(72vh, 760px\) \* [0-9.]+ \+ 16px\);\r?\n    margin-left: auto; margin-right: auto;/, "");
    if (!SHELL_RE.test(out)) throw new Error(`${page}: .map-shell rule not found`);
    out = out.replace(SHELL_RE, `$1${eol}    max-width: calc(min(72vh, 760px) * ${a} + 16px);${eol}    margin-left: auto; margin-right: auto;$2`);
    if (!VIEWBOX_RE.test(out)) throw new Error(`${page}: map svg viewBox not found`);
    out = out.replace(VIEWBOX_RE, `$1${vbH}$2`);
    if (JS_SIZE_RE.test(out)) out = out.replace(JS_SIZE_RE, JS_SIZE_NEW.replace(/\n/g, eol));
    else if (!out.includes("viewBox.baseVal")) throw new Error(`${page}: JS width/height constants not found`);
    if (PROJ_RE.test(out)) out = out.replace(PROJ_RE, PROJ_NEW.replace(/\n/g, eol));
    else if (!out.includes("geoConicEqualArea")) throw new Error(`${page}: projection line not found`);
    if (out !== html) { fs.writeFileSync(file, out); changed++; }
  }
  console.log(CHECK ? "\n(check only — nothing written)" : `\n${changed} page(s) rewritten`);
})().catch(e => { console.error("✗ " + e.message); process.exit(1); });
