import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'

import ClientEditor from './ClientEditorContainer'
import ProductsList from './ProductsListContainer'

const LoadingClientProgress = () => <LinearProgress mode="query"/>

const ClientDetails = ({ client, loadingClient }) =>
  <div>
    <Typography variant="title" gutterBottom>Client Details</Typography>
    {loadingClient && <LoadingClientProgress loadingClient={loadingClient}/>}
    {client && <div>
      <ClientEditor/>
      <ProductsList/>
    </div>}
  </div>

const mapStateToProps = (state) => ({
  client: state.pages.clientDetails.client,
  loadingClient: state.pages.clientDetails.loadingClient
})

export default connect(mapStateToProps)(ClientDetails)
