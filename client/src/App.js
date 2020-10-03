import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import bar_header from './components/views/bar_header';
import sign_in from './components/views/sign_in';
import sign_up from './components/views/sign_up';
import cal_week from './components/views/cal_week';

class App extends Component {
  render() {
    return (

    <Router>
        <bar_header />
        <Switch>
          <Route exact path="/sign_up" component={sign_up} />
          <Route exact path="/cal_week" component={cal_week} />
          <Route exact path="/" component={sign_in} />
        </Switch>
      </Router>
    );
  }
}

export default App;
