import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles/index'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1,
    fontFamily: 'Indie Flower'
  },
  button: {
    margin: theme.spacing.unit
  }
})

const AuthenticationButton = ({ classes, isAuthenticated, loginRequestStarted, logoutRequestStarted }) =>
  <div>
    {
      isAuthenticated ?
        <Button onClick={logoutRequestStarted} className={classes.button}>Logout</Button> :
        <Button onClick={loginRequestStarted} className={classes.button}>Login</Button>
    }
  </div>

const AuthenticationBar = ({ classes, isAuthenticated, loginRequestStarted, logoutRequestStarted }) =>
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" gutterBottom className={classes.title}>
          Maco Bot
        </Typography>
        <AuthenticationButton
          classes={classes}
          isAuthenticated={isAuthenticated}
          loginRequestStarted={loginRequestStarted}
          logoutRequestStarted={logoutRequestStarted}
        />
      </Toolbar>
    </AppBar>
  </div>

export default withStyles(styles)(AuthenticationBar)
