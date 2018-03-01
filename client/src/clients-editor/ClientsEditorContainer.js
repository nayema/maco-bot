import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from './action-creators'
import ClientsEditor from './ClientsEditor'

function mapStateToProps (state) {
  return {
    clients: state.clients.clients,
    newClient: state.clients.newClient,
    loadingClients: state.clients.loadingClients,
    clientAddingInProgress: state.clients.clientAddingInProgress
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addClientStarted: actionCreators.addClientStarted,
    changeNewClient: actionCreators.changeNewClient,
    editClient: (id) => actionCreators.editClient({ id }),
    changeEditClient: actionCreators.changeEditClient,
    cancelEditClient: actionCreators.cancelEditClient({ id }),
    updateClientStarted: actionCreators.updateClientStarted,
    removeClientStarted: (id) => actionCreators.removeClientStarted({ id })
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsEditor)
