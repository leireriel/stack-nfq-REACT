import React from 'react';
import './styles.scss';
import '../../QuestionDetails/styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import QuestionContent from '../QuestionContent';

function Question({ item }) {
  return (
    <Link className="link__question--wrapper" to={`question/${item.id}`} >
      <Grid item xs={12}>
        <QuestionContent item={item} />
      </Grid>
    </Link>
  );
}

Question.propTypes = {
  item: PropTypes.object
};

export default Question;
