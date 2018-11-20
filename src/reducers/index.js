import { combineReducers } from 'redux';

import UsersReducer from './../reducers/UsersReducers/UsersReducer';
import dependantReducer from './../reducers/dependantReducer/dependantReducer';
import UserOnlyReducer from './../reducers/UsersReducers/UserOnlyReducer';
import DependantOnlyReducer from './../reducers/DependantsReducers/DependantOnlyReducer';


export default combineReducers({
    UsersReducer,
    UserOnlyReducer,
    dependantReducer,
    DependantOnlyReducer
});