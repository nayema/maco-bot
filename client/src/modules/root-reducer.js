import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as clientsEditor from './maco/index'

export default combineReducers({
  routing: routerReducer,
  clientsEditor: clientsEditor.reducer
})
