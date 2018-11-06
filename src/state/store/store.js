import { createStore, applyMiddleware, combineReducers } from 'redux';
import UsersReducers from './../reducers/UsersReducers/UsersReducers';
import DependantsReducers from './../reducers/DependantsReducers/DependantsReducers';
import UserOnlyReducer from './../reducers/UsersReducers/UserOnlyReducer';
import DependantOnlyReducer from './../reducers/DependantsReducers/DependantOnlyReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    combineReducers(
        {
            users: UsersReducers,
            user: UserOnlyReducer,
            dependants: DependantsReducers,
            dependant: DependantOnlyReducer
        }),applyMiddleware(thunk, logger));
    
    

export default store;
