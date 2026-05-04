import { createCognitoClient } from '@app/auth';
import { runtimeConfig } from '../config/runtime';

export const cognitoClient = createCognitoClient({
  userPoolId: runtimeConfig.cognitoUserPoolId,
  clientId: runtimeConfig.cognitoClientId,
  region: runtimeConfig.apiRegion,
});
