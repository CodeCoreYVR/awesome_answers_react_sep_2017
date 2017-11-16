import React, {Component} from 'react';
import QuestionDetails from './QuestionDetails';
import {Question} from '../lib/requests';

class QuestionsShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      question: {}
    };
  }

  componentDidMount () {
    const {params} = this.props.match;

    Question
      .get(params.id)
      .then(question => this.setState({question}))
  }

  render () {
    return (
      <div className="QuestionsShowPage">
        <QuestionDetails {...this.state.question} />
      </div>
    );
  }
}

export default QuestionsShowPage;
