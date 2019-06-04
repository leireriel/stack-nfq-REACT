import React from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Favorite from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from '../../../images/avatar.png';
import moment from 'moment';



class Answer extends React.Component{
  constructor(props){
    super(props);
    this.moreLike=this.moreLike.bind(this);
    this.formatDate=this.formatDate.bind(this);
  }

  moreLike(){
    const {answers, questionItem, updateQuestion} =this.props;
      this.setState(() => {
        parseInt(answers.likes ++ );
        updateQuestion(questionItem);
      }
    )
  }

  formatDate(dateToFormat) {
    const dateArr = dateToFormat.split('T');
    dateArr[0] = moment(dateArr[0]).format('DD/MM/YYYY');
    return `Formulada el día ${dateArr[0]} a las ${dateArr[1]}`;
  }

  render(){
    const { classPaper, answers } = this.props;
    return (
      <Grid item xs={12}>
        <Paper className={classPaper}>
          <div className="container__text"> 
            <Badge className="answer__likes"
            badgeContent={answers.likes} color="primary">
              <Favorite className="answer__heart" onClick={this.moreLike}/>
            </Badge>
            <h3 className="answer__text">{answers.answer}</h3>
          </div>
          <div className="container__user">
            <div className="container__face"> 
              <h4 className="answer__author">{answers.author}</h4>
              <Avatar alt="Remy Sharp" src={avatarImg}  className="answer__img"/>
            </div>
            <h5 className="answer__date">{this.formatDate(answers.date)}</h5>
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