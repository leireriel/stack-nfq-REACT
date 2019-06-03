import React from 'react';
import './styles.scss';
import logoStackList from '../../images/logo-stackList.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="container__header">
        <Link to="home">
          <img className="header__stackList" src={logoStackList} alt="Logotipo de nfq stack" />
        </Link>
      </div>
    );
  }
}

export default Header;
