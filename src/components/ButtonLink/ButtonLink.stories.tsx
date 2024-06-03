import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from './';

const meta = {
  title: 'Component/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLG: Story = {
  args: {
    href: '#',
    variant: 'primary',
    size: 'lg',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const PrimaryMD: Story = {
  args: {
    href: '#',
    variant: 'primary',
    size: 'md',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const PrimarySM: Story = {
  args: {
    href: '#',
    variant: 'primary',
    size: 'sm',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const PrimaryXS: Story = {
  args: {
    href: '#',
    variant: 'primary',
    size: 'xs',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryLG: Story = {
  args: {
    href: '#',
    variant: 'secondary',
    size: 'lg',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryMD: Story = {
  args: {
    href: '#',
    variant: 'secondary',
    size: 'md',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const SecondarySM: Story = {
  args: {
    href: '#',
    variant: 'secondary',
    size: 'sm',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryXS: Story = {
  args: {
    href: '#',
    variant: 'secondary',
    size: 'xs',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryLG: Story = {
  args: {
    href: '#',
    variant: 'tertiary',
    size: 'lg',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryMD: Story = {
  args: {
    href: '#',
    variant: 'tertiary',
    size: 'md',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const TertiarySM: Story = {
  args: {
    href: '#',
    variant: 'tertiary',
    size: 'sm',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryXS: Story = {
  args: {
    href: '#',
    variant: 'tertiary',
    size: 'xs',
    children: 'ボタンリンク',
    onClick: () => console.log('clicked'),
  },
};

export const PrimaryDisabled: Story = {
  args: {
    href: '#',
    variant: 'primary',
    size: 'lg',
    children: 'ボタンリンク',
    isDisabled: true,
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryDisabled: Story = {
  args: {
    href: '#',
    variant: 'secondary',
    size: 'lg',
    children: 'ボタンリンク',
    isDisabled: true,
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryDisabled: Story = {
  args: {
    href: '#',
    variant: 'tertiary',
    size: 'lg',
    children: 'ボタンリンクリンク',
    isDisabled: true,
    onClick: () => console.log('clicked'),
  },
};
