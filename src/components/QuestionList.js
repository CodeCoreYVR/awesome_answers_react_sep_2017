import React from 'react';
import QuestionSummary from './QuestionSummary';

function QuestionList (props) {
  const {
    questions = []
  } = props;

  return (
    <div className="QuestionList">
      {
        questions.map(question => (
          // You can pass all properties of an object as props to a component
          // using the spread operator (i.e. `...`). Below, all question properties
          // will be passed to QuestionSummary as props meaning that question id
          // will be an id prop; the title, a title prop; etc.
          <QuestionSummary key={question.id} {...question} />
        ))
      }
    </div>
  )
}

export default QuestionList;
