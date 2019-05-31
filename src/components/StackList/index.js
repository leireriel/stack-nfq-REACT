import React, { Component } from 'react';
import ModalInfo from './ModalInfo';
import Question from './Question/index.js';
import PropTypes from 'prop-types';
import FloatingActionButtons from './Button/index.js';
import './styles.scss';

class StackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.openDialogue = this.openDialogue.bind(this)
  }

  openDialogue() { 
    this.setState( { isOpen : true } );
  }

  render() {
    const { dataQuestion } = this.props; 
    const {isOpen} = this.state;   
    return (
      <div>
        <ul className="list">
          {dataQuestion.map(item => {
            return(
              <li className="question__item" key={item.id}>
                <Question item={item} />
              </li>
            );
          })}
        </ul>
        <FloatingActionButtons openDialogue={this.openDialogue}/>
        {isOpen && <ModalInfo/>}
      </div> 
    );
  }
}

StackList.propTypes = {
  dataQuestion: PropTypes.array,
};
export default StackList;
