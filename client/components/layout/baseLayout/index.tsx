import Header from '../header';
import Footer from '../footer';

import styles from './baseLayout.module.css';

type BaseLayoutProps = {
  styleName?: string;
  children?: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer />
  </>
);

export default BaseLayout;
