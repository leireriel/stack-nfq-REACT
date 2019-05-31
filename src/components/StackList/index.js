import React, {Component, Fragment} from 'react';
import Question from './Question/index.js';
import './styles.scss';
import PropTypes from 'prop-types';
import FloatingActionButtons from './Button/index.js';




class StackList extends Component {
  render() {
    const { dataQuestion } = this.props;    
    return (
      <Fragment>
        <ul className="list">
          <Question dataQuestion={dataQuestion}/>
        </ul>
        <FloatingActionButtons />
      </Fragment>
    );
  }
}
Question.propTypes = {
  dataQuestion: PropTypes.array,
};
export default StackList;