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
- 8th Circuit / further SCOTUS action after Sept 15 hearing window.


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
