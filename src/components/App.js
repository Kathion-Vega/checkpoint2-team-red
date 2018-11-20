import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import UsersComponents from './UsersComponents/UsersComponents';
import GetUsers from './UsersComponents/UsersComponents/GetUsers';
import BusquedaUser from './UsersComponents/UsersComponents/BusquedaUser';
import AddUser from './UsersComponents/UsersComponents/AddUser';
import Dependientes from './Dependientes/Dependientes';
import ListaDependants from './Dependants/Lista&BusquedaDependants/ListaDependants';
import BusquedaDependant from './Dependants/Lista&BusquedaDependants/BusquedaDependant';
import AddDependant from './Dependants/AddDependant';

import NavBar from './NavBar';

const Red = (props) => (

  <div>
    <BrowserRouter>
      <div>
        <NavBar />
        <br />   
        <Route exact path="/Home" component={Home} />
        <Route exact path="/UsersComponents/UsersMenu" component={UsersMenu} />
        <Route exact path="/UsersComponents/GetUsers" component={GetUsers} />
        <Route exact path="/UsersComponents/BusquedaUser" component={BusquedaUser} />
        <Route exact path="/UsersComponents/AddUser" component={AddUser} />
        <Route exact path="/Dependientes/DependientesLista" component={DependientesLista} />
        {/* <Route exact path="/DependantsComponents/ListaDependants" component={ListaDependants} /> */}
        {/* <Route exact path="/DependantsComponents/BusquedaDependant" component={BusquedaDependant} />
        <Route exact path="/DependantsComponents/AddDependant" component={AddDependant} /> */}
            
      </div>  
    </BrowserRouter> 
  </div> 
);

export default Red;