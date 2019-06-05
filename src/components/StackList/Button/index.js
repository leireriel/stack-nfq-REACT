import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4595cb'
    }
  }
});
const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: '86px',
    right: '33px',
    height: '80px',
    width: '80px'
  },
  icon: {
    fontSize: '48px'
  }
});

function FloatingActionButtons({ dialogueFunction, classes }) {
  return (
    <ThemeProvider theme={theme}>
      <Fab color="primary" aria-label="Add" onClick={dialogueFunction} className={classes.fab}>
        <AddIcon className={classes.icon} />
      </Fab>
    </ThemeProvider>
  );
}

FloatingActionButtons.propTypes = {
  dialogueFunction: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
