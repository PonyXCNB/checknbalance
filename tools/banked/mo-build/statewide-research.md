# Missouri Statewide Ballot — November 3, 2026
Research file for checknbalance.org. Compiled September 8, 2026.
Primary sources: Missouri Secretary of State certified candidate list (Aug 25, 2026), SoS certified ballot-measure page, Missouri Supreme Court, MEC/FEC.

**STATUS: IN PROGRESS — see bottom for sources and COULD NOT CONFIRM.**

## STRUCTURAL CONFIRMATIONS (leads verified/refuted)

- ✅ **NO U.S. Senate race in Missouri in 2026.** The Secretary of State's certified candidate list for the Nov. 3, 2026 general election (issued Aug. 25, 2026 by Denny Hoskins) contains NO office of U.S. Senator for any party. Josh Hawley (R) is Class 1, re-elected 2024, next up 2030; Eric Schmitt (R) is Class 3, elected 2022, next up 2028. No special election appears on the certified list.
- ✅ **NO governor's race.** Mike Kehoe (R) was elected in 2024 to a four-year term. No office of Governor or any other statewide executive office except State Auditor appears on the certified list.
- ✅ **STATE AUDITOR is the ONLY statewide executive office on the ballot.** Certified: Scott Fitzpatrick (R, incumbent), Quentin Wilson (D), Dustin Coffell (L).
- ✅ **BALLOT MEASURES: four statewide.** Amendment 3, Amendment 7, Amendment 8 (all legislatively referred, on the SoS certified list), PLUS **Proposition A**, the congressional-map veto referendum, ordered onto the ballot by the Missouri Supreme Court on Sept. 3, 2026. Proposition A is on the November 3, 2026 ballot as a veto referendum on HB 1 (2025 congressional map). See MAP / PROP A GATE below (updated Sept 11, 2026).
- ✅ **JUDICIAL RETENTION: exactly ONE statewide judge.** Missouri Supreme Court Judge **Paul C. Wilson** is the only Supreme Court judge on the Nov. 3, 2026 retention ballot statewide. The SoS certificate separately lists Court of Appeals judges by district only (Eastern: Virginia W. Lay, Rebeca Navarro-McKelvey, Angela Turner Quigless; Southern: Matthew P. Hamner; Western: Lisa White Hardwick) — **these are NOT statewide**; each is voted on only within its appellate district. Distinction verified against the SoS's own "Certificate of Judicial Candidates, Article V, Section 25(c)" listing.


## MAP / PROP A GATE (updated September 11, 2026)

**STATUS FOR BUILD: gate still OPEN for mo.html, but research materially advanced.** Do NOT start mo.html until county→district derivation is banked against the map that will actually govern November.

### What governs the November 2026 general (current court posture)

- **2022 congressional map is the operative map for November.** On Sept 10, 2026, Secretary of State Denny Hoskins directed local election authorities to use the 2022 map, stating the only governing court order then in effect was from the Missouri Supreme Court (STLPR, Sept 10, 2026, Sarah Kellogg; confirmed in contemporaneous AP/PBS coverage of the U.S. Supreme Court stay the same day).
- **Missouri Supreme Court Sept 3 holding:** HB 1 (2025 redraw) never took effect because the referendum petition suspended it; the court ordered Proposition A onto the November ballot.
- **Sept 10 contempt:** The Missouri Supreme Court found Hoskins had been in contempt for previously directing use of the 2025 map, but held he purged the contempt by notifying local authorities to use the 2022 map (STLPR).
- **U.S. Supreme Court:** On Sept 10, 2026, the Court stayed a federal-court order that had pointed the other way, clearing the path for the state-court posture (AP via PBS NewsHour, Sept 10–11 reporting).
- **No second primary planned.** Hoskins said there is no suggestion of holding a new primary before November (STLPR). August primary was conducted under HB 1 lines that the state high court says never lawfully took effect — candidate/district pairing for November must follow the **2022** map, not the August primary’s HB 1 districts.

### Proposition A (ballot measure)

- **On the ballot Nov 3, 2026** as a veto referendum on HB 1.
- **Yes** = uphold/approve the 2025 HB 1 map; **No** = reject it (Ballotpedia summary of the measure; confirm Yes/No legal effect against SoS ballot language before carding).
- Even if voters approve Prop A, **November 2026 is still run on the 2022 map** under the current state-court holding that HB 1 never took effect for this cycle; Prop A’s practical effect is forward-looking unless a later court order says otherwise. ⚠ Re-check before build if the 8th Circuit (hearing referenced for mid-September) or U.S. Supreme Court changes that.

### Build implication

- Bank **mo-cd120.json (or equivalent) from the 2022 enacted plan**, not HB 1 / CD119-as-redrawn.
- Currency-test against SoS materials once November ballot district labels are published for each county.
- Keep `tools/banked/mo-build/` and `mo-cd120.json` — do not discard.

### Sources (map gate)

1. STLPR — “Hoskins agrees to use 2022 congressional map…” (Sarah Kellogg), published Sept 10, 2026, updated same evening.
2. PBS NewsHour / AP — “Supreme Court again rejects push to use Trump-backed congressional map in Missouri,” Sept 2026 coverage of the stay.
3. Jefferson City News Tribune — “Hoskins commits to using 2022 congressional map,” Sept 11, 2026 (Hoskins quote directing LEAs to 2022 map; notes 8th Circuit hearing referenced for Sept 15).
4. Missouri Supreme Court Sept 3, 2026 order placing Prop A on the ballot / holding HB 1 never took effect (primary legal source; cite opinion caption when banked PDF is saved).
5. Ballotpedia — Missouri Proposition A, Congressional Map Referendum (2026) — lead only; confirm Yes/No wording against SoS.

### COULD NOT CONFIRM (still open)

- Exact SoS-certified ballot title / Yes–No language for Proposition A (SoS ballot-measure page may still lag).
- Final county×district population table for the **2022** map in machine-readable form suitable for mo-cd120.json (need derivation, not HB 1 file).
- Whether any August primary winner is drawn out of their November district under the 2022 map (candidate continuity audit required before carding House races).
- ~~8th Circuit / further SCOTUS action after Sept 15 hearing window~~ **PARTIAL Sept 11:** 8th Circuit declined to stay Clark TRO; full SCOTUS then stayed Clark — 2022 map directed by Hoskins. Underlying appeal still live; re-check before build.


## PROPOSITION A — OFFICIAL BALLOT LANGUAGE (banked September 11, 2026)

**Source:** Fair ballot language as reported with SoS certificate coverage (KMBC, Sept 8, 2026) and matching AG opinion letter OP-2026-001 (Jan 12, 2026) fair-ballot Yes/No text. Summary statement matches the Court of Appeals–certified wording.

**Ballot question (summary statement):**
> Do the people of the state of Missouri approve the act of the General Assembly entitled "House Bill No. 1 (2025 Second Extraordinary Session)," which repeals Missouri's existing congressional plan, and replaces it with new congressional boundaries that keep more counties intact?

State and local governmental entities estimate no costs or savings.

**Fair ballot Yes/No:**
- **Yes** — approve the act of the General Assembly entitled "House Bill No. 1 (2025 Extraordinary Session)," which redraws the congressional district boundaries.
- **No** — leave in place the congressional district boundaries enacted in 2022.
- If passed, this measure will have no impact on taxes.

**Build note:** November 2026 House races still use the **2022** map under current state-court posture even if voters approve Prop A; Prop A's practical effect is forward-looking (HB 1 effective later if approved) unless a later court order says otherwise. Re-check after any 8th Circuit / SCOTUS action.

**mo-cd120.json:** Banked September 11, 2026 from `mo-cd119-baseline.txt` (2022 plan): 115 county-equivalents, 9 split counties. Gate for mo.html remains OPEN pending currency-test against SoS November ballot labels and candidate-continuity audit.


## MAP / PROP A GATE — WAVE 14 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Research advanced; currency-test and continuity audit still incomplete.

### Court posture as of Sept 11, 2026 (free web)

- **U.S. Supreme Court (Sept 11):** Full Court stayed Chief Judge Stephen Clark's Eastern District TRO that had ordered use of the 2025 HB 1 map for November. Stay keeps the Missouri Supreme Court's Sept 3 holding operative: November runs on the **2022** map; Prop A stays on the ballot (Missouri Independent / KTTN Jason Hancock; Votebeat Jessica Huseman et al., Sept 11).
- **8th Circuit (Sept 10):** Declined to stay Clark's TRO; that is why the emergency application returned to Justice Kavanaugh / the full Court (Missouri Independent).
- **Hoskins after the stay:** Directed local election authorities to use the 2022 congressional map; AG Hanaway followed (Missouri Independent).
- **Underlying federal case:** Stay is temporary while the 8th Circuit appeal proceeds; not a merits decision. Re-check before any mo.html build if the 8th Circuit or SCOTUS flips posture again before UOCAVA / ballot-print deadlines (~Sept 19 military/overseas noted in coverage).

### Currency-test (NOT closed)

- Need SoS / LEA **November** sample-ballot district labels by county (or equivalent machine-readable assignment) matched to banked `mo-cd120.json` (2022 plan; 115 counties / 9 splits).
- Free-web check Sept 11: Cole County sample-ballot page still points at the **August 4 primary** combined sample; personalized Nov ballots sit behind SoS voter-outreach lookup (PII). No public statewide Nov district-label table located.
- County clerks publicly confirm they will use 2022 lines (St. Louis County Stream; Boone County Lennon) — administrative confirmation, **not** a label-by-label currency proof.

### Continuity audit (PARTIAL — banked notes only)

August primary used HB 1 lines; November uses 2022 lines. Free-web continuity notes (not a full candidate×district matrix):

- AP estimate: nearly **1 in 4** potential voters statewide (~1M+) may see different House candidate choices than in the primary (PBS / AP).
- St. Louis County: ~**60,000** voters move to a different congressional district (First Alert 4 quoting Rick Stream).
- Boone County: ~**40%** of voters see a different district than August (KOMU quoting Clerk Brianna Lennon); clerk site can show both 2022 and 2025 assignments.
- MO-5 pairing under the numbered district: Cleaver (D, unopposed Aug Dem) vs Brattin (R, Aug winner) remain the certified nominees for District 5, but the **geography** of District 5 shrinks back to the Kansas City–centered 2022 shape (KCUR / AP). Brattin was among federal plaintiffs seeking to keep HB 1 lines.
- Still required before carding House races: residence / filing-district check for **every** August nominee against the 2022 map (who is drawn out, who shares a Nov district with a same-party rival, open seats created by map revert). **Not done from free web today.**

### Prop A ballot language

Already banked Sept 11 (KMBC fair-ballot + AG OP-2026-001). See PROPOSITION A section below.

### Still OPEN before mo.html

1. SoS Nov ballot district-label currency-test vs `mo-cd120.json`.
2. Full August→2022 candidate-continuity matrix.
3. Watch 8th Circuit / further SCOTUS action through UOCAVA window.


## MAP / PROP A GATE - WAVE 15 UPDATE (September 11, 2026, afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete; continuity matrix advanced from free web + 1 Grok lead pass (leads verified against AP/NBC/USA Today/Ballotpedia/Wikipedia where cited below).

### Currency-test (still NOT closed)

- Still need SoS / LEA **November** sample-ballot district labels by county matched to banked `mo-cd120.json` (2022 plan).
- Free-web Sept 11 afternoon: no public statewide Nov district-label table located; personalized Nov ballots remain behind SoS voter lookup (PII). Cole County sample still primary-era when last checked in wave 14.
- Administrative confirmation that LEAs will use 2022 lines continues (Hoskins direction after SCOTUS stay) — **not** a label-by-label currency proof.

### Continuity matrix (PARTIAL — August HB1 nominees → November 2022 geography)

August 4 primaries ran on HB 1 (2025) lines; November uses 2022 lines after Missouri Supreme Court + SCOTUS stay of federal TRO. Independently confirmed Aug nominees (AP/NBC/USA Today/Ballotpedia/Wikipedia):

| Dist | D nominee (Aug) | R nominee (Aug) | Free-web Nov/2022-map notes |
|------|-----------------|-----------------|-----------------------------|
| MO-1 | Wesley Bell (beat Cori Bush ~59%–37%) | Paul Berry | Heavily Dem St. Louis seat; map change impact described as smaller than KC corridor in coverage reviewed |
| MO-2 | Fred Wellman | Ann Wagner (inc.) | St. Louis County suburbs; Wagner renominated |
| MO-3 | Bethany Mann (per Ballotpedia/Grok lead) | Bob Onder (inc.; beat Fraser) | Onder was a federal plaintiff seeking to keep HB 1; ABC17 quotes campaign arguing 2022 geography differs from primary turf |
| MO-4 | Jordan Herrera (named in KC Star mismatch coverage — treat as reporting, not SoS cert) | Mark Alford (inc.) | Herrera cited as facing counties/voters where she was not on the Aug ballot under 2022 revert |
| MO-5 | Emanuel Cleaver (unopposed Dem) | Rick Brattin (~45% R primary) | Clearest continuity story: under 2022 map District 5 shrinks back to KC-centered shape; Brattin remains Cleaver's billed R opponent in coverage; ~59% of potential HB1-D5 voters were new to that version (AP) |
| MO-6 | D nominee not confirmed from free-web summaries this pass | Chris Stigall (R) | Open/shifted seat context in some coverage; **D nominee TBD in this matrix** |
| MO-7 | Missi Hesketh (Ballotpedia) | Eric Burlison (inc.) | SW Missouri; Burlison renominated |
| MO-8 | Chris Reichard (local guide) | Jason Smith (inc.) | SE Missouri; Smith renominated |

Still required before carding House races:

1. Residence / filing-district check for **every** August nominee against the 2022 map (who is drawn out; same-party rivals sharing a Nov district; open seats created by map revert).
2. Party certification / ballot-order confirmation from SoS once Nov ballots are locked (~UOCAVA window).
3. Fill MO-6 D and any contested nominee-name gaps from primary sources, not aggregators alone.

### Prop A

Already banked. Remains on Nov ballot per court posture.

### Still OPEN before mo.html

1. SoS Nov ballot district-label currency-test vs `mo-cd120.json`.
2. Finish candidate×district continuity matrix (esp. MO-6 D; residence checks).
3. Watch 8th Circuit / further SCOTUS action through UOCAVA / ballot-print deadlines.


## MAP / PROP A GATE - WAVE 16 UPDATE (September 11, 2026, late afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Continuity matrix advance — MO-6 D filled

- **MO-6 D nominee = Josh Smead** (architect, Liberty, MO). Confirmed by KCUR (Aug 4 primary night), KCTV5 (Aug 5), and STLPR Politically Speaking (Sept 2, 2026). Beat Matt Levine and Scot Pondelick in the August Democratic primary; faces Chris Stigall (R) in November.
- **Residence note (partial):** Smead is Liberty-based (Clay County). Under the **2025/HB1** map, Clay County was pulled more fully into MO-6; under the **2022** map that governs November, Clay/Platte Kansas City-north areas have historically sat in Graves's MO-6 while Cleaver's MO-5 held most of KC proper — Smead's Liberty residence is inside traditional MO-6 geography on both plans in coverage reviewed, but a parcel-level 2022-map check is still outstanding for the full nominee set.
- Matrix row update: MO-6 | Josh Smead (D) | Chris Stigall (R) | Open seat (Graves retiring); Smead/Stigall pairing reported consistently across KC outlets.

### Currency-test (still NOT closed)

- Still no public statewide November sample-ballot district-label table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). Cole County sample still primary-era when last checked.
- Administrative confirmation that LEAs will use 2022 lines continues — not a label-by-label currency proof.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map (Smead/Liberty advanced; others still pending).
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch further appellate action through ballot-print deadlines.


## MAP / PROP A GATE - WAVE 17 UPDATE (September 11, 2026, late afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Residence / continuity matrix notes (public reporting only)

- **Josh Smead (D-MO-6):** Liberty architect (Clay County). Coverage (STLPR Sept 2; KCUR July 8) treats Liberty/Clay as inside the **2025/HB1** MO-6 that pulled all of Clay/Platte north-KC into MO-6. Under the **2022** map that governs November, MO-5 was described as entirely within Clay and Jackson (Missouri Independent Feb 26, 2026), so parcel-level assignment of a Liberty address still needs a 2022-map check — not closed.
- **Rick Brattin (R-MO-5):** Missouri Independent (Feb 26, 2026) reported he **does not live in the (then-HB1) 5th** and said he would establish a home in-district if he wins; familiarity cites Johnson County / SD-31. On the **2022** map, MO-5 was Clay+Jackson-only — Brattin's residence mismatch risk is therefore map-dependent and still not parcel-proved.
- **Administrative:** Jasper County Clerk relayed SoS instruction to use the **2022** map for November (KZRG Sept 10, 2026) — reinforces LEA compliance, still not a label-by-label currency-test vs `mo-cd120.json`.

### Currency-test (still NOT closed)

- No public statewide November sample-ballot district-label table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII).

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map (Smead/Liberty and Brattin notes advanced; others still pending).
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch further appellate action through ballot-print deadlines.


## MAP / PROP A GATE - WAVE 18 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Administrative / appellate (Sept 11)

- **Hoskins directing 2022 map for November:** Jefferson City News Tribune (Sept 11, 2026) quotes SoS Denny Hoskins: after the U.S. Supreme Court stay, "the only governing court order in effect is from the Missouri Supreme Court" and his office is directing LEAs to use the **2022** congressional map. AG Hanaway: 2022 map governs "for now" outside an "extreme world" further SCOTUS reversal.
- **No second primary:** Hoskins said the state has no intention of re-running a primary on 2022 lines before November (same News Tribune piece).
- Prop A (HB 1 referendum) remains on the November ballot; HB 1 lines were used in August but are not the governing Nov districts under the Missouri Supreme Court order.

### Residence / continuity matrix (still partial)

- Prior wave notes on **Smead (Liberty/Clay → MO-6 on both maps in coverage)** and **Brattin (map-dependent residence risk)** stand.
- Wave 18 did **not** close parcel-level 2022-map checks for the full August nominee set — still required before mo.html.
- Continuity pairing notes from Waves 15–17 (Bell/Berry, Wagner/Wellman, Onder, Alford/Herrera-reported, Cleaver/Brattin, Stigall, Burlison/Hesketh, Smith/Reichard, Smead/Stigall) remain the working matrix; no new nominee swaps sourced this wave.

### Currency-test (still NOT closed)

- Still no public statewide November sample-ballot **district-label** table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). LEA administrative instructions ≠ label-by-label currency proof.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch further appellate action through ballot-print deadlines.


## MAP / PROP A GATE - WAVE 19 UPDATE (September 11, 2026, late afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Currency-test (still NOT closed)

- Re-checked: still no public statewide November sample-ballot **district-label** table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). LEA administrative instructions ≠ label-by-label currency proof.
- Hoskins 2022-map direction (News Tribune Sept 11) from Wave 18 stands; no contradictory LEA statewide label table located this wave.

### Residence / continuity matrix (still partial)

- Prior continuity pairing notes (Bell/Berry, Wagner/Wellman, Onder, Alford/Herrera-reported, Cleaver/Brattin, Stigall, Burlison/Hesketh, Smith/Reichard, Smead/Stigall) unchanged — Wave 19 did not close parcel-level 2022-map residence checks for the full August nominee set.
- **Still required before mo.html.**

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch further appellate action through ballot-print deadlines.


## MAP / PROP A GATE - WAVE 20 UPDATE (September 11, 2026, afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### No new appellate / administrative close this wave

- Wave 19 Hoskins/News Tribune 2022-map directive still the governing administrative line.
- Wave 20 did not locate a public statewide November **district-label** sample-ballot table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). LEA instructions ≠ label-by-label currency proof.

### Residence / continuity matrix

- Still partial. Prior pairing notes stand (Bell/Berry, Wagner/Wellman, Onder, Alford/Herrera-reported, Cleaver/Brattin, Stigall, Burlison/Hesketh, Smith/Reichard, Smead/Stigall).
- Parcel-level 2022-map residence checks for the full August nominee set remain required before mo.html.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch further appellate action through ballot-print deadlines.


## MAP / PROP A GATE - WAVE 21 UPDATE (September 11, 2026, afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Hoskins administrative direction (new this wave)

- Jefferson City News Tribune, Sept 11, 2026 (Jack Wardynski): after U.S. Supreme Court stay of the federal TRO authorizing HB 1 / Missouri First Map, Secretary of State Denny Hoskins said: "Following the United States Supreme Court's stay, the only governing court order in effect is from the Missouri Supreme Court. In accordance with that order, my office is directing local election authorities to use the 2022 congressional map."
- Same-day coverage: Mo. Supreme Court found him in contempt for earlier instructing LEAs to use the 2025 map, then purged contempt after noon reversal; AG Hanaway described 2022 map as governing "for now."
- 8th Circuit hearing still scheduled ~Sept 15; UOCAVA/absentee window ~Sept 19 remains the practical ballot-print deadline watch.

### Currency-test status

- Administrative line now matches the Wave 19 Hoskins/News Tribune 2022-map directive and the Mo. Supreme Court order — **progress**, but still not a completed currency-test.
- Still missing: a public statewide November **district-label** sample-ballot table matched county-by-county to `mo-cd120.json` (personalized Nov ballots remain behind SoS voter lookup / PII).

### Residence / continuity matrix

- Still partial. Prior pairing notes stand. Parcel-level 2022-map residence checks for the full August nominee set remain required before mo.html.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json` (Hoskins LEA directive helps but does not finish the table).
2. Residence / filing-district check for **every** August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch 8th Circuit (~Sept 15) and further appellate action through ballot-print deadlines.


## MAP / PROP A GATE - WAVE 22 UPDATE (September 11, 2026, afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Currency-test status

- No new statewide district-label sample-ballot table vs `mo-cd120.json` this wave.
- Hoskins Sep 11 News Tribune LEA directive to use the 2022 map (after SCOTUS stay / Mo. Supreme Court order) remains the latest administrative line — progress toward currency, not completion.

### Residence / continuity matrix

- Still partial. Parcel-level 2022-map residence checks for the full August nominee set remain required before mo.html.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for every August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA; 8th Circuit ~Sept 15 watch).


## MAP / PROP A GATE - WAVE 23 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Administrative / appellate (Sept 11, additional corroboration)

- Votebeat (Sept 11, 2026) and The Missouri Times: U.S. Supreme Court stayed E.D. Mo. Judge Stephen Clark's order that would have forced the 2025/HB 1 map for November. Hoskins: after the stay, "the only governing court order in effect is from the Missouri Supreme Court" and LEAs are directed to the **2022** map.
- Prop A (HB 1 referendum) remains on the November ballot; HB 1 lines are not the governing Nov districts under the Missouri Supreme Court order.
- No second primary. UOCAVA/military ballots were the near-term print deadline cited in coverage.

### Currency-test (still NOT closed)

- Still no public statewide November sample-ballot **district-label** table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). LEA administrative instructions ≠ label-by-label currency proof.

### Residence / continuity matrix (still partial)

- Parcel-level 2022-map checks for the full August nominee set remain required before mo.html.
- Continuity pairing notes from Waves 15–18 stand; no new nominee swaps sourced this wave.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch further appellate action through ballot-print deadlines.


## MAP / PROP A GATE - WAVE 24 UPDATE (September 11, 2026, late afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Administrative / appellate (Sept 11)

- Votebeat + Jefferson City News Tribune: after U.S. Supreme Court stay of E.D. Mo. Judge Clark's order, Hoskins publicly directed LEAs to the **2022** map — "the only governing court order in effect is from the Missouri Supreme Court."
- Prop A (HB 1 referendum) remains on the November ballot; HB 1 lines are not the governing Nov districts under the Missouri Supreme Court order.
- News Tribune notes 8th Circuit hearing scheduled Sept 15; UOCAVA/absentee print deadline cited around Sept 19. No second primary.

### Currency-test (still NOT closed)

- Still no public statewide November sample-ballot **district-label** table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). LEA administrative instructions ≠ label-by-label currency proof.

### Residence / continuity matrix (still partial)

- Parcel-level 2022-map checks for the full August nominee set remain required before mo.html.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch 8th Circuit / further appellate action through ballot-print deadlines.

## MAP / PROP A GATE - WAVE 26 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Administrative / appellate (Wave 26 re-check)

- Prior Wave 24 posture stands: after U.S. Supreme Court stay of E.D. Mo. Judge Clark's order, Hoskins directed LEAs to the **2022** map (Votebeat / News Tribune / PBS-AP Sept 10–11).
- News Tribune: **8th Circuit hearing scheduled Sept 15**; UOCAVA/absentee print deadline cited around Sept 19. No second primary.
- Prop A (HB 1 referendum) remains on the November ballot; HB 1 lines are not the governing Nov districts under the Missouri Supreme Court order.

### Currency-test (still NOT closed)

- Still no public statewide November sample-ballot **district-label** table matched to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). LEA administrative instructions ≠ label-by-label currency proof.
- St. Louis County (~60k voters shifting districts vs August) and similar LEA notes corroborate map swap but do not substitute for a statewide label table.

### Residence / continuity matrix (still partial)

- Parcel-level 2022-map checks for the full August nominee set remain required before mo.html.
- Continuity pairing notes from Waves 15–18 stand; no new nominee swaps sourced this wave.

### Still OPEN before mo.html

1. SoS / LEA Nov district-label currency-test vs `mo-cd120.json`.
2. Residence / filing-district check for **every** August nominee against the 2022 map.
3. Party certification / ballot-order once Nov ballots lock (~UOCAVA).
4. Watch **Sept 15 8th Circuit** / further appellate action through ballot-print deadlines.
## MAP / PROP A GATE — WAVE 27 UPDATE (September 11, 2026, late afternoon ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started.

### Currency-test (still NOT closed)
- Free-web Wave 27: Pike County clerk sample-ballot page lists **November 3, 2026 General Election — 0 files**. Personalized Nov ballots remain behind SoS voter lookup (PII). No public statewide Nov district-label table located.
- Votebeat (Sept 11) and county clerks (Boone Lennon; Jasper Davis; St. Louis Stream) confirm administrative direction to use the **2022** map; that is operational confirmation, not a label-by-label currency proof vs `mo-cd120.json`.

### Continuity audit (advanced — banked from SoS certified list)
Downloaded Wave 27: `tools/banked/mo-build/mo-certified-w27.pdf` (SoS `2026GeneralElectionCertifiedCandidates.pdf`, certified Aug 25, 2026 by Denny Hoskins). Machine-readable extract in `mo-certified-w27.txt`.

**U.S. House nominees by district NUMBER (from the Aug 25 certificate):**

| Dist | Republican | Democrat | Third / Independent (as listed) |
| --- | --- | --- | --- |
| 1 | Paul Berry III | Wesley Bell | Tom Schmitz |
| 2 | Ann Wagner | Fred Wellman | Brandon Coulter Daugherty |
| 3 | Bob Onder | Bethany E Mann | Jim Higgins |
| 4 | Mark Alford | Jordan Herrera | Thomas Holbrook |
| 5 | Rick Brattin | Emanuel Cleaver, II | Randall (Randy) Langkraehr |
| 6 | Chris Stigall | Josh Smead | Andy Maidment |
| 7 | Eric W. Burlison | Missi Hesketh | Kevin Craig |
| 8 | Jason T. Smith | Chris Reichard | Rebecca Sharpe Lombard |

**Still required before carding House races:** residence / filing-district check for every August nominee against the **2022** map geography (who is drawn out of the Nov district that shares their district NUMBER, who shares a Nov district with a same-party rival). District NUMBERS on the certificate do not prove 2022-geography continuity after the HB 1 primary. **Not closed from free web today.**

### Court / UOCAVA watch
- Underlying 8th Circuit appeal still live after SCOTUS stay of Clark TRO; UOCAVA / overseas ballot window ~Sept 19 per prior coverage. Re-check before any mo.html build.


## MAP / PROP A GATE — WAVE 28 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Continuity audit advanced materially against banked `mo-cd120.json` / `mo-cd119-baseline.txt` (2022 plan) + free-web residence notes; currency-test still incomplete.

### Court / administrative (re-check; no flip)
- Prior waves stand: after U.S. Supreme Court stay of E.D. Mo. Judge Clark's TRO, SoS Hoskins directed LEAs to the **2022** map (Votebeat / News Tribune / PBS-AP Sept 10–11). Prop A remains on Nov ballot. No second primary. 8th Circuit / UOCAVA watch (~Sept 15–19) still live.
- Votebeat (Sept 11): counties had both map configs ready in the statewide voter system; the blocker was **which box to check**, not a missing GIS rebuild — still **not** a label-by-label currency table vs `mo-cd120.json`.

### Currency-test (still NOT closed)
- Still no public statewide November sample-ballot **district-label** table matched county-by-county to `mo-cd120.json`.
- Personalized Nov ballots remain behind SoS voter lookup (PII). LEA admin instructions ≠ currency proof.

### Continuity matrix vs 2022 geography (Wave 28 — free web)

Banked 2022 plan geography (from `mo-cd119-baseline.txt` / `mo-cd120.json`): **MO-5 = Clay + Jackson only** (both split with neighboring districts); **MO-4** includes whole **Cass**; **MO-6** includes Liberty and Holt (Clay portions) per Wikipedia 118th composition; **MO-8** includes **Arnold** (Jefferson); **MO-3** includes **St. Peters** (St. Charles); **MO-2** includes **Wildwood** / Ballwin (St. Louis County portion); **MO-7** includes Forsyth/Taney; **MO-1** = St. Louis City + northern St. Louis County portion.

Aug 25 SoS-certified House nominees by **district NUMBER** (Wave 27 certificate) mapped to **2022 residence notes**:

| Dist | R / D / 3rd (cert) | Residence note (free web) | 2022-map fit (vs district NUMBER) |
| --- | --- | --- | --- |
| 1 | Paul Berry III / Wesley Bell / Tom Schmitz | Bell: Clayton (Wikipedia delegation; SoS filing Amherst Ave St. Louis 63130). Berry: SoS mailing Big Bend Blvd St. Louis 63117. | **Likely OK** for Bell (Clayton historically MO-1). Berry mailing is St. Louis City/County corridor — MO-1-compatible, not parcel-proved. |
| 2 | Ann Wagner / Fred Wellman / Brandon Coulter Daugherty | Wagner: Ballwin. Wellman: **Wildwood** (campaign bio; KCUR/STLPR). | **OK** — Wildwood/Ballwin sit in 2022 MO-2 (Wikipedia MO-2). |
| 3 | Bob Onder / Bethany E Mann / Jim Higgins | Onder: Lake St. Louis. Mann: **St. Peters** (campaign site; ABC17/KOMU). | **OK for Mann** — Wikipedia MO-3 lists St. Peters wholly in MO-3. Lake St. Louis is listed as split 2/3 — Onder city **not parcel-proved** to the MO-3 side. |
| 4 | Mark Alford / Jordan Herrera / Thomas Holbrook | Alford: **Lake Winnebago** (Cass County) per Wikipedia delegation. Herrera: KC-area Dem; KC Star (Aug 6) primary win under HB1 lines; still billed vs Alford for Dist 4. | **OK for Alford** — Cass wholly MO-4 on 2022 plan. **Herrera geography mismatch risk:** Aug HB1 MO-4 ≠ Nov 2022 MO-4 county set (counties/voters where he was not on Aug ballot). Still on Aug 25 certificate for Dist 4 NUMBER. |
| 5 | Rick Brattin / Emanuel Cleaver II / Randall Langkraehr | Cleaver: Kansas City (incumbent). **Brattin: Harrisonville, Cass County** (Missouri Independent Feb 26, 2026; Sedalia Democrat; KSHB). Said he does **not** live in (then-HB1) MO-5 and would move if elected; Cass was inside HB1 MO-5 but is **outside** 2022 MO-5. | **Cleaver OK** (KC in 2022 MO-5). **Brattin CONTINUITY FLAG:** Cass County = **2022 MO-4**, not MO-5. Remains certified R nominee for District **NUMBER** 5; in-district residence is not a federal ballot requirement — but carding must not imply he lives in 2022 MO-5. Nov MO-5 geography shrinks back to Clay+Jackson. |
| 6 | Chris Stigall / Josh Smead / Andy Maidment | Smead: **Liberty, Clay County** (KQ2; votesmead.com; SoS filing Progress Dr Liberty 64069). Stigall: **Holt, MO** (Clay/Clinton city; Trenton Telegraph; stigallforcongress.com; KC Star). | **OK** — Wikipedia MO-6 118th list includes Liberty and Holt in Clay portion of MO-6. Open seat (Graves retiring). |
| 7 | Eric W. Burlison / Missi Hesketh / Kevin Craig | Burlison: Ozark (Christian County). Hesketh: SoS mailing Forsyth 65653 (Taney). | **OK** — Christian + Taney wholly in 2022 MO-7. |
| 8 | Jason T. Smith / Chris Reichard / Rebecca Sharpe Lombard | Smith: Salem (Dent). Reichard: **Arnold** (Jefferson) — Leader Paper Aug 18, 2026; SoS filing Hazel Dr Arnold 63010. | **OK** — Wikipedia MO-8 118th composition lists Arnold; Leader Paper: eastern Jefferson incl. Arnold is MO-8. (MO-8 lines largely unchanged HB1↔2022 per Wikipedia footnote.) |

### What this means for the gate
- Continuity audit is **advanced but not closed**: Brattin Cass→MO-4-not-5 is the clearest residence/geography dent; Herrera Aug-vs-Nov MO-4 county mismatch remains a reporting-level continuity risk; Onder Lake St. Louis split still needs a parcel/VTD check.
- **Currency-test remains the hard blocker** for closing the gate (no public Nov district-label table).
- **Do NOT start mo.html.** Prefer finishing the research bank. Exact remaining blockers before mo.html:
  1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json`.
  2. Finish parcel/VTD residence checks (priority: Brattin already flagged; Onder Lake St. Louis split; remaining third-party nominees).
  3. Party certification / ballot-order lock (~UOCAVA) confirming Aug 25 certificate names still govern Nov under 2022 lines.
  4. Watch 8th Circuit / further appellate action through ballot-print deadlines.

### Sources added this wave
1. Missouri Independent (Rudi Keller), Feb 26, 2026 — Brattin Harrisonville / does not live in (HB1) 5th; 2022 MO-5 = Clay+Jackson only.
2. Sedalia Democrat — Brattin resides Cass County; would move to Johnson County if elected (HB1-era framing).
3. KSHB — Brattin of Harrisonville after map ruling.
4. Wikipedia — Missouri congressional delegation residences; MO-3 / MO-6 / MO-8 118th composition lists (St. Peters; Liberty/Holt; Arnold).
5. KQ2 / votesmead.com — Smead Liberty since 2017.
6. Trenton Telegraph / stigallforcongress.com — Stigall Holt; born Richmond (Ray).
7. Wellman campaign / KCUR / STLPR — Wellman Wildwood.
8. Leader Paper (Aug 18, 2026) — Reichard Arnold vs Smith MO-8.
9. Votebeat (Sept 11, 2026) — dual-map admin readiness; SCOTUS stay → 2022 map.
10. SoS Aug 25, 2026 certified list (already banked `mo-certified-w27.pdf`).


## MAP / PROP A GATE — WAVE 29 UPDATE (September 11, 2026, late evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Continuity notes deepened (Herrera / Onder / Brattin); currency-test still incomplete.

### Currency-test (still NOT closed)
- Boone County Clerk elections page: "View My Sample Ballot" / "Polling Location & Sample Ballot" resolve to **personalized voter-lookup servlets** (`report.boonemo.gov/mrcjava/servlet/...`) — not a public Nov district-label table.
- Jackson County Election Board "On the Ballot" page is a **voter-ID lookup form** plus Sept 1 special-recall notice; no posted Nov sample ballots with U.S. House district labels.
- St. Louis County / Pike LEA fetches: Cloudflare challenge / DNS miss this pass. Personalized SoS voter lookup remains PII-gated.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity deepen — free web (Wave 29)

**Brattin (Dist 5 NUMBER / Cass residence):** prior Wave 28 flag stands — Harrisonville, Cass County = **2022 MO-4** per `mo-cd119-baseline.txt` (Cass wholly CD 4). Remains Aug 25 certificate R nominee for District **NUMBER** 5. Do not imply 2022 MO-5 residence.

**Herrera (Dist 4 NUMBER):**
- Sedalia Democrat (Dec 26, 2025): Jordan Herrera of Kansas City running for the **newly drawn Fourth**.
- Campaign site jordanjherrera.com (fetched Wave 29): bio still says "running for Congress to bring that same steadiness to **Missouri's 5th**" — copy not updated after map flip / certificate.
- Contact page: mailing **601 E. 12th St. PO Box 15308 Kansas City MO 64106**; office **103 South Jefferson St. Raymore MO 64083**.
- Raymore is in **Cass County** → wholly **2022 MO-4** per banked baseline. KC mailing is Jackson County (split 4/5/6 on 2022 plan) — residence parcel still not proved; office address is MO-4-compatible.
- Continuity risk remains: Aug HB1 MO-4 ≠ Nov 2022 MO-4 county set for voters who never saw him on their Aug ballot; site branding still says 5th.

**Onder (Dist 3 NUMBER / Lake St. Louis):**
- Missourinet (July 30, 2024): while running for MO-3 he said he then lived in the **Second District** after moving to **Augusta** late 2023; planned to buy in the Third.
- House.gov About (fetched via free web Wave 29): "reside in **St. Charles County**" only — no street/city; Cottleville district office listed.
- Wikipedia / CICLT still list Lake St. Louis; Lake St. Louis is a known **MO-2 / MO-3 split city** on the 2022 plan.
- **Parcel/VTD still NOT closed** — city-level labels conflict across sources (Augusta 2024 self-report vs Lake St. Louis shorthand vs county-only House bio).

### Court / UOCAVA
- No flip from Wave 28: 2022 map direction after SCOTUS stay; 8th Circuit / ~Sept 15–19 UOCAVA watch still live.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines.
4. Watch 8th Circuit / further appellate action through ballot-print deadlines.

### Sources added this wave
1. jordanjherrera.com home + /contact (Wave 29 fetch) — "Missouri's 5th" bio copy; Raymore office; KC mailing.
2. Sedalia Democrat, Dec 26, 2025 — Herrera of Kansas City for newly drawn Fourth.
3. Missourinet, July 30, 2024 — Onder Augusta / then-MO-2 residence; plan to buy in MO-3.
4. onder.house.gov/about — St. Charles County residence only; Cottleville office.
5. Boone County Clerk elections page — personalized sample-ballot servlets only.
6. jcebmo.org/election-information/on-the-ballot/ — voter lookup; no public Nov CD sample.
7. `mo-cd119-baseline.txt` — Cass County wholly CD 4 (re-confirmed).


## MAP / PROP A GATE — WAVE 30 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Currency-test (still NOT closed)
- **Cole County** sample-ballots page still posts only the **August 4, 2026 primary** combined sample, then points voters to the SoS personalized "Check Your Voter Registration" lookup (PII).
- **Boone County Clerk** elections page: sample ballots are **mailed ~two weeks before** the election; online lookup remains personalized. ABC17 (Sept 10, 2026): Clerk Lennon proceeding on the **2022 map**; watching a **Sept 17** briefing (two days before UOCAVA ballots). KOMU: ~40% of Boone voters will see a different CD in November than in August; clerk site can show 2022 vs 2025 assignments but that is **voter-lookup**, not a public table.
- **Jackson County Election Board** `jcebmo.org/sample-ballot/`: first-name / last-name / DOB (and PIN) lookup — not a public Nov district-label PDF.
- **St. Louis County**: Sample Ballot Lookup is address-gated. St. Louis American (Sept 8): county **Sept 1 ballot-content report is informational, not a final sample ballot**. The August 2026 FIO PDF on extcontent.stlouisco.com/BOE/ is the **PRIMARY** content report (lists August GOP names such as Pfeifer/Fraser, not Nov nominees).
- **St. Louis city**: St. Louis American — Board had **not posted** its November sample ballot as of Sept 7.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- **Brattin (Dist 5 NUMBER / Harrisonville, Cass):** reconfirmed Wave 30 (Missouri Independent Aug 4; KCUR Aug 4; Ballotpedia). senate.mo.gov bio: native Cass / Greenwood; "currently resides on his 40-acre hunting paradise" — **no street**. Cass wholly **2022 MO-4** per `mo-cd119-baseline.txt`. Continuity flag stands; do not imply 2022 MO-5 residence.
- **Herrera (Dist 4 NUMBER):** no new street/parcel this pass. Wave 29 Raymore office (Cass → 2022 MO-4) + "Missouri's 5th" site copy still the last banked facts.
- **Onder (Dist 3 NUMBER):** no new street/parcel. Lake St. Louis remains a known 2022 MO-2/MO-3 split city; House.gov still county-only (St. Charles).

### Court / UOCAVA
- ABC17 Sept 10: Boone following 2022 map after Hoskins directive / Mo. Supreme Court; federal Judge Clark 2025-map TRO still in the mix; **briefing ~Sept 17**; UOCAVA ~Sept 19 watch still live.
- St. Louis American lists Dist 1/2/3 Nov U.S. House names matching the Aug 25 certificate — **news reporting, not an LEA sample-ballot table.**

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines.
4. Watch 8th Circuit / Sept 17 briefing / UOCAVA through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots — August primary sample only; SoS PII lookup.
2. boonemo.gov/clerk/elections/ — mailed sample ~two weeks before; no public Nov CD table.
3. ABC17, Sept 10, 2026 — Boone using 2022 map; Sept 17 briefing / UOCAVA watch.
4. KOMU — ~40% of Boone voters change CD Aug→Nov; personalized 2022 vs 2025 lookup.
5. jcebmo.org/sample-ballot/ — name/DOB lookup.
6. St. Louis American, Sept 8, 2026 — city sample not posted as of Sept 7; county Sept 1 report not a final sample; Dist 1/2/3 names listed.
7. extcontent.stlouisco.com/BOE/FIO/August2026FIO.pdf — August PRIMARY FIO, not November.
8. Missouri Independent / KCUR Aug 4, 2026; Ballotpedia; senate.mo.gov/Brattin — Harrisonville / Cass / no street.


## MAP / PROP A GATE - WAVE 31 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Currency-test (still NOT closed)
- **Cole County** sample-ballots page still posts only the **August 4, 2026 primary** combined sample, then points voters to the SoS personalized "Check Your Voter Registration" lookup (PII). Re-fetched Wave 31.
- **Boone County Clerk** elections page: still no public Nov CD sample-ballot PDF/table; prior ABC17/KOMU reporting (2022 map; mailed samples ~two weeks before; personalized 2022 vs 2025 lookup) remains the last public guidance. Wave 31 fetch of boonemo.gov/clerk/elections/ succeeded; no new district-label table.
- **Jackson County Election Board** `jcebmo.org/sample-ballot/`: still first-name / last-name / DOB (and PIN) lookup — not a public Nov district-label PDF. Re-fetched Wave 31.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- **Brattin / Herrera / Onder:** no new street/parcel unlock this pass. Prior banked notes stand (Brattin Cass / Harrisonville → 2022 MO-4 flag; Herrera Raymore office + 5th-copy; Onder Lake St. Louis / Augusta split watch).

### Court / UOCAVA
- Sept 17 federal briefing / UOCAVA ~Sept 19 watch still live (ABC17 Sept 10). No LEA public Nov CD table unlocked by that watch as of Wave 31 evening.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines.
4. Watch 8th Circuit / Sept 17 briefing / UOCAVA through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots — August primary sample only (Wave 31 re-fetch).
2. jcebmo.org/sample-ballot/ — name/DOB lookup (Wave 31 re-fetch).
3. boonemo.gov/clerk/elections/ — no public Nov CD table (Wave 31 re-fetch).


## MAP / PROP A GATE - WAVE 32 UPDATE (September 11, 2026, late ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Currency-test (still NOT closed)
- **Boone County:** ABC17 Sept 10 + KOMU — Clerk Brianna Lennon proceeding on **2022 map** per Mo. Supreme Court / Hoskins purge-of-contempt directive; mailed sample ballots still ~two weeks before Election Day; personalized 2022 vs 2025 lookup remains the public path. No public Nov CD sample-ballot PDF/table unlocked this pass. boonemo.gov/clerk/elections/ still describes mailed samples, not a posted Nov district-label table. Wave 32 free-web recheck.
- **Cole / Jackson / STL:** prior Wave 31 findings stand (Cole August-only sample; Jackson name/DOB; STL not posted as of prior pass). No new public Nov CD label PDF found Wave 32.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- **Brattin / Herrera / Onder:** no new street/parcel unlock this pass. Prior banked notes stand (Brattin Cass / Harrisonville → 2022 MO-4 flag; Herrera Raymore office + 5th-copy; Onder Lake St. Louis / Augusta split watch).

### Court / UOCAVA
- Federal briefing Sept 17 / UOCAVA ~Sept 19 watch still live (ABC17 Sept 10). Boone preparing either map but currently printing to 2022. No LEA public Nov CD table unlocked by Wave 32.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines.
4. Watch 8th Circuit / Sept 17 briefing / UOCAVA through ballot-print deadlines.

### Sources added this wave
1. abc17news.com Sept 10 Boone LEA 2022-map preparation + Sept 17 briefing watch.
2. komu.com Boone 2022-map return; ~40% of Boone voters see a different CD than August; mailed samples ~2 weeks out.
3. boonemo.gov/clerk/elections/ — mailed sample-ballot practice restated (Wave 32).


## MAP / PROP A GATE - WAVE 33 UPDATE (September 11, 2026, late ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Currency-test (still NOT closed)
- **Boone County:** Wave 33 free-web recheck — Boone Clerk voter lookup still says sample-ballot info appears **five to six weeks before** each election (report.boonecountymo.org); KOMU/ABC17 prior coverage still governs (2022 map for Nov; mailed samples ~2 weeks out). No public Nov CD sample-ballot PDF/table unlocked this pass.
- **Cole County:** colecounty.org Sample Ballots page still points to the **August 4, 2026 Combined Sample Ballot** and redirects personalized Nov lookups to SoS voter-registration PII flow (Wave 33).
- **Jackson / STL:** Jackson JCEB sample-ballot path remains name/DOB lookup; no new public Nov CD label PDF found Wave 33.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- **Brattin / Herrera / Onder:** no new street/parcel unlock this pass. Prior banked notes stand (Brattin Cass / Harrisonville → 2022 MO-4 flag; Herrera Raymore office + 5th-copy; Onder Lake St. Louis / Augusta split watch).

### Court / UOCAVA
- Federal briefing Sept 17 / UOCAVA ~Sept 19 watch still live from prior ABC17 coverage. No LEA public Nov CD table unlocked by Wave 33.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines.
4. Watch 8th Circuit / Sept 17 briefing / UOCAVA through ballot-print deadlines.

### Sources added this wave
1. report.boonecountymo.org voter lookup — sample ballots 5–6 weeks before election (Wave 33).
2. colecounty.org/441/Sample-Ballots — still August Combined Sample + SoS PII lookup (Wave 33).
3. jcebmo.org/sample-ballot/ — name/DOB gated (Wave 33 reconfirm).


## MAP / PROP A GATE - WAVE 34 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Currency-test (still NOT closed)
- **Boone County / map posture:** ABC17 Sept 10, 2026 — Boone Clerk Brianna Lennon says the office is preparing November ballots on the **2022 congressional map** per Missouri Supreme Court directive that the 2025 "Missouri First" map is not law; SoS Hoskins ordered 2022-map use. Federal Eastern District Judge Stephen Clark had ordered 2025-map use (primary votes argument); briefing set **Sept 17** (day before UOCAVA ballots). No public Nov CD sample-ballot PDF/table unlocked this pass.
- **Cole County:** colecounty.org/441/Sample-Ballots still shows **August 4, 2026 Combined Sample Ballot** only; personalized Nov lookups still via SoS PII voter-registration flow (Wave 34 free-web recheck).
- **Jackson / STL:** JCEB sample-ballot path remains name/DOB lookup; no new public Nov CD label PDF found Wave 34.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- **Brattin / Herrera / Onder:** no new street/parcel unlock this pass. Prior banked notes stand (Brattin Cass / Harrisonville → 2022 MO-4 flag; Herrera Raymore office + 5th-copy; Onder Lake St. Louis / Augusta split watch).

### Court / UOCAVA
- Sept 17 federal briefing / UOCAVA ~Sept 18–19 watch still live (ABC17 Sept 10). Gate stays OPEN until a public non-PII Nov CD label table exists.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines.
4. Watch Sept 17 briefing / UOCAVA through ballot-print deadlines.

### Sources added this wave
1. abc17news.com Sept 10, 2026 — Boone LEA preparing 2022-map Nov ballots; Sept 17 briefing / UOCAVA watch.
2. colecounty.org/441/Sample-Ballots — still August Combined Sample + SoS PII lookup (Wave 34).
3. jcebmo.org/sample-ballot/ — name/DOB gated (Wave 34 reconfirm).


## MAP / PROP A GATE - WAVE 35 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Court posture (updated this pass)
- **U.S. Supreme Court (Sept 10, 2026):** unsigned stay of Eastern District Judge Stephen Clark's Sept 8 TRO that had ordered HB 1 / 2025-map use — Missouri Times / KCTV / SCOTUSblog coverage. Effect: Missouri Supreme Court's Sept 3 ruling again governs → **2022 congressional map for November for now**.
- **Missouri Supreme Court (Sept 10):** held SoS Hoskins in contempt for directing LEAs to use HB 1 under Clark's order, then found he purged contempt after SCOTUS stay + redirect to 2022 map (Missouri Times).
- **8th Circuit:** expedited appeal of Clark's order — simultaneous briefs due **Sept 15**; remote oral arguments **Sept 17, 10 a.m.** (Missouri Times / KCTV). Gate watch remains live through UOCAVA (~Sept 18–19) and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot.

### Currency-test (still NOT closed)
- **Boone County:** ABC17 Sept 10 still the governing LEA posture — preparing Nov ballots on **2022 map** pending a clear order; watching Sept 17. Voter lookup (report.boonemo.gov) remains name/DOB gated; no public countywide Nov CD label PDF unlocked Wave 35.
- **Cole County:** colecounty.org/441/Sample-Ballots **still** shows only **August 4, 2026 Combined Sample Ballot**; personalized Nov lookups still via SoS PII voter-registration flow (Wave 35 free-web reconfirm). News-Tribune Sept 10 notes Cole Clerk map confusion / dual-race idea — not a public CD table.
- **Jackson / STL:** no new public Nov CD label PDF found Wave 35.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- **Brattin / Herrera / Onder:** no new street/parcel unlock this pass. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA through ballot-print deadlines.

### Sources added this wave
1. themissouritimes.com Sept 10, 2026 — SCOTUS stay of Clark TRO; MoSC contempt/purge; 8th Cir briefs Sept 15 / args Sept 17.
2. kctv5.com Sept 10, 2026 — Kehoe/Hoskins; 8th Cir emergency hearing Sept 17.
3. colecounty.org/441/Sample-Ballots — still August Combined Sample + SoS PII lookup (Wave 35).
4. abc17news.com Sept 10 — Boone 2022-map prep continuity (reconfirm).


## MAP / PROP A GATE - WAVE 36 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Court posture (updated this pass)
- **U.S. Supreme Court (Sept 10, 2026):** unsigned stay of Eastern District Judge Stephen Clark's Sept 8 TRO still governs — 2022 congressional map for November for now (Missouri Times / Votebeat Sept 11 / First Alert 4).
- **8th Circuit:** expedited appeal of Clark's order — simultaneous briefs still due **Sept 15**; remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No Wave 36 public indication briefs have posted early.
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (45/46 days before Nov 3; Votebeat / KCTV / Missourinet). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot.
- **St. Louis County LEA (First Alert 4, Sept 10):** Rick Stream said officials were advised to prepare Nov ballots on the 2022 lines; ~60,000 STL County voters would be in a different CD than the August primary.

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** shows only **August 4, 2026 Combined Sample Ballot**; personalized Nov lookups still via SoS PII voter-registration flow (Wave 36 free-web reconfirm).
- **Boone County:** ABC17 / KOMU still the governing LEA posture — preparing Nov ballots on **2022 map**; voter lookup remains name/DOB gated; no public countywide Nov CD label PDF unlocked Wave 36.
- **Jackson / STL city:** St. Louis American Sept recap is a news rundown, not a public countywide Nov CD-label table matched to mo-cd120.json. STL County August FIO PDF is an August primary content report, not a November sample.
- **SoS certified-candidates PDF** lists Nov U.S. House nominees by district number — that is a candidate list, **not** a precinct/CD label table.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- **Brattin / Herrera / Onder:** no new street/parcel unlock this pass. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin flagged; Onder Lake St. Louis / Augusta split; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. votebeat.org Sept 11, 2026 — SCOTUS stay timing vs UOCAVA; 2022 map for now.
2. firstalert4.com Sept 10, 2026 — STL County LEA preparing 2022-map Nov ballots; ~60k CD switch.
3. colecounty.org/441/Sample-Ballots — still August Combined Sample + SoS PII lookup (Wave 36).
4. themissouritimes.com Sept 10 — 8th Cir briefs Sept 15 / args Sept 17 (reconfirm).


## MAP / PROP A GATE - WAVE 37 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Court posture (Wave 37 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** unsigned stay of Judge Clark's Sept 8 TRO still governs - 2022 congressional map for November for now (Missouri Times / Votebeat / News Tribune).
- **8th Circuit:** expedited appeal of Clark's order - simultaneous briefs still due **Sept 15**; remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No Wave 37 public indication briefs have posted early (today is still Sept 11).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Hoskins:** directing LEAs to use the 2022 map after the SCOTUS stay (STLPR / News Tribune).
- **Prop A / referendum** on HB 1 remains on the November ballot.

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (DocumentCenter/View/14318); no November sample PDF unlocked Wave 37 live fetch.
- **Boone County:** KOMU / ABC17 posture unchanged - preparing Nov ballots on **2022 map**; ~40% of Boone voters see a different CD than August; voter lookup remains name/DOB gated; no public countywide Nov CD label PDF.
- **Jackson / STL:** news rundowns (KSHB / First Alert 4) are not a public countywide Nov CD-label table matched to mo-cd120.json.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. themissouritimes.com - SCOTUS stay; 8th Cir briefs Sept 15 / args Sept 17.
2. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 37).
3. komu.com Boone County 2022-map prep / ~40% CD switch.
4. votebeat.org Sept 11 - UOCAVA timing vs SCOTUS stay.


## MAP / PROP A GATE - WAVE 38 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed.

### Court posture (Wave 38 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay / rejection of emergency push to force the 2025 map — Votebeat Sept 11 and Missouri Times ("Supreme Court Passes on New Congressional Map") still treat the **2022 map** as governing November for now.
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (prior Missouri Times reporting). Today is still Sept 11 — briefs have not posted early on the public free web this pass.
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Hoskins / LEAs:** directed to prepare November on the 2022 map after the SCOTUS action (Votebeat).
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot**; no November sample PDF unlocked Wave 38 live fetch.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass (voter lookup remains PII-gated where checked previously).
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. votebeat.org Sept 11, 2026 - SCOTUS clears 2022 map path; UOCAVA timing.
2. themissouritimes.com - "Supreme Court Passes on New Congressional Map" (Sept 10).
3. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 38 live fetch).
4. ballotpedia.org Missouri Proposition A page - 2022 map for Nov; Prop A on ballot.


## MAP / PROP A GATE - WAVE 39 UPDATE (September 11, 2026, late evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 — Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet.

### Court posture (Wave 39 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay / rejection of emergency push to force the 2025/HB 1 map — Votebeat / Missouri Times / SCOTUSblog still treat the **2022 map** as governing November for now.
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No early public posting of those briefs located Wave 39 free-web pass.
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Hoskins / LEAs:** directed to prepare November on the 2022 map after the SCOTUS action (Votebeat / prior Wave 38 notes).
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 39 live fetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass (voter lookup remains PII-gated where checked previously).
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 39 live fetch).
2. themissouritimes.com - 8th Cir briefs Sept 15 / args Sept 17 calendar (reconfirm).
3. votebeat.org / SCOTUSblog - SCOTUS Sept 10 path keeps 2022 map for now (reconfirm).
4. ballotpedia.org Missouri Proposition A page - Prop A still on Nov ballot.


## MAP / PROP A GATE - WAVE 40 UPDATE (September 11, 2026, late evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet.

### Court posture (Wave 40 free-web reconfirm + Sept 10-11 developments)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO granted (26A326 People Not Politicians v. Onder) — 2022 map governs November for now (SCOTUSblog / CNN / Bloomberg Law). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** found Secretary Hoskins in civil contempt for the Sept 8 HB 1 email directive, then held he purged contempt by directing LEAs back to the **2022 map** (News-Leader Sept 11; SCOTUSblog update; electionlawblog contempt order).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times prior calendar; no public posting of those briefs located Wave 40 — they are not due yet).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 40 live fetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass (voter lookup remains PII-gated where checked previously).
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 40 live fetch).
2. scotusblog.com Sept 10 - SCOTUS stay of Clark TRO; Hoskins contempt purged same day.
3. news-leader.com Sept 11 - Hoskins contempt / purged; 2022 map directive.
4. themissouritimes.com - 8th Cir briefs Sept 15 / args Sept 17 calendar (reconfirm; briefs not yet public).
5. weball26.zip fresh pull Wave 40 - Cinquemani H6NY16173 still absent; Christy H6CO01331 still $2,056.95/$354.16/$1,702.79 through June 30.


## MAP / PROP A GATE - WAVE 41 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet.

### Court posture (Wave 41 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO remains in force — 2022 map governs November for now (SCOTUSblog / Missouri Times / prior Wave 40 notes). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** Hoskins contempt purged after directing LEAs back to the **2022 map** (News-Leader / Missouri Times).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No public posting of those briefs located Wave 41 — they are not due yet.
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes / Hoskins stay filings). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 41 live fetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 41 live fetch).
2. themissouritimes.com - SCOTUS stay / Hoskins purge / 8th Cir briefs Sept 15 / args Sept 17 calendar (reconfirm).
3. weball26.zip fresh pull Wave 41 - Cinquemani H6NY16173 still absent; Christy H6CO01331 still $2,056.95/$354.16/$1,702.79 through June 30; Cotten/Houston/Yoshi/Cease/White/Stinnett/Nieves/Glass/Collins/Barrington/Blau/Parrott absences reconfirmed.


## MAP / PROP A GATE - WAVE 42 UPDATE (September 11, 2026, late evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet.

### Court posture (Wave 42 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO remains in force - 2022 map governs November for now (SCOTUSblog / Bloomberg Law / Missouri Times). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** Hoskins contempt purged after directing LEAs back to the **2022 map** (News-Leader / Missouri Times; prior Wave 40-41 notes).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No public posting of those briefs located Wave 42 - they are not due yet (today still Sept 11).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes). Gate watch remains live through UOCAVA and ballot-print deadlines. Cole County deadlines page still shows Nov 3 general absentee start Sept 22.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 42 live WebFetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 42 live fetch).
2. themissouritimes.com - 8th Cir briefs Sept 15 / args Sept 17 calendar reconfirm; briefs not yet public.
3. scotusblog.com / bloomberglaw.com - Sept 10 SCOTUS stay of Clark TRO; 2022 map directive.
4. Lock rechecks Wave 42: katecotten.com still launching-soon; rozforalabama.com/issues still 404; yoshimatthews.com/issues still 404; azgp.org ENOTFOUND; christyforamerica.com/platform HTTP 500. Houston ministry domain resolves but is not a Treasurer issues page.


## MAP / PROP A GATE - WAVE 43 UPDATE (September 11, 2026, late evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet.

### Court posture (Wave 43 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO remains in force - 2022 map governs November for now (SCOTUSblog / The Missouri Times / Bloomberg Law). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** Hoskins contempt purged after directing LEAs back to the **2022 map** (News-Leader / Missouri Times; prior Wave 40-42 notes).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No public posting of those briefs located Wave 43 - they are not due yet (today still Sept 11).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 43 live WebFetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 43 live fetch).
2. themissouritimes.com - SCOTUS stay + 8th Cir briefs Sept 15 / args Sept 17 calendar reconfirm; briefs not yet public.
3. scotusblog.com - Sept 10 SCOTUS stay of Clark TRO; 2022 map directive.
4. Lock rechecks Wave 43: katecotten.com still launching-soon HTTP 200; rozforalabama.com/issues still 404; yoshimatthews.com/issues still 404; azgp.org / azgreenparty.org / mikecease.com ENOTFOUND; christyforamerica.com/platform still failing (prior HTTP 500). NM CFIS still unreachable (HTTP 500/000). Houston ministry domain still not Treasurer platform.


## MAP / PROP A GATE - WAVE 44 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet.

### Court posture (Wave 44 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO remains in force - 2022 map governs November for now (SCOTUSblog docket 26A326 / The Missouri Times "Supreme Court Passes on New Congressional Map"). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** Hoskins contempt purged after directing LEAs back to the **2022 map** (Missouri Times Wave 44 reconfirm).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No public posting of those briefs located Wave 44 - they are not due yet (today still Sept 11).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 44 live WebFetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 44 live fetch).
2. themissouritimes.com/supreme-court-passes-on-new-congressional-map/ - SCOTUS stay + 8th Cir briefs Sept 15 / args Sept 17 calendar reconfirm; briefs not yet public.
3. supremecourt.gov docket 26A326 - Sept 10 stay of Clark TRO; 2022 map directive pending 8th Cir.
4. Lock rechecks Wave 44: katecotten.com still Launching Soon HTTP 200; rozforalabama.com/issues still 404; yoshimatthews.com/issues still 404; azgp.org HTTP 500; mikecease.com HTTP 500; christyforamerica.com/platform HTTP 500. NM CFIS still unreachable (HTTP 500). Houston ministry domain still not Treasurer platform.


## MAP / PROP A GATE - WAVE 45 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet. Skip DE inventing until after Sept 15.

### Court posture (Wave 45 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO remains in force - 2022 map governs November for now (SCOTUSblog docket 26A326 / The Missouri Times). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** Hoskins contempt purged after directing LEAs back to the **2022 map** (prior Missouri Times; Wave 45 reconfirm via same calendar).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No public posting of those briefs located Wave 45 - they are not due yet (today still Sept 11).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 45 live WebFetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources / locks added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 45 live fetch).
2. themissouritimes.com/supreme-court-passes-on-new-congressional-map/ - SCOTUS stay + 8th Cir briefs Sept 15 / args Sept 17 calendar reconfirm; briefs not yet public.
3. Lock rechecks Wave 45: katecotten.com still Launching Soon HTTP 200; rozforalabama.com/issues still 404; yoshimatthews.com/issues still 404; azgp.org DNS ENOTFOUND; mikecease.com DNS ENOTFOUND; christyforamerica.com/platform TLS/connection fail. NM CFIS hostname cfis.sos.nm.gov still unresolved; sos.nm.gov CFIS path 404. OK Guardian home 200 but Search.aspx drill-down still HTTP 500 - Pre-General window Oct 20-26. bakerforcongress.com still Listen/Lead/Unite only.


## MAP / PROP A GATE - WAVE 46 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet. Skip DE inventing until after Sept 15.

### Court posture (Wave 46 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO remains in force - 2022 map governs November for now (SCOTUSblog / The Missouri Times). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** Hoskins contempt purged after directing LEAs back to the **2022 map** (Missouri Times Wave 46 reconfirm).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times). No public posting of those briefs located Wave 46 - they are not due yet (today still Sept 11).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 46 live fetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources / locks added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 46 live fetch).
2. themissouritimes.com/supreme-court-passes-on-new-congressional-map/ - SCOTUS stay + 8th Cir briefs Sept 15 / args Sept 17 calendar reconfirm; briefs not yet public.
3. Lock rechecks Wave 46: katecotten.com still Launching Soon HTTP 200; rozforalabama.com/issues still 404; yoshimatthews.com home unpaid-invoice error + /issues 404; azgp.org / mikecease.com / azgreenparty.org DNS ENOTFOUND; christyforamerica.com TLS/trust fail; bakerforcongress.com still Listen/Lead/Unite only. NM: cfis.sos.nm.gov DNS ENOTFOUND; www.cfis.state.nm.us/media resolves but CandidateMain search postback HTTP 500 (year dropdown tops at 2020) - still no usable 2026 cash. OK Guardian home+Search.aspx 200 but CommitteeDetail OrganizationID pages 404 - Pre-General Oct 20-26. Parrott FEC H6FL06316 still $0/unavailable; Benoit still no weball26 row (issues page live).


## MAP / PROP A GATE - WAVE 47 UPDATE (September 11, 2026, evening ET)

**STATUS: gate still OPEN for mo.html.** No mo.html started. Currency-test still incomplete (no public Nov CD sample-label table). Parcel notes reconfirmed, not closed. Today is still Sept 11 - Sept 15 briefs / Sept 17 args / UOCAVA Sept 19 have not arrived yet. Skip DE inventing until after Sept 15.

### Court posture (Wave 47 free-web reconfirm)
- **U.S. Supreme Court (Sept 10, 2026):** stay of Judge Clark TRO remains in force - 2022 map governs November for now (Missouri Times / SCOTUSblog). Stay remains pending 8th Cir appeal disposition (+ cert if sought).
- **Missouri Supreme Court (Sept 10):** Hoskins contempt purged after directing LEAs back to the **2022 map** (Missouri Times).
- **8th Circuit:** expedited appeal calendar still lists simultaneous briefs **Sept 15** and remote oral arguments **Sept 17, 10 a.m.** (Missouri Times Wave 47 reconfirm). No public posting of those briefs located Wave 47 - they are not due yet (today still Sept 11).
- **UOCAVA:** military/overseas ballots must transmit by **Sept 19** (Votebeat / prior notes). Gate watch remains live through UOCAVA and ballot-print deadlines.
- **Prop A / referendum** on HB 1 remains on the November ballot (Ballotpedia / Missouri Times).

### Currency-test (still NOT closed)
- **Cole County:** colecounty.org/441/Sample-Ballots **still** only links **August 4, 2026 Combined Sample Ballot** (Wave 47 live WebFetch); no November sample PDF unlocked.
- **Boone / Jackson / STL:** no new public countywide Nov CD-label PDF matched to mo-cd120.json this pass.
- **Still no public statewide (or even single-county public-PDF) November sample-ballot district-label table matched to `mo-cd120.json`.**

### Continuity / parcel (not closed)
- No new street/parcel unlock this pass for Brattin / Herrera / Onder. Prior banked notes stand.

### Exact remaining blockers before mo.html
1. SoS/LEA Nov district-label currency-test vs `mo-cd120.json` (public sample ballots or equivalent non-PII table).
2. Finish parcel/VTD residence checks (Brattin; Onder Lake St. Louis / Augusta; Herrera KC parcel vs Raymore office).
3. Party certification / ballot-order lock confirming Aug 25 certificate names still govern Nov under 2022 lines (or under whichever map survives post-Sept 17).
4. Watch Sept 15 briefs / Sept 17 8th Cir argument / UOCAVA Sept 19 through ballot-print deadlines.

### Sources / locks added this wave
1. colecounty.org/441/Sample-Ballots - still August Combined Sample only (Wave 47 live fetch).
2. themissouritimes.com/supreme-court-passes-on-new-congressional-map/ - SCOTUS stay + 8th Cir briefs Sept 15 / args Sept 17 calendar reconfirm; briefs not yet public.
3. **OK Guardian UNLOCK Wave 47:** CommitteeFinancialSummary.aspx?Comm={id} returns Pre-Runoff ending cash (period end 08/10/2026) for Forbes 11876 ($8,458.80), Echols 11756 ($221,249.55), Coffey 11949 ($288,642.74), Byrd 12335 ($39,153.03), West 11914 ($24,118.74), Dawson 12295 ($1,422.93), MacIntyre 12375 ($2,311.38), Eastman 12361 ($589.88), Sullivan 12098 ($72,075.56). CommitteeDetail.aspx still 404.
4. **AZ Hourihan cash:** seethemoney.az.gov / BEACON committee 102014 Q2 ending cash $4,467.06 (filed July 13; ~$40,242 cycle receipts).
5. Lock rechecks Wave 47: katecotten.com still Launching Soon HTTP 200; rozforalabama.com/issues still 404; yoshimatthews.com unpaid-invoice + /issues 404; azgp.org / mikecease.com ENOTFOUND; christyforamerica.com TLS fail but **christyforamerica.us LIVE** (thin pillars + hacked-site rebuild note); scottjewett.com LIVE (was 403). NM CFIS CandidateMain still unusable for 2026 cash this pass (filings due Sept 14). Lund/Koehn still no personal platforms (LPKS slate only; rickoehn.com personal not office platform).

