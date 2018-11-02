export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

const AddUser = (id) => ({
    type: ADD_USER,
    id,
    nombre,
    apellidos: {
        paterno,
        materno  
    },
    edad
});

const EditUser = (id) => ({
    type: EDIT_USER,
    id,
    nombre,
    apellidos: {
        paterno,
        materno  
    },
    edad
});

const DeleteUser = (id) => ({
    type: DELETE_USER,
    id,
    nombre,
    apellidos: {
        paterno,
        materno  
    },
    edad
});


export { AddUser as adduser, EditUser as editUser, DeleteUser as deleteUser };