// Shared helpers for the checknbalance.org test suite.
// No dependencies — plain Node.js (any recent LTS).
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE_ROOT = path.join(__dirname, "..");

// Pull the contents of every non-empty inline <script> out of an HTML file.
function extractInlineScripts(htmlFile) {
  const html = fs.readFileSync(path.join(SITE_ROOT, htmlFile), "utf8");
  const scripts = [];
  for (const m of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    const code = m[1].trim();
    if (code) scripts.push(code);
  }
  return scripts;
}

// Truncate a script at the start of the first line that uses d3.
// Everything above that line is pure data + logic and can run in Node;
// everything from that line on needs a real browser/DOM/network.
function cutAtD3(code) {
  const idx = code.search(/^[^\n]*\bd3\./m);
  if (idx === -1) return code;
  return code.slice(0, code.lastIndexOf("\n", idx) + 1);
}

// A stand-in for a DOM element: accepts any property write, and the
// methods the site's pre-map code actually calls.
function fakeElement() {
  return {
    textContent: "",
    innerHTML: "",
    style: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    setAttribute() {},
    addEventListener() {},
    appendChild() {},
    querySelector() { return fakeElement(); },
    querySelectorAll() { return []; },
  };
}

// Build a browser-like sandbox for vm. `search` is the URL query string
// (e.g. "?state=TX") — state.html reads it to pick which state to render.
function makeSandbox(search) {
  const calls = { locationReplace: [] };
  const documentStub = {
    title: "",
    getElementById: () => fakeElement(),
    querySelector: () => fakeElement(),
    querySelectorAll: () => [],
    addEventListener() {},
    createElement: () => fakeElement(),
    body: fakeElement(),
  };
  const locationStub = {
    search: search || "",
    href: "",
    replace(url) { calls.locationReplace.push(url); },
  };
  const sandbox = {
    document: documentStub,
    location: locationStub,
    navigator: { language: "en-US" },
    fetch: () => Promise.resolve({ json: () => Promise.resolve({}) }),
    setTimeout() {},
    setInterval() {},
    requestAnimationFrame() {},
    console,
    URLSearchParams,
    __exports: {},
    __calls: calls,
  };
  sandbox.window = sandbox;
  sandbox.window.location = locationStub;
  return sandbox;
}

// Run `code` inside a fresh sandbox. `extra` is appended to the script so
// tests can export top-level consts/functions (they live in the script's
// lexical scope, not on the sandbox global, so this is the only way out).
// Returns { sandbox, error } — error is null when the script ran cleanly.
function runScript(code, { search = "", extra = "" } = {}) {
  const sandbox = makeSandbox(search);
  try {
    vm.runInNewContext(code + "\n" + extra, sandbox, { timeout: 10000 });
    return { sandbox, error: null };
  } catch (e) {
    return { sandbox, error: e };
  }
}

// Tiny assertion counter shared by the test files.
function makeChecker() {
  let pass = 0, fail = 0;
  return {
    check(ok, label) {
      if (ok) { pass++; console.log(`  PASS  ${label}`); }
      else { fail++; console.log(`  FAIL  ${label}`); }
    },
    summary(name) {
      console.log(`\n${name}: ${pass} passed, ${fail} failed`);
      if (fail > 0) process.exitCode = 1;
      return fail === 0;
    },
  };
}

module.exports = { SITE_ROOT, extractInlineScripts, cutAtD3, runScript, makeChecker };
