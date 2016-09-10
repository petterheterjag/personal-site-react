import React, { PropTypes } from 'react';
import './Layout.scss';
import Header from '../Header';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
