import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  apiList: [],
  newApi: {
    name: '',
    adi: ''
  },
  api: null,
  loadingApiList: false,
  loadingApi: false,
  apiAddingInProgress: false,
  apiUpdatingInProgress: false
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
  [actionTypes.LOAD_API_STARTED]: (state) => ({
    ...state,
    loadingApi: true
  }),
  [actionTypes.LOAD_API_SUCCEEDED]: (state, action) => ({
    ...state,
    api: action.payload,
    loadingApi: false
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
  }),
  [actionTypes.EDIT_API]: (state, action) => ({
    ...state,
    apiList: state.apiList.map(oldApi =>
      oldApi.id === action.payload.id ? {
        ...oldApi,
        isEditing: true,
        edit: oldApi
      } : oldApi
    )
  }),
  [actionTypes.CHANGE_EDIT_API]: (state, action) => ({
    ...state,
    apiList: state.apiList.map(oldApi =>
      oldApi.id === action.payload.id ? {
        ...oldApi,
        edit: { ...oldApi.edit, ...action.payload }
      } : oldApi
    )
  }),
  [actionTypes.CANCEL_EDIT_API]: (state, action) => ({
    ...state,
    apiList: state.apiList.map(oldApi =>
      oldApi.id === action.payload.id ? { ...oldApi, isEditing: false } : oldApi
    )
  }),
  [actionTypes.UPDATE_API_STARTED]: (state) => ({
    ...state,
    apiUpdatingInProgress: true
  }),
  [actionTypes.UPDATE_API_SUCCEEDED]: (state, action) => ({
    ...state,
    apiList: state.apiList.map(oldApi =>
      oldApi.id === action.payload.id ? action.payload : oldApi
    ),
    apiUpdatingInProgress: false
  }),
  [actionTypes.REMOVE_API_SUCCEEDED]: (state) => ({
    ...state,
    apiList: initialState.apiList
  })
}, initialState)

export default reducer
