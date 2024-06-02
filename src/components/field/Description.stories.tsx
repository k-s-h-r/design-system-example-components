import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Description } from './Description';

const meta = {
  title: 'Component/Field-Description',
  component: Description,
  tags: ['autodocs'],
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <Description>サポートテキスト</Description>
      </div>
    );
  },
};
