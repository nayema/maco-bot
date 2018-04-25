import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  product: null,
  apiList: [],
  loadingProduct: false,
  productUpdatingInProgress: false,
  newSelectApi: { id: '' },
  apiAddingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_PRODUCT_STARTED]: (state) => ({
    ...state,
    loadingProduct: true
  }),
  [actionTypes.LOAD_PRODUCT_SUCCEEDED]: (state, action) => ({
    ...state,
    product: action.payload.product,
    apiList: action.payload.apiList,
    loadingProduct: false
  }),
  [actionTypes.EDIT_PRODUCT]: (state) => ({
    ...state,
    product: { ...state.product, isEditing: true }
  }),
  [actionTypes.UPDATE_PRODUCT_STARTED]: (state) => ({
    ...state,
    productUpdatingInProgress: true
  }),
  [actionTypes.UPDATE_PRODUCT_SUCCEEDED]: (state, action) => ({
    ...state,
    product: { ...state.product, ...action.payload, isEditing: false },
    productUpdatingInProgress: false
  }),
  [actionTypes.CANCEL_EDIT_PRODUCT]: (state) => ({
    ...state,
    product: { ...state.product, isEditing: false }
  }),
  [actionTypes.REMOVE_PRODUCT_SUCCEEDED]: (state) => ({
    ...state,
    product: initialState.product
  }),
  [actionTypes.CHANGE_NEW_API]: (state, action) => ({
    ...state,
    newSelectApi: { ...state.newSelectApi, ...action.payload }
  }),
  [actionTypes.ADD_API_STARTED]: (state) => ({
    ...state,
    apiAddingInProgress: true
  }),
  [actionTypes.ADD_API_SUCCEEDED]: (state, action) => ({
    ...state,
    product: {
      ...state.product,
      apis: state.product.apis.concat(
        state.apiList.filter((api) => api.id === action.payload.id)
      )
    },
    newSelectApi: initialState.newSelectApi,
    apiAddingInProgress: false
  })
}, initialState)

export default reducer
