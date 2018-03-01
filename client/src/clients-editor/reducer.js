import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  clients: [],
  newClient: { name: '' },
  loadingClients: false,
  clientAddingInProgress: false
}

const reducer = handleActions({

}, initialState)

export default reducer
