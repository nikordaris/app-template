import * as SecureStore from 'expo-secure-store';
import type { TokenStorage } from '@app/auth';

/**
 * expo-secure-store implementation of `@app/auth` TokenStorage.
 */
export const secureTokenStorage: TokenStorage = {
  async get(key) {
    return SecureStore.getItemAsync(key);
  },
  async set(key, value) {
    await SecureStore.setItemAsync(key, value);
  },
  async delete(key) {
    await SecureStore.deleteItemAsync(key);
  },
};
