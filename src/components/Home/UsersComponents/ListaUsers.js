import React, { Component } from 'react';
import {  Button, AppBar, Toolbar, Typography, Paper } from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/UsersActions/UsersActions';
import  { Link }  from 'react-router-dom';
import NavBar from '../../../NavBar';
import TableUser from './TableUser';

class ListaUsers extends Component{

// handleClickGetUsers = () => {
//     this.props.fetchUsers();
// }

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
                <Paper> 
                    {/* <Button onClick={this.handleClickGetUsers}>Cargar userss</Button>                   */}
                    
                    <TableUser></TableUser>
                        
                    {/* {this.props.loading ? <h1>Cargando...</h1> : null}       */}
                                                          
                </Paper>
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