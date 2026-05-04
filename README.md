# my-app

Monorepo template: **Yarn workspaces**, **Turborepo**, **Expo** (mobile), **Amplify Gen 2** (backend), and shared TypeScript packages under `@app/*`.

## Workspaces

| Workspace | Role | Local dev |
| --- | --- | --- |
| [@app/mobile](apps/mobile/README.md) | Expo SDK 54 (Expo Go), routes, EAS, runtime config | [apps/mobile/README.md](apps/mobile/README.md) |
| [@app/backend](packages/backend/README.md) | Amplify Gen 2 (auth, data, functions) | [packages/backend/README.md](packages/backend/README.md) |
| [@app/api](packages/api/README.md) | AppSync HTTP client, generated GraphQL | [packages/api/README.md](packages/api/README.md) |
| [@app/auth](packages/auth/README.md) | Cognito client surface, token storage contract | [packages/auth/README.md](packages/auth/README.md) |
| [@app/ui](packages/ui/README.md) | Design tokens, primitives, RN styling | [packages/ui/README.md](packages/ui/README.md) |
| [@app/domain](packages/domain/README.md) | Shared types and branded ids | [packages/domain/README.md](packages/domain/README.md) |
| [@app/config](packages/config/README.md) | Shared ESLint, Prettier, tsconfig presets | [packages/config/README.md](packages/config/README.md) |

Install once from the repo root (`yarn install`). Each README lists scripts you run from that package or via `yarn workspace @app/<name> <script>`.

## Local development

**Prerequisites:** Node 20 LTS (see `.nvmrc`), [Corepack](https://nodejs.org/api/corepack.html) enabled so Yarn 4 matches `packageManager` in `package.json`.

```bash
corepack enable
yarn install
```

**Mobile app (Expo Go):**

```bash
cd apps/mobile
yarn start
```

From the repo root: `yarn workspace @app/mobile start`. Copy `apps/mobile/.env.example` to `apps/mobile/.env` when you wire API and Cognito values.

**Repo-wide checks (matches CI):**

```bash
yarn typecheck
yarn lint
yarn test
yarn format:check
```

These run through Turborepo. For a single package: `yarn workspace @app/<package> <script>` (for example `yarn workspace @app/domain test`).

**Workspace packages and Metro:**

The app resolves `@app/*` through Yarn workspaces and consumes **source** from `packages/*` over symlinks. If Metro caches look stale:

```bash
cd apps/mobile
yarn start --clear
```

Build all packages (Turborepo):

```bash
yarn build
```

Scoped build:

```bash
yarn turbo run build --filter=@app/mobile...
```

**Amplify backend** (requires AWS credentials for sandbox):

```bash
yarn workspace @app/backend sandbox
```

See [packages/backend/README.md](packages/backend/README.md) for outputs and codegen. Personal `amplify_outputs.json` is gitignored.

**Pre-commit:** Husky runs `lint-staged` (ESLint + Prettier on staged files) on commit.
