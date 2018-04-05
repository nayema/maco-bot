import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import { productRepository, apiRepository } from '../maco'
import * as routing from '../routing'

function * getDetails (action) {
  yield put(actionCreators.loadProductStarted())
  const product = yield call(productRepository.getDetails, action.payload)
  const apis = yield call(apiRepository.getAll)
  yield put(actionCreators.loadProductSucceeded(product, apis))
}

function * updateProduct (action) {
  yield call(productRepository.update, action.payload)
  yield put(actionCreators.updateProductSucceeded(action.payload))
}

function * removeProduct (action) {
  yield call(productRepository.remove, action.payload)
  yield put(actionCreators.removeProductSucceeded())
  yield put(routing.actionCreators.goToHome())
}

function * addApi (action) {
  const api = yield call(productRepository.addApi, ...action.payload)
  yield put(actionCreators.addApiSucceeded(api))
}

function * watchGoToProductDetails () {
  yield takeEvery(routing.actionTypes.GO_TO_PRODUCT_DETAILS, getDetails)
}

function * watchUpdate () {
  yield takeEvery(actionTypes.UPDATE_PRODUCT_STARTED, updateProduct)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_PRODUCT_STARTED, removeProduct)
}

function * watchAddApi () {
  yield takeEvery(actionTypes.ADD_API_STARTED, addApi)
}

function * sagas () {
  yield all([
    fork(watchGoToProductDetails),
    fork(watchUpdate),
    fork(watchRemove),
    fork(watchAddApi)
  ])
}

export default sagas
