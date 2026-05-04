import type {
  EventOptionId,
  ParticipationState,
  SampleEventState,
  SampleIntent,
  SampleSignalState,
  SignalId,
  UserId,
} from '@app/domain';
import { NotImplementedError } from './errors';

export interface AppApiClientConfig {
  endpoint: string;
  region: string;
  getAccessToken: () => Promise<string | null>;
  fetch?: typeof globalThis.fetch;
}

export interface CreateAvailabilitySignalInput {
  startsAt: string;
  endsAt: string;
  intent: SampleIntent;
}

export interface AvailabilitySignalView {
  id: SignalId;
  ownerUserId: UserId;
  startsAt: string;
  endsAt: string;
  intent: SampleIntent;
  state: SampleSignalState;
}

export interface UserEventOptionView {
  id: EventOptionId;
  viewerUserId: UserId;
  startsAt: string;
  candidateCount: number;
  state: SampleEventState;
  participationState: ParticipationState | null;
}

/**
 * Typed AppSync HTTP client surface. Stub methods throw until you wire
 * generated GraphQL operations in src/generated.
 */
export interface AppApiClient {
  createAvailabilitySignal(input: CreateAvailabilitySignalInput): Promise<AvailabilitySignalView>;
  listUserEventOptions(): Promise<ReadonlyArray<UserEventOptionView>>;
  commitToEventOption(eventOptionId: EventOptionId): Promise<void>;
  cancelParticipation(eventOptionId: EventOptionId): Promise<void>;
  submitParticipationAction(input: {
    eventOptionId: EventOptionId;
    actionType: string;
    payload?: Record<string, unknown>;
  }): Promise<void>;
}

export const createAppApiClient = (config: AppApiClientConfig): AppApiClient => {
  void config;
  return {
    async createAvailabilitySignal() {
      throw new NotImplementedError('AppApiClient.createAvailabilitySignal');
    },
    async listUserEventOptions() {
      throw new NotImplementedError('AppApiClient.listUserEventOptions');
    },
    async commitToEventOption() {
      throw new NotImplementedError('AppApiClient.commitToEventOption');
    },
    async cancelParticipation() {
      throw new NotImplementedError('AppApiClient.cancelParticipation');
    },
    async submitParticipationAction() {
      throw new NotImplementedError('AppApiClient.submitParticipationAction');
    },
  };
};
