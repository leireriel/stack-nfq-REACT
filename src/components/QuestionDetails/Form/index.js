import React, { Component } from 'react';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
          <form noValidate autoComplete="off">
            <TextField id="name__input" label="Nombre usuario" fullWidth={true} value={author} onChange={this.handleChange('author')} variant="outlined" type="text" margin="normal" />
            <TextField id="answer__input" label="Respuesta" fullWidth={true} value={answer} onChange={this.handleChange('answer')} type="text" variant="outlined" multiline={true} rows="10" margin="normal" />
            <div className="buttons__container">
              <Button variant="contained" className="form__button cancel__answer">
                cancelar
              </Button>
              <Button variant="contained" color="primary" className="form__button add__answer">
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
  classPaper: PropTypes.string.isRequired
};

export default Form;
