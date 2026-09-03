# -*- coding: utf-8 -*-
"""Assemble Michigan's HOUSE_RACES block.

Substantive candidates are written by hand from the sourced research. Minor-party
candidates the STATE'S OWN certified list carries but for whom no platform,
fundraising or coverage could be located get a compact card from gen_thin.thin(),
which never invents a specific factual claim: every bullet is either a fact from the
state's list or an explicitly-marked structural argument.
"""
import io, json
from gen_thin import thin

D = {}

def race(n, name, region, note, cands):
    D[n] = {"name": name, "region": region, "note": note, "candidates": cands}

def c(name, party, pos, diff, sup, opp):
    return {"name": name, "party": party, "positions": pos,
            "differentiators": diff, "supporters": sup, "opponents": opp}


def emit(n):
    d = D[n]
    j = lambda x: json.dumps(x, ensure_ascii=False)
    s  = '  %d: { name: %s, region: %s,\n' % (n, j(d["name"]), j(d["region"]))
    s += '    races: [\n'
    s += '      { date: "Nov 3, 2026", type: "upcoming", scope: "Federal · District",\n'
    s += '        note: %s,\n' % j(d["note"])
    s += '        candidates: [\n'
    cards = []
    for cd in d["candidates"]:
        t  = '          { name: %s, party: %s, winner: false,\n' % (j(cd["name"]), j(cd["party"]))
        t += '            positions: [%s],\n'        % ",".join(j(x) for x in cd["positions"])
        t += '            differentiators: [%s],\n'  % ",".join(j(x) for x in cd["differentiators"])
        t += '            supporters: [%s],\n'       % ",".join(j(x) for x in cd["supporters"])
        t += '            opponents: [%s] }'         % ",".join(j(x) for x in cd["opponents"])
        cards.append(t)
    s += ",\n".join(cards) + "\n        ] }\n    ] },\n"
    return s


def write(path, header=None, footer=None):
    out = (header or "") + "".join(emit(n) for n in sorted(D)) + (footer or "")
    io.open(path, "w", encoding="utf-8", newline="\r\n").write(out)
    print("wrote districts", sorted(D), "->", path)
