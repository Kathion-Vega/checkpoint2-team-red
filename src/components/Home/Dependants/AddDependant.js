import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, IconButton, Button, TextField, AppBar, Toolbar, Typography, Paper } from '@material-ui/core/';
import { connect } from 'react-redux';
import { addOnlyDependant  } from './../../../state/actions/Dependants/DependantsActions/DependantOnlyActions';

import NavBar from '../../../NavBar';
import './AddDependant.scss';



class AddDependant extends Component {
    render () {
        return (
            <div className="container">
                <AppBar position="static" color="success">
                    <NavBar />
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
   
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Agregar Dependiente
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
                            defaultValue="Nombre Completo"
                            className="textField"
                            margin="normal"
                            variant="outlined"
                            /> 

                            <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Dependencia"
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

                            <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Usuario"
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

        addOnlyDependant,

    }    
}


const mapStateToProps = (state) => {
    return {
        dependants: state.dependants,
        dependant: state.dependant
    }
}

export default connect(mapDispatchToProps,mapStateToProps) (AddDependant);