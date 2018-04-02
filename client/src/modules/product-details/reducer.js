import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  product: null,
  loadingProduct: false,
  productUpdatingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_PRODUCT_STARTED]: (state) => ({
    ...state,
    loadingProduct: true
  }),
  [actionTypes.LOAD_PRODUCT_SUCCEEDED]: (state, action) => ({
    ...state,
    product: action.payload,
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
  })
}, initialState)

export default reducer
