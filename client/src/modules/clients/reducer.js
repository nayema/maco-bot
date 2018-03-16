import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  clients: [],
  clientDetails: null,
  newClient: { name: '' },
  loadingClients: false,
  loadingClientDetails: false,
  clientAddingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_CLIENTS_STARTED]: (state) => ({
    ...state,
    loadingClients: true
  }),
  [actionTypes.LOAD_CLIENTS_SUCCEEDED]: (state, action) => ({
    ...state,
    loadingClients: false,
    clients: action.payload
  }),
  [actionTypes.LOAD_CLIENT_DETAILS_STARTED]: (state) => ({
    ...state,
    loadingClientDetails: true
  }),
  [actionTypes.LOAD_CLIENT_DETAILS_SUCCEEDED]: (state, action) => ({
    ...state,
    loadingClientDetails: false,
    clientDetails: action.payload
  }),
  [actionTypes.CHANGE_NEW_CLIENT]: (state, action) => ({
    ...state,
    newClient: { ...state.newClient, ...action.payload }
  }),
  [actionTypes.ADD_CLIENT_STARTED]: (state) => ({
    ...state,
    clientAddingInProgress: true
  }),
  [actionTypes.ADD_CLIENT_SUCCEEDED]: (state, action) => ({
    ...state,
    clients: state.clients.concat([action.payload]),
    newClient: initialState.newClient,
    clientAddingInProgress: false
  }),
  [actionTypes.EDIT_CLIENT]: (state, action) => ({
    ...state,
    clients: state.clients.map(oldClient =>
      oldClient.id === action.payload.id ? { ...oldClient, isEditing: true, edit: oldClient } : oldClient
    )
  }),
  [actionTypes.CHANGE_EDIT_CLIENT]: (state, action) => ({
    ...state,
    clients: state.clients.map(oldClient => oldClient.id === action.payload.id ? {
      ...oldClient,
      edit: { ...oldClient.edit, ...action.payload }
    } : oldClient)
  }),
  [actionTypes.UPDATE_CLIENT_SUCCEEDED]: (state, action) => ({
    ...state,
    clients: state.clients.map(oldClient =>
      oldClient.id === action.payload.id ? action.payload : oldClient
    )
  }),
  [actionTypes.CANCEL_EDIT_CLIENT]: (state, action) => ({
    ...state,
    clients: state.clients.map(oldClient =>
      oldClient.id === action.payload.id ? { ...oldClient, isEditing: false } : oldClient
    )
  }),
  [actionTypes.REMOVE_CLIENT_SUCCEEDED]: (state, action) => ({
    ...state,
    clients: state.clients.filter((client) => client.id !== action.payload.id)
  })
}, initialState)

export default reducer
