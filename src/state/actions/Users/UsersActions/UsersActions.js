import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const LOADING_USERS = 'LOADING_USERS';

const FetchUsers = () => {
    return async (dispatch) => {
        dispatch(LoadingUsers())
        try {
            const response = await axios.post ('http://checkpoint2-grupo3.herokuapp.com/api/usuarios/red');
            dispatch(SuccessFetchingUsers(response.data));
        }
        catch (error) {
            dispatch(ErrorFetchingUsers(error));
        }
    }
};

const LoadingUsers = () => ({
    type: LOADING_USERS,
})

const SuccessFetchingUsers = (users) => ({
    type: FETCH_USERS_SUCCESS,
    users
})

const ErrorFetchingUsers = (error) => ({
    type: FETCH_USERS_ERROR,
    error
})

export { FetchUsers as fetchUsers};