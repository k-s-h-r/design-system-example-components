import { compose, cva, cx, focusRing } from '@/lib/cva';
import { Group, type GroupProps, composeRenderProps } from 'react-aria-components';

export const fieldBorderStylesVariants = {
  isFocusWithin: {
    false: 'border-solid-grey-900 forced-colors:border-[ButtonBorder]',
    true: 'border-focus-yellow forced-colors:border-[Highlight]',
  },
  isInvalid: {
    true: 'border-error-1 forced-colors:border-[Mark]',
  },
  isDisabled: {
    true: 'border-solid-grey-200 forced-colors:border-[GrayText]',
  },
};
export const fieldBorderStyles = cva({
  variants: fieldBorderStylesVariants,
});

const _fieldGroupVariants = cva({
  base: 'group flex items-center h-9 bg-white forced-colors:bg-[Field] border rounded-lg overflow-hidden',
});

export const fieldGroupVariants = compose(focusRing, _fieldGroupVariants, fieldBorderStyles);

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx(fieldGroupVariants({ ...renderProps, className })),
      )}
    />
  );
}
