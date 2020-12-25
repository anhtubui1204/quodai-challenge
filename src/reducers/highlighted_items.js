import { HIGHLIGHT_ITEMS, UNHIGHLIGHT_ITEMS } from '../actions/type'

const initialState = []

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case HIGHLIGHT_ITEMS:
            state.push(action.payload)
            return state;
        case UNHIGHLIGHT_ITEMS:
            const finalList = state.filter(item => item.id !== action.payload.id)
            return finalList;
        default:
            return state;
    }
}

export default itemsReducer;