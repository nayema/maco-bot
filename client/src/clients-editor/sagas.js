import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import * as repository from './repository'

function * getAll () {
  yield put(actionCreators.loadClientsStarted())
  const clients = yield call(repository.getAll)
  yield put(actionCreators.loadClientsSucceeded(clients))
}

function * add (action) {
  const client = yield call(repository.add, action.payload)
  yield put(actionCreators.addClientSucceeded(client))
}

function * update (action) {
  yield call(repository.update, action.payload)
  yield put(actionCreators.updateClientSucceeded(action.payload))
}

function * remove (action) {
  yield call(repository.remove, action.payload)
  yield put(actionCreators.removeClientSucceeded(action.payload))
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_CLIENT_STARTED, add)
}

function * watchUpdate () {
  yield takeEvery(actionTypes.UPDATE_CLIENT_STARTED, update)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_CLIENT_STARTED, remove)
}

function * sagas () {
  yield all([
    fork(getAll),
    fork(watchAdd),
    fork(watchUpdate),
    fork(watchRemove)
  ])
}

export default sagas
