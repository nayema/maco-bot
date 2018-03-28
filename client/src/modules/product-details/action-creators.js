import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadProductStarted = createAction(
  actionTypes.LOAD_PRODUCT_STARTED
)

export const loadProductSucceeded = createAction(
  actionTypes.LOAD_PRODUCT_SUCCEEDED,
  (product) => (product)
)

export const editProduct = createAction(
  actionTypes.EDIT_PRODUCT
)

export const updateProductStarted = createAction(
  actionTypes.UPDATE_PRODUCT_STARTED,
  (product) => (product)
)

export const updateProductSucceeded = createAction(
  actionTypes.UPDATE_PRODUCT_SUCCEEDED,
  (product) => (product)
)

export const cancelEditProduct = createAction(
  actionTypes.CANCEL_EDIT_PRODUCT
)

export const removeProductStarted = createAction(
  actionTypes.REMOVE_PRODUCT_STARTED,
  (product) => (product)
)

export const removeProductSucceeded = createAction(
  actionTypes.REMOVE_PRODUCT_SUCCEEDED
)
