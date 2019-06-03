import './styles.scss';
import React from 'react';
import logoNFQ from '../../images/logo-nfq.png';
import logoAdalab from '../../images/logo-adalab.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="container__footer">
        <a href="https://nfq.es/" target="_blank" rel="noopener noreferrer">
          <img className="footer__nfq" src={logoNFQ} alt="Logo de nfq" />
        </a>
        <p className="footer__author">Diseñado por el equipo | © 2019</p>
        <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">
          <img className="footer__adalab" src={logoAdalab} alt="Logo de Adalab" />
        </a>
      </footer>
    );
  }
}

export default Footer;
