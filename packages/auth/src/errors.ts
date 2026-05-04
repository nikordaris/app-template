export class NotImplementedError extends Error {
  constructor(feature: string) {
    super(`${feature} is not implemented yet. Implement the Cognito flow you choose for this app.`);
    this.name = 'NotImplementedError';
  }
}

export class AuthRequestError extends Error {
  readonly cognitoErrorType?: string;
  constructor(message: string, options?: { cognitoErrorType?: string; cause?: unknown }) {
    super(message);
    this.name = 'AuthRequestError';
    this.cognitoErrorType = options?.cognitoErrorType;
    if (options?.cause) {
      (this as { cause?: unknown }).cause = options.cause;
    }
  }
}
