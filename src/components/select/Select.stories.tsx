import { Button } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form, Label } from 'react-aria-components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectSection,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './';

const meta: Meta<typeof Select> = {
  title: 'Component/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Example = (args: any) => (
  <Select {...args}>
    <Label>Ice cream flavor</Label>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectPopover>
      <SelectContent>
        <SelectItem>Chocolate</SelectItem>
        <SelectItem id='mint'>Mint</SelectItem>
        <SelectItem>Strawberry</SelectItem>
        <SelectItem>Vanilla</SelectItem>
      </SelectContent>
    </SelectPopover>
  </Select>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const DisabledItems = (args: any) => <Example {...args} />;
DisabledItems.args = {
  disabledKeys: ['mint'],
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Disabled = (args: any) => <Example {...args} />;
Disabled.args = {
  isDisabled: true,
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Separator = (args: any) => (
  <Select {...args}>
    <Label>Ice cream flavor</Label>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectPopover>
      <SelectContent>
        <SelectItem>Chocolate</SelectItem>
        <SelectItem id='mint'>Mint</SelectItem>
        <SelectSeparator />
        <SelectItem>Strawberry</SelectItem>
        <SelectSeparator />
        <SelectItem>Vanilla</SelectItem>
      </SelectContent>
    </SelectPopover>
  </Select>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Sections = (args: any) => (
  <Select>
    <Label>Ice cream flavor</Label>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectPopover>
      <SelectContent>
        <SelectSection title='Fruit'>
          <SelectItem id='Apple'>Apple</SelectItem>
          <SelectItem id='Banana'>Banana</SelectItem>
          <SelectItem id='Orange'>Orange</SelectItem>
          <SelectItem id='Honeydew'>Honeydew</SelectItem>
          <SelectItem id='Grapes'>Grapes</SelectItem>
          <SelectItem id='Watermelon'>Watermelon</SelectItem>
          <SelectItem id='Cantaloupe'>Cantaloupe</SelectItem>
          <SelectItem id='Pear'>Pear</SelectItem>
        </SelectSection>
        <SelectSection title='Vegetable'>
          <SelectItem id='Cabbage'>Cabbage</SelectItem>
          <SelectItem id='Broccoli'>Broccoli</SelectItem>
          <SelectItem id='Carrots'>Carrots</SelectItem>
          <SelectItem id='Lettuce'>Lettuce</SelectItem>
          <SelectItem id='Spinach'>Spinach</SelectItem>
          <SelectItem id='Bok Choy'>Bok Choy</SelectItem>
          <SelectItem id='Cauliflower'>Cauliflower</SelectItem>
          <SelectItem id='Potatoes'>Potatoes</SelectItem>
        </SelectSection>
      </SelectContent>
    </SelectPopover>
  </Select>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Validation = (args: any) => (
  <Form className='flex flex-col gap-2 items-start'>
    <Example {...args} />
    <Button type='submit' variant='secondary'>
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Size = (args: any) => (
  <div className='flex flex-col items-start gap-8'>
    <Select>
      <Label>Small</Label>
      <SelectTrigger size='sm'>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent>
          <SelectItem>Chocolate</SelectItem>
        </SelectContent>
      </SelectPopover>
    </Select>
    <Select>
      <Label>Small</Label>
      <SelectTrigger size='md'>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent>
          <SelectItem>Chocolate</SelectItem>
        </SelectContent>
      </SelectPopover>
    </Select>
    <Select>
      <Label>Small</Label>
      <SelectTrigger size='lg'>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent>
          <SelectItem>Chocolate</SelectItem>
        </SelectContent>
      </SelectPopover>
    </Select>
  </div>
);
