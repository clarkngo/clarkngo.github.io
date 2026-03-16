# Site Reference

## Deployment

- **Type**: Static site (Single Page Application)
- **Platform**: GitHub Pages
- **Repository**: `clarkngo/clarkngo.github.io`
- **Live URL**: https://clarkngo.github.io
- **Branch serving pages**: `main` (from `/dist` folder)

## Architecture

- **Framework**: React 19 + Vite 7
- **Router**: React Router DOM v7 with `HashRouter` (required for GitHub Pages — no server-side routing)
- **Styling**: CSS Modules per component + global `index.css`
- **Build output**: `vite-plugin-singlefile` bundles everything into a single `dist/index.html` file
- **Assets**: Inlined into the HTML at build time

## Build & Deploy

```bash
# Install dependencies
npm install

# Local development (with HMR)
npm run dev

# Production build → outputs to /dist
npm run build

# The /dist folder is committed and served by GitHub Pages
```

## GitHub Pages Constraints

- No server-side rendering or dynamic routing — `HashRouter` handles all navigation via URL hash (`/#/route`)
- A `public/404.html` redirects unknown paths back to the app root
- All assets must be relative paths or inlined — no CDN or dynamic imports at runtime
- The entire site ships as a single `dist/index.html` (~3-4 MB, all CSS/JS inlined)

## Design System

- **Font**: Plus Jakarta Sans (Google Fonts, weights 400–800)
- **Primary accent**: `#6a11cb` (purple)
- **Hero background**: dark purple gradient (`#0f0720 → #6a11cb`)
- **Theme**: Light background with purple accents; dark cinematic hero
- **CSS variables**: defined in `src/index.css` under `:root`

## File Structure

```
src/
  components/
    Layout.jsx          # Fixed header, nav, footer wrapper
    Layout.module.css
  pages/
    Home.jsx            # Landing page — cinematic hero + project cards
    Professional.jsx    # Work timeline
    Profile.jsx         # Hub linking to sub-pages
    Research.jsx        # Publications and presentations
    Volunteer.jsx       # Volunteer/coaching experience
    Workshops.jsx       # Workshops taught
    Courses.jsx         # Available courses
    Proposal.jsx        # Grant and STC proposals
    Mentor.jsx          # Full mentorship resume
  hooks/
    useScrollReveal.js  # IntersectionObserver hook for scroll animations
  assets/              # Images (logo, hero)
  index.css            # Global styles, CSS variables, keyframes
  App.jsx              # Route configuration (HashRouter)
  App.css              # Root-level overrides
dist/
  index.html           # Built output — what GitHub Pages serves
public/
  404.html             # Redirects all 404s to app root
```

## Adding New Pages

1. Create `src/pages/MyPage.jsx` and `MyPage.module.css`
2. Import and add a route in `src/App.jsx`
3. Add a nav link in `src/components/Layout.jsx`
4. Run `npm run build` and commit `/dist`

## Notes for AI Agents

- **Never edit `/dist` directly** — it is generated output; edit `src/` and rebuild
- **No SSR** — this is purely client-side; avoid any Node/server-only patterns
- **GitHub Pages serves static files** — no `.htaccess`, no server config, no API routes
- **All routing uses hash-based URLs** — links should use React Router's `<Link>` or `useNavigate`, not `<a href>`
- **Single-file build** — all CSS, JS, and fonts are inlined; external CDN links will work but add load time
