import cx from 'classnames';

import ContentInner from '@ui/contentInner';
import Logo from '../logo';

import styles from './header.module.css';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
  return (
    <header className={styles.root}>
      <ContentInner className={cx(styles.inner, className)}>
        <Logo />
        <div className={styles.children}>{children && children}</div>
      </ContentInner>
    </header>
  );
};

export default Header;
