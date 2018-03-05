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
  }),
  [actionTypes.EDIT_PRODUCT]: (state, action) => ({
    ...state,
    products: state.products.map(oldProduct =>
      oldProduct.id === action.payload.id ? { ...oldProduct, isEditing: true, edit: oldProduct } : oldProduct
    )
  }),
  [actionTypes.CHANGE_EDIT_PRODUCT]: (state, action) => ({
    ...state,
    products: state.products.map(oldProduct => oldProduct.id === action.payload.id ? {
      ...oldProduct,
      edit: { ...oldProduct.edit, ...action.payload }
    } : oldProduct)
  }),
  [actionTypes.UPDATE_PRODUCT_SUCCEEDED]: (state, action) => ({
    ...state,
    products: state.products.map(oldProduct =>
      oldProduct.id === action.payload.id ? action.payload : oldProduct
    )
  }),
  [actionTypes.CANCEL_EDIT_PRODUCT]: (state, action) => ({
    ...state,
    products: state.products.map(oldProduct =>
      oldProduct.id === action.payload.id ? { ...oldProduct, isEditing: false } : oldProduct
    )
  })
}, initialState)

export default reducer
