import { connect } from 'react-redux'

import ClientDetails from './ClientDetails'

const mapStateToProps = (state) => ({
  client: state.clients.clientDetails,
  loadingClientDetails: state.clients.loadingClientDetails
})

export default connect(mapStateToProps)(ClientDetails)
