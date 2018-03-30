import { fork, all } from 'redux-saga/effects'

import * as auth from './auth'
import * as clientDetails from './client-details'
import * as productDetails from './product-details'
import * as clientList from './client-list'

export default function * rootSaga () {
  yield all([
    fork(auth.sagas),
    fork(clientList.sagas),
    fork(clientDetails.sagas),
    fork(productDetails.sagas)
  ])
}
