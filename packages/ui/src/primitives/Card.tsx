import * as React from 'react';
import { View } from 'react-native';

export interface CardProps {
  children?: React.ReactNode;
  density?: 'compact' | 'normal' | 'comfortable';
  className?: string;
  testID?: string;
}

const densityMap: Record<NonNullable<CardProps['density']>, string> = {
  compact: 'p-3',
  normal: 'p-4',
  comfortable: 'p-6',
};

export const Card: React.FC<CardProps> = ({ children, density = 'normal', className, testID }) => {
  const cls = ['bg-surface border border-border rounded-lg', densityMap[density], className ?? '']
    .filter(Boolean)
    .join(' ');
  return (
    <View className={cls} testID={testID}>
      {children}
    </View>
  );
};
