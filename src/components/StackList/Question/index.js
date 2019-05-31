import React from 'react';
import './styles.scss';

class Question extends React.Component {
  render() {
    const { dataQuestion } = this.props;    
    return (
      <React.Fragment>
      {dataQuestion.map(item => {
        return (
          <li className="question__item" key={item.id}>
            <h2 className="question__title" >{item.question}</h2>
            <h3 className="question__chips" >{item.tags}</h3>
            <h4 className="question__author" >{item.author}</h4>
            <p className="question__date" >{item.date}</p>
            <img 
            className="question__image" 
            alt="user" 
            src="https://via.placeholder.com/50"/>
          </li>
        )
      })}
      </React.Fragment>
    );
  }
}

export default Question;