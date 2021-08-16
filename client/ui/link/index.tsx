import {forwardRef} from 'react';
import cx from 'classnames';

import type {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import styles from './link.module.css';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  block?: boolean;
  bold?: boolean;
}

const Link: ForwardRefExoticComponent<
  LinkProps & RefAttributes<HTMLAnchorElement>
> = forwardRef(({to: href, block, bold, className, onClick, ...props}, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cx(block && styles.block, bold && styles.bold, className)}
      onClick={onClick}
      {...props}
    />
  );
});

export default Link;
