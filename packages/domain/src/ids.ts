/**
 * Branded string ids so unrelated ids are not interchangeable at compile time.
 */

declare const __brand: unique symbol;

type Branded<T, B extends string> = T & { readonly [__brand]: B };

export type UserId = Branded<string, 'UserId'>;
export type SignalId = Branded<string, 'SignalId'>;
export type EventOptionId = Branded<string, 'EventOptionId'>;

export const asUserId = (value: string): UserId => value as UserId;
export const asSignalId = (value: string): SignalId => value as SignalId;
export const asEventOptionId = (value: string): EventOptionId => value as EventOptionId;
