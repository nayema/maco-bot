import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  api: null,
  loadingApi: false,
  apiUpdatingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_API_STARTED]: (state) => ({
    ...state,
    loadingApi: true
  }),
  [actionTypes.LOAD_API_SUCCEEDED]: (state, action) => ({
    ...state,
    api: action.payload.api,
    loadingApi: false
  })
}, initialState)

export default reducer
