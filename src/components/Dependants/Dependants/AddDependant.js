import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, IconButton, Button, TextField, AppBar, Toolbar, Typography, Paper } from '@material-ui/core/';
import { connect } from 'react-redux';
import { addOnlyDependant  } from './../../../state/actions/DependantsActions/DependantOnlyActions';

import NavBar from '../../NavBar';
import './AddDependant.scss';

class AddDependant extends Component {    
    state ={
        nombre_completo: '',
        dependencia: '',
        edad: '',
        id_usuario: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    handleReset = () => {
        this.setState({
            nombre_completo: '',
            dependencia: '',
            edad: '',
            id_usuario: ''
        });
    };
    

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
                        <form onSubmit={ this.handleSubmit} className="container" noValidate autoComplete="off">
                            <div>    
                                <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Nombre Completo"
                                className="textField"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                onChange={ this.handleInputChange }
                                value={ this.state.nombre_completo }
                                />
                            </div> 
                            <div> 
                                <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Dependencia"
                                className="textField"
                                margin="normal"
                                variant="outlined"
                                onChange={ this.handleInputChange }
                                value={ this.state.dependencia }
                                />
                            </div>
                            <div>   
                                <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Edad"
                                className="textField"
                                margin="normal"
                                variant="outlined"
                                onChange={ this.handleInputChange }
                                value={ this.state.edad }
                                /> 
                            </div>
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Usuario"
                                className="textField"
                                margin="normal"
                                variant="outlined"
                                onChange={ this.handleInputChange }
                                value={ this.state.id_usuario}

                                />
                            </div>
                            <div>
                                <IconButton type="submit" className="btn btn-primary">
                                    <Icon>
                                        add
                                    </Icon>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton type="button" className="btn btn-warning"onClick={ this.handleReset}>
                                    <Icon>
                                        add
                                    </Icon>
                                </IconButton>
                            </div>
                        </form>
                        
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

export default connect(mapDispatchToProps,mapStateToProps)(AddDependant);