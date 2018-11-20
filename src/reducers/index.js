import { combineReducers } from 'redux';

import UsersReducer from './../reducers/UsersReducers/UsersReducer';
import dependantsReducers from './../reducers/dependantsReducer/dependantsReducer';
import UserOnlyReducer from './../reducers/UsersReducers/UserOnlyReducer';
import DependantOnlyReducer from './../reducers/DependantsReducers/DependantOnlyReducer';


export default combineReducers({
    UsersReducer,
    UserOnlyReducer,
    dependantsReducer,
    DependantOnlyReducer
});