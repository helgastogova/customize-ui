import {forwardRef, HTMLAttributes} from 'react';

import classNames from 'classnames';

import {Design} from '../types';

import styles from './button.module.css';

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  tagName?: 'a' | 'button';
  design?: Design;
  block: boolean;
}

const Button: React.FC<ButtonProps> = ({
  tagName: Component = 'a',
  design = 'primary',
  className,
  block,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={classNames(
        styles.root,
        styles[design],
        block && styles.block,
        className,
      )}
    />
  );
};

export default Button;
