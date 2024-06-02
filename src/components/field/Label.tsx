import { cva, cx } from '@/lib/cva';
import type { VariantProps } from 'cva';
import * as React from 'react';
import { Label as _Label, type LabelProps as _LabelProps } from 'react-aria-components';

const labelVariants = cva({
  base: 'flex w-fit items-center gap-2 text-dns-16B- text-solid-grey-9002',
  variants: {
    size: {
      small: 'text-dns-16N-2',
      medium: 'text-dns-17N-2',
      large: 'text-std-18N-6',
    },
    bold: {
      true: '',
      false: '',
    },
    isDisabled: {
      true: 'text-solid-grey-420',
    },
  },
  compoundVariants: [
    {
      size: 'small',
      bold: true,
      className: 'text-dns-16B-2',
    },
    {
      size: 'medium',
      bold: true,
      className: 'text-dns-17B-2',
    },
    {
      size: 'large',
      bold: true,
      className: 'text-std-18B-6',
    },
  ],
  defaultVariants: {
    size: 'small',
    bold: false,
  },
});

export interface LabelProps extends _LabelProps, VariantProps<typeof labelVariants> {}

export function Label(props: LabelProps) {
  const { size, bold, ...rest } = props;
  return (
    <_Label {...rest} className={cx(labelVariants({ size, bold, className: props.className }))} />
  );
}
