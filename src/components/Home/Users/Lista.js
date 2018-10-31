import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserTable from './UserTable';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions';

class Lista extends Component{
    handleClickGetUsers = () => {
        this.props.fetchUsers();
    }
    render () {
        return (
            <div>
                <Button onClick={this.handleClickUsers}>Cargar usuarios</Button>
                <UserTable></UserTable>
                {this.props.loading ? <h1>Cargando...</h1> : null}
                <Link to="/Home">Menu Principal</Link>
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

export default connect(mapDispatchToProps, mapStateToProps)(Lista);