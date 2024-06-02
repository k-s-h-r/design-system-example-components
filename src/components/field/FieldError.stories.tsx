import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextField } from '../textfield';
import { FieldError } from './FieldError';

const meta = {
  title: 'Component/Field-FieldError',
  component: FieldError,
  tags: ['autodocs'],
} satisfies Meta<typeof FieldError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <TextField isInvalid>
          <FieldError>＊エラーテキスト</FieldError>
        </TextField>
      </div>
    );
  },
};
