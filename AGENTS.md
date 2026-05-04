# AGENTS.md

Short guidance for coding agents working in this repo:

- Prefer small, focused changes; match existing patterns for imports, naming, and tooling.
- Shared TypeScript lives under `packages/*`; the Expo app is `apps/mobile`.
- Product and UX decisions belong in your own docs (start under `docs/` when you add them); this template does not prescribe a product domain.
- Run `yarn typecheck`, `yarn lint`, and `yarn test` from the repo root before opening a PR.
