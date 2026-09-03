# -*- coding: utf-8 -*-
"""Compact, honest card for a Louisiana candidate the STATE'S OWN certified list carries but for
whom no platform, campaign site or fundraising could be located.

Louisiana's jungle primary puts everyone on one ballot, so these fields are large and genuinely
thin at the bottom. The owner's rule (to-do #4) is that an empty voices block is a defect and a
thin candidate gets the honest structural argument plus [Verify]. Generic-but-true is the ceiling;
specific-but-unsourced is never allowed.
"""
PARTYNAME = {"R": "Republican", "D": "Democratic", "L": "Libertarian", "NP": "No Party"}
CODE = {"R": "R", "D": "D", "L": "L", "NP": "I"}


def thin(name, ptag, lean, extra_diff=None, extra_sup=None, extra_opp=None, filed=None):
    """lean: a short phrase describing the district, e.g. 'an R+20 seat'."""
    pn = PARTYNAME[ptag]
    diffs = ["%s candidate on the state's certified Nov 3 ballot" % pn]
    if filed:
        diffs.append("Qualified %s" % filed)
    if extra_diff:
        diffs.append(extra_diff)
    diffs.append("No FEC fundraising located [Verify — an absence of located records]")

    sups = []
    if extra_sup:
        sups.append(extra_sup)
    sups.append("Louisiana's open primary puts every candidate on one ballot, so no party gatekeeping stands between them and voters")
    sups.append("Appears on the state's own certified ballot, so the choice is real rather than notional")

    opps = []
    if extra_opp:
        opps.append(extra_opp)
    opps.append("No campaign platform, website or fundraising could be located [Verify — an absence of located records]")
    opps.append("Faces long odds in %s, and only the top two advance to the Dec 12 runoff [Verify — structural argument]" % lean)

    return {"name": name, "party": CODE[ptag],
            "positions": ["No published 2026 platform could be located [Verify — an absence of located records]", "", ""],
            "differentiators": diffs, "supporters": sups, "opponents": opps}
