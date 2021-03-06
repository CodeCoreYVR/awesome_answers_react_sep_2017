import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from './AuthRoute';

// P A G E S
import QuestionsIndexPage from './QuestionsIndexPage';
import QuestionsShowPage from './QuestionsShowPage';
import QuestionsNewPage from './QuestionsNewPage';
import SignInPage from './SignInPage';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: {}
    };
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount () {
    this.signIn()
  }

  signIn () {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const payload = jwtDecode(jwt)
      this.setState({user: payload})
    }
  }

  isSignedIn () {
    return !!this.state.user.id
  }

  _renderNavBar () {
    return (
      <nav>
        <h3>Awesome Answers</h3>
        <Link to="/">Home</Link>
        <Link to="/questions/new">New Question</Link>
        <Link to="/questions">Questions</Link>
        { this.isSignedIn()
            ? <span>Hello, {this.state.user.first_name}</span>
            : <Link to="/sign_in">Sign In</Link>
        }
      </nav>
    );
  }

  render () {
    return (
      <Router>
        <div className="App">
          {this._renderNavBar()}
          <Switch>
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              path="/questions/new"
              component={QuestionsNewPage}
            />
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              path="/questions/:id"
              component={QuestionsShowPage}
            />
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              path="/questions"
              component={QuestionsIndexPage}
            />
            <Route
              path="/sign_in"
              render={props => <SignInPage {...props} onSignIn={this.signIn}/>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
