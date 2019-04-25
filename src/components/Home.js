import React, { Component } from 'react';
import { connect } from "react-redux";

import ListPost from "./Posts/ListPost";
import Login from "./Auth/Login";

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      isAuthenticated ? <ListPost /> : <Login /> 
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
