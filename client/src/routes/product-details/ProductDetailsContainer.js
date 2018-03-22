import { connect } from 'react-redux'

import ProductDetails from './ProductDetails'

const mapStateToProps = (state) => ({
  product: state.products.productDetails,
  loadingProductDetails: state.products.loadingProductDetails
})

export default connect(mapStateToProps)(ProductDetails)
