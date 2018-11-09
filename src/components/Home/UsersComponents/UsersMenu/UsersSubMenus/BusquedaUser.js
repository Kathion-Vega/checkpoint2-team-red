import React, { Component } from 'react';
import  { Link }  from 'react-router-dom';
import  { Table, Card, AppBar, Toolbar, InputBase, Typography, IconButton, Icon, Button } from '@material-ui/core';
import {  connect } from 'react-redux';
import { loadingUser,addOnlyUser, findOnlyUser, editOnlyUser, deleteOnlyUser } from './../../../state/actions/UsersActions/UserOnlyActions';
import { fetchUsers } from './../../../state/actions/UsersActions/UsersActions';
import NavBar from '../../../NavBar';
import './BusquedaUser.scss';




class BusquedaUser extends Component {

    render() {
        return (
            <div className='busqueda_user'>
                <AppBar  position="static" color="success">
                    <NavBar />
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
   
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Busqueda de Usuarios
                        </Typography>
                        <div className=''>
                            <div className=''>
                                <IconButton onClick={this.handleAddUser}>
                                    <Icon>
                                        searchicon
                                    </Icon>
                                </IconButton>
                            </div>
                            <InputBase placeholder="Search…"/>
                        </div>
                    </Toolbar>    
                </AppBar>
                <Card>
                    <Table>
                        Resultado de la Busqueda
                    </Table>
                    <IconButton>
                            <Icon>
                                edit
                            </Icon>
                    </IconButton>
                    <IconButton>
                            <Icon>
                                delete
                            </Icon>
                    </IconButton>
                </Card>    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers,
        loadingUser,
        addOnlyUser,
        findOnlyUser,
        editOnlyUser,
        deleteOnlyUser
    }    
}


const mapStateToProps = (state) => {
    return {
        users: state.users,
        user: state.user
    }
}

export default connect(mapDispatchToProps,mapStateToProps) (BusquedaUser);