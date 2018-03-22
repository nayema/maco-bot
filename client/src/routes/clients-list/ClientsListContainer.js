import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clients from '../../modules/clients'
import ClientsList from './ClientsList'

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
  newClient: state.clients.newClient,
  loadingClients: state.clients.loadingClients,
  clientAddingInProgress: state.clients.clientAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addClientStarted: clients.actionCreators.addClientStarted,
  changeNewClient: clients.actionCreators.changeNewClient,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList)
