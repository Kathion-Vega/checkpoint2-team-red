import { FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, LOADING_USERS } from './../../actions/Users/UsersActions/UsersActions';
const initialState = {
    users: [],
    loading: false,
    errorMessage: ""
}


const UsersReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_USERS:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }

        default:
            return state;
    
    }
}

export default UsersReducers;