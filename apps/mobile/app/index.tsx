import { Badge, Button, Card, Screen, Stack, Text } from '@app/ui';

/**
 * Template home screen: exercises `@app/ui`, Metro monorepo resolution, and NativeWind.
 */
export default function Home() {
  return (
    <Screen>
      <Stack gap={6}>
        <Stack gap={2}>
          <Badge label="Template" tone="primary" />
          <Text variant="display" weight="bold">
            MyApp
          </Text>
          <Text variant="body" tone="muted">
            Replace this screen with your app entry. The layout below confirms workspace packages,
            design tokens, and Metro are wired.
          </Text>
        </Stack>

        <Card>
          <Stack gap={3}>
            <Text variant="title" weight="semibold">
              Foundation checks
            </Text>
            <Stack gap={1}>
              <Text variant="label" tone="muted">
                `@app/ui` primitives render here.
              </Text>
              <Text variant="label" tone="muted">
                `@app/auth` and secure token storage are wired (stubs until you implement flows).
              </Text>
              <Text variant="label" tone="muted">
                `@app/api` client is constructed; stub methods throw until you add GraphQL
                operations.
              </Text>
            </Stack>
          </Stack>
        </Card>

        <Stack direction="row" gap={2}>
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Ghost" variant="ghost" />
        </Stack>
      </Stack>
    </Screen>
  );
}
