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
  })
}, initialState)

export default reducer
