import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from './action-creators'
import ProductsEditor from './ProductsEditor'

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
  products: state.products.products,
  newProduct: state.products.newProduct,
  loadingProducts: state.products.loadingProducts,
  productAddingInProgress: state.products.productAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductStarted: actionCreators.addProductStarted,
  changeNewProduct: actionCreators.changeNewProduct,
  editProduct: (id) => actionCreators.editProduct({ id }),
  changeEditProduct: actionCreators.changeEditProduct,
  cancelEditProduct: (id) => actionCreators.cancelEditProduct({ id }),
  updateProductStarted: actionCreators.updateProductStarted,
  removeProductStarted: (id) => actionCreators.removeProductStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsEditor)
