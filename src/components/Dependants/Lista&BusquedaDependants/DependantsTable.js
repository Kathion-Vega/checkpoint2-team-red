import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/';
// import { connect } from 'react-redux';

class DependantsTable extends Component{
    render() {
        return (
            <Table>
               <TableHead>
                   <TableRow>
                       <TableCell>Nombre Completo</TableCell>
                       <TableCell>Deendencia</TableCell>
                       <TableCell>Edad</TableCell>
                       <TableCell>Id de Usuario</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        )
    }
}

export default DependantsTable;
