import {forwardRef} from 'react';
import type {
  InputHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import classnames from 'classnames';

import styles from './input.module.css';

const Radio: ForwardRefExoticComponent<
  InputHTMLAttributes<HTMLInputElement> & RefAttributes<HTMLInputElement>
> = forwardRef(({children, className, style, ...props}, ref) => {
  return (
    <label style={style} className={className}>
      {children && <div className={styles['content']}>{children}</div>}
      <input ref={ref} className={styles['input']} type="text" {...props} />
    </label>
  );
});

export default Radio;
