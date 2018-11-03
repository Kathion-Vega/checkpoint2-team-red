import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import UsersMenu from './components/Home/Users/UsersMenu';
import DependantsMenu from './components/Home/Dependants/DependantsMenu';
import './App.scss';
import NavBar from './NavBar';
import  AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppBar><NavBar></NavBar></AppBar>      
          <Redirect
            from="/"
            to="/Home" />
          <Switch>
            <Route
              path="/Home"
              component={Home} />
            <Route
              exact
              path="/UsersMenu"
              render={() => <UsersMenu />} />
            
            
            <Route
              exact
              path="/DependantsMenu"
              render={() => <DependantsMenu />} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;