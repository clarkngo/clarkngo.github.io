# Changelog

All notable changes to this project will be documented in this file.

## [2025-01-16 23:45] - Added Site Logo and Branding

### Added
- Integrated `mechanized_flame_wolf_head.png` as site logo in header navigation
- Added favicon using the same logo image
- Logo displays next to site title "Clark Ngo" in header
- Hover effect on logo for better UX

### Changed
- Updated `Layout.jsx` to import and display logo image
- Modified `Layout.module.css` with logo styling (48x48px, responsive)
- Updated `index.html` favicon reference
- Enhanced README.md with svgr plugin documentation
- Added branding section to README.md

### Technical Details
- Logo size: 48x48px
- Logo location: `src/assets/mechanized_flame_wolf_head.png`
- CSS: Flexbox layout with gap spacing, smooth opacity transition on hover
- Favicon format: PNG

---

## [2025-01-16] - Project Migration to React + Vite

### Changed
- **Complete rewrite from static HTML to React + Vite application**
  - Migrated from Jekyll/static HTML to modern React SPA
  - Implemented React Router with HashRouter for GitHub Pages compatibility
  - Created component-based architecture with Layout and page components
  - Added CSS Modules for scoped styling
  - Configured single-file build using `vite-plugin-singlefile`

### Technical Details
- **Framework**: React 19.1.1 with React DOM
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.4 (HashRouter)
- **Styling**: CSS Modules with custom properties
- **Deployment**: GitHub Pages serving from `/dist` folder on main branch

### Project Structure
```
src/
  components/     # Reusable components (Layout)
  pages/         # Page components (Home, Professional, etc.)
  assets/        # Images and static files
  App.jsx        # Router configuration
  main.jsx       # Entry point
reference/       # Legacy HTML files (archived)
```

### Benefits
- Modern development experience with hot module replacement
- Component reusability and maintainability
- Scoped CSS preventing style conflicts
- Single-file deployment for optimal GitHub Pages hosting
- Type-safe routing with React Router

---

## [2025-01-16] - Documentation Update

### Added
- Created comprehensive `GEMINI.md` instructions file documenting:
  - Project overview and tech stack
  - Project structure and file organization
  - Development and deployment workflows
  - Design system and styling guidelines
  - Code style conventions

### Changed
- Updated `CHANGELOG.md` structure with timestamps
- Added migration details and technical specifications
- Documented new React-based architecture

### Notes
- All timestamps follow format: `[YYYY-MM-DD HH:MM]`
- Legacy HTML files preserved in `reference/` directory
- Build output in `dist/` is now tracked in git for GitHub Pages deployment