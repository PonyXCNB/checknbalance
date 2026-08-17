# Banked map derivations — Minnesota, North Dakota, Kansas (Aug 17, 2026)

**Why this file exists.** On Aug 13, 2026 a run fully derived and currency-tested Minnesota's
county→district map and wrote all 8 districts — then did not ship the page, and recorded only a
one-paragraph summary in `tools/research-ledger.md`. The derivation itself evaporated with that
run's context and had to be redone from scratch on Aug 17. **Bank the artifact, not just the
claim.** Anything expensive enough to be worth a ledger entry is expensive enough to write down here.

---

## Minnesota — SHIPPED as `mn.html` on Aug 17, 2026

### Which map governs Nov 3, 2026
The congressional plan adopted by the Minnesota Special Redistricting Panel in **Wattson v. Simon,
Feb 15, 2022 (plan C2022)**. Minnesota did **not** redraw mid-decade and is not on Ballotpedia's
closed list of 2026 new-map states (AL, CA, FL, LA, MO, NC, OH, TN, TX, UT — see lesson #17).

### The source that made this cheap — use it again for other states
The **Minnesota Legislature's own GIS office** publishes county population by congressional district
for the adopted plan, as plain HTML, no bot wall:

```
https://www.gis.lcc.mn.gov/php/congress.php?Report=CongressCTY&District=<1..8>
```

Each page lists every county in that district with its population *inside that district*. That is
exactly the `d` (plurality) + `ds` (all districts touched) input, from the state's own redistricting
authority, with no block-level work at all. Sibling reports exist for MCD, school district and ZIP
(`Report=CongressMCD|CongressSD|CongressZip`), and `hsemapdata.htm` / `senmapdata.htm` are the
legislative equivalents. Discovered from `https://gis.lcc.mn.gov/cngmapdata.htm`.

**Arithmetic check on the parsed result:** the 87 county-district parts sum to **5,706,494** —
Minnesota's exact 2020 census population — and every district lands within **ONE PERSON** of the
713,311.75 ideal (CD1 713,311; CD2 713,312; CD3 713,311; CD4 713,312; CD5 713,312; CD6 713,312;
CD7 713,312; CD8 713,312).

### Currency proved THREE ways — 87 of 87 counties agree
Per lesson #13, an arithmetic proof establishes TRANSCRIPTION, not CURRENCY. Three independent
sources were compared on the *set of districts each county touches*, and all 87 counties agree:

1. the Legislature GIS report above (the adopted plan);
2. the Census CD119 county relationship file
   `www2.census.gov/geo/docs/maps-data/data/rel2020/cd-sld/tab20_cd11920_county20_st27.txt`;
3. **the Secretary of State's own county-level returns from the Aug 11, 2026 primary**,
   `electionresultsfiles.sos.mn.gov/20260811/USHouseCty.txt` — direct evidence of which map voters
   actually voted under, which is the decisive test.

⚠ **A wrong turn worth not repeating:** the Census 2020 **block assignment file**
(`www2.census.gov/geo/docs/maps-data/data/baf2020/BlockAssign_ST27_MN.zip`, member
`BlockAssign_ST27_MN_CD.txt`) is the **pre-2022** map for Minnesota. Checked against CD119 it
disagrees on **15 of 87 counties**. Do not use `baf2020` as a current-map source for any state.

### The 9 split counties, with the population in each part
| County | FIPS | `d` (plurality) | `ds` | Population by district |
|---|---|---|---|---|
| Anoka | 27003 | 6 | 3,5,6 | CD6 221,353 · CD3 83,030 · CD5 59,504 |
| Becker | 27005 | 7 | 7,8 | CD7 31,188 · CD8 3,995 |
| Brown | 27015 | 1 | 1,7 | CD1 21,999 · CD7 3,913 |
| Hennepin | 27053 | 5 | 3,5,6 | CD5 650,163 · CD3 630,281 · CD6 1,121 |
| Hubbard | 27057 | 7 | 7,8 | CD7 12,372 · CD8 8,972 |
| Ramsey | 27123 | 4 | 4,5 | CD4 548,707 · CD5 3,645 |
| Rice | 27131 | 2 | 1,2 | CD2 36,256 · CD1 30,841 |
| Stearns | 27145 | 6 | 6,7 | CD6 104,017 · CD7 54,275 |
| Washington | 27163 | 4 | 2,4,8 | CD4 164,605 · CD2 57,572 · CD8 45,391 |

⚠ **MN-3 is the population plurality of NO county** — it loses Hennepin to MN-5 (650,163 to 630,281,
a 19,882-person margin) and Anoka to MN-6. It is reachable ONLY through `ds`. This is the PA-3 /
MA-3 / NY-metro pattern from lesson #12, and `tests/data-logic.js`'s reachability check is what
guards it. `mn.html`'s pinned sample county is Hennepin precisely because it exercises this.

### Minnesota access findings (all re-confirmed Aug 17, 2026)
- `sos.mn.gov`, `electionresults.sos.mn.gov` **and `www.sos.state.mn.us`** are all bot-walled behind
  a Radware CAPTCHA. `sos.state.mn.us` returns **HTTP 200 with a CAPTCHA page**, so a status check
  alone will fool you — inspect the body.
- The raw result files are wide open and need no browser:
  `https://electionresultsfiles.sos.mn.gov/<YYYYMMDD>/<Office>.txt`
- ⚠ **The filenames are NOT guessable from the office name, and the directory index 403s.** The full
  Aug 11, 2026 set, found by brute force — record these, they cost real time:
  `USSenate` · `Governor` · `USHouse` · `USHouseCty` · **`AttorneyGen`** · **`SecOfState`**
  (also `SecofState`) · **`Auditor`** · `Cntytbl` · `Partytbl` · **`Cand`** · `Local` / `local`
  Confirmed **404**: `AttorneyGeneral`, `SecretaryOfState`, `StateAuditor`, `Judicial`,
  `MediaSummary`, `StateAuditor`, `Attorney`, `Secretary`, `SoS`, `SS`.
  `Judicial.txt` 404s because Minnesota holds a judicial primary only when 3+ candidates file.
- Historical files use the same pattern: `20241105/USHouse.txt`, `20241105/USSenate.txt`,
  `20221108/Governor.txt`. ⚠ `20241105/Governor.txt` and `20221108/USSenate.txt` 404 — correctly,
  since neither office was on those ballots.

---

## North Dakota — SHIPPED as `nd.html` on Aug 17, 2026

Trivial map: **one at-large district, 53 counties, no splits.** County list and FIPS from
`www2.census.gov/geo/docs/maps-data/data/rel2020/cd-sld/tab20_cd11920_county20_st38.txt`, where the
district GEOID is `3800` — at-large is coded **00**, so a naive `parseInt(geoid.slice(2))` yields 0.
The seat is keyed as district **1** on the page, the convention `vt.html` established.

**The gold source for North Dakota is the SoS's own results API** — no bot wall, and it reports
`isOfficial: true`:
```
https://api.resultsnd.sos.nd.gov/Election/GetElectionList?cId=north-dakota
https://api.resultsnd.sos.nd.gov/Election/GetElectionInfo?cId=north-dakota
https://api.resultsnd.sos.nd.gov/Contest/GetContestResults?cId=north-dakota&electionID=346&contestType=SW
https://api.resultsnd.sos.nd.gov/Contest/GetContestSearchList?cId=north-dakota&electionID=346&contestType=SW
```
`electionID=346` is the June 9, 2026 primary, **certified by the State Canvassing Board June 24,
2026**. ⚠ The API's election list contains ONLY 2026 — there is no 2024 history in it, the legacy
`results.sos.nd.gov` portal is JavaScript-driven, and `vip.sos.nd.gov` is retired. **North Dakota's
2024 general result was therefore NOT obtained, and nd.html deliberately carries no past race.**
Fix that when a source is found.

Other ND notes: `northdakotamonitor.com` 403s automated fetch but serves fine to `curl` with a
browser User-Agent. Two verified negatives worth keeping — **no 2026 U.S. Senate race** (Cramer is
Class I, Hoeven Class III, per senate.gov's own senators XML) and **no 2026 governor's race**
(Armstrong elected 2024; ND Const. art. V, s. 1).

---

## Kansas — DERIVED BUT NOT BUILT (ready for a future run)

105 counties, 4 districts, from
`www2.census.gov/geo/docs/maps-data/data/rel2020/cd-sld/tab20_cd11920_county20_st20.txt`.
Kansas is **not** on the 2026 new-map list.

**Only 4 split counties:** Douglas [1,2] · Jackson [1,2] · Pawnee [1,4] · **Wyandotte [2,3]**.

⚠ **What is still missing is the population plurality (`d`) for those four**, which the Census
relationship file cannot give (it carries land area only, and area is a bad proxy — Hennepin proves
it). Two routes, in order of preference:
1. look for a Kansas equivalent of the Minnesota Legislature GIS county-by-district report above;
2. failing that, the 2020 P.L. 94-171 block file joined to the enacted plan's block assignment.

Kansas's Aug 4, 2026 primary has been held, so the currency test is available: compare against the
Secretary of State's own county-level returns, the same way Minnesota's was proved.
Kansas is a genuinely valuable build — **open Governor** (Kelly term-limited) and a **Class II U.S.
Senate seat** (Marshall) are both on the 2026 ballot.
