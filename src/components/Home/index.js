import './styles.scss';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Footer from '../Footer/index';
import logoHome  from '../Images/logo-headerHome.svg';


class Home extends Component {
  render() {
    return (
      <div className="page__home">
        <div className="container__header--home">
        <img 
          className="header__home" 
          src={logoHome}
          alt="Logotipo de nfq stack en página Home"/>
        </div>
        <div className="home__main">
          <h1 className="home__title">
            La respuesta que necesitas a tus problemas de desarrollo
          </h1>
          <Link to="/questions">
            <button className="home__btn">
              Acceder
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;