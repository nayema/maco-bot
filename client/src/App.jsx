import React from 'react'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import GitHubCorner from './GitHubCorner'
import AuthenticationBar from './routes/auth-bar/AuthenticationBarContainer'
import ConfigurationTabs from './routes/configuration-tabs/ConfigurationTabsContainer'
import ClientsEditor from './routes/clients-editor/ClientsEditorContainer'
import ProductsEditor from './routes/products-editor/ProductsEditorContainer'

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

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

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
        <Link to="/products">Products</Link>
      </Grid>
    </Grid>
    <Grid container spacing={16}>
      <Grid item xs>
        <ConnectedSwitch>
          <Route exact path="/" component={ConfigurationTabs}/>
          <Route path="/clients" component={ClientsEditor}/>
          <Route path="/products" component={ProductsEditor}/>
        </ConnectedSwitch>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(App)
