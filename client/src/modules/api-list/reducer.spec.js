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
      apiAddingInProgress: false
    })
  })

  describe('when loading apis', () => {
    it('starts', () => {
      const loadApiListStartedAction = actionCreators.loadApiListStarted()

      const nextState = reducer(undefined, loadApiListStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingApiList: true
      }))
    })

    it('succeeds', () => {
      const previousState = { apiList: [], loadingApiList: true }
      const apiList = [{ name: 'Some API' }]
      const loadApiListSucceededAction = actionCreators.loadApiListSucceeded(apiList)

      const nextState = reducer(previousState, loadApiListSucceededAction)

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
})
