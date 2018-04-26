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
