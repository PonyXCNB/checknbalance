# Analytics and promo links

Plain-language notes for publishing checknbalance.org. No tracking is live
until you finish one of the choices below. The site does not invent an ID.

## Analytics — pick one

### Choice A — Netlify Web Analytics (no code, no ID)

This counts visits on Netlify’s servers. It does not add a script to the
pages, it does not use cookies, and ad blockers do not hide those counts.
Netlify bills it as a paid add-on.

1. Open the project: [strong-bienenstitch-2e0547](https://app.netlify.com/projects/strong-bienenstitch-2e0547).
2. Go to **Analytics & metrics → Analytics** (Netlify’s current label on
   [the Web Analytics docs](https://docs.netlify.com/manage/monitoring/web-analytics/overview/)).
3. Select **Enable Analytics**.

Counts start from deploys, and Netlify may backfill up to 30 days. Leave
`PLAUSIBLE_DOMAIN` in `analytics.js` empty if you use this.

### Choice B — Plausible (one line in the repo)

Plausible is a cookie-free pageview counter loaded only after you set a
domain. The script tag is already on every public page and points at
`analytics.js`. While the domain is blank, that file does nothing.

1. Create a site at [plausible.io](https://plausible.io) for `checknbalance.org`
   (the address visitors use, without `www`).
2. Open `analytics.js` and change the empty quotes to that domain:

```javascript
var PLAUSIBLE_DOMAIN = "checknbalance.org";
```

3. Save, commit, and push to `main`. Netlify publishes the push. After that,
   pageviews show in the Plausible dashboard.

Do not paste a Google tag or any other ID into the pages. Do not turn on
both Choice A and Choice B unless you want two sets of numbers.

## UTM tags for promo links

The CnB Calendar should tag links the same way every time:

| Piece | Value |
| --- | --- |
| `utm_source` | where it was posted, e.g. `x` |
| `utm_medium` | `social` |
| `utm_campaign` | `cnb_YYYYMMDD` (the date of the post) |
| `utm_content` | optional, a short label such as `map` or `nc-senate` |

Land on the real page, not a shortcut that only exists as a redirect.

- Home: `https://checknbalance.org/`
- A built state: `https://checknbalance.org/nc.html` (swap the two letters)
- California, Missouri, or Texas starter: `https://checknbalance.org/state.html?state=CA` (or `MO`, `TX`)
- District of Columbia marquee: `https://checknbalance.org/state.html?state=DC`

Example for a September 22, 2026 post on X that points at the map:

```
https://checknbalance.org/?utm_source=x&utm_medium=social&utm_campaign=cnb_20260922&utm_content=map
```

Example for a North Carolina link:

```
https://checknbalance.org/nc.html?utm_source=x&utm_medium=social&utm_campaign=cnb_20260922&utm_content=nc
```

`/ca`, `/ca.html`, and the same paths for Missouri, Texas, and DC now
redirect to the starter or marquee page, but those redirects drop extra
query tags. Put UTM tags on the `state.html?state=` address (or on a real
state page), not on `/ca.html`.
