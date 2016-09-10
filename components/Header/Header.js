import React from 'react';
import './Header.scss';
import Link from '../Link';

function Header() {
  return (
    <h1 className="Header">
      <a href="/" onClick={Link.handleClick}>Petter Nilsson</a>
      <span className="Header-title">Digital Product Designer</span>
    </h1>
  );
}

export default Header;
