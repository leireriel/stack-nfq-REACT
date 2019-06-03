import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Question extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Link className="link__question--wrapper" to={`question/${item.id}`}>
        <div className="wrapper__question">
          <div className="container__question">
            <h2 className="question__title" >{item.question}</h2>
            <h3 className="question__chips">{item.tags}</h3>
          </div>
          <div className="container__author">
            <div className="container__author--detail">
              <h4 className="question__author">{item.author}</h4>
              <img className="question__image" alt="user" src="https://via.placeholder.com/50" />
            </div>
            <p className="question__date">{item.date}</p>
          </div>
        </div>
      </Link>
    );
  }
}

Question.propTypes = {
  item: PropTypes.object
};

export default Question;
