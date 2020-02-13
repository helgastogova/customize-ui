import * as React from 'react';
import Header from '../header';
import Footer from '../footer';

import './baseLayout.module.css';

type BaselayoutProps = {
  children?: React.ReactNode;
};

const Baselayout = (children: BaselayoutProps) => {
  return (
    <>
      <Header />
      {children && <div styleName="baseLayout">{children}</div>}
      <Footer />
    </>
  );
};

export default Baselayout;
