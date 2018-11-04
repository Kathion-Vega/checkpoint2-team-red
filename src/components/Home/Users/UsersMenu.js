import React, { Component } from 'react';
import { MenuItem, Menu, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';



class UsersMenu extends Component{
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
            <div className="users">  
                <label htmlFor="contained-button-file">    
                    <Button variant="contained" component="span" aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                        Usuarios                
                    </Button>                        
                </label>                        
                <Menu key={1} id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem><Link to = "/UsersMenu/ListaUsers/UserTable">Lista de Usuarios</Link></MenuItem>
                    <MenuItem><Link to = "/UsersMenu/BusquedaUser">Busqueda de Usuario</Link></MenuItem>
                    <MenuItem><Link to = "/UsersMenu/AddUser">Agregar Usuario</Link></MenuItem>
                    <MenuItem onClick={this.handleClose}><Link to="/Home/Home">Regresar</Link></MenuItem>
                </Menu>                                                                                               
            </div>
        )
    }
}


export default UsersMenu;
