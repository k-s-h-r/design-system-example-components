import { useContext } from 'react';
import { Button, type ButtonProps, OverlayTriggerStateContext } from 'react-aria-components';

type HamburgerButtonProps = ButtonProps & {
  label: {
    open: string;
    close?: string;
  };
  align: 'row' | 'col';
};

export const HamburgerButton = (props: HamburgerButtonProps) => {
  const { label, align, className, ...rest } = props;
  const state = useContext(OverlayTriggerStateContext);
  const isOpen = state?.isOpen ?? false;
  const dispLabel = isOpen ? label.close ?? label.open : label.open;

  return (
    <Button
      aria-label={rest['aria-label'] ?? isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      className={`
        flex w-fit items-center touch-manipulation rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-yellow
        ${align === 'row' ? 'flex-row gap-1' : 'min-w-11 flex-col gap-px'}
        ${className ?? ''}
      `}
      {...rest}
    >
      {isOpen ? (
        <svg aria-hidden={true} fill='none' height='24' role='img' viewBox='0 0 24 24' width='24'>
          <path
            d='M6.39961 18.6496L5.34961 17.5996L10.9496 11.9996L5.34961 6.39961L6.39961 5.34961L11.9996 10.9496L17.5996 5.34961L18.6496 6.39961L13.0496 11.9996L18.6496 17.5996L17.5996 18.6496L11.9996 13.0496L6.39961 18.6496Z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <svg aria-hidden={true} height='24' role='img' viewBox='0 0 24 24' width='24'>
          <path
            clipRule='evenodd'
            d='M21 5.5H3V7H21V5.5ZM21 11.2998H3V12.7998H21V11.2998ZM3 17H21V18.5H3V17Z'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      )}
      <span className={align === 'row' ? 'text-[0.75rem]' : 'text-[0.625rem]'}>{dispLabel}</span>
    </Button>
  );
};
