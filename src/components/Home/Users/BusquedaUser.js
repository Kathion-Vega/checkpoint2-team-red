import React, { Component } from 'react';
import  { Link }  from 'react-router-dom';
import  {AppBar, Toolbar, InputBase, Typography, IconButton, Icon   } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../state/actions/Users/UsersActions/UsersActions';
import NavBar from '../../../NavBar';


class BusquedaUser extends Component {
    state = {
        todoInput: ""
    }

    handleInputChange = (e) => {
        this.setState({ todoInput: e.target.value });
    }

    
    handleAddTodo = () => {
        this.props.addTodo(this.state.userInput);
        this.setState({ todoInput: "" });
    }


    render() {
        return (
            <div className='busqueda_user'>
                <NavBar />
                    <Link to="/UsersMenu" key={1} className="link">Menu de Usuarios</Link>    
                    <Link to="/DependantsMenu" key={2} className="link">Menu de Dependientes</Link>
                <AppBar position="'relative'">
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Busqueda de Usuarios
                        </Typography>
                        <div className=''>
                            <div className=''>
                                <IconButton onClick={this.handleAddTodo}>
                                    <Icon>
                                        add
                                    </Icon>
                                </IconButton>
                            </div>
                            <InputBase value={this.state.userInput} onChange={(e)=>this.handleInputChange(e)} placeholder="Search…"/>
                        </div>
                    </Toolbar>    
                </AppBar>    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers,
    }    
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapDispatchToProps,mapStateToProps) (BusquedaUser);