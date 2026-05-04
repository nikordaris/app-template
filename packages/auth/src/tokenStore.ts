/**
 * Storage contract for the Cognito client. apps/mobile injects a concrete
 * implementation backed by expo-secure-store. Tests can supply an in-memory
 * implementation.
 */
export interface TokenStorage {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
}

export const TOKEN_KEYS = {
  AccessToken: 'app.auth.accessToken',
  IdToken: 'app.auth.idToken',
  RefreshToken: 'app.auth.refreshToken',
  ExpiresAt: 'app.auth.expiresAt',
} as const;

export type TokenKey = (typeof TOKEN_KEYS)[keyof typeof TOKEN_KEYS];

export const createInMemoryTokenStorage = (): TokenStorage => {
  const store = new Map<string, string>();
  return {
    async get(key) {
      return store.get(key) ?? null;
    },
    async set(key, value) {
      store.set(key, value);
    },
    async delete(key) {
      store.delete(key);
    },
  };
};
