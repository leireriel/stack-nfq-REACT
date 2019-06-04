import React from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Favorite from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from '../../../images/avatar.png';
import { formatDate } from '../../../data/commonFunctions';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.moreLike = this.moreLike.bind(this);
  }

  moreLike() {
    const { answers, questionItem, updateQuestion } = this.props;
    this.setState(() => {
      parseInt(answers.likes++);
      updateQuestion(questionItem);
    });
  }

  render() {
    const { classPaper, answers } = this.props;
    return (
      <Grid item xs={12}>
        <Paper className={classPaper}>
          <div className="container__text">
            <Badge className="answer__likes" badgeContent={answers.likes} color="primary">
              <Favorite className="answer__heart" onClick={this.moreLike} />
            </Badge>
            <p className="answer__text">{answers.answer}</p>
          </div>
          <div className="container__user">
            <div className="container__face">
              <p className="answer__author">{answers.author}</p>
              <Avatar alt={answers.author} src={avatarImg} className="answer__img" />
            </div>
            <p className="answer__date">{formatDate(answers.date)}</p>
          </div>
        </Paper>
      </Grid>
    );
  }
}

Answer.propTypes = {
  classPaper: PropTypes.string.isRequired,
  answers: PropTypes.object,
  questionItem: PropTypes.object,
  updateQuestion: PropTypes.func
};

export default Answer;
