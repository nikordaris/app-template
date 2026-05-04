# @app/backend

Amplify Gen 2 backend: auth, AppSync data schema, and (optionally) functions and CDK extensions. This is the **only** workspace that depends on `@aws-amplify/backend`. The mobile app uses `@app/api` and `@app/auth` instead of Amplify frontend SDKs for API and Cognito calls.

## Scripts

```bash
yarn sandbox              # Local sandbox (needs AWS credentials)
yarn generate:outputs     # Writes amplify_outputs.json into apps/mobile (gitignored by default)
yarn generate:graphql     # Writes ../api/src/generated (see @app/api README)
yarn typecheck
yarn lint
```

Do not commit personal sandbox outputs unless your team agrees on a shared workflow.
