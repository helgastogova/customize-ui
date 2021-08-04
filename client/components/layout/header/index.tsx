import {FC} from 'react';
import classnames from 'classnames';

import styles from './header.module.css';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer: FC<HeaderProps> = ({className, children}) => {
  if (!children) return null;
  return (
    <header className={classnames(styles.header, className)}>{children}</header>
  );
};

export default Footer;
