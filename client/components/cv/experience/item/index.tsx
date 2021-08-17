import Text from '@ui/text';
import Link from '@ui/link';

import styles from './item.module.css';

interface ExperienceItemProps {
  dates: string;
  position: string;
  companyName: string;
  companyUrl: string;
  description: {html: React.ReactNode};
  place: string;
  //   technologies: {html: React.ReactNode};
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  dates,
  position,
  companyName,
  companyUrl,
  description,
  place,
  //   technologies,
}) => {
  return (
    <div className={styles.root}>
      <div>
        <Link target="_blank" to={`http://${companyUrl}`}>
          {companyName}
        </Link>
        ,{' '}
        <Text color="gray" tagName="span">
          {dates}, {place}
        </Text>
        <Text bold>{position}</Text>
      </div>
      {/* <Text className={styles.p} innerHTML={technologies?.html} /> */}
      <Text className={styles.p} innerHTML={description?.html} />
    </div>
  );
};

export default ExperienceItem;
