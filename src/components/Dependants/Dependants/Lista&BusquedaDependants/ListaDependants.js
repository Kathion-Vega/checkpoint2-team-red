import React, { Component } from 'react';
import  { Button, AppBar, Toolbar, Typography, Paper, Table } from '@material-ui/core';
// import { connect } from 'react-redux';
// import { fetchDependants } from './../../../../state/actions/Dependants/DependantsActions/DependantsActions';
import DependantsTable from './DependantsTable';
import  { Link }  from 'react-router-dom';
import NavBar from '../../../NavBar';

class ListaDependants extends Component{
    
    
    render () {
        return (
            <div>
                <AppBar  position="static" color="success">
                    <NavBar />
                    <Link to="/Home" className="link"><Button>Home</Button></Link>    
   
                    <Toolbar>
                        <Typography className='title' variant="h6" color="inherit" noWrap>
                            RED - Lista de Dependientes
                        </Typography>
                    </Toolbar> 
                </AppBar>
                <Paper>
                    <Button>Carga dependientes</Button>
                    <Table><DependantsTable></DependantsTable></Table>
                </Paper>                  
                
                
            </div>
        )
    }    
}



export default ListaDependants;