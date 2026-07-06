# CLAUDE.md — checknbalance.org

## Project overview

**checknbalance.org** is a nonpartisan civic voter-education website. Its thesis: down-ballot races
(school board, sheriff, county commission, judges, state legislature) are decided by tiny, poorly
informed electorates, and no incumbent site (Ballotpedia, Vote411, BallotReady) covers them deeply.
The moat strategy is **depth in one geography** — southeastern North Carolina (the Cape Fear region)
first — not national breadth. The national 50-state shell exists for navigation and credibility.

The owner is a non-developer. Explain changes plainly, never assume coding knowledge, and keep the
no-build-step simplicity unless there's a compelling reason to change it (discuss first).

## Live deployment

- **Host:** Netlify, site name `strong-bienenstitch-2e0547`.
- **Deploy workflow (as of July 6, 2026):** the site is a git repository pushed to GitHub, with
  Netlify auto-deploy — every push to `main` publishes the site. `netlify.toml` sets the publish
  directory to the repo root (no build command). Manual drag-and-drop ("Netlify Drop") is a
  fallback only; remember **every drop replaces the ENTIRE site** — all files together, never
  individually.
- **Domain:** `checknbalance.org`, registered at **Cloudflare Registrar**. Cloudflare Registrar does
  NOT allow nameserver changes, so we use Netlify's "external DNS" path, NOT "Netlify DNS":
  - `CNAME @ → apex-loadbalancer.netlify.com` (Cloudflare auto-flattens root CNAMEs)
  - `CNAME www → strong-bienenstitch-2e0547.netlify.app`
  - Both records must be **grey-cloud (DNS only)**, not proxied, or Netlify's HTTPS cert fails.
- HTTPS is auto-provisioned by Netlify.

## File inventory (site root)

| File | Role |
|------|------|
| `index.html` | National landing page: clickable US map (all 50 states + DC), voter-turnout facts section, IP-geolocation home-state pulse |
| `nc.html` | North Carolina — the fully built flagship state (county map, 100 counties, full race data) |
| `sc.html` | South Carolina — second fully built state (46 counties, 7 districts, June 2026 primary results; built July 2026 by cloning nc.html). No LOCAL_RACES yet |
| `ga.html` | Georgia — third fully built state (159 counties, 14 districts, May 19/June 16 primary results, GA-13 July 28 special + GA-14 special history). No LOCAL_RACES yet |
| `va.html` | Virginia — fourth fully built state (133 counties AND independent cities, 11 districts, 2025 statewide results as history). ⚠ VA's 2026 primary is **Aug 4** (moved by HB 29) — most challenger slots are pending fields, refresh after. No LOCAL_RACES yet |
| `state.html` | Generic per-state page, driven by URL param `?state=XX` (2-letter abbr). Renders that state's real county map + race data. NC/SC/GA/VA redirect to their dedicated pages |
| `favicon.svg` | Gold-gradient circle + white checkmark (primary favicon, matches site crest) |
| `favicon.png` | 32px PNG fallback |
| `favicon.ico` | Multi-size ICO (16/32/48) at root for legacy auto-discovery |
| `apple-touch-icon.png` | 180px iOS home-screen icon |
| `netlify.toml` | Netlify config: publish the repo root, no build command |
| `tests/` | Node.js test suite — see the Testing section |
| `CLAUDE.md` / `.gitignore` | This file / git hygiene (not published, harmless if deployed) |

## Tech stack & constraints

- **Pure static HTML.** Each page is a single self-contained file: inline CSS + inline JS. No build
  step, no framework, no npm, no localStorage (deliberate — owner edits files directly and re-drops).
- **Libraries (CDN):** D3 v7 and topojson-client v3 from `cdn.jsdelivr.net`.
- **Geometry:** `us-atlas@3` — `states-10m.json` (national map) and `counties-10m.json` (state maps).
  Counties are filtered client-side by 2-digit state FIPS prefix. Both files have `properties.name`.
- **Fonts (Google Fonts):** Cormorant Garamond (serif, headlines) + Manrope (sans, body).
  ⚠️ History: the original font was Fraunces; its italic variable-font axes (SOFT/WONK) rendered
  stray decorative curls, so it was replaced. Do not reintroduce Fraunces.
- **Maps:** NC/state pages use `d3.geoMercator().fitSize(...)`; national uses `d3.geoAlbersUsa()`.

## Design system (defined as CSS custom properties in each file)

```
--ink:       #0E1726   (deep navy text)
--ink-soft:  #4A5468
--paper:     #FBF9F4   (warm off-white background)
--paper-pure:#FFFFFF
--gold:      #B8893C   (primary accent)
--gold-deep: #8C6420
--gold-soft: #E8D9B8
--red:       #B91C2C
--line:      #E5DDC9   (borders)
```

Aesthetic reference: TrumpRx.gov — white space, gilded gold accents, big serif headlines with one
italic gold word (`<em>`), pill badges, minimalism. Key recurring patterns:

- **Crest:** gold-gradient circle (135°, gold → gold-deep) with white serif initials. The favicon
  is this crest with a checkmark.
- **Drawer panel:** county details slide in from the right (720px on nc.html, 640px on state.html),
  with overlay, ESC/overlay-click to close.
- **Accordion seats:** every race in a drawer is collapsed by default (title, date, pill, candidate
  count, chevron). Click expands via CSS grid-template-rows 0fr→1fr animation. Event delegation on
  `#panel-body`.
- **Race ordering:** Upcoming → Scheduled → Past, with serif group headers.
- **Candidate cards:** name + party tag (D blue / R red / I grey / L tan / G green), "Top Positions"
  and "Differentiators" lists (gold tick bullets), then **voices**: side-by-side "Supporters say"
  (green block) / "Opponents say" (red block) quote-styled lists. `winner: true` adds a gold
  "★ ELECTED" badge.
- **Capital markers:** muted star + city name only (the "State Capital" sub-label was removed for
  minimalism). Shown on individual state maps ONLY — never on the national map.
- **National map tiers:** gold = fully built (the BUILT map: NC + SC), lighter gold `#D9BE85` =
  marquee races built (the PARTIAL set), cream = starter framework. Legend reflects all three.
- **Small-state callouts (index.html):** VT, NH, MA, RI, CT, NJ, DE, MD, DC get leader lines to
  labels stacked on the right; each callout is a clickable group with an invisible 40×24 hit rect.
  Label coordinates are hand-tuned estimates — verify visually after any map layout change.
- **Home-state pulse (index.html):** on load, fetch `https://ipapi.co/json/`; if a US region code
  is returned, that state's path gets class `home` → 8s keyframe fill pulse (light red → cream →
  light blue → cream) plus a caption under the map. Fails silently (ad-blockers, rate limits). If
  home === NC (the featured gold state), a stroke pulse is used instead of fill.

## Data architecture

### nc.html (flagship)
```
COUNTIES      : { "37xxx": { n: "Name", d: <primary US House district 1-14> } }  // all 100
STATEWIDE     : [ race, ... ]        // races every county sees (Gov, Senate, AG, etc.)
HOUSE_RACES   : { <district#>: { name, region, races: [...] } }
LOCAL_RACES   : { "37129": [ race, ... ] }   // county-keyed local races; New Hanover built
getCountyElections(fips) merges STATEWIDE + district races + LOCAL_RACES[fips], sorts by type/date.
```
⚠️ **Gotcha (was a shipped bug):** House race objects do NOT carry their own `office` — it lives on
the parent district. `getCountyElections` attaches `office: district.name` and a scope label to each
race. If you add races anywhere, ensure each renders with a non-blank title.

**Race schema:** `{ date, type: "past"|"upcoming"|"scheduled", scope, office, note, candidates[] }`
**Candidate schema:** `{ name, party: D|R|I|L|G, winner: bool, positions[3], differentiators[3],
supporters[], opponents[] }`

### state.html (all other states)
```
STATES        : abbr → { f: fips, n: name }         CAP: fips → [city, lng, lat]
SEN_2026      : Set of 33 Class-2 Senate states     SEN_SPECIAL: { OH, FL }
SEN_NOTES / GOV_NOTES : verified open-seat & battleground notes
GOV_2026      : Set of 36 governor states           HOUSE_SEATS: seats per state (2020 apportionment)
STATE_RACES   : { ABBR: [ fullRace, ... ] }  // 10 featured states, full candidate depth
buildSeats(abbr) generates office-level entries; each STATE_RACES race has a `key`
("senate" | "senate-special" | "governor" | "mayor" | "delegate") and coveredKeys(abbr)
suppresses the matching generic entry so offices never appear twice.
openPanel: seats = [...(STATE_RACES[abbr] || []), ...buildSeats(abbr)]
```
⚠️ **Declaration order matters** (was a shipped bug — see Lessons). Any code reading STATE_RACES
must appear AFTER its declaration; a top-level TDZ error kills the whole script including the map.

### index.html (national)
```
ST / NAME     : fips → abbr / full name             CAP: capitals (currently unused on this page)
BUILT         : { "37": "nc.html", "45": "sc.html", "13": "ga.html", "51": "va.html" }
PARTIAL       : Set of 7 fips (MD DC FL AL NY NJ DE) → lighter gold tier
CALLOUTS      : label anchor coords for 9 small states + DC
destFor(fips) : BUILT[fips] if fully built, else state.html?state=XX

Fully built state pages (nc.html, sc.html) share one structure; a new one is made by cloning
nc.html and replacing COUNTIES / STATEWIDE / HOUSE_RACES / LOCAL_RACES + the state-specific text
(title, crest, hero, stats, capital marker, footer). Then: add the state.html redirect, add it to
BUILT in index.html, remove it from PARTIAL + STATE_RACES, and register it in tests
(STATE_PAGES in data-logic.js, page lists in parse-check/smoke-test, redirect check).
```

## Editorial policy (non-negotiable)

1. **Never fabricate candidate data.** Positions, differentiators, and voices must trace to real
   reporting. Anything unconfirmed carries an explicit `[Verify]` marker or a "verify" note in the
   race. **Publishing is automatic** (owner decision, July 6, 2026): after tests pass, commit AND
   push without waiting for review — the owner reviews on the live site and would rather catch an
   error there than gate every publish. The [Verify] discipline is what makes this safe: uncertain
   claims must be visibly marked, never silently asserted.
2. **Voices blocks are sourced synthesis**, not invented quotes: paraphrase widely reported praise
   and criticism, evenhandedly, for both parties' candidates.
3. **Sources used so far:** NC State Board of Elections filings, SC Election Commission
   (scvotes.gov), Ballotpedia, Wikipedia race pages, AP/NBC primary results, FEC; local: WECT,
   Port City Daily, WHQR (Cape Fear region); SC Daily Gazette, The Post and Courier, The State (SC).
4. The footer credits sources and a "Last updated" date (`SITE_META.lastUpdated` on each built
   state page — update it whenever that state's data changes).

## Current state (as of July 6, 2026)

- **NC (full):** 2024 statewide results (Gov, Lt Gov, AG, Supreme Court Seat 6) + all 14 US House
  districts (2024 + 2026) + 2026 US Senate (Cooper vs. Whatley vs. Bray, rated Lean D). NC primary
  (March 3, 2026) results incorporated.
- **New Hanover County (down-ballot proof of concept):** Sheriff (McMahon, unopposed), County
  Commission 5-way general (Zapple, Wallace / Pierce, Collier / Drach-L), Board of Education
  (Dem slate: LaRue, Dale, Jerry Jones Jr. — **4th Dem nominee + GOP slate still [Verify]**),
  DA Jason Smith (unopposed), Clerk (Kennedy vs. Thomason), NC House 20 open seat (Scalise vs.
  Merrick), NC Senate 7 (Lee vs. Bichler), House 18/19 noted.
- **SC (full, added July 6, 2026):** all 8 statewide 2026 races (Senate: Graham vs. Andrews;
  Governor open seat: Wilson vs. Johnson; AG, SoS, Treasurer, Comptroller, Superintendent, Ag
  Comm.) + June 9/23 primary results as past races + all 7 US House districts (2024 + 2026; open
  seats SC-1 Honeycutt–Lacore and SC-5 Climer–Dittmer after Mace and Norman ran for governor) +
  Census-verified county→district map (10 split counties; Charleston's primary district is 6).
  Down-ballot statewide offices carry [Verify] markers — thin sourced reporting. No LOCAL_RACES yet.
- **GA (full, added July 6, 2026):** all 11 statewide 2026 races (Senate: Ossoff vs. Collins, moved
  to Lean D June 2026; open Governor rated Toss Up: Jackson vs. Bottoms; open Lt Gov and AG and SoS
  after the gubernatorial-primary chain reaction; Ag, Insurance, Superintendent, Labor, 2 PSC
  seats) + May 19/June 16 primaries as past races + all 14 US House districts (2024 + 2026; open
  GA-1/GA-10, Loudermilk retirement in GA-11, David Scott's death → **GA-13 special July 28, 2026
  — update after it happens**, MTG's resignation → Fuller incumbent in GA-14) + Census-verified
  county→district map (16 split counties; Cobb→11, Fulton→5, Gwinnett→13, DeKalb→4 primary
  assignments are plurality calls). Down-ballot statewide offices carry [Verify] markers. No
  LOCAL_RACES yet.
- **VA (full, added July 6, 2026):** ⚠ structurally different from the other built states —
  Virginia's 2026 primary was MOVED to Aug 4, 2026 (HB 29), so most 2026 challenger slots are
  "[nominee — decided Aug 4]" placeholder cards with the primary field described. **Refresh all
  VA races the week of Aug 4.** Statewide: only U.S. Senate (Warner, Solid/Safe D; GOP field
  Farington/Mizusawa/Williams/Smith) + expected constitutional amendments (abortion, marriage,
  felon voting rights [Verify certified list]); 2025 Gov/LtGov/AG results (Spanberger sweep) and
  2024 Senate included as past races. Districts: all 11 (VA-2 Kiggans is the Toss Up — likely
  Luria rematch; VA-7 Vindman Lean D; VA-11 Walkinshaw after Connolly's death, 2025 special
  included). Mid-decade redistricting referendum passed Apr 2026 but was VOIDED by the VA Supreme
  Court May 8 — 2026 uses the 2021 court map (10 split county-equivalents; Virginia Beach NOT
  split). No LOCAL_RACES yet.
- **7 marquee states (STATE_RACES):** AL (Tuberville–Jones
  rematch; Senate open seat nominees Moore–Wess), FL
  (pre-primary: Donalds/Jolly/Pizzo + Moody special — **Aug 18 primaries pending**), NY
  (Hochul–Stefanik [Verify] primary), VA (Warner, GOP [Verify]), MD (Moore, GOP [Verify]),
  DC (mayor + delegate, both [Verify]), NJ (Booker, GOP [Verify]), DE (Coons, GOP TBD Sept).
- **All other states:** starter framework with VERIFIED office-level 2026 ballot data (which
  Senate/Governor/House offices are up, open-seat notes, House seat counts) + real county maps.
- **Ohio special is Sherrod Brown (D) vs. Jon Husted (R)** — reflected in state.html notes.

## Known quirks & lessons learned (do not relearn these the hard way)

1. **Parse checks are not enough.** A temporal-dead-zone bug (code reading `STATE_RACES` 70 lines
   before its declaration) passed `new Function()` syntax checks but crashed every state page at
   runtime, killing the maps. **Always run the runtime smoke test** (below) after JS edits.
2. **Netlify Drop replaces everything** — partial drops silently delete missing files.
3. **Favicons cache aggressively**; hard-refresh, and bookmarks may need re-adding to update icons.
4. **Cloudflare orange-cloud proxying breaks Netlify HTTPS** — records must stay DNS-only.
5. **Split counties:** ~11 NC counties span multiple US House districts; `COUNTIES` stores the
   primary district by population. NC's map was also redrawn in late 2025 (D1/D3 changes); the site
   uses the 2024 map with notes.
6. **Single-word state names** (e.g., "Texas") previously doubled in the state.html hero title;
   fixed — hero logic italicizes only the last word.
7. **`type` values must be exactly** `past` / `upcoming` / `scheduled` — a typo ("upcooming") once
   made a race silently vanish from the grouped drawer. Audit with:
   `grep -oE 'type:"[a-z]+"' *.html | sort | uniq -c`
8. Development sandboxes may not reach jsdelivr; verify TopoJSON structure via `npm pack us-atlas@3`
   instead of fetching the CDN.
9. **Every generic entry in `buildSeats` must be guarded by `covered.has(<key>)`.** The DC delegate
   branch originally wasn't, so DC's drawer showed the delegate race twice (fixed July 6, 2026 —
   found by `tests/data-logic.js` the first time it ran). If you add a new `key` value to
   STATE_RACES races, add the matching guard in `buildSeats`.

## Testing (`tests/` — plain Node.js, zero dependencies)

Requires Node.js (any recent LTS). Run the whole suite from the site root:

```
node tests/run-all.js
```

| File | What it covers |
|------|----------------|
| `tests/parse-check.js` | Every inline `<script>` in every page must compile (syntax errors only) |
| `tests/smoke-test.js` | Executes each page's scripts top-to-bottom with DOM stubs, cut at the first `d3.` usage; runs state.html for all 10 featured states + controls (TX, CA) + verifies the NC→nc.html redirect. **This is the test that catches declaration-order/TDZ bugs.** |
| `tests/data-logic.js` | For each fully built state page (`STATE_PAGES` config: nc.html + sc.html): sample-county race count, zero blank titles, valid types/parties, all counties merge cleanly. Plus `STATE_RACES` + `buildSeats` merges (no duplicate offices, correct specials for OH/FL, no Senate/Gov for WA, delegate for DC) and the `type`-value audit from quirk #7 |
| `tests/lib.js` | Shared helpers: inline-script extraction, the d3 cut, DOM stubs, vm sandbox runner |
| `tests/run-all.js` | Runs all three suites; exits non-zero if anything fails |

Notes for future edits:
- `getCountyElections` returns `{ county, district, elections }` — the race list is `.elections`.
- `data-logic.js` pins each built state's sample-county race count in `STATE_PAGES` (New Hanover
  and Charleston: 15 each). When races are legitimately added or removed, update the count in the
  same commit.

## Backlog / roadmap

1. **Post-primary refresh (late Aug 2026):** FL primaries (Aug 18) → replace pre-primary fields;
   AL Senate nominees; NY/MD/VA/NJ/DC/SC [Verify] items; DE after September primary.
2. **Finish New Hanover:** certified school-board slates (4th Dem + GOP four), Bichler/Thomason/
   Grady/Nasiff candidate depth.
3. **Cape Fear expansion (the moat):** Brunswick, Pender, Columbus county local races at New
   Hanover depth (Brunswick sheriff/commission primary results already partially known: Chism won
   sheriff primary; Thompson and Hewett won commission primaries; Somers won DA-15 primary).
3b. **East-coast full buildout (in progress):** SC + GA + VA done July 6, 2026 (statewide +
   House; county LOCAL_RACES still to do for all three). Next per the owner: MD, DE, NJ, NY
   (FL after its Aug 18 primaries; DC needs a different page model — no counties).
   - **GA time-sensitive:** GA-13 special election July 28, 2026 (runoff Aug 25 if needed) —
     update ga.html when results land.
   - **VA time-sensitive:** Aug 4, 2026 primaries decide most VA nominees — replace every
     "[nominee — decided Aug 4]" placeholder in va.html that week; also verify the certified
     constitutional-amendment list and the unsettled VA-3/VA-8/VA-11 GOP ballots.
   - SC [Verify] backlog: down-ballot statewide platforms, third-party detail
     (Whitener/Reeside/Corriea/Ethridge/Kaplan), Fry's possible GOP ballot rival, certified
     primary totals at scvotes.gov, Johnson's running mate, Dem Senate primary runner-up.
   - GA [Verify] backlog: certified primary/runoff percentages (several media figures conflict —
     check results.enr.clarityelections.com), down-ballot platforms (AG, Ag, Insurance, Labor,
     PSC), Collins ethics-inquiry status, Bottoms lawsuit status, Sabato governor rating, GA-11
     runoff certified totals, Harris fundraising figure.
4. ~~Migrate to GitHub + Netlify auto-deploy~~ (done July 6, 2026); next, consider extracting data
   objects into JSON files loaded by fetch (owner edits data without touching markup) or a Google
   Sheet layer.
5. Deferred product ideas: calendar view, candidate comparison tool, search-by-office filter,
   contact-your-rep button, community contribution pipeline, LLM-assisted news-monitoring queue
   (human-approved, never auto-published).

## Conventions for future Claude sessions

- Preserve the single-file-per-page architecture unless the owner agrees to a build step.
- Match the existing design tokens; no new colors/fonts without discussion.
- Every data addition follows the candidate schema and editorial policy above; mark anything
  unverified with `[Verify]`.
- After ANY change: run `node tests/run-all.js` (all three suites must pass), then commit and push
  to `main` — Netlify deploys automatically. Remind the owner to hard-refresh after deploys.
- Update `SITE_META.lastUpdated` (nc.html footer) whenever NC data changes.
