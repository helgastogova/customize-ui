import Link from '@ui/link';

import styles from './menu.module.css';

const Menu: React.FC = () => {
  return (
    <menu className={styles.root}>
      <Link to="/">main (cv)</Link>
      <Link to="/blog">blog</Link>
    </menu>
  );
};

export default Menu;
