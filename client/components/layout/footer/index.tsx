import {FC} from 'react';
import classnames from 'classnames';

import styles from './footer.module.css';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer: FC<FooterProps> = ({className, children}) => {
  if (!children) return null;
  return (
    <footer className={classnames(styles.footer, className)}>{children}</footer>
  );
};

export default Footer;
