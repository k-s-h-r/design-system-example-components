import { cva, cx, focusRing } from '@/lib/cva';
import * as React from 'react';
import {
  type FieldErrorProps,
  FieldError as _FieldError,
  composeRenderProps,
} from 'react-aria-components';

const FieldError = (props: FieldErrorProps) => {
  return (
    <_FieldError
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx('text-dns-16n-3 text-error-1', className),
      )}
    />
  );
};

export { FieldError };
