import * as React from 'react';
import { View } from 'react-native';

export interface StackProps {
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: 0 | 1 | 2 | 3 | 4 | 6 | 8;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  className?: string;
  testID?: string;
}

const gapMap: Record<NonNullable<StackProps['gap']>, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
};

const alignMap: Record<NonNullable<StackProps['align']>, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyMap: Record<NonNullable<StackProps['justify']>, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
};

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'column',
  gap = 3,
  align,
  justify,
  className,
  testID,
}) => {
  const dirCls = direction === 'row' ? 'flex-row' : 'flex-col';
  const cls = [
    'flex',
    dirCls,
    gapMap[gap],
    align ? alignMap[align] : '',
    justify ? justifyMap[justify] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <View className={cls} testID={testID}>
      {children}
    </View>
  );
};
