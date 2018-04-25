import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as productDetails from '../../modules/product-details'
import ApiSelectList from './ApiSelectList'

const mapStateToProps = (state) => ({
  product: state.pages.productDetails.product,
  apiList: state.pages.productDetails.apiList,
  newSelectApi: state.pages.productDetails.newSelectApi,
  apiAddingInProgress: state.pages.productDetails.apiAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addApiStarted: productDetails.actionCreators.addApiStarted,
  changeNewApi: productDetails.actionCreators.changeNewApi
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApiSelectList)
