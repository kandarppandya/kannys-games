# kannys-games

Source for https://kannysgames.com/, the website of Kanny's Games (indie game studio).

Plain static HTML/CSS with one small vanilla JS file. No build step, no framework.

## Structure

```
index.html                         studio homepage
games/index.html                   games catalogue
games/kannys-game-room/index.html  Kanny's Game Room
games/cosmic-escape/index.html     Cosmic Escape (coming soon)
privacy/CosmicEscape.html          public privacy policy URL (do not move)
privacy/KannysGameRoom.html        shell only: policy text still to be added
404.html                           served by the host for unknown URLs
assets/css/                        studio.css (shared) + one stylesheet per page type / game
assets/js/site.js                  scroll reveals + homepage ambient colour
assets/img/                        web-optimised images (original art is kept locally, not in this repo)
sitemap.xml, robots.txt            SEO
app-ads.txt                        AdMob (do not move)
googlef…html                       Google Search Console verification (do not move)
_redirects                         intentionally no rules (see comments inside)
```

Studio styling (`studio.css`) and each game's world (`game-room.css`, `cosmic-escape.css`) are kept separate on purpose.
Game themes are scoped to `[data-game="…"]`.

## Local preview

```
python -m http.server 8000
```

then open http://localhost:8000/.

Do not open `index.html` by double-clicking it. Asset and page links are root-relative (`/assets/...`, `/games/`), which is what the live domain and `404.html` need, so they only resolve when served from a web root. A plain `http.server` also returns its own 404 page rather than `404.html`.
