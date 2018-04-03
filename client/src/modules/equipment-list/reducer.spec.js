import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual({
      equipmentList: [],
      newEquipment: {
        name: '',
        assetId: '',
        productContactSurfaceArea: '',
        minimumBatchSize: ''
      },
      loadingEquipmentList: false,
      equipmentAddingInProgress: false,
      equipmentUpdatingInProgress: false
    })
  })

  describe('when loading equipment', () => {
    it('starts', () => {
      const loadEquipmentStartedAction = actionCreators.loadEquipmentStarted()

      const nextState = reducer(undefined, loadEquipmentStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingEquipmentList: true
      }))
    })

    it('succeeds', () => {
      const previousState = { equipmentList: [], loadingEquipmentList: true }
      const equipmentList = [{ name: 'Some Equipment' }]
      const loadEquipmentSucceededAction = actionCreators.loadEquipmentSucceeded(equipmentList)

      const nextState = reducer(previousState, loadEquipmentSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentList: equipmentList,
        loadingEquipmentList: false
      }))
    })
  })

  describe('when adding a new equipment', () => {
    it('changes new equipment name', () => {
      const changeNewEquipmentAction = actionCreators.changeNewEquipment('name', 'Some New Equipment')

      const nextState = reducer(undefined, changeNewEquipmentAction)

      expect(nextState).toEqual(expect.objectContaining({
        newEquipment: expect.objectContaining({ name: 'Some New Equipment' })
      }))
    })

    it('starts', () => {
      const addEquipmentStartedAction = actionCreators.addEquipmentStarted()

      const nextState = reducer(undefined, addEquipmentStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentAddingInProgress: true
      }))
    })

    it('succeeds', () => {
      const previousState = { equipmentList: [], equipmentAddingInProgress: true }
      const equipment = {
        name: 'Some Equipment',
        assetId: 1111,
        productContactSurfaceArea: 11.11,
        minimumBatchSize: 1.11
      }
      const addEquipmentSucceededAction = actionCreators.addEquipmentSucceeded(equipment)

      const nextState = reducer(previousState, addEquipmentSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentList: [equipment],
        newEquipment: {
          name: '',
          assetId: '',
          productContactSurfaceArea: '',
          minimumBatchSize: ''
        },
        equipmentAddingInProgress: false
      }))
    })
  })

  describe('when updating an existing equipment', () => {
    it('starts editing', () => {
      const previousState = {
        equipmentList: [{
          id: 999,
          name: 'Some Equipment'
        }]
      }
      const equipment = { id: 999 }
      const editEquipmentAction = actionCreators.editEquipment(equipment)

      const nextState = reducer(previousState, editEquipmentAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentList: [{
          id: 999,
          name: 'Some Equipment',
          isEditing: true,
          edit: {
            id: 999,
            name: 'Some Equipment'
          }
        }]
      }))
    })

    it('changes editing', () => {
      const previousState = {
        equipmentList: [{
          id: 999,
          name: 'Some Equipment',
          edit: { unrelatedAttr: 'Unrelated', name: 'Some Equipment' }
        }]
      }
      const equipment = { id: 999, name: 'Some Edited Equipment' }
      const changeEditEquipmentAction = actionCreators.changeEditEquipment(equipment)

      const nextState = reducer(previousState, changeEditEquipmentAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentList: [{
          id: 999,
          name: 'Some Equipment',
          edit: {
            id: 999,
            unrelatedAttr: 'Unrelated',
            name: 'Some Edited Equipment'
          }
        }]
      }))
    })

    it('cancels editing', () => {
      const previousState = { equipmentList: [{ id: 999, isEditing: true }] }
      const equipment = { id: 999 }
      const cancelEditEquipmentAction = actionCreators.cancelEditEquipment(equipment)

      const nextState = reducer(previousState, cancelEditEquipmentAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentList: [{ id: 999, isEditing: false }]
      }))
    })

    it('starts updating', () => {
      const updateEquipmentStartedAction = actionCreators.updateEquipmentStarted('Some Edited Equipment')

      const nextState = reducer(undefined, updateEquipmentStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentUpdatingInProgress: true
      }))
    })

    it('succeeds updating', () => {
      const previousState = {
        equipmentList: [{ id: 999, name: 'Some Equipment' }],
        equipmentUpdatingInProgress: true
      }
      const equipment = { id: 999, name: 'Some  Updated Equipment' }
      const updateEquipmentSucceededAction = actionCreators.updateEquipmentSucceeded(equipment)

      const nextState = reducer(previousState, updateEquipmentSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentList: [{ id: 999, name: 'Some  Updated Equipment' }],
        equipmentUpdatingInProgress: false
      }))
    })
  })

  describe('when removing an equipment', () => {
    it('succeeds', () => {
      const previousState = { equipmentList: [{ id: 999 }] }
      const removeClientSuceededAction = actionCreators.removeEquipmentSucceeded()

      const nextState = reducer(previousState, removeClientSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        equipmentList: []
      }))
    })
  })
})
