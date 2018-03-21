import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clients from '../../modules/clients'
import ClientDetails from './ClientDetails'

const mapStateToProps = (state) => ({
  client: state.clients.clientDetails,
  loadingClientDetails: state.clients.loadingClientDetails,
  clientUpdatingInProgress: state.clients.clientUpdatingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editClient: clients.actionCreators.editClient,
  cancelEditClient: clients.actionCreators.cancelEditClient,
  updateClientStarted: clients.actionCreators.updateClientStarted,
  removeClientStarted: (id) => clients.actionCreators.removeClientStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails)
