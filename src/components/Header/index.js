import './styles.scss';
import React from 'react';
import logoStackList  from '../Images/logo-stackList.svg';

class Header extends React.Component{
  render(){
    return(
      <div className="container__header">
        <img 
          className="header__stackList" 
          src={logoStackList}
          alt="Logotipo de nfq stack"/>
      </div>
    );
  }
}

export default Header;