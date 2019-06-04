import React from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Favorite from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';

class Answer extends React.Component{
  constructor(props){
    super(props);
    this.moreLike=this.moreLike.bind(this);
  }

  moreLike(){
    const {answers, questionItem, updateQuestion} =this.props;
      this.setState(() => {
        parseInt(answers.likes ++ );
        updateQuestion(questionItem);
      }
    )
  }

  render(){
    const { classPaper, answers } = this.props;
    return (
      <Grid item xs={12}>
        <Paper className={classPaper}>
          <Badge className="answer__likes"
          badgeContent={answers.likes} color="primary">
            <Favorite className="answer__heart" onClick={this.moreLike}/>
          </Badge>
          <h3 className="answer__text">{answers.answer}</h3>
          <h4 className="answer__author">{answers.author}</h4>
          <h5 className="answer__date">{answers.date}</h5>
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