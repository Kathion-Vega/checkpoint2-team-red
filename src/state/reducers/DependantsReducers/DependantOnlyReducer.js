import { LOADING_DEPENDANT, ADD_DEPENDANT, ADD_DEPENDANT_ERROR, FIND_DEPENDANT, FIND_DEPENDANT_ERROR, DELETE_DEPENDANT, DELETE_DEPENDANT_ERROR, EDIT_DEPENDANT, EDIT_DEPENDANT_ERROR } from './../../actions/Dependants/DependantsActions/DependantOnlyActions';

const initialState = {
    dependants: [],
    dependant: [],
    loading: false,
    errorMessage: ""
};

const DependantOnlyReducer = ( state = initialState, action) => {
    switch (action.type) {
        case LOADING_DEPENDANT:
            return {
                ...state,
                loading: true
            }

        case ADD_DEPENDANT:
            let newDependant = {
                nameCompleto: action.nameCompleto,
                dependencia: action.dependencia,
                edad: action.edad,
                user: action.id.user 
            }
            return {
                ...state,
                dependant: state.dependants.concat(newDependant)
            }

            case ADD_DEPENDANT_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }
        
        case FIND_DEPENDANT:
            let busquedaDependant = state.dependants.slice();
            let resultado = busquedaDependant.find((item) => {
                if (item.id == action.id) {
                    item.done = !item.done;
                    return true;
                } else if (item.nameCompleto == action.nameCompleto) {
                    item.done = !item.done;
                    return true;
                } else if (item.dependencia == action.dependencia) {
                    item.done = !item.done;
                    return true;
                } else if (item.edad == action.edad) {
                    item.done = !item.done;
                    return true;
                }  else if (item.id.user == action.id.user) {
                    item.done = !item.done;
                    return true;
                } 
            });
            busquedaDependant[resultado] = resultado;
            return {
                ...state,
                Dependant: busquedaDependant
            }

            case FIND_DEPENDANT_ERROR:
                return {
                    ...state,
                    loading: false,
                    errorMessage: action.error
                }
        
            case DELETE_DEPENDANT:
            break;

            case DELETE_DEPENDANT_ERROR:
             return {
                 ...state,
                 loading: false,
                 errorMessage: action.error
             }

            case EDIT_DEPENDANT: 
                let cambios = {
                    nameCompleto: action.Completo,
                    dependencia: action.dependencia,
                    edad: action.edad,
                    users: action.id.users
                }
                cambios = state.dependants.slice();
                for (let item of cambios) {
                    if (item.id.user == !item.id.user || item.nameCompleto == !item.nameCompleto || item.dependencia == !item.dependencia ||item.edad == !item.edad) {
                        item.done =!it.done;
                        return true;
                    }
                }
                return {
                    ...state,
                    dependant: cambios

                }
                case EDIT_DEPENDANT_ERROR:
                return {
                    ...state,
                    loading: false,
                    errorMessage: action.error
                }
            default:
            return state;
    }
} 

export default DependantOnlyReducer;