import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import Title from './Title'
import Authentication from './modules/auth/AuthenticationContainer'
import ClientsEditor from './modules/maco/clients/ClientsEditorContainer'

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: 16,
    textAlign: 'center'
  }
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <Title/>
    <Authentication/>
    <Grid container spacing={16}>
      <Grid item xs>
        <ClientsEditor/>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(App)
