export const ADD = 'ADD'

export const add = data => {
  return (dispatch, getState) => {
    return dispatch({
      type: ADD,
      payload: data
    })
  }
}
