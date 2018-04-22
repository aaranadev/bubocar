import { ADD, GET_DATA } from './actions'

// ------------------------------------
// InitialState
// ------------------------------------
const initialState = {
  todo: [],
  data: {},
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD]: add,
  [GET_DATA]: getData,
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

function getData(state, action) {
  return {
    ...state,
    data: action.payload,
  };
}
