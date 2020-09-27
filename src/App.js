import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Calender from './like_seal';
import LogIn from './log_in';
import SignUp from './Sign_up';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <NavigationBar />
                <Switch>
                    <Route path="/calender">
                        <Calender />
                    </Route>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <LogIn />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
