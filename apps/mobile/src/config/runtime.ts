/**
 * Runtime configuration for the mobile app, sourced from Expo public env
 * vars (EXPO_PUBLIC_*) so values are inlined at build time.
 */
type RuntimeConfig = {
  apiEndpoint: string;
  apiRegion: string;
  cognitoUserPoolId: string;
  cognitoClientId: string;
};

const required = (name: string, fallback: string): string => {
  const value = process.env[name];
  if (value === undefined || value === '') return fallback;
  return value;
};

export const runtimeConfig: RuntimeConfig = {
  apiEndpoint: required(
    'EXPO_PUBLIC_APP_SYNC_ENDPOINT',
    'https://placeholder.appsync-api.us-east-1.amazonaws.com/graphql',
  ),
  apiRegion: required('EXPO_PUBLIC_APP_SYNC_REGION', 'us-east-1'),
  cognitoUserPoolId: required('EXPO_PUBLIC_COGNITO_USER_POOL_ID', 'us-east-1_PLACEHOLDER'),
  cognitoClientId: required('EXPO_PUBLIC_COGNITO_CLIENT_ID', 'PLACEHOLDER'),
};
