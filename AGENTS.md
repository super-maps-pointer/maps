# AGENTS.md

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues for `super-maps-pointer/maps` (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Commands

Node 26 (`nvm use`). Before committing, all of these must pass with 0 errors:

- `npm run lint`: Oxlint, then ESLint with type-aware typescript-eslint rules
- `npm run typecheck`
- `npm run format:check`
- `npm run knip`: no unused files, exports or dependencies
- `npm run build`
- `npm run test`: Vitest (jsdom, React Testing Library). Work test-first: write a failing test, make it pass, then refactor. Tests live next to the code as `*.test.ts(x)`. `npm run test:watch` while developing

## Conventions

- UI is Chakra UI v3. Colors come from the semantic tokens in `theme/system.ts`, which have light and dark values. Read them in components through `colorVar()` (`utils/css-var.ts`) or the CSS variables in `app/[locale]/globals.css`; never hard-code hex values in components.
- Supported locales are defined once by the Effect Schema `Locale` in `i18n/settings.ts`. `proxy.ts` redirects locale-less URLs.
- Tailwind v4 is loaded without preflight (Chakra owns the CSS reset).
- No `eslint-disable` comments. Fix the code, or change the rule in `eslint.config.mjs` / `.oxlintrc.json` with a justification.
- No code comments unless absolutely necessary. Prefer clear names and small functions. A comment is only acceptable for a non-obvious constraint the code cannot express (e.g. an ordering that must not change). Never comment what the code does, never leave commented-out code.
