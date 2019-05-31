import './styles.scss';
import React, { Fragment } from 'react';
import Answer from './Answer';
import PropTypes from 'prop-types';

const QuestionDetails = ({ dataQuestion, id }) => {
  const questionItem = dataQuestion.find(question => question.id === parseInt(id));
  return (
    <Fragment>
      {questionItem ? (
        <div className="question__page">
          <div className="question__title-container">
            <h2 className="question__title">{questionItem.question}</h2>
            <ul className="question__tags-list">
              {questionItem.tags.split(',').map((tag, index) => (
                <li className="question__tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            <p className="question__author">{questionItem.author}</p>
            <p className="question__date">{questionItem.date}</p>
          </div>
          <div className="question__content">{questionItem.content}</div>
          <ul className="answer__list">
            {questionItem.answers.map((answer, index) => {
              console.log('answer', answer.answer);
              return (
                <li key={index} className="question__answer">
                  <Answer answer={answer} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

QuestionDetails.propTypes = {
  dataQuestion: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string
};
export default QuestionDetails;
