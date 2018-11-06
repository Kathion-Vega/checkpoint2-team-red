import React, { Component } from 'react';
import { Table } from '@material-ui/core/Table';
import { connect } from 'react-redux';

class UsersTable extends Component {
    render() {
        let user = this.props.users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nombre}</td>
                    <td>{user.paterno}</td>
                    <td>{user.materno}</td>
                    <td>{user.edad}</td>
                </tr>
            )
        })
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                   {user}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
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
//               {this.props.users.map(user => {
//                 return (
//                   <TableRow className="row" key={user.id}>
//                     <TableCell component="th" scope="row">{user.id}</TableCell>
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