import { combineReducers } from 'redux'
import * as routing from './routing'
import * as auth from './auth'
import * as clientList from './client-list'
import * as clientDetails from './client-details'
import * as productDetails from './product-details'
import * as equipmentList from './equipment-list'
import * as apisList from './api-list'

export default {
  auth: auth.reducer,
  routing: routing.reducer,
  pages: combineReducers({
    clientList: clientList.reducer,
    clientDetails: clientDetails.reducer,
    productDetails: productDetails.reducer,
    equipmentList: equipmentList.reducer,
    apiList: apisList.reducer
  })
}
