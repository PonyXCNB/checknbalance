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
