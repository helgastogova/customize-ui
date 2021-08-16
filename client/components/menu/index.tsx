import Link from '@ui/link';

import styles from './menu.module.css';

const Menu: React.FC = () => {
  return (
    <menu className={styles.root}>
      <Link to="/" className={styles.root}>
        main (cv)
      </Link>
      <Link to="/blog" className={styles.root}>
        blog
      </Link>
    </menu>
  );
};

export default Menu;
