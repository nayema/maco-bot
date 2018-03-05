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
  })
}, initialState)

export default reducer
