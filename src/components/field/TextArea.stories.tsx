import { TextField } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Component/Field-TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <TextField>
          <TextArea />
        </TextField>
        <TextField isDisabled>
          <TextArea />
        </TextField>
        <TextField isInvalid>
          <TextArea />
        </TextField>
      </div>
    );
  },
};
