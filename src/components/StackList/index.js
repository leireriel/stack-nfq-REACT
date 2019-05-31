import React from 'react';
import Question from './Question/index.js';
import './styles.scss';

class StackList extends React.Component {
  render() {
    const { dataQuestion } = this.props;    
    return (
      <ul className="list">
      <Question dataQuestion={dataQuestion}/>
      </ul>
    );
  }
}

export default StackList;