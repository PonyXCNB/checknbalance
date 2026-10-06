# Wave 94: population-weighted county->CD plurality for California's AB 604 (Prop 50) map,
# using the OFFICIAL Statewide Database ADJUSTED 2020 P.L. 94-171 block population
# (incarcerated persons reallocated per Elections Code 21003) - the population AB 604 was drawn on.
# Inputs: AB604.csv  (https://statewidedatabase.org/pub/data/d25/AB604.zip)
#         state_PL94_2020_Adjusted_P24_DOJ_Block.csv (https://statewidedatabase.org/pub/data/D20/PL94/state/state_PL94_2020_Adjusted_P24_DOJ_Block_csv.zip)
#         AB604 2025-08-16.dbf (district A_POPULATI, https://statewidedatabase.org/pub/data/d25/AB604%202025-08-16.zip) - cross-check
import csv, json, collections, struct
cd = {g.lstrip('\ufeff'): int(d) for g, d in csv.reader(open('AB604.csv', encoding='utf-8-sig'))}
pop = {}
with open('state_PL94_2020_Adjusted_P24_DOJ_Block.csv', newline='', encoding='latin-1') as f:
    r = csv.reader(f); h = next(r); bi = h.index('BLOCK20'); pi = h.index('Population P2')
    for row in r: pop[row[bi].zfill(15)] = int(float(row[pi]))
print('adj blocks', len(pop), 'total', sum(pop.values()))
miss = [g for g in pop if g not in cd]; print('pop blocks not in AB604:', len(miss), 'pop', sum(pop[g] for g in miss))
cdpop = collections.Counter(); cty = collections.defaultdict(collections.Counter)
for g, p in pop.items():
    if g in cd: cdpop[cd[g]] += p; cty[g[2:5]][cd[g]] += p
# official district populations from the AB604 shapefile dbf
f = open('AB604 2025-08-16.dbf', 'rb').read(); n, hl, rl = struct.unpack('<IHH', f[4:12])
fields = []; o = 32
while f[o] != 0x0D: fields.append((f[o:o+11].split(b'\0')[0].decode(), f[o+16])); o += 32
off = {}; o = hl
for i in range(n):
    rec = f[o+1:o+rl]; o += rl; p = 0; v = {}
    for name, ln in fields: v[name] = rec[p:p+ln].decode('latin-1').strip(); p += ln
    off[int(v['DISTRICT'])] = int(v['A_POPULATI'])
mism = {k: (cdpop[k], off[k]) for k in off if cdpop[k] != off[k]}
print('districts', len(cdpop), 'official', len(off), 'mismatches vs official A_POPULATI:', mism)
out = {}
for c in sorted(cty):
    ctr = cty[c]; tot = sum(ctr.values()); rk = sorted(ctr.items(), key=lambda kv: (-kv[1], kv[0]))
    out['06'+c] = {'d': rk[0][0], 'ds': [k for k, v in rk if v > 0] if len(rk) > 1 else [], 'pop': {str(k): v for k, v in rk}, 'total': tot,
                   'plurality_share': round(rk[0][1]/tot, 4) if tot else None,
                   'margin_over_2nd': (rk[0][1]-rk[1][1]) if len(rk) > 1 else None,
                   'tie_break': 'exact tie, lowest district number' if len(rk) > 1 and rk[0][1] == rk[1][1] else None}
json.dump({'wave': 94, 'date': '2026-10-06', 'tie_rule': 'highest adjusted population; exact ties go to the lowest district number', 'method': 'sum of SWDB adjusted 2020 block population (Population P2) by AB604 block->CD equivalency',
           'sources': ['https://statewidedatabase.org/pub/data/d25/AB604.zip', 'https://statewidedatabase.org/pub/data/D20/PL94/state/state_PL94_2020_Adjusted_P24_DOJ_Block_csv.zip', 'https://statewidedatabase.org/pub/data/d25/AB604%202025-08-16.zip'],
           'district_populations_match_official': not mism, 'cd_populations': {str(k): v for k, v in sorted(cdpop.items())}, 'counties': out},
          open('ca-county-cd-popweighted.json', 'w'), indent=1)
sp = {k: v for k, v in out.items() if v['ds']}
print('counties', len(out), 'split', len(sp))
for k, v in sp.items(): print(k, 'd=', v['d'], 'share', v['plurality_share'], 'margin', v['margin_over_2nd'], 'ds', v['ds'])
