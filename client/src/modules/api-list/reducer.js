import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  apiList: [],
  newApi: { name: '', adi: '' },
  loadingApiList: false,
  apiAddingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_API_LIST_STARTED]: (state) => ({
    ...state,
    loadingApiList: true
  }),
  [actionTypes.LOAD_API_LIST_SUCCEEDED]: (state, action) => ({
    ...state,
    apiList: action.payload,
    loadingApiList: false
  }),
  [actionTypes.CHANGE_NEW_API]: (state, action) => ({
    ...state,
    newApi: { ...state.newApi, ...action.payload }
  }),
  [actionTypes.ADD_API_STARTED]: (state) => ({
    ...state,
    apiAddingInProgress: true
  }),
  [actionTypes.ADD_API_SUCCEEDED]: (state, action) => ({
    ...state,
    apiList: state.apiList.concat([action.payload]),
    newApi: initialState.newApi,
    apiAddingInProgress: false
  })
}, initialState)

export default reducer
