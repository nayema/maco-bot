import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual({
      apiList: [],
      newApi: {
        name: '',
        adi: ''
      },
      loadingApiList: false,
      apiAddingInProgress: false,
      apiUpdatingInProgress: false
    })
  })

  describe('when loading api', () => {
    it('starts', () => {
      const loadApiStartedAction = actionCreators.loadApiStarted()

      const nextState = reducer(undefined, loadApiStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingApiList: true
      }))
    })

    it('succeeds', () => {
      const previousState = { apiList: [], loadingApiList: true }
      const apiList = [{ name: 'Some API' }]
      const loadApiSucceededAction = actionCreators.loadApiSucceeded(apiList)

      const nextState = reducer(previousState, loadApiSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiList: apiList,
        loadingApiList: false
      }))
    })
  })

  describe('when adding a new api', () => {
    it('changes new api name', () => {
      const changeNewApiAction = actionCreators.changeNewApi('name', 'Some New Api')

      const nextState = reducer(undefined, changeNewApiAction)

      expect(nextState).toEqual(expect.objectContaining({
        newApi: expect.objectContaining({ name: 'Some New Api' })
      }))
    })

    it('starts', () => {
      const addApiStartedAction = actionCreators.addApiStarted()

      const nextState = reducer(undefined, addApiStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiAddingInProgress: true
      }))
    })

    it('succeeds', () => {
      const previousState = { apiList: [], apiAddingInProgress: true }
      const api = {
        name: 'Some API',
        adi: 9.9
      }
      const addApiSucceededAction = actionCreators.addApiSucceeded(api)

      const nextState = reducer(previousState, addApiSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiList: [api],
        newApi: {
          name: '',
          adi: ''
        },
        apiAddingInProgress: false
      }))
    })
  })

  describe('when updating an existing api', () => {
    it('starts editing', () => {
      const previousState = {
        apiList: [{
          id: 999,
          name: 'Some API'
        }]
      }
      const api = { id: 999 }
      const editApiAction = actionCreators.editApi(api)

      const nextState = reducer(previousState, editApiAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiList: [{
          id: 999,
          name: 'Some API',
          isEditing: true,
          edit: {
            id: 999,
            name: 'Some API'
          }
        }]
      }))
    })

    it('changes editing', () => {
      const previousState = {
        apiList: [{
          id: 999,
          name: 'Some API',
          edit: { unrelatedAttr: 'Unrelated', name: 'Some API' }
        }]
      }
      const api = { id: 999, name: 'Some Edited Api' }
      const changeEditApiAction = actionCreators.changeEditApi(api)

      const nextState = reducer(previousState, changeEditApiAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiList: [{
          id: 999,
          name: 'Some API',
          edit: {
            id: 999,
            unrelatedAttr: 'Unrelated',
            name: 'Some Edited Api'
          }
        }]
      }))
    })

    it('cancels editing', () => {
      const previousState = { apiList: [{ id: 999, isEditing: true }] }
      const api = { id: 999 }
      const cancelEditApiAction = actionCreators.cancelEditApi(api)

      const nextState = reducer(previousState, cancelEditApiAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiList: [{ id: 999, isEditing: false }]
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
        apiList: [{ id: 999, name: 'Some API' }],
        apiUpdatingInProgress: true
      }
      const api = { id: 999, name: 'Some  Updated Api' }
      const updateApiSucceededAction = actionCreators.updateApiSucceeded(api)

      const nextState = reducer(previousState, updateApiSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiList: [{ id: 999, name: 'Some  Updated Api' }],
        apiUpdatingInProgress: false
      }))
    })
  })

  describe('when removing an api', () => {
    it('succeeds', () => {
      const previousState = { apiList: [{ id: 999 }] }
      const removeApiSuceededAction = actionCreators.removeApiSucceeded()

      const nextState = reducer(previousState, removeApiSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiList: []
      }))
    })
  })
})
