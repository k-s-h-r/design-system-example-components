import { compose, cva, cx, focusRing } from '@/lib/cva';
import type { VariantProps } from 'cva';
import type React from 'react';
import type { ReactNode } from 'react';
import {
  type ValidationResult,
  TextField as _TextField,
  type TextFieldProps as _TextFieldProps,
  composeRenderProps,
} from 'react-aria-components';
import { Description, FieldError, Label } from '../field';

export interface TextFieldProps extends _TextFieldProps {
  label?: string | React.ReactNode;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({ label, description, errorMessage, ...props }: TextFieldProps) {
  return (
    <_TextField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        cx('flex flex-col gap-2', className),
      )}
    >
      {label && <Label>{label}</Label>}
      {props.children}
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </_TextField>
  );
}
