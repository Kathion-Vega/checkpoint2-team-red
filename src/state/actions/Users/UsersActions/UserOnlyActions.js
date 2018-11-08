import axios from 'axios';


export const FIND_USER = "FIND_USER";
export const FIND_USER_ERROR = 'FIND_USER_ERROR';


export const LOADING_USER = "LOADING_USER";
export const ADD_USER = "ADD_USER";
export const ADD_USER_ERROR = 'ADD_USER_ERROR';


export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_ERROR = 'ADD_USER_ERROR';

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_ERROR = 'ADD_USER_ERROR';


const FindOnlyUser = () => {
    return async (dispatch) => {
        dispatch(LoadingUser())
        try {
            const response = await axios.get ("http://checkpoint2-grupo3.herokuapp.com/api/usuarios/red/users/users");
            dispatch(SuccessFindingUser(response.data.users));
        }
        catch (error) {
            dispatch(ErrorFindingUser(error));
        }
    }
};
        

const SuccessFindingUser = (users) => ({
    type: FIND_USER,
    users
})

const ErrorFindingUser = (error) => ({
    type: FIND_USER_ERROR,
    error
})



const AddOnlyUser = () => {
    return async (dispatch) => {
        dispatch(LoadingUser())
        try {
            const response = await axios.post ("http://checkpoint2-grupo3.herokuapp.com/api/usuarios/red/users/users"
                );
            dispatch(SuccessAddingUser(response.data.users));
        }
        catch (error) {
            dispatch(ErrorAddingUser(error));
        }
    }
};
        
const LoadingUser = () => ({
    type: LOADING_USER,
})

const SuccessAddingUser = (users) => ({
    type: ADD_USER,
    users
})

const ErrorAddingUser = (error) => ({
    type: ADD_USER_ERROR,
    error
})


const EditOnlyUser = () => {
    return async (dispatch) => {
        dispatch(LoadingUser())
        try {
            const response =await axios.post ("http://checkpoint2-grupo3.herokuapp.com/api/usuarios/red/users/users"
                );
            dispatch(SuccessEditingUser(response.data.users));
        }
        catch (error) {
            dispatch(ErrorEditingUser(error));
        }
    }
};



const SuccessEditingUser = (users) => ({
    type: EDIT_USER,
    users
})

const ErrorEditingUser = (error) => ({
    type: EDIT_USER_ERROR,
    error
})

const DeleteOnlyUser = () => {
    return async (dispatch) => {
        dispatch(LoadingUser())
        try {
            const response =await axios.delete ("http://checkpoint2-grupo3.herokuapp.com/api/usuarios/red/users/users"
                );
            dispatch(SuccessDeletingUser(response.data.users));
        }
        catch (error) {
            dispatch(ErrorDeletingUser(error));
        }
    }
}



const SuccessDeletingUser = (users) => ({
    type: EDIT_USER,
    users
})

const ErrorDeletingUser = (error) => ({
    type: DELETE_USER_ERROR,
    error
})

export { LoadingUser as loadingUser};
export { AddOnlyUser as addOnlyUser };
export { FindOnlyUser as findOnlyUser };
export { EditOnlyUser as  editOnlyUser };
export { DeleteOnlyUser as deleteOnlyUser };
