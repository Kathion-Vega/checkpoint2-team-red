import React, { Component } from 'react';
import {  Button, AppBar, Toolbar, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, } from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions/UsersActions';
import  { Link }  from 'react-router-dom';
import NavBar from '../../../NavBar';
import PropTypes from 'prop-types';

class ListaUsers extends Component{

handleClickGetUsers = () => {
    this.props.fetchUsers();
}

    render () {
        return (
            <div className='lista_user'>
                <AppBar  position="static" color="success"> 
                    <NavBar /> 
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Lista de Usuarios
                        </Typography>
                    </Toolbar>  
                </AppBar> 
                <Paper> 
                    <Button onClick={this.handleClickGetUsers}>Cargar userss</Button>                  
                    
                        <Paper>    
                            <Table>
                                <TableHead>
                                    <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Apellido Paterno</TableCell>
                                    <TableCell>Apellido Materno</TableCell>
                                    <TableCell>Edad</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.users.users.map(users => {
                                        return (
                                            <TableRow key={users}>
                                                <TableCell component="th" scope="users" >{users.nombre}</TableCell>
                                                <TableCell component="th" scope="users" >{users.apellidos.paterno}</TableCell>
                                                <TableCell component="th" scope="users" >{users.apellidos.materno}</TableCell>
                                                <TableCell numeric="th" scope="users" >{users.edad}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>  
                    
                                
                    {this.props.loading ? <h1>Cargando...</h1> : null}      
                                                          
                </Paper>
            </div> 
        )
    }    
}

// ListaUsers.propTypes = {
//     red: PropTypes.array.isRequired
// }
  

const mapDispatchToProps = () => {
    return {
        fetchUsers
    };
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListaUsers);