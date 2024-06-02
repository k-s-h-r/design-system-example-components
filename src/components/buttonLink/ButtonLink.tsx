import { cva, cx } from '@/lib/cva';
import type { VariantProps } from 'cva';
import { forwardRef } from 'react';
import { Link, type LinkProps, composeRenderProps } from 'react-aria-components';
import { buttonVariants } from '../button';

interface ButtonLinkProps extends LinkProps, VariantProps<typeof buttonVariants> {}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  return (
    <Link
      className={composeRenderProps(className, (className, renderProps) =>
        cx(buttonVariants({ ...renderProps, variant, size, className })),
      )}
      {...rest}
      ref={ref}
    />
  );
});

ButtonLink.displayName = 'ButtonLink';

export { ButtonLink };
export type { ButtonLinkProps };
