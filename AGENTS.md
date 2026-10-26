# AGENTS.md

## Project

- Website for Creative Coding Kortrijk (CCK), a community of artists, designers, programmers and enthusiasts exploring art and code in Kortrijk.
- Audience: people interested in creative coding, from beginners to experienced developers, who want to learn about the community, its workshops and its team.
- Content: a landing page (hero), foundations (the community's values), workshops, team members, an About page and a News page.
- The News page (`src/pages/news.astro`) is still a template with `##TITLE##`, `##DATE##` and `##CONTENT##` placeholders.
- The About page contains placeholder text and ends with a "Fake" section saying the content is fake.
- Design source: Figma file "CCK", adapted from the Positivus landing page community file (links in `README.md`). Illustrations come from pixels.market (Doodledo).

## Stack & constraints

- Astro `^7.4.0`, ESM project (`"type": "module"`), `astro.config.mjs` uses the default config with no integrations.
- Scripts: `npm run dev` (dev server with `--host`), `npm start`, `npm run build`, `npm run preview`.
- TypeScript via `astro/tsconfigs/base`, with `strictNullChecks` and `allowJs` enabled.
- Content collections are defined in `src/content.config.ts` using the `glob` loader and `astro/zod` schemas, with Markdown files in `src/content/`:
  - `workshops`: `title`, `image`. Currently 3 entries, numbered `01-` to `03-`.
  - `team`: `name`, `function`, `bio`, `pic`. Currently 3 entries.
  - `foundations`: `title`, `description`. Currently 4 entries.
  - Images for each collection live in an `img/` folder next to the entries and are referenced through Astro's `image()` schema helper.
- Source layout:
  - `src/pages/`: `index.astro`, `news.astro`, `about.md`
  - `src/layouts/`: `Base.astro`, `Markdown.astro`
  - `src/components/`: Astro components (Header, Footer, Hero, Team, Workshops, Foundations, and their card components)
  - `src/styles/`: `reset.css`, `global.css`, `markdown.css`
  - `src/assets/`: images and SVGs
  - `public/`: static files (`favicon.svg`)
- No CSS framework. Styling is plain CSS:
  - global stylesheets imported in `Base.astro`
  - scoped `<style>` blocks in components
  - CSS custom properties defined in `global.css` for colors (`--color-primary: #B9FF66`, `--color-black: #191A23`, ...), a fluid type scale (`--fs-*`) and a fluid spacing scale (`--sp-*`)
- Font: Space Grotesk Variable, installed through `@fontsource-variable/space-grotesk`.
- The only runtime dependencies are `astro` and `@fontsource-variable/space-grotesk`. There is no UI framework, test setup or linter configured.
- The site is static (no adapter or server rendering configured). Deployment target is not defined in the repo.
- Git: `main` is the default branch; work happens on feature branches (e.g. `feature/readme`) merged through pull requests.
