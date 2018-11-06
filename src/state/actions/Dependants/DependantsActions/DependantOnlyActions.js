import axios from 'axios';


export const FIND_DEPENDANT = "FIND_DEPENDANT";
export const FIND_DEPENDANT_ERROR = 'FIND_DEPENDANT_ERROR';


export const LOADING_DEPENDANT = "LOADING_DEPENDANT";
export const ADD_DEPENDANT = "ADD_DEPENDANT";
export const ADD_DEPENDANT_ERROR = 'ADD_DEPENDANT_ERROR';


export const EDIT_DEPENDANT = "EDIT_DEPENDANT";
export const EDIT_DEPENDANT_ERROR = 'EDIT_DEPENDANT_ERROR';

export const DELETE_DEPENDANT = "DELETE_DEPENDANT";
export const DELETE_DEPENDANT_ERROR = 'DELETE_DEPENDANT_ERROR';


const FindOnlyDependant = () => {
    return async (dispatch) => {
        dispatch(LoadingDependant())
        try {
            const response = await axios.get ("http://checkpoint2-grupo3.herokuapp.com/api/dependientes/rojo/dependiente_id");
            dispatch(SuccessFindingDependant(response.data.data));
        }
        catch (error) {
            dispatch(ErrorFindingDependant(error));
        }
    }
};
        

const SuccessFindingDependant = (Dependants) => ({
    type: FIND_DEPENDANT,
    Dependants
})

const ErrorFindingDependant = (error) => ({
    type: FIND_DEPENDANT_ERROR,
    error
})



const AddOnlyDependant = () => {
    return async (dispatch) => {
        dispatch(LoadingDependant())
        try {
            const response = await axios.post ("http://checkpoint2-grupo3.herokuapp.com/api/dependientes/rojo");
            dispatch(SuccessAddingDependant(response.data.data));
        }
        catch (error) {
            dispatch(ErrorAddingDependant(error));
        }
    }
};
        
const LoadingDependant = () => ({
    type: LOADING_DEPENDANT,
})

const SuccessAddingDependant = (Dependants) => ({
    type: ADD_DEPENDANT,
    Dependants
})

const ErrorAddingDependant = (error) => ({
    type: ADD_DEPENDANT_ERROR,
    error
})


const EditOnlyDependant = () => {
    return async (dispatch) => {
        dispatch(LoadingDependant())
        try {
            const response =await axios.post ("http://checkpoint2-grupo3.herokuapp.com/api/dependientes/rojo/dependiente_id");
            dispatch(SuccessEditingDependant(response.data.dat));
        }
        catch (error) {
            dispatch(ErrorEditingDependant(error));
        }
    }
};



const SuccessEditingDependant = (Dependants) => ({
    type: EDIT_DEPENDANT,
    Dependants
})

const ErrorEditingDependant = (error) => ({
    type: EDIT_DEPENDANT_ERROR,
    error
})

const DeleteOnlyDependant = () => {
    return async (dispatch) => {
        dispatch(LoadingDependant())
        try {
            const response =await axios.delete ("http://checkpoint2-grupo3.herokuapp.com/api/dependientes/rojo/dependiente_id");
            dispatch(SuccessDeletingDependant(response.data.dat));
        }
        catch (error) {
            dispatch(ErrorDeletingDependant(error));
        }
    }
}



const SuccessDeletingDependant = (Dependants) => ({
    type: EDIT_DEPENDANT,
    Dependants
})

const ErrorDeletingDependant = (error) => ({
    type: DELETE_DEPENDANT_ERROR,
    error
})

export { LoadingDependant as loadingDependant};
export { AddOnlyDependant as addOnlyDependant };
export { FindOnlyDependant as findOnlyDependant };
export { EditOnlyDependant as  editOnlyDependant };
export { DeleteOnlyDependant as deleteOnlyDependant };
