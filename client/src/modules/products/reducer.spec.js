import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      products: [],
      productDetails: null,
      newProduct: { name: '', clientId: null },
      loadingProducts: false,
      loadingProductDetails: false,
      productAddingInProgress: false,
      productUpdatingInProgress: false
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

  describe('when loading product details', () => {
    it('starts', () => {
      const loadProductDetailsStartedAction = actionCreators.loadProductDetailsStarted()

      const nextState = reducer(undefined, loadProductDetailsStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingProductDetails: true
      }))
    })

    it('succeeds', () => {
      const previousState = { productDetails: null, loadingProductDetails: true }
      const product = { name: 'Some Product', clientId: 999 }
      const loadProductDetailsSucceededAction = actionCreators.loadProductDetailsSucceeded(product)

      const nextState = reducer(previousState, loadProductDetailsSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        productDetails: product,
        loadingProductDetails: false
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
        newProduct: { name: '', clientId: null },
        productAddingInProgress: false
      }))
    })
  })

  describe('when updating an existing product', () => {
    it('starts editing', () => {
      const previousState = {
        productDetails: {
          id: 999,
          name: 'Some Product',
          clientId: 777,
          isEditing: false
        }
      }
      const editProductAction = actionCreators.editProduct()

      const nextState = reducer(previousState, editProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        productDetails: {
          id: 999,
          name: 'Some Product',
          clientId: 777,
          isEditing: true
        }
      }))
    })

    it('cancels editing', () => {
      const previousState = { productDetails: { id: 999, isEditing: true } }
      const cancelEditProductAction = actionCreators.cancelEditProduct()

      const nextState = reducer(previousState, cancelEditProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        productDetails: { id: 999, isEditing: false }
      }))
    })

    it('starts updating', () => {
      const updateProductStartedAction = actionCreators.updateProductStarted('Some Edited Product')

      const nextState = reducer(undefined, updateProductStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        productUpdatingInProgress: true
      }))
    })

    it('succeeds updating', () => {
      const previousState = {
        productUpdatingInProgress: true
      }
      const updateProductSucceededAction = actionCreators.updateProductSucceeded()

      const nextState = reducer(previousState, updateProductSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        productUpdatingInProgress: false
      }))
    })
  })

  describe('when removing a product', () => {
    it('succeeds', () => {
      const previousState = { products: [{ id: 999 }] }
      const product = { id: 999 }
      const removeProductSuceededAction = actionCreators.removeProductSucceeded(product)

      const nextState = reducer(previousState, removeProductSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: []
      }))
    })
  })
})
