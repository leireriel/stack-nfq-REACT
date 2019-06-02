import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Form from './Form';
import Answer from './Answer';
import Header from './Header';
import Footer from '../Footer';

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
    padding: theme.spacing(2)
  },
  paperForm: {
    backgroundColor: '#E8E8E8',
    padding: '30px 50px 38px',
    marginBottom: theme.spacing(5)
  },
  button: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    margin: '0 20px',
    padding: '10px 50px'
  }
});

const QuestionDetails = ({ dataQuestion, id, classes, updateQuestion }) => {
  const questionItem = dataQuestion.find(question => question.id === parseInt(id));
  return (
    <div className="question__page">
      {questionItem ? (
        <ThemeProvider theme={theme}>
          <Header />
          <main className={`question__main ${classes.root}`}>
            <section className="question__section">
              <Paper className={classes.paper}>
                <div className="title__container">
                  <h1 className="question__title">{questionItem.question}</h1>
                  <ul className="question__tags-list">
                    {questionItem.tags.split(',').map((tag, index) => (
                      <li className="question__tag" key={index}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="question__author">{questionItem.author}</p>
                  <p className="question__date">{questionItem.date}</p>
                </div>
                <div className="question__content">{questionItem.content}</div>
              </Paper>
            </section>

            <section className="answer__section">
              <h2 className="section__title">{questionItem.answers.length} respuestas</h2>
              <ul className="answer__list">
                {questionItem.answers.map((answer, index) => {
                  return (
                    <li key={index} className="question__answer">
                      <Answer answer={answer} classPaper={classes.paper} />
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
  updateQuestion: PropTypes.func
};

export default withStyles(styles)(QuestionDetails);
