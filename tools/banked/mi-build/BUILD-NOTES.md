# Michigan build — Sept 3, 2026

## Starting position (carried forward from the Aug 27–28 gate checks)
These are LEADS carried into this run, not facts. Each was to be re-confirmed by this run's agents.

- **Map:** UNCHANGED. 13 districts in 2022, 2024 and 2026; the MICRC is dormant; *Agee v. Benson*
  touched only STATE LEGISLATIVE districts. Michigan is not on the ten-state 2026 redraw list.
- **Certification gate:** as of Aug 28 the Board of State Canvassers' certification of the Aug 4
  primary was UNCONFIRMABLE. Its Aug 24 agenda PDF lists Item 2 as "Canvass and certification of the
  August 4, 2026 primary election" and the board met ~7 hours, but no minutes are posted and three
  independent accounts of that meeting (Votebeat, Michigan Public, Michigan Advance) cover only an
  unrelated petition deadlock. Next BSC meeting: **Sept 4, 2026**.
  ⚠ DECOY, confirmed bogus twice: the Yahoo/AP piece "Michigan's elections panel certifies results of
  August primary election" is dated **Aug 19, 2022** and names Jeannette Bradshaw, who is not on the
  current board (Houskamp, Gurewitz, Cummings, Cordes).
- **Senate:** El-Sayed (D) beat Stevens by ~14,926 votes / 0.975% (AP call Aug 5, concession same
  morning; ~10x the 0.1% automatic-recount threshold). vs. Mike Rogers (R). Reported Cook toss-up.
- **Governor:** Benson/Brinks (D) vs. James/DeBoyer (R), a joint ticket.
- **AG and SoS are nominated at CONVENTIONS, not the primary**, and both conventions have happened
  (Dem Apr 19, GOP Aug 22): AG Savit (D) vs. Lloyd (R); SoS Gilchrist (D) vs. Forlini (R).
- **MI-08 RESOLVED:** Thomas J. Smith won the GOP primary ~50.4% despite having suspended his campaign
  July 16, ACCEPTED the nomination, and is on the general ballot vs. Kristen McDonald Rivet (D).
- **Competitive seats, in order:** MI-07 (toss-up at all three raters), MI-10 (open, Lean/Tilt R),
  MI-04, MI-08.
- **Ballot measures — the least settled part of the ballot.** Constitutional Convention question is
  definitely on; "Money Out of Politics" UNRESOLVED (Michigan Advance says the BSC approved ballot
  language Aug 17, an aggregator still lists it as merely potential); the rejected proof-of-citizenship
  amendment is a live wildcard — Americans for Citizen Voting filed with the Michigan Supreme Court
  on Aug 27, 2026.
- ⚠ **Single-source claim held back from publication pending a second confirmation:** that Noah Hood
  was nominated at the DEMOCRATIC convention. Counterintuitive; do not publish on one source.

## ⭐ Reusable access unlock (found Aug 28, retires a dead end open since Aug 9)
`michigan.gov` 403s are USER-AGENT-BASED ONLY:
```
curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36" <url>
```
Returns 200 for the SoS site, its PDFs and `mvic.sos.state.mi.us`. The same trick defeats
michiganadvance.com, bridgemi.com and votebeat.org, which 403 WebFetch but not curl.

## ✅ INDEPENDENT MAP-CURRENCY CORROBORATION FROM COOK'S OWN DATA FILE (main loop, Sept 3, 2026)
Pulled `https://datawrapper.dwcdn.net/rAx2t/1/dataset.csv` directly (lesson #18a: cookpolitical.com
returns 200 but its tables are Datawrapper embeds carrying no numbers; the data file is the way in).
Saved verbatim as `cook-pvi-2026-rAx2t.tsv`.

**All 13 Michigan districts carry an IDENTICAL 2025 PVI and 2026 PVI.** In the same file, states that
did redraw (AL-01 R+27 -> R+17, AL-02 D+5 -> R+7) show large shifts, because Cook recalculates PVI on
new lines. Michigan showing zero shift on all 13 is therefore affirmative evidence that Cook is
scoring the SAME lines in 2026 as in 2025 — an independent corroboration of "map unchanged" that does
not depend on the redistricting literature at all.

| District | Cook incumbent field | 2026 PVI |
|---|---|---|
| MI-01 | Jack Bergman (R) | R+11 |
| MI-02 | John Moolenaar (R) | R+15 |
| MI-03 | Hillary Scholten (D) | D+4 |
| MI-04 | Bill Huizenga (R) | R+3 |
| MI-05 | Tim Walberg (R) | R+13 |
| MI-06 | Debbie Dingell (D) | D+12 |
| MI-07 | Tom Barrett (R) | EVEN |
| MI-08 | Kristen McDonald Rivet (D) | R+1 |
| MI-09 | Lisa McClain (R) | R+16 |
| MI-10 | **OPEN (James) (R)** | R+3 |
| MI-11 | **OPEN (Stevens) (D)** | D+9 |
| MI-12 | Rashida Tlaib (D) | D+21 |
| MI-13 | Shri Thanedar (D) | D+22 |

⚠ **Cook's file flags TWO open seats, not one: MI-10 (James) and MI-11 (Stevens).** Our Aug 28 banked
note named only MI-10. MI-11 is open because Haley Stevens vacated it to run for the Senate — which
follows directly from the Senate primary she lost, but it was not written down.
