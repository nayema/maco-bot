import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  products: [],
  productDetails: null,
  newProduct: { name: '', clientId: null },
  loadingProducts: false,
  loadingProductDetails: false,
  productAddingInProgress: false,
  productUpdatingInProgress: false
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
  [actionTypes.LOAD_PRODUCT_DETAILS_STARTED]: (state) => ({
    ...state,
    loadingProductDetails: true
  }),
  [actionTypes.LOAD_PRODUCT_DETAILS_SUCCEEDED]: (state, action) => ({
    ...state,
    loadingProductDetails: false,
    productDetails: action.payload
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
  }),
  [actionTypes.EDIT_PRODUCT]: (state, action) => ({
    ...state,
    products: state.products.map(oldProduct =>
      oldProduct.id === action.payload.id ? { ...oldProduct, isEditing: true, edit: oldProduct } : oldProduct
    )
  }),
  [actionTypes.EDIT_PRODUCT]: (state) => ({
    ...state,
    productDetails: { ...state.productDetails, isEditing: true }
  }),
  [actionTypes.UPDATE_PRODUCT_STARTED]: (state) => ({
    ...state,
    productUpdatingInProgress: true
  }),
  [actionTypes.UPDATE_PRODUCT_SUCCEEDED]: (state) => ({
    ...state,
    productDetails: { ...state.productDetails, isEditing: false },
    productUpdatingInProgress: false
  }),
  [actionTypes.CANCEL_EDIT_PRODUCT]: (state) => ({
    ...state,
    productDetails: { ...state.productDetails, isEditing: false }
  }),
  [actionTypes.REMOVE_PRODUCT_SUCCEEDED]: (state, action) => ({
    ...state,
    products: state.products.filter((product) => product.id !== action.payload.id)
  })
}, initialState)

export default reducer
