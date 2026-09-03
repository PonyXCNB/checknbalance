# -*- coding: utf-8 -*-
"""Compact, honest card for a minor-party candidate who IS on the state's certified
November list but for whom no platform, fundraising or coverage could be located.

The owner's standing rule (to-do #4) is that an empty voices block is a defect, and
that a thin candidate gets the honest structural argument plus [Verify] rather than
nothing. The ceiling is generic-but-true; specific-but-unsourced is never allowed, so
nothing here asserts a scandal, endorsement, poll number or quote.
"""
PARTYNAME = {"L": "Libertarian", "G": "Green", "UST": "U.S. Taxpayers",
             "WCP": "Working Class", "NLP": "Natural Law", "NPA": "No Party Affiliation"}
# Site party codes: D/R/I/L/G only. Everything without its own code renders as I.
CODE = {"L": "L", "G": "G", "UST": "I", "WCP": "I", "NLP": "I", "NPA": "I"}


def thin(name, ptag, extra_diff=None, extra_sup=None, extra_opp=None):
    pn = PARTYNAME[ptag]
    diffs = ["%s nominee, chosen at party convention" % pn,
             "On the Secretary of State's certified November candidate list"]
    if extra_diff:
        diffs.insert(1, extra_diff)
    diffs.append("No FEC fundraising located [Verify — an absence of located records]")

    sups = []
    if extra_sup:
        sups.append(extra_sup)
    if ptag in ("G", "WCP"):
        sups.append("Gives voters to the left of the Democratic nominee a ballot line [Verify — structural argument]")
    elif ptag in ("UST", "NLP"):
        sups.append("Offers an alternative to both major-party nominees [Verify — structural argument]")
    elif ptag == "L":
        sups.append("Gives libertarian voters a ballot line of their own [Verify — structural argument]")
    else:
        sups.append("Carries no party label at all, which is the whole of the appeal [Verify — structural argument]")
    sups.append("Appears on the state's own certified ballot, so the choice is real rather than notional")

    opps = []
    if extra_opp:
        opps.append(extra_opp)
    opps.append("No campaign platform, website or fundraising could be located [Verify — an absence of located records]")
    opps.append("Minor-party candidates in Michigan U.S. House races draw low single digits [Verify — structural argument]")

    return {"name": name, "party": CODE[ptag],
            "positions": ["No published 2026 platform could be located [Verify — an absence of located records]", "", ""],
            "differentiators": diffs, "supporters": sups, "opponents": opps}
