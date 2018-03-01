import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as clientsEditor from './clients-editor'

export default combineReducers({
  routing: routerReducer,
  clientsEditor: clientsEditor.reducer
})
