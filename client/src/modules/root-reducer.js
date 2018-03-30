import * as routing from './routing'
import * as auth from './auth'
import { combineReducers } from 'redux/index'
import * as clientDetails from './client-details'
import * as productDetails from './product-details'
import * as clientList from './client-list'

export default {
  auth: auth.reducer,
  routing: routing.reducer,
  pages: combineReducers({
    clientList: clientList.reducer,
    clientDetails: clientDetails.reducer,
    productDetails: productDetails.reducer
  })
}
