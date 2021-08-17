import Text from '@ui/text';

import styles from './experience.module.css';

const Skills: React.FC = () => {
  return (
    <>
      <div className={styles.subjects}>
        <Text className={styles.p}>
          <b>Frontend:</b> React/Redux, Java Script, Flow/Type Script, GraphQL,
          Next.js, CSS, HTML, creating UI Library, storybook.
        </Text>
        <Text className={styles.p}>
          <b>Bundlers:</b> webpack, babel.
        </Text>
        <Text className={styles.p}>
          <b>Graphic editors:</b> figma, sketch, zeplin, adobe family.{' '}
        </Text>
        <Text className={styles.p}>
          <b>Testing:</b> unit test, jest.
        </Text>
        <Text className={styles.p}>
          <b>Other:</b> Github, Jira, Miro, FigJam, Asana.{' '}
        </Text>
      </div>
    </>
  );
};

export default Skills;
