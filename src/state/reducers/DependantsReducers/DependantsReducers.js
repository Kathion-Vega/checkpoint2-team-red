import {FETCH_DEPENDANTS_ERROR, FETCH_DEPENDANTS_SUCCESS, LOADING_DEPENDANTS } from './../../actions/Dependants/DependantsActions/DependantsActions';
const initialState = {
    dependants: [],
    loading: false,
    errorMessage: ""
}


const DependantsReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DEPENDANTS:
            return {
                ...state,
                loading: true
            }

        case FETCH_DEPENDANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.dependants
            }
        case FETCH_DEPENDANTS_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }

        default:
            return state;
    
    }
}

export default DependantsReducers;