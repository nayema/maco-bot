import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clients from '../../modules/clients'
import ClientDetails from './ClientDetails'

const mapStateToProps = (state) => ({
  client: state.clients.clientDetails,
  loadingClientDetails: state.clients.loadingClientDetails
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeEditClient: clients.actionCreators.changeEditClient,
  editClient: (id) => clients.actionCreators.editClient({ id }),
  cancelEditClient: (id) => clients.actionCreators.cancelEditClient({ id }),
  updateClientStarted: clients.actionCreators.updateClientStarted,
  removeClientStarted: (id) => clients.actionCreators.removeClientStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails)
