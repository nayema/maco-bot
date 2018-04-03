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

export const goToProductDetails = createAction(
  actionTypes.GO_TO_PRODUCT_DETAILS
)

export const goToEquipmentList = createAction(
  actionTypes.GO_TO_EQUIPMENT_LIST
)
