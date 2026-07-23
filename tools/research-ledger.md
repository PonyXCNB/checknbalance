# Research ledger — dead ends and retry dates

Purpose: stop re-researching the same hopeless [Verify] markers every week.
When a weekly refresh researches a marker and finds NOTHING verifiable, log it
here. Skip any entry researched within the last 21 days unless a trigger event
occurs (their primary happens, they file FEC reports, news breaks). Delete an
entry when its marker is resolved.

Format (one line each):
`YYYY-MM-DD | page | who/what | what was tried | retry after`

## Dead ends

2026-07-14 | nj.html | NJ-10 2024 general raw totals (past-race note "McIver 81.2% / 15.8%") | This week's research mistakenly targeted the 2026 Dem PRIMARY (verified McIver 84.8% / Poster 15.2%, already on-site without a marker); the 2024 GENERAL figure on the past race is still unverified against a primary source | 2026-08-15
2026-07-14 | de.html | AG third Democrat Patty Rickman | On the official DE Dept. of Elections candidate-filing list (provisional, filed 7/13/2026) but NO news, campaign site, or Ballotpedia coverage of her or her platform found | 2026-09-15 (DE primary)
2026-07-14 | de.html | Treasurer Dem filer Mike Miller | On the official DOE candidate list but common name; no distinct campaign/press coverage located to source a platform | 2026-09-15 (DE primary)
2026-07-14 | ny.html | NY-6 (Queens) 2026 GOP nominee | Sources conflicted: researcher said Juan Pagan (R) is the nominee, adversarial verifier found Ballotpedia does NOT list him as nominee. Carded as "[Republican nominee — Verify]" pending a clear source | 2026-08-15
2026-07-14 | ny.html | Thin GOP challengers in safe-D NY seats (e.g., George Marsh NY-5, Jennifer Moore NY-10, Stylo Sapaskis NY-15) + minor-party ballot-line/party-code gaps | No sourced platforms found; carded name+[Verify]. Also: NY voices (supporters/opponents) intentionally deferred for the initial build | revisit when building NY LOCAL_RACES or on a competitive trigger

2026-07-23 | me.html | Maine statewide ballot questions for Nov 2026 | Maine SoS and Ballotpedia measure pages returned empty/404 on fetch; the only confirmed development is that the "Protect Girls Sports" initiative was struck from the ballot by the Maine SJC on July 10. No certified list located, so me.html deliberately carries NO ballot-question race rather than a guess | 2026-09-01
2026-07-23 | me.html + ma.html | BALLOTPEDIA IS UNRELIABLE FOR BALLOT ACCESS THIS CYCLE — a standing caution, not a dead end | Verified twice this run: Ballotpedia listed three Maine independents (Alcorn, Rich, Evans) as November U.S. Senate candidates when the Maine SoS general-candidate list shows only Collins; and listed Kennealy, Dewar and Andrea James in Massachusetts primaries where the Secretary of the Commonwealth's certified lists contradict it. Ballotpedia appears to conflate DECLARED/FEC-filed candidacies with BALLOT-QUALIFIED ones. Always prefer the state's own certified candidate list | standing
2026-07-23 | me.html | Democratic U.S. Senate nominee — TIME-CRITICAL, not a dead end | Graham Platner won the June 9 primary (~72%) but announced his exit July 8 and formally withdrew July 10. Maine Democrats must name a replacement by July 27 at a July 25 convention in Bangor; Troy Jackson is presumptive (backers won ~481 of 500 county delegate slots, but delegates are UNBOUND) after Bellows, Shah, Wood and Kleban withdrew and endorsed him. The Maine SoS general-candidate list dated 7/22/2026 still shows NO Democrat for U.S. Senate. Re-verify and rewrite the me.html Senate card | 2026-07-25 (convention)

## Permanently thin (check monthly at most)

Candidates with no campaign site, no press, and no active social presence.
The [Verify] marker on the site IS the correct output for these.

2026-07-14 | ga.html | GA-13 July 28 special minor candidates — Carlos Moore (D), Caesar Gonzales (R), Fayth Park (R) | No campaign sites or platform coverage found this run; carded name-only with [Verify]. These markers will resolve or disappear once the July 28 special (and any Aug 25 runoff) settles the field — revisit then, not weekly.
2026-07-20 | ri.html | Provisional pre-primary [Verify] fields (GOP Senate/Gov nominees, AG both-party platforms, Lt Gov/SoS/Treasurer platforms, RI-1 Keenan/DeSouza, RI-2 GOP) | RI primary is SEPT 9, 2026 — nominees and most down-ballot platforms are not settled and are thinly covered this early. Do NOT re-research weekly; refresh ri.html the week of Sept 9 when the field is final.
2026-07-20 | nh.html | Provisional pre-primary [Verify] fields (Senate nominees, Gov platforms, NH-1 crowded Dem/GOP fields, NH-2 GOP) | NH primary is SEPT 8, 2026. Frontrunners are carded (Pappas; Sununu/Brown; Goodlander; Ayotte/Warmington) but nominees and thin GOP-field platforms are unsettled. Do NOT re-research weekly; refresh nh.html the week of Sept 8.
2026-07-22 | ct.html | Provisional pre-primary [Verify] fields — thin GOP House-primary fields (CT-1 Amy Chai; CT-3 Lancia/Irizarry; CT-4 Goldstein/Miressi; CT-5 Botelho/De Barros/Shea) and down-ballot GOP platforms (Corey LG, Lumaj SoS, Bolton AG) | CT primary is AUG 11, 2026. CT parties set most nominees at the May 2026 conventions, but these challengers have no campaign-site or press coverage deep enough to source a platform. Refresh ct.html the week of Aug 11 — do NOT re-research before then.
2026-07-22 | ct.html | Whether contested Aug 11 GOP primaries actually proceed for AG / SoS / Lt Gov; the Kordas-vs-Bolton AG question | Ballotpedia + CT Mirror + campaign sites consulted; the CT SOTS/SEEC official certified ballot list was not reachable this run | 2026-08-11 (primary)
2026-07-22 | vt.html | Provisional pre-primary [Verify] fields — Dem Gov primary (Richards/Janoo), Dem Lt Gov field (Gray/Charlestin/McLaren), Auditor open-seat primary (Ashe/Graeter), and Mark Coester's (R) thin U.S. House platform | VT primary is AUG 11, 2026. Nominees unsettled and down-ballot platforms thinly covered this early. Refresh vt.html the week of Aug 11.
2026-07-22 | vt.html | H. Brooke Paige (R) reported filing uncontested for several down-ballot statewide slots (AG, SoS, Treasurer) | Single-source report; not confirmed per-office, so those offices were left off the page rather than asserted | 2026-08-11 (primary)

2026-07-23 | ma.html | Independent / unenrolled general-election field, ALL offices | Massachusetts non-party nomination papers are due to registrars 5pm July 28 and to the Secretary 5pm Aug 25, 2026 — the November field is genuinely not final, so no MA page copy should say "uncontested". Declared but NOT yet qualified: Andrea James (Governor, unenrolled, Green-Rainbow endorsed); Joe Tache (PSL), Shiva Ayyadurai, Nathan Bech, Morgan Dawicki, Philip Devincentis (U.S. Senate). Re-run before calling any MA race two-way | 2026-08-26
2026-07-23 | ma.html | Thin down-ballot and minor-party candidates — Gary Grossi (R, MA-3), Tom Stalcup (R, MA-4), Robert Burke (R, MA-8), Tyler MacAllister (R, MA-9), Elizabeth Dionne (R, Treasurer), Michael Walsh (R, AG) praise items | Certified on the Sept 1 ballot but coverage is announcement-level only; no sourced platform detail or third-party criticism found beyond what is already carded. The [Verify] markers ARE the correct output here | 2026-09-02 (after the Sept 1 primary)
2026-07-23 | ma.html | Cook / Sabato per-district House ratings for MA-2 and MA-3 | Both raters return HTTP 403 to automated fetch and publish ratings as images; Cook Solid D confirmed only for MA-1, MA-4, MA-5. District-level rating labels for MA-2/MA-3 left off the page rather than guessed | 2026-09-02
