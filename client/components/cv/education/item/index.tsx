import Text from '@ui/text';
import Link from '@ui/link';

import styles from './item.module.css';

interface EducationItemProps {
  years: string;
  place: string;
  degree: string;
  school: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  years,
  place,
  degree,
  school,
}) => {
  return (
    <div className={styles.root}>
      <b>
        {degree}, {school}
      </b>
      <br />
      <Text color="gray" tagName="span">
        {years}, {place}
      </Text>
    </div>
  );
};

export default EducationItem;
