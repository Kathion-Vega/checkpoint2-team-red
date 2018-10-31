import React, { Component } from 'react';
import { MenuItem, Menu, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Home extends Component{
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
            <div className="home-container">
                <Button  aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                    Usuarios
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem eventKey={1.1}><Link to = "/Users/Lista">Lista de Usuarios</Link></MenuItem>
                                
                    <MenuItem eventKey={1.2} ><Link to = "/Users/Busqueda">Busqueda de Usuario</Link></MenuItem>
                                
                    <MenuItem eventKey={1.3}><Link to = "/Users/Add">Agregar Usuario</Link></MenuItem>
                </Menu>   
                <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                    Dependientes
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem eventKey={2.1} ><Link to = "/Dependants/Lista">Lista de Dependientes</Link></MenuItem>
                                
                    <MenuItem eventKey={2.2}><Link to = "/Dependants/Busqueda">Busqueda de Dependiente</Link></MenuItem> 
                                
                    <MenuItem  eventKey={2.3}><Link to = "/Dependants/Add">Agregar Dependiente</Link></MenuItem>
                    <MenuItem  eventKey={2.4}><Link to = "/Dependants/User">Buscar Usuario del Dependiente</Link></MenuItem>
                </Menu>
                    
                   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Home);
