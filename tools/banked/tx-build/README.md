# Texas build bank — Wave 90 (2026-09-29)

**STATUS: unbuilt / bank expanding. No `tx.html`.**

## Map which-plan

- **2026 uses Plan C2333** — congressional plan enacted by the 89th Legislature, 2nd Called Session (mid-decade 2025 map).
- Texas Legislative Council current-districts page: plans in effect for the 2026 elections include **PlanC2333** (Congress). Representatives elected under prior PlanC2193 serve until Jan 2027.
- SCOTUS upheld the map Apr 27, 2026 (Texas Tribune) — governs 2026 midterms.
- ⚠ Census CD119 / PlanC2193 is **STALE** for Texas county↔CD work.

## Wave 90 bank additions

1. **SoS Ballot Certification PDF** (Aug 28, 2026) mirrored:
   - `wave90/2026-ballot-cert.pdf` (from sos.texas.gov)
   - `wave90/2026-ballot-cert-govdelivery.pdf` (GovDelivery copy)
2. **Parsed nominees** → `wave90/nominees-from-cert.json`
   - Statewide: U.S. Senate (Paxton / Talarico / Brown), Governor (Abbott / Hinojosa / Dixon), Lt. Gov, AG, Comptroller, Land, Ag, Railroad + judicial retentions as in cert.
   - All **38** U.S. House districts with party nominees from the cert (see JSON).
3. County-level CD appearances in the cert are a **weak** split hint only (cert is per-county ballot listing). Still need official TLC block equivalency / county↔CD matrix for PlanC2333 before drafting `ds`.

## Still required before tx.html

1. Official **PlanC2333** block equivalency or county↔CD matrix (Capitol Data Portal / TLC — not CD119).
2. Currency-test vs county sample ballots / voter lookup CD labels.
3. Voices for every upcoming nominee.
4. Confirm special elections on Nov 3 (SoS page lists SD-22 and HD-93 specials) — card carefully if overlapping.

## Sources

- https://www.sos.texas.gov/elections/forms/2026-ballot-cert.pdf
- https://www.sos.texas.gov/elections/laws/2026-november-general-election.shtml
- https://redistricting.capitol.texas.gov/current-districts
- https://www.texastribune.org/2026/04/27/texas-redistricting-map-ruling-us-supreme-court-upheld-2026-midterms/
- Prior: Wave 89 README starter
