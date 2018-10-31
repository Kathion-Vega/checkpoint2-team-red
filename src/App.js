import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './state/store/store';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Route exact path="/" render={(props)=><Home {...props}></Home>}></Route>
            </div>
          </Switch>
          </BrowserRouter> 
      </Provider>
    );
  }
}

export default App;
