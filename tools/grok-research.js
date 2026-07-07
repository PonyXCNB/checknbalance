// grok-research.js — lead generator for reducing [Verify] markers.
//
// Calls xAI's Grok with live web + X search and prints the answer with
// citations. Grok's output is NEVER published directly: it produces LEADS
// (candidate sites, filings, local coverage, the candidate's own posts)
// that must be verified against real sources before any [Verify] marker
// is removed. See "Editorial policy" in CLAUDE.md.
//
// Setup (one time):
//   1. Create an API key at https://console.x.ai (separate from a Grok
//      chat subscription; usage-billed).
//   2. Save it either as a user environment variable XAI_API_KEY, or in a
//      plain-text file at  %USERPROFILE%\.xai-api-key  (one line, the key).
//      NEVER put the key in this repository — the repo is public.
//
// Usage:
//   node tools/grok-research.js "What are 2026 SC AG candidate Richard Hricik's policy positions?"
//   node tools/grok-research.js --handles drmikekatz,shulli4senate "Summarize these candidates' stated positions"
//   node tools/grok-research.js --test          (checks key + makes a tiny call)
//
// Requires Node 18+ (global fetch). Model override: set XAI_MODEL.
"use strict";
const fs = require("fs");
const path = require("path");
const os = require("os");

const ENDPOINT = "https://api.x.ai/v1/responses";
const DEFAULT_MODEL = process.env.XAI_MODEL || "grok-4.3";

function getKey() {
  if (process.env.XAI_API_KEY) return process.env.XAI_API_KEY.trim();
  const keyFile = path.join(os.homedir(), ".xai-api-key");
  if (fs.existsSync(keyFile)) return fs.readFileSync(keyFile, "utf8").trim();
  console.error(
    "No xAI API key found.\n" +
    "Set the XAI_API_KEY environment variable (PowerShell: setx XAI_API_KEY \"xai-...\")\n" +
    "or save the key in " + keyFile
  );
  process.exit(2);
}

function parseArgs(argv) {
  const args = { handles: null, test: false, query: "" };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--handles") args.handles = (argv[++i] || "").split(",").map(h => h.replace(/^@/, "").trim()).filter(Boolean);
    else if (argv[i] === "--test") args.test = true;
    else rest.push(argv[i]);
  }
  args.query = rest.join(" ").trim();
  return args;
}

async function callGrok(key, query, handles) {
  const xSearch = { type: "x_search" };
  if (handles && handles.length) xSearch.allowed_x_handles = handles.slice(0, 20);

  const body = {
    model: DEFAULT_MODEL,
    input: [
      {
        role: "system",
        content:
          "You are a research assistant for a nonpartisan voter-education website. " +
          "Research the candidate/race asked about using live web and X search. " +
          "Report: stated policy positions, background/biography, endorsements, and notable praise/criticism. " +
          "EVERY claim must carry a source URL (campaign website, the candidate's own X posts, FEC/state election filings, or news outlets). " +
          "Clearly separate what the candidate says about themselves from third-party reporting. " +
          "If you cannot find sourced information, say so plainly — do not guess or embellish."
      },
      { role: "user", content: query }
    ],
    tools: [{ type: "web_search" }, xSearch]
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
    body: JSON.stringify(body)
  });
  const text = await res.text();
  if (!res.ok) throw new Error("xAI API error " + res.status + ": " + text.slice(0, 2000));
  return JSON.parse(text);
}

// The Responses API returns an `output` array; message items hold content
// parts with `text` and (per xAI docs) citation annotations. Extract text
// defensively and surface any URL-looking fields as citations.
function extractText(resp) {
  const chunks = [];
  const citations = new Set();
  function walk(node) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (typeof node.text === "string") chunks.push(node.text);
    for (const [k, v] of Object.entries(node)) {
      if (typeof v === "string" && /^https?:\/\//.test(v) && (k.toLowerCase().includes("url") || k.toLowerCase().includes("citation"))) citations.add(v);
      else if (typeof v === "object") walk(v);
    }
  }
  walk(resp.output !== undefined ? resp.output : resp);
  if (Array.isArray(resp.citations)) resp.citations.forEach(c => citations.add(typeof c === "string" ? c : c.url || JSON.stringify(c)));
  return { text: chunks.join("\n"), citations: [...citations] };
}

(async () => {
  const args = parseArgs(process.argv.slice(2));
  const key = getKey();

  if (args.test) {
    console.log("Key found. Testing a minimal call to " + ENDPOINT + " (model " + DEFAULT_MODEL + ")...");
    const resp = await callGrok(key, "Reply with the single word: ready", null);
    const { text } = extractText(resp);
    console.log("API responded:", text.trim().slice(0, 200) || "(no text — raw keys: " + Object.keys(resp).join(", ") + ")");
    return;
  }

  if (!args.query) {
    console.error('Usage: node tools/grok-research.js [--handles h1,h2] "research question"');
    process.exit(2);
  }

  const resp = await callGrok(key, args.query, args.handles);
  const { text, citations } = extractText(resp);
  console.log(text.trim());
  if (citations.length) {
    console.log("\n--- CITATIONS ---");
    citations.forEach(c => console.log(c));
  } else {
    console.log("\n--- CITATIONS ---\n(none surfaced — inspect raw response below)");
    console.log(JSON.stringify(resp).slice(0, 3000));
  }
})().catch(e => { console.error(e.message || e); process.exit(1); });
