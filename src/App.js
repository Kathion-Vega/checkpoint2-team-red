import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import UsersMenu from './components/Home/UsersComponents/UsersMenu/UsersMenu';
import GetUsers from './components/Home/UsersComponents/UsersMenu/UsersSubMenus/GetUsers';
import BusquedaUser from './components/Home/UsersComponents/UsersMenu/UsersSubMenus/BusquedaUser';
import AddUser from './components/Home/UsersComponents/UsersMenu/UsersSubMenus/AddUser';
import DependantsMenu from './components/Home/Dependants/DependantsMenu';
import ListaDependants from './components/Home/Dependants/Lista&BusquedaDependants/ListaDependants';
import BusquedaDependant from './components/Home/Dependants/Lista&BusquedaDependants/BusquedaDependant';
import AddDependant from './components/Home/Dependants/AddDependant';
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './state/store/store';
import NavBar from './NavBar';


class App extends Component {
  
  
  
  render() {
    return (
      <Provider store={store}>
          <Router>
            <div>
              <NavBar></NavBar>    
              <Redirect from="/" to="/Home" />
              <Switch>
                <Route path="/Home" component={Home} />
                <Route exact path="/UsersMenu" render={() => <UsersMenu />} />
                <Route path="/UsersMenu/GetUsers" render={() => <GetUsers />} />
                <Route path="/UsersMenu/BusquedaUser" render={() => <BusquedaUser />} />
                <Route path="/UsersMenu/AddUser" render={() => <AddUser />} />
                <Route exact path="/DependantsMenu" render={() => <DependantsMenu />} />
                <Route path="/DependantsMenu/ListaDependants" render={() => <ListaDependants />} />
                <Route path="/DependantsMenu/BusquedaDependant" render={() => <BusquedaDependant />} />
                <Route path="/DependantsMenu/AddDependant" render={() => <AddDependant />} />
              </Switch>
            </div>
          </Router>
      </Provider>
    );
  }
}
export default App;