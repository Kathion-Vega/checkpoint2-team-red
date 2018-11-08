import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import UsersMenu from './components/Home/Users/UsersMenu';
import ListaUsers from './components/Home/Users/ListaUsers';
import BusquedaUser from './components/Home/Users/BusquedaUser';
import AddUser from './components/Home/Users/AddUser';
import DependantsMenu from './components/Home/Dependants/DependantsMenu';
import ListaDependants from './components/Home/Dependants/Lista&BusquedaDependants/ListaDependants';
import BusquedaDependant from './components/Home/Dependants/Lista&BusquedaDependants/BusquedaDependant';
import AddDependant from './components/Home/Dependants/AddDependant';
import './App.scss';
import NavBar from './NavBar';
import  AppBar from '@material-ui/core/AppBar';
import { Provider } from 'react-redux';
import store from './state/store/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <AppBar color="primary" position="static"  ><NavBar></NavBar></AppBar>    
              <Redirect from="/" to="/Home" />
              <Switch>
                <Route path="/Home" component={Home} />
                <Route exact path="/UsersMenu" render={() => <UsersMenu />} />
                <Route path="/UsersMenu/ListaUsers" render={() => <ListaUsers />} />
                <Route path="/UsersMenu/BusquedaUser" render={() => <BusquedaUser />} />
                <Route path="/UsersMenu/AddUser" render={() => <AddUser />} />
                <Route exact path="/DependantsMenu" render={() => <DependantsMenu />} />
                <Route path="/DependantsMenu/ListaDependants" render={() => <ListaDependants />} />
                <Route path="/DependantsMenu/BusquedaDependant" render={() => <BusquedaDependant />} />
                <Route path="/DependantsMenu/AddDependant" render={() => <AddDependant />} />
                <Route component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}
export default App;