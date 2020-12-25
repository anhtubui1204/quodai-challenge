import listReducer from './list';
import highlightedItemsReducer from './highlighted_items'

import { combineReducers } from 'redux';

const reducers = combineReducers({
    list: listReducer,
    highlighted_items: highlightedItemsReducer
})

export default reducers;