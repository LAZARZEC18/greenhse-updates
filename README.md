# Greenhse — site updates for the demolights build

Five changes, ready to drop in. **Every file here sits at the path it belongs
at in the project**, so you can copy the contents of this repo over the top of
the site and everything lands where it should. Replace the existing files.

Nothing here needs a new package, a config change, or a build step beyond the
normal one. No database, no environment variable.

Two small edits at the bottom are add-a-line jobs rather than file replacements
— see **Two lines to add by hand**.

Checked against the live site on 17 September — none of these are on it yet.

---

## 1. Strip light finder

```
site/lib/stripFinder.jsx
site/pages/categories/StripLightsPage.jsx
public/images/finder/*.webp          (16 photos — new folder)
```

The finder on the live site is still the old version: 4 questions, 6 places,
and a "Somewhere else" option that leads nowhere. This is the rebuilt one —
**9 exact places, and every answer leads to one specific product** with the
right transformer, controller, remote and channel.

The specs come from the printed strip lighting brochure, including the
handwritten corrections on it:

- High Lumen SMD is IP65 only, and its connectors carry 3 m
- the 23 W/m display strip is 4000K and 5000K, IP20
- the CCT COB is 2700–6000K, and its IP65 grade is rated for outdoors
- outdoors now offers adjustable white as well as 3000K and RGB
- neon CCT is 2700–6000K

The rest of the strip lights page is unchanged and already matches.

## 2. High bay finder

```
site/components/catalog/HighBayFinder.jsx
site/pages/categories/HighBayLightsPage.jsx
```

Asks ceiling height and the kind of space, then recommends the right high bay
and how many. Not on the site at all yet.

## 3. Homepage news ticker

```
site/components/home/NewsTicker.jsx
data/ticker.json
app/page.js
```

`app/page.js` changes only to add the ticker to the page — if you have edited
that file, just add the two lines for `NewsTicker` rather than replacing it.

## 4. Blog header photographs

```
data/site.json
public/blog/hero/*.webp              (46 photos)
```

**32 posts get a new header photograph**, supplied by Lazar. The other 14 keep
the one they had; all 46 files are included so the set stays consistent.

Each image is 1600 × 900 WebP, and each is dark down the left-hand side, which
is where the post title and lede sit — so the white text reads cleanly over the
top with no scrim needed. `data/site.json` carries the `hero` path for every
post; nothing else in it changed.

## 5. Switch Your Thinking page

```
app/switch-your-thinking/page.js
site/pages/SwitchYourThinkingPage.jsx
public/images/syt/affiliate-banner.webp
```

This page exists on greenhse.com but has never been on the new site:

`greenhse.com/products/lighting-perth/switch-your-thinking-wa.html`

It is the Switch Your Thinking partner page — 10% off LED lighting and smart
plugs and switches, 5% off DC ceiling fans, for residents and businesses in the
16 participating councils. Rebuilt in the current design at
**`/switch-your-thinking/`**, with the wording, the rates, the four claim steps
and the council list taken from the old page as they read there.

It is a plain static page: no data file, no API call, nothing to configure.

---

## Two lines to add by hand

These two files are shared with the rest of the site, so they are **not**
included — please add the lines to your own copies rather than overwriting.

**1. The footer link.** In `site/lib/nav.jsx`, in `footerColumns`, in the
**Explore** column, alongside Smart Life and Energy & Battery:

```js
{
  label: 'Switch Your Thinking',
  href: '/switch-your-thinking/',
},
```

**2. The redirects.** In `public/_redirects`, so the old address keeps working:

```
/products/lighting-perth/switch-your-thinking-wa.html  /switch-your-thinking/  301
/products/lighting-perth/switch-your-thinking-wa/  /switch-your-thinking/  301
/lighting-perth/switch-your-thinking-wa.html  /switch-your-thinking/  301
/switch-your-thinking-wa.html  /switch-your-thinking/  301
```

---

Any questions, let me know.
