import React from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = (props) => (
	<AppBar className="home">
		<li>
			<Link to='/UsersComponents/UsersMenu'>
				Tarjetas
			</Link>
		</li>
		<li>
			<Link to='/Dependientes/DependientesLista'>
				Modal
			</Link>
		</li>
	</AppBar>
);

export default Home;

