import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import * as repository from './repository'
import * as routing from '../routing'

function * getDetails (action) {
  yield put(actionCreators.loadProductStarted())
  const product = yield call(repository.getDetails, action.payload)
  yield put(actionCreators.loadProductSucceeded(product))
}

function * updateProduct (action) {
  yield call(repository.update, action.payload)
  yield put(actionCreators.updateProductSucceeded(action.payload))
}

function * removeProduct (action) {
  yield call(repository.remove, action.payload)
  yield put(actionCreators.removeProductSucceeded())
  yield put(routing.actionCreators.goToClientDetails())
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

function * sagas () {
  yield all([
    fork(watchGoToProductDetails),
    fork(watchUpdate),
    fork(watchRemove)
  ])
}

export default sagas
