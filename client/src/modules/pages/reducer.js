import { combineReducers } from 'redux'

import * as clientList from '../client-list'
import * as clientDetails from '../client-details'

export default combineReducers({
  clientList: clientList.reducer,
  clientDetails: clientDetails.reducer
})
