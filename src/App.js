import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <main>
        <Router>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

          <Switch>
            <Route path="/about" component={ About } />
            <Route exact path="/users" component={ Users } />
            <Route
              exact path="/users/:id"
              render={ (props) => (
                <Users
                  { ...props }
                  greetingMessage="Good Morning"
                  id={ props.match.params.id }
                /> )}
            />
            <Route exact path="/" component={ Home } />
          </Switch>

        </Router>
      </main>
    );
  }
}

export default App;
