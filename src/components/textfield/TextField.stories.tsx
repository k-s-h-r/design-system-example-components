import { Button } from '@/components';
import { Description, FieldError, Input, Label, RequirementBadge, TextArea } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'react-aria-components';
import { TextField } from './';

const meta = {
  title: 'Component/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export type TextFieldCounterProps = {
  count: number;
  maxCount: number;
  className?: string;
  id?: string;
};

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <TextField>
          <Label>ラベル</Label>
          <Description>サポートテキスト</Description>
          <Input />
        </TextField>

        <TextField>
          <Label>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Label>
          <Description>サポートテキスト</Description>
          <Input />
        </TextField>

        <TextField>
          <Label>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Label>
          <Description>サポートテキスト</Description>
          <TextArea rows={5} />
        </TextField>

        <TextField
          isRequired
          defaultValue='入力済の内容が入ります。入力済の内容が入ります。入力済の内容が入ります。'
        >
          <Label>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <Description>サポートテキスト</Description>
          <Input />
        </TextField>

        <TextField isInvalid={true} aria-invalid={true} isRequired>
          <Label>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <Description>サポートテキスト</Description>
          <Input />
          <FieldError>＊エラーテキスト</FieldError>
        </TextField>

        <TextField isDisabled={true}>
          <Label>ラベル</Label>
          <Description>サポートテキスト</Description>
          <Input />
          <TextField />
        </TextField>
      </div>
    );
  },
};

export const Textarea: Story = {
  render: () => (
    <TextField>
      <Label>
        ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
      </Label>
      <Description>サポートテキスト</Description>
      <TextArea rows={5} />
    </TextField>
  ),
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Validation = (args: any) => (
  <Form className='flex flex-col gap-2 items-start'>
    <TextField isRequired>
      <Label>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Label>
      <Description>サポートテキスト</Description>
      <Input />
    </TextField>
    <Button type='submit' variant='secondary'>
      Submit
    </Button>
  </Form>
);
