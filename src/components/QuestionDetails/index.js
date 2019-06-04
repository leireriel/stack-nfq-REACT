import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Form from './Form';
import Answer from './Answer';
import Header from '../Header';
import Footer from '../Footer';
import avatarImg from '../../images/avatar.png';
import moment from 'moment';
import { Link } from 'react-router-dom';
import arrowIcon from '../../images/back-arrow.png';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4595cb'
    }
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: '27px 25px 37px'
  },
  paperForm: {
    backgroundColor: '#EAEAEA',
    padding: '30px 50px 38px',
    marginBottom: theme.spacing(5)
  },
  button: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    margin: '0 20px',
    padding: '10px 50px'
  },
  bigAvatar: {
    margin: '10px 0 10px 10px',
    width: 60,
    height: 60
  },
  headerButton: {
    textTransform: 'capitalize',
    padding: '7px 11px',
    fontSize: 12
  }
});

const formatDate = dateToFormat => {
  const dateArr = dateToFormat.split('T');
  dateArr[0] = moment(dateArr[0]).format('DD/MM/YYYY');
  return `Formulada el día ${dateArr[0]} a las ${dateArr[1]}`;
};

const QuestionDetails = ({ dataQuestion, id, classes, updateQuestion }) => {
  const questionItem = dataQuestion.find(question => question.id === parseInt(id));
  return (
    <div className="question__page">
      {questionItem ? (
        <ThemeProvider theme={theme}>
          <Header>
            <Link to="/questions" className="header__button-link">
              <Button variant="outlined" color="primary" className={classes.headerButton}>
                <img src={arrowIcon} alt="back arrow link" className="header__link-image" />
                Volver atrás
              </Button>
            </Link>
          </Header>
          <main className={`question__main ${classes.root}`}>
            <section className="question__section">
              <Paper className={classes.paper}>
                <div className="title__container">
                  <h1 className="question__title">{questionItem.question}</h1>
                  <div className="question__user-container">
                    <span className="question__author">{questionItem.author}</span>
                    <Avatar alt="Remy Sharp" src={avatarImg} className={classes.bigAvatar} />
                  </div>
                </div>
                <div className="subtitle__container">
                  <ul className="question__tags-list">
                    {questionItem.tags.split(',').map((tag, index) => (
                      <li className="question__tag" key={index}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="question__date">{formatDate(questionItem.date)}</p>
                </div>
                <div className="question__content">{questionItem.content}</div>
              </Paper>
            </section>

            <section className="answer__section">
              <h2 className="section__title">{questionItem.answers.length} respuestas</h2>
              <ul className="answer__list">
                {questionItem.answers.map((answers, index) => {
                  return (
                    <li key={index} className="question__answer">
                      <Answer answers={answers} 
                      classPaper={classes.paper} 
                      questionItem={questionItem} 
                      updateQuestion={updateQuestion} />
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="section__form">
              <h2 className="section__title">Añade tu respuesta</h2>
              <Form classPaper={classes.paperForm} questionItem={questionItem} updateQuestion={updateQuestion} classButton={classes.button} />
            </section>
          </main>
        </ThemeProvider>
      ) : (
        <CircularProgress color="primary" />
      )}
      <Footer />
    </div>
  );
};

QuestionDetails.propTypes = {
  dataQuestion: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  updateQuestion: PropTypes.func,
  answers: PropTypes.object,
  questionItem: PropTypes.object
};

export default withStyles(styles)(QuestionDetails);
