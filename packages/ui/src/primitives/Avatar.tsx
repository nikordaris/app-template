import * as React from 'react';
import { Image, View } from 'react-native';
import { Text } from './Text';

export interface AvatarProps {
  name: string;
  imageUri?: string;
  size?: 'sm' | 'md' | 'lg';
  testID?: string;
}

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
} as const;

const initials = (name: string): string => {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? '').join('') || '?';
};

export const Avatar: React.FC<AvatarProps> = ({ name, imageUri, size = 'md', testID }) => {
  const cls = [
    sizeMap[size],
    'rounded-full bg-surface border border-border items-center justify-center overflow-hidden',
  ].join(' ');
  return (
    <View className={cls} testID={testID}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} className="h-full w-full" resizeMode="cover" />
      ) : (
        <Text variant="label" tone="muted" weight="semibold">
          {initials(name)}
        </Text>
      )}
    </View>
  );
};
