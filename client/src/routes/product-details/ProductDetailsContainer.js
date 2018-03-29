import { connect } from 'react-redux'

import ProductDetails from './ProductDetails'

const mapStateToProps = (state) => ({
  product: state.pages.productDetails.product,
  loadingProduct: state.pages.productDetails.loadingProduct
})

export default connect(mapStateToProps)(ProductDetails)
