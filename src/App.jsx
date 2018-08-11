import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import LazyAbout from './About';
import LazySettings from './Settings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink exact={true} activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} to="/settings">
                Settings
              </NavLink>
            </li>
          </ul>
          <Route exact path="/" render={Home} />
          <Route path="/about" component={LazyAbout} />
          <Route path="/settings" component={LazySettings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
