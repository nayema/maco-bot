import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'

import ApiHeader from './ApiHeaderContainer'

const LoadingProductProgress = () => <LinearProgress mode="query"/>

const ApiDetails = ({ api, loadingApi }) =>
  <div>
    <Typography variant="title" gutterBottom>API Details</Typography>
    {loadingApi && <LoadingProductProgress loadingProduct={loadingApi}/>}
    {api && <div>
      <ApiHeader/>
    </div>}
  </div>

const mapStateToProps = (state) => ({
  api: state.pages.apiDetails.api,
  loadingApi: state.pages.apiDetails.loadingApi
})

export default connect(mapStateToProps)(ApiDetails)
