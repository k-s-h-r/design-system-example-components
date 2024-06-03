import { cva, cx, focusRing } from '@/lib/cva';
import * as React from 'react';
import { Text, type TextProps } from 'react-aria-components';

const Description = (props: TextProps) => {
  return (
    <Text
      {...props}
      slot='description'
      className={cx('text-std-16N-7 text-solid-grey-700', props.className)}
    />
  );
};

export { Description };
