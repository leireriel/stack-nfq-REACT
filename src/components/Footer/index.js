import './styles.scss';
import React from 'react';
import logoNFQ  from '../Images/logo-nfq.png';
import logoAdalab from '../Images/logo-adalab.svg';

class Footer extends React.Component{
  render(){
    return(
      <div className="container__footer">
        <a href="https://nfq.es/" target="_blank">
          <img 
            className="footer__nfq" 
            src={logoNFQ}
            alt="Logo de nfq"/>
        </a>
        <p className="footer__author" target="_blank">
          Diseñado por el equipo | © 2019
        </p>
        <a href="https://adalab.es/">
          <img 
            className="footer__adalab" 
            src={logoAdalab} 
            alt="Logo de Adalab"/>
        </a>
      </div>
    );
  }
}

export default Footer;