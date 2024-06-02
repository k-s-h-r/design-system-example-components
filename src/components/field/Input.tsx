import { compose, cva, cx, focusRing } from '@/lib/cva';
import type { VariantProps } from 'cva';
import {
  Input as _Input,
  type InputProps as _InputProps,
  composeRenderProps,
} from 'react-aria-components';

const inputVariants = cva({
  base: [
    'rounded-8 min-w-80 max-w-full text-std-16N-7 text-solid-grey-900',
    'bg-white border border-solid-grey-900',
    'h-auto',
    'flex-1 min-w-0',
    'disabled:text-solid-grey-200 disabled:bg-solid-grey-50 disabled:border-solid-grey-400',
  ],
  variants: {
    size: {
      small: 'px-4 py-2 text-std-14N-7',
      medium: 'px-4 py-4 text-std-16N-7',
      large: 'px-4 py-5 text-std-17N-7',
    },
    isFocused: {
      false: 'border-solid-grey-900 forced-colors:border-[ButtonBorder]',
      true: 'border-focus-yellow forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-error-1 border-2 forced-colors:border-[Mark]',
    },
    isDisabled: {
      true: 'border-solid-grey-200 forced-colors:border-[GrayText]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const inputStyles = compose(focusRing, inputVariants);
export interface InputProps extends Omit<_InputProps, 'size'>, VariantProps<typeof inputStyles> {}

export function Input(props: InputProps) {
  const { size, ...rest } = props;
  return (
    <_Input
      {...rest}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx(inputStyles({ ...renderProps, size, className })),
      )}
    />
  );
}
