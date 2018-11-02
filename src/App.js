import React, { Component } from 'react';
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

import {AppBar, Typography, Card} from '@material-ui/core';
import './App.scss';

class AppRed extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <AppBar>
              <Typography variant="h6" color="inherit">
                RED
              </Typography>  
              <Switch>
                <Route path="/Home" component={ Home } />
                <Route path="/UsersMenu" component={ UsersMenu } />
                {/* <Route path="/ListaUsers" render={() => <ListaUsers />} />

                <Route path="/AddUsers" render={() => <AddUsers />} />
                <Route path="/BusquedaUser" render={() => <BusquedaUser />} /> */}
                <Route path="/DependantsMenu" component={ DependantsMenu } />
              
                {/* <Route path="/ListaDependants" render={() => <ListaDependants />} />
                <Route path="/AddDependant" render={() => <AddDependant />} />
                <Route path="/BusquedaDependants" render={() => <BusquedaDependants />} />
                <Route path="/BusquedaUserDependant" render={() => <BusquedaUserDependant />} /> */}
                <Redirect from="/" to="/Home" />
              </Switch>
            </AppBar> 
            <Card>
            <Switch>
                bbbbbbb
              
                <Route path="/ListaUsers" render={() => <ListaUsers />} />

                <Route path="/AddUsers" render={() => <AddUsers />} />
                <Route path="/BusquedaUser" render={() => <BusquedaUser />} />
            
              
                <Route path="/ListaDependants" render={() => <ListaDependants />} />
                <Route path="/AddDependant" render={() => <AddDependant />} />
                <Route path="/BusquedaDependants" render={() => <BusquedaDependants />} />
                <Route path="/BusquedaUserDependant" render={() => <BusquedaUserDependant />} />
              
              </Switch>

            </Card>
          </div>
        </BrowserRouter> 
      </Provider>
    );
  }
}

export default AppRed;

