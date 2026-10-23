// public-shell.js — redirects, sitemap, robots, and the landing-page coverage claim.
//
// CA, MO, and DC have no dedicated page. Texas does (tx.html). Pretty paths for
// the unfinished states must redirect to state.html, the sitemap must list the
// pages that exist (plus those starter routes),
// and the home page must not claim every race in every state is built.
//
// Run:  node tests/public-shell.js
"use strict";
const fs = require("fs");
const path = require("path");
const { SITE_ROOT, makeChecker } = require("./lib");

const { check, summary } = makeChecker();

const ALIASES = [
  ["ca", "CA"],
  ["mo", "MO"],
  ["tx", "TX"],
  ["dc", "DC"],
];

function redirectRules(toml) {
  return toml.split("[[redirects]]").slice(1).map(block => ({
    from: (block.match(/from = "([^"]+)"/) || [])[1],
    to: (block.match(/to = "([^"]+)"/) || [])[1],
    status: (block.match(/status = (\d+)/) || [])[1],
    force: /force = true/.test(block),
  }));
}

const toml = fs.readFileSync(path.join(SITE_ROOT, "netlify.toml"), "utf8");
const rules = redirectRules(toml);
check(rules.length > 0 && rules.every(r => r.from && r.to && r.status), "netlify.toml: every redirect has from, to, and status");
check(rules.filter(r => r.status === "302").every(r => !r.force), "netlify.toml: pretty-path redirects do not force over a future real page");
check(rules.some(r => r.status === "404" && r.force), "netlify.toml: internal files are forced 404s");
check(!fs.existsSync(path.join(SITE_ROOT, "_redirects")), "redirects live only in netlify.toml, not a second _redirects file");

for (const [ab, AB] of ALIASES) {
  const target = `/state.html?state=${AB}`;
  const fileExists = fs.existsSync(path.join(SITE_ROOT, `${ab}.html`));
  for (const from of [`/${ab}`, `/${ab}.html`, `/${AB}`, `/${AB}.html`]) {
    const hit = rules.filter(r => r.from === from);
    if (fileExists) {
      check(hit.length === 0, `netlify.toml: remove the ${from} redirect once ${ab}.html exists`);
    } else {
      check(hit.length === 1 && hit[0].to === target && hit[0].status === "302" && !hit[0].force,
        `netlify.toml: ${from} → ${target} (302)`);
    }
  }
}
const EXTRA = [
  ["/ca/", "CA"],
  ["/california", "CA"],
  ["/california/", "CA"],
  ["/mo/", "MO"],
  ["/missouri", "MO"],
  ["/missouri/", "MO"],
  ["/tx/", "TX"],
  ["/texas", "TX"],
  ["/texas/", "TX"],
  ["/dc/", "DC"],
  ["/district-of-columbia", "DC"],
  ["/district-of-columbia/", "DC"],
];
for (const [from, AB] of EXTRA) {
  const target = `/state.html?state=${AB}`;
  const hit = rules.filter(r => r.from === from);
  check(hit.length === 1 && hit[0].to === target && hit[0].status === "302" && !hit[0].force,
    `netlify.toml: ${from} → ${target} (302)`);
}

const built = fs.readdirSync(SITE_ROOT).filter(f => /^[a-z]{2}\.html$/.test(f)).sort();
const sitemap = fs.readFileSync(path.join(SITE_ROOT, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(/&amp;/g, "&"));
const locSet = new Set(locs);
check(locs.length === locSet.size, "sitemap.xml: no duplicate URLs");
check(sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), "sitemap.xml: urlset namespace");

const expected = new Set([
  "https://checknbalance.org/",
  "https://checknbalance.org/states.html",
  "https://checknbalance.org/state.html",
]);
for (const page of built) expected.add(`https://checknbalance.org/${page}`);
for (const [ab, AB] of ALIASES) {
  const dedicated = `https://checknbalance.org/${ab}.html`;
  const starter = `https://checknbalance.org/state.html?state=${AB}`;
  if (fs.existsSync(path.join(SITE_ROOT, `${ab}.html`))) expected.add(dedicated);
  else expected.add(starter);
}
const missing = [...expected].filter(u => !locSet.has(u));
const extra = locs.filter(u => !expected.has(u));
check(missing.length === 0, `sitemap.xml lists every public page${missing.length ? " — missing " + missing.join(", ") : ""}`);
check(extra.length === 0, `sitemap.xml lists only public pages${extra.length ? " — extra " + extra.join(", ") : ""}`);
for (const [ab] of ALIASES) {
  if (!fs.existsSync(path.join(SITE_ROOT, `${ab}.html`))) {
    check(!locSet.has(`https://checknbalance.org/${ab}.html`), `sitemap.xml does not pretend ${ab}.html exists`);
  }
}

const robots = fs.readFileSync(path.join(SITE_ROOT, "robots.txt"), "utf8");
check(robots.includes("Sitemap: https://checknbalance.org/sitemap.xml"), "robots.txt points at the sitemap");

const HONEST = "48 states fully built";
for (const page of ["index.html", "states.html"]) {
  const src = fs.readFileSync(path.join(SITE_ROOT, page), "utf8");
  const desc = (src.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const og = (src.match(/<meta property="og:description" content="([^"]*)"/) || [])[1] || "";
  check(!/every race in every state/i.test(desc + og), `${page}: description does not claim every race in every state`);
  check(!/every state, every race/i.test(desc + og), `${page}: description does not claim every state, every race`);
  check(!/every election guide/i.test(desc + og), `${page}: description does not claim every election guide`);
  check(desc.includes("48") && og.includes("48"), `${page}: description counts the 48 full guides`);
  check(/starter/i.test(desc) && /starter/i.test(og), `${page}: description says the unfinished states are starter pages`);
}
const index = fs.readFileSync(path.join(SITE_ROOT, "index.html"), "utf8");
check(index.includes("all fifty states fully built"), "index.html: the legend still says the site is working toward all fifty");
check(index.includes(HONEST), "index.html: meta description leads with what is actually built");

const analytics = fs.readFileSync(path.join(SITE_ROOT, "analytics.js"), "utf8");
check(/var PLAUSIBLE_DOMAIN = ""/.test(analytics), "analytics.js ships with an empty domain, so no tracker loads");
check(!/G-[A-Z0-9]{6,}/.test(analytics) && !/UA-\d+/.test(analytics), "analytics.js has no Google measurement ID");
new Function(analytics);

const publicPages = ["index.html", "states.html", "state.html", "404.html", ...built];
const untagged = publicPages.filter(page => {
  const src = fs.readFileSync(path.join(SITE_ROOT, page), "utf8");
  return src.split('src="analytics.js"').length !== 2;
});
check(untagged.length === 0, `every public page loads analytics.js once${untagged.length ? " — " + untagged.join(", ") : ""}`);

const doc = fs.readFileSync(path.join(SITE_ROOT, "docs/analytics-and-utm.md"), "utf8");
check(doc.includes("PLAUSIBLE_DOMAIN") && doc.includes("Enable Analytics"), "docs: both analytics choices tell Ryan the next step");
check(doc.includes("docs/UTM-CONVENTION.md") && !doc.includes("cnb_YYYYMMDD"), "analytics doc points at the one UTM convention");
const utm = fs.readFileSync(path.join(SITE_ROOT, "docs/UTM-CONVENTION.md"), "utf8");
check(utm.includes("utm_source=x") && utm.includes("cnb-calendar-YYYY-MM"), "UTM convention: source x and calendar campaign");
check(utm.includes("nc.html") && utm.includes("state.html?state=CA"), "UTM convention lands on canonical pages, not the CA redirect");
check(!locs.some(u => /^https:\/\/checknbalance\.org\/[a-z]{2}$/.test(u)), "sitemap lists built states as .html, not bare /nc paths");

// ---- security headers (enforced CSP, not report-only) ----
const headerBlock = (toml.split("[[headers]]")[1] || "").split("[[redirects]]")[0];
check(headerBlock.includes('for = "/*"'), "netlify.toml: security headers apply to every path");
for (const line of [
  'X-Content-Type-Options = "nosniff"',
  'X-Frame-Options = "DENY"',
  'Referrer-Policy = "strict-origin-when-cross-origin"',
  'Permissions-Policy = "camera=(), microphone=(), geolocation=()"',
  'Strict-Transport-Security = "max-age=31536000; includeSubDomains"',
  "frame-ancestors 'none'",
  "https://cdn.jsdelivr.net",
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
  "https://ipapi.co",
  "https://plausible.io",
  "'unsafe-inline'",
]) {
  check(headerBlock.includes(line), `netlify.toml headers include ${line}`);
}
check(headerBlock.includes('Content-Security-Policy = "') && !headerBlock.includes("Content-Security-Policy-Report-Only"),
  "netlify.toml: Content-Security-Policy is enforced");

// ---- SRI on every jsDelivr script tag ----
const D3_TAG = '<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0" integrity="sha384-CjloA8y00+1SDAUkjs099PVfnY2KmDC2BZnws9kh8D/lX1s46w6EPhpXdqMfjK6i" crossorigin="anonymous"></script>';
const TOPO_TAG = '<script src="https://cdn.jsdelivr.net/npm/topojson-client@3.1.0" integrity="sha384-Ukv1p/xTma6P4/2bY5KzWBw+ydSpXmhCMtyciIQVDJ1RmOxtCYNMF1uXT9T63H67" crossorigin="anonymous"></script>';
let sriTags = 0;
for (const page of publicPages) {
  const src = fs.readFileSync(path.join(SITE_ROOT, page), "utf8");
  const tags = [...src.matchAll(/<script\b[^>]*cdn\.jsdelivr\.net[^>]*>/g)].map(m => m[0]);
  if (page === "states.html" || page === "404.html") {
    check(tags.length === 0, `${page}: no jsDelivr script (nothing to hash)`);
    continue;
  }
  check(src.includes(D3_TAG), `${page}: d3@7.9.0 script has the sha384 integrity and crossorigin`);
  check(src.includes(TOPO_TAG), `${page}: topojson-client@3.1.0 script has the sha384 integrity and crossorigin`);
  check(tags.length === 2 && tags.every(t => t.includes("integrity=\"sha384-") && t.includes('crossorigin="anonymous"')),
    `${page}: every jsDelivr script tag carries SRI`);
  sriTags += tags.length;
}
check(sriTags === (publicPages.length - 2) * 2, `SRI on ${sriTags} jsDelivr script tags`);
for (const tool of ["tools/apply-index-fixes.js", "tools/apply-review-fixes.js", "tools/apply-state-page-fixes.js", "tools/clone-state.js"]) {
  const src = fs.readFileSync(path.join(SITE_ROOT, tool), "utf8");
  check(src.includes("sha384-CjloA8y00+1SDAUkjs099PVfnY2KmDC2BZnws9kh8D/lX1s46w6EPhpXdqMfjK6i")
    && src.includes("sha384-Ukv1p/xTma6P4/2bY5KzWBw+ydSpXmhCMtyciIQVDJ1RmOxtCYNMF1uXT9T63H67"),
    `${tool}: future pages keep the jsDelivr SRI hashes`);
}

// ---- internal files 404, public files do not ----
// Netlify splats match only when * is at the end of the path. "/tools/*" matches
// "/tools/anything", including nested files. It does not match "/tools" itself.
function ruleMatches(from, pathname) {
  if (from.endsWith("/*")) return pathname.startsWith(from.slice(0, -1));
  return pathname === from;
}
const HIDDEN = [
  "/CLAUDE.md", "/MIDNIGHT_PUSH_NOTES.md", "/netlify.toml", "/.gitignore",
  "/package.json", "/package-lock.json", "/yarn.lock", "/pnpm-lock.yaml",
  "/docs", "/docs/", "/docs/*",
  "/tools", "/tools/", "/tools/*",
  "/tests", "/tests/", "/tests/*",
  "/node_modules", "/node_modules/", "/node_modules/*",
];
const hiddenRules = rules.filter(r => r.status === "404");
check(hiddenRules.every(r => r.force && r.to === "/404.html"), "every 404 rule forces /404.html");
for (const from of HIDDEN) {
  const hit = hiddenRules.filter(r => r.from === from);
  check(hit.length === 1, `netlify.toml hides ${from}`);
}
const PUBLIC_ROOT = new Set(["index.html", "states.html", "state.html", "404.html", "analytics.js",
  "sitemap.xml", "robots.txt", "favicon.ico", "favicon.png", "favicon.svg", "apple-touch-icon.png", ...built]);
function walk(dir, base) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    if (name === ".git") continue;
    const abs = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    if (fs.statSync(abs).isDirectory()) out.push(...walk(abs, rel));
    else out.push(rel);
  }
  return out;
}
// Netlify builds from the git repo, so git-ignored local files (e.g. .claude/) never
// publish. Skip them; fall back to the full walk if git is unavailable.
let ignoredSet = new Set();
try {
  const out = require("child_process").execSync("git ls-files --others --ignored --exclude-standard", { cwd: SITE_ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] });
  ignoredSet = new Set(out.split(/\r?\n/).filter(Boolean));
} catch (e) { /* no git: check everything */ }
const leaked = [];
const overblocked = [];
for (const rel of walk(SITE_ROOT, "").filter(r => !ignoredSet.has(r))) {
  const pathname = "/" + rel;
  const hidden = hiddenRules.some(r => ruleMatches(r.from, pathname));
  const isPublic = !rel.includes("/") && PUBLIC_ROOT.has(rel);
  if (isPublic && hidden) overblocked.push(pathname);
  if (!isPublic && !hidden) leaked.push(pathname);
}
check(overblocked.length === 0, `404 rules leave public files alone${overblocked.length ? " — " + overblocked.join(", ") : ""}`);
check(leaked.length === 0, `every non-public file is covered by a 404 rule${leaked.length ? " — " + leaked.slice(0, 12).join(", ") : ""}`);

summary("public-shell");
