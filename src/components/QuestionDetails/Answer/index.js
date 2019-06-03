import React from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class Answer extends React.Component{
  constructor(props){
    super(props);
    const {answers} =this.props;
    this.state={
      likes: parseInt(answers.likes)
    }
    this.moreLike=this.moreLike.bind(this);
  }

  moreLike(){
    const {answers, questionItem, index, updateQuestion} =this.props;
    let likes = parseInt(answers.likes);
      this.setState((prevState, props) => {
        answers.likes ++ ;
        updateQuestion(questionItem);
      }
    )
  }
  

  render(){
    const { classPaper, answers } = this.props;
    return (
      <Grid item xs={12}>
        <Paper className={classPaper}>
          <div className="answer__heart">
            <i className="fas fa-heart"
             onClick={this.moreLike}>
            {answers.likes}
            </i>
          </div>
          <h3 className="answer__text">{answers.answer}</h3>
          <h4 className="answer__author">{answers.author}</h4>
          <h5 className="answer__date">{answers.date}</h5>
        </Paper>
      </Grid>
    );
  }
}
export default Answer;

Answer.propTypes = {
  classPaper: PropTypes.string.isRequired,
  answer: PropTypes.object
};
