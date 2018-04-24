import { combineReducers } from 'redux'
import globalReducer from './globalReducer'
import formReducer from '../components/Forms/reducer'

export const makeRootReducer = asyncReducers => combineReducers({
  global: globalReducer,
  form: formReducer,
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
