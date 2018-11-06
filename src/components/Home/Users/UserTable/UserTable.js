import React, { Component } from 'react';
import { Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core/';
import { connect } from 'react-redux';


class UsersTable extends Component {
    render() {
        return (
            <Table dark>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Apellido Paterno</TableCell>
                        <TableCell>Apellido Materno</TableCell>
                        <TableCell>Edad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.users.map(user => {
                        return (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.nombre}</TableCell>
                                <TableCell>{user.apellidos.paterno}</TableCell>
                                <TableCell>{user.apellidos.materno}</TableCell>
                                <TableCell>{user.edad}</TableCell>
                            </TableRow>
                        )
                    }).forEach()}
                </TableBody>
            </Table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        user: state.user
    }
}




export default connect(mapStateToProps)(UsersTable);








// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {Table, TableBody, TableCell, TableHead, TableRow, Paper}  from '@material-ui/core';

// class UserTable  extends Component{ 
//   render() {
//     return (
//       <div className="usertable">
//         <Paper className="root">
//           <Table className="table">
//             <TableHead>  
//               <TableRow>
//                 <TableCell>id</TableCell>
//                 <TableCell>Nombre</TableCell>
//                 <TableCell>Apellido Paterno</TableCell>
//                 <TableCell>Apellido Materno</TableCell>
//                 <TableCell>Edad</TableCell>    
//               </TableRow>    
//             </TableHead>
//             <TableBody>
//               {TableCellis.props.users.map(user => {
//                 return (
//                   <TableRow className="row" key={user.id}>
//                     <TableCell component="TableCell" scope="row">{user.id}</TableCell>
//                     <TableCell>{user.nombre}</TableCell>
//                     <TableCell>{user.paterno}</TableCell>
//                     <TableCell>{user.materno}</TableCell>
//                     <TableCell>{user.edad}</TableCell>
//                   </TableRow>
//                 )
//               })}
//             { }
//           </TableBody>
//         </Table>
//       </Paper>
//     </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }


// export default connect(mapStateToProps)(UserTable);