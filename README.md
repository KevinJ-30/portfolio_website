# Kevin Jacob — Portfolio

React + TypeScript + Vite portfolio. Monochrome Swiss-editorial design, dark by default with a light theme toggle.

Live: [kevinj-dev.vercel.app](https://kevinj-dev.vercel.app)

## Quick start

```bash
npm install
npm run dev      # Vite dev server
```

Other scripts: `npm run build` (typecheck, then bundle), `npm run lint`, `npm run preview` (serve the production build), `npm start` (serve an existing `dist/` through Express).

## Editing content

**All résumé content lives in [`src/data/profile.ts`](src/data/profile.ts).** Pages import from it; nothing is hardcoded in components. To update the site after a résumé change, edit that file and drop the new PDF at `public/Kevin_Jacob_Resume.pdf`.

## Design system

Defined in [`src/index.css`](src/index.css) and [`tailwind.config.js`](tailwind.config.js). Strictly monochrome — every surface and text tone is a value on one neutral ramp, flipped between themes via CSS custom properties on `[data-theme]`.

**Never use raw Tailwind colours** (`blue-400`, `gray-300`, `white/80`). Use the semantic tokens:

| Token | Use |
| --- | --- |
| `bg-bg`, `bg-surface`, `bg-surface-2` | Page and panel backgrounds |
| `text-fg`, `text-fg/85`, `text-fg/75`, `text-fg/65` | Primary, secondary, body, meta text |
| `border-line`, `border-line-strong` | Hairlines |
| `font-display` / `font-sans` / `font-mono` | Inter Tight / Inter / JetBrains Mono |
| `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-label` | Fluid type scale |
| `ease-editorial` | The only transition easing |

Component classes: `.container-x` (page gutter), `.label`, `.rule`, `.panel`, `.link-line`, `.btn`, `.btn-ghost`, `.chip`, `.section`.

Shared components: `Reveal` / `RevealGroup` (scroll reveals), `Section` (numbered section header), `PageHeader` (page title block), `ThemeToggle`.

**Readability floor:** body text sits at 17px and no text tone goes below `text-fg/65`. Mono labels and chips are 13px. Don't reintroduce 11px labels or `/45` body copy.

**Imagery** follows one rule: all media (headshot, project screenshots, video embeds) renders `grayscale` and eases to full colour on hover or focus. Monochrome at rest, colour when you engage with it.

**Copy:** plain and factual, first person, no marketing voice. No em dashes or en dashes anywhere, including date ranges (`May 2026 to Aug 2026`).

**Motion** comes from [`src/lib/motion.ts`](src/lib/motion.ts) — import the variants, don't redefine them. The vocabulary is deliberately narrow: opacity plus a ~14px rise, 0.65s, one easing curve. Scroll-triggered content uses `whileInView` with `viewportOnce` so it animates when you reach it, not on mount. `prefers-reduced-motion` is honored globally in `index.css`.

## Architecture

```
src/
  data/profile.ts     Single source of truth for all résumé content
  lib/motion.ts       Shared framer-motion variants
  lib/theme.tsx       Theme context; no-flash resolution happens in index.html
  components/         Navbar, Footer, ProjectCard, and shared primitives
  pages/              Home, Projects, Timeline, About, Resume
server.js             Optional Express static server for `npm start`
```

## Deployment

Vercel, as a static SPA. `vercel.json` routes assets directly and everything else to `index.html` so client-side routes resolve on a hard refresh.
