import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

/**
 * Amplify Gen 2 backend entry: auth plus a placeholder data schema so
 * `ampx sandbox` and GraphQL client codegen have a target.
 */
export const backend = defineBackend({
  auth,
  data,
});
