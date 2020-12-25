import { HIGHLIGHT_ITEMS, UNHIGHLIGHT_ITEMS } from './type'

export const highlightAction = (item) => dispatch => {
    dispatch({
        type: HIGHLIGHT_ITEMS,
        payload: item
    })
}

export const unHighlightAction = (item) => dispatch => {
    dispatch({
        type: UNHIGHLIGHT_ITEMS,
        payload: item
    })
}