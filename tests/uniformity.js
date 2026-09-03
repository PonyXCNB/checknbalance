// Test 6 — uniformity: every state page is the SAME page with different data.
//
// The Sept 3, 2026 self-review found the pages had drifted in ways no other suite could see:
// 53 spellings of five scope ideas, a legend describing a tier no page has, seven pages styling
// a map selector that did not exist on them, three footers citing another state's sources, a
// hero stat that was wrong on a dozen pages, static footer dates that disagreed with SITE_META,
// and a "Data" link that went nowhere. Each of those is now a check here, so the next page
// cloned or hand-edited cannot quietly drift again.
//
// Run:  node tests/uniformity.js
"use strict";
const fs = require("fs");
const path = require("path");
const { SITE_ROOT, extractInlineScripts, cutAtD3, runScript, makeChecker } = require("./lib");

const { check, summary } = makeChecker();
const pages = fs.readdirSync(SITE_ROOT).filter(f => /^[a-z]{2}\.html$/.test(f)).sort();
check(pages.length >= 46, `found ${pages.length} state pages`);

// The one scope grammar (tools/normalize-vocabulary.js):  <Level> · <Reach>[ · <Qualifier>]
const SCOPE_RE = /^(Federal|State|Judicial|Ballot Measure|Local) · (Statewide|At-Large|County|Parish|District(?: \d+)?|House Districts? [\d &]+|Senate Districts? [\d &]+)(?: · (Primary|Runoff|Special|Retention))?$/;
const DATE_RE = /^[A-Z][a-z]{2} \d{1,2}, \d{4}$/;
const CARD_KEYS = ["positions", "differentiators", "supporters", "opponents"];
const sourcesByPage = new Map();

for (const page of pages) {
  const ab = page.slice(0, 2);
  const src = fs.readFileSync(path.join(SITE_ROOT, page), "utf8");
  console.log(`\n— ${page} —`);

  // ---- data vocabulary ----
  const { sandbox, error } = runScript(cutAtD3(extractInlineScripts(page)[0]), {
    extra: "__exports.S = STATEWIDE; __exports.H = HOUSE_RACES;" +
           "__exports.L = typeof LOCAL_RACES !== 'undefined' ? LOCAL_RACES : {}; __exports.M = SITE_META;",
  });
  check(!error, `${page}: data script runs${error ? ` — ${error.message}` : ""}`);
  if (error) continue;
  const x = sandbox.__exports;
  const races = [
    ...x.S,
    ...Object.values(x.H).flatMap(d => d.races || []),
    ...Object.values(x.L).flatMap(a => a || []),
  ];
  const badScope = [...new Set(races.filter(r => r.scope && !SCOPE_RE.test(r.scope)).map(r => r.scope))];
  check(badScope.length === 0, `${page}: every scope follows "<Level> · <Reach>[ · <Qualifier>]"${badScope.length ? ` — ${badScope.slice(0, 4).join(" | ")}` : ""}`);
  const badDate = [...new Set(races.filter(r => !DATE_RE.test(r.date || "")).map(r => r.date))];
  check(badDate.length === 0, `${page}: every race date reads "Mon D, YYYY"${badDate.length ? ` — ${badDate.slice(0, 4).join(" | ")}` : ""}`);
  const pads = races.flatMap(r => r.candidates || []).filter(c => CARD_KEYS.some(k => (c[k] || []).some(v => v === ""))).length;
  check(pads === 0, `${page}: no empty-string pads in candidate cards (${pads})`);
  check(!/\(open seat\)/.test(src), `${page}: open-seat tags are uppercase`);
  // JS silently keeps the LAST duplicate key, so a doubled scope: would hide a wrong label.
  const doubled = (src.match(/scope: "[^"]+",\s*scope: "/g) || []).length;
  check(doubled === 0, `${page}: no race object declares scope twice (${doubled})`);

  // ---- the shared skeleton ----
  const footerDate = (src.match(/Last updated: <span id="last-updated">([^<]*)<\/span>/) || [])[1];
  check(footerDate === x.M.lastUpdated, `${page}: static footer date matches SITE_META.lastUpdated (${footerDate} vs ${x.M.lastUpdated})`);
  check(src.includes(`<svg id="${ab}map"`) && src.includes(`#${ab}map {`), `${page}: the map's svg id and its CSS rule agree`);
  check(!src.includes("No data yet"), `${page}: the legend no longer describes a "No data yet" tier`);
  check(src.includes('id="stat-statewide"'), `${page}: the statewide hero stat is computed from data`);
  check(/<aside class="panel" id="panel" role="dialog" aria-modal="true" aria-labelledby="panel-title"/.test(src), `${page}: the drawer is a labelled dialog`);
  check(src.includes('href="#sources"') && src.includes('id="sources"'), `${page}: the nav's Sources link has a target`);
  check(src.includes(`<link rel="canonical" href="https://checknbalance.org/${ab}.html">`), `${page}: canonical URL names this page`);
  check(src.includes("geoConicEqualArea"), `${page}: state-centred conic projection`);
  const ar = src.match(/\.map-frame \{[\s\S]*?aspect-ratio: ([0-9.]+) \/ 1/);
  const vb = src.match(new RegExp(`<svg id="${ab}map" viewBox="0 0 1000 (\\d+)"`));
  check(!!ar && !!vb && Math.abs(1000 / +ar[1] - +vb[1]) < 2, `${page}: map frame aspect and svg viewBox agree`);
  check(src.includes('.attr("tabindex", 0)') && src.includes('role="dialog"'), `${page}: counties are keyboard-reachable`);
  check(src.includes('d3@7.9.0') && src.includes('topojson-client@3.1.0'), `${page}: CDN versions pinned`);

  // ---- the footer cites THIS page's sources ----
  const foot = src.slice(src.indexOf('id="sources"'), src.indexOf("</footer>"));
  const sources = foot.slice(foot.indexOf("Sources")).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  sourcesByPage.set(page, sources);
}

console.log("\n— cross-page —");
{
  const seen = new Map();
  const dupes = [];
  for (const [page, text] of sourcesByPage) {
    if (text.length > 40 && seen.has(text)) dupes.push(`${page}=${seen.get(text)}`);
    else seen.set(text, page);
  }
  check(dupes.length === 0, `no two pages share an identical Sources line${dupes.length ? ` — ${dupes.join(", ")}` : ""}`);
}

// ---- index.html: the map, the list and the legend agree with the pages that exist ----
{
  const src = fs.readFileSync(path.join(SITE_ROOT, "index.html"), "utf8");
  const built = (src.match(/const BUILT = \{([^}]*)\}/) || ["", ""])[1].match(/"([a-z]{2})\.html"/g) || [];
  check(built.length === pages.length, `index.html: BUILT lists ${built.length} pages, ${pages.length} exist`);
  const listed = new Set((src.match(/<li><a class="[a-z]+" href="([a-z]{2}\.html)"/g) || []).map(m => m.match(/([a-z]{2}\.html)/)[1]));
  const missingFromList = pages.filter(p => !listed.has(p));
  check(missingFromList.length === 0, `index.html: the state list links every built page${missingFromList.length ? ` — missing ${missingFromList.join(", ")}` : ""}`);
  const items = (src.match(/<li><a class="(?:built|partial|starter)" href="/g) || []).length;
  check(items === 51, `index.html: the state list has 51 entries (${items})`);
  const partialEmpty = /const PARTIAL = new Set\(\[\]\)/.test(src);
  check(partialEmpty === !src.includes("Marquee races built <span"), "index.html: the legend shows a Marquee tier only if a state is in it");
  check(src.includes('.filter(d => ST[String(d.id).padStart(2, "0")])'), "index.html: territories are filtered out of the label pass");
}

// ---- state.html: its redirect list is the list of built pages ----
{
  const src = fs.readFileSync(path.join(SITE_ROOT, "state.html"), "utf8");
  const list = ((src.match(/var BUILT = "([a-z ]+)"\.split/) || [])[1] || "").split(" ").filter(Boolean).sort();
  check(list.join(",") === pages.map(p => p.slice(0, 2)).join(","), `state.html: the head redirect list matches the built pages (${list.length})`);
  const meta = (src.match(/const SITE_META = \{ lastUpdated: "([^"]+)" \}/) || [])[1];
  const foot = (src.match(/Last updated: <span id="last-updated">([^<]*)<\/span>/) || [])[1];
  check(!!meta && meta === foot, `state.html: static footer date matches SITE_META (${foot} vs ${meta})`);
}

process.exit(summary("uniformity") ? 0 : 1);
