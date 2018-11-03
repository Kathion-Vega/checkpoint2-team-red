import React, { Component } from 'react';
import  { Button, Table } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/DependantsActions/DependantsActions';
import DependantsTable from './../DependantsTable';

class ListaDependants extends Component{
    handleClickGetUsers = () => {
        this.props.fetchUsers();
    }
    render () {
        return (
            <div>
                <Button onClick={this.handleClickGetUsers}>Cargar usuarios</Button>
                <Table><DependantsTable></DependantsTable></Table>                  
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

export default connect(mapDispatchToProps, mapStateToProps)(ListaDependants);