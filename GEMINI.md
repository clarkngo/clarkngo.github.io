# Maintenance policy

- Do not modify files under the `reference/` folder. This folder is considered legacy/static and is excluded from ongoing updates and refactors. New work should only touch the React app under `src/` and top-level configs.

## Build and deploy workflow

- Always run a production build before committing/pushing to ensure the bundle reflects your changes:
	- `npm run build`
- After a successful build, commit and push your changes.
- For GitHub Pages, allow up to a couple of minutes for cache/CDN to update. If testing locally, you can preview with `npm run preview`.

