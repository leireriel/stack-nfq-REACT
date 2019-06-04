import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function Header({ children }) {
  return (
    <header className="container__header">
      {children}
      <Link to="/home" className="header__link-logo">
        <h1 className="header__stackList">Stack nfq</h1>
      </Link>
    </header>
  );
}

export default Header;
