import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      clients: [],
      newClient: {name: ''},
      loadingClients: false,
      clientAddingInProgress: false
    }))
  })
})
