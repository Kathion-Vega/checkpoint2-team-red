import React, { Component } from 'react';
import  { Button, AppBar, Toolbar, Typography, Paper} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions/UsersActions';
import UserTable from './UserTable/UserTable';
import  { Link }  from 'react-router-dom';
import NavBar from '../../../NavBar';

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
            
            
                    <div className="lista_conteiner">
                
                        <Button onClick={this.handleClickGetUsers}>Cargar usuarios</Button>                  
                        <UserTable></UserTable>   
        
                        {this.props.loading ? <h1>Cargando...</h1> : null}
                        
                        
                    </div>
                </Paper>
            </div>
        )
    }    
}

const mapDispatchToProps = () => {
    return {
        fetchUsers,
    };
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(ListaUsers);