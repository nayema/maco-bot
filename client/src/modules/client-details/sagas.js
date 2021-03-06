import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import { clientRepository, productRepository } from '../maco'
import * as routing from '../routing'

function * getDetails (action) {
  yield put(actionCreators.loadClientStarted())
  const client = yield call(clientRepository.getDetails, action.payload)
  yield put(actionCreators.loadClientSucceeded(client))
}

function * updateClient (action) {
  yield call(clientRepository.update, action.payload)
  yield put(actionCreators.updateClientSucceeded(action.payload))
}

function * removeClient (action) {
  yield call(clientRepository.remove, action.payload)
  yield put(actionCreators.removeClientSucceeded())
  yield put(routing.actionCreators.goToClientsList())
}

function * addProduct (action) {
  const product = yield call(productRepository.add, action.payload)
  yield put(actionCreators.addProductSucceeded(product))
}

function * watchGoToClientDetails () {
  yield takeEvery(routing.actionTypes.GO_TO_CLIENT_DETAILS, getDetails)
}

function * watchUpdateClient () {
  yield takeEvery(actionTypes.UPDATE_CLIENT_STARTED, updateClient)
}

function * watchRemoveClient () {
  yield takeEvery(actionTypes.REMOVE_CLIENT_STARTED, removeClient)
}

function * watchAddProduct () {
  yield takeEvery(actionTypes.ADD_PRODUCT_STARTED, addProduct)
}

function * sagas () {
  yield all([
    fork(watchGoToClientDetails),
    fork(watchUpdateClient),
    fork(watchRemoveClient),
    fork(watchAddProduct)
  ])
}

export default sagas
