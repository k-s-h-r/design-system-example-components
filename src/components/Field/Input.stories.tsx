import { TextField } from '@/components';
import type { Meta } from '@storybook/react';
import React from 'react';
import { Input, Label } from './';

const meta = {
  title: 'Component/Field-Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    className: 'flex gap-2 flex-col',
  },
} satisfies Meta<typeof Input>;

export default meta;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Example = (args: any) => (
  <div className='flex flex-col gap-8'>
    <TextField {...args}>
      <Input />
    </TextField>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Disabled = (args: any) => (
  <div className='flex flex-col gap-8'>
    <TextField isDisabled {...args}>
      <Input />
    </TextField>
  </div>
);
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Invalid = (args: any) => (
  <div className='flex flex-col gap-8'>
    <TextField isInvalid {...args}>
      <Input />
    </TextField>
  </div>
);
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const ReadOnly = (args: any) => (
  <div className='flex flex-col gap-8'>
    <TextField isReadOnly {...args}>
      <Input defaultValue={'デフォルトテキスト'} />
    </TextField>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Size = (args: any) => (
  <div className='flex flex-col gap-8'>
    <TextField {...args}>
      <Label>サイズ: small</Label>
      <Input size='sm' />
    </TextField>
    <TextField {...args}>
      <Label>サイズ: medium</Label>
      <Input size='md' />
    </TextField>
    <TextField {...args}>
      <Label>サイズ: large</Label>
      <Input size='lg' />
    </TextField>
  </div>
);
