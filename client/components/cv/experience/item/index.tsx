import Text from '@ui/text';
import Link from '@ui/link';

import styles from './item.module.css';

interface ExperienceItemProps {
  dates: string;
  position: string;
  companyName: string;
  companyUrl: string;
  description: {html: string};
  place: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  dates,
  position,
  companyName,
  companyUrl,
  description,
  place,
}) => {
  return (
    <div className={styles.root}>
      <Link bold target="_blank" to={`http://${companyUrl}`}>
        {companyName}
      </Link>
      ,{' '}
      <Text color="gray" tagName="span">
        {dates}, {place}
      </Text>
      <Text bold>{position}</Text>
      <Text className={styles.p} innerHTML={description?.html} />
    </div>
  );
};

export default ExperienceItem;
