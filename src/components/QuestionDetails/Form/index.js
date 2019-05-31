import React, { Component } from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
  }

  handleChange = inputId => event => {
    const { value } = event.target;
    this.setState(prevState => {
      const newAnswer = { ...prevState.answerToAdd, [inputId]: value };
      return { answerToAdd: newAnswer };
    });
  };

  render() {
    const { classPaper } = this.props;
    const { answer, author } = this.state.answerToAdd;
    return (
      <Grid item xs={12}>
        <Paper className={classPaper}>
          <TextField id="name__input" label="Nombre usuario" fullWidth={true} value={author} onChange={this.handleChange('author')} variant="outlined" errorText="Name can't be empty, Please Fill this field" type="text" margin="normal" />
          <TextField id="answer__input" label="Respuesta" fullWidth={true} value={answer} onChange={this.handleChange('answer')} errorText="Answer can't be empty, Please Fill this field" type="text" variant="outlined" multiline={true} rows="10" margin="normal" />
        </Paper>
      </Grid>
    );
  }
}

Form.propTypes = {};

export default Form;
