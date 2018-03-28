import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clients from '../../modules/client-list'
import ClientsList from './ClientsList'

const mapStateToProps = (state) => ({
  clients: state.pages.clientList.clients,
  newClient: state.pages.clientList.newClient,
  loadingClients: state.pages.clientList.loadingClients,
  clientAddingInProgress: state.pages.clientList.clientAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addClientStarted: clients.actionCreators.addClientStarted,
  changeNewClient: clients.actionCreators.changeNewClient
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList)
