import { compose, cva, cx, focusRing } from '@/lib/cva';
import { Group, type GroupProps, composeRenderProps } from 'react-aria-components';

export const fieldBorderStyles = cva({
  variants: {
    isFocusWithin: {
      false: 'border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]',
    },
    isDisabled: {
      true: 'border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]',
    },
  },
});

const _fieldGroupStyles = cva({
  base: 'group flex items-center h-9 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border-2 rounded-lg overflow-hidden',
});

export const fieldGroupStyles = compose(focusRing, _fieldGroupStyles, fieldBorderStyles);

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx(fieldGroupStyles({ ...renderProps, className })),
      )}
    />
  );
}
