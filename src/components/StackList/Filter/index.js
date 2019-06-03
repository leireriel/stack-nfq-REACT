import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: "100%"
  },
}));

function Filter() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="filter__wrapper">
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end" >
            <Grid item xs={1}>
              <i className="fas fa-search"></i>
            </Grid>
            <Grid item xs={11}>
              <TextField type="text" label="Buscar..." fullWidth/>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export default Filter;