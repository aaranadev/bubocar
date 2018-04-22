import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// Redux
import createStore from './store'

const initialState = window.__PRELOADED_STATE__ || window.__INITIAL_STATE__
const store = createStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
