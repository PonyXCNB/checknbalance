# -*- coding: utf-8 -*-
"""Michigan STATEWIDE 2026 ballot."""
import io, json
from gen_thin import PARTYNAME, CODE

RACES = []

def race(office, scope, note, cands):
    RACES.append({"office": office, "scope": scope, "note": note, "candidates": cands})

def c(name, party, pos, diff, sup, opp):
    return {"name": name, "party": party, "positions": pos,
            "differentiators": diff, "supporters": sup, "opponents": opp}

def board(name, ptag, role, incumbent=False, extra=None):
    """Compact card for an education-board nominee. Michigan elects these statewide and
    they are convention-nominated, so party and incumbency are the decision-relevant facts
    a voter can actually act on; almost nothing else is published about most of them."""
    # Deliberately LEAN. These 36 nominees have essentially nothing published about them, and an
    # earlier draft carried five [Verify] markers apiece — 180 markers across four races, all
    # saying the same thing. That is padding, not honesty. Each card now states the facts that
    # ARE established (party, how they were nominated, incumbency) without a marker, and marks
    # exactly two things: the genuine absence of a platform, and the genuine inference.
    pn = {"D": "Democratic", "R": "Republican"}.get(ptag) or PARTYNAME[ptag]
    diffs = ["%s nominee, chosen at the party's fall state convention" % pn]
    if incumbent:
        diffs.append("Incumbent, re-nominated — these are eight-year terms")
    if extra:
        diffs.append(extra)
    diffs.append("On the Secretary of State's certified November candidate list")
    if ptag in ("D", "R"):
        sup = ["A major-party line is a realistic path on a ballot most voters mark by party",
               "Michigan elects this board STATEWIDE, so every voter in the state has a say in it"]
        opp = ["Board races sit near the bottom of a long ballot, where the party label does most of the deciding [Verify — structural argument]",
               "No individual platform for this candidate could be located"]
    else:
        sup = ["Gives voters a %s option on a board the major parties otherwise split between them" % pn,
               "Appears on the state's own certified ballot, so the choice is real rather than notional"]
        opp = ["No %s candidate has won a Michigan education-board seat in recent cycles [Verify — structural argument]" % pn,
               "No individual platform or fundraising could be located"]
    return {"name": name, "party": CODE.get(ptag, ptag),
            "positions": ["No published 2026 platform could be located [Verify — an absence of located records]", "", ""],
            "differentiators": diffs, "supporters": sup, "opponents": opp}


def render(path, header):
    j = lambda x: json.dumps(x, ensure_ascii=False)
    out = header.rstrip("\n") + "\nconst STATEWIDE = [\n"
    blocks = []
    for r in RACES:
        s  = '  { date: "Nov 3, 2026", type: "upcoming", scope: %s, office: %s,\n' % (j(r["scope"]), j(r["office"]))
        s += '    note: %s,\n' % j(r["note"])
        s += '    candidates: [\n'
        cards = []
        for cd in r["candidates"]:
            t  = '      { name: %s, party: %s, winner: false,\n' % (j(cd["name"]), j(cd["party"]))
            t += '        positions: [%s],\n'       % ",".join(j(x) for x in cd["positions"])
            t += '        differentiators: [%s],\n' % ",".join(j(x) for x in cd["differentiators"])
            t += '        supporters: [%s],\n'      % ",".join(j(x) for x in cd["supporters"])
            t += '        opponents: [%s] }'        % ",".join(j(x) for x in cd["opponents"])
            cards.append(t)
        s += ",\n".join(cards) + "\n    ] }"
        blocks.append(s)
    out += ",\n\n".join(blocks) + "\n];\n"
    io.open(path, "w", encoding="utf-8", newline="\r\n").write(out)
    print("wrote", len(RACES), "statewide races ->", path)
