import React, {Component, Fragment} from 'react';
import Question from './Question/index.js';
import './styles.scss';
import PropTypes from 'prop-types';
import FloatingActionButtons from './Button/index.js';




class StackList extends Component {
  render() {
    const { dataQuestion } = this.props;    
    return (
      <ul className="list">
        {dataQuestion.map(item => {
          return(
            <li className="question__item" key={item.id}>
              <Question item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}
Question.propTypes = {
  dataQuestion: PropTypes.array,
};
export default StackList;