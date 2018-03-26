import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as products from '../../modules/products'
import ProductHeader from './ProductHeader'

const mapStateToProps = (state) => ({
  product: state.products.productDetails,
  clientName: state.products.productDetails.client.name,
  loadingProductDetails: state.products.loadingProductDetails,
  productUpdatingInProgress: state.products.productUpdatingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editProduct: products.actionCreators.editProduct,
  cancelEditProduct: products.actionCreators.cancelEditProduct,
  updateProductStarted: products.actionCreators.updateProductStarted,
  removeProductStarted: (id) => products.actionCreators.removeProductStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductHeader)
