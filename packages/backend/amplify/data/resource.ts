import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Minimal owner-scoped model so Amplify data schema is non-empty (Gen 2
 * rejects an empty schema). Replace with your real models when you add a
 * product schema. The mobile app should talk to AppSync via `@app/api`, not
 * by importing this file.
 */
const schema = a.schema({
  TemplateSchemaMarker: a
    .model({
      label: a.string().required(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
