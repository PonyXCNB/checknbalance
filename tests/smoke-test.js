// Test 2 — Runtime smoke test: execute each page's inline scripts
// top-to-bottom with DOM stubs, cut at the first d3 usage (the map code
// needs a real browser). This is the test that catches declaration-order /
// temporal-dead-zone bugs that a parse check misses.
//
// state.html is run once per featured state plus two control states
// (TX = big non-featured state, CA = the default fallback), because the
// script's top-level code branches on the ?state= URL parameter.
//
// Run:  node tests/smoke-test.js
"use strict";
const { extractInlineScripts, cutAtD3, runScript, makeChecker } = require("./lib");

const FEATURED_ABBRS = ["GA", "AL", "SC", "FL", "NY", "VA", "MD", "DC", "NJ", "DE"];
const CONTROL_ABBRS = ["TX", "CA"];
const { check, summary } = makeChecker();

// --- index.html and nc.html: run every inline script once ---
for (const page of ["index.html", "nc.html"]) {
  extractInlineScripts(page).forEach((code, i) => {
    const { error } = runScript(cutAtD3(code));
    check(!error, `${page} script #${i + 1} runs without error${error ? ` — ${error.message}` : ""}`);
  });
}

// --- state.html: run for every featured + control state ---
const stateScripts = extractInlineScripts("state.html");
for (const abbr of [...FEATURED_ABBRS, ...CONTROL_ABBRS]) {
  stateScripts.forEach((code, i) => {
    const { sandbox, error } = runScript(cutAtD3(code), { search: `?state=${abbr}` });
    check(!error, `state.html?state=${abbr} script #${i + 1} runs without error${error ? ` — ${error.message}` : ""}`);
    if (abbr === "DC") {
      // sanity: DC must not redirect anywhere
      check(sandbox.__calls.locationReplace.length === 0, "state.html?state=DC does not redirect");
    }
  });
}

// --- NC must redirect to nc.html ---
{
  const { sandbox } = runScript(cutAtD3(stateScripts[0]), { search: "?state=NC" });
  check(
    sandbox.__calls.locationReplace.includes("nc.html"),
    "state.html?state=NC redirects to nc.html"
  );
}

summary("smoke-test");
