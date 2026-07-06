// Run the whole test suite:  node tests/run-all.js
// Exits non-zero if any test fails.
"use strict";
const { execFileSync } = require("child_process");
const path = require("path");

let failed = false;
for (const file of ["parse-check.js", "smoke-test.js", "data-logic.js"]) {
  console.log(`\n============ ${file} ============`);
  try {
    execFileSync(process.execPath, [path.join(__dirname, file)], { stdio: "inherit" });
  } catch {
    failed = true;
  }
}
console.log(failed ? "\n❌ SOME TESTS FAILED" : "\n✅ ALL TESTS PASSED");
process.exitCode = failed ? 1 : 0;
