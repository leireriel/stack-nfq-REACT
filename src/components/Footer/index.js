import './styles.scss';
import React from 'react';
import logoNFQ  from '../Images/logo-nfq.png';
import logoAdalab from '../Images/logo-adalab.svg';
class Footer extends React.Component{
  render(){
    return(
      <div className="container__footer">
        <img className="footer__nfq" src= {logoNFQ}/>
        <p className="footer__author">
          Diseñado por el equipo | © 2019
        </p>
        <img className="footer__adalab" src= {logoAdalab} />
      </div>
    );
  }
}

export default Footer;