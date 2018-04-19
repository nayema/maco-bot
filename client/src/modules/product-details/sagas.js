import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import { productRepository, apiRepository } from '../maco'
import * as routing from '../routing'

function * getDetails (action) {
  yield put(actionCreators.loadProductStarted())
  const product = yield call(productRepository.getDetails, action.payload)
  const apiList = yield call(apiRepository.getAll)
  yield put(actionCreators.loadProductSucceeded(product, apiList))
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
  const { id } = yield call(productRepository.addApi, action.payload.product, action.payload.api)
  yield put(actionCreators.addApiSucceeded({ 'id': id }))
}

function * removeApi (action) {
  yield call(productRepository.removeApi, action.payload.product, action.payload.api)
  yield put(actionCreators.removeApiSucceeded(action.payload.api))
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

function * watchRemoveApi () {
  yield takeEvery(actionTypes.REMOVE_API_STARTED, removeApi)
}

function * sagas () {
  yield all([
    fork(watchGoToProductDetails),
    fork(watchUpdate),
    fork(watchRemove),
    fork(watchAddApi),
    fork(watchRemoveApi)
  ])
}

export default sagas
