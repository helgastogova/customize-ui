import cx from 'classnames';

import styles from './contentInner.module.css';

interface ContentInnerProps {
  children?: React.ReactNode;
  className?: string;
}

const ContentInner: React.FC<ContentInnerProps> = ({children, className}) => {
  if (!children) return null;
  return <div className={cx(styles.root, className)}>{children}</div>;
};

export default ContentInner;
