// Test 4 — National-map label fit.
//
// WHY THIS TEST EXISTS
// The two-letter state labels on index.html's map overlapped their state borders twice
// (owner-reported July 20 and again July 24, 2026). Both times the fix was verified by
// hit-testing the label's ANCHOR POINT against the state shape — and both times it passed
// while the map was visibly wrong. A point is not a label. The anchor can sit comfortably
// inside Florida while the ~15x8px glyph box around it hangs off both coasts.
//
// Measured on the July 24 geometry: Florida's label had 2.37px of clearance and Louisiana's
// 8.36px, against a glyph half-diagonal of ~8.8px. Both were clipping. Every other inline
// label had >= 11.1px and was fine.
//
// So this test measures CLEARANCE — the distance from the label's anchor to the nearest
// point on the state's boundary — and requires enough of it to fit the whole glyph box plus
// the border stroke. Geometry comes from tests/fixtures/state-label-rings.json, projected
// offline by tools/gen-label-fixture.js (the page fetches its TopoJSON from a CDN, and the
// suite must run offline with zero dependencies).
//
// Run:  node tests/label-fit.js
"use strict";
const fs = require("fs");
const path = require("path");
const { makeChecker } = require("./lib");

const { check, summary } = makeChecker();
const ROOT = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const fixture = JSON.parse(fs.readFileSync(
  path.join(__dirname, "fixtures", "state-label-rings.json"), "utf8"));

// ---------------------------------------------------------------
// Geometry budget — what a label actually needs
// ---------------------------------------------------------------
// .state-abbr is 11px / weight 600 / letter-spacing 0.02em, text-anchor:middle, dy 0.35em.
// A 2-letter uppercase string in a geometric sans runs ~0.62-0.70em per glyph; we size the
// box with the WIDEST of that range so the check does not depend on getting font metrics
// exactly right, and so a fallback font (Manrope failing to load) stays covered.
const FONT_PX = 11;
const GLYPH_W_EM = 0.70;                          // pessimistic per-character advance
const CAP_H_EM = 0.72;
const TRACKING = 0.02 * FONT_PX;
const HALF_W = (2 * GLYPH_W_EM * FONT_PX + TRACKING) / 2;
const HALF_H = (CAP_H_EM * FONT_PX) / 2;
const HALF_DIAG = Math.hypot(HALF_W, HALF_H);     // ~8.76px

const STROKE_HALF = 0.4;         // .state { stroke-width: 0.8 } — half of it is drawn inward,
                                 // so a glyph within 0.4px of the boundary sits ON the border.
const SIMPLIFY_SLACK = 0.5;      // RDP epsilon used to build the fixture; adding it back means
                                 // simplification can only make this test stricter, never looser.
const MIN_CLEARANCE = +(HALF_DIAG + STROKE_HALF + SIMPLIFY_SLACK).toFixed(2);   // ~9.66px

// Hawaii is the one genuine exception: the Big Island is only ~23px across at this projection,
// so NO placement on it reaches MIN_CLEARANCE — the best possible is ~7.9px. The label does fit
// at realistic font metrics and the owner has not reported it, so it is allowed a documented
// floor rather than being silently skipped. If Hawaii's treatment ever changes (a leader-line
// callout like the nine small states use), delete this entry.
const EXEMPT = {
  "15": { floor: 7.5, why: "Big Island caps clearance at ~7.9px; no inline placement can do better" }
};

// ---------------------------------------------------------------
// Parse the page's real values
// ---------------------------------------------------------------
const dims = html.match(/const width\s*=\s*(\d+),\s*height\s*=\s*(\d+)/);
const fit = html.match(/fitSize\(\[\s*width\s*-\s*(\d+)\s*,\s*height\s*-\s*(\d+)\s*\]/);
check(!!dims && !!fit, "index.html: map width/height/fitSize are parseable");

// If the map's geometry changed, the baked fixture describes a different picture and every
// number below would be meaningless. Fail loudly and say exactly how to fix it.
const m = fixture.meta;
const sameProjection = dims && fit && +dims[1] === m.width && +dims[2] === m.height &&
  +fit[1] === m.padX && +fit[2] === m.padY;
check(sameProjection,
  `fixture matches index.html's projection (${m.width}x${m.height} fit[-${m.padX},-${m.padY}])` +
  (sameProjection ? "" : " — STALE: re-run tools/gen-label-fixture.js"));
if (!sameProjection) { summary("label-fit"); return; }

const stBlock = html.match(/const ST = \{([\s\S]*?)\};/)[1];
const ST = {};
for (const mm of stBlock.matchAll(/"(\d{2})"\s*:\s*"([A-Z]{2})"/g)) ST[mm[1]] = mm[2];

const adjBlock = html.match(/const LABEL_ADJ = \{([\s\S]*?)\};/)[1];
const LABEL_ADJ = {};
for (const mm of adjBlock.matchAll(/"(\d{2})"\s*:\s*\[\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\]/g))
  LABEL_ADJ[mm[1]] = [+mm[2], +mm[3]];
check(Object.keys(LABEL_ADJ).length > 0, "index.html: LABEL_ADJ is parseable");

// ---------------------------------------------------------------
// Geometry helpers (no dependencies)
// ---------------------------------------------------------------
function pointInRing(p, ring) {
  let inside = false;
  for (let i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > p[1]) !== (yj > p[1]) &&
        p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function distToSeg(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}
// Distance from p to the nearest edge of `ring`, or 0 when p is outside it.
function clearance(p, ring) {
  if (!pointInRing(p, ring)) return 0;
  let min = Infinity;
  for (let i = 0, n = ring.length, j = n - 1; i < n; j = i++)
    min = Math.min(min, distToSeg(p, ring[j], ring[i]));
  return min;
}

// ---------------------------------------------------------------
// Every LABEL_ADJ override must clear its state's border
// ---------------------------------------------------------------
// Only overridden labels are checked. The other 38 inline labels sit at their path centroid,
// which this suite cannot recompute offline without d3-geo; they were all measured at
// >= 11.1px on July 24, 2026 and are not hand-edited, so LABEL_ADJ is where regressions land.
console.log(`— label clearance (need >= ${MIN_CLEARANCE}px: ${HALF_DIAG.toFixed(2)} glyph ` +
  `+ ${STROKE_HALF} stroke + ${SIMPLIFY_SLACK} simplify) —`);

for (const fips of Object.keys(LABEL_ADJ).sort()) {
  const abbr = ST[fips] || fips;
  const rings = fixture.rings[fips];
  if (!rings) { check(false, `${abbr}: fixture has geometry for FIPS ${fips}`); continue; }

  // A label may legitimately sit on a secondary landmass (MI's Lower Peninsula, HI's Big
  // Island), so take the best clearance across that state's rings.
  const best = rings.reduce((acc, r) => Math.max(acc, clearance(LABEL_ADJ[fips], r)), 0);
  const need = EXEMPT[fips] ? EXEMPT[fips].floor : MIN_CLEARANCE;
  const note = EXEMPT[fips] ? ` [exempt floor ${need}px — ${EXEMPT[fips].why}]` : "";

  check(best >= need,
    `${abbr} label at [${LABEL_ADJ[fips]}] clears its border by ${best.toFixed(2)}px ` +
    `(need ${need})${note}`);
}

// A label anchored outside every ring of its own state is always a bug, exemptions included.
for (const fips of Object.keys(LABEL_ADJ)) {
  const rings = fixture.rings[fips] || [];
  check(rings.some(r => pointInRing(LABEL_ADJ[fips], r)),
    `${ST[fips] || fips}: label anchor is inside the state`);
}

// Guard the exemption list itself — an exemption for a state that no longer needs one is
// dead weight that hides a real regression later.
for (const fips of Object.keys(EXEMPT)) {
  check(!!LABEL_ADJ[fips],
    `EXEMPT entry ${ST[fips] || fips} still corresponds to a LABEL_ADJ override`);
}

summary("label-fit");
