# Check n Balance — UTM convention (CnB Calendar)

Use this on every outbound link from social, email, partners, and the CnB
Calendar. It is the only UTM convention for the site. Analytics setup is
in `docs/analytics-and-utm.md`. Tags still belong on every link now, even
though no counter is turned on yet.

## Required parameters

| Param | Rule | Example values |
|-------|------|----------------|
| `utm_source` | Where the click originated | `x`, `instagram`, `facebook`, `threads`, `bluesky`, `email`, `newsletter`, `partner`, `calendar` |
| `utm_medium` | Channel type | `social`, `email`, `referral`, `qr`, `sms` |
| `utm_campaign` | Named push. Lowercase, hyphens, dated when it helps | `cnb-calendar-2026-09`, `nc-senate-brief-2026-09-22`, `election-sprint-wave1` |

## Optional

| Param | When | Example |
|-------|------|---------|
| `utm_content` | Which link or creative on a post with more than one | `map-cta`, `list-cta`, `bio-link` |
| `utm_term` | Paid-search keywords only. Skip it for organic social | — |

## Where the link should land

Checked against the live site on September 22, 2026:

- Home: `https://checknbalance.org/`
- A built state: `https://checknbalance.org/nc.html` (swap the two letters). This is the address in the sitemap and on the page’s canonical tag. `https://checknbalance.org/nc` also returns the page and keeps the query string, so an older pretty link still works. Do not invent a second sitemap entry for it.
- California, Missouri, or Texas: `https://checknbalance.org/state.html?state=CA` (or `MO`, `TX`)
- District of Columbia: `https://checknbalance.org/state.html?state=DC`

`/ca`, `/ca/`, `/ca.html`, `/california`, and the same kinds of addresses for Missouri, Texas, and DC redirect to the starter or marquee page. Those redirects drop any other query string, so a UTM tag on `/ca.html` never arrives. Put the tags on `state.html?state=` instead.

## Pattern

```
https://checknbalance.org/<path>?utm_source=<platform>&utm_medium=social&utm_campaign=cnb-calendar-<YYYY-MM>
```

Examples:

- Homepage from X in September 2026:

```
https://checknbalance.org/?utm_source=x&utm_medium=social&utm_campaign=cnb-calendar-2026-09
```

- North Carolina page from an Instagram story:

```
https://checknbalance.org/nc.html?utm_source=instagram&utm_medium=social&utm_campaign=cnb-calendar-2026-09&utm_content=story
```

- California starter from a calendar email:

```
https://checknbalance.org/state.html?state=CA&utm_source=calendar&utm_medium=email&utm_campaign=cnb-calendar-2026-09
```

## Naming rules

1. Lowercase only. Use hyphens inside a value, not underscores.
2. `utm_source=x` for X. Do not use `twitter`.
3. Calendar posts use `utm_campaign=cnb-calendar-YYYY-MM` (the month of the slot).
4. A one-off election sprint may use `utm_campaign=election-sprint-<slug>` instead of the calendar month tag.
5. Never put a person’s name, email, or other private detail in a UTM value.
