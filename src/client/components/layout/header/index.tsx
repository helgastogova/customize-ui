import * as React from 'react';

import './header.module.css';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = (children: HeaderProps) => {
  if (!children) return null;

  return <header styleName="header">{children}</header>;
};

export default Header;
