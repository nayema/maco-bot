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
  }),
  [actionTypes.EDIT_API]: (state) => ({
    ...state,
    api: { ...state.api, isEditing: true }
  }),
  [actionTypes.UPDATE_API_STARTED]: (state) => ({
    ...state,
    apiUpdatingInProgress: true
  }),
  [actionTypes.UPDATE_API_SUCCEEDED]: (state, action) => ({
    ...state,
    api: { ...state.api, ...action.payload, isEditing: false },
    apiUpdatingInProgress: false
  }),
  [actionTypes.CANCEL_EDIT_API]: (state) => ({
    ...state,
    api: { ...state.api, isEditing: false }
  }),
  [actionTypes.REMOVE_API_SUCCEEDED]: (state) => ({
    ...state,
    api: initialState.api
  })
}, initialState)

export default reducer
