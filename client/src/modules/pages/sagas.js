import { fork, all } from 'redux-saga/effects'

import * as clientList from '../client-list'
import * as clientDetails from '../client-details'
import * as productDetails from '../product-details'

export default function * rootSaga () {
  yield all([
    fork(clientList.sagas),
    fork(clientDetails.sagas),
    fork(productDetails.sagas)
  ])
}
