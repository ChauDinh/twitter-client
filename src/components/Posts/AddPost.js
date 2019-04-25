import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: {
    padding: 8
  },
  textField: {
    width: '100%'
  },
  button: {
    width: '100%',
    marginTop: '15px',
    marginBottom: '10px',
    backgroundColor: '#20a8ef',
    color: '#eaf1f5',
    fontWeight: 'bolder',
    '&:hover': {
      color: '#333'
    }
  }
}

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    const postInput = {
      text: this.state.text
    }
    console.log(postInput);
    this.setState({ text: '' });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <TextField 
          multiline
          rowsMax="10"
          label="what's new?"
          className={classes.textField} 
          value={this.state.text}
          onChange={this.onChange}
        />
        <Button 
          variant="outlined" 
          onClick={this.onSubmit} 
          className={classes.button}
        >
          Tweet
        </Button>
      </Paper>
    )
  }
}

export default withStyles(styles)(AddPost);
