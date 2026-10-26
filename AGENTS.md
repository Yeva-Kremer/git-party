# AGENTS.md

## Project

- Website for **Creative Coding Kortrijk (CCK)**, a creative coding community in Kortrijk that brings together artists, designers, programmers and enthusiasts working at the intersection of art and code (generative art, interactive installations, digital fabrication, algorithmic music).
- Audience: community members and newcomers interested in creative coding, from beginners to experienced developers, who want to discover the community, its workshops, foundations and team, and join in.
- Built as a team assignment for the course WEB 3 (Devine, Howest) by Eva Kremer, Natalia Rocha Iraizos and Hieu Truong.
- Content: a landing page (hero), foundations (the community's values: collaboration, experiment, fusion, learning), workshops (e.g. pen plotter, p5.js, Max/MSP), team members, an About page and a News page.
- The site content (about text, team members, workshops) is fictional placeholder content; the About page ends with a "Fake" section saying so.
- Design source: Figma file "CCK" (linked in `README.md`), adapted from the community "Positivus Landing Page" design. Illustrations come from pixels.market (Doodledo).
- The repository is in a starter state: several components and pages contain `##PLACEHOLDER##` tokens that still need to be implemented (e.g. `src/pages/news.astro` uses `##TITLE##`, `##DATE##` and `##CONTENT##`).
- Components link to detail routes `/workshops/[id]`, `/team/[id]` and `/foundations/[id]`, which do not exist yet.
- `src/components/Code.astro` holds a four-digit code puzzle; digits are hidden across pages (e.g. the news page reveals the third digit).

## Stack & constraints

- Astro `^7.4.0`, ESM project (`"type": "module"`), `astro.config.mjs` uses the default config with no integrations.
- TypeScript via `astro/tsconfigs/base`, with `strictNullChecks` and `allowJs` enabled.
- Scripts: `npm run dev` (dev server with `--host`), `npm start`, `npm run build`, `npm run preview`, `npm run astro`.
- Content collections are defined in `src/content.config.ts` using the `glob` loader and `astro/zod` schemas, with Markdown files in `src/content/`:
  - `workshops`: `title`, `image`. Currently 3 entries, numbered `01-` to `03-`.
  - `team`: `name`, `function`, `bio`, `pic`. Currently 3 entries.
  - `foundations`: `title`, `description`. Currently 4 entries.
  - Images for each collection live in an `img/` folder next to the entries and are referenced through Astro's `image()` schema helper.
- Source layout:
  - `src/pages/`: `index.astro`, `news.astro`, `about.md`
  - `src/layouts/`: `Base.astro` (HTML shell, header, footer, global styles) and `Markdown.astro` (used by Markdown pages such as `about.md`)
  - `src/components/`: Astro components (Header, Footer, Hero, Team, Workshops, Foundations, their card components, and `Code.astro`)
  - `src/styles/`: `reset.css`, `global.css`, `markdown.css`
  - `src/assets/`: images and SVGs, processed by Astro
  - `public/`: static files served as is (`favicon.svg`)
- No CSS framework. Styling is plain CSS:
  - global stylesheets imported in `Base.astro`
  - scoped `<style>` blocks in components
  - CSS custom properties defined in `global.css` for colors (`--color-primary: #B9FF66`, `--color-black: #191A23`, ...), a fluid type scale (`--fs-*`) and a fluid spacing scale (`--sp-*`, e.g. `--sp-l`, `--sp-3xl`), built with `clamp()`
- Font: Space Grotesk Variable, installed through `@fontsource-variable/space-grotesk`.
- Markdown linting: `.markdownlint.json` disables MD041 (first line heading) and MD013 (line length).
- The only runtime dependencies are `astro` and `@fontsource-variable/space-grotesk`. There is no UI framework and no test setup.
- The site is static (no adapter or server rendering configured). Deployment target is not defined in the repo.
- Git: `main` is the default branch; work happens on feature branches (e.g. `feature/readme`) merged through pull requests.