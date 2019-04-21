import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import './App.css';
import Content from './components/Layout/Content';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import store from "./store";

import setAuthHeader from "./utils/setAuthHeader";
import { logoutUser, getCurrentUser } from "./actions/authActions";

if (localStorage.getItem('jwtToken')) {
  const currentTime = Date.now() / 1000;
  const decode = jwt_decode(localStorage.getItem('jwtToken'))
  if (currentTime > decode.exp) {
    store.dispatch(logoutUser());
  } else {
    setAuthHeader(localStorage.getItem('jwtToken'))
    store.dispatch(getCurrentUser());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </Content>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App;
