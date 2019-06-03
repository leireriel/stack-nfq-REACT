import React, { Component } from 'react';
import ModalInfo from './ModalInfo';
import Question from './Question/index';
import Footer from '../Footer/index';
import FloatingActionButtons from './Button/index';
import PropTypes from 'prop-types';
import './styles.scss';
import Header from '../Header/index';

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
    const { dataQuestion } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="container__stacklist">
        <Header />
        <main>
          <ul className="list">
            {dataQuestion.map(item => {
              return (
                <li className="question__item" key={item.id}>
                  <Question item={item} />
                </li>
              );
            })}
          </ul>
          <FloatingActionButtons dialogueFunction={this.dialogueFunction} />
        </main>
        {isOpen && <ModalInfo dialogueFunction={this.dialogueFunction} />}
        <Footer />
      </div>
    );
  }
}

StackList.propTypes = {
  dataQuestion: PropTypes.arrayOf(PropTypes.object)
};
export default StackList;
