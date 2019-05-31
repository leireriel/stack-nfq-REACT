import React, { Component } from 'react';
import { fetchQuestion } from '../../services/fetchQuestion';
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
    return (
      <ol className="list">
        {this.state.dataQuestion.map(item => {
          return (
            <li key={item.id}>{item.author}</li>
          )
        })}
      </ol>
    )
  }
}

export default App;
