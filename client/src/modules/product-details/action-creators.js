import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadProductStarted = createAction(
  actionTypes.LOAD_PRODUCT_STARTED
)

export const loadProductSucceeded = createAction(
  actionTypes.LOAD_PRODUCT_SUCCEEDED,
  (product, apiList) => ({ product, apiList })
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

export const changeNewApi = createAction(
  actionTypes.CHANGE_NEW_API,
  (attribute, value) => ({ [attribute]: value })
)

export const addApiStarted = createAction(
  actionTypes.ADD_API_STARTED,
  (product, api) => ({ product, api })
)

export const addApiSucceeded = createAction(
  actionTypes.ADD_API_SUCCEEDED,
  (api) => (api)
)

export const removeApiStarted = createAction(
  actionTypes.REMOVE_API_STARTED,
  (api) => (api)
)

export const removeApiSucceeded = createAction(
  actionTypes.REMOVE_API_SUCCEEDED
)
