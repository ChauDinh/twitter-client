import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const styles = {
  load: {
    textAlign: 'center',
    marginTop: '25px',
    width: '100%',
  },
  loadIcon: {
    color: '#8A2BE2'
  }
}

const LoadingPosts = ({ classes }) => (
  <div className={classes.load}>
    <CircularProgress className={classes.loadIcon}/>
  </div>
)

export default withStyles(styles)(LoadingPosts);