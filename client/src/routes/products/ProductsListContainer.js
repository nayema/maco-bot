import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as products from '../../modules/products'
import ProductsList from './ProductsList'

const mapStateToProps = (state) => ({
  products: state.products.products,
  newProduct: state.products.newProduct,
  loadingProducts: state.products.loadingProducts,
  productAddingInProgress: state.products.productAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductStarted: products.actionCreators.addProductStarted,
  changeNewProduct: products.actionCreators.changeNewProduct,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
