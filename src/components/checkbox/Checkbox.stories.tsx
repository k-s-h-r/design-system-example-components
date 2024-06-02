import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RequirementBadge } from '../';
import { Description, Label } from '../field';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta = {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <CheckboxGroup
        label={
          <>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </>
        }
        description={'サポートテキスト'}
      >
        <div className='flex flex-col'>
          <Checkbox name='x' value='1'>
            選択肢1
          </Checkbox>
          <Checkbox name='x' value='2'>
            選択肢2
          </Checkbox>
          <Checkbox name='x' value='3' isDisabled>
            選択肢3
          </Checkbox>
          <Checkbox name='x' value='4' isDisabled>
            選択肢4
          </Checkbox>
        </div>
      </CheckboxGroup>
    );
  },
};

export const Example2: Story = {
  render: () => {
    return (
      <CheckboxGroup>
        <Label>
          ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
        </Label>
        <div className='flex flex-col'>
          <Checkbox name='x' value='1'>
            選択肢1
          </Checkbox>
          <Checkbox name='x' value='2'>
            選択肢2
          </Checkbox>
          <Checkbox name='x' value='3' isDisabled>
            選択肢3
          </Checkbox>
          <Checkbox name='x' value='4' isDisabled>
            選択肢4
          </Checkbox>
        </div>
        <Description>Description</Description>
      </CheckboxGroup>
    );
  },
};

export const Size: Story = {
  render: () => {
    return (
      <CheckboxGroup>
        <Label>
          ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
        </Label>
        <div className='flex flex-col'>
          <Checkbox name='x' size='small'>
            smaill
          </Checkbox>
          <Checkbox name='x' size='medium'>
            medium
          </Checkbox>
          <Checkbox name='x' size='large'>
            large
          </Checkbox>
        </div>
      </CheckboxGroup>
    );
  },
};
