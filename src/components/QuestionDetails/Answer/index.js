import React from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

export default function Answer({ classPaper, answers }) {
  return (
    <Grid item xs={12}>
      <Paper className={classPaper}>
        <div className="answer__heart">
          <span>{answers.likes}</span>
        </div>
        <h3 className="answer__text">{answers.answer}</h3>
        <h4 className="answer__author">{answers.author}</h4>
        <h5 className="answer__date">{answers.date}</h5>
      </Paper>
    </Grid>
  );
}

Answer.propTypes = {
  classPaper: PropTypes.string.isRequired
};
