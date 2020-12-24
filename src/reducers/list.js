import { GET_LIST } from '../actions/type'

const initialState = []

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_LIST:
            return action.payload;
        default:
            return state;
    }
}

export default listReducer;