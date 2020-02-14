import * as React from 'react';
import Link from '@ui/link';

import './header.module.css';

const Header = () => {
  return (
    <header styleName="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/admin">Admin</Link>
    </header>
  );
};

export default Header;
