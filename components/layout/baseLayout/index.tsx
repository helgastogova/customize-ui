import Header from '../header';
import Footer from '../footer';

import styles from './baseLayout.module.css';

type BaselayoutProps = {
  styleName?: string;
  children?: React.ReactNode;
};

const Baselayout = ({children}: BaselayoutProps) => (
  <>
    <div className={styles.baseLayout}>{children}</div>
    <Footer />
  </>
);

export default Baselayout;
