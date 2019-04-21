import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser } from "../../actions/authActions";

const styles = {
  textField: {
    width: '100%',
    marginBottom: '10px'
  },
  btnBlock: {
    textAlign: 'center'
  }
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/")
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Paper style={{ padding: 15 }}>
        <form onSubmit={this.onSubmit}>
          <TextField 
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            label="Email"
            type="email"
            className={classes.textField}
            helperText={errors.email ? errors.email : ''}
            error={errors.email ? true : false}
          />
          <TextField 
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            label="Password"
            type="password"
            className={classes.textField}
            helperText={errors.password ? errors.password : ''}
            error={errors.password ? true : false}
          />

          <div className={classes.btnBlock}>
            <Button 
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(withStyles(styles)(Login)));