import { describe, expect, it } from 'vitest';
import {
  ParticipationState,
  SampleEventState,
  SampleIntent,
  SampleSignalState,
  asEventOptionId,
  asUserId,
} from '..';

describe('@app/domain', () => {
  it('exports placeholder taxonomy', () => {
    expect(SampleIntent.OptionA).toBe('option_a');
    expect(SampleIntent.Other).toBe('other');
    expect(SampleSignalState.Active).toBe('active');
    expect(SampleEventState.Draft).toBe('draft');
    expect(ParticipationState.Confirmed).toBe('confirmed');
  });

  it('casts branded ids', () => {
    expect(asUserId('u1')).toBe('u1');
    expect(asEventOptionId('eo1')).toBe('eo1');
  });
});
