import { fork, all } from 'redux-saga/effects'

import * as auth from './auth'
import * as clients from './clients'
import * as products from './products'

export default function * rootSaga () {
  yield all([
    fork(auth.sagas),
    fork(clients.sagas),
    fork(products.sagas)
  ])
}
