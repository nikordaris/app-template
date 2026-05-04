import { defineAuth } from '@aws-amplify/backend';

/**
 * Phase 00 placeholder. Phase 01 will:
 *   - choose the initial Cognito flow (email/password + verification, custom
 *     auth, phone OTP, ...) per docs/architecture/phase-01-auth-and-source-models.md
 *   - configure the Cognito User Pool client without a client secret
 *     (per D-018 in docs/decisions.md).
 *
 * This file ships an email-login config so `ampx sandbox` can boot a
 * minimal user pool today; product registration screens and verified flows
 * land in Phase 01.
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
