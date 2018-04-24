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
      const apiList = [{ name: 'Some API' }]
      const loadApiSucceededAction = actionCreators.loadApiSucceeded(api, apiList)

      const nextState = reducer(previousState, loadApiSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        api: api,
        loadingApi: false
      }))
    })
  })
})
