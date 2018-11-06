import { LOADING_USER, ADD_USER, ADD_USER_ERROR, FIND_USER,  FIND_USER_ERROR, DELETE_USER, DELETE_USER_ERROR,  EDIT_USER, EDIT_USER_ERROR,  } from './../../actions/Users/UsersActions/UserOnlyActions';

const initialState = {
    users: [],
    loading: false,
    errorMessage: ""
}

const UserOnlyReducer = ( state = initialState, action) => {
    switch (action.type) {
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        
        case ADD_USER:
            let newUser = {
                id: state.users.lenght + 1,
                nombre: action.nombre,
                paterno: action.apellidos.paterno,
                materno: action.apellidos.materno,
                edad: action.edad 
            }
            return {
                ...state,
                users: state.users.concat(newUser)
            }

        case ADD_USER_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }
        
        case FIND_USER:
            let busquedaUsers = state.users.slice();
            let resultado = busquedaUsers.find((item) => {
                if (item.id === action.id) {
                    item.done = !item.done;
                    return true;
                } else if (item.nombre === action.nombre) {
                    item.done = !item.done;
                    return true;
                } else if (item.apellidos.paterno === action.apellidos.paterno) {
                    item.done = !item.done;
                    return true;
                } else if (item.apellidos.materno === action.apellidos.materno) {
                    item.done = !item.done;
                    return true;
                }  else if (item.edad === action.edad) {
                    item.done = !item.done;
                    return true;
                } 
                return null; 
            });

            busquedaUsers[resultado] = resultado;
            return {
                ...state,
                user: busquedaUsers
            }

            case FIND_USER_ERROR:
                return {
                    ...state,
                    loading: false,
                    errorMessage: action.error
                }
        
            case DELETE_USER:
            break;

            case DELETE_USER_ERROR:
             return {
                 ...state,
                 loading: false,
                 errorMessage: action.error
             }

            case EDIT_USER: 
                let cambios = {
                    id: action.id,
                    nombrename: action.nombre,
                    paterno: action.apellido.paterno,
                    materno: action.apellido.materno,
                    edad: action.edad,
                }
                cambios = state.users.slice();
                for (let item of cambios) {
                    if (item.id === !item.done || item.nombre === !item.nombre || item.apellido.paterno === !item.apellido.paterno ||  item.apellido.materno === !item.apellido.materno ||item.edad === !item.edad) {
                        item.done =!it.done;
                        return true;
                    }
                }
                return {
                    ...state,
                    users: cambios

                }
            case EDIT_USER_ERROR:
                return {
                    ...state,
                    loading: false,
                    errorMessage: action.error
                }
        
            default:
            return state;
    }
} 

export default UserOnlyReducer;