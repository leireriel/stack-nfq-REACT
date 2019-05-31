import React from 'react';
import Question from './Question/index.js';
import './styles.scss';
import PropTypes from 'prop-types';


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
Question.propTypes = {
  dataQuestion: PropTypes.array,
};
export default StackList;