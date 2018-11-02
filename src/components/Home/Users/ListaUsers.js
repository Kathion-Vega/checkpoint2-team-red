import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,  Typography, MenuItem, Table} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions/UsersActions';
// import UserTable from './UserTable/UserTable';

class ListaUsers extends Component{
    handleClickGetUsers = () => {
        this.props.fetchUsers();
    }
    render () {
        return (
            <div>
                <div className="ListaUsuarios">
                    <Button>
                        <Typography variant="h6" color="inherit"><Link to = "/UsersMenu/ListaUsers">
                            Lista de Usuarios</Link> 
                        </Typography>   
                    </Button>                       
                </div>
                                  
                {this.props.loading ? <h1>Cargando...</h1> : null}    
                        
                    <div>
                        <Table>NO entiendo porque esto aparece en este espacio y no en el link de UserTable?????
                            
                        </Table>
                    </div>
                
            </div>
        )
    }    
}

const mapDispatchToProps = () => {
    return {
        fetchUsers
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(ListaUsers);