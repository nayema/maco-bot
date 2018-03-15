import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  page: 'home'
}

const reducer = handleActions({
  [actionTypes.GO_TO_HOME]: () => ({
    page: 'home'
  }),
  [actionTypes.GO_TO_CLIENTS_LIST]: () => ({
    page: 'clientsList'
  })
}, initialState)

export default reducer
