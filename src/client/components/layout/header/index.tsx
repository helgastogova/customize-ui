import * as React from 'react';

import './header.module.css';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({children}: HeaderProps) => (
  <header styleName="header">{children}</header>
);

export default Header;
