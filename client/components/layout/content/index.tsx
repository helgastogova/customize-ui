import cx from 'classnames';

import styles from './content.module.css';

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

const Content: React.FC<ContentProps> = ({children, className}) => {
  if (!children) return null;
  return <div className={cx(styles.root, className)}> {children}</div>;
};

export default Content;
