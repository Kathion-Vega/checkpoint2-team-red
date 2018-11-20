import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dependantsActions from '../../actions/dependantsActions';
import LinearProgress from '@material-ui/core/LinearProgress';

class DependientesLista extends Component {

	componentDidMount() {
		this.props.traerDependientes();
	}

	desplegar = () => (
		this.props.usuarios.map((dependiente, index) => (
			<li>
				{ dependiente.name }
			</li>
		))
	);

	cambioNombre = (event) => {
		this.props.cambiarNombre(event.target.value);
	};

	render() {
		return (
			<div style={{margin: '100px'}}>
				<input value={ this.props.nombre } onChange={ this.cambioNombre } />
				<ul>
				{ this.props.error }
				
				{ (this.props.cargando) ? <LinearProgress  color="secondary" className="preloader" /> : '' }

				{ this.desplegar() }
				</ul>
			</div>
			<Link to ="/home">
				Home
			</Link>
		);
	}
}

const mapStateToProps = ({ dependantsReducer }) => {
	return dependantsReducer;
}

export default connect(mapStateToProps, dependantsActions)(DependientesLista);