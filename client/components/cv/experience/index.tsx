import {gql, useQuery} from '@apollo/client';

import Text from '@ui/text';
import Link from '@ui/link';
import Loader from '@ui/loader';

import ExperienceItem from './item';

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
      <Text size="32">9+ years of experience</Text>
      <Text className={styles.subjects}>
        <b>Frontend:</b> React/Redux, Java Script, Flow/Type Script, GraphQL,
        Next.js, CSS, HTML, creating UI Library, storybook.
        <br />
        <b>Bundlers:</b> webpack, babel.
        <br />
        <b>Graphic editors:</b> figma, sketch, zeplin, adobe family. <br />
        <b>Testing:</b> unit test, jest.
        <br />
        <b>Other:</b> Github, Jira, Miro, FigJam, Asana.
      </Text>
      <div className={styles.wrapper}>
        {loading ? <Loader centered /> : List}
      </div>
    </div>
  );
};

export default Experience;
