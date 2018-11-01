import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,  Typography,  Toolbar, AppBar} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions/UsersActions';

class ListaUsers extends Component{
    handleClickGetUsers = () => {
        this.props.fetchUsers();
    }
    render () {
        return (
            <div className="ListaUsuarios">
                <AppBar position="static" color="success">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            RED
                        </Typography>
                        <h6>Lista de Usuarios</h6>    
                        <Button><Link to="/Home">Menu Principal</Link></Button>
                        
                    </Toolbar> 
                </AppBar>        
           
                );
            }
        }
                
        {this.props.loading ? <h1>Cargando...</h1> : null}
                
                {/* <Button onClick={this.handleClickUsers}>Cargar usuarios</Button>
                <Table></Table>
                {this.props.loading ? <h1>Cargando...</h1> : null}
                <Link to="/Home">Menu Principal</Link> */}
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