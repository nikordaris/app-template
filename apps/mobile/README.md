# @app/mobile

Expo **SDK 54** app (Expo Go–compatible), expo-router, NativeWind, workspace-linked `@app/*` packages.

Upgrade or align native modules with the installed SDK (uses Yarn):

```bash
cd apps/mobile
npx expo install --fix
```

### Expo Go: “couldn’t connect to dev server”

Metro prints a URL like `exp://192.168.x.x:8081`. The phone must reach **that IP and port** on the same LAN.

1. **Same network** — Phone and Mac on the same Wi‑Fi (not guest/isolated Wi‑Fi; corporate VLANs often block device-to-device).
2. **Firewall** — macOS Firewall (or Little Snitch, etc.) must allow **Node** / **Terminal** to accept incoming on **8081** (or temporarily turn the firewall off to test).
3. **VPN** — Disconnect VPN on Mac and phone, or try **tunnel** mode below.
4. **Tunnel (works around most LAN issues)** — From `apps/mobile`:

   ```bash
   yarn start:tunnel
   ```

   First run may prompt for an Expo account; the QR code then uses a public URL instead of your LAN IP.

If the QR opens but the app never loads, wait until Metro finishes the bundle (or press `r` to reload after it reaches 100%).

### “It downloaded for a while, then couldn’t connect”

That pattern usually means the **first connection worked**, then something **dropped** while Metro was sending a large JS bundle (this template’s first load can be heavy because of NativeWind + monorepo paths).

Check these **before** assuming tunnel vs LAN logic is wrong:

1. **iOS: Local Network for Expo Go** — **Settings → Apps → Expo Go → Local Network → On.** If this is off, iOS often allows a bit of traffic then blocks LAN access to your Mac, which looks like a partial download and then failure.
2. **Mac sleep / display off** — Sleep can interrupt Wi‑Fi or suspend Metro’s host process; keep the Mac awake while testing.
3. **Wi‑Fi quality** — Walk closer to the AP; disable iOS Low Data Mode for Wi‑Fi if enabled.
4. **Metro logs** — When the phone errors, look at the terminal running `yarn start` for **red stack traces** or “Socket disconnected” right when Expo Go fails. That distinguishes “network dropped” from “Metro crashed.”
5. **Clean retry** — Stop Metro, then `yarn start --clear` and scan the QR again.

If Metro shows **no error** but the phone still drops, it is almost always **OS/network** (firewall, Local Network, router isolation), not your app code.

### Metro stuck at ~99.9% on `expo-router/entry.js`

That is usually **NativeWind running Tailwind on `global.css`**, not Expo Router itself. This template avoids patterns that often hang that step (see [nativewind/react-native-css#267](https://github.com/nativewind/react-native-css/issues/267)): **one** top-level `@layer base` block and **dark tokens in a separate** `@media (prefers-color-scheme: dark)` block; `apps/mobile/global.css` imports the UI tokens file via a **relative** path.

If it still stalls, from `apps/mobile` run `yarn start --clear`, and for verbose NativeWind logs: `DEBUG=nativewind* yarn start`.

## Scripts

```bash
yarn start
yarn ios
yarn android
yarn start --clear  # Clear Metro cache if workspace package changes look stale
```

**Expo Go on a physical iPhone:** scan the QR code from the **Camera** app (or Expo Go). Do **not** press **`i`** in the terminal—that tries to open the **iOS Simulator**, which requires a **full Xcode** install from the App Store and `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` if the CLI still complains.

**Quality checks** (here or `yarn workspace @app/mobile <script>` from root):

```bash
yarn typecheck
yarn lint
yarn test
```

**Environment:** copy `.env.example` to `.env`. Use `EXPO_PUBLIC_*` for values Expo should inline. After an Amplify sandbox, `yarn workspace @app/backend generate:outputs` can write `amplify_outputs.json` here (gitignored).

## Workspace wiring

- Renders `@app/ui` on the template home screen.
- Implements `@app/auth` `TokenStorage` with `expo-secure-store`.
- Constructs `@app/api` (`createAppApiClient`); stub methods throw until you add GraphQL operations.
