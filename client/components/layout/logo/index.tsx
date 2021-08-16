import Link from '@ui/link';
import Text from '@ui/text';

import styles from './logo.module.css';

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.root}>
      <Text bold size="18">
        helgastogova
      </Text>
    </Link>
  );
};

export default Logo;
