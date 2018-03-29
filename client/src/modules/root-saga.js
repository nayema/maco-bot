import { fork, all } from 'redux-saga/effects'

import * as auth from './auth'
import * as pages from './pages'

export default function * rootSaga () {
  yield all([
    fork(auth.sagas),
    fork(pages.sagas)
  ])
}
