import cx from 'classnames';

import ContentInner from '@ui/contentInner';
import Text from '@ui/text';

import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <Text align="center">Thank you for reading!</Text>
    </footer>
  );
};

export default Footer;
