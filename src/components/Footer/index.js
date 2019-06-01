import './styles.scss';
import React from 'react';


class Footer extends React.Component{
  render(){
    return(
      <div className="container__footer">
        <img className="footer__nfq"/>
        <p className="footer__author">
          Diseñado por el equipo | © 2019
        </p>
        <img className="footer__adalab" />
      </div>
    );
  }
}

export default Footer;