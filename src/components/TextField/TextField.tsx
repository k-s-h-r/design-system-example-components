import { compose, cva, cx, focusRing } from '@/lib/cva';
import type React from 'react';
import {
  TextField as _TextField,
  type TextFieldProps as _TextFieldProps,
  composeRenderProps,
} from 'react-aria-components';

export interface TextFieldProps extends _TextFieldProps {}

export function TextField({ ...props }: TextFieldProps) {
  return (
    <_TextField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => cx('', className))}
    >
      {props.children}
    </_TextField>
  );
}
