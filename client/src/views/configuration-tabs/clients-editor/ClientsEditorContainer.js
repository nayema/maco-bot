import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clients from '../../../modules/clients/index'
import ClientsEditor from './ClientsEditor'

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
  newClient: state.clients.newClient,
  loadingClients: state.clients.loadingClients,
  clientAddingInProgress: state.clients.clientAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addClientStarted: clients.actionCreators.addClientStarted,
  changeNewClient: clients.actionCreators.changeNewClient,
  editClient: (id) => clients.actionCreators.editClient({ id }),
  changeEditClient: clients.actionCreators.changeEditClient,
  cancelEditClient: (id) => clients.actionCreators.cancelEditClient({ id }),
  updateClientStarted: clients.actionCreators.updateClientStarted,
  removeClientStarted: (id) => clients.actionCreators.removeClientStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientsEditor)
