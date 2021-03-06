import React from 'react'
import Link from 'redux-first-router-link'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import GitHubCorner from './GitHubCorner'
import AuthenticationBar from './routes/auth-bar/AuthenticationBarContainer'
import PageContainer from './PageContainer'

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: 16,
    textAlign: 'center'
  },
  link: {
    flexGrow: 1,
    marginTop: 30
  }
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <GitHubCorner/>
    <AuthenticationBar/>
    <Grid container spacing={16}>
      <Grid item xs>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item xs>
        <Link to="/clients">Clients</Link>
      </Grid>
      <Grid item xs>
        <Link to="/equipment">Equipment</Link>
      </Grid>
      <Grid item xs>
        <Link to="/apis">APIs</Link>
      </Grid>
    </Grid>
    <Grid container spacing={16}>
      <Grid item xs>
        <PageContainer/>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(App)
