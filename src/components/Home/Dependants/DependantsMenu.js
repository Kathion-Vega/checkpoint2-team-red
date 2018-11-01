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
                    <Button eventKey={2} variant="contained" component="span" aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                        Dependientes
                    </Button>
                </label>            
                <Menu  id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem eventKey={2.1} ><Link to = "/DependantsMenu/ListaDependants">Lista de Dependientes</Link></MenuItem>
                    <MenuItem eventKey={2.2}><Link to = "/DependantsMenu/BusquedaDependant">Busqueda de Dependiente</Link></MenuItem> 
                    <MenuItem  eventKey={2.3}><Link to = "/DependantsMenu/AddDependant">Agregar Dependiente</Link></MenuItem>
                    <MenuItem  eventKey={2.4}><Link to = "/DependantsMenu/BusquedaUserDependant">Buscar Usuario del Dependiente</Link></MenuItem>
                    <MenuItem eventKey={2.5} onClick={this.handleClose}><Link to = "/">Regresar</Link></MenuItem>
                </Menu>                                    
            </div>
        )
    }
}


export default DependantsMenu;
