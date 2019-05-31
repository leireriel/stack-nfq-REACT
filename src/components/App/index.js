import React, { Component } from 'react';
import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';
// import StackList from '../StackList';
import QuestionDetails from '../QuestionDetails';
// import TeamInfo from '../TeamInfo';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        {/* <Route exact path="/questions" render={() => <StackList />} /> */}
        <Route exact path="/question/:id" render={routeProps => <QuestionDetails id={routeProps.match.params.id} />} />
        {/* <Route exact path="/card" render={() => <TeamInfo />} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

export default App;
