import { compose, cva, cx, focusRing } from '@/lib/cva';
import type { VariantProps } from 'cva';
import React, { type ReactNode } from 'react';
import {
  type ValidationResult,
  Radio as _Radio,
  RadioGroup as _RadioGroup,
  type RadioGroupProps as _RadioGroupProps,
  type RadioProps as _RadioProps,
  composeRenderProps,
} from 'react-aria-components';

import { Description, FieldError, Label } from '@/components';

export interface RadioGroupProps extends Omit<_RadioGroupProps, 'children'> {
  label?: string | ReactNode;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function RadioGroup(props: RadioGroupProps) {
  return (
    <_RadioGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx('flex flex-col gap-2', className),
      )}
    >
      {props.label && <Label>{props.label}</Label>}
      {props.description && <Description>{props.description}</Description>}
      {props.children}
      <FieldError>{props.errorMessage}</FieldError>
    </_RadioGroup>
  );
}

const radioVariants = cva({
  base: 'flex gap-2 items-center group text-sm transition ',
  variants: {
    size: {
      small: '[--size:17px] text-std-16N-7',
      medium: '[--size:17px] text-std-16N-7',
      large: '[--size:23px] text-std-17N-7',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
const _radioStyles = cva({
  variants: {
    isDisabled: {
      false: 'text-solid-grey-800',
      true: 'text-solid-grey-600',
    },
    isInvalid: {
      true: 'text-error-1',
    },
    size: {
      small: '[--size:19px] [--inner:9px] text-std-16N-7',
      medium: '[--size:19px] [--inner:9px] text-std-16N-7',
      large: '[--size:25px] [--inner:12px] text-std-17N-7',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const radioStyles = compose(radioVariants, _radioStyles);
export interface RadioProps extends _RadioProps, VariantProps<typeof radioVariants> {}

const _boxStyles = cva({
  base: 'relative w-[--size] h-[--size] flex-shrink-0 rounded-full flex items-center justify-center border-2 transition',
  variants: {
    isSelected: {
      false: [
        '[--color:theme(colors.solid-grey.900)]',
        'group-pressed:[--color:theme(colors.solid-grey.1000)]',
        'bg-white border-[--color]',
      ],
      true: [
        '[--color:theme(colors.blue.900)]',
        'group-pressed:[--color:theme(colors.blue.1000)]',
        'forced-colors:![--color:Highlight]',
        'border-[--color]',
        'before:block before:size-[--inner] before:rounded-full before:bg-[--color]',
      ],
    },
    isInvalid: {
      true: [
        '[--color:theme(colors.error-1)]',
        'group-pressed:[--color:theme(colors.error-1)]',
        'forced-colors:![--color:Mark]',
      ],
    },
    isDisabled: {
      true: ['[--color:theme(colors.solid-grey.200)]', 'forced-colors:![--color:GrayText]'],
    },
  },
});

const styles = compose(focusRing, _boxStyles);

export function Radio(props: RadioProps) {
  const { size, ...rest } = props;
  return (
    <_Radio
      {...rest}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx(radioStyles({ ...renderProps, size, className })),
      )}
    >
      {(renderProps) => (
        <>
          <span className={styles(renderProps)}></span>
          {props.children}
        </>
      )}
    </_Radio>
  );
}
