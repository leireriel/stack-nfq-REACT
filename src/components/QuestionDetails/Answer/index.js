import React from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

export default function Answer({ classPaper }) {
  return (
    <Grid item xs={12}>
      <Paper className={classPaper}>xs=12</Paper>
    </Grid>
  );
}

Answer.propTypes = {
  classPaper: PropTypes.string.isRequired
};
