// Test 1 — Parse check: every inline <script> in every page must compile.
// Catches syntax errors only; it does NOT catch runtime bugs like
// declaration-order/TDZ errors — that's what smoke-test.js is for.
//
// Run:  node tests/parse-check.js
"use strict";
const { extractInlineScripts, makeChecker } = require("./lib");

const PAGES = ["index.html", "nc.html", "sc.html", "ga.html", "va.html", "md.html", "de.html", "state.html"];
const { check, summary } = makeChecker();

for (const page of PAGES) {
  const scripts = extractInlineScripts(page);
  check(scripts.length > 0, `${page}: has at least one inline script`);
  scripts.forEach((code, i) => {
    let ok = true, msg = "";
    try { new Function(code); } catch (e) { ok = false; msg = ` — ${e.message}`; }
    check(ok, `${page} inline script #${i + 1} compiles${msg}`);
  });
}

summary("parse-check");
