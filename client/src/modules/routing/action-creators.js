import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const goToHome = createAction(
  actionTypes.GO_TO_HOME
)

export const goToClientsList = createAction(
  actionTypes.GO_TO_CLIENTS_LIST
)

export const goToClientDetails = createAction(
  actionTypes.GO_TO_CLIENT_DETAILS
)
