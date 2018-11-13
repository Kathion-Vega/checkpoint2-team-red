import React from 'react';

import { connect } from 'react-redux';
import { fetchUsers } from '../../../../../../state/actions/UsersActions/UsersActions';

const DatosUsers = ({ users, onDelete }) => {
    if(!users.lenght) {
        return (
            <div>
                No posts
            </div>
        )
    } 
    return (
        <div>            
            {users.map(user => {
                return (
                    <tr key ={user._id} onFetch={this.fetchUsers}>
                        <td>{user.nombre}</td>
                        <td>{user.apellidos.paterno}</td>
                        <td>{user.apellidos.materno}</td>
                        <td>{user.edad}</td>
                    </tr>
                    )
                }                                                )                        

            }
                   
        </div>
    );
    
} 

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onFetch: _id => {
        dispatch(fetchUsers(_id));
      }
    };
  };

export default connect (mapStateToProps, mapDispatchToProps)(DatosUsers);