import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as auth from './auth'
import * as maco from './maco/clients/index'

export default combineReducers({
  routing: routerReducer,
  auth: auth.reducer,
  maco: maco.reducer
})
