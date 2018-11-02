import React, { Component } from 'react';
import { MenuItem, Menu, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



class DependantsMenu extends Component{
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
            <div className="dependants">
                <label htmlFor="contained-button-file">     
                    <Button  variant="contained" component="span" aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                        Dependientes
                    </Button>
                </label>            
                <Menu  id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem><Link to = "/DependantsMenu/ListaDependants">Lista de Dependientes</Link></MenuItem>
                    <MenuItem><Link to = "/DependantsMenu/BusquedaDependant">Busqueda de Dependiente</Link></MenuItem> 
                    <MenuItem><Link to = "/DependantsMenu/AddDependant">Agregar Dependiente</Link></MenuItem>
                    <MenuItem><Link to = "/DependantsMenu/BusquedaUserDependant">Buscar Usuario del Dependiente</Link></MenuItem>
                    <MenuItem onClick={this.handleClose}><Link to = "/">Regresar</Link></MenuItem>
                </Menu>                                    
            </div>
        )
    }
}


export default DependantsMenu;
