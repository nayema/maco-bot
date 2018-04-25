import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as apiDetails from '../../modules/api-details'
import ApiEditor from './ApiEditor'

const mapStateToProps = (state) => ({
  api: state.pages.apiDetails.api,
  apiUpdatingInProgress: state.pages.apiDetails.apiUpdatingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editApi: apiDetails.actionCreators.editApi,
  updateApiStarted: apiDetails.actionCreators.updateApiStarted,
  cancelEditApi: apiDetails.actionCreators.cancelEditApi,
  removeApiStarted: (id) => apiDetails.actionCreators.removeApiStarted({id})
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApiEditor)
