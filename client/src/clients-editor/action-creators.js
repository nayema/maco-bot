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

export const editClient = createAction(
  actionTypes.EDIT_CLIENT,
  (client) => (client)
)

export const changeEditClient = createAction(
  actionTypes.CHANGE_EDIT_CLIENT,
  (id, attribute, value) => ({ id, [attribute]: value })
)

export const cancelEditClient = createAction(
  actionTypes.CANCEL_EDIT_CLIENT,
  (client) => (client)
)

export const updateClientStarted = createAction(
  actionTypes.UPDATE_CLIENT_STARTED,
  (client) => (client)
)

export const updateClientSucceeded = createAction(
  actionTypes.UPDATE_CLIENT_SUCCEEDED,
  (client) => (client)
)

export const removeClientStarted = createAction(
  actionTypes.REMOVE_CLIENT_STARTED,
  (client) => (client)
)

export const removeClientSucceeded = createAction(
  actionTypes.REMOVE_CLIENT_SUCCEEDED,
  (client) => (client)
)
