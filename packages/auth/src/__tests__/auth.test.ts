import { describe, expect, it } from 'vitest';
import {
  NotImplementedError,
  createAuthStateStore,
  createCognitoClient,
  createInMemoryTokenStorage,
  initialAuthState,
} from '../index';

describe('@app/auth', () => {
  it('cognito client placeholder methods throw NotImplementedError', async () => {
    const client = createCognitoClient({
      userPoolId: 'us-east-1_TEST',
      clientId: 'test',
      region: 'us-east-1',
    });
    await expect(client.signIn({ username: 'a', password: 'b' })).rejects.toBeInstanceOf(
      NotImplementedError,
    );
  });

  it('in-memory token storage round trips values', async () => {
    const storage = createInMemoryTokenStorage();
    await storage.set('k', 'v');
    expect(await storage.get('k')).toBe('v');
    await storage.delete('k');
    expect(await storage.get('k')).toBeNull();
  });

  it('auth state store notifies subscribers', () => {
    const store = createAuthStateStore();
    expect(store.get()).toEqual(initialAuthState);
    let observed = 0;
    const unsubscribe = store.subscribe(() => {
      observed += 1;
    });
    store.set({ ...initialAuthState, status: 'signed_out' });
    expect(observed).toBe(1);
    unsubscribe();
  });
});
