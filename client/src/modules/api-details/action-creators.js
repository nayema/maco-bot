import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadApiStarted = createAction(
  actionTypes.LOAD_API_STARTED
)

export const loadApiSucceeded = createAction(
  actionTypes.LOAD_API_SUCCEEDED,
  (api) => ({ api })
)
