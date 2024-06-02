import { TextField } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input, Label } from './';

const meta = {
  title: 'Component/Field-Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <TextField>
          <Input />
        </TextField>
        <TextField isDisabled>
          <Input />
        </TextField>
        <TextField isInvalid>
          <Input />
        </TextField>
        <TextField>
          <Label>サイズ: small</Label>
          <Input size='small' />
        </TextField>
        <TextField>
          <Label>サイズ: medium</Label>
          <Input size='medium' />
        </TextField>
        <TextField>
          <Label>サイズ: large</Label>
          <Input size='large' />
        </TextField>
      </div>
    );
  },
};
