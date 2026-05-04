import * as React from 'react';
import { View } from 'react-native';
import { Text } from './Text';

export type BadgeTone = 'neutral' | 'primary' | 'danger';

export interface BadgeProps {
  label: string;
  tone?: BadgeTone;
  testID?: string;
}

const toneMap: Record<BadgeTone, { container: string; text: 'default' | 'primary' | 'danger' }> = {
  neutral: { container: 'bg-surface border border-border', text: 'default' },
  primary: { container: 'bg-primary', text: 'primary' },
  danger: { container: 'bg-danger', text: 'danger' },
};

export const Badge: React.FC<BadgeProps> = ({ label, tone = 'neutral', testID }) => {
  const cfg = toneMap[tone];
  const useContrast = tone !== 'neutral';
  return (
    <View className={`px-2 py-1 rounded-sm self-start ${cfg.container}`} testID={testID}>
      <Text variant="caption" tone={useContrast ? 'default' : 'default'} weight="semibold">
        {label}
      </Text>
    </View>
  );
};
