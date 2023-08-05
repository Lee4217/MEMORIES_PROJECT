import postReducer from './posts.js';
import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    post: postReducer
});

export default rootReducer;