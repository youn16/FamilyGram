import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Bar_header from './components/views/bar_header';
import Sign_in from './components/views/sign_in';
import Sign_up from './components/views/sign_up';
import Cal_week from './components/views/cal_week';

class App extends Component {
  render() {
    return (
      <Router>
        <Bar_header />
        <Switch>
          <Route path="/sign_up">
            <Sign_up />
          </Route>
          <Route path="/cal_week">
            <Cal_week />
          </Route>
          <Route path="/sign_in">
            <Sign_in />
          </Route>
          <Route path="/">
            <Sign_in />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
