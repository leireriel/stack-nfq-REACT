import React from 'react';
import './styles.scss';
import logoStackList from '../../images/logo-blue.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      // <header className="container__header">
      //   {this.props.children}
      //   <Link to="/home" className="header__link-logo">
      //     <img className="header__stackList" src={logoStackList} alt="Logotipo de nfq stack" />
      //   </Link>
      // </header>
      <header className="container__header">
        {this.props.children}
        {/* <div className="header__logo"> */}
        <Link to="/home" className="header__link-logo">
          <h1 className="header__stackList">Stack nfq</h1>
          {/* <img className="header__stackList" src={logoStackList} alt="Logotipo de nfq stack" /> */}
        </Link>
        {/* </div> */}
      </header>
      //   <header className="page__header">
      //   <div className="wrapper">
      //     <div className="header__logo">
      //     <Link className="header__link" to="/home"><h1 className="header__logo-img">Awesome profile cards</h1></Link>
      //     </div>
      //   </div>
      // </header>
    );
  }
}

export default Header;
