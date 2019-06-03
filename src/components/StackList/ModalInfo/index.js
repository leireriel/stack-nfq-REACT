import React, { Component } from 'react';
import './styles.scss';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4595cb'
    },
    secondary: {
      main: '#777777'
    }
  }
});

const styles = theme => ({
  modal: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  button: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    margin: '0 20px',
    padding: '10px 50px'
  },
  
});

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
      error: {
        name: false,
        tags: false,
        title: false,
        details: false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendQuestion = this.sendQuestion.bind(this);
  }

  handleChange = inputInfo => event => {
    const inputValue = event.target.value;
    this.setState(prevState => {
      const newQuestion = { ...prevState.createQuestion, [inputInfo]: inputValue };
      const newError = { ...prevState.error, [inputInfo]: inputValue ? false : true };
      return { error: newError, createQuestion: newQuestion };
    });
  };

  sendQuestion() {
    const newQuestion = {
      ...this.state.createQuestion, answers: [], date: moment().format('YYYY-MM-DDTHH:MM:SS'), id: this.props.arrLength + 1
    }
    this.props.createNewQuestion(newQuestion);
    this.setState({
      createQuestion: {
        name: '',
        tags: '',
        title: '',
        details: ''
      },
      error: {
        name: false,
        tags: false,
        title: false,
        details: false
      }
    })
    this.props.dialogueFunction();
  }

  render() {
    const { createQuestion: { name, tags, title, details }, error } = this.state;
    const { dialogueFunction } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Dialog open={true} aria-labelledby="form-dialog-title" PaperProps={{style: {backgroundColor: '#E8E8E8'}, overlaystyle: {backgroundColor: 'rgba(255, 255, 255, 0.5)'}}} >
          <DialogTitle id="form-dialog-title" className="dialog__title" >Añade una nueva pregunta</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange('name')}
              value={name}
              required
              label="Nombre Usuario"
              error={error.name}
              helperText={error.name ? 'Por favor, rellena este campo' : ''}
              fullWidth
            />
            <TextField
              onChange={this.handleChange('tags')}
              value={tags}
              required
              label="Tags"
              error={error.tags}
              helperText={error.tags ? 'Por favor, rellena este campo' : ''}
              fullWidth
            />
            <TextField
              onChange={this.handleChange('title')}
              value={title}
              required
              label="Titulo Pregunta"
              error={error.title}
              helperText={error.title ? 'Por favor, rellena este campo' : ''}
              fullWidth
            />
            <TextField
              onChange={this.handleChange('details')}
              value={details}
              required
              label="Detalle Pregunta"
              error={error.details}
              helperText={error.details ? 'Por favor, rellena este campo' : ''}
              fullWidth
              multiline
              rows='10'
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={dialogueFunction}>
              Cancelar
          </Button>
            <Button color="primary" disabled={!name || !tags || !title || !details} onClick={this.sendQuestion}>
              Aceptar
          </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    );
  }
}

ModalInfo.propTypes = {
  arrLength: PropTypes.number,
  createNewQuestion: PropTypes.func,
  dialogueFunction: PropTypes.func
};

export default withStyles(styles)(ModalInfo);
