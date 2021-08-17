import {gql, useQuery} from '@apollo/client';
import cx from 'classnames';

import Text from '@ui/text';
import Loader from '@ui/loader';

import ExperienceItem from './item';
import Skills from './skills';
import Education from '../education';

import styles from './experience.module.css';

const QUERY = gql`
  query {
    experiences {
      dates
      position
      companyName
      companyUrl
      description {
        html
      }
      place
      technologies {
        html
      }
    }
  }
`;

const Experience: React.FC = () => {
  const {data, error, loading} = useQuery(QUERY);

  if (error) return;

  const List: React.FC = data
    ? data.experiences.map((item, key) => {
        return <ExperienceItem key={key} {...item} />;
      })
    : null;

  return (
    <div className={styles.root}>
      <Skills />
      <Text bold size="18" className={cx('noPrint', styles.head)}>
        9+ years of experience:
      </Text>
      <div className={styles.wrapper}>
        {loading ? <Loader centered /> : List}
      </div>

      <Education />
    </div>
  );
};

export default Experience;
