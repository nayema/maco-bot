import { connect } from 'react-redux'

import ClientDetails from './ClientDetails'

const mapStateToProps = (state) => ({
  client: state.pages.clientDetails.client,
  loadingClient: state.pages.clientDetails.loadingClient
})

export default connect(mapStateToProps)(ClientDetails)
