import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import Title from './Title'
import Authentication from './views/auth-buttons/AuthenticationContainer'
import ClientsEditor from './views/clients-editor/ClientsEditorContainer'
import ProductsEditor from './views/products-editor/ProductsEditorContainer'

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
        <ProductsEditor/>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(App)
