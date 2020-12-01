import React from 'react';

import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nomatch from './Component/Nomatch/Nomatch';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/home">
            <Home />
          </PrivetRoute>
          <PrivetRoute exact path="/">
            <Home />
          </PrivetRoute>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
