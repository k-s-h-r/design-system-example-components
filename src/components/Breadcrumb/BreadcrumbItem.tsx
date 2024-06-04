import { Link, type LinkProps } from '@/components';
import { compose, cva, cx, focusRing } from '@/lib/cva';
import React from 'react';

export const BreadcrumbItem = ({ children, className, ...props }: LinkProps) => {
  return (
    <Link {...props} className={cx('text-oln-14N-1', className)}>
      {children}
    </Link>
  );
};
