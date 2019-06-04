import React from 'react';
import './styles.scss';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import userImage from '../../../images/avatar.png';
import { formatDate } from '../../../data/commonFunctions';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4595cb'
    }
  }
});

const styles = theme => ({
  paper: {
    padding: '20px 25px'
  },
  bigAvatar: {
    margin: '0 0 0 10px',
    width: 50,
    height: 50
  }
});

function QuestionContent({ item, classes, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        <div className="title__container">
          <h2 className="question__title">{item.question}</h2>
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

QuestionContent.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.object,
  children: PropTypes.object
};

export default withStyles(styles)(QuestionContent);
