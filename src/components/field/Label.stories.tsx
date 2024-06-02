import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Label } from './Label';

const meta = {
  title: 'Component/Field-Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <Label>ラベル</Label>
        <Label isDisabled={true}>ラベル(isDisabled)</Label>
        <Label size='small'>ラベル(size: small)</Label>
        <Label size='medium'>ラベル(size: medium)</Label>
        <Label size='large'>ラベル(size: large)</Label>
        <Label size='small' bold={true}>
          ラベル(size: small, bold: true)
        </Label>
        <Label size='medium' bold={true}>
          ラベル(size: medium, bold: true)
        </Label>
        <Label size='large' bold={true}>
          ラベル(size: large, bold: true)
        </Label>
      </div>
    );
  },
};
