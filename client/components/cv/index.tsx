import Text from '@ui/text';
import Button from '@ui/button';

import Contacts from './contacts';
import Experience from './experience';

import styles from './cv.module.css';

const CV: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="onlyPrint">
        <Text size="18">
          Olga Stogova <br /> Senior software engineer
        </Text>
      </div>
      <div className="noPrint">
        <Text size="48" align="center" className={styles.text}>
          Hi 👋 I'm Olga Stogova <br />
          Senior software engineer
        </Text>
        <Button
          centered
          design="primary"
          className={styles.button}
          target="_blank"
          href="/Olga_Stogova_Senior_Software_Engineer.pdf"
        >
          Download CV
        </Button>
      </div>
      <Contacts />
      <Experience />
    </div>
  );
};

export default CV;
