import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { registerUser } from "../../actions/authActions";

const styles = {
  textField: {
    width: '100%',
    marginBottom: '10px'
  },
  btnBlock: {
    textAlign: 'center'
  }
}

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      username: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(userData, this.props.history)
    alert("You've registered successfully!")
    this.setState({
      email: "",
      password: "",
      password2: "",
      username: ""
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={{ padding: 10, maxWidth: '450px' }}>
        <form onSubmit={this.onSubmit}>
          <TextField 
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            label="Email"
            type="email"
            className={classes.textField}
          />
          <TextField
            name="username" 
            value={this.state.username}
            onChange={this.onChange}
            label="User name"
            type="text"
            className={classes.textField}
          />
          <TextField 
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            label="Password"
            type="password"
            className={classes.textField}
          />
          <TextField 
            name="password2"
            value={this.state.password2}
            onChange={this.onChange}
            label="Repeat password"
            type="password"
            className={classes.textField}
          />
          <div className={classes.btnBlock}>
            <Button 
              variant="contained" 
              color="primary"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)));
