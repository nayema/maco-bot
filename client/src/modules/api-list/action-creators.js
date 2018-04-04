import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadApiListStarted = createAction(
  actionTypes.LOAD_API_LIST_STARTED
)

export const loadApiListSucceeded = createAction(
  actionTypes.LOAD_API_LIST_SUCCEEDED,
  (apiList) => (apiList)
)

export const changeNewApi = createAction(
  actionTypes.CHANGE_NEW_API,
  (attribute, value) => ({ [attribute]: value })
)

export const addApiStarted = createAction(
  actionTypes.ADD_API_STARTED,
  (api) => (api)
)

export const addApiSucceeded = createAction(
  actionTypes.ADD_API_SUCCEEDED,
  (api) => (api)
)

export const editApi = createAction(
  actionTypes.EDIT_API,
  (transaction) => (transaction)
)

export const changeEditApi = createAction(
  actionTypes.CHANGE_EDIT_API,
  (api) => (api)
)

export const cancelEditApi = createAction(
  actionTypes.CANCEL_EDIT_API,
  (api) => (api)
)

export const updateApiStarted = createAction(
  actionTypes.UPDATE_API_STARTED,
  (api) => (api)
)

export const updateApiSucceeded = createAction(
  actionTypes.UPDATE_API_SUCCEEDED,
  (api) => (api)
)

export const removeApiStarted = createAction(
  actionTypes.REMOVE_API_STARTED,
  (api) => (api)
)

export const removeApiSucceeded = createAction(
  actionTypes.REMOVE_API_SUCCEEDED
)
