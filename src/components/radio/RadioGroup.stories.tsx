import React from 'react';
import { Form } from 'react-aria-components';
import { Button } from '../button';
import { Radio, RadioGroup } from './';

export default {
  title: 'Component/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'Cities',
    isDisabled: false,
    isRequired: false,
    description: 'description',
    children: (
      <>
        <Radio value='sf'>San Francisco</Radio>
        <Radio value='ny'>New York</Radio>
        <Radio value='sydney'>Sydney</Radio>
        <Radio value='london'>London</Radio>
        <Radio value='tokyo'>Tokyo</Radio>
      </>
    ),
  },
};

export const Default = {
  args: {},
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Validation = (args: any) => (
  <Form className='flex flex-col gap-2 items-start'>
    <RadioGroup {...args} />
    <Button type='submit' variant='secondary'>
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
