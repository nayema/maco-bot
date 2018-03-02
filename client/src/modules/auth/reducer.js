import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  profile: null,
  idToken: null,
  error: null
}

const reducer = handleActions({
  [actionTypes.LOGIN_REQUEST_STARTED]: (state) => ({
    ...state,
    isAuthenticated: false,
    isAuthenticating: true
  }),
  [actionTypes.LOGIN_REQUEST_SUCCEEDED]: (state, action) => ({
    ...state,
    isAuthenticated: true,
    isAuthenticating: false,
    profile: action.payload.profile,
    idToken: action.payload.idToken
  }),
  [actionTypes.LOGIN_REQUEST_ERRORED]: (state, action) => ({
    ...state,
    isAuthenticated: false,
    isAuthenticating: false,
    error: action.payload
  }),
  [actionTypes.LOGOUT_REQUEST_SUCCEEDED]: (state) => ({
    ...state,
    isAuthenticated: false,
    profile: null,
    idToken: null
  }),
  [actionTypes.ALREADY_AUTHENTICATED]: (state, action) => ({
    ...state,
    isAuthenticated: true,
    profile: action.payload.profile,
    idToken: action.payload.idToken
  })
}, initialState)

export default reducer
