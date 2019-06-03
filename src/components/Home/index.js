import './styles.scss';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Footer from '../Footer/index';
import logoHome  from '../Images/LOGO_blue.svg';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 85,
    width: 372,
  },
});

function Home () {
  
    
    
    // function MediaCard() {
      // const classes = useStyles();
    return (
      <div className="page__home">
        <header className="container__header--home">
        {/* <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={logoHome}
          width="372px"
          title="Logotipo de nfq stack"
        />
        </Card> */}
          <img 
            className="header__home" 
            src={logoHome}
            // width="372px"
            alt="Logotipo de nfq stack en página Home"
            />
          
        </header>
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


export default Home;