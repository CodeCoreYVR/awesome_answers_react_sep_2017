import React, {Component} from 'react';
import QuestionForm from './QuestionForm';
import {Question} from '../lib/requests';

class QuestionsNewPage extends Component {
  constructor (props) {
    super(props);
    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion (question) {
    console.log('Creating Question~!');
    Question
      .create(question)
      .then(question => this.props.history.push(`/questions/${question.id}`))
      // the `history` prop like the `match` prop is added to any component
      // rendered by the <Route ... /> component from React Router. It's object
      // that allows us to manipulate browser history. We can use to send a
      // user to a different URL.
  }

  render () {
    return (
      <div className="QuestionsNewPage">
        <h2>New Question</h2>
        <QuestionForm onSubmit={this.createQuestion}/>
      </div>
    )
  }
}

export default QuestionsNewPage;
