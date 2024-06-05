import { buttonVariants } from '@/components';
import { cva, cx } from '@/lib/cva';
import type { VariantProps } from 'cva';
import { Link, type LinkProps, composeRenderProps } from 'react-aria-components';

interface ButtonLinkProps extends LinkProps, VariantProps<typeof buttonVariants> {}

const ButtonLink = (props: ButtonLinkProps) => {
  const { className, variant, size, ...rest } = props;
  return (
    <Link
      className={composeRenderProps(className, (className, renderProps) =>
        cx(buttonVariants({ ...renderProps, variant, size, className })),
      )}
      {...rest}
    />
  );
};

export { ButtonLink };
export type { ButtonLinkProps };
