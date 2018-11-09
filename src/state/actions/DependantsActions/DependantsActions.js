import axios from 'axios';

export const FETCH_DEPENDANTS = 'FETCH_DEPENDANTS';
export const FETCH_DEPENDANTS_ERROR = 'FETCH_DEPENDANTS_ERROR';
export const FETCH_DEPENDANTS_SUCCESS = 'FETCH_DEPENDANTS_SUCCESS';
export const LOADING_DEPENDANTS = 'LOADING_DEPENDANTS';

const FetchDependants = () => {
    return async (dispatch) => {
        dispatch(LoadingDependants())
        try {
            const response = await axios.get ( 'http://checkpoint2-grupo3.herokuapp.com/api/dependientes/rojo');
            dispatch(SuccessFetchingDependants(response.data.data));
        }
        catch (error) {
            dispatch(ErrorFetchingDependants(error));
        }
    }
};

const LoadingDependants = () => ({
    type: LOADING_DEPENDANTS
})

const SuccessFetchingDependants = (users) => ({
    type: FETCH_DEPENDANTS_SUCCESS,
    users
})

const ErrorFetchingDependants = (error) => ({
    type: FETCH_DEPENDANTS_ERROR,
    error
})

export { FetchDependants as fetchDependants };
