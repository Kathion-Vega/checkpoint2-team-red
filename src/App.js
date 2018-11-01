mport React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './state/store/store';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import UsersMenu from './components/Home/Users/UsersMenu';
import DependantsMenu from './components/Home/Dependants/DependantsMenu';
import ListaUsers from './components/Home/Users/ListaUsers';
import BusquedaUser from './components/Home/Users/BusquedaUser';
import AddUsers from './components/Home/Users/AddUser';
import AddDependant from './components/Home/Dependants/AddDependant';
import ListaDependants from './components/Home/Dependants/ListaDependants';
import BusquedaDependants from './components/Home/Dependants/BusquedaDependant';
import BusquedaUserDependant from './components/Home/Dependants/BusquedaUserDependant';

import AppBar from '@material-ui/core/AppBar';
import './App.scss';

class AppRed extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <AppBar />
            <Redirect from="/" to="/Home" />
            <Switch>
              <Route path="/Home" component={ Home } />
              <Route path="/UsersMenu" component={ UsersMenu } />
              <Route exact path="/ListaUsers" render={() => <ListaUsers />} />
              <Route exact path="/AddUsers" render={() => <AddUsers />} />
              <Route exact path="/BusquedaUser" render={() => <BusquedaUser />} />
              <Route path="/DependantsMenu" component={ DependantsMenu } />
            
              <Route exact path="/ListaDependants" render={() => <ListaDependants />} />
              <Route exact path="/AddDependant" render={() => <AddDependant />} />
              <Route exact path="/BusquedaDependants" render={() => <BusquedaDependants />} />
              <Route exact path="/BusquedaUserDependant" render={() => <BusquedaUserDependant />} />
              <Redirect from="/" to="/Home" />
            </Switch>
          </div>
        </BrowserRouter> 
      </Provider>
    );
  }
}

export default AppRed;

