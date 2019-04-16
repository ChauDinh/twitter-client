import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Content from './components/Layout/Content';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Content>
      </Router>
    );
  }
}

export default App;
