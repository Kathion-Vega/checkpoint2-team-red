import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, IconButton, Button, TextField, AppBar, Toolbar, Typography, Paper } from '@material-ui/core/';
import { connect } from 'react-redux';
import { loadingUser,addOnlyUser, findOnlyUser, editOnlyUser, deleteOnlyUser } from './../../../../../state/actions/UsersActions/UserOnlyActions';
import { fetchUsers } from './../../../../../state/actions/UsersActions/UsersActions';
import NavBar from '../../../../../NavBar';




class AddUser extends Component {
    render () {
        return (
            <div className="">
                <AppBar position="static" color="success">
                    <NavBar />
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
   
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Agregar Usuario
                        </Typography>
                    </Toolbar>
                    
                </AppBar>
                <Paper>
                    <div>    
                        <form className="container" noValidate autoComplete="off">
                            <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="ID"
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            /> 

                            <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Nombre"
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            />

                            <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Apellido Paterno"
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            /> 

                            <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Apellido Materno"
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            />

                            <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Edad"
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            />
                        </form>
                        <IconButton>
                            <Icon>
                                add
                            </Icon>
                        </IconButton>
                    </div> 
                </Paper>
            </div>        
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers,
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
      
    }
}

export default connect(mapDispatchToProps,mapStateToProps) (AddUser);