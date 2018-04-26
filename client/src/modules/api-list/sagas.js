import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import { apiRepository } from '../maco'
import * as auth from '../auth'
import * as routing from '../routing'

function * getAll () { // TODO: Encapsulate authentication state
  if (localStorage.getItem('idToken')) {
    yield put(actionCreators.loadApiListStarted())
    const apiList = yield call(apiRepository.getAll)
    yield put(actionCreators.loadApiListSucceeded(apiList))
  }
}

function * add (action) {
  const api = yield call(apiRepository.add, action.payload)
  yield put(actionCreators.addApiSucceeded(api))
}

function * watchLoginRequestSucceeded () {
  yield takeEvery(auth.actionTypes.LOGIN_REQUEST_SUCCEEDED, getAll)
}

function * watchGoToApiList () {
  yield takeEvery(routing.actionTypes.GO_TO_APIS_LIST, getAll)
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_API_STARTED, add)
}

function * sagas () {
  yield all([
    fork(watchLoginRequestSucceeded),
    fork(watchGoToApiList),
    fork(watchAdd)
  ])
}

export default sagas
