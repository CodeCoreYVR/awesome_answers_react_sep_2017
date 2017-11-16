import React from 'react';
import {Link} from 'react-router-dom';

function QuestionSummary (props) {
  const {id, title, creation_date, user} = props;

  return (
    <div className="QuestionSummary">
      <Link to={`/questions/${id}`}>{title}</Link> • {creation_date}
    </div>
  );
}

export default QuestionSummary;
