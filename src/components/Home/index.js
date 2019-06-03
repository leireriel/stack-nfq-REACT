import './styles.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import Footer from '../Footer/index';
import logoHome  from '../../images/LOGO.svg';

function Home () {      
    return (
      <div className="page__home">
        <header className="container__header--home">
          <img 
            className="header__home" 
            src={logoHome}
            alt="Logotipo de nfq stack en página Home"
            />
        </header>
        <div className="home__main">
          <h1 className="home__title">
            La respuesta que necesitas a tus problemas de desarrollo
          </h1>
          <Link to="/team">
            <button className="info__btn">i</button>
          </Link>
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


export default Home;