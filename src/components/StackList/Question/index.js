import React from 'react';
import './styles.scss';
import '../../QuestionDetails/styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import QuestionContent from '../QuestionContent';
// import userImage from '../../../images/avatar.png';
// import { formatDate } from '../../../data/commonFunctions';
// import Avatar from '@material-ui/core/Avatar';

function Question({ item }) {
  return (
    <Link className="link__question--wrapper" to={`question/${item.id}`}>
      <Grid item xs={12}>
        <QuestionContent item={item} />
        {/* <Paper className={classes.paper}> */}
        {/* <div className="wrapper__question"> */}
        {/* <div className="title__container">
            <h2 className="question__title">{item.question}</h2>
            <div className="container__author--detail">
              <p className="question__author">{item.author}</p>
              <Avatar alt={item.author} src={userImage} className={classes.bigAvatar} />
              {/* <img className="question__image" alt="user" src="https://via.placeholder.com/50" /> */}
        {/* </div>
          </div>
          <div className="container__subtitle">
            <ul className="question__tags-list">
              {item.tags.split(',').map((tag, index) => (
                <li className="question__tag" key={index}>
                  {tag}
                </li>
              ))} */}
        {/* </ul> */}
        {/* <h3 className="question__chips">{item.tags}</h3> */}
        {/* <p className="question__date">{formatDate(item.date)}</p>
          </div> */}
        {/* </div> */}
        {/* </Paper> */}
      </Grid>
    </Link>
  );
}
// }

Question.propTypes = {
  item: PropTypes.object
};

export default Question;

// {/* <div className="title__container">
//                   <h1 className="question__title">{questionItem.question}</h1>
//                   <div className="question__user-container">
//                     <span className="question__author">{questionItem.author}</span>
//                     <Avatar alt="Remy Sharp" src={avatarImg} className={classes.bigAvatar} />
//                   </div>
//                 </div>
//                 <div className="subtitle__container">
//                   <ul className="question__tags-list">
//                     {questionItem.tags.split(',').map((tag, index) => (
//                       <li className="question__tag" key={index}>
//                         {tag}
//                       </li>
//                     ))}
//                   </ul> */}
