import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import * as repository from './repository'
import * as auth from '../auth/index'

function * getAll () { // TODO: Encapsulate authentication state
  if (localStorage.getItem('idToken')) {
    yield put(actionCreators.loadProductsStarted())
    const tasks = yield call(repository.getAll)
    yield put(actionCreators.loadProductsSucceeded(tasks))
  }
}

function * add (action) {
  const product = yield call(repository.add, action.payload)
  yield put(actionCreators.addProductSucceeded(product))
}

function * update (action) {
  yield call(repository.update, action.payload)
  yield put(actionCreators.updateProductSucceeded(action.payload))
}

function * remove (action) {
  yield call(repository.remove, action.payload)
  yield put(actionCreators.removeProductSucceeded(action.payload))
}

function * watchLoginRequestSucceeded () {
  yield takeEvery(auth.actionTypes.LOGIN_REQUEST_SUCCEEDED, getAll)
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_PRODUCT_STARTED, add)
}

function * watchUpdate () {
  yield takeEvery(actionTypes.UPDATE_PRODUCT_STARTED, update)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_PRODUCT_STARTED, remove)
}

function * sagas () {
  yield all([
    fork(getAll),
    fork(watchLoginRequestSucceeded),
    fork(watchAdd),
    fork(watchUpdate),
    fork(watchRemove)
  ])
}

export default sagas
