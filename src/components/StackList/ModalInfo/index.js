import React, { Component } from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class ModalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createQuestion: {
        name: '',
        tags: '',
        title: '',
        details: ''
      },
      error : {
        name: false,
        tags: false,
        title: false,
        details: false
      }
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = inputInfo => event => {
    const inputValue = event.target.value;
    this.setState(prevState => {
      const newQuestion = { ...prevState.createQuestion, [inputInfo] : inputValue};
      const newError = { ...prevState.error, [inputInfo]: inputValue ? false : true };
      return { error : newError, createQuestion : newQuestion };
    });
  };

  render() {
    const { createQuestion, error } = this.state;
    const { dialogueFunction } = this.props;
    return (
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añade una nueva pregunta</DialogTitle>
        <DialogContent>
          <TextField
            onChange={this.handleChange('name')}
            value={createQuestion.name}
            required
            label="Nombre Usuario"
            error={error.name}
          />
          <TextField
            onChange={this.handleChange('tags')}
            value={createQuestion.tags}
            required
            label="Tags"
            error={error.tags}
          />
          <TextField
            onChange={this.handleChange('title')}
            value={createQuestion.title}
            required
            label="Titulo Pregunta"
            error={error.title}
          />
          <TextField
            onChange={this.handleChange('details')}
            value={createQuestion.details}
            required
            label="Detalle Pregunta"
            error={error.details}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={dialogueFunction}>
            Cancelar
          </Button>
          <Button color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

// Modal.propTypes = {};

export default ModalInfo;
