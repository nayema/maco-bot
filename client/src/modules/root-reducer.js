import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as auth from './auth'
import * as clients from './clients'
import * as products from './products'

export default combineReducers({
  routing: routerReducer,
  auth: auth.reducer,
  clients: clients.reducer,
  products: products.reducer
})
