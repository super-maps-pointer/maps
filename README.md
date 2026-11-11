This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Requires Node.js 26 (see `.nvmrc`):

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server (Turbopack)                        |
| `npm run build`     | Production build                              |
| `npm run lint`      | Oxlint, then ESLint (type-aware rules)        |
| `npm run typecheck` | `tsc --noEmit`                                |
| `npm run format`    | Format with Prettier (`format:check` in CI)   |
| `npm run knip`      | Report unused files, exports and dependencies |

A pre-commit hook (husky + lint-staged) formats and lints staged files. CI runs every check above on each pull request.

## Vercel

Here is a quick access to the [Vercel project](https://vercel.com/super-maps-pointer/maps)

## Resources

### Maps

- https://mapshaper.org/ (transform shapefiles into topojson or geojson)
- https://www.naturalearthdata.com/
- https://geojson-maps.ash.ms/

### Tech

- https://www.react-simple-maps.io/
