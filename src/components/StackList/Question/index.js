import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    const { item } = this.props;    
    return (
      <React.Fragment>
        <div className="container__question">
          <h2 className="question__title" >{item.question}</h2>
          <h3 className="question__chips" >{item.tags}</h3>
        </div>
        <div className="container__author">
          <div className="container__author--detail">
            <h4 className="question__author" >{item.author}</h4>
            <img 
              className="question__image" 
              alt="user" 
              src="https://via.placeholder.com/50"/>
          </div>
          <p className="question__date" >{item.date}</p>
        </div>
      </React.Fragment>
    );
  }
}
Question.propTypes = {
  dataQuestion: PropTypes.object,
};
export default Question;