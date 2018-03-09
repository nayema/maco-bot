import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles/index'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  button: {
    margin: theme.spacing.unit
  }
})

const Authentication = ({ classes, isAuthenticated, loginRequestStarted, logoutRequestStarted }) =>
  <div className={classes.root}>
    {
      isAuthenticated ?
        <Button onClick={logoutRequestStarted} className={classes.button}>Logout</Button> :
        <Button onClick={loginRequestStarted} className={classes.button}>Login</Button>
    }
  </div>

export default withStyles(styles)(Authentication)
