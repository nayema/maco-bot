import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as apiList from '../../modules/api-list'
import ApiList from './ApiList'

const mapStateToProps = (state) => ({
  apiList: state.pages.apiList.apiList,
  newApi: state.pages.apiList.newApi,
  loadingApiList: state.pages.apiList.loadingApiList,
  apiAddingInProgress: state.pages.apiList.apiAddingInProgress,
  apiUpdatingInProgress: state.pages.apiList.apiUpdatingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeNewApi: apiList.actionCreators.changeNewApi,
  addApiStarted: apiList.actionCreators.addApiStarted,
  editApi: (id) => apiList.actionCreators.editApi({ id }),
  changeEditApi: apiList.actionCreators.changeEditApi,
  cancelEditApi: (id) => apiList.actionCreators.cancelEditApi({ id }),
  updateApiStarted: apiList.actionCreators.updateApiStarted,
  removeApiStarted: (id) => apiList.actionCreators.removeApiStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApiList)
