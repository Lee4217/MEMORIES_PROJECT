import postReducer from './posts.js';
import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    posts: postReducer
});

export default rootReducer;