import {getHeadlinesReducer} from './getNewsReducer';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
    getHeadlinesResponse : getHeadlinesReducer
});