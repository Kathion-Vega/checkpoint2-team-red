import React, { Component } from 'react';
import  { Link }  from 'react-router-dom';
import  { Card, AppBar, Toolbar, InputBase, Typography, IconButton, Icon, Button } from '@material-ui/core';
import {  connect } from 'react-redux';
import { loadingUser,addOnlyUser, findOnlyUser, editOnlyUser, deleteOnlyUser } from './../../../../state/actions/UsersActions/UserOnlyActions';
import { fetchDependants } from './../../../../state/actions/DependantsActions/DependantsActions';
import NavBar from '../../NavBar';
import './BusquedaDependant.scss';



class BusquedaDependant extends Component {

    render() {
        return (
            <div className='busqueda_dependant'>
                <AppBar  position="static" color="success">
                    <NavBar />
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
   
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Busqueda de Dependientes
                        </Typography>
                        <div className=''>
                            <div className=''>
                                <IconButton>
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

                    Resultado de la Busqueda

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
        fetchDependants,
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

export default connect(mapDispatchToProps,mapStateToProps) (BusquedaDependant);