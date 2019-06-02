import './styles.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form';
import Answer from './Answer';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
    // backgroundColor: '#efefef'
    // textAlign: 'center',
    // color: theme.palette.text.secondary
  }
});

const QuestionDetails = ({ dataQuestion, id, classes, updateQuestion }) => {
  const questionItem = dataQuestion.find(question => question.id === parseInt(id));
  return (
    <Fragment>
      {questionItem ? (
        <main className={`question__page ${classes.root}`}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <section className="question__section">
                  <div className="title__container">
                    <h2 className="question__title">{questionItem.question}</h2>
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
                </section>
              </Paper>
            </Grid>
          </Grid>

          <section className="answer__section">
            <h3 className="section__title">{questionItem.answers.length} respuestas</h3>
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
            <h3 className="section__title">Añade tu respuesta</h3>
            <Form classPaper={classes.paper} questionItem={questionItem} updateQuestion={updateQuestion} />
          </section>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

QuestionDetails.propTypes = {
  dataQuestion: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  updateQuestion: PropTypes.func
};

export default withStyles(styles)(QuestionDetails);
