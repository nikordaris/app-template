# @app/api

Typed **AppSync over `fetch`** client and (optionally) generated GraphQL operations. The app imports `@app/api`, not raw `packages/backend` Amplify files.

## Scripts

From `packages/api`:

```bash
yarn typecheck
yarn lint
yarn test
```

**Codegen:** after you deploy an Amplify data schema, run GraphQL client generation from `@app/backend`:

```bash
yarn workspace @app/backend generate:graphql
```

That writes into `src/generated/` (see `src/generated/README.md`).

`@app/mobile` constructs the client in `src/api/client.ts`. After changing this package, reload the Expo app or use `yarn start --clear` in `apps/mobile` if Metro misses updates.
