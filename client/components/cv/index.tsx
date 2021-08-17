import Text from '@ui/text';
import Button from '@ui/button';

import Contacts from './contacts';
import Experience from './experience';

import styles from './cv.module.css';

const CV: React.FC = () => {
  return (
    <div className={styles.root}>
      <Text size="48" align="center" className={styles.text}>
        Hi 👋 I'm Olga Stogova <br />
        Senior software engineer
      </Text>
      <Button centered design="primary">
        Download CV
      </Button>

      <Contacts />
      <Experience />
    </div>
  );
};

export default CV;
