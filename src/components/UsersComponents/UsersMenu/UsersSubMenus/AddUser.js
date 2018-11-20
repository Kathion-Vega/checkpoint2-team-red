import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  IconButton, Icon, Snackbar, Button, TextField, AppBar, Toolbar, Typography, Paper } from '@material-ui/core/';
import { connect } from 'react-redux';
import { addOnlyUser, editOnlyUser } from './../../../../../state/actions/UsersActions/UserOnlyActions';
// import { fetchUsers } from './../../../../../state/actions/UsersActions/UsersActions';
import NavBar from '../../../NavBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    close: {
      padding: theme.spacing.unit / 2,
    },
  });

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            userInput: {
                nombre: "",
                apellidos: {
                    paterno: "",
                    materno: ""
                },
                edad: ""
            }
        };

        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleAddOnlyUser = this.handleAddOnlyUser.bind(this);

    }


    handleUserInputChange = (e) => {
        this.setState({userInput: e.target.value});
        this.setState({ userInput:{ } });
    }

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

      
    handleAddOnlyUser = (event) => {
        this.props.addOnlyUser(this.state.userInput);
        this.setState({ userInput:{ } });
        alert('Registro de Nuevo Usuario '+ this.state);
        event.preventDefault();
        this.userInput(this.props.users.map('http://checkpoint2-grupo3.herokuapp.com/api/usuarios/red/usuarios_id'));
    }



    render () {
        const { classes } = this.props;
        
        return (
            
            <div className="">
                <AppBar position="static" color="secondary">
                    <NavBar />
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
   
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Agregar Usuario
                        </Typography>
                        <div>
                            
                            <Button>Agregar Otro Usuario</Button>
                            
                        </div>
                    </Toolbar>
                    
                </AppBar>
                <Paper>
                    <div>    
                        <form onChange={this.handleUserInputChange} className="container" noValidate autoComplete="off">
                            
                            <TextField
                            required
                            id="outlined-required"
                            label="Nombre"
                            value={this.state.userInput.nombre}
                            onChange={this.handleUserInputChange}
                            onReset={this.handleReset}
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            />
                        
                            
                          
                            

                            <TextField
                            required
                            id="outlined-required"
                            label="Apellido Paterno"
                            value={this.state.userInput.paterno}
                            onChange={this.handleUserInputChange}
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            /> 

                            <TextField
                            required
                            id="outlined-required"
                            label="Apellido Materno"
                            value={this.state.userInput.materno}
                            onChange={this.handleUserInputChange}
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            />

                            <TextField
                            required
                            id="outlined-required"
                            label="Edad"
                            value={this.state.userInput.edad}
                            onChange={this.handleUserInputChange}
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            />
                            
                        </form>
                    </div>
                    <div className="">     
                        <IconButton onClick={this.handleClick} type="submit"  >
                            <Icon >
                                add
                            </Icon>
                        </IconButton>
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">¿Desea agregar este usuario?</span>}
                        action={[
                            <Button key="undo" color="secondary" size="small" onClick={(e)=>this.handleAddOnlyUser(e)}
                            type="submit" onChange={(e)=>this.handleUserInputChange(e)}>
                                AGREGAR
                            </Button>,
                            <Button key="revise" color="secondary" size="small" onClick={this.handleClose}>
                                Revisar y editar
                            </Button>,
                            
                            <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                            >
                                <Icon>close</Icon>
                            </IconButton>,
                        ]}
                        />
                    </div>
                    
                </Paper>
            </div>        
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOnlyUser,
        editOnlyUser,
      
    }    
}


const mapStateToProps = (state) => {
    return {
        users: state.users,
      
    }
}

AddUser.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (connect(mapDispatchToProps,mapStateToProps) (AddUser));