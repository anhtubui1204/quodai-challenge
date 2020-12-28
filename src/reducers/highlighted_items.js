import { HIGHLIGHT_ITEMS, UNHIGHLIGHT_ITEMS } from '../actions/type'
import top5array from '../utils/top5array';

const initialState = {
    allIssues: [],
    top5issues: []
}

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case HIGHLIGHT_ITEMS:
            const allIssues = [...state.allIssues, action.payload] //add payload to current state
            return {
                ...state, 
                allIssues, 
                top5issues: top5array(allIssues) //top 5 issues
            };
        case UNHIGHLIGHT_ITEMS:
            //remove issue from current highlighted issues list
            const reduced_allIssues = state.allIssues.filter(item => item.id !== action.payload.id)

            return {
                ...state, 
                allIssues: reduced_allIssues, 
                top5issues: top5array(reduced_allIssues) //top 5 issues
            };
        default:
            return state;
    }
}

export default itemsReducer;