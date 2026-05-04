import { createAppApiClient } from '@app/api';
import { TOKEN_KEYS } from '@app/auth';
import { secureTokenStorage } from '../auth/secureTokenStorage';
import { runtimeConfig } from '../config/runtime';

export const appApi = createAppApiClient({
  endpoint: runtimeConfig.apiEndpoint,
  region: runtimeConfig.apiRegion,
  getAccessToken: () => secureTokenStorage.get(TOKEN_KEYS.AccessToken),
});
