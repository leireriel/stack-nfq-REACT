import React, { Component } from 'react';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.getQuestion = this.getQuestion.bind(this);
  }
  componentDidMount() {
    this.getQuestion()
  }

  getQuestion() {

  }

  render() {
    return <div className="">hola</div>;
  }
}

export default App;
