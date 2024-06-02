import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RequirementBadge } from '../';
import { Description, FieldError, Label } from '../field';
import { Radio, RadioGroup } from './Radio';

const meta = {
  title: 'Component/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    value: '1',
  },
  render: () => {
    return (
      <RadioGroup>
        <Label>
          ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
        </Label>
        <div className='flex flex-col'>
          <Radio name='x' value='1'>
            選択肢1
          </Radio>
          <Radio name='x' value='2'>
            選択肢2
          </Radio>
          <Radio name='x' value='3'>
            選択肢3
          </Radio>
        </div>
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  args: {
    value: '1',
  },
  render: () => {
    return (
      <RadioGroup>
        <Label>
          ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
        </Label>
        <div className='flex flex-col'>
          <Radio name='x' value='1'>
            選択肢1
          </Radio>
          <Radio name='x' value='2' isDisabled={true}>
            選択肢2
          </Radio>
          <Radio name='x' value='3' isDisabled={true}>
            選択肢3
          </Radio>
        </div>
      </RadioGroup>
    );
  },
};

export const Size: Story = {
  args: {
    value: '1',
  },
  render: () => {
    return (
      <RadioGroup>
        <Label>
          ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
        </Label>
        <div className='flex flex-col'>
          <Radio name='x' size='small' value='1'>
            smaill
          </Radio>
          <Radio name='x' size='medium' value='2'>
            medium
          </Radio>
          <Radio name='x' size='large' value='3'>
            large
          </Radio>
        </div>
      </RadioGroup>
    );
  },
};
