import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadClientStarted = createAction(
  actionTypes.LOAD_CLIENT_STARTED
)

export const loadClientSucceeded = createAction(
  actionTypes.LOAD_CLIENT_SUCCEEDED,
  (client, products) => ({client, products})
)

export const editClient = createAction(
  actionTypes.EDIT_CLIENT
)

export const updateClientStarted = createAction(
  actionTypes.UPDATE_CLIENT_STARTED,
  (client) => (client)
)

export const updateClientSucceeded = createAction(
  actionTypes.UPDATE_CLIENT_SUCCEEDED,
  (client) => (client)
)

export const cancelEditClient = createAction(
  actionTypes.CANCEL_EDIT_CLIENT
)

export const removeClientStarted = createAction(
  actionTypes.REMOVE_CLIENT_STARTED,
  (client) => (client)
)

export const removeClientSucceeded = createAction(
  actionTypes.REMOVE_CLIENT_SUCCEEDED,
  (client) => (client)
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
