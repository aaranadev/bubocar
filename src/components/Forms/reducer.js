import { CHANGE } from './actions'

// ------------------------------------
// InitialState
// ------------------------------------
const initialState = {
  email: undefined,
  name: undefined,
  surname: undefined,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE]: change,
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducerFunction (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

function change(state, action) {
  return {
    ...state,
    [action.payload.name]: action.payload.data,
  };
}
