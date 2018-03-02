import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from './action-creators'
import ClientsEditor from './ClientsEditor'

const mapStateToProps = (state) => ({
  clients: state.clientsEditor.clients,
  newClient: state.clientsEditor.newClient,
  loadingClients: state.clientsEditor.loadingClients,
  clientAddingInProgress: state.clientsEditor.clientAddingInProgress
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
