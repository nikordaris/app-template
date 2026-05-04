import * as React from 'react';
import { Pressable, Text as RNText } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  testID?: string;
}

const variantContainer: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-surface border border-border',
  ghost: 'bg-transparent',
  danger: 'bg-danger',
};

const variantText: Record<ButtonVariant, string> = {
  primary: 'text-primary-contrast',
  secondary: 'text-text',
  ghost: 'text-primary',
  danger: 'text-primary-contrast',
};

const sizeContainer: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 rounded-sm',
  md: 'px-4 py-3 rounded-md',
  lg: 'px-5 py-4 rounded-lg',
};

const sizeText: Record<ButtonSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className,
  testID,
}) => {
  const containerCls = [
    'items-center justify-center',
    variantContainer[variant],
    sizeContainer[size],
    fullWidth ? 'self-stretch' : 'self-start',
    disabled ? 'opacity-50' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');
  const textCls = [variantText[variant], sizeText[size], 'font-semibold'].filter(Boolean).join(' ');
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      className={containerCls}
      testID={testID}
    >
      <RNText className={textCls}>{label}</RNText>
    </Pressable>
  );
};
