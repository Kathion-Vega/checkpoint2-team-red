import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.scss';
import {Menu, MenuItem } from '@material-ui/core/';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem >  
            <Link to="/UsersMenu" key={1} className="link">Menu de Usuarios</Link>
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>
            <Link to="/DependantsMenu" key={2} className="link">Menu de Dependientes</Link>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
