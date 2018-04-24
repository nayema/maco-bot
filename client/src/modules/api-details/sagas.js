import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import { apiRepository } from '../maco'
import * as routing from '../routing'

function * getDetails (action) {
  yield put(actionCreators.loadApiStarted())
  const api = yield call(apiRepository.getDetails, action.payload)
  yield put(actionCreators.loadApiSucceeded(api))
}

function * watchGoToApiDetails () {
  yield takeEvery(routing.actionTypes.GO_TO_API_DETAILS, getDetails)
}

function * sagas () {
  yield all([
    fork(watchGoToApiDetails)
  ])
}

export default sagas
