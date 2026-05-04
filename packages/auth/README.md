# @app/auth

**Cognito User Pools** client surface (HTTPS / `fetch`) and a **token storage** interface. No `aws-amplify` dependency. The mobile app supplies `expo-secure-store` as the storage implementation.

## Scripts

```bash
yarn typecheck
yarn lint
yarn test
```

`@app/mobile` wires `TokenStorage` in `src/auth/secureTokenStorage.ts`. Cognito client methods are stubs until you implement your chosen flow.
