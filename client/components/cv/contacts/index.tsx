import cx from 'classnames';

import Text from '@ui/text';
import Link from '@ui/link';

import styles from './contacts.module.css';

const Contacts: React.FC = () => {
  return (
    <div className={styles.root}>
      <Text className="noPrint">Contact me:</Text>
      <div className={styles.links}>
        <Link className={styles.link} to="mailto:helgastogova@gmail.com">
          helgastogova@gmail.com
        </Link>
        <br />
        <Link
          className={styles.link}
          target="_blank"
          to="https://github.com/helgastogova"
        >
          github.com/helgastogova
        </Link>
        <br />
        <Link
          className={styles.link}
          target="_blank"
          to="www.linkedin.com/in/helgastogova"
        >
          linkedin.com/in/helgastogova
        </Link>
        <div className={cx(styles.link, 'onlyPrint')}>
          phone: +7 964 703 00-67
        </div>
      </div>
    </div>
  );
};

export default Contacts;
