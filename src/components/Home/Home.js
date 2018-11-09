import React, { Component } from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';

import './Home.scss';
import UsersMenu from './UsersComponents/UsersMenu';
import DependantsMenu from './Dependants/DependantsMenu';


class Home extends Component{
    render() {
        return (
            <div className="home-container">
                <AppBar position="static" color="success">
                    
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            RED
                        </Typography>    
                        <UsersMenu></UsersMenu>
                        <DependantsMenu></DependantsMenu>
                    </Toolbar>
                    
                </AppBar>        
                        
            </div>
        )
    }
}


export default Home;
