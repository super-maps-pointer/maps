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

| Script                  | What it does                                           |
| ----------------------- | ------------------------------------------------------ |
| `npm run dev`           | Dev server (Turbopack)                                 |
| `npm run build`         | Production build                                       |
| `npm run lint`          | Oxlint, then ESLint (type-aware rules)                 |
| `npm run typecheck`     | `tsc --noEmit`                                         |
| `npm run format`        | Format with Prettier (`format:check` in CI)            |
| `npm run knip`          | Report unused files, exports and dependencies          |
| `npm run test:coverage` | Run the tests with a v8 coverage report in `coverage/` |

A pre-commit hook (husky + lint-staged) formats and lints staged files. CI runs every check above on each pull request; the coverage report is informative and has no threshold.

## Design agent skill

[Impeccable](https://github.com/pbakaus/impeccable) is not committed. Install it locally for your coding agent:

```bash
npx impeccable install --providers=codex --scope=project
```

It lands in `.agents/skills/impeccable`, read by Codex, Cursor, Copilot, Gemini, OpenCode and Pi. For Claude Code, link it:

```bash
mkdir -p .claude/skills && ln -s ../../.agents/skills/impeccable .claude/skills/impeccable
```

The product and design context it uses is committed: `PRODUCT.md`, `DESIGN.md` and `.impeccable/`.

## Vercel

Here is a quick access to the [Vercel project](https://vercel.com/super-maps-pointer/maps)

## Resources

### Maps

- https://mapshaper.org/ (transform shapefiles into topojson or geojson)
- https://www.naturalearthdata.com/
- https://geojson-maps.ash.ms/

### Tech

- https://www.react-simple-maps.io/
