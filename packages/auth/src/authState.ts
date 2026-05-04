import type { UserId } from '@app/domain';

export type AuthStatus = 'unknown' | 'signed_out' | 'signed_in' | 'refreshing' | 'error';

export interface AuthState {
  status: AuthStatus;
  userId: UserId | null;
  accessToken: string | null;
  expiresAt: number | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  status: 'unknown',
  userId: null,
  accessToken: null,
  expiresAt: null,
  error: null,
};

export type AuthListener = (state: AuthState) => void;

/**
 * Lightweight in-memory auth state holder for mounting providers against a stable shape.
 */
export const createAuthStateStore = (): {
  get(): AuthState;
  set(next: AuthState): void;
  subscribe(listener: AuthListener): () => void;
} => {
  let state: AuthState = initialAuthState;
  const listeners = new Set<AuthListener>();
  return {
    get: () => state,
    set(next) {
      state = next;
      for (const listener of listeners) listener(state);
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
};
