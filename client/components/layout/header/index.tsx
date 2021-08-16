import ContentInner from '@ui/contentInner';
import Logo from '../logo';

import Menu from '@components/menu';

import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <ContentInner className={styles.inner}>
        <Logo />
        <Menu />
      </ContentInner>
    </header>
  );
};

export default Header;
