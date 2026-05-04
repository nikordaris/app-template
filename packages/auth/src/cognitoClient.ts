import { NotImplementedError } from './errors';

export interface CognitoClientConfig {
  userPoolId: string;
  clientId: string;
  region: string;
  fetch?: typeof globalThis.fetch;
}

export interface CognitoTokens {
  accessToken: string;
  idToken: string;
  refreshToken?: string;
  expiresAt: number;
}

export interface SignInInput {
  username: string;
  password: string;
}

export interface CognitoClient {
  signIn(input: SignInInput): Promise<CognitoTokens>;
  refresh(refreshToken: string): Promise<CognitoTokens>;
  signOut(accessToken: string): Promise<void>;
}

/**
 * Stubs until you implement Cognito User Pools calls for your chosen auth flow.
 * Calls throw NotImplementedError so accidental use fails loudly during setup.
 */
export const createCognitoClient = (config: CognitoClientConfig): CognitoClient => {
  void config;
  return {
    async signIn() {
      throw new NotImplementedError('CognitoClient.signIn');
    },
    async refresh() {
      throw new NotImplementedError('CognitoClient.refresh');
    },
    async signOut() {
      throw new NotImplementedError('CognitoClient.signOut');
    },
  };
};
