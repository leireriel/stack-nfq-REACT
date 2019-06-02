import React from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import arrowIcon from '../../../images/back-arrow.png';

const styles = theme => ({
  button: {
    textTransform: 'capitalize'
  }
});

function Header({ classes }) {
  return (
    <header>
      <Link to="/questions" className="header__button-link">
        <Button variant="outlined" color="primary" className={classes.button}>
          <img src={arrowIcon} alt="back arrow link" className="header__link-image" />
          Volver atrás
        </Button>
      </Link>
    </header>
  );
}

export default withStyles(styles)(Header);
