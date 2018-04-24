import { injectReducer } from '../reducers/reducer'
import App, { reducer as appReducer} from './App'

export const createRoutes = store => {
  injectReducer(store, {key: 'app', reducer: appReducer})
  return [
    {
      path        : '/',
      component   : App,
      exact: true,
    },
  ]
}

export default createRoutes