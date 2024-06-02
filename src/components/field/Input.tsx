import { compose, cva, cx, focusRing } from '@/lib/cva';
import { type InputProps, Input as _Input, composeRenderProps } from 'react-aria-components';

export function Input(props: InputProps) {
  return (
    <_Input
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx(
          'px-2 py-1.5 flex-1 min-w-0 outline outline-0 bg-white dark:bg-zinc-900 text-sm text-gray-800 dark:text-zinc-200 disabled:text-gray-200 dark:disabled:text-zinc-600',
          className,
        ),
      )}
    />
  );
}
