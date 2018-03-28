import { combineReducers } from 'redux'

import * as clientList from '../client-list'
import * as clientDetails from '../client-details'
import * as productDetails from '../product-details'

export default combineReducers({
  clientList: clientList.reducer,
  clientDetails: clientDetails.reducer,
  productDetails: productDetails.reducer
})
