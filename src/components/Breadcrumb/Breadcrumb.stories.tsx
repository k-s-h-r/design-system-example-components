import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from './';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
  args: {},
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const items = [
  <BreadcrumbItem href='/' key={0}>
    ホーム
  </BreadcrumbItem>,
  <BreadcrumbItem href='/2' key={1}>
    組織情報
  </BreadcrumbItem>,
  <BreadcrumbItem href='/3' key={2}>
    長いページタイトルが入ります長いページタイトルが入ります
  </BreadcrumbItem>,
  <BreadcrumbItem key={3} aria-current='page'>
    長いページタイトルが入ります長いページタイトルが入ります
  </BreadcrumbItem>,
];
export const Default: StoryObj<typeof Breadcrumb> = {
  args: {
    children: items,
  },
};

export const LongLabelExample: StoryObj<typeof Breadcrumb> = {
  args: {
    children: (
      <>
        <BreadcrumbItem href='/' key={0}>
          ホーム ホーム ホーム ホーム ホーム ホーム ホーム ホーム ホーム ホーム ホーム
        </BreadcrumbItem>
        <BreadcrumbItem href='/2' key={1}>
          組織情報 組織情報 組織情報 組織情報 組織情報 組織情報 組織情報 組織情報 組織情報 組織情報
        </BreadcrumbItem>
        <BreadcrumbItem href='/3' key={2}>
          長いページタイトルが入ります長いページタイトルが入ります
        </BreadcrumbItem>
        <BreadcrumbItem key={3} aria-current='page'>
          長いページタイトルが入ります長いページタイトルが入ります
        </BreadcrumbItem>
      </>
    ),
  },
};

export const Separator: StoryObj<typeof Breadcrumb> = {
  args: {
    children: items,
    separator: <>-/-</>,
  },
};

export const Separator2: StoryObj<typeof Breadcrumb> = {
  args: {
    children: items,
    separator: '/',
  },
};

export const PropItems: StoryObj<typeof Breadcrumb> = {
  args: {
    items: [
      {
        label: 'ホーム',
        href: '/',
      },
      {
        label: '組織情報',
        href: '/2',
      },
      {
        label: '長いページタイトルが入ります長いページタイトルが入ります',
        href: '/3',
      },
      {
        label: '長いページタイトルが入ります長いページタイトルが入ります',
      },
    ],
  },
};

export const PropItemsOtherProps: StoryObj<typeof Breadcrumb> = {
  args: {
    items: [
      {
        label: 'ホーム',
        href: '/',
        id: 'home',
      },
      {
        label: '組織情報',
        href: '/2',
        'data-testid': 'home',
      },
      {
        as: 'button',
        type: 'button',
        label: '長いページタイトルが入ります長いページタイトルが入ります',
        href: 'javascript:void(0)',
        onPress: (e: any) => {
          e.preventDefault();
          console.log('長いページタイトルが入ります長いページタイトルが入ります');
        },
      },
      {
        label: '長いページタイトルが入ります長いページタイトルが入ります',
      },
    ],
  },
};
