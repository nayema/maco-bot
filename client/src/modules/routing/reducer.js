import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  page: 'homePage'
}

const reducer = handleActions({
  [actionTypes.GO_TO_HOME]: () => ({
    page: 'homePage'
  })
}, initialState)

export default reducer
