import React, { Component } from 'react';
import { fetchQuestion } from '../../services/fetchQuestion';
import { updateQuestion } from '../../services/updateQuestion';
import StackList from '../StackList';
import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';
import QuestionDetails from '../QuestionDetails';
// import TeamInfo from '../TeamInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataQuestion: []
    };
    this.getQuestion = this.getQuestion.bind(this);
    this.updateQuestionAnswer = this.updateQuestionAnswer.bind(this);
  }
  
  componentDidMount() {
    this.getQuestion();
  }

  getQuestion() {
    fetchQuestion().then(data => {
      this.setState({
        dataQuestion: data
      });
    });
  }

  updateQuestionAnswer(question) {
    updateQuestion(question)
      .then(updatedQuestion => {
        const newQuestionsArr = [...this.state.dataQuestion];
        const index = newQuestionsArr.findIndex(question => question.id === updatedQuestion.id);
        newQuestionsArr[index] = updatedQuestion;
        this.setState({ dataQuestion: newQuestionsArr });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { dataQuestion } = this.state;
    return (
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/questions" render={() => <StackList dataQuestion={dataQuestion} />} />
        <Route exact path="/question/:id" render={routeProps => <QuestionDetails id={routeProps.match.params.id} dataQuestion={dataQuestion} updateQuestion={this.updateQuestionAnswer} />} />
        {/* <Route exact path="/card" render={() => <TeamInfo />} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

export default App;
