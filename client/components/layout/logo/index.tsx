import Link from '@ui/link';

import styles from './logo.module.css';

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.root}>
      logo
    </Link>
  );
};

export default Logo;
