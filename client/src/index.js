import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import store from './store'
import App from './App'

const target = document.getElementById('root')

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  target
)

registerServiceWorker()
