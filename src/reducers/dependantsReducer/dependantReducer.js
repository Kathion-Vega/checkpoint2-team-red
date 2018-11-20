
const INITIAL_STATE = {
    dependants: [],
    cargando: false,
    error: "",
    nombre: ''
};


export default (state = INITIAL_STATE, action) => 
{
    switch (action.type) 
    {
        
        case 'llamar_dependiente': return { ...state, error: '', cargando: true };
		case 'dependiente_exitoso': return { ...state, error: '', cargando: false, dependientes: action.payload };
		case 'dependiente_fallo': return { ...state, error: action.payload, cargando: false };
		case 'cambio_nombre': return { ...state, nombre: action.payload };
		default: return state;
    }
}

