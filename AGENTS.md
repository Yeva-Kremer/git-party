# AGENTS.md

## Project

- Website for **Creative Code Kortrijk (CCK)**, a creative coding community in Kortrijk that brings together artists, designers, programmers and enthusiasts working at the intersection of art and code.
- Audience: people interested in creative coding, from beginners to experienced professionals, who want to discover the community, its workshops, foundations and team, and join in.
- The site content (about text, team members, workshops) is fictional placeholder content.
- Built as a team assignment for the course WEB 3 (Devine, Howest) by Eva Kremer, Natalia Rocha Iraizos and Hieu Truong.
- Design: Figma file linked in `README.md`, based on the community "Positivus Landing Page" design; illustrations from pixels.market (Doodledo).
- Pages: home (`/`), about (`/about`), news (`/news`). Components link to detail routes `/workshops/[id]`, `/team/[id]` and `/foundations/[id]`, which do not exist yet.
- The repository is in a starter state: several components and pages contain `##PLACEHOLDER##` tokens (e.g. `##ID##`, `##TITLE##`, `##DATE##`) that still need to be implemented.
- `src/components/Code.astro` holds a four-digit code puzzle; digits are hidden across pages (e.g. the news page reveals the third digit).

## Stack & constraints

- **Astro** `^7.4.0` (`package.json`), ES modules (`"type": "module"`), default `astro.config.mjs` with no integrations.
- **TypeScript** via `astro/tsconfigs/base`, with `strictNullChecks` and `allowJs` enabled.
- **Content collections** defined in `src/content.config.ts` using the `glob` loader and `astro/zod` schemas:
  - `workshops` (`src/content/workshops/*.md`): `title`, `image` (local image).
  - `team` (`src/content/team/*.md`): `name`, `function`, `bio`, `pic` (local image).
  - `foundations` (`src/content/foundations/*.md`): `title`, `description`.
  - Collection images live in an `img/` folder next to the Markdown files.
- **Layouts**: `src/layouts/Base.astro` (HTML shell, header, footer, global styles) and `src/layouts/Markdown.astro` (used by Markdown pages such as `src/pages/about.md`).
- **Styling**: plain CSS, no CSS framework.
  - Global styles in `src/styles/` (`reset.css`, `global.css`, `markdown.css`), imported in `Base.astro`.
  - Design tokens as CSS custom properties in `global.css`: colors (`--color-*`), fluid type scale (`--fs-*`) and fluid spacing (`--sp-*`) built with `clamp()`.
  - Component styles in scoped `<style>` blocks inside `.astro` files.
- **Font**: Space Grotesk via `@fontsource-variable/space-grotesk`.
- **Assets**: images processed by Astro in `src/assets/`; static files (favicon) in `public/`.
- **Markdown linting**: `.markdownlint.json` disables MD041 (first line heading) and MD013 (line length).
- **Scripts**: `npm run dev` (dev server with `--host`), `npm start`, `npm run build`, `npm run preview`.
- No other runtime dependencies, no JavaScript UI framework, no test setup.
