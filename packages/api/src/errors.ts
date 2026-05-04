export class NotImplementedError extends Error {
  constructor(operation: string) {
    super(
      `${operation} is not implemented yet. Wire the real AppSync GraphQL operation when your schema and codegen are ready.`,
    );
    this.name = 'NotImplementedError';
  }
}

export class AppApiError extends Error {
  readonly status?: number;
  readonly graphqlErrors?: ReadonlyArray<{ message: string; path?: ReadonlyArray<string> }>;
  constructor(
    message: string,
    options?: {
      status?: number;
      graphqlErrors?: ReadonlyArray<{ message: string; path?: ReadonlyArray<string> }>;
      cause?: unknown;
    },
  ) {
    super(message);
    this.name = 'AppApiError';
    this.status = options?.status;
    this.graphqlErrors = options?.graphqlErrors;
    if (options?.cause) {
      (this as { cause?: unknown }).cause = options.cause;
    }
  }
}
