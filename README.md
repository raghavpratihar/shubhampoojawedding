# Shubham weds Pooja

Wedding invitation website for Shubham & Pooja — Friday, 27th November 2026, Girraj Sharma Farm House, Faridabad.

## Editing content

All names, dates, events, venue and contact details are in `src/data/wedding.js`. Event images are in `public/images/`.

## Develop

```sh
npm install
npm run dev
```

## Deploy (GitHub Pages)

1. Create a GitHub repo named `shubhampoojawedding` (or change `base` in `vite.config.js` to match your repo name).
2. Replace `OWNER` in the `og:` tags in `index.html` with your GitHub username.
3. `git remote add origin <your repo url>` and push.
4. `npm run deploy` — builds and publishes `dist/` to the `gh-pages` branch.
