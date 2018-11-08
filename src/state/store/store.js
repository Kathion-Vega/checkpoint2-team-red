import { createStore, applyMiddleware, combineReducers } from 'redux';
import UsersReducer from './../reducers/UsersReducers/UsersReducer';
import DependantsReducers from './../reducers/DependantsReducers/DependantsReducers';
import UserOnlyReducer from './../reducers/UsersReducers/UserOnlyReducer';
import DependantOnlyReducer from './../reducers/DependantsReducers/DependantOnlyReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    combineReducers(
        {
            users:UsersReducer,
            UserOnlyReducer,
            DependantsReducers,
            DependantOnlyReducer
        }),applyMiddleware(thunk, logger));
    
    

export default store;
