import { ADD } from './actions'

// ------------------------------------
// InitialState
// ------------------------------------
const initialState = {
  todo: [],
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD]: add,
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducerFunction (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

function add(state, action) {
  return {
    ...state,
    todo: [...state.todo, action.payload],
  };
}
