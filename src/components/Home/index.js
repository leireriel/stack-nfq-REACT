import './styles.scss';
import React, { Component } from 'react';
import Footer from '../Footer/index';

class Home extends Component {
  render() {
    return (
      <div className="page__home">
        <div>home</div>
        <div className="home__main">qué haces
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;