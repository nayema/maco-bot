import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

import ClientHeader from './ClientHeaderContainer'
import ProductsList from './ProductsListContainer'

const styles = theme => ({
  root: {
    width: 'auto',
    margin: 'auto'
  }
})

const LoadingClientProgress = () => <LinearProgress mode="query"/>

const ClientDetails = ({ classes, client, loadingClient }) =>
  <div className={classes.root}>
    {loadingClient && <LoadingClientProgress loadingClient={loadingClient}/>}
    {client && <div>
      <ClientHeader/>
      <ProductsList/>
    </div>}
  </div>

export default withStyles(styles)(ClientDetails)
