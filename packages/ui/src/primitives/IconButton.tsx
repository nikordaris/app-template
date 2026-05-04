import * as React from 'react';
import { Pressable, Text as RNText } from 'react-native';

export interface IconButtonProps {
  label: string;
  onPress?: () => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  testID?: string;
}

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
} as const;

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  onPress,
  size = 'md',
  disabled = false,
  className,
  testID,
}) => {
  const cls = [
    'items-center justify-center rounded-md bg-surface border border-border',
    sizeMap[size],
    disabled ? 'opacity-50' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={label}
      accessibilityRole="button"
      className={cls}
      testID={testID}
    >
      <RNText className="text-text">{label.slice(0, 1).toUpperCase()}</RNText>
    </Pressable>
  );
};
