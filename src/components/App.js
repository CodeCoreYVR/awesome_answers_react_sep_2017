import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// P A G E S
import QuestionsIndexPage from './QuestionsIndexPage';
import QuestionsShowPage from './QuestionsShowPage';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <nav>
            <h3>Awesome Answers</h3>
            <Link to="/">Home</Link>
            <Link to="/questions">Questions</Link>
          </nav>

          <Switch>
            <Route path="/questions/:id" component={QuestionsShowPage} />
            <Route path="/questions" component={QuestionsIndexPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
