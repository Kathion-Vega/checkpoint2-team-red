import React, { Component } from 'react';
import  { Button, Table } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions/UsersActions';
import UserTable from './UserTable/UserTable';

class ListaUsers extends Component{
    handleClickGetUsers = () => {
        this.props.fetchUsers();
    }
    render () {
        return (
            <div>
                <Button onClick={this.handleClickGetUsers}>Cargar usuarios</Button>
                <Table><UserTable></UserTable></Table>                  
                {this.props.loading ? <h1>Cargando...</h1> : null}    
                
            </div>
        )
    }    
}

const mapDispatchToProps = () => {
    return {
        fetchUsers,
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(ListaUsers);