import { HIGHLIGHT_ITEMS, UNHIGHLIGHT_ITEMS } from './type'

//action for highlighting issue
export const highlightAction = (item) => dispatch => {
    dispatch({
        type: HIGHLIGHT_ITEMS,
        payload: {
            ...item, 
            key: new Date() //create key field as current date-time
        }
    })
}

//action for unhighlighting issue
export const unHighlightAction = (item) => dispatch => {
    dispatch({
        type: UNHIGHLIGHT_ITEMS,
        payload: item
    })
}