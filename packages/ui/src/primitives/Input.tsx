import * as React from 'react';
import { TextInput, View } from 'react-native';
import { Text } from './Text';

export interface InputProps {
  value: string;
  onChangeText: (next: string) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  className?: string;
  testID?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  helperText,
  errorText,
  secureTextEntry,
  autoCapitalize = 'none',
  keyboardType = 'default',
  className,
  testID,
}) => {
  const hasError = Boolean(errorText);
  const fieldCls = [
    'rounded-md border bg-surface px-3 py-3 text-base text-text',
    hasError ? 'border-danger' : 'border-border',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <View className="gap-1">
      {label ? (
        <Text variant="label" tone="muted">
          {label}
        </Text>
      ) : null}
      <TextInput
        className={fieldCls}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        testID={testID}
      />
      {hasError ? (
        <Text variant="caption" tone="danger">
          {errorText}
        </Text>
      ) : helperText ? (
        <Text variant="caption" tone="muted">
          {helperText}
        </Text>
      ) : null}
    </View>
  );
};
