import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadProductsStarted = createAction(
  actionTypes.LOAD_PRODUCTS_STARTED
)

export const loadProductsSucceeded = createAction(
  actionTypes.LOAD_PRODUCTS_SUCCEEDED,
  (products) => (products)
)

export const loadProductDetailsStarted = createAction(
  actionTypes.LOAD_PRODUCT_DETAILS_STARTED
)

export const loadProductDetailsSucceeded = createAction(
  actionTypes.LOAD_PRODUCT_DETAILS_SUCCEEDED,
  (product) => (product)
)

export const changeNewProduct = createAction(
  actionTypes.CHANGE_NEW_PRODUCT,
  (attribute, value) => ({ [attribute]: value })
)

export const addProductStarted = createAction(
  actionTypes.ADD_PRODUCT_STARTED,
  (product) => (product)
)

export const addProductSucceeded = createAction(
  actionTypes.ADD_PRODUCT_SUCCEEDED,
  (product) => (product)
)

export const editProduct = createAction(
  actionTypes.EDIT_PRODUCT
)

export const cancelEditProduct = createAction(
  actionTypes.CANCEL_EDIT_PRODUCT
)

export const updateProductStarted = createAction(
  actionTypes.UPDATE_PRODUCT_STARTED,
  (product) => (product)
)

export const updateProductSucceeded = createAction(
  actionTypes.UPDATE_PRODUCT_SUCCEEDED
)

export const removeProductStarted = createAction(
  actionTypes.REMOVE_PRODUCT_STARTED,
  (product) => (product)
)

export const removeProductSucceeded = createAction(
  actionTypes.REMOVE_PRODUCT_SUCCEEDED,
  (product) => (product)
)
