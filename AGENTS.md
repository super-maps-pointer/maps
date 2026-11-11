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

## Conventions

- UI is Chakra UI v3. Colors come from the semantic tokens in `theme/system.ts`, which have light and dark values. Read them in components through `colorVar()` (`utils/css-var.ts`) or the CSS variables in `app/[locale]/globals.css`; never hard-code hex values in components.
- Supported locales are defined once by the Effect Schema `Locale` in `i18n/settings.ts`. `proxy.ts` redirects locale-less URLs.
- Tailwind v4 is loaded without preflight (Chakra owns the CSS reset).
- No `eslint-disable` comments. Fix the code, or change the rule in `eslint.config.mjs` / `.oxlintrc.json` with a justification.
