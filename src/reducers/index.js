import counterReducer from './counter';
import listReducer from './list';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    counter: counterReducer,
    list: listReducer
})

export default reducers;