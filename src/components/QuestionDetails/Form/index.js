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
      errorNameInput: false,
      errorAnswerInput: false,
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
    // const { value } = event.target;
    this.setState(prevState => {
      const newAnswer = { ...prevState.answerToAdd, [inputId]: value };
      return { answerToAdd: newAnswer };
    });
  };

  handleAddAnswer() {
    // validate all inputs are filled
    // fetch put to add answer...
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
    const { answer, author } = this.state.answerToAdd;
    return (
      <Grid item xs={12}>
        <Paper className={classPaper}>
          <form noValidate autoComplete="off">
            <TextField label="Nombre usuario" fullWidth={true} value={author} onChange={this.handleChange('author')} variant="outlined" type="text" margin="normal" />
            <TextField label="Respuesta" fullWidth={true} value={answer} onChange={this.handleChange('answer')} type="text" variant="outlined" multiline={true} rows="10" margin="normal" />
            <div className="buttons__container">
              <Button variant="contained" className="form__button cancel__answer">
                cancelar
              </Button>
              <Button variant="contained" color="primary" className="form__button add__answer" onClick={this.handleAddAnswer}>
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
