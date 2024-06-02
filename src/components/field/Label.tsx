import { cva, cx, focusRing } from '@/lib/cva';
import * as React from 'react';
import { type LabelProps, Label as _Label } from 'react-aria-components';

// ${isDisabled ? 'text-solid-grey-420' : 'text-solid-grey-900'}

export function Label(props: LabelProps) {
  return (
    <_Label
      {...props}
      className={cx('flex w-fit items-center gap-2 text-dns-16B-2', props.className)}
    />
  );
}
