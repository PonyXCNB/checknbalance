// public-shell.js — redirects, sitemap, robots, and the landing-page coverage claim.
//
// CA, MO, TX, and DC have no dedicated page. Their pretty paths must redirect to
// state.html, the sitemap must list the pages that exist (plus those four routes),
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
check(!toml.includes("force = true"), "netlify.toml: redirects do not force over a real file");
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
  check(hit.length === 1 && hit[0].to === target && hit[0].status === "302",
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

const HONEST = "47 states fully built";
for (const page of ["index.html", "states.html"]) {
  const src = fs.readFileSync(path.join(SITE_ROOT, page), "utf8");
  const desc = (src.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const og = (src.match(/<meta property="og:description" content="([^"]*)"/) || [])[1] || "";
  check(!/every race in every state/i.test(desc + og), `${page}: description does not claim every race in every state`);
  check(!/every state, every race/i.test(desc + og), `${page}: description does not claim every state, every race`);
  check(!/every election guide/i.test(desc + og), `${page}: description does not claim every election guide`);
  check(desc.includes("47") && og.includes("47"), `${page}: description counts the 47 full guides`);
  check(/starter/i.test(desc) && /starter/i.test(og), `${page}: description says the unfinished states are starter pages`);
}
const index = fs.readFileSync(path.join(SITE_ROOT, "index.html"), "utf8");
check(index.includes("all fifty states fully built"), "index.html: the legend still says the site is working toward all fifty");
check(index.includes(HONEST), "index.html: meta description leads with what is actually built");

const analytics = fs.readFileSync(path.join(SITE_ROOT, "analytics.js"), "utf8");
check(/var PLAUSIBLE_DOMAIN = ""/.test(analytics), "analytics.js ships with an empty domain, so no tracker loads");
check(!/G-[A-Z0-9]{6,}/.test(analytics) && !/UA-\d+/.test(analytics), "analytics.js has no Google measurement ID");
new Function(analytics);

const publicPages = ["index.html", "states.html", "state.html", ...built];
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

summary("public-shell");
