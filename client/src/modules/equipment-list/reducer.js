import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  equipmentList: [],
  newEquipment: {
    name: '',
    assetId: null,
    productContactSurfaceArea: null,
    minimumBatchSize: null
  },
  loadingEquipment: false,
  equipmentAddingInProgress: false,
  equipmentUpdatingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_EQUIPMENT_STARTED]: (state) => ({
    ...state,
    loadingEquipment: true
  }),
  [actionTypes.LOAD_EQUIPMENT_SUCCEEDED]: (state, action) => ({
    ...state,
    equipmentList: action.payload,
    loadingEquipment: false
  }),
  [actionTypes.CHANGE_NEW_EQUIPMENT]: (state, action) => ({
    ...state,
    newEquipment: { ...state.newEquipment, ...action.payload }
  }),
  [actionTypes.ADD_EQUIPMENT_STARTED]: (state) => ({
    ...state,
    equipmentAddingInProgress: true
  }),
  [actionTypes.ADD_EQUIPMENT_SUCCEEDED]: (state, action) => ({
    ...state,
    equipmentList: state.equipmentList.concat([action.payload]),
    newEquipment: initialState.newEquipment,
    equipmentAddingInProgress: false
  }),
  [actionTypes.EDIT_EQUIPMENT]: (state, action) => ({
    ...state,
    equipmentList: state.equipmentList.map(oldEquipment =>
      oldEquipment.id === action.payload.id ? {
        ...oldEquipment,
        isEditing: true,
        edit: oldEquipment
      } : oldEquipment
    )
  }),
  [actionTypes.CANCEL_EDIT_EQUIPMENT]: (state, action) => ({
    ...state,
    equipmentList: state.equipmentList.map(oldEquipment =>
      oldEquipment.id === action.payload.id ? { ...oldEquipment, isEditing: false } : oldEquipment
    )
  }),
  [actionTypes.UPDATE_EQUIPMENT_STARTED]: (state) => ({
    ...state,
    equipmentUpdatingInProgress: true
  }),
  [actionTypes.UPDATE_EQUIPMENT_SUCCEEDED]: (state, action) => ({
    ...state,
    equipmentList: state.equipmentList.map(oldEquipment =>
      oldEquipment.id === action.payload.id ? action.payload : oldEquipment
    ),
    equipmentUpdatingInProgress: false
  }),
  [actionTypes.REMOVE_EQUIPMENT_SUCCEEDED]: (state, action) => ({
    ...state,
    equipmentList: state.equipmentList.filter((equipment) => equipment.id !== action.payload.id)
  })
}, initialState)

export default reducer
