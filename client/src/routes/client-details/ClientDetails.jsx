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

const LoadingClientDetailsProgress = () => <LinearProgress mode="query"/>

const ClientDetails = ({ classes, client, loadingClientDetails }) =>
  <div className={classes.root}>
    {loadingClientDetails && <LoadingClientDetailsProgress loadingClientDetails={loadingClientDetails}/>}
    {client && <div>
      <ClientHeader/>
      <ProductsList/>
    </div>}
  </div>

export default withStyles(styles)(ClientDetails)
