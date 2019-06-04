import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Form from './Form';
import Answer from './Answer';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import arrowIcon from '../../images/back-arrow.png';
import Button from '@material-ui/core/Button';
import QuestionContent from '../StackList/QuestionContent';

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
    padding: '27px 25px 37px'
  },
  paperForm: {
    backgroundColor: '#EAEAEA',
    padding: '30px 50px 38px',
    marginBottom: '70px'
  },
  button: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    margin: '0 20px',
    padding: '10px 50px'
  },
  headerButton: {
    textTransform: 'capitalize',
    padding: '7px 11px',
    fontSize: 12
  },
  paperAnswer: {
    margin: '20px 0px', 
    padding: '30px',
  }
});

class QuestionDetails extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
  const { dataQuestion, id, classes, updateQuestion} = this.props;
  const questionItem = dataQuestion.find(question => question.id === parseInt(id));
    return(
      <div className="question__page">
      {questionItem ? (
        <ThemeProvider theme={theme}>
          <Header>
            <Link to="/questions" className="header__button-link">
              <Button variant="outlined" color="primary" className={classes.headerButton}>
                <img src={arrowIcon} alt="back arrow link" className="header__link-image" />
                Volver atrás
              </Button>
            </Link>
          </Header>
          <main className={`question__main ${classes.root}`}>
            <section className="question__section">
              <QuestionContent item={questionItem}>
                <div className="question__content">{questionItem.content}</div>
              </QuestionContent>
            </section>
            <section className="answer__section">
              <h2 className="section__title">{questionItem.answers.length} respuestas</h2>
              <ul className="answer__list">
                {questionItem.answers.map((answers, index) => {
                  return (
                    <li key={index} className="question__answer">
                      <Answer answers={answers} 
                      classPaper={classes.paperAnswer} 
                      questionItem={questionItem} 
                      updateQuestion={updateQuestion} 
                      />
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
  }
}


QuestionDetails.propTypes = {
  dataQuestion: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  updateQuestion: PropTypes.func
};

export default withStyles(styles)(QuestionDetails);
