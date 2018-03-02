import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import * as authService from './auth-service'

function * onLoad () {
  if (authService.isAuthenticated()) {
    yield put(actionCreators.alreadyAuthenticated(authService.getProfile(), authService.getIdToken()))
  } else {
    try {
      yield call(authService.handleLoginRequest)
      yield put(actionCreators.loginRequestSucceeded(authService.getProfile(), authService.getIdToken()))
      yield put(push('/'))
    } catch (error) {
      yield put(actionCreators.loginRequestErrored(error))
      yield put(push('/'))
    }
  }
}

function * login () {
  yield call(authService.login)
}

function * logout () {
  yield call(authService.logout)
}

function * watchLogin () {
  yield takeEvery(actionTypes.LOGIN_REQUEST_STARTED, login)
}

function * watchLogout () {
  yield takeEvery(actionTypes.LOGOUT_REQUEST_STARTED, logout)
}

function * sagas () {
  yield all([
    fork(onLoad),
    fork(watchLogin),
    fork(watchLogout)
  ])
}

export default sagas
