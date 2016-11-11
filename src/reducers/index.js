import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import values from './values';

const rootReducer = combineReducers({
    routing: routerReducer,
    values
});

export default rootReducer;
