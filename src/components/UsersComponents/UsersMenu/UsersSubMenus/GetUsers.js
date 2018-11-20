import React, { Component } from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell, Button, AppBar, Toolbar, Typography, Paper } from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../../../state/actions/UsersActions/UsersActions';
import  { Link }  from 'react-router-dom';
import NavBar from '../../../NavBar';
import DatosUsers from './GetDatosUsers/DatosUsers';

class ListaUsers extends Component{

handleClickGetUsers = () => {
    this.props.fetchUsers();
}

    render () {
        return (
            <div className='lista_user'>
                <AppBar  position="static" color="secondary"> 
                    <NavBar /> 
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Lista de Usuarios
                        </Typography>
                    </Toolbar>  
                </AppBar> 
                <div>
                    <Paper> 
                        <div className="">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell>Apellido Paterno</TableCell>
                                        <TableCell>Apellido Materno</TableCell>
                                        <TableCell>Edad</TableCell>                    
                                    </TableRow>
                                </TableHead>
                                {/* <TableBody>        <Button onClick={this.handleClickGetUsers}>Cargar userss</Button>                   */}
                                <TableBody>
                                    <DatosUsers />
                                </TableBody>
                                {/* {this.props.loading ? <h1>Cargando...</h1> : null}      */}
                            </Table>  
                        </div>                              
                    </Paper>
                </div>
            </div> 
        )
    }    
}


  

const mapDispatchToProps = (users) => {
    return {
        users,
        fetchUsers,
    };
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        fetchUsers,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListaUsers);