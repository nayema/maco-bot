import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as productDetails from '../../modules/product-details'
import ProductHeader from './ProductHeader'

const mapStateToProps = (state) => ({
  product: state.pages.productDetails.product,
  productUpdatingInProgress: state.pages.productDetails.productUpdatingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editProduct: productDetails.actionCreators.editProduct,
  updateProductStarted: productDetails.actionCreators.updateProductStarted,
  cancelEditProduct: productDetails.actionCreators.cancelEditProduct,
  removeProductStarted: (id) => productDetails.actionCreators.removeProductStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductHeader)
