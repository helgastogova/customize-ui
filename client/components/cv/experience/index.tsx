import {gql, useQuery} from '@apollo/client';

import Text from '@ui/text';
import Link from '@ui/link';
import Loader from '@ui/loader';

import ExperienceItem from './item';
import Skills from './skills';

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
      <div className={styles.wrapper}>
        {loading ? <Loader centered /> : List}
      </div>
    </div>
  );
};

export default Experience;
