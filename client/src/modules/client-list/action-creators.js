import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadClientsStarted = createAction(
  actionTypes.LOAD_CLIENTS_STARTED
)

export const loadClientsSucceeded = createAction(
  actionTypes.LOAD_CLIENTS_SUCCEEDED,
  (clients) => (clients)
)

export const changeNewClient = createAction(
  actionTypes.CHANGE_NEW_CLIENT,
  (attribute, value) => ({ [attribute]: value })
)

export const addClientStarted = createAction(
  actionTypes.ADD_CLIENT_STARTED,
  (client) => (client)
)

export const addClientSucceeded = createAction(
  actionTypes.ADD_CLIENT_SUCCEEDED,
  (client) => (client)
)
