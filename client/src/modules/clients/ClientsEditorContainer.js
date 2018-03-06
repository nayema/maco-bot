import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from './action-creators'
import ClientsEditor from './ClientsEditor'

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
  newClient: state.clients.newClient,
  loadingClients: state.clients.loadingClients,
  clientAddingInProgress: state.clients.clientAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addClientStarted: actionCreators.addClientStarted,
  changeNewClient: actionCreators.changeNewClient,
  editClient: (id) => actionCreators.editClient({ id }),
  changeEditClient: actionCreators.changeEditClient,
  cancelEditClient: (id) => actionCreators.cancelEditClient({ id }),
  updateClientStarted: actionCreators.updateClientStarted,
  removeClientStarted: (id) => actionCreators.removeClientStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientsEditor)
