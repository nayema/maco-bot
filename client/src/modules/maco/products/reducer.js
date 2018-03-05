import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  products: [],
  newProduct: { name: '', clientId: '', api: '', processTrain: '' },
  loadingProducts: false,
  productAddingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_PRODUCTS_STARTED]: (state) => ({
    ...state,
    loadingProducts: true
  }),
  [actionTypes.LOAD_PRODUCTS_SUCCEEDED]: (state, action) => ({
    ...state,
    products: action.payload,
    loadingProducts: false
  }),
  [actionTypes.CHANGE_NEW_PRODUCT]: (state, action) => ({
    ...state,
    newProduct: { ...state.newProduct, ...action.payload }
  }),
  [actionTypes.ADD_PRODUCT_STARTED]: (state) => ({
    ...state,
    productAddingInProgress: true
  }),
  [actionTypes.ADD_PRODUCT_SUCCEEDED]: (state, action) => ({
    ...state,
    products: state.products.concat([action.payload]),
    newProduct: initialState.newProduct,
    productAddingInProgress: false
  })
}, initialState)

export default reducer
