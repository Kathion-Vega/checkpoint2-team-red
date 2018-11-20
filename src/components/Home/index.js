import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Home';
import UsersMenu from './UsersComponents/UsersMenu/UsersMenu';
import GetUsers from './UsersComponents/UsersMenu/UsersSubMenus/GetUsers';
import BusquedaUser from './UsersComponents/UsersMenu/UsersSubMenus/BusquedaUser';
import AddUser from './UsersComponents/UsersMenu/UsersSubMenus/AddUser';
import DependantsMenu from './Dependants/DependantsMenu';
import ListaDependants from './Dependants/Lista&BusquedaDependants/ListaDependants';
import BusquedaDependant from './Dependants/Lista&BusquedaDependants/BusquedaDependant';
import AddDependant from './Dependants/AddDependant';
import './App.scss';


import store from '../../state/store/store';
import NavBar from '../NavBar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <div>
              <BrowserRouter>
                <NavBar />
                <br />   
                <Route exact path="/Home" component={Home} />
                <Route exact path="/UsersMenu" render={() => <UsersMenu />} />
                <Route exact path="/UsersMenu/UsersSubMenus/GetUsers" render={() => <GetUsers />} />
                <Route exact path="/UsersMenu/BusquedaUser" render={() => <BusquedaUser />} />
                <Route exact path="/UsersMenu/AddUser" render={() => <AddUser />} />
                <Route exact path="/DependantsMenu" render={() => <DependantsMenu />} />
                <Route exact path="/DependantsMenu/ListaDependants" render={() => <ListaDependants />} />
                <Route exact path="/DependantsMenu/BusquedaDependant" render={() => <BusquedaDependant />} />
                <Route exact path="/DependantsMenu/AddDependant" render={() => <AddDependant />} />
            </BrowserRouter>
          </div>  
      </Provider>
    );
  }
}
export default App;