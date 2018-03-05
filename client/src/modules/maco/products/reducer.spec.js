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

      const nextState = reducer(undefined, loadProductsStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingProducts: true
      }))
    })

    it('succeeds', () => {
      const previousState = { products: [], loadingProducts: true }
      const products = [{ name: 'Some Product' }]
      const loadProductsSucceededAction = actionCreators.loadProductsSucceeded(products)

      const nextState = reducer(previousState, loadProductsSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: products,
        loadingProducts: false
      }))
    })
  })

  describe('when adding a new product', () => {
    it('changes new product name', () => {
      const changeNewProductAction = actionCreators.changeNewProduct('name', 'Some New Product')

      const nextState = reducer(undefined, changeNewProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        newProduct: expect.objectContaining({ name: 'Some New Product' })
      }))
    })

    it('starts', () => {
      const addProductStartedAction = actionCreators.addProductStarted()

      const nextState = reducer(undefined, addProductStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        productAddingInProgress: true
      }))
    })

    it('succeeds', () => {
      const previousState = { products: [], productAddingInProgress: true }
      const product = { name: 'Some Product' }
      const addProductSucceededAction = actionCreators.addProductSucceeded(product)

      const nextState = reducer(previousState, addProductSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: [product],
        newProduct: { name: '', clientId: '', api: '', processTrain: '' },
        productAddingInProgress: false
      }))
    })
  })
})
