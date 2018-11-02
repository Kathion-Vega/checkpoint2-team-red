export const ADD_DEPENDANT = "ADD_DEPENDANT";
export const EDIT_DEPENDANT = "EDIT_DEPENDANT";
export const DELETE_DEPENDANT = "DELETE_DEPENDANT";
export const USER_DEPENDANT = "USER_DEPENDANT";

const AddDependant = (id) => ({
    type: ADD_DEPENDANT,
    id,
    nombre_completo,
    dependencia,
    edad,
    usuario

});

const EditDependant = (id) => ({
    type: EDIT_DEPENDANT,
    id,
    nombre_completo,
    dependencia,
    edad,
    usuario
});

const DeleteDependant = (id) => ({
    type: DELETE_DEPENDANT,
    id,
    nombre_completo,
    dependencia,
    edad,
    usuario
});

const UserDependant = (id) => ({
    type: USER_DEPENDANT,
    id,
    dependencia,
    usuario
});

export { AddDependant as addDependant, EditDependant as editDependant, DeleteDependant as deleteDependant,  UserDependant as  userDependant };