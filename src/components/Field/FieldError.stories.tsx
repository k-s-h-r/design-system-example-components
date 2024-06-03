import { TextField } from '@/components';
import type { Meta } from '@storybook/react';
import React from 'react';
import { FieldError } from './FieldError';

const meta = {
  title: 'Component/Field-FieldError',
  component: FieldError,
  tags: ['autodocs'],
} satisfies Meta<typeof FieldError>;

export default meta;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Example = (args: any) => (
  <div className='flex flex-col gap-8'>
    <TextField isInvalid>
      <FieldError>＊エラーテキスト</FieldError>
    </TextField>
  </div>
);
