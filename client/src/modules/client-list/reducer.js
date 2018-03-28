import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  clients: [],
  newClient: { name: '' },
  loadingClients: false,
  clientAddingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_CLIENTS_STARTED]: (state) => ({
    ...state,
    loadingClients: true
  }),
  [actionTypes.LOAD_CLIENTS_SUCCEEDED]: (state, action) => ({
    ...state,
    clients: action.payload,
    loadingClients: false
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
  })
}, initialState)

export default reducer
