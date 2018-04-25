import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      api: null,
      loadingApi: false,
      apiUpdatingInProgress: false
    }))
  })

  describe('when loading api details', () => {
    it('starts', () => {
      const loadApiStartedAction = actionCreators.loadApiStarted()

      const nextState = reducer(undefined, loadApiStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingApi: true
      }))
    })

    it('succeeds', () => {
      const previousState = { api: '', loadingApi: true }
      const api = { name: 'Some Api', clientId: 1 }
      const loadApiSucceededAction = actionCreators.loadApiSucceeded(api)

      const nextState = reducer(previousState, loadApiSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        api: api,
        loadingApi: false
      }))
    })
  })

  describe('when updating an existing api', () => {
    it('starts editing', () => {
      const previousState = {
        api: { id: 1, name: 'Some Api', isEditing: false }
      }
      const editApiAction = actionCreators.editApi()

      const nextState = reducer(previousState, editApiAction)

      expect(nextState).toEqual(expect.objectContaining({
        api: { id: 1, name: 'Some Api', isEditing: true }
      }))
    })

    it('cancels editing', () => {
      const previousState = { api: { id: 1, isEditing: true } }
      const cancelEditApiAction = actionCreators.cancelEditApi()

      const nextState = reducer(previousState, cancelEditApiAction)

      expect(nextState).toEqual(expect.objectContaining({
        api: { id: 1, isEditing: false }
      }))
    })

    it('starts updating', () => {
      const updateApiStartedAction = actionCreators.updateApiStarted('Some Edited Api')

      const nextState = reducer(undefined, updateApiStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiUpdatingInProgress: true
      }))
    })

    it('succeeds updating', () => {
      const previousState = {
        apiUpdatingInProgress: true
      }
      const updateApiSucceededAction = actionCreators.updateApiSucceeded()

      const nextState = reducer(previousState, updateApiSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiUpdatingInProgress: false
      }))
    })
  })

  describe('when removing a api', () => {
    it('succeeds', () => {
      const previousState = { api: { id: 1 } }
      const removeApiSuceededAction = actionCreators.removeApiSucceeded()

      const nextState = reducer(previousState, removeApiSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        api: null
      }))
    })
  })
})
