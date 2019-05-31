import React, { Component } from 'react';
import './styles.scss';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ModalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helperText: '',
      errorInfo: {
        name: false,
        tags: false,
        title: false,
        details: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, infoInput) {
    if (event.target.value.length) {
      this.setState(prevState => {
        let errorField = { ...prevState.errorInfo };
        errorField[infoInput] = false;
        return { helperText: '', errorInfo: errorField };
      });
    } else {
      this.setState({ helperText: 'Please fill this field', error: true });
    }
  }

  render() {
    const { helperText, errorInfo } = this.state;
    return (
      <Modal open={true}>
        <form noValidate autoComplete="off">
          <TextField
            helperText={helperText}
            onChange={event => {
              this.handleChange(event, 'name');
            }}
            error={errorInfo.name}
            required
            id="outlined-required"
            label="Nombre Usuario"
          />
          <TextField
            helperText={helperText}
            onChange={event => {
              this.handleChange(event, 'tags');
            }}
            error={errorInfo.tags}
            required
            id="outlined-required"
            label="Tags"
          />
          <TextField
            helperText={helperText}
            onChange={event => {
              this.handleChange(event, 'title');
            }}
            error={errorInfo.title}
            required
            id="outlined-required"
            label="Titulo Pregunta"
          />
          <TextField
            helperText={helperText}
            onChange={event => {
              this.handleChange(event, 'details');
            }}
            error={errorInfo.details}
            required
            id="outlined-required"
            label="Detalle Pregunta"
          />
        </form>
      </Modal>
    );
  }
}

// Modal.propTypes = {};

export default ModalInfo;
