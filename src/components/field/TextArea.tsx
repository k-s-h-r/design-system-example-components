import { compose, cva, cx, focusRing } from '@/lib/cva';
import {
  type TextAreaProps,
  TextArea as _TextArea,
  composeRenderProps,
} from 'react-aria-components';

const _inputStyles = cva({
  base: [
    'rounded-8 min-w-80 max-w-full p-4 text-std-16N-7 text-solid-grey-900',
    'bg-white border border-solid-grey-900',
    'min-h-[calc(3lh+2rem+2px)] max-h-[calc(10lh+2rem+2px)] [field-sizing:content]',
    'flex-1 min-w-0',
    'disabled:text-solid-grey-200 disabled:bg-solid-grey-50 disabled:border-solid-grey-400',
  ],
  variants: {
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
});
const inputStyles = compose(focusRing, _inputStyles);

export function TextArea(props: TextAreaProps) {
  return (
    <_TextArea
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx(inputStyles({ ...renderProps, className })),
      )}
    />
  );
}
