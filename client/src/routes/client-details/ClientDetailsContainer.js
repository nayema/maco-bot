import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { connect } from 'react-redux'

import ClientEditor from './ClientEditorContainer'
import ProductsList from './ProductsListContainer'

const LoadingClientProgress = () => <LinearProgress mode="query"/>

const ClientDetails = ({ client, loadingClient }) =>
  <div>
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
