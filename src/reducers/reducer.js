import { combineReducers } from 'redux'
import appReducer from '../reducer'

export const makeRootReducer = asyncReducers => combineReducers({
  app: appReducer,
  ...asyncReducers,
})


export const injectReducer = (originalStore, { key, reducer }) => {
  const store = originalStore
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  }

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
