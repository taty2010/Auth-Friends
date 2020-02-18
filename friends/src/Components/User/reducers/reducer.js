import {ADD_FRIENDS, ERROR, FETCH_FRIENDS, UPDATE, POST_FRIENDS} from '../actions/action'

const initialState = {
    friends:[],
    isFetchingData: false,
    error: ''
}

function reducer(state = initialState, action){
    switch (action.type){
        case FETCH_FRIENDS:
            return{
                ...state,
                isFetchingData: true,
                friends: []
            } 
        case UPDATE:
            return{
                ...state,
                friends: action.payload,
                isFetchingData: false
            }
        case POST_FRIENDS:
            return{
                ...state,
                isFetchingData: true
            }
        case ADD_FRIENDS:
            return{
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                email: action.payload.email,
                id: Date.now()
            }
        default:
            return state
    }
}

export default reducer