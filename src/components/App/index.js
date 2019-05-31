import React, { Component } from 'react';
import { fetchQuestion } from '../../services/fetchQuestion';
import StackList from '../StackList/index.js';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataQuestion: []
    }
    this.getQuestion = this.getQuestion.bind(this);
  }
  componentDidMount() {
    this.getQuestion()
  }

  getQuestion() {
    fetchQuestion()
      .then(data => {
        this.setState({
          dataQuestion: data
        })
      })
  }

  render() {
    const { dataQuestion } = this.state;
    return (
      <React.Fragment>
        <StackList dataQuestion={dataQuestion} />
      </React.Fragment>
    )
  }
}

export default App;
