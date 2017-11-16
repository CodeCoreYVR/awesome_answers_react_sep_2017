import React, {Component} from 'react';
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

      </div>
    )
  }
}

export default QuestionsIndexPage;
