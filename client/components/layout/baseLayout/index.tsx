import {FC} from 'react';

import Header from '../header';
import Footer from '../footer';

import styles from './baseLayout.module.css';

type BaseLayoutProps = {
  styleName?: string;
  children?: React.ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({children}) => (
  <>
    <Header />
    <div className={styles.baseLayout}>{children}</div>
    <Footer />
  </>
);

export default BaseLayout;
