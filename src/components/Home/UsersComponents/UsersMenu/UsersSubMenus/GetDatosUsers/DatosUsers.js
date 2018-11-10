import React, { Component } from 'react';
import {  Table, TableBody, TableCell, TableHead, TableRow, } from '@material-ui/core/';
import { connect } from 'react-redux';

class DatosUsers extends Component {
    render() {
        return (
            <div className="">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido Paterno</TableCell>
                            <TableCell>Apellido Materno</TableCell>
                            <TableCell>Edad</TableCell>                    
                        </TableRow>
                    </TableHead>
                    <TableBody>                      
                       {this.props.users.map(user => {
                            return (
                                <tr key ={user._id}>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellidos.paterno}</td>
                                    <td>{user.apellidos.materno}</td>
                                    <td>{user.edad}</td>
                                </tr>
                                )
                            })

                        }
                    </TableBody>
                </Table> 
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect (mapStateToProps)(DatosUsers);