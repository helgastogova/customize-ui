import {forwardRef, HTMLAttributes} from 'react';
import cx from 'classnames';

import styles from './text.module.css';

import {Size} from '../types';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  bold?: boolean;
  align?: 'center' | 'right';
  tagName?: 'p' | 'div' | 'h1' | 'h2';
  size?: Size;
}

const Text: React.FC<TextProps> = ({
  align = 'left',
  bold,
  tagName: (Component = 'p'),
  size,
  className,
  ...props,
}) => {
  return (
    <Component
      {...props}
      className={cx(
        align && styles[`align-${align}`],
        bold && styles.bold,
        size && styles[`size-${size}`],
        className,
      )}
    />
  );
});

export default Text;
