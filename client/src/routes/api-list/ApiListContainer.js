import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as apiList from '../../modules/api-list'
import ApiList from './ApiList'

const mapStateToProps = (state) => ({
  apiList: state.pages.apiList.apiList,
  newApi: state.pages.apiList.newApi,
  loadingApiList: state.pages.apiList.loadingApiList,
  apiAddingInProgress: state.pages.apiList.apiAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addApiStarted: apiList.actionCreators.addApiStarted,
  changeNewApi: apiList.actionCreators.changeNewApi
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApiList)
