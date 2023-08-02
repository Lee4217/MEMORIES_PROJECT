// index.js is the JS file connect to connect our REACT app to index http file. 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers/index.js';


const store = configureStore({reducer: rootReducer}, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <App />
        </Provider>
);


