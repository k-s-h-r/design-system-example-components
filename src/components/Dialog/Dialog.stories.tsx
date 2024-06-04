import { Button } from '@/components';
import type { Meta } from '@storybook/react';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from './';

const meta = {
  title: 'Component/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Example = (args: any) => (
  <DialogTrigger>
    <Button size='lg' variant='primary'>
      ダイアログ表示
    </Button>
    <DialogOverlay>
      <DialogContent className='max-w-[35rem]'>
        {({ close }) => (
          <>
            <DialogHeader>
              <DialogTitle>ダイアログタイトル</DialogTitle>
              <p className='text-std-16N-7'>
                ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
              </p>
            </DialogHeader>
            <DialogFooter className='w-full !max-w-xs !flex-col m-auto'>
              <Button onPress={close} size='lg' autoFocus variant='primary'>
                中断する
              </Button>
              <Button onPress={close} size='lg' variant='tertiary'>
                キャンセル
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </DialogOverlay>
  </DialogTrigger>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const DialogWithHorizontalActions = (args: any) => (
  <DialogTrigger>
    <Button size='lg' variant='primary'>
      ダイアログ表示
    </Button>
    <DialogOverlay>
      <DialogContent className='max-w-[35rem]'>
        {({ close }) => (
          <>
            <DialogHeader>
              <DialogTitle>ダイアログタイトル</DialogTitle>
              <p className='text-std-16N-7'>
                ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
              </p>
            </DialogHeader>
            <DialogFooter>
              <Button onPress={() => {}} size='lg' variant='primary'>
                確定する
              </Button>
              <Button onPress={() => {}} size='lg' variant='secondary'>
                前の画面に戻る
              </Button>
              <Button className='sm:mr-auto' onPress={close} size='lg' variant='tertiary'>
                キャンセル
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </DialogOverlay>
  </DialogTrigger>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const AlertDialog = (args: any) => (
  <DialogTrigger>
    <Button size='lg' variant='primary'>
      ダイアログ表示
    </Button>
    <DialogOverlay isDismissable={false}>
      <DialogContent className='max-w-[35rem]' role='alertdialog' closeButton={false}>
        {({ close }) => (
          <>
            <DialogHeader>
              <DialogTitle>ダイアログタイトル</DialogTitle>
              <p className='text-std-16N-7'>
                これはアラートダイアログの例です。ユーザーにとって緊急性の高い通知内容が入ります。
              </p>
            </DialogHeader>
            <DialogFooter>
              <Button onPress={close} size='lg' variant='primary'>
                OK
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </DialogOverlay>
  </DialogTrigger>
);
