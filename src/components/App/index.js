import React, { Component } from 'react';
import { fetchQuestion } from '../../services/fetchQuestion';
import StackList from '../StackList/index.js';
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

  render() {
    const { dataQuestion } = this.state;
    return (
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/questions" render={() => <StackList dataQuestion={dataQuestion} />} />
        <Route exact path="/question/:id" render={routeProps => <QuestionDetails id={routeProps.match.params.id} dataQuestion={dataQuestion} />} />
        {/* <Route exact path="/card" render={() => <TeamInfo />} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

export default App;
