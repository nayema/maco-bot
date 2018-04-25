import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadApiStarted = createAction(
  actionTypes.LOAD_API_STARTED
)

export const loadApiSucceeded = createAction(
  actionTypes.LOAD_API_SUCCEEDED,
  (api) => ({ api })
)

export const editApi = createAction(
  actionTypes.EDIT_API
)

export const updateApiStarted = createAction(
  actionTypes.UPDATE_API_STARTED,
  (api) => (api)
)

export const updateApiSucceeded = createAction(
  actionTypes.UPDATE_API_SUCCEEDED,
  (api) => (api)
)

export const cancelEditApi = createAction(
  actionTypes.CANCEL_EDIT_API
)

export const removeApiStarted = createAction(
  actionTypes.REMOVE_API_STARTED,
  (api) => (api)
)

export const removeApiSucceeded = createAction(
  actionTypes.REMOVE_API_SUCCEEDED
)
