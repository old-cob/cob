import React, { Component } from 'react';
import logo from './logo.svg'; //TODO take out later
import './app.css'; //TODO take out later
import Home from './pages/home';
import About from './pages/about';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Hello World!</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
