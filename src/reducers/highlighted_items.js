import { HIGHLIGHT_ITEMS, UNHIGHLIGHT_ITEMS } from '../actions/type'

const initialState = []

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case HIGHLIGHT_ITEMS:
            const allIssues = [...state, action.payload] //add payload to current state
            return allIssues;
        case UNHIGHLIGHT_ITEMS:
            //remove issue from current highlighted issues list
            const finalList = state.filter(item => item.id !== action.payload.id)
            return finalList;
        default:
            return state;
    }
}

export default itemsReducer;