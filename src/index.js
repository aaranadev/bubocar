import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { renderRoutes } from 'react-router-config'
import createHistory from 'history/createBrowserHistory'
import createRouter from './routes'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

// Redux
import createStore from './store'

const initialState = window.__PRELOADED_STATE__ || window.__INITIAL_STATE__
const history = createHistory()
const store = createStore(history, initialState)

const routes = createRouter(store)

console.log(routes)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
