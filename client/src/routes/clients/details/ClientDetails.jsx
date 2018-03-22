import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

import ClientHeader from './ClientHeaderContainer'

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
    {client && <ClientHeader/>}
  </div>

export default withStyles(styles)(ClientDetails)
