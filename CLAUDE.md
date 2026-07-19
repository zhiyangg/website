# CLAUDE.md

Personal portfolio / résumé site for Zhi Yang Chen. Live at [zhiyangchen.dev](https://zhiyangchen.dev).
Single static page (plus a 404): header, GTA office map, experience timeline, education, footer.

## Stack & commands

- **Astro 7** (static output) — `.astro` components, no client framework.
- **Tailwind CSS v4** via `@tailwindcss/vite` — config lives in CSS (`@theme` in `src/styles/global.css`), **not** a `tailwind.config.js`.
- **Leaflet** — the one piece of client-side JS, for the map.
- `@astrojs/sitemap` — generates `sitemap-index.xml` at build.
- TypeScript strict (`astro/tsconfigs/strict`).

```sh
npm run dev      # dev server (localhost:4321)
npm run build    # production build → dist/
npm run preview  # serve the built site
npm run check    # astro check — type-check (CI runs this)
```

Node ≥ 22.12. Package manager is **npm** (package-lock.json committed).

## Structure

```
src/
  pages/
    index.astro        Home page — SEO/OG/JSON-LD meta + page-specific <head>, composes the sections
    404.astro          Minimal not-found page (noindex)
  layouts/
    Layout.astro       Shared <html>/<head>/<body> shell + theme bootstrap + ThemeToggle. Props: title, description?, robots?. Named "head" slot for per-page meta.
  components/
    Header.astro       Name, Chinese name, role (typewriter effect), social icons
    Map.astro          Leaflet map of GTA offices; all map logic is here (client script)
    Experience.astro   Maps experience data → EntryCard; owns "Currently"/"Previously" grouping
    Education.astro    Single EntryCard under an "Education" heading
    EntryCard.astro    Shared entry row (logo + title/subtitle/date/summary/optional tech). Used by Experience + Education.
    Footer.astro       "Last updated" from git commit date (build-time)
    ThemeToggle.astro  Dark-mode button; syncs localStorage + theme-color meta
  data/
    experience.ts      current + previous[] roles (typed). CONTENT LIVES HERE.
    locations.ts       Map pins: office name/role/lat/lng/current. CONTENT LIVES HERE.
  styles/global.css    Tailwind import, @theme tokens, dot-grid bg, Leaflet tooltip/popup restyling
  assets/              icons/ (svg, imported ?raw) and logos/ (png, via astro:assets <Image>)
public/                favicon.png, og.jpg, robots.txt (static, served as-is)
```

**To update content** (the common future edit): add/adjust a role in `data/experience.ts`; add/move a map pin in `data/locations.ts`. No component changes needed.

## Design system

Consistency matters — this is a portfolio. Match these exactly.

**Colors** — base palette is Tailwind **`stone`** (warm gray), with overrides in `global.css` `@theme`:
- `--color-stone-50: #fdfdfc` (warm off-white body bg), `--color-stone-100: #f7f6f3` — intentionally warmer than Tailwind's default stone. Don't revert.
- Accent **`terracotta`** (custom, not in Tailwind): `--color-terracotta-400: #e0794b`, `--color-terracotta-600: #c2552a`. Used only for link hover states and the 404 "Back home" link.
- **Indigo** (`text-indigo-600` / `dark:text-indigo-300`) marks the "Currently" label only.
- Body: `bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-100`.
- Muted text (headings, meta, dates): `text-stone-400 dark:text-stone-500`. Summaries: `text-stone-600 dark:text-stone-300`.
- Map markers (hardcoded in `Map.astro`): current `#4f46e5` light / `#a5b4fc` dark; past `#a8a29e`; ring `#ffffff` light / `#1c1917` dark.

**Typography** — default Tailwind sans stack (no custom font).
- Name (h1): `text-3xl font-semibold tracking-tight sm:text-4xl`.
- Section headings: `text-xs font-medium uppercase tracking-wide` + muted color.
- Entry title (h3): `font-medium`. Summary: `text-sm leading-relaxed`. Meta/date/tech: `text-xs`.

**Spacing / layout**
- Page: `main` is `max-w-4xl`; each section is `max-w-3xl` inner with `px-6 py-8 sm:py-10`.
- Header: `px-6 pt-16 pb-8 sm:pt-20`, centered column, `gap-3`.
- Logos: `h-10 w-10 rounded-md object-contain`.
- Indentation is **tabs** across `.astro`/`.ts` files.

**Dark mode** — class-based (`.dark` on `<html>`), custom variant `@custom-variant dark (&:where(.dark, .dark *))`. Toggle writes `localStorage.theme`; absent = follow OS.

## Non-obvious decisions — DO NOT "fix" these

- **`box-sizing: content-box` *and* `padding-right: 2px` on `.typed-reveal`** (`Header.astro`) are both load-bearing, and both are needed — dropping either re-clips the final "D" of "@ AMD" on mobile. `content-box` keeps the 1px cursor border from eating into `width: 100%` (Tailwind sets `border-box` globally); the padding covers a WebKit-only discrepancy where the reveal's `width: 100%` resolves ~1.3–1.6px *narrower* than the ghost's own text advance in the same `inline-grid` column, so the text overruns the `overflow: hidden` clip box. **Chromium does not reproduce this** (it resolves ~0.5px wider than the text, so the glyph renders whole) — verify this one in Playwright's `webkit`, not on a desktop browser. The padding is on the reveal only, never the ghost: the grid column must keep measuring exactly the ghost or the centered line shifts.
- **Education logo passes only `logoWidth`, no height** (`Education.astro`). The UofT logo is portrait (195×373); forcing a square height distorts the generated image. Astro derives height from the source aspect ratio. Already commented inline.
- **Theme bootstrap is an inline `is:inline` script in `<head>`** (`Layout.astro`) and must stay there — it runs before first paint to prevent a flash of the wrong theme (FOUC). Don't move it to a module/external script or below the body.
- **`theme-color` hex is hardcoded in 3 spots** (`Layout.astro` meta + its bootstrap script, and `ThemeToggle.astro`): `#fdfdfc` light / `#1c1917` dark. If the body bg ever changes, update all three.
- **`scrollRestoration = "manual"` + `scrollTo(0,0)`** (index head slot) is deliberate: refresh starts at top instead of restoring scroll.
- **Map dragging is disabled on touch** (`dragging: !isTouch`) so one-finger drag doesn't hijack page scroll; zoom buttons handle interaction. Intentional, not an oversight.
- **Two AMD — Markham pins** at slightly different coordinates (`locations.ts`) are correct — the full-time role and the internship were in different buildings.
- **Current location uses a permanent tooltip; past locations use click popups.** The current tooltip is hidden while any popup is open (`popupopen`/`popupclose`) so the two never stack.
- **A `MutationObserver` on `<html>`'s class** re-sets the tile URL and re-renders marker icons on theme change — Leaflet tiles/icons can't use CSS variables, so this is how dark mode reaches them.
- **Marker hit area (28px) is larger than the visible dot** for touch tap targets; the anchor is centered so alignment holds.
- **Footer "Last updated" runs `git log` at build time** with a `new Date()` fallback — it reflects the last commit date, by design.
- **Leaflet popup/tooltip are restyled in `global.css`** for both themes to match the site; the stock white Leaflet styles are intentionally overridden.

## Deploy / CI

- Push to `main` → **`deploy.yml`** builds via `withastro/action` and deploys to **GitHub Pages**.
- **`ci.yml`** type-checks + builds on every PR and push (gate for auto-merge).
- **Dependabot** patch/minor updates auto-merge after CI passes; majors are manual.
- `astro.config.mjs` sets `site: "https://zhiyangchen.dev"` (needed for canonical/OG/sitemap absolute URLs). Sitemap excludes `/404`.
