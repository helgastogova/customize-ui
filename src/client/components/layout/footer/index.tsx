import * as React from 'react';

import './footer.module.css';

type FooterProps = {
  children?: React.ReactNode;
};

const Footer = (children: FooterProps) => {
  if (!children) return null;

  return <footer styleName="footer">{children}</footer>;
};

export default Footer;
