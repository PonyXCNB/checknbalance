#!/usr/bin/env node
/**
 * derive-ds.js — derive a state's county -> U.S. House district table from primary
 * federal geography, WITH POPULATION, so a split is proved by people and not by area.
 *
 * WHY
 * ---
 * `tools/apply-ds.js` needs a list of the districts each county actually contains. The
 * Census county->congressional-district relationship file gives that by LAND AREA, which
 * cannot tell a real split from a zero-population boundary sliver, and is published only
 * for Congresses that have already been seated (the 119th), so it is stale for any state
 * that redrew mid-decade — Ohio, whose 2026-2032 plan the Redistricting Commission adopted
 * Oct 31, 2025, is the case in point.
 *
 * WHAT IT DOES
 * ------------
 * Uses the Census Bureau's TIGERweb REST services, which DO publish the 120th Congress —
 * the districts being elected on November 3, 2026:
 *   - Legislative/MapServer/0  = 120th Congressional Districts (polygons)
 *   - Tracts_Blocks/MapServer/2 = 2020 Census Blocks, each with POP100 and an INTERNAL
 *     POINT (INTPTLAT/INTPTLON) that is guaranteed to lie inside the block.
 * Every 2020 block's internal point is located in a district by ray casting, then blocks
 * are aggregated by county. Because congressional districts are BUILT from whole 2020
 * blocks, a block is wholly inside exactly one district and the aggregation is exact.
 *
 * Output per county: the districts present, each with its 2020 population and block count,
 * so a zero-population part is visible rather than inferred.
 *
 * USAGE
 *   node tools/derive-ds.js <2-digit state FIPS> [--session 0|4] [--min-pop N] [--out <file.json>]
 *     --session 0 (default) = 120th Congress, the Nov 2026 districts
 *     --session 4           = 119th Congress, for comparing a plan against the old one
 *     --min-pop N (default 1) = drop a county x district part holding fewer than N people
 *
 * ⚠ WHY --min-pop MATTERS. TIGERweb serves GENERALIZED polygons, so a block whose internal
 * point sits within a few metres of a district line can land on the wrong side. Every such
 * artifact seen so far holds ZERO people (SC's Berkeley/6, Georgetown/1 and Lexington/6,
 * GA's Jackson/10 and four other zero parts, VA's Goochland/1 and Fairfax/7) — a real
 * district part in a county has voters in it. `--min-pop 1` therefore removes the artifacts
 * and keeps every genuine sliver, including the small but REAL ones the Census county
 * relationship file independently corroborates: Albemarle VA has 110 people in VA-7 and
 * Prince George's MD has 18 in MD-8. Do not raise the threshold to tidy those away — a
 * county part with people in it is a ballot somebody actually receives.
 *
 * Writes tools/banked/ds-derivation/<fips>-cd<session>.json (cached; delete to refetch)
 * and prints a compact table plus a ready-to-paste `ds` JSON for apply-ds.js.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const https = require("https");

const args = process.argv.slice(2);
const FIPS = args[0];
if (!/^\d{2}$/.test(FIPS || "")) {
  console.error("usage: node tools/derive-ds.js <2-digit state FIPS> [--session 0|4] [--out file.json]");
  process.exit(2);
}
const SESSION = args.includes("--session") ? args[args.indexOf("--session") + 1] : "0";
const OUT = args.includes("--out") ? args[args.indexOf("--out") + 1] : null;
const MIN_POP = args.includes("--min-pop") ? Number(args[args.indexOf("--min-pop") + 1]) : 1;
const CACHE = path.join(__dirname, "banked", "ds-derivation");
fs.mkdirSync(CACHE, { recursive: true });

const TIGER = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb";

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode} for ${url}`)); }
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    }).on("error", reject);
  });
}

async function cached(name, url) {
  const file = path.join(CACHE, name);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  const body = await get(url);
  const json = JSON.parse(body);
  if (json.error) throw new Error(`TIGERweb: ${JSON.stringify(json.error)}`);
  fs.writeFileSync(file, body);
  return json;
}

// Ray casting against one ring. Points are [lon, lat]; a ring is a closed array of them.
function inRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// An esriGeometryPolygon is a flat list of rings; by the shapefile convention an
// anticlockwise ring is a HOLE in the clockwise ring that precedes it. Signed area
// tells them apart, so islands and holes are both handled.
function ringArea(ring) {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    a += (ring[j][0] * ring[i][1]) - (ring[i][0] * ring[j][1]);
  }
  return a / 2;
}
function makeShape(rings) {
  const parts = [];
  for (const ring of rings) {
    if (ringArea(ring) < 0) parts.push({ outer: ring, holes: [], bbox: bboxOf(ring) });  // clockwise
    else if (parts.length) parts[parts.length - 1].holes.push(ring);                     // hole
    else parts.push({ outer: ring, holes: [], bbox: bboxOf(ring) });                     // lone ring
  }
  return parts;
}
function bboxOf(ring) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of ring) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  return [x0, y0, x1, y1];
}
function inShape(x, y, parts) {
  for (const p of parts) {
    const b = p.bbox;
    if (x < b[0] || x > b[2] || y < b[1] || y > b[3]) continue;
    if (!inRing(x, y, p.outer)) continue;
    if (p.holes.some(h => inRing(x, y, h))) continue;
    return true;
  }
  return false;
}

(async () => {
  const label = SESSION === "0" ? "120th (elected Nov 2026)" : "119th (seated Jan 2025)";
  process.stderr.write(`Fetching ${label} districts for state ${FIPS}…\n`);
  const cds = await cached(`${FIPS}-cd${SESSION}.json`,
    `${TIGER}/Legislative/MapServer/${SESSION}/query?where=STATE%3D%27${FIPS}%27&outFields=BASENAME&returnGeometry=true&outSR=4326&f=json`);

  const districts = cds.features
    .filter(f => /^\d+$/.test(f.attributes.BASENAME))
    .map(f => ({ d: Number(f.attributes.BASENAME), shape: makeShape(f.geometry.rings) }))
    .sort((a, b) => a.d - b.d);
  process.stderr.write(`  ${districts.length} districts\n`);

  process.stderr.write(`Fetching 2020 census blocks…\n`);
  const blocks = [];
  for (let offset = 0; ; offset += 100000) {
    const page = await cached(`${FIPS}-blocks-${offset}.json`,
      `${TIGER}/Tracts_Blocks/MapServer/2/query?where=STATE%3D%27${FIPS}%27&outFields=COUNTY,POP100,INTPTLAT,INTPTLON` +
      `&returnGeometry=false&orderByFields=GEOID&resultOffset=${offset}&resultRecordCount=100000&f=json`);
    const feats = page.features || [];
    blocks.push(...feats.map(f => f.attributes));
    process.stderr.write(`  +${feats.length} (total ${blocks.length})\n`);
    if (feats.length < 100000) break;
  }

  const tally = new Map();   // county -> Map(district -> {pop, blocks})
  let unplaced = 0, unplacedPop = 0;
  for (const b of blocks) {
    const y = Number(b.INTPTLAT), x = Number(b.INTPTLON);
    const hit = districts.find(dd => inShape(x, y, dd.shape));
    if (!hit) { unplaced++; unplacedPop += Number(b.POP100) || 0; continue; }
    const county = FIPS + b.COUNTY;
    if (!tally.has(county)) tally.set(county, new Map());
    const m = tally.get(county);
    const cur = m.get(hit.d) || { pop: 0, blocks: 0 };
    cur.pop += Number(b.POP100) || 0;
    cur.blocks += 1;
    m.set(hit.d, cur);
  }

  const result = {};
  const rows = [];
  const dropped = [];
  for (const [county, m] of [...tally].sort()) {
    const all = [...m].sort((a, b) => b[1].pop - a[1].pop);
    const total = all.reduce((s, p) => s + p[1].pop, 0);
    const parts = all.filter(p => p[1].pop >= MIN_POP);
    all.filter(p => p[1].pop < MIN_POP)
       .forEach(([d, v]) => dropped.push(`${county} district ${d}: ${v.pop} people in ${v.blocks} block(s)`));
    if (parts.length > 1) {
      result[county] = parts.map(p => p[0]);
      rows.push(`${county} | plurality ${parts[0][0]} | ` +
        parts.map(([d, v]) => `${d}: ${v.pop.toLocaleString()} (${total ? (v.pop / total * 100).toFixed(2) : "0.00"}%, ${v.blocks} blocks)`).join("  "));
    }
  }

  console.log(`\n=== state ${FIPS}, ${label} ===`);
  console.log(`counties: ${tally.size}   split: ${Object.keys(result).length}   ` +
    `county x district pairs: ${[...tally.values()].reduce((s, m) => s + m.size, 0)}`);
  if (unplaced) console.log(`⚠ ${unplaced} blocks (${unplacedPop} people) fell in NO district — check the geometry`);
  if (dropped.length) {
    console.log(`\n--- dropped, below --min-pop ${MIN_POP} (generalized-boundary artifacts) ---`);
    dropped.forEach(d => console.log("  " + d));
  }
  console.log(`\n--- split counties (by 2020 population) ---`);
  rows.forEach(r => console.log("  " + r));
  console.log(`\n--- ds JSON for tools/apply-ds.js ---`);
  const json = JSON.stringify(result, null, 0).replace(/","/g, '", "');
  console.log(json);
  if (OUT) { fs.writeFileSync(OUT, JSON.stringify(result, null, 2) + "\n"); console.log(`\nwrote ${OUT}`); }
})().catch(e => { console.error(e.message); process.exit(1); });
