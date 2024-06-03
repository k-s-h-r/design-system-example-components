import type { Meta } from '@storybook/react';
import React from 'react';
import { RequirementBadge } from './';

const meta = {
  title: 'Component/RequirementBadge',
  component: RequirementBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof RequirementBadge>;

export default meta;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Example = (args: any) => (
  <div className='flex flex-col gap-8'>
    <RequirementBadge {...args}>※必須</RequirementBadge>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Optional = (args: any) => (
  <div className='flex flex-col gap-8'>
    <RequirementBadge isOptional={true}>任意</RequirementBadge>
  </div>
);
