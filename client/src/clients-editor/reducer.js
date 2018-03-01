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
    loadingClients: false,
    clients: action.payload
  })
}, initialState)

export default reducer
