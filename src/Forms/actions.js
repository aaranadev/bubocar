export const CHANGE = 'ADD'

export const change = (data, name) => {
  return (dispatch, getState) => {
    return dispatch({
      type: CHANGE,
      payload: {
        name,
        data
      }
    })
  }
}
