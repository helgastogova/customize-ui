import {forwardRef, useCallback} from 'react';
import type {
  ForwardRefExoticComponent,
  RefAttributes,
  Ref,
  InputHTMLAttributes,
} from 'react';

import cx from 'classnames';

import useFloatLabel from './hooks/useFloatLabel';

import styles from './input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  block?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}

const Input: ForwardRefExoticComponent<
  InputProps & RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {className, placeholder, block = true, value, onFocus, onBlur, ...props},
    ref,
  ) => {
    const [isFloated, focusProps] = useFloatLabel(Boolean(value), {
      onFocus,
      onBlur,
    });

    const InputComponent = useCallback(
      (inputProps: InputProps) => {
        return <input {...inputProps} ref={ref} />;
      },
      [ref],
    );

    return (
      <div className={cx(styles.root, className)}>
        <label
          className={cx(
            styles.label,
            block && styles.block,
            isFloated && styles.floated,
          )}
        >
          {placeholder}
        </label>

        {InputComponent({
          value,
          placeholder: '',
          className: styles.input,
          ...focusProps,
          ...props,
        })}
      </div>
    );
  },
);

export default Input;
