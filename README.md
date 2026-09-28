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

The Vite base path is configured for GitHub Pages at `/Personal_website/`.

Before publishing, place the existing `F1040032.JPG` and `JovanCV.pdf` files in `public/assets/` as `profile.jpg` and `JovanCV.pdf` respectively.
