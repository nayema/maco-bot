import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      products: [],
      newProduct: { name: '', clientId: '', api: '', processTrain: '' },
      loadingProducts: false,
      productAddingInProgress: false
    }))
  })

  describe('when loading products', () => {
    it('starts', () => {
      const loadProductsStartedAction = actionCreators.loadProductsStarted()

      const nextState = (undefined, loadProductsStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingProducts: true
      }))
    })
  })
})
