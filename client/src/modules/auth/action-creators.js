import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loginRequestStarted = createAction(
  actionTypes.LOGIN_REQUEST_STARTED
)
export const loginRequestSucceeded = createAction(
  actionTypes.LOGIN_REQUEST_SUCCEEDED,
  (profile, idToken) => ({ profile, idToken })
)
export const loginRequestErrored = createAction(
  actionTypes.LOGIN_REQUEST_ERRORED,
  (error) => error
)
export const logoutRequestStarted = createAction(
  actionTypes.LOGOUT_REQUEST_STARTED
)
export const logoutRequestSucceeded = createAction(
  actionTypes.LOGOUT_REQUEST_SUCCEEDED
)
export const alreadyAuthenticated = createAction(
  actionTypes.ALREADY_AUTHENTICATED,
  (profile, idToken) => ({ profile, idToken })
)
