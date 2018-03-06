import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  activeTabIndex: 1
}

const reducer = handleActions({
  [actionTypes.CHANGE_CONFIG_TAB]: (state, action) => ({
    ...state,
    activeTabIndex: action.payload
  })
}, initialState)

export default reducer
