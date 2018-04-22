export const CHANGE = 'CHANGE'

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
