import React, { Component } from 'react';
import ModalInfo from './ModalInfo';
import Filter from './Filter/index';
import Question from './Question/index';
import Footer from '../Footer/index';
import FloatingActionButtons from './Button/index';
import PropTypes from 'prop-types';
import './styles.scss';
import Header from '../Header/index';
import _ from 'lodash';

class StackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.dialogueFunction = this.dialogueFunction.bind(this);
  }

  dialogueFunction() {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    const { dataQuestion, createNewQuestion } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="container__stacklist">
        <Header />
        <main>
          <Filter />
          <ul className="list">
            {
              _.sortBy(dataQuestion, 'date').reverse()
              .filter((question) => {
                return question.question.toLowerCase().includes("google".toLowerCase()) || 
                question.content.toLowerCase().includes("google".toLowerCase());
              })
              .map(item => {
                return (
                  <li className="question__item" key={item.id}>
                    <Question item={item} />
                  </li>
                );
              })}
          </ul>
          <FloatingActionButtons dialogueFunction={this.dialogueFunction} />
        </main>
        {isOpen && <ModalInfo dialogueFunction={this.dialogueFunction} createNewQuestion={createNewQuestion} arrLength={dataQuestion.length} />}
        <Footer />
      </div>
    );
  }
}

StackList.propTypes = {
  dataQuestion: PropTypes.arrayOf(PropTypes.object)
};
export default StackList;
