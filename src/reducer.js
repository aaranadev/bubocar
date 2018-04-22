// ------------------------------------
// InitialState
// ------------------------------------
const initialState = {

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducerFunction (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
