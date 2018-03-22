import React from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

// import ProductHeader from './ProductHeaderContainer'

const styles = theme => ({
  root: {
    width: 'auto',
    margin: 'auto'
  }
})

const LoadingProductDetailsProgress = () => <LinearProgress mode="query"/>

const ProductDetails = ({ classes, product, loadingProductDetails }) =>
  <div className={classes.root}>
    {loadingProductDetails && <LoadingProductDetailsProgress loadingProductDetails={loadingProductDetails}/>}
    {product && <div>HELLO
      {/*<ProductHeader/>*/}
    </div>}
  </div>

export default withStyles(styles)(ProductDetails)
