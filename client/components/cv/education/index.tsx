import {gql, useQuery} from '@apollo/client';

import Text from '@ui/text';
import Loader from '@ui/loader';

import EducationItem from './item';

import styles from './education.module.css';

const QUERY = gql`
  query {
    educations {
      years
      place
      degree
      school
    }
  }
`;

const Education: React.FC = () => {
  const {data, error, loading} = useQuery(QUERY);

  if (error) return;

  const List: React.FC = data
    ? data.educations.map((item, key) => {
        return <EducationItem key={key} {...item} />;
      })
    : null;

  return (
    <div className={styles.root}>
      {loading ? <Loader centered /> : List}{' '}
      <Text bold size="18" className={styles.head}>
        Education:
      </Text>
    </div>
  );
};

export default Education;
