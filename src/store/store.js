/**
 * Create the store with dynamic reducers
 */

import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from '../reducers'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

function configureStore(history, initialState = {}) {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    thunk,
  ]

  // ======================================================
  // Extra Configuration
  // ======================================================
  middleware.push(logger)

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  const composeEnhancers = compose

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(
        ...middleware,
         routerMiddleware(history),
      ),
      ...enhancers,
    ),
  )

  store.asyncReducers = {}


  return store
}

export default configureStore
