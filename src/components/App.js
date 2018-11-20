import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import UsersMenu from './UsersComponents/UsersMenu';
import GetUsers from './UsersComponents/UsersMenu/GetUsers';
import BusquedaUser from './UsersComponents/UsersMenu/BusquedaUser';
import AddUser from './UsersComponents/UsersMenu/AddUser';
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
        <Route exact path="/UsersMenu" component={UsersMenu} />
        <Route exact path="/UsersMenu/UsersSubMenus/GetUsers" component={GetUsers} />
        <Route exact path="/UsersMenu/BusquedaUser" component={BusquedaUser} />
        <Route exact path="/UsersMenu/AddUser" component={AddUser} />
        <Route exact path="/DependientesLista" component={DependientesLista} />
        {/* <Route exact path="/DependantsMenu/ListaDependants" component={ListaDependants} /> */}
        {/* <Route exact path="/DependantsMenu/BusquedaDependant" component={BusquedaDependant} />
        <Route exact path="/DependantsMenu/AddDependant" component={AddDependant} /> */}
            
      </div>  
    </BrowserRouter> 
  </div> 
);

export default Red;