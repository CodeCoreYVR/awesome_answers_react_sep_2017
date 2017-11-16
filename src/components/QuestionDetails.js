import React from 'react';

function QuestionDetails (props) {
  const {
    title, body, user = {}, created_at, answers = []
  } = props;

  console.log(props)

  return (
    <div className="QuestionDetails">
      <h2>{title}</h2>
      <p>{body}</p>
      <p><em>By {user.first_name} {user.last_name}</em></p>
      <p><strong>Created at:</strong> {created_at}</p>
      <h3>Answers</h3>
      <ul className="AnswersList">
        {
          answers.map(answer => <li key={answer.id}>{answer.body}</li>)
        }
      </ul>
    </div>
  );
}

export default QuestionDetails;
