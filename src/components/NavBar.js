import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Menu, MenuItem } from '@material-ui/core/';

class NavBar extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Menu  id="simple-menu" anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose} >  
            <Link to="/UsersMenu" key={1} className="link">Menu de Usuarios</Link>
          </MenuItem>
        </Menu>
        <Menu  id="simple-menu"anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose} >
          <MenuItem onClick={this.handleClose}>
            <Link to="" key={2} className="link">Menu de Dependientes</Link>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
