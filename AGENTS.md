# AGENTS.md

## Project

Website of Creative Coding Kortrijk (CCK), a community in Kortrijk of artists, designers, programmers and enthusiasts who explore the intersection of art and code (generative art, interactive installations, digital fabrication, algorithmic music).

The site is for community members and newcomers of all skill levels. It presents the community (home, about, news), its workshops (e.g. pen plotter, p5.js, Max/MSP), its team, and its foundations (collaboration, experiment, fusion, learning).

The design is made in Figma (linked in `README.md`). It is adapted from the Positivus community landing page design. Illustrations come from Doodledo on pixels.market.

## Stack & constraints

- Astro 7 (`astro` in `package.json`), ES modules (`"type": "module"`), TypeScript with `astro/tsconfigs/base` and `strictNullChecks`.
- Static Astro site with default config (`astro.config.mjs` is empty).
- Content collections defined in `src/content.config.ts`, using the `glob` loader on Markdown files and Zod schemas (`astro/zod`):
  - `workshops`: `title`, `image`
  - `team`: `name`, `function`, `bio`, `pic`
  - `foundations`: `title`, `description`
- Collection content lives in `src/content/<collection>/*.md`, with images in `img/` subfolders next to them.
- No CSS framework. Plain CSS: `src/styles/reset.css`, `global.css`, `markdown.css`, plus scoped `<style>` blocks in components. Spacing uses CSS custom properties such as `--sp-l` and `--sp-3xl`.
- Font: Space Grotesk Variable via `@fontsource-variable/space-grotesk`.
- Components in `src/components/` (`.astro`), layouts in `src/layouts/` (`Base.astro`, `Markdown.astro`), pages in `src/pages/` (`index.astro`, `news.astro`, `about.md`).
- Static assets: `src/assets/` (processed) and `public/` (served as is).
- Markdown linting via `.markdownlint.json` (MD041 and MD013 disabled).
- npm scripts: `dev`, `start`, `build`, `preview`, `astro`.
- Git repository with feature branches (currently `feature/HieuTruong`).
