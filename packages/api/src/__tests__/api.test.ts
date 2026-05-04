import { describe, expect, it } from 'vitest';
import { asEventOptionId } from '@app/domain';
import { NotImplementedError, createAppApiClient } from '../index';

describe('@app/api', () => {
  it('stub client throws NotImplementedError', async () => {
    const client = createAppApiClient({
      endpoint: 'https://example.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      getAccessToken: async () => 'token',
    });

    await expect(client.createAvailabilitySignal({} as never)).rejects.toBeInstanceOf(
      NotImplementedError,
    );
    await expect(client.listUserEventOptions()).rejects.toBeInstanceOf(NotImplementedError);
    await expect(client.commitToEventOption(asEventOptionId('x'))).rejects.toBeInstanceOf(
      NotImplementedError,
    );
  });
});
