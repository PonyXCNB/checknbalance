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

## Promo links

Tag every shared link with the convention in `docs/UTM-CONVENTION.md`.
That file is the only campaign pattern (`utm_source=x`, `utm_medium=social`,
`utm_campaign=cnb-calendar-YYYY-MM`). Do not keep a second pattern.

Land on `https://checknbalance.org/` or a real state page such as
`https://checknbalance.org/nc.html`. For California, Missouri, Texas, and
DC, use `state.html?state=`. The `/ca.html` shortcuts drop extra query tags.
