# @app/ui

Design system for React Native: **NativeWind v4** + Tailwind, tokens in CSS variables (`--ds-*`), and primitives (`Screen`, `Stack`, `Text`, `Button`, `IconButton`, `Input`, `Avatar`, `Badge`, `Card`).

## Scripts

```bash
yarn typecheck
yarn lint
yarn test
```

**Visual dev** happens in **@app/mobile**: run `yarn start` in `apps/mobile`. This package is linked as source; Metro watches `packages/ui/src/**` via the app’s Tailwind content paths and `metro.config.js`.
