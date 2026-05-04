/**
 * Minimal placeholder enums for shared types across app, API client, and backend.
 * Replace with your product domain when you define it.
 */

export const SampleIntent = {
  OptionA: 'option_a',
  OptionB: 'option_b',
  Other: 'other',
} as const;

export type SampleIntent = (typeof SampleIntent)[keyof typeof SampleIntent];

export const SampleSignalState = {
  Active: 'active',
  Withdrawn: 'withdrawn',
  Expired: 'expired',
} as const;

export type SampleSignalState = (typeof SampleSignalState)[keyof typeof SampleSignalState];

export const SampleEventState = {
  Draft: 'draft',
  Locked: 'locked',
  Completed: 'completed',
  Expired: 'expired',
  Canceled: 'canceled',
} as const;

export type SampleEventState = (typeof SampleEventState)[keyof typeof SampleEventState];

export const ParticipationState = {
  Interested: 'interested',
  Available: 'available',
  Confirmed: 'confirmed',
  Attended: 'attended',
} as const;

export type ParticipationState = (typeof ParticipationState)[keyof typeof ParticipationState];
