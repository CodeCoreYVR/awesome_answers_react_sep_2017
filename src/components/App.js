import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// P A G E S
import QuestionsIndexPage from './QuestionsIndexPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <h3>Awesome Answers</h3>
            <Link to="/">Home</Link>
            <Link to="/questions">Questions</Link>
          </nav>

          <Route path="/questions" component={QuestionsIndexPage} />
        </div>
      </Router>
    );
  }
}

export default App;
