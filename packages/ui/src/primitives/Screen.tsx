import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface ScreenProps {
  children?: React.ReactNode;
  padded?: boolean;
  className?: string;
  testID?: string;
}

export const Screen: React.FC<ScreenProps> = ({ children, padded = true, className, testID }) => {
  const padCls = padded ? 'px-5 py-4' : '';
  return (
    <SafeAreaView className="flex-1 bg-bg" testID={testID}>
      <View className={`flex-1 ${padCls} ${className ?? ''}`.trim()}>{children}</View>
    </SafeAreaView>
  );
};
