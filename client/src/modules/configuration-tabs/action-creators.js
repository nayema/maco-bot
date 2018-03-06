import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const changeConfigTab = createAction(
  actionTypes.CHANGE_CONFIG_TAB,
  (changeToTabIndex) => (changeToTabIndex)
)
