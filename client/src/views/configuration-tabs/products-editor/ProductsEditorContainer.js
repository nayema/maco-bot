import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as products from '../../../modules/products/index'
import ProductsEditor from './ProductsEditor'

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
  products: state.products.products,
  newProduct: state.products.newProduct,
  loadingProducts: state.products.loadingProducts,
  productAddingInProgress: state.products.productAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductStarted: products.actionCreators.addProductStarted,
  changeNewProduct: products.actionCreators.changeNewProduct,
  editProduct: (id) => products.actionCreators.editProduct({ id }),
  changeEditProduct: products.actionCreators.changeEditProduct,
  cancelEditProduct: (id) => products.actionCreators.cancelEditProduct({ id }),
  updateProductStarted: products.actionCreators.updateProductStarted,
  removeProductStarted: (id) => products.actionCreators.removeProductStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsEditor)
