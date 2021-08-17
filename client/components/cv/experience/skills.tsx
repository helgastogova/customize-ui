import Text from '@ui/text';

import styles from './experience.module.css';

const Skills: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Skills;
