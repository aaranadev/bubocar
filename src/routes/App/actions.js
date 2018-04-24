import axios from 'axios'

export const ADD = 'ADD'
export const GET_DATA = 'GET_DATA'

export const add = data => {
  return (dispatch, getState) => {
    return dispatch({
      type: ADD,
      payload: data
    })
  }
}

export const getData = () => {
  return (dispatch, getState) => {
    return axios
      .get('https://api.ipify.org/?format=json')
      .then(function(response) {
        console.log(response)
        return dispatch({
          type: GET_DATA,
          payload: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
