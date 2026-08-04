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
| `md.html` | Maryland — fifth fully built state (24 county-equivalents incl. Baltimore City, 8 districts, June 23 primary results — Moore–Cox rematch, Hoyer retirement). No LOCAL_RACES yet |
| `de.html` | Delaware — sixth fully built state (3 counties, 1 at-large seat). ⚠ Primary is **Sept 15, 2026**, filing deadline July 14 — fields provisional; open Treasurer seat (Ramone). No LOCAL_RACES yet |
| `nj.html` | New Jersey — seventh fully built state (21 counties, 12 districts, June 2 primary results, NJ-11 special history). Kean toss-up in NJ-7; no GOP candidate in NJ-8. No LOCAL_RACES yet |
| `ny.html` | New York — eighth fully built state (62 counties, all 26 districts, June 23 primary results). Added July 14, 2026. NO 2026 U.S. Senate; statewide = Gov (Hochul–Blakeman)/AG (James–Komatireddy)/Comptroller (DiNapoli–Hernandez). Marquee: NY-17 Lawler Toss Up; NY-3/4/19 Lean D. Upsets: Goldman lost NY-10 primary to Lander; Espaillat lost NY-13 to Avila Chevalier; open seats NY-7/12/21. Voices (supporters/opponents) not yet added; NY-6 GOP nominee is [Verify]. No LOCAL_RACES yet |
| `ri.html` | Rhode Island — ninth fully built state (5 counties, 2 districts, Sept 9 primary pending). Statewide: Senate (Reed), Governor (McKee–Foulkes primary rematch), open AG (Neronha term-limited), Lt Gov/SoS/Treasurer; RI-1 Amo & RI-2 Magaziner both Solid D. Built July 20, 2026. No LOCAL_RACES yet |
| `nh.html` | New Hampshire — tenth fully built state (10 counties incl. split Hillsborough/Merrimack, 2 districts, Sept 8 primary pending). OPEN Senate (Shaheen retiring — Pappas D vs. Sununu/Brown R, Lean D); Gov Ayotte (R); OPEN NH-1 (Pappas vacating, Likely D); NH-2 Goodlander (D, Likely D). Built July 20, 2026. No LOCAL_RACES yet |
| `ct.html` | Connecticut — eleventh fully built state (8 traditional counties, 5 districts, Aug 11 primary pending). NO 2026 U.S. Senate; six statewide constitutional offices (Gov Lamont seeking a 3rd term vs. GOP nominee Ryan Fazio, Solid D; LG/AG/SoS/Treasurer/Comptroller). Marquee: CT-1, where 14-term John Larson LOST the convention endorsement to Luke Bronin. Built July 22, 2026. No LOCAL_RACES yet |
| `vt.html` | Vermont — twelfth fully built state (14 counties, 1 at-large district, Aug 11 primary pending). NO 2026 U.S. Senate; Gov Phil Scott (R) seeking a 6th 2-yr term (Solid R), Lt Gov Rodgers (R), OPEN Auditor (Hoffer retiring), U.S. House at-large Balint (D, Solid D). Built July 22, 2026. No LOCAL_RACES yet |
| `me.html` | Maine — thirteenth fully built state (16 counties, 2 districts, June 9 primary results certified). Built July 23, 2026. RCV state: ranked choice applies to ALL primaries and to FEDERAL generals only — the GOVERNOR's general is plurality (SJC struck LD 1666 on Apr 6, 2026). AG/SoS/Treasurer are chosen by the Legislature, NOT elected. Marquee: Collins (R) Toss Up — the Democratic nominee CHANGED after the primary (Platner won, withdrew July 10; Troy Jackson presumptive pending a **July 25 convention** — refresh then). Open Governor (Mills term-limited): Pingree (D) / Charles (R) / Bennett (I). ME-2 OPEN (Golden retiring): Dunlap (D) vs. LePage (R), Sabato Likely R. No LOCAL_RACES yet |
| `ma.html` | Massachusetts — fourteenth fully built state (14 counties, 9 districts, ⚠ primary **Sept 1, 2026** — party fields are SETTLED since the June 2 filing deadline, but independents can still file through Aug 25). Built July 23, 2026. Six statewide offices, all Solid/Safe D: Senate (Markey vs. Moulton primary; Deaton R), Gov (Healey/Driscoll; GOP primary Minogue vs. Shortsleeve — **Kennealy missed the 15% convention threshold and is OUT**), AG (Campbell vs. Walsh), SoS (Galvin — first time since his 1994 election with neither a Democratic nor a Republican opponent), Treasurer (Goldberg vs. Dionne), Auditor (DiZoglio, no GOP filed). Plus **nine certified statewide ballot questions**. Marquee: OPEN MA-6 (Moulton → Senate), a six-way Democratic primary. No LOCAL_RACES yet |
| `wv.html` | West Virginia — fifteenth fully built state (55 counties, 2 districts, May 12 primary results). Built July 24, 2026. ⚠ **DISTRICT NUMBERING IS REVERSED**: WV-1 is the SOUTHERN district (Charleston/Huntington, Carol Miller) and WV-2 the NORTHERN one + Eastern Panhandle (Morgantown/Wheeling/Martinsburg, Riley Moore). NO county is split. Short November ballot: Senate (Capito vs. Rachel Fetty Anderson, Solid R) is the ONLY statewide candidate race — governor and the whole Board of Public Works are presidential-year offices (next 2028). WV Supreme Court runs NONPARTISAN at the MAY primary, so both 2026 seats are already decided (Kirkpatrick, Flanigan — both beat Morrisey appointees) and appear as past races. No LOCAL_RACES yet |
| `oh.html` | Ohio — sixteenth fully built state (88 counties, 15 districts, May 5 primary results). Built Aug 3, 2026 from the banked research. ⚠ **USES OHIO'S NEW 2026-2032 CONGRESSIONAL MAP** (adopted Oct 31, 2025) — 15 split counties, 103 county×district pairs, derived from the SoS's own county-population and legal-description PDFs by two independent agents that agreed exactly. CD3 sits wholly inside Franklin, CD11 wholly inside Cuyahoga; OH-3 and OH-11 are the only districts whose lines did NOT change. Senate SPECIAL (Husted vs. Brown, Toss Up) is a DIFFERENT seat from the one Brown lost in 2024. Open Governor (Ramaswamy vs. Acton, Cook Toss-Up Jul 16) + all five statewide executive offices open + two partisan Supreme Court seats + Issue 3 (voter photo ID). Marquee House: OH-9 Kaptur–Merrin rematch (Toss Up), OH-1 Lean D, OH-7 (Sabato moved to Leans R Jul 30), OH-13 Likely D. Built WITH voices from the start. No LOCAL_RACES yet |
| `ky.html` | Kentucky — seventeenth fully built state (120 counties, 6 districts, May 19 primary results). Built Aug 4, 2026 by cloning oh.html. NO 2026 governor or constitutional officers — Kentucky elects those in ODD years (next 2027); the statewide ballot is the OPEN U.S. Senate seat plus Amendment 1 and three nonpartisan judicial races. Senate: McConnell retiring, **Barr (R) vs. Booker (D)**, Solid R. ⚠ **THOMAS MASSIE LOST** the KY-4 primary to Trump-recruited Ed Gallrein 54.9–45.1 in the most expensive U.S. House primary in history (~$37M, >$25M of it anti-Massie PAC money); Kentucky's sore-loser law (KRS 118.345) keeps Massie off the November ballot. ⚠ KY-5's Hal Rogers did **NOT** retire — he is running at 88 as Dean of the House. KY-6 is **OPEN** (Barr vacated it for the Senate) and is the marquee: Cook moved it to Likely R Jul 16. ⚠ **Frankfort is in KY-1, NOT KY-6.** Built WITH voices on every upcoming candidate from the start. No LOCAL_RACES yet |
| `in.html` | Indiana — eighteenth fully built state (92 counties, 9 districts, May 5 primary results). Built Aug 4, 2026 from ky.html. ⚠ **INDIANA DID NOT REDISTRICT** — the state SENATE killed the proposed 9R-0D map 31–19 on Dec 11, 2025, with 21 Republicans defecting; 2026 uses the Oct 2021 HEA 1581 map, verified by the Census 118th/119th county files being byte-identical. NO U.S. Senate race (no Class 2 seat) and NO governor (Braun to 2028). Statewide = SoS + Comptroller + Treasurer, all nominated at PARTY CONVENTIONS not the primary, plus 3 Court of Appeals retentions and 2 constitutional amendments. ⚠ Incumbent SoS **Diego Morales was thrown OFF the ballot by his own party's June 20 convention**, finishing third; Beau Bayh (D) holds ~15× the GOP nominee's cash and ex-Indianapolis mayor Greg Ballard runs as an independent. Marquee House seat is **IN-1 (D+1)**, Indiana's only competitive district — and raters moved it AWAY from Republicans after the primary. Built WITH voices from the start. No LOCAL_RACES yet |
| `ia.html` | Iowa — nineteenth fully built state (99 counties, 4 districts, June 2 primary results). Built Aug 4, 2026 from in.html. ⚠ **THE MOST ELECTORALLY EVENTFUL STATE ON THE SITE.** For the FIRST TIME SINCE 1968 both the U.S. Senate seat and the governorship are OPEN (Ernst and Reynolds both retiring), and the Auditor's office is open too (Sand vacated it) — three open statewide seats. **Senate:** Hinson (R) vs. Turek (D), moved by all three raters Solid R → Likely R → **Lean R**. **Governor: TOSS-UP by all three raters** — and the primary produced the cycle's biggest upset, businessman Zach Lahn beating Rep. Randy Feenstra by 1,652 votes DESPITE Trump's endorsement, reported as the first Trump-backed primary loss of the 2026 midterms. **Districts: three of four are open or competitive** — IA-1 is a TOSS-UP and a THIRD consecutive Miller-Meeks–Bohannan rematch (decided by 799 votes in 2024, and by SIX votes in the predecessor seat in 2020); IA-2 is OPEN (Hinson vacated) and moved to Lean R; IA-3 is a TOSS-UP; IA-4 is OPEN (Feenstra vacated) but Solid R. Iowa has **three of its four districts on the DCCC's Red to Blue list**. ⚠ **UNIQUE ON THIS SITE: NO IOWA COUNTY IS SPLIT** — state law forbids it, so every `d` value is exact rather than a plurality call. Built WITH voices from the start. No LOCAL_RACES yet |
| `state.html` | Generic per-state page, driven by URL param `?state=XX` (2-letter abbr). Renders that state's real county map + race data. NC/SC/GA/VA/MD/DE/NJ/NY/RI/NH/CT/VT/ME/MA/WV/OH/KY/IN/IA redirect to their dedicated pages |
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
BUILT         : { "37": nc, "45": sc, "13": ga, "51": va, "24": md, "10": de, "34": nj, "36": ny, "44": ri, "33": nh, "09": ct, "50": vt, "23": me, "25": ma, "54": wv, "39": oh, "21": ky, "18": in, "19": ia }
PARTIAL       : Set of 3 fips (DC FL AL) → lighter gold tier
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
   - **Grok/X sourcing rule (owner-added July 6, 2026):** `tools/grok-research.js` calls xAI's
     Grok with live web + X search to generate LEADS for resolving [Verify] markers (key setup
     documented in the script header; the key lives outside this public repo). Grok output is
     never citable and X chatter is never a source. A candidate's OWN campaign site or verified
     X account IS a legitimate source for their self-described positions — attribute as such.
     Remove a [Verify] only when a real source confirms the claim.
2. **Voices blocks are sourced synthesis**, not invented quotes: paraphrase widely reported praise
   and criticism, evenhandedly, for both parties' candidates.
3. **Sources used so far:** NC State Board of Elections filings, SC Election Commission
   (scvotes.gov), Ballotpedia, Wikipedia race pages, AP/NBC primary results, FEC; local: WECT,
   Port City Daily, WHQR (Cape Fear region); SC Daily Gazette, The Post and Courier, The State (SC).
4. The footer credits sources and a "Last updated" date (`SITE_META.lastUpdated` on each built
   state page — update it whenever that state's data changes).

## Current state (as of August 4, 2026)

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
- **MD (full, added July 6, 2026):** primaries were June 23 (figures UNOFFICIAL pending
  certification — re-verify at elections.maryland.gov). Statewide: Governor (Moore–Cox rematch of
  2022, Solid/Safe D), AG (Brown–Rutledge), Comptroller (Lierman–Dunn), 2 ballot questions
  [Verify final list]; NO Senate race in 2026 (Van Hollen 2028, Alsobrooks 2030); 2024 Senate
  (Alsobrooks–Hogan) + 2022 Gov as past races. Districts: all 8 — MD-5 OPEN (Hoyer retired Jan
  2026 at 87; Boafo vs. Chaffee), MD-6 (McClain Delaney beat Trone's $25M primary challenge; GOP
  nominated 83-year-old disbarred perennial Robin Ficker; Likely D), MD-7 (Mfume beat Conway).
  No LOCAL_RACES yet.
- **DE (full, added July 6, 2026):** ⚠ primary is SEPT 15, 2026 (filing deadline July 14) — all
  contested fields are provisional placeholder cards. Statewide: Senate (Coons, Solid/Safe D; GOP
  field Katz/Shulli), AG (Jennings faces a primary from ACLU-DE's Bensing; NO GOP filer — Murray
  declined the convention draft), OPEN Treasurer (3-way Dem primary vs. Mike Ramone, the 2024
  gubernatorial nominee), Auditor (York unopposed so far). House at-large: McBride (Solid D) vs. a
  4-way GOP field. NO Governor race (presidential-year office; Meyer through 2028). 2024
  Gov/Senate/House included as past races. No LOCAL_RACES yet.
- **NJ (full, added July 6, 2026):** primaries June 2 (figures UNOFFICIAL pending certification).
  Statewide: only U.S. Senate (Booker vs. Justin Murphy, Solid D); NO governor race (Sherrill
  through Jan 2030); no confirmed ballot questions yet [Verify late summer]. 2025 Gov
  (Sherrill–Ciattarelli) + 2024 Senate (Kim–Bashaw) as past races. Districts: all 12 — NJ-7 is
  the marquee (Cook Toss Up: Kean, post-depression-disclosure, vs. Navy test pilot Bennett),
  NJ-8 has NO GOP candidate (first since 2008), NJ-9 Leans D (Pou–Pino), NJ-10 McIver runs under
  federal indictment (Third Circuit appeal pending — track it), NJ-11 Mejia–Hathaway rematch
  after the April special, NJ-12 OPEN (Watson Coleman retired; Hamawy vs. Mele). No LOCAL_RACES.
- **RI (full, added July 20, 2026):** RI's 2026 state primary is SEPT 9, 2026 (moved off Sept 8 for
   Labor Day — verified against RI Dept. of State; Ballotpedia's Sept 8 is stale), so contested fields
   are provisional. Statewide: Senate (Reed, Solid D; GOP McKay/Waters primary), Governor (McKee vs.
   2022 rematch challenger Foulkes — the state party declined to endorse; Solid/Likely D), OPEN Attorney
   General (Neronha term-limited — 4-way Dem primary Ahern/Hoffmann/Knight/Solomon, GOP Gordon), Lt Gov
   (Matos), SoS (Amore), General Treasurer (Diossa). Districts: RI-1 Amo and RI-2 Magaziner, both Solid D.
   Past: 2024 President, 2022 Governor. County->district map: only Providence County is materially split
   (majority RI-1). Down-ballot statewide platforms carry [Verify] markers. No LOCAL_RACES yet.
- **NH (full, added July 20, 2026):** NH's 2026 state primary is SEPT 8, 2026 - contested fields
   provisional. OPEN U.S. Senate (Shaheen retiring; Dem frontrunner Pappas vs. GOP contest between
   former Sens. John E. Sununu (Trump-endorsed) and Scott Brown - rated Lean D). Governor Ayotte (R, 2-yr
   term) vs. Democrat Warmington (Leans R). NH-1 OPEN (Pappas vacating to run for Senate - Dem field
   Sullivan/Stefany Shaheen/Howard; Likely D). NH-2 Goodlander (D) vs. Lily Tang Williams (R) rematch
   (Cook moved Lean->Likely D July 16). Past: 2024 Governor, 2022 Senate. County->district: NH-1 east
   (Manchester/Seacoast), NH-2 west/north (Nashua/Concord); Hillsborough, Merrimack, Belknap, Rockingham,
   Grafton are SPLIT (Manchester->NH-1, Nashua->NH-2) - stored by population-majority district. No LOCAL_RACES yet.
- **CT (full, added July 22, 2026):** ⚠ CT's 2026 primary is **Aug 11** — contested fields are provisional.
   The county map uses the 8 TRADITIONAL counties (the us-atlas geometry predates CT's 2022 switch to 9
   planning regions) — county→district by population plurality: Fairfield→4, Hartford→1, Litchfield→5,
   Middlesex→2 (a true 3-way split; shoreline plurality), New Haven→3, New London/Tolland/Windham→2.
   NO 2026 U.S. Senate (Blumenthal 2028, Murphy 2030). Six statewide offices, all Solid/Likely D:
   Governor (Lamont seeking a rare 3rd term; Rep. Josh Elliott forced an Aug 11 Dem primary; GOP nominee
   Ryan Fazio settled at the May convention with ~92%), Lt Gov (Bysiewicz vs. Corey), AG (Tong vs. Bolton),
   SoS (Thomas vs. Lumaj), Treasurer (Russell vs. Wilms — an explicit ESG-investing split), Comptroller
   (Scanlon vs. Tooker). 2022 Gov (Lamont 56–43 Stefanowski) as history. Districts: all 5, all Democratic-held —
   **CT-1 is the marquee**: 14-term John Larson LOST the May convention endorsement to former Hartford mayor
   Luke Bronin 214–204, with state Rep. Jillian Gilchrest also on the Aug 11 ballot. CT-5 (Hayes) is the most
   competitive seat, but 2022/2024 opponent George Logan is NOT running in 2026. Thin GOP primary fields
   carry [Verify]. No LOCAL_RACES yet.
- **VT (full, added July 22, 2026):** ⚠ VT's 2026 primary is **Aug 11**. All 14 counties sit in the single
   AT-LARGE U.S. House district (no splits). NO 2026 U.S. Senate (Welch 2028, Sanders 2030). Vermont state
   officers serve TWO-year terms, so all are up: Governor Phil Scott (R) filed May 28 for a 6th term and is
   rated Solid/Likely R (won 2024 by ~50 points) — Democrats Aly Richards and Amanda Janoo contest the Aug 11
   primary; Lt Gov John Rodgers (R, won 2024) vs. a crowded Dem field (Gray/Charlestin/McLaren); **OPEN
   Auditor** — Doug Hoffer retiring after 2013, Dem primary Tim Ashe (Hoffer-endorsed) vs. Nick Graeter, with
   Republican Joshua Bechhoefer. U.S. House at-large: Becca Balint (D, Solid D) vs. 2024 nominee Mark Coester (R).
   2024 Gov as history. AG Clark / SoS Copeland Hanzas / Treasurer Pieciak (all D incumbents) are noted in
   CLAUDE.md but NOT yet carded on the page — add them when platforms can be sourced. No LOCAL_RACES yet.
- **4 marquee states (STATE_RACES):** AL (Tuberville–Jones
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
10. **A cloned state page keeps the DONOR's map FIPS — and every data test still passes.**
   Shipped once (caught before publish, July 23, 2026): `ma.html` was cloned from `ct.html`,
   the constant was renamed `CT_STATE_FIPS` → `MA_STATE_FIPS` but its VALUE stayed `"09"`, so
   Massachusetts rendered **Connecticut's county map**. `parse-check` and `data-logic` pass
   (the data script is fine) and `smoke-test` can't see it — it cuts the script at the first
   `d3.` call, and the FIPS constant lives in the RENDERING script below that cut.
   `tests/data-logic.js` now compares each page's `<XX>_STATE_FIPS` against its `COUNTIES` key
   prefix, which closes this hole. ✅ **THAT TEST EARNED ITS KEEP ON Aug 3, 2026:** oh.html was cloned from
   wv.html and made this exact mistake again — the constant was renamed `WV_STATE_FIPS` → `OH_STATE_FIPS` but
   its VALUE stayed `"54"`, so Ohio would have shipped West Virginia's map. Every other suite passed; only this
   check failed. **When the browser pane is blocked** (it refuses local files — hit again this run), verify by
   reading the FIPS constant back OUT of the page, filtering the real TopoJSON with it, and rasterising the
   result to ASCII plus a bounding-box comparison against the state's true lat/lng extent. That is cheap and
   catches a wrong-state map outright. **Otherwise still open the new page in a browser and look at the map**
   — a wrong-state map is invisible to every text-level check.
   Clone checklist beyond the data: `<title>`, meta description, crest, brand name, hero title
   + county count, map `id=`/`#xxmap` CSS selector + `d3.select`, `<XX>_STATE_FIPS` VALUE,
   `drawCapital` coordinates, "Not in XX" empty state, footer sources line, `SITE_META`.
9. **Every generic entry in `buildSeats` must be guarded by `covered.has(<key>)`.** The DC delegate
   branch originally wasn't, so DC's drawer showed the delegate race twice (fixed July 6, 2026 —
   found by `tests/data-logic.js` the first time it ran). If you add a new `key` value to
   STATE_RACES races, add the matching guard in `buildSeats`.

11. **A [Verify] sweep CANNOT catch a fact that changed under an UNMARKED claim.** Shipped and caught Aug 4, 2026:
   **Sen. Lindsey Graham died July 11, 2026**, and sc.html carried him as a live 2026 candidate for three weeks.
   Nothing on that card was ever marked `[Verify]` — it was a confident, correct-when-written statement — so
   `tools/verify-report.js`, which only lists existing markers, had nothing to report. The weekly workflow is built
   around shrinking the marker backlog, and that workflow is structurally blind to this entire class of error.
   It surfaced only because a voices-research agent mentioned it in passing, and it was then verified against the
   governor's own announcement before anything was edited.
   ➤ **Therefore: every run, do an explicit INCUMBENT-STATUS check on the marquee races** — is each named incumbent
   and each named nominee still alive, still in the race, and still holding the office the page says they hold?
   Deaths, resignations, withdrawals and appointments do not announce themselves through the marker report.
   ➤ A related instance the same day: nc.html still carded **Rick Southerland**, who withdrew March 5, 2026, and
   thirteen NC House slots still read "[nominee — TBD]" five months after the March 3 primary. Same blind spot —
   stale-but-unmarked content is invisible to the tooling.

12. **`COUNTIES` stores ONE district per county — and in dense metros that silently HIDES districts.**
   Found and fixed Aug 4, 2026 by an audit, not by any test. **8 of New York's 26 districts (2, 3, 5, 7, 9,
   10, 13, 14 — every NYC-area seat) and Massachusetts' MA-3 were UNREACHABLE**: no county had them as its
   plurality district, so a voter in Brooklyn or Lowell could click their county and never see their own
   U.S. House race. It had been live since those pages were built.
   ➤ **Fix:** split counties now carry an optional `ds: [...]` array listing EVERY overlapping district, and
   `getCountyElections` merges races from all of them (falling back to `[county.d]`). `d` is still the
   population plurality and still drives map shading — `ds` only controls which races the drawer shows.
   NY has 21 such counties, MA 9. Data came from the Census CD119↔county relationship file plus MCDC
   Geocorr population weights, cross-checked to a per-person arithmetic match on every district.
   ➤ **The regression test is `tests/data-logic.js`'s "every House district is reachable from a county"** —
   verified to actually FAIL on the pre-fix data, naming the exact eight NY districts.
   ➤ ⚠ **This is why ILLINOIS is not built yet.** IL districts 1, 3, 4, 5 and 9 sit entirely inside Cook
   County, so an IL page needs the `ds` model from the start. Any future dense-metro state (IL, MI, PA
   around Philadelphia, TX, CA, FL) must be built with `ds` — check the reachability test before shipping.

## Testing (`tests/` — plain Node.js, zero dependencies)

Requires Node.js (any recent LTS). Run the whole suite from the site root:

```
node tests/run-all.js
```

| File | What it covers |
|------|----------------|
| `tests/parse-check.js` | Every inline `<script>` in every page must compile (syntax errors only) |
| `tests/smoke-test.js` | Executes each page's scripts top-to-bottom with DOM stubs, cut at the first `d3.` usage; runs state.html for all 10 featured states + controls (TX, CA) + verifies the NC→nc.html redirect. **This is the test that catches declaration-order/TDZ bugs.** |
| `tests/data-logic.js` | For each fully built state page (`STATE_PAGES` config, now 19 pages): sample-county race count, zero blank titles, valid types/parties, all counties merge cleanly, **and the map `<XX>_STATE_FIPS` constant matches the COUNTIES prefix** (quirk #10). Plus `STATE_RACES` + `buildSeats` merges (no duplicate offices, correct specials for OH/FL, no Senate/Gov for WA, delegate for DC) and the `type`-value audit from quirk #7 |
| `tests/label-fit.js` | **The national map's `LABEL_ADJ` labels must clear their state borders.** Measures clearance (anchor → nearest boundary) against baked geometry and requires 9.66px = 8.76 glyph half-diagonal + 0.4 stroke + 0.5 simplification slack. Added July 24, 2026 after the FL/LA labels shipped clipping *twice* — both earlier passes hit-tested the anchor POINT, which is inside the state even when the box around it is not. HI carries a documented exempt floor (its island cannot do better) |
| `tests/fixtures/state-label-rings.json` | Projected, simplified state outlines for the 42 inline-label states (48KB). Built by `tools/gen-label-fixture.js`; records the projection it came from so `label-fit.js` fails loudly instead of checking stale geometry |
| `tests/lib.js` | Shared helpers: inline-script extraction, the d3 cut, DOM stubs, vm sandbox runner |
| `tests/run-all.js` | Runs all four suites; exits non-zero if anything fails |
| `tools/verify-report.js` | Compact inventory of every [Verify] marker + time-sensitive race dates across all built pages. **Weekly refreshes work from this report, not full page reads** (~10× cheaper) |
| `tools/voices-report.js` | Lists every candidate in an UPCOMING race that is missing supporters/opponents ("voices"), per page + a total. `--summary` for counts only, or pass a page name. Voices are a REQUIRED field (owner, July 24, 2026) — use this to find the gaps instead of reading pages |
| `tools/apply-voices.js` | Injects researched voices into a page from a JSON file (`{office: {candidate: {supporters, opponents}}}`) without reflowing the rest of the file. Only fills EMPTY arrays in `upcoming` races, and reports any researched entry it could not place (so a name typo can't silently no-op). `--dry` to preview |
| `tools/grok-research.js` | Grok lead generator (web + X search) — see editorial policy for sourcing rules |
| `tools/research-ledger.md` | Dead-end tracker: markers researched with no findings + retry dates, so they aren't re-researched weekly |

Notes for future edits:
- `getCountyElections` returns `{ county, district, elections }` — the race list is `.elections`.
- `data-logic.js` pins each built state's sample-county race count in `STATE_PAGES` (New Hanover
  and Charleston: 15 each). When races are legitimately added or removed, update the count in the
  same commit.

## Owner to-do queue (work these each run, highest-impact first; check off when done)

Site-wide polish/UX/standardization the owner requested (July 14, 2026) — not state-specific race data.
Knock them out alongside the daily state builds; several need VISUAL verification (render the page in a
browser and look, e.g. via a local static server + the browser tools).

**All three items below were completed July 20, 2026.** (Note: in that run the browser screenshot/zoom
tools timed out in the environment, so map-label placement was verified geometrically instead — each
label's anchor was hit-tested with SVG `isPointInFill` to confirm it sits inside its own state path.)

1. ~~**National-map (index.html) label alignment.**~~ DONE (July 20, 2026). `LABEL_ADJ` override table in
   index.html for states whose AREA centroid falls off/near the edge of the main landmass: **MI** → Lower
   Peninsula, **HI** → Big Island, **FL** → peninsula interior, **LA** → nudged west. Verification method
   (screenshot tool was timing out): measure each label's ACTUAL rendered text box via `getBBox()`, then
   hit-test the full glyph box (corners + edge midpoints, ~4.2px glyph half-height ignoring font leading)
   against the state path with SVG `isPointInFill`. Second pass (same day, after owner still saw FL
   overlapping) tightened FL to [695,474] and added LA [528,431] — the earlier ±6px point test was too
   loose and missed the wider real glyph.
   ⚠️ **THIS ITEM'S "0 of 42 labels overflow" CLAIM WAS WRONG — DO NOT TRUST IT.** The owner reported FL and
   LA still overlapping on **July 24, 2026** (with a screenshot), and direct measurement against the page's
   exact projection confirmed it: FL had **2.37px** of clearance and LA **8.36px**, against a ~8.8px glyph
   half-diagonal plus 0.4px of stroke. `isPointInFill` tests a POINT; the thing that has to fit is a BOX.
   See **Owner to-do queue item 5** for the root cause and the pole-of-inaccessibility fix. Callout states
   (small NE + DC) use leader lines and are unaffected.
2. ~~**Home-state "glow" effect (index.html).**~~ DONE (July 20, 2026). Replaced the fill-cycling
   `homePulse` (which included blue) with `homeGlow` — a warm brightness + gold `drop-shadow` throb (no
   blue), and `homeGlowFeatured` for a built (gold) home state so it reads on gold.
3. ~~**Standardize candidate text to NC's concise style.**~~ DONE (completed July 22, 2026). July 20 pass
   trimmed NY Governor/AG/Comptroller + NY-18/NY-13/NY-4. July 22 pass swept the remaining offenders across
   all 12 built pages via a length audit (`note:` fields >320 chars): trimmed **ga.html** GA-13 special
   (532→303), **de.html** AG (412→269), **nh.html** open Senate (424→334). Only 4 notes now exceed 320 chars
   (nc/ct/md/nh) and each is genuinely fact-dense (primary fields, certified ballot questions) — leave them.
   Re-run the audit after big data additions; keep writing concise from the start (RI/NH/CT/VT were built concise).

4. **Voices ("Supporters say" / "Opponents say") for EVERY candidate in an upcoming race.** ⚠ ACTIVE — the
   owner's highest-priority standing item, added July 24, 2026. His words: NC's voices blocks are what make the
   site *useful*, and "without this data for every candidate, the website is not helpful."
   - **The owner explicitly wants a marked, honest characterization rather than an empty section.** If a claim
     can't be firmly sourced, still write the real argument that side makes and append `[Verify]` — readers can
     research further. An empty voices block is now a defect, not a safe default.
   - **This does NOT loosen the no-fabrication rule, and the two do not actually conflict.** Voices are
     *paraphrased synthesis of arguments*, not assertions of fact. Permitted when thin: the honest structural
     argument that is self-evident or reported (e.g. "faces long odds in a district the incumbent won by 40
     points", "no campaign presence located") + `[Verify]`. STILL FORBIDDEN: inventing a specific factual claim —
     a scandal, endorsement, poll number, vote, or quote that no source supports. Generic-but-true + `[Verify]`
     is right; specific-but-unsourced is never right.
   - Both sides get real content. Never a puff piece for one candidate and a hit piece on their opponent.
   - **Past races keep empty voices** — that is nc.html's own convention and is correct; the requirement is about
     races voters can still act on. `tools/voices-report.js` only counts upcoming/scheduled.
   - **Workflow:** `node tools/voices-report.js` to find gaps → research per race → `node tools/apply-voices.js
     <page> <json>` to inject them without reflowing the file.
   - **Progress: 187 → 122 (Jul 24) → 91 → 67 (Aug 3) → 6 (Aug 4, 2026).** COMPLETE (0 gaps) on **16 of 17 pages** — everything
     except va.html. On Aug 4 the last big blocks fell: ri.html (15), sc.html (13), ga.html (16) and nc.html (17), and the newly
     built ky.html shipped with 0 gaps. **The only remaining 6 are va.html's "[nominee — decided Aug 4]" placeholders**, which are
     deliberately deferred to the post-Aug-4 Virginia refresh — writing voices for a card whose candidate is unknown is not useful.
     ⚠ Note the honest tradeoff this creates: the site-wide [Verify] count ROSE from 896 to ~1046, because thin candidates now carry
     marked structural arguments instead of empty sections. That is the owner's stated preference — a marked characterization beats
     a blank block. Do not "fix" the rising [Verify] count by deleting voices.
     Superseded historical note: ny.html
     (65/65, once the worst page), me.html, wv.html, vt.html, ct.html, oh.html (built with voices from the start),
     and — added Aug 3 — **de.html, nj.html, nh.html, md.html, ma.html**.
     Worst remaining: **nc.html 17, ga.html 16, ri.html 15, sc.html 13, va.html 6**.
     Note on **va.html**: its 6 gaps are mostly "[nominee — decided Aug 4]" placeholders, so do that page as part of
     the post-primary VA refresh rather than as standalone voices work.
     Note on **ri.html**: 15 of 20 — the worst ratio on the site, and the ledger says not to re-research its
     pre-primary fields until the week of Sept 9. The voices themselves (structural arguments for down-ballot
     statewide candidates) can still be written before then; that is the single biggest remaining chunk.
   - ⚠ **`tools/apply-voices.js` WAS BROKEN AND SILENTLY MATCHED NOTHING ON 14 OF 15 PAGES** — fixed Aug 3, 2026.
     Its token regex required QUOTED JSON keys (`"office":`), but only ny.html is written that way; every other page
     uses plain JS keys (`office:`). It worked on ny.html, so the bug went unnoticed. Its `DISTRICT_NAME` pattern also
     required `— XX District N`, missing at-large names like `U.S. House — Vermont (at-large)`. Both are fixed, and it
     now emits replacements in whichever key style the page already uses. **The only reason this was caught is that the
     tool reports every key it could not place** — the "0 candidates filled" line is what exposed it. Keep that report.
   - Note: the tool only fills arrays that are EMPTY. A candidate missing just ONE side (e.g. has opponents, needs
     supporters) must be hand-edited — the report lists these as "did NOT match".

5. ~~**FL and LA inline map labels overlap their state borders (index.html).**~~ **DONE (July 24, 2026.)**
   Owner-reported July 24 with a screenshot — the SECOND report of the same defect: to-do item #1
   (July 20) hand-tuned `LABEL_ADJ` for exactly these two states and declared "0 of 42 inline labels
   overflow". **The coordinates were not the real problem — the VERIFICATION was.**
   - **Root cause: the July 20 check hit-tested POINTS against the state path. A label is a BOX.** A point
     can sit comfortably inside Florida while the ~15×8px glyph box around it spills across both coasts.
   - **Measured against the page's exact projection** (`d3.geoAlbersUsa().fitSize([850,580])`, us-atlas@3
     `states-10m`): FL's label had **2.37px of clearance** to the nearest boundary and LA's **8.36px**,
     against a glyph half-diagonal of ~8.8px and a further 0.4px eaten by the `stroke-width: 0.8` border.
     FL was badly clipping; LA was touching. Owner was right on both.
   - **All four hand-tuned overrides were the four worst-placed labels on the map.** Every one of the other
     38 inline labels has ≥11.11px clearance and is fine.
   - **Fix applied — the pole of inaccessibility** (the interior point maximally far from any edge, i.e.
     Mapbox's `polylabel`), computed offline rather than nudged by eye. New values, with clearance:
     **FL [711,479] 16.5px** (was 2.37), **LA [522,431] 14.3px** (was 8.36), **MI [621,198] 20.1px**
     (was 11.11). HI is unchanged — it was already at its island's optimum.
   - **Hawaii is the one real exception** — the Big Island is only ~23px across at this projection, so NO
     inline placement reaches the 9.66px bar; the best possible is ~7.9px. It is allowed a *documented*
     exempt floor in the test rather than being skipped. If it ever needs to be truly fixed, give it a
     leader-line callout like the nine small states. Owner has not reported it.
   - **The real deliverable is the regression test — `tests/label-fit.js`,** now wired into
     `node tests/run-all.js`. It measures CLEARANCE (anchor → nearest boundary) and requires
     `8.76 glyph half-diagonal + 0.4 stroke + 0.5 simplification slack = 9.66px`. **Verified to actually
     fail on the old FL/LA coordinates before shipping** — a test that cannot fail is worthless.
     Note it also shows *why* the old check passed: its "label anchor is inside the state" assertion
     still PASSES on the broken coordinates. That is the exact false signal that fooled two runs.
   - **Geometry:** `tests/fixtures/state-label-rings.json` (48KB, 42 states), projected offline by
     `tools/gen-label-fixture.js` — the page fetches TopoJSON from a CDN, but the suite must run offline
     with zero deps. The fixture records the projection it was built from, and the test FAILS LOUDLY
     telling you to regenerate if `index.html`'s map size ever changes.
   - **Browser verification was unavailable again** (the pane refuses files outside the cwd and blocks
     `localhost` by policy — the July 20 run hit the same wall). Verified instead by ASCII-rasterising
     each state with the glyph box overlaid, which showed the old FL box hanging into the Gulf and the
     new one clean. That trick is worth reusing when the browser tools are blocked.

**Queue status:** items 1–3 and 5 are complete. **Item 4 (voices) is the owner's top priority** — work it
every run alongside the state builds.

## Backlog / roadmap

1. **Post-primary refresh (late Aug 2026):** FL primaries (Aug 18) → replace pre-primary fields;
   AL Senate nominees; NY/MD/VA/NJ/DC/SC [Verify] items; DE after September primary.
2. **Finish New Hanover:** certified school-board slates (4th Dem + GOP four), Bichler/Thomason/
   Grady/Nasiff candidate depth.
3. **Cape Fear expansion (the moat):** Brunswick, Pender, Columbus county local races at New
   Hanover depth (Brunswick sheriff/commission primary results already partially known: Chism won
   sheriff primary; Thompson and Hewett won commission primaries; Somers won DA-15 primary).
3b. **East-coast full buildout — RESUMED by owner July 14, 2026** (was paused July 6 after 7 states:
   NC SC GA VA MD DE NJ; statewide + House; county LOCAL_RACES still to do for all).
   **Owner's standing directive (updated July 20, 2026): build MULTIPLE new states per run; the task now runs
   DAILY at 8am** (switched from weekly on July 20, 2026 after the owner restocked Netlify credits). Each run,
   complete as many full, verified states as you can — aim for 2–4, sized to complexity (on a daily cadence,
   even 1 fully-verified state plus to-do/backlog work is a good run — quality always beats hitting a number). Verified statewide + U.S. House races, real sourced candidate data, NEVER rushed or
   fabricated (the no-fabrication rule always wins over throughput; a genuinely thin candidate keeps a
   `[Verify]`). Don't flip a state into `BUILT` / wire it live until it is actually complete — keep in-progress
   work off the published map. Keep candidate text concise (NC-style) from the start (see the Owner to-do queue).
   **New York was COMPLETED July 14, 2026** (62 counties, all 26 districts + Gov/AG/Comptroller; voices not yet
   added). **Rhode Island and New Hampshire were COMPLETED July 20, 2026** (cloned from de.html; RI = 5 counties/
   2 districts/6 statewide offices + RI-1/RI-2; NH = 10 counties/2 districts + OPEN Senate & OPEN NH-1 + NH-2;
   both built pre-primary like DE, so contested fields are provisional [Verify] — RI primary Sept 9, NH primary
   Sept 8; voices not yet added). **Connecticut and Vermont were COMPLETED July 22, 2026** (cloned from nh.html;
   CT = 8 traditional counties/5 districts/6 statewide offices; VT = 14 counties/1 at-large seat/Gov+LtGov+open
   Auditor; both built pre-primary, so contested fields are provisional [Verify] — both primaries are Aug 11;
   voices not yet added). **Maine and Massachusetts were COMPLETED July 23, 2026** (ME cloned from nh.html, MA from
   ct.html; ME = 16 counties/2 districts/Senate+open Governor, post-primary since ME voted June 9; MA = 14 counties/
   9 districts/6 statewide offices + 9 certified ballot questions, pre-primary since MA votes Sept 1; voices not yet
   added). That brings the built bloc to **14 (NC SC GA VA MD DE NJ NY RI NH CT VT ME MA)** — an unbroken contiguous
   run from Georgia to Maine, and **ALL SIX New England states are now done**. The build front then moved inland:
   **WV was completed July 24, 2026** (see below), and **OH is fully researched and ready to build** (see the banked
   section below). **DC** needs a different page model (no counties).
   Follow the full-state clone checklist in "Data architecture → index.html" when adding each state.
   **West Virginia was COMPLETED July 24, 2026** (cloned from me.html; 55 counties / 2 districts / Senate + Amendment 1
   + two already-decided nonpartisan Supreme Court seats; built WITH voices on every upcoming candidate from the start).
   That brings the built bloc to **15 (NC SC GA VA MD DE NJ NY RI NH CT VT ME MA WV)** — the coastal run from Georgia to
   Maine plus the first state inland of it.
   **Post-primary refresh queue:** **ME the week of July 25 (Democratic Senate nominating convention — the single
   most time-sensitive item on the site)**, CT + VT the week of Aug 11, MA after Sept 1 (and again after Aug 25, when
   the independent/unenrolled field closes), NH after Sept 8, RI after Sept 9, DE after Sept 15.

   ### ✅ OHIO — BUILT Aug 3, 2026 (16th state). The notes below are the build record; do not re-research.
   Built from the July 24 banked research plus a fresh pass for the 10 districts it did not cover, voices for every
   upcoming candidate, and an independent re-derivation of the county→district map.
   - **The county map was rebuilt from primary sources, because the July 24 commit recorded the METHOD but not the
     TABLE.** Two agents independently retrieved the Ohio SoS's own "County Populations and Filing Locations …
     Adopted October 31, 2025" PDF and the enacted legal description (both 403 to normal fetch; a browser user-agent
     got through) and agreed on all 103 county×district pairs, all 15 splits and every plurality. A local check then
     confirmed all 88 county names match the us-atlas geometry and all 15 per-district county counts match the PDF's
     own counts. **If Ohio ever needs re-verifying, start from those two PDFs, not from news coverage** — several
     district agents' news-derived county lists appeared to contradict the map and were wrong.
   - ⚠ **Wikipedia is STALE for Ohio's new lines** — its OH-10 page still shows Clark County and an R+3 PVI, its OH-12
     page still lists Athens, and its OH-4 page still lists Tamie Wilson as a candidate. Do not use it for geography.
   - The banked research below all held up on re-check and is preserved as the sourcing record.
   - **⚠ OHIO USES A NEW CONGRESSIONAL MAP FOR 2026** — adopted **Oct 31, 2025**, unanimously/bipartisan (so it is a
     full-term map, not another 4-year temporary one). The OH SoS district-maps page labels it "Federal Congressional
     Districts (2026-2032)". **Building on the 2022 map would be wrong.** The county→district table was derived from the
     state's official Block Equivalency File joined to Census 2020 PL 94-171 blocks and reconciled EXACTLY against the
     Redistricting Commission's own county-population PDF (all 103 county×district pairs, 0 mismatches). **15 split
     counties** (plurality call in parens): Cuyahoga→11, Franklin→3, Hamilton→1, Butler→8, Stark→13 (51.8%, closest but
     one), Mahoning→6, Delaware→12, Portage→14, Clark→4, Wood→5, Wayne→7, Richland→5, Miami→8 (51.8%, the closest),
     Holmes→12, Perry→12. **Lorain, Lucas, Montgomery and Summit are NOT split under the new map** (they were under the
     old one) — CD5, CD9, CD10, CD13 respectively. CD3 sits entirely inside Franklin, CD11 entirely inside Cuyahoga.
   - **U.S. Senate SPECIAL (Class 3, Vance's old seat, term runs to Jan 3 2029):** appointed incumbent **Jon Husted (R)**
     (unopposed primary, 100%) vs. **Sherrod Brown (D)** (89.4% over Ron Kincaid), plus Bill Redpath (L) and Greg Levy (I),
     both with NO sourceable positions — card them name-only with [Verify]. **Cook Toss Up (Apr 13), Sabato Toss Up
     (Jun 11), Inside Elections Tilt R (Apr 23).** ⚠ Make explicit that this is a DIFFERENT seat from the Class 1 seat
     Brown lost in 2024 to Moreno (50.09%–46.47%, +3.62) — it is not a rematch.
   - **Governor (OPEN, DeWine term-limited):** **Vivek Ramaswamy (R)** + Lt Gov **Rob McColley**, won the primary ~82–83%
     over Casey Putsch (~17%, a no-money protest vote read as a likability signal); Dave Yost quit the race May 2025 after
     Trump endorsed Ramaswamy; Heather Hill was DISQUALIFIED (running mate dropped out) and ran as a write-in.
     **Amy Acton (D)** + Lt Gov **David Pepper**, unopposed. ⚠ **Cook moved this to TOSS-UP on July 16, 2026** (was Lean R);
     Sabato still Leans R. Polling shows Acton narrowly ahead within the margin. 2022 history: DeWine 62.41% – Whaley 37.38%.
   - **ALL FIVE statewide executive offices are OPEN** (term-limit musical chairs): **AG** Keith Faber (R, the sitting
     Auditor) vs. John Kulewicz (D); **SoS** Robert Sprague (R, the sitting Treasurer) vs. Allison Russo (D, House
     Minority Leader) + Tom Pruss (L); **Treasurer** Jay Edwards (R) vs. Seth Walsh (D); **Auditor** Frank LaRose (R, the
     sitting SoS) vs. Annette Blackwell (D, Maple Heights mayor). Yost resigned as AG ~June 7, 2026; DeWine appointed Andy
     Wilson interim — **Wilson is NOT on the ballot.** Down-ballot platforms are genuinely thin → [Verify] is correct.
   - **Ohio Supreme Court, 2 seats, now PARTISAN** (court is 6–1 R): Dan Hawkins (R, incumbent) vs. Marilyn Zayas (D);
     Jennifer Brunner (D, incumbent — the lone Democrat) vs. Colleen O'Donnell (R), who won a 4-way primary.
   - **House ratings (Cook Jul 16 / Sabato Jul 16 / Inside Elections Jun 12):** only FOUR Ohio seats are competitive on
     Cook's sheet — **OH-1 Lean D, OH-7 Likely R, OH-9 TOSS UP, OH-13 Likely D**; every other seat is Solid/Safe.
     OH-9 = Toss Up / Toss-up / Tilt R. OH-13 = Likely D / Likely D / Solid D. OH-10 and OH-15 are Baseline R+10
     ("outer fringes" in a wave). The new map moved OH-9 from Baseline R+3 → **R+8** (sheds the Cleveland-ward arm,
     adds Defiance/Williams/Fulton; Trump would have carried the new lines ~11) and OH-13 from D+2 → **D+4** (sheds
     Republican Stark territory, picks up Kent). Statewide the map went from 10 to 12 safe-R seats.
   - **OH-9 is THE marquee race:** Kaptur (D, in office since 1983, senior Appropriations) vs. **Derek Merrin (R)** —
     a REMATCH of 2024, which Kaptur survived by **0.64 points** (48.27–47.63) with a Libertarian taking 4.10%.
     Merrin won a 5-way primary with 44.08% and was Trump-endorsed May 22, 2026; ICE deputy director Madison Sheahan
     resigned to run and finished third. Kaptur has ~$3.5M cash on hand to Merrin's ~$531K. The Libertarian line
     (Matthew Althaus) matters here given the 2024 margin.
   - **OH-13's competitiveness collapsed for a specific reason worth explaining on the page:** 2024 nominee **Kevin
     Coughlin — who lost to Sykes by 2.22 points and was the presumed 2026 nominee — dropped out Nov 2, 2025, two days
     after the new map passed.** Radio host Carey Coleman won the 5-way primary instead, and trails Sykes ~26-to-1 in cash.
   - **OH-1 (Landsman D) is the other real race** and the district the new map changed most: it sheds Democratic
     Hamilton County suburbs to OH-8 and absorbs deep-red Clinton County, moving from **Harris +6 to Trump +2.5**.
     Cook and Sabato both moved it Toss Up → **Lean D** (Apr 7 / Mar 26, 2026); Inside Elections still Tossup.
     Landsman (won primary 67.9%) vs. **Eric Conroy (R)** — Air Force Academy grad and former CIA case officer,
     Trump-endorsed Apr 14, won the primary 71.9%. Landsman ~$3.6M cash to Conroy's ~$374K, but the Congressional
     Leadership Fund reserved **$4M** in the Cincinnati market.
   - **OH-7 (Max Miller R) is the sleeper — Likely R, downgraded twice** (Cook Solid→Likely Jun 18; Sabato Safe→Likely
     May 6). Union ironworker **Brian Poindexter (D)** won an 8-way primary (~37%), endorsed by Sanders, Khanna, Ryan
     and the Ohio AFL-CIO; a Democratic-sponsored June poll had it 44–43. ⚠ When writing Miller's card: his 2024 win
     (51.08%) was a THREE-way race — Dennis Kucinich ran as an independent and took 12.8%; presenting it as a narrow
     two-way finish would mislead. ⚠ Race raters cited allegations in his contested divorce, which he denies — the only
     defensible framing is "raters cited it," never as established fact.
   - **⚠ Publishing cautions carried over from research (resolve against the OH SoS certified list, not another web pass):**
     OH-1's Libertarian line is unresolved (primary winner John Hancock suspended his campaign Feb 24, 2026 after an
     indictment; the state LP lists Jason Stoops instead) — **the single biggest correction risk**. OH-4: **Tamie Wilson
     is NOT on the ballot** (petitions rejected); the certified independent is **Tracey Tackett** (certified Jul 6, 2026,
     note the spelling) — Wikipedia is stale here. OH-15: a source lists Samuel Ronan as eliminated but the certified
     result shows Carey unopposed at 100%. Several Libertarian/independent lines (OH-5 Dalton Franklin, OH-7 Andrey
     Martinichin / Brian Duvall-Gambino) are unconfirmed — omit rather than assert. Positions are missing for OH-2 Taylor
     and Mazzuckelli, OH-4 Jordan, and OH-7 Miller (house.gov and campaign sites blocked automated fetch).
     **Do NOT publish** the single-sourced claim about an Anthropic-funded PAC in the OH-7 primary — it was uncorroborated
     against FEC filings, and the researching agent correctly noted it is not a neutral party on that item.
   - **House:** OH-2 detail is fully researched:
     David Taylor (R, incumbent, Trump-endorsed, won primary 74.2–25.8) vs. Jen Mazzuckelli (D, 53.2–46.8 over Todd
     Wilson); Solid/Safe R by all four raters; Athens County moved from OH-12 into OH-2 under the new map; **no published
     Cook PVI exists yet for the new OH-2 lines — do not print one.** Districts 1 and 3–15 still need the per-district pass.
   - Recurring caveat: **ohiosos.gov returns 403 to automated fetch**, so certified vote TOTALS are news-sourced
     (percentages are reliable and cross-agree); swap in official canvass numbers when the portal is reachable.

   **KENTUCKY was COMPLETED Aug 4, 2026** (cloned from oh.html; 120 counties / 6 districts / open U.S. Senate +
   Amendment 1 + three nonpartisan judicial races; built WITH voices on every upcoming candidate from the start).
   Kentucky's map was taken VERBATIM from the operative statute (KRS 118B.110–.160) — the 2022 SB 3 plan, unchanged
   for 2026 — and the transcription was proved exact by arithmetic: district populations summed to 750,973/750,972/
   750,973/750,973/750,973/750,972 against an ideal of 750,973, totalling Kentucky's 4,505,836 precisely.
   **IOWA was COMPLETED Aug 4, 2026** (cloned from in.html; 99 counties / 4 districts / SEVEN statewide races +
   one ballot measure; built WITH voices from the start). Iowa is the site's first NON-CONTIGUOUS build — Illinois
   sits between it and Indiana — and index.html's prose was reworded so it no longer claims an unbroken stretch.
   Its map is the cleanest on the site: state law forbids splitting counties, so all 99 sit wholly in one district,
   and the four districts land within 94 people of each other (797,584 / 797,589 / 797,551 / 797,645 against an
   ideal of 797,592), which independently validates every assignment.
   **Built bloc is now 19 (NC SC GA VA MD DE NJ NY RI NH CT VT ME MA WV OH KY IN IA)** — the Georgia-to-Maine coastal run
   plus West Virginia, Ohio and Kentucky reaching inland.
   **Next targets:** **IL** (fully researched — see the banked section below — but it MUST be built with the `ds`
   multi-district field, because five Chicago-area districts sit entirely inside Cook County), then **PA** (banked
   below — build it AFTER Aug 10, 2026), then **MI**.
   ⚠ **MI's primary was Aug 4, 2026** — build Michigan only once those results are certified.
   **Florida still ONLY after its Aug 18, 2026 primaries.** **DC** still needs a different page model (no counties).

   ### ✅ INDIANA — BUILT Aug 4, 2026 (18th state). The notes below are the build record; do not re-research.
   Built in two passes on Aug 4: the map and statewide ballot first, then all nine districts. Shipped with voices on
   every upcoming candidate. ⚠ **The Indiana Election Division's certified general-election candidate list was still
   INCOMPLETE for federal offices** when this was built — its own header says federal lists stay incomplete until the
   Recount Commission finishes three state-legislative recounts. Libertarian and write-in ballot status IS certified;
   the D/R nominees are AP-called. **Re-verify the D/R nominees against the certified list once it is complete.**
   ⚠ **Ballotpedia was wrong four times** on Indiana alone: a Republican in the IN-8 primary who never made the ballot
   (Daniel George), an independent in the IN-8 general who is not certified (James Burke), an "independent" in IN-2 who
   actually filed for a LaPorte County school board seat (Eric Beebe), and a phantom fourth IN-9 name. None are carded.
   ⚠ **One unresolved geography conflict:** the county map derives **Randolph County** as 72.6% in IN-3 from the Census
   relationship file, but district-level reporting places Randolph in IN-6. The county is genuinely split; the page keeps
   the Census-derived assignment and flags the disagreement in the IN-3 region line. Resolve against the Indiana
   General Assembly's legal description.

   - **⚠ INDIANA DID NOT REDISTRICT — this was the gating question and it is SETTLED.** Indiana was one of the states
     pressed hardest in the 2025 national mid-decade redistricting push. Gov. Braun called a special session; the Indiana
     House passed a 9R-0D map (HB 1032) 57–41 on Dec 5, 2025 that would have split Marion County four ways; and on
     **Dec 11, 2025 the Indiana SENATE voted it down 31–19**, with 21 Republicans joining all 10 Democrats — the first
     time the national redistricting push was defeated by the president's own party. No revival, no enacted map, and
     therefore no litigation over one. **2026 uses the map enacted Oct 4, 2021 (HEA 1581), unchanged.** Verified
     structurally rather than only from news: the Census Bureau's 118th- and 119th-Congress county relationship files
     for Indiana are **byte-identical**, so the boundaries did not move.
   - ⚠ **TRAP:** the Census 2020 Block Assignment File `BlockAssign_ST18_IN_CD.txt` encodes the OLD 2011 CD116 map.
     Using it yields wrong splits (Marion 7/5; Boone and Morgan split). It was detected and discarded.
   - **EIGHT split counties** (plurality in parens): Marion→7 (77.2%), Bartholomew→6 (88.5%), Kosciusko→2 (77.4%),
     LaPorte→1 (73.4%), Randolph→3 (72.6%), Cass→4 (64.6%), Fountain→8 (61.7%), Howard→5 (≥97.8%). **CD7 lies ENTIRELY
     inside Marion County**, so its population equals Indiana's ideal district size (753,948) — which independently pins
     the Marion split. Fountain, at 62/38, is the closest call and still not in doubt.
   - **THE FULL COUNTY→DISTRICT TABLE (all 92, `FIPS|County|District`).** Recorded here deliberately: the Ohio build lost
     time because an earlier commit recorded the METHOD but not the TABLE. These county names already match the us-atlas
     geometry exactly (checked against `counties-10m.json`), and the per-district counts are
     CD1=3, CD2=9, CD3=12, CD4=14, CD5=6, CD6=9, CD7=1, CD8=21, CD9=17 (92 total).
```
   18001|Adams|3           18003|Allen|3           18005|Bartholomew|6     18007|Benton|4
   18009|Blackford|3       18011|Boone|4           18013|Brown|9           18015|Carroll|4
   18017|Cass|4            18019|Clark|9           18021|Clay|8            18023|Clinton|4
   18025|Crawford|8        18027|Daviess|8         18029|Dearborn|9        18031|Decatur|9
   18033|DeKalb|3          18035|Delaware|5        18037|Dubois|8          18039|Elkhart|2
   18041|Fayette|6         18043|Floyd|9           18045|Fountain|8        18047|Franklin|9
   18049|Fulton|2          18051|Gibson|8          18053|Grant|5           18055|Greene|8
   18057|Hamilton|5        18059|Hancock|6         18061|Harrison|9        18063|Hendricks|4
   18065|Henry|6           18067|Howard|5          18069|Huntington|3      18071|Jackson|9
   18073|Jasper|4          18075|Jay|3             18077|Jefferson|9       18079|Jennings|9
   18081|Johnson|6         18083|Knox|8            18085|Kosciusko|2       18087|LaGrange|3
   18089|Lake|1            18091|LaPorte|1         18093|Lawrence|9        18095|Madison|5
   18097|Marion|7          18099|Marshall|2        18101|Martin|8          18103|Miami|2
   18105|Monroe|9          18107|Montgomery|4      18109|Morgan|4          18111|Newton|4
   18113|Noble|3           18115|Ohio|9            18117|Orange|8          18119|Owen|8
   18121|Parke|8           18123|Perry|8           18125|Pike|8            18127|Porter|1
   18129|Posey|8           18131|Pulaski|2         18133|Putnam|4          18135|Randolph|3
   18137|Ripley|9          18139|Rush|6            18141|St. Joseph|2      18143|Scott|9
   18145|Shelby|6          18147|Spencer|8         18149|Starke|2          18151|Steuben|3
   18153|Sullivan|8        18155|Switzerland|9     18157|Tippecanoe|4      18159|Tipton|5
   18161|Union|6           18163|Vanderburgh|8     18165|Vermillion|8      18167|Vigo|8
   18169|Wabash|2          18171|Warren|4          18173|Warrick|8         18175|Washington|9
   18177|Wayne|6           18179|Wells|3           18181|White|4           18183|Whitley|3
```
   - **STATEWIDE BALLOT — what is and is not on it (all verified):**
     **NOT on the 2026 ballot:** U.S. Senate (Indiana has no Class 2 seat — Young is Class 3 through 2028, Banks Class 1
     through 2030; no vacancy, no special), Governor (Braun elected 2024 to 2028), Attorney General (a presidential-year
     office; Rokita next up 2028), and Supreme Court retention (Rush/Massa/Molter retained 2024, next due 2034).
     **ON the ballot:** Secretary of State, State Comptroller (Auditor of State), Treasurer of State, three Court of
     Appeals retention questions, and two constitutional amendments.
   - ⚠ **Those three executive offices are nominated at PARTY CONVENTIONS, not at the May 5 primary** (IC 3-10-2-7).
     Libertarian convention Mar 20–22; Democratic June 6; Republican June 19–20, 2026.
   - ⚠ **Ballot-title quirk:** the office was renamed Auditor of State → State Comptroller by HEA 1001-2023, but the
     Indiana Constitution still says "Auditor of State", so SEA 221 (2025) requires it appear on the 2026 ballot as
     **"State Comptroller (Auditor of State)"**. Use that dual designation.
   - **SECRETARY OF STATE is the marquee, and it is a FOUR-WAY race.** ⚠ **Incumbent Diego Morales (R) was thrown off the
     ballot by his own party**, finishing THIRD at the June 20 GOP convention (2nd ballot: Engling 867/53.3%, Shelton
     627/38.5%, Morales 134/8.2%). Reported causes: a non-citizen former chief of staff illegally registered to vote, a
     $90,000 taxpayer-funded SUV, no-bid contracts to campaign donors, roughly $500K in staff raises, and a League of
     Women Voters ethics complaint over $35,070 in self-branded election guides; Sen. Banks and AG Rokita rescinded
     endorsements. [Verify the older 2022 "resume embellishment" allegation before publishing it — it could not be
     re-confirmed this pass.] The November field: **Max Engling (R)** (~20 years a congressional staffer, most recently
     an aide to Sen. Banks); **Beau Bayh (D)** (son of Evan, grandson of Birch; Marine Corps captain; Harvard BA/JD) —
     won the June 6 convention 61%–39% and holds **$2.31M cash on hand, roughly 15× Engling's $150K**; **Greg Ballard
     (Independent, "Lincoln Party")**, the former two-term Republican mayor of Indianapolis, who raised $876K with about
     90% of his spending funded by one PAC — ⚠ **his policy positions are NOT SOURCEABLE; do not invent a platform for
     him**; and **Lauri Shillings (L)**. Also on the ballot: Harrison Jacobo (Socialist, $0 raised) and Andrew Delano
     (write-in). The only public poll is stale — Oct–Nov 2025, before Morales was removed, commissioned by a pro-Ballard
     group.
   - **COMPTROLLER:** Elise Nieshalla (R, incumbent) vs. Jessica Bailey (D, Porter County Clerk), plus John Schick (L,
     no platform sourceable). ⚠ **Nieshalla was APPOINTED in Dec 2023 after Tera Klutz resigned and has NEVER won a
     statewide election** — WFYI wrongly reported she was "elected in 2022". Do not repeat that framing.
   - **TREASURER:** Daniel Elliott (R, incumbent) vs. Coumba Kebe (D), who built her profile explaining Medicaid policy
     on TikTok. A well-sourced criticism of Elliott: the Legislative Services Agency estimated his 2023 anti-ESG pension
     bill would cut state pension returns by **$6.7B over a decade**.
   - **COURT OF APPEALS RETENTION (3, all first retentions, all Holcomb appointees):** Dana Kenworthy (2nd District),
     Mary DeBoer (4th), Paul Felix (5th). Judge Stephen Scheele has not served two full years and is NOT on the ballot.
   - **BALLOT MEASURES (2), certified text obtained for both:** Public Question #1 is the **bail / "substantial risk"
     detention** amendment (S.J.R. 1; Senate 43–2 on Jan 23, House 75–11 on Feb 17, 2026) — supporters frame it as public
     safety, while Sen. Greg Taylor and civil-liberties groups object that it turns on the person rather than the charge.
     The second is **city/town court judge residency** (H.J.R. 1; House 81–7, Senate 43–3), with no organized opposition.
     ⚠ **The second measure's public-question NUMBER is not sourced** — do not label it "PQ#2" without the SoS list.
   - **HISTORY:** 2022 SoS Morales 54.13%–40.21%; 2022 Auditor Klutz 60.07%–36.44%; 2022 Treasurer Elliott 60.87%–39.13%
     (⚠ that race was TWO-WAY — no Libertarian ran); 2024 Senate Banks 58.64%–38.77%; 2024 Governor Braun 54.38%–41.11%.
   - **Access notes for the next pass:** iga.in.gov is a JavaScript app with no server-rendered content; the Indiana SoS
     certified canvass PDFs and campaignfinance.in.gov could not be fetched; Indiana Capital Chronicle, IndyStar and
     Ballotpedia article pages all blocked automated fetch. Re-pull exact vote totals and the state-level campaign-finance
     figures from in.gov in a browser before publishing them.

   ### ⏸ ILLINOIS — RESEARCH BANKED Aug 4, 2026; BUILD BLOCKED ON THE `ds` MODEL. Do not re-research what is here.
   The county map and the full statewide ballot are resolved. **The blocker is structural, not research:** Illinois
   districts **1, 3, 4, 5 and 9 sit entirely inside Cook County**, so under a one-district-per-county model they are
   unreachable — the exact bug fixed on ny.html/ma.html this same day (lessons-learned #12). **Build Illinois using the
   `ds: [...]` multi-district field from the start**, and let `tests/data-logic.js`'s reachability check gate the ship.
   Cook overlaps **11 districts**; DuPage 5; Will and Lake and McHenry 4 each; Kane 3. Those `ds` lists must be derived
   before the page goes live — the plurality table below is NOT sufficient on its own for those counties.

   - **Map in force:** the 17-district plan enacted as HB 1291 / **Public Act 102-0663**, signed Nov 23, 2021. **NO
     mid-decade redraw.** Democratic leaders declined to call the Jeffries-backed remap in the Oct 2025 veto session,
     and candidate filing then proceeded under the existing map. Verified structurally: the Census `tab20_cd11820` and
     `tab20_cd11920` county relationship files for Illinois are **byte-identical (25,679 bytes, 157 identical rows)**.
   - ⚠ **TRAP:** `BlockAssign_ST17_IL.zip` is dated 2021-02-08 — nine months BEFORE the map was drawn — and encodes the
     old 2011 lines. Do not use it.
   - **Arithmetic check passed exactly:** per-district populations come to 753,677 for CD1–CD16 and 753,676 for CD17
     against an ideal of 753,677.0, totalling Illinois' 12,812,508 — a zero-person deviation across all 17 districts.
   - **32 of 102 counties are split.** Plurality assignments are recorded in
     `scratchpad/il-counties.js` from this run; the low-margin ones worth showing as two districts are **Boone**
     (CD16 over CD11 by 556 people), **Mercer** (CD15 over CD17 by 603), **McLean** (CD16 over CD17 by 1,260),
     **McDonough** (CD17 over CD15 by 1,834), **Macon** (CD13 over CD15 by 2,706) and **Kane** (CD8 over CD11 by 15,359).
   - **Primary was March 17, 2026;** ISBE certified results April 17. Nominees are settled. ⚠ As of Aug 4 ISBE was still
     finalizing the general-election ballot — the two-party lineup is firm, the independent lineup is not.
   - **U.S. SENATE — OPEN, the marquee.** Dick Durbin announced his retirement April 23, 2025.
     **Juliana Stratton (D)**, the sitting Lt. Governor, won the primary with **40.4%** over Rep. Raja Krishnamoorthi
     (32.7%) and Rep. Robin Kelly (18.3%) — Pritzker's super PAC spent **$10M** boosting her. **Don Tracy (R)**, former
     Illinois GOP chair and Gaming Board chair, won with 40.0%; he self-funded a $2M loan and holds ~$1.5M on hand
     against Stratton's ~$1.1M, but his Q2 fundraising collapsed to $132K. Rated Solid/Safe Democratic by all three
     raters. ⚠ Third-party Senate candidates are **UNRESOLVED** — Wikipedia lists none, Ballotpedia lists two,
     Politics1 lists a third. Settle against ISBE before carding anyone.
   - **GOVERNOR.** **JB Pritzker (D)** is seeking a THIRD term — the first Illinois governor to try since the 1980s —
     unopposed in the primary, with new running mate **Christian Mitchell** (Stratton vacated the slot). **Darren
     Bailey (R)** won renomination with 53.3%, setting up the **first Illinois gubernatorial rematch since 1986**;
     his running mate is Cook County GOP chair Aaron Del Mar. Bailey lost 2022 by 12.5 points and ended Q2 with just
     $128K on hand against Pritzker's $3.1M (after Pritzker spent $11M+ in the quarter). ⚠ **Independent Collin
     Corbett / Carolyn Schofield ARE on the ballot** — 27,323 signatures validated against 25,000 required, and the
     Bailey camp's objection was withdrawn at ISBE's July 14 meeting. Corbett is a former Republican consultant.
     ⚠ The **Green Party ticket FAILED** ballot access (~3,000 of 25,000 signatures) and is pursuing a write-in —
     Ballotpedia listing Griselda Romero as a general-election candidate is WRONG.
   - **FOUR other constitutional offices,** all on the ballot: **AG** Kwame Raoul (D, 3rd term) vs. Bob Fioretti (R);
     **SoS** Alexi Giannoulias (D) vs. Diane Harris (R); **Comptroller — OPEN** (Susana Mendoza retiring) Margaret
     Croke (D, won the primary with 34.6%) vs. Bryan Drew (R); **Treasurer** Mike Frerichs (D) vs. Max Solomon (R).
     ⚠ **Giannoulias is running for TWO offices at once** — he launched a campaign for Chicago mayor on Aug 2, 2026
     (Feb 2027 election) while staying on the November SoS ballot. That is the single most newsworthy down-ballot fact.
     ⚠ **Treasurer sourcing conflict RESOLVED:** reporting said no Republican filed — the first time in ~90 years for
     an Illinois statewide office — but **Max Solomon won the GOP nomination as a WRITE-IN with 22,990 votes** and was
     certified in the April 17 canvass. Frerichs IS opposed; the "unopposed" stories predate certification.
   - **NO ballot measures.** The deadline to place an amendment was May 3, 2026 and both live proposals died — the
     redistricting amendment passed the House 74–38 but Senate President Harmon declined to call it, and the
     millionaires-tax amendment lacked the votes. **There is no certified ballot title to report.**
   - **NO Illinois Supreme Court** seats or retention questions in 2026 [Verify — sourced via Ballotpedia only].
     Five appellate retentions and three partisan appellate seats do appear.
   - **HISTORY:** 2020 Senate Durbin 54.93%–38.87%; 2022 Governor Pritzker 54.91%–42.37% (12.5 pts);
     2022 Senate Duckworth 56.82%–41.50%. ⚠ There was **no 2024 Illinois Senate race** — Duckworth v. Salvi was 2022.
   - **Access notes:** elections.il.gov returns 403 to automated fetch on every path, so all "certified" claims route
     through reporting that cites ISBE. Cook, Sabato and Inside Elections all 403 as well. Pull the ISBE Vote Totals
     Book and the certified general-election candidate list manually before publishing.

   ### ⏸ PENNSYLVANIA — RESEARCH BANKED Aug 3, 2026; BUILD GATED TO AFTER AUG 10. Do not re-research what is here.
   A PA build was started on Aug 3 (17th state) and deliberately **not shipped**. Two independent reasons:
   - **The ballot field is not final.** Per the PA Dept. of State 2026 general-election calendar, **independent and
     minor-party nomination papers were due Aug 3, 2026** (moved from Aug 1, a Saturday) and **objections and
     withdrawals run through Aug 10**. Any PA page published before Aug 11 would be asserting a field that can still
     change. **Build PA the week of Aug 11, off the DOS certified candidate list.**
   - **The county→district map was never obtained.** This is the hard blocker — no map, no page. ⚠ **The obvious
     Census Block Equivalency File that turned up is the OLD 18-DISTRICT map and is unusable.** PA has 17 districts
     under the 2020 apportionment; the map used in 2022 and 2024 was adopted by the state Supreme Court in Feb 2022.
     Start from the PA Dept. of State / redistricting.legis.state.pa.us legal description, or the Census 2020
     congressional-district ↔ county relationship file (which also gives the populations needed for plurality calls).
     Expect splits in Philadelphia, Allegheny, Montgomery, Bucks, Delaware, Chester, Lancaster, York, Berks,
     Westmoreland, Luzerne, Lehigh, Northampton, Dauphin, Erie and Cumberland.
   - The page scaffold is trivial to recreate: clone `oh.html` and apply the checklist replacements (title, meta,
     crest `PA`, brand/hero text, 67 counties / 17 seats in the hero stats, `#pamap`, `PA_STATE_FIPS = "42"`,
     Harrisburg capital marker at -76.8844/40.2732, "Not in PA", `SITE_META`, footer sources).

   **Findings to reuse (sourced Aug 3, 2026).** ⚠ These are LEADS banked from a research pass that was cut short —
   they are good starting points, not publish-ready copy. Re-confirm every candidate and every number against the
   **PA Dept. of State certified candidate list** (after Aug 10) and FEC filings before any of it goes on the page.
   - **Statewide:** **NO U.S. Senate race in PA in 2026.** Governor **Josh Shapiro (D)** and Republican **Stacy
     Garrity** (the sitting state Treasurer) both took their nominations **unopposed** on May 19. An F&M poll had
     Shapiro leading ~50–28. Still to confirm: whether PA's row offices (AG/Auditor General/Treasurer) or any
     appellate-court seats or retention questions are on the 2026 ballot (PA normally elects judges in ODD years —
     verify, do not assume), plus any constitutional-amendment questions and the Lt. Gov nominees.
   - **PA-3 is an OPEN seat and effectively already decided:** Dwight Evans retired; **Chris Rabb** (state rep,
     democratic socialist) won the May 19 Democratic primary with ~44.2% over Sharif Street (~29.5%) and Ala
     Stanford (~24.1%) — and **NO Republican filed in PA-3 at all**. Cook PVI D+40, the most Democratic district in
     the country. An independent filing is the single most likely thing to change this field.
   - **PA-2** Brendan Boyle (D, D+19, won 71.1% in 2024) vs. **Jessica Arriaga** (R, unopposed; OR technician and
     Philadelphia 37th Ward GOP leader, runs on spending, taxes, public safety).
   - **PA-5** Mary Gay Scanlon (D, D+15, 65.1% in 2024, unopposed for renomination) vs. **Nick Manganaro** (R,
     Haverford finance professional, beat Joshua Brown in the primary). ⚠ **The 2026 PA-5 Republican is NOT David
     Galluch** — a PoliticsPA page still in search results is from the **2022** cycle and names him. Live trap.
   - **PA-4** Madeleine Dean (D, D+8, 59.1%–40.9% in 2024, unopposed) vs. **Aurora Stuski** (R, unopposed; appraisal
     business owner from West Norriton, campaign site aurora4pa.com — spending, small business, law enforcement,
     immigration enforcement, and opposition to a large Plymouth Township data center). A second Republican,
     **Ismaine Ayouaz, failed to qualify** (Ballotpedia text on this is stale). **Milan Patel (I)** filed paperwork
     but his ballot qualification is NOT confirmed — do not card him without the DOS list.
   - **PA-6** Chrissy Houlahan (D) IS running (unopposed, 100%); Republican nominee is **Marty Young** (Army veteran,
     West Point '93, restructuring consultant). ⚠ **He is NOT the 2024 nominee Neil Young Jr.** — different people,
     do not frame it as a rematch. 2024: Houlahan 56.2%–43.8%. Cook/Inside Elections Solid D (Sept 11, 2025 per
     Wikipedia's table — the shared date looks like a table artifact, verify at source), Sabato Safe D (Apr 10, 2025).
     No published Cook PVI for PA-6 was found — do not print one. District composition is disputed between sources
     (all of Chester + the city of Reading, vs. "most of Chester and part of Berks") — resolve officially.
   - **PA-7 / PA-8 are the marquee races.** PA-7: Ryan Mackenzie (R) vs. **Bob Brooks** (D, firefighter, added to the
     DCCC's Red to Blue **May 4, 2026**). PA-8: Rob Bresnahan (R) vs. **Paige Cognetti** (D, also Red to Blue).
     **Cognetti $3.4M cash on hand to Bresnahan's $2.6M as of June 30, 2026** — the first report where she led.
     Mackenzie's newest confirmed figure is pre-primary: $2.59M COH at ~Apr 30, $3.82M raised cycle-to-date; Brooks
     ~$1.04M raised since entering Aug 26, 2025. **Mackenzie and Bresnahan are both on the NRCC's April 2026 Patriot
     Program list**, along with Fitzpatrick (PA-1) and Perry (PA-10). Cook's PA competitive set: PA-7 and PA-10 Toss
     Up, PA-8 Lean R → later Toss Up; Inside Elections moved PA-8 to Toss-up June 11 and PA-17 to Safe D.
     PA-10's Democrat is **Janelle Stelson** (Red to Blue).
   - **Districts 1, 9–17 were never researched** — the agents were cut off. PA-9's Dan Meuser was weighing a
     governor run, so **verify whether PA-9 is an open seat** rather than assuming he filed.
   - **⚠ SC TIME-SENSITIVE — THE MOST URGENT ITEM ON THE SITE: the Republican SPECIAL PRIMARY for the late Lindsey
     Graham's Senate seat is AUG 11, 2026, with a runoff Aug 25 if no one clears 50%.** sc.html currently carries a
     placeholder GOP nominee card. Replace it with the actual nominee the week of Aug 11 (or after Aug 25 if it goes
     to a runoff), and re-verify the field against the SC Election Commission certified list — two sources gave
     conflicting filer lists (Bauer/Lynch vs. Fry/Norman/Sanford), so the page names only Bauer and Lynch, marked.
   - **VA time-sensitive — DUE NOW:** Virginia's primaries were **Aug 4, 2026**, the day this run executed, so results
     were not yet available. va.html still holds six "[nominee — decided Aug 4]" placeholder cards, and those six are
     also the site's ONLY remaining voices gaps. **Refresh va.html first thing on the next run.**
   - **DE time-sensitive:** July 14 filing deadline, then Sept 15 primary — refresh de.html after
     both.
   - **MD follow-up:** June 23 primary figures are unofficial — swap in certified numbers when
     the state canvass completes (mid-July).
   - **GA time-sensitive — DONE for July 28, NEXT IS AUG 25:** the GA-13 special happened. No one cleared 50%, so
     **Marcye Scott (46.0%) vs. Everton Blair Jr. (37.4%) go to an Aug 25, 2026 RUNOFF** — no Republican advanced.
     ⚠ The runoff winner serves only through Jan 3, 2027 and is **NOT** on the November ballot; the full term is a
     separate race where Jasmine Clark (D) faces Jonathan Chavez (R). Refresh ga.html after Aug 25.
   - **ME — RESOLVED Aug 3, 2026:** Troy Jackson won the July 25 replacement convention in Bangor **566–5** over
     Saundra Pelletier and was certified by the Maine SoS on July 27 — Maine's first replacement U.S. Senate nominee
     since 1918. The certified November field is **Collins vs. Jackson only**; no independents qualified (the
     non-party petition deadline was June 1). A Republican legislator has asked the SoS to rule Jackson ineligible
     for seeking two offices this cycle; he was certified anyway and it is carded as an opponents-say item [Verify].
   - **CT — three placeholder cards were WRONG and were corrected Aug 3, 2026.** Per the Secretary of the State's
     certified list only **18 primaries** are on the Aug 11 ballot, and the only congressional ones are **CT-1 (D),
     CT-4 (R) and CT-5 (R)**. CT-1's Republican nominee (**Amy Chai**) and CT-3's (**Christopher Lancia**) were already
     settled at the May conventions, and **every statewide constitutional-office primary was cancelled as uncontested**
     — so Bysiewicz, Corey, Tong, Bolton, Thomas, Lumaj, Russell, Wilms, Scanlon and Tooker are all already nominees.
     Also added: **Ruth Fortune**, a fourth CT-1 Democrat who took part in both televised debates and was missing.
   - **VT — three data gaps flagged on the page Aug 3, 2026, all needing a Vermont SoS check** (the filing list was not
     reachable): (a) **Ryan McLaren**, a third Lt Gov Democrat and reportedly the field's TOP fundraiser, is not carded;
     (b) the Auditor Republican line is disputed — VTDigger and Seven Days both show **H. Brooke Paige** unopposed for
     Auditor, AG, SoS and Treasurer, NOT the carded Joshua Bechhoefer; (c) **Gerald Malloy** contests the U.S. House
     Republican primary and reportedly LEADS Mark Coester, who the page treats as presumptive. Also: Auditor Democrat
     **Dan Towle** ended his campaign but stays on the ballot. Resolve all four the week of Aug 11.
   - **CT + VT time-sensitive:** both primaries are **Aug 11, 2026**. Replace every
     "[nominee — decided Aug 11 primary]" placeholder and resolve the pre-primary [Verify] fields that
     week. CT's headline result to watch: the CT-1 Larson–Bronin–Gilchrest Democratic primary. VT's:
     the Dem gubernatorial primary (Richards vs. Janoo) and the open Auditor primary (Ashe vs. Graeter).
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
- Update `SITE_META.lastUpdated` (the footer on each state page) whenever that state's data changes.
- **Freshness — do this EVERY scheduled run (owner feedback, July 2026):** bump `SITE_META.lastUpdated`
  on every page you change AND the static "Last updated: <month> 2026" line in `index.html`'s footer to
  the current month. These dates must never go stale, even on a light week.
- **Landing-page review — do this EVERY run, after your data edits (owner feedback, July 2026):** read
  `index.html` end-to-end and reconcile its dependent facts with the current reality of the site — the
  legend's built-state count, the "How you can help" / roadmap paragraph, the `BUILT` / `PARTIAL` tier
  sets, and the footer. The prose must never contradict the map (e.g., NC is no longer the sole "proof of
  concept" now that seven states are built). Whenever a state is added/promoted, sweep index.html for
  every count and description that references it.
