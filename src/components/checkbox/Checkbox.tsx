import { Description, FieldError, Label } from '@/components';
import { compose, cva, cx, focusRing } from '@/lib/cva';
import type { VariantProps } from 'cva';
import React, { type ReactNode } from 'react';
import {
  type ValidationResult,
  Checkbox as _Checkbox,
  CheckboxGroup as _CheckboxGroup,
  type CheckboxGroupProps as _CheckboxGroupProps,
  type CheckboxProps as _CheckboxProps,
  composeRenderProps,
} from 'react-aria-components';

export interface CheckboxGroupProps extends Omit<_CheckboxGroupProps, 'children'> {
  label?: string | ReactNode;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <_CheckboxGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx('flex flex-col gap-2', className),
      )}
    >
      {props.label && <Label>{props.label}</Label>}
      {props.description && <Description>{props.description}</Description>}
      {props.children}
      <FieldError>{props.errorMessage}</FieldError>
    </_CheckboxGroup>
  );
}

const checkboxVariants = cva({
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
const _checkboxStyles = cva({
  variants: {
    isDisabled: {
      false: 'text-solid-grey-800',
      true: 'text-solid-grey-600',
    },
    isInvalid: {
      true: 'text-error-1',
    },
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

export const checkboxStyles = compose(checkboxVariants, _checkboxStyles);
export interface CheckboxProps extends _CheckboxProps, VariantProps<typeof checkboxVariants> {}

const _boxStyles = cva({
  base: 'w-[--size] h-[--size] flex-shrink-0 rounded-sm flex items-center justify-center border-2 transition',
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
        'bg-[--color] border-[--color]',
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

const boxStyles = compose(focusRing, _boxStyles);

const iconStyles =
  'w-4 h-4 text-white group-disabled:text-solid-grey-400 forced-colors:text-[HighlightText]';

const SvgCheck = (props: { className: string }) => (
  <svg
    aria-hidden={true}
    className={cx('fill-current', props.className)}
    width='17'
    height='17'
    viewBox='0 0 17 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.9 12.35L13.625 5.62495L12.575 4.57495L6.9 10.25L4.05 7.39995L3 8.44995L6.9 12.35Z'
      fill='white'
    />
  </svg>
);

export function Checkbox(props: CheckboxProps) {
  const { size, ...rest } = props;
  return (
    <_Checkbox
      {...rest}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, size, className }),
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <span
            className={boxStyles({ isSelected: isSelected || isIndeterminate, ...renderProps })}
          >
            {isIndeterminate ? <>TODO</> : isSelected ? <SvgCheck className={iconStyles} /> : null}
          </span>
          {props.children}
        </>
      )}
    </_Checkbox>
  );
}
