import * as React from 'react';

import Header from '../header';
import Footer from '../footer';

import './baseLayout.module.css';

type BaselayoutProps = {
  styleName?: string;
  children?: React.ReactNode;
};

const Baselayout = ({children}: BaselayoutProps) => (
  <>
    <div styleName="baseLayout">{children}</div>
    <Footer />
  </>
);

export default Baselayout;
