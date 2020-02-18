import {axiosWithAuth} from '../../axiosWithAuth';

export const ADD_FRIENDS = "ADD_FRIENDS"
export const POST_FRIENDS = "POST_FRIENDS"
export const REMOVE_FRIENDS = "REMOVE_FRIENDS"
export const FETCH_FRIENDS = "FETCH_FRIENDS"
export const UPDATE = "UPDATE"
export const ERROR = "ERROR"

export const getFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS});
    axiosWithAuth()
      .get('/friends')
      .then(res => {
          console.log(res.data)
          dispatch({type: UPDATE, payload:res.data})
      })
      .catch(err => {
          dispatch({type:ERROR, payload:"Error"})
      })
}

export const addFriends = (add) => dispatch => {
    console.log('add', add)
    dispatch({type: POST_FRIENDS});
    axiosWithAuth()
        .post('/friends',
        {
            name: add.name,
            age: add.age,
            email: add.email,
            id: Date.now()
        })
        .then(res => {
            console.log('action add', res.data)
            dispatch({type: ADD_FRIENDS, payload:res})
        })
        .catch(err => {
            dispatch({type:ERROR, payload: "Error"})
        })
}