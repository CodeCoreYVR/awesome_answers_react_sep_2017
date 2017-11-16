import React, {Component} from 'react';
import QuestionList from './QuestionList';
import {Question} from '../lib/requests';

class QuestionsIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount () {
    Question
      .getAll()
      .then(data => { this.setState({questions: data.questions}); })
  }

  render () {
    return (
      <div className="QuestionsIndexPage">
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}

export default QuestionsIndexPage;
