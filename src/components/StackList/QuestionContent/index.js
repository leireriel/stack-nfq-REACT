import React from 'react';
import './styles.scss';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import userImage from '../../../images/avatar.png';
import { formatDate } from '../../../data/commonFunctions';
import Avatar from '@material-ui/core/Avatar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4595cb'
    }
  }
});

const styles = theme => ({
  paper: {
    padding: '27px 25px 37px'
  },
  bigAvatar: {
    margin: '10px 0 10px 10px',
    width: 60,
    height: 60
  }
});

function QuestionContent({ item, classes, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        <div className="title__container">
          <h1 className="question__title">{item.question}</h1>
          <div className="question__user-container">
            <span className="question__author">{item.author}</span>
            <Avatar alt={item.author} src={userImage} className={classes.bigAvatar} />
          </div>
        </div>
        <div className="subtitle__container">
          <ul className="question__tags-list">
            {item.tags.split(',').map((tag, index) => (
              <li className="question__tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <p className="question__date">{formatDate(item.date)}</p>
        </div>
        {children}
      </Paper>
    </ThemeProvider>
  );
}

export default withStyles(styles)(QuestionContent);
