# Jovan Portfolio — React rebuild

This is the React/Vite replacement for the original static portfolio.

## Structure

```text
src/
├── components/   Reusable UI pieces
├── data/         Portfolio content and links
├── sections/     Page sections
└── styles/       Reset, tokens, layout, component, section, and responsive CSS
public/assets/    Static files such as the profile photo and CV
```

## Run locally

```bash
npm install
npm run dev
```

## GitHub Pages

The site is published at <https://watsurprob.github.io/Personal_website/>. The Vite base path is configured for this repository in `vite.config.js`.

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which installs dependencies, builds the site, and publishes `dist/` through GitHub Pages. The workflow can also be started manually from the Actions tab.
