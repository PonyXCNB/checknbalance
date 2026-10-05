# CA bank recheck — Wave 93 catch-up (2026-10-05 ET)

## Status: currency-test PARTIALLY ADVANCED — still NO ca.html

### Unchanged
- SoS certified candidate list for Nov 3, 2026 still dated **Aug 27, 2026**.
- Prop 50 / AB 604 map bank + `ds` stand; plurality `d` remains **block-hint only** (not pop-weighted) — do not ship until pop-weighted `d` closes.

### New this wave — San Luis Obispo County Nov VIG spot-check
- Banked HTML: `tools/banked/ca-build/currency-w93/slo-ballot-type-46.html`
- Source: SLO County Ballot Type 46 Voter Information Guide (Nov 3, 2026)
  https://www.slocounty.ca.gov/departments/clerk-recorder/forms-documents/elections-and-voting/current-elections/2026-11-03/voter-information-guides/ballot-type-46-november-3,-2026,-general-election-voter-information-guide
- Party-endorsement / candidate-statement pages list **U.S. Representative 19th** (Jimmy Panetta / Peter Coe Verbica) and **24th** (Salud Carbajal / Bob Smith).
- Matches banked AB 604 matrix for FIPS **06079 San Luis Obispo**: split `d_blockhint 24`, `ds: 24, 19`.

### Still required before ca.html
1. Pop-weighted plurality `d` for 28 split counties.
2. Broader county sample-ballot currency-test (one SLO ballot type is a spot-check, not a full close).
3. Full HOUSE/STATEWIDE research + voices.

Sources: Wave 92 recheck; SLO County Elections; Statewide Database AB604.
