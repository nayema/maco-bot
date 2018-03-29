import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

import ProductHeader from './ProductHeaderContainer'

const styles = theme => ({
  root: {
    width: 'auto',
    margin: 'auto'
  }
})

const LoadingProductProgress = () => <LinearProgress mode="query"/>

const ProductDetails = ({ classes, product, loadingProduct }) =>
  <div className={classes.root}>
    {loadingProduct && <LoadingProductProgress loadingProduct={loadingProduct}/>}
    {product && <div>
      <ProductHeader/>
    </div>}
  </div>

export default withStyles(styles)(ProductDetails)
