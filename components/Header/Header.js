import React from 'react';
import './Header.scss';
import Link from '../Link';

function Header() {
  return (
    <div>
      <h1 className="Header">
        <a href="/" onClick={Link.handleClick}>Petter Nilsson</a>
        <div className="Header-title"><span>Designer with 10+ yrs experience</span><span className="freelance-badge"><a href="mailto:petterheterjag@gmail.com">Available as a freelancer</a></span></div>
      </h1>
    </div>
  );
}

export default Header;
