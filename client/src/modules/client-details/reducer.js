import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  client: null,
  loadingClient: false,
  clientUpdatingInProgress: false,
  products: [],
  newProduct: { name: '', clientId: null },
  productAddingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_CLIENT_STARTED]: (state) => ({
    ...state,
    loadingClient: true
  }),
  [actionTypes.LOAD_CLIENT_SUCCEEDED]: (state, action) => ({
    ...state,
    client: action.payload.client,
    products: action.payload.products,
    loadingClient: false
  }),
  [actionTypes.EDIT_CLIENT]: (state) => ({
    ...state,
    client: { ...state.client, isEditing: true }
  }),
  [actionTypes.UPDATE_CLIENT_STARTED]: (state) => ({
    ...state,
    clientUpdatingInProgress: true
  }),
  [actionTypes.UPDATE_CLIENT_SUCCEEDED]: (state, action) => ({
    ...state,
    client: { ...state.client, ...action.payload, isEditing: false },
    clientUpdatingInProgress: false
  }),
  [actionTypes.CANCEL_EDIT_CLIENT]: (state) => ({
    ...state,
    client: { ...state.client, isEditing: false }
  }),
  [actionTypes.REMOVE_CLIENT_SUCCEEDED]: (state, action) => ({
    ...state,
    client: { ...initialState.client }
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
