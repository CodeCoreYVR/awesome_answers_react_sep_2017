import React from 'react';

function QuestionList (props) {
  const {
    questions = []
  } = props;

  return (
    <div className="QuestionList">
      {
        questions.map(question => (
          <p key={question.id}>{question.title}</p>
        ))
      }
    </div>
  )
}

export default QuestionList;
