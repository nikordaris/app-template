import * as React from 'react';
import { Text as RNText } from 'react-native';

export type TextVariant = 'display' | 'title' | 'body' | 'label' | 'caption';
export type TextTone = 'default' | 'muted' | 'primary' | 'danger';

export interface TextProps {
  children?: React.ReactNode;
  variant?: TextVariant;
  tone?: TextTone;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  testID?: string;
  numberOfLines?: number;
}

const variantMap: Record<TextVariant, string> = {
  display: 'text-3xl leading-tight',
  title: 'text-xl leading-snug',
  body: 'text-base leading-normal',
  label: 'text-sm leading-snug',
  caption: 'text-xs leading-snug',
};

const toneMap: Record<TextTone, string> = {
  default: 'text-text',
  muted: 'text-muted',
  primary: 'text-primary',
  danger: 'text-danger',
};

const weightMap: Record<NonNullable<TextProps['weight']>, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  tone = 'default',
  weight = 'regular',
  className,
  testID,
  numberOfLines,
}) => {
  const cls = [variantMap[variant], toneMap[tone], weightMap[weight], className ?? '']
    .filter(Boolean)
    .join(' ');
  return (
    <RNText className={cls} testID={testID} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};
