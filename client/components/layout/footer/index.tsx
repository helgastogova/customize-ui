import cx from 'classnames';

import ContentInner from '@ui/contentInner';

import styles from './footer.module.css';

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({children, className}) => {
  return (
    <footer className={cx(styles.root, className)}>
      {children && <ContentInner>{children}</ContentInner>}
    </footer>
  );
};

export default Footer;
