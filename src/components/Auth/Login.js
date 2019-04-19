import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
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

    console.log(userData);
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

export default withStyles(styles)(Login);