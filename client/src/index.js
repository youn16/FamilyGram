import React from "react";
import { render } from "react-dom";
import signIn from './sign_in';
import signUp from './sign_up';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

render() {
  return (
    <Router>
      <Switch>
        <Route path="/sign_up">
          <signUp />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}