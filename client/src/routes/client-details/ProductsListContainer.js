import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clientDetails from '../../modules/client-details'
import ProductsList from './ProductsList'

const mapStateToProps = (state) => ({
  clientId: state.pages.clientDetails.client.id,
  products: state.pages.clientDetails.client.products,
  newProduct: state.pages.clientDetails.newProduct,
  productAddingInProgress: state.pages.clientDetails.productAddingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductStarted: clientDetails.actionCreators.addProductStarted,
  changeNewProduct: clientDetails.actionCreators.changeNewProduct
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
