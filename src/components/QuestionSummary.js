import React from 'react';
import {Link} from 'react-router-dom';

function QuestionSummary (props) {
  const {id, title, creation_date, user} = props;

  console.log(props)

  return (
    <div className="QuestionSummary">
      <Link to={`/question/${id}`}>{title}</Link> • {creation_date}
    </div>
  );
}

export default QuestionSummary;
