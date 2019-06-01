import React, { Component } from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import moment from 'moment';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        answer: false,
        author: false
      },
      answerToAdd: {
        answer: '',
        author: '',
        likes: 0,
        date: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
  }

  handleChange = inputId => ({ target: { value } }) => {
    this.setState(prevState => {
      const newAnswer = { ...prevState.answerToAdd, [inputId]: value };
      const newError = { ...prevState.error, [inputId]: value ? false : true };
      return { answerToAdd: newAnswer, error: newError };
    });
  };

  handleAddAnswer() {
    this.setState(
      prevState => {
        const newAnswer = { ...prevState.answerToAdd, date: moment().format('YYYY-MM-DDTHH:MM:SS') };
        return { answerToAdd: newAnswer };
      },
      () => this.addAnswerToQuestionObject()
    );
  }

  addAnswerToQuestionObject() {
    const updatedQuestion = {
      ...this.props.questionItem
    };
    updatedQuestion.answers.push(this.state.answerToAdd);
    this.props.updateQuestion(updatedQuestion);
    // reset answer in the state
    this.setState({
      answerToAdd: {
        answer: '',
        author: '',
        likes: 0,
        date: ''
      }
    });
  }

  render() {
    const { classPaper } = this.props;
    const { error, answerToAdd: { answer, author } } = this.state;
    return (
      <Grid item xs={12}>
        <Paper className={classPaper}>
          <form noValidate autoComplete="off">
            <TextField
            label="Nombre usuario"
            fullWidth
            value={author}
            onChange={this.handleChange('author')}
            variant="outlined"
            type="text"
            margin="normal"
            error={error.author}
            />
            <TextField
            label="Respuesta"
            fullWidth
            value={answer}
            onChange={this.handleChange('answer')}
            type="text"
            variant="outlined"
            multiline
            rows="10"
            margin="normal"
            error={error.answer}
            />
            <div className="buttons__container">
              <Button variant="contained" className="form__button cancel__answer">
                cancelar
              </Button>
              <Button variant="contained" color="primary" className="form__button add__answer" onClick={this.handleAddAnswer} disabled={!answer || !author}>
                aceptar
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    );
  }
}

Form.propTypes = {
  classPaper: PropTypes.string.isRequired,
  updatedQuestion: PropTypes.func,
  questionItem: PropTypes.object
};

export default Form;
