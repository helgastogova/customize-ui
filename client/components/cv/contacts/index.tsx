import Text from '@ui/text';
import Link from '@ui/link';

import styles from './contacts.module.css';

const Contacts: React.FC = () => {
  return (
    <div className={styles.root}>
      <Text>Contact me:</Text>
      <div>
        <Link block className={styles.link} to="mailto:helgastogova@gmail.com">
          helgastogova@gmail.com
        </Link>
        <Link
          block
          className={styles.link}
          target="_blank"
          to="https://github.com/helgastogova"
        >
          github.com/helgastogova
        </Link>
        <Link
          block
          className={styles.link}
          target="_blank"
          to="www.linkedin.com/in/helgastogova"
        >
          linkedin.com/in/helgastogova
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
