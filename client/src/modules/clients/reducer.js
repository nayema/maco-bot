import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  clients: [],
  clientDetails: null,
  newClient: { name: '' },
  loadingClients: false,
  loadingClientDetails: false,
  clientAddingInProgress: false,
  clientUpdatingInProgress: false
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
  [actionTypes.EDIT_CLIENT]: (state) => ({
    ...state,
    clientDetails: { ...state.clientDetails, isEditing: true }
  }),
  [actionTypes.UPDATE_CLIENT_STARTED]: (state) => ({
    ...state,
    clientUpdatingInProgress: true
  }),
  [actionTypes.UPDATE_CLIENT_SUCCEEDED]: (state) => ({
    ...state,
    clientDetails: { ...state.clientDetails, isEditing: false },
    clientUpdatingInProgress: false
  }),
  [actionTypes.CANCEL_EDIT_CLIENT]: (state) => ({
    ...state,
    clientDetails: { ...state.clientDetails, isEditing: false }
  }),
  [actionTypes.REMOVE_CLIENT_SUCCEEDED]: (state, action) => ({
    ...state,
    clients: state.clients.filter((client) => client.id !== action.payload.id)
  })
}, initialState)

export default reducer
