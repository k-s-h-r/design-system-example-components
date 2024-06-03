import type { Meta } from '@storybook/react';
import React from 'react';
import { Radio, RadioGroup } from './';

const meta = {
  title: 'Component/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Radio>;

export default meta;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Example = (args: any) => (
  <div className='flex flex-col gap-1'>
    <RadioGroup {...args} defaultValue={'1'}>
      <Radio value='1'>選択肢1</Radio>
      <Radio value='2'>選択肢2</Radio>
      <Radio value='x'>選択肢3</Radio>
    </RadioGroup>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Disabeld = (args: any) => (
  <RadioGroup {...args} isDisabled defaultValue={'1'}>
    <Radio value='1'>選択肢</Radio>
    <Radio value='2'>選択肢</Radio>
  </RadioGroup>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Invalid = (args: any) => (
  <RadioGroup {...args} isInvalid defaultValue={'1'}>
    <Radio value='1'>選択肢</Radio>
    <Radio value='2'>選択肢</Radio>
  </RadioGroup>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Readonly = (args: any) => (
  <RadioGroup {...args} isReadOnly defaultValue={'1'}>
    <Radio value='1'>選択肢</Radio>
    <Radio value='2'>選択肢</Radio>
  </RadioGroup>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Size = (args: any) => (
  <div className='flex flex-col gap-1'>
    <RadioGroup {...args}>
      <Radio value='1' size='sm'>
        smaill
      </Radio>
      <Radio value='2' size='md'>
        medium
      </Radio>
      <Radio value='x' size='lg'>
        large
      </Radio>
    </RadioGroup>
  </div>
);
