import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clientDetails from '../../modules/client-details'
import ClientHeader from './ClientHeader'

const mapStateToProps = (state) => ({
  client: state.pages.clientDetails.client,
  clientUpdatingInProgress: state.pages.clientDetails.clientUpdatingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editClient: clientDetails.actionCreators.editClient,
  updateClientStarted: clientDetails.actionCreators.updateClientStarted,
  cancelEditClient: clientDetails.actionCreators.cancelEditClient,
  removeClientStarted: (id) => clientDetails.actionCreators.removeClientStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientHeader)
