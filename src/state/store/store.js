import { createStore, applyMiddleware, combineReducers } from 'redux';
import UsersReducers from './../reducers/UsersReducers/UsersReducers';
import DependantsReducers from './../reducers/DependantsReducers/DependantsReducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    combineReducers(
        {
            users: UsersReducers,
            dependants: DependantsReducers
        }),applyMiddleware(thunk, logger));
    
    

export default store;
