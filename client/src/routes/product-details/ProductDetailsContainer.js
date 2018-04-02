import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { connect } from 'react-redux'

import ProductEditor from './ProductEditorContainer'

const LoadingProductProgress = () => <LinearProgress mode="query"/>

const ProductDetails = ({ product, loadingProduct }) =>
  <div>
    {loadingProduct && <LoadingProductProgress loadingProduct={loadingProduct}/>}
    {product && <div>
      <ProductEditor/>
    </div>}
  </div>

const mapStateToProps = (state) => ({
  product: state.pages.productDetails.product,
  loadingProduct: state.pages.productDetails.loadingProduct
})

export default connect(mapStateToProps)(ProductDetails)
