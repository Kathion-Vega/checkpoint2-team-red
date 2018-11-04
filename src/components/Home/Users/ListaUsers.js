import React, { Component } from 'react';
import  { Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions/UsersActions';
import UserTable from './UserTable/UserTable';
import  { Link }  from 'react-router-dom';

class ListaUsers extends Component{

    handleClickGetUsers = () => {
        this.props.fetchUsers();
    }

    render () {
        return (
            <div className="lista_conteiner">
                
                <Button onClick={this.handleClickGetUsers}>Cargar usuarios</Button>                  
                 <UserTable></UserTable>   
                <div>
                   
                    <Link to="/UsersMenu/ListaUsers" key={1.1} className="link">Lista de Usuarios</Link>
                </div>
                {this.props.loading ? <h1>Cargando...</h1> : null}
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