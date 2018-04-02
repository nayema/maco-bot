import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadEquipmentStarted = createAction(
  actionTypes.LOAD_EQUIPMENT_STARTED
)

export const loadEquipmentSucceeded = createAction(
  actionTypes.LOAD_EQUIPMENT_SUCCEEDED,
  (equipmentList) => (equipmentList)
)

export const changeNewEquipment = createAction(
  actionTypes.CHANGE_NEW_EQUIPMENT,
  (attribute, value) => ({ [attribute]: value })
)

export const addEquipmentStarted = createAction(
  actionTypes.ADD_EQUIPMENT_STARTED,
  (equipment) => (equipment)
)

export const addEquipmentSucceeded = createAction(
  actionTypes.ADD_EQUIPMENT_SUCCEEDED,
  (equipment) => (equipment)
)

export const editEquipment = createAction(
  actionTypes.EDIT_EQUIPMENT,
  (transaction) => (transaction)
)

export const updateEquipmentStarted = createAction(
  actionTypes.UPDATE_EQUIPMENT_STARTED,
  (equipment) => (equipment)
)

export const updateEquipmentSucceeded = createAction(
  actionTypes.UPDATE_EQUIPMENT_SUCCEEDED,
  (equipment) => (equipment)
)

export const cancelEditEquipment = createAction(
  actionTypes.CANCEL_EDIT_EQUIPMENT,
  (equipment) => (equipment)
)

export const removeEquipmentStarted = createAction(
  actionTypes.REMOVE_EQUIPMENT_STARTED,
  (equipment) => (equipment)
)

export const removeEquipmentSucceeded = createAction(
  actionTypes.REMOVE_EQUIPMENT_SUCCEEDED
)
