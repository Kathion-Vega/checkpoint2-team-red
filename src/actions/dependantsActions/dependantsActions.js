import axios from 'axios';

export const traerDependientess = () => async (dispatch) => {

	dispatch({ type: 'llamar_dependiente' });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		dispatch({ type: 'dependiente_exitoso', payload: response.data });
	}
	catch(error) {
		dispatch({ type: 'dependiente_fallo', payload: error.message });
	}
};

export const cambiarNombre = (nombre) => (dispatch) => {
	dispatch({ type: 'cambio_nombre', payload: nombre });
};
