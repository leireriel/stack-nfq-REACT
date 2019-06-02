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
      error: {
        name: '',
        tags: '',
        title: '',
        details: ''
      } 
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = inputInfo => event => {
    const inputValue = event.target.value;
    this.setState(prevState => {
      const newError = { ...prevState.error, [inputInfo] : inputValue};
      return { error: newError };
    });
  };

  render() {
    const { name, tags, title, details } = this.state;
    const { dialogueFunction } = this.props;
    return (
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añade una nueva pregunta</DialogTitle>
        <DialogContent>
          <TextField
            onChange={this.handleChange('name')}
            value={name}
            required
            id="outlined-required"
            label="Nombre Usuario"
          />
          <TextField
            onChange={this.handleChange('tags')}
            value={tags}
            required
            id="outlined-required"
            label="Tags"
          />
          <TextField
            onChange={this.handleChange('title')}
            value={title}
            required
            id="outlined-required"
            label="Titulo Pregunta"
          />
          <TextField
            onChange={this.handleChange('details')}
            value={details}
            required
            id="outlined-required"
            label="Detalle Pregunta"
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
