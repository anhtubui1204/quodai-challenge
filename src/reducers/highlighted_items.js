import { HIGHLIGHT_ITEMS, UNHIGHLIGHT_ITEMS } from '../actions/type'
import top5array from '../utils/top5array'

const initialState = []

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case HIGHLIGHT_ITEMS:
            const allIssues = [...state, action.payload]
            // const top5issues = top5array(allIssues)
            return allIssues;
        case UNHIGHLIGHT_ITEMS:
            const finalList = state.filter(item => item.id !== action.payload.id)
            return finalList;
        default:
            return state;
    }
}

export default itemsReducer;