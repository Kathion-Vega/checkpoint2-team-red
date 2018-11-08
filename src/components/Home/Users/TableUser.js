if (this.props.users.users.length){
    usersList = this.props.users.users.map(user => {
        return (
            <tr key ={user._id}>
                <td>{user.nombre}</td>
                <td>{user.apellidos.paterno}</td>
                <td>{user.apellidos.materno}</td>
                <td>{user.edad}</td>
                <td style={flex}></td>
            </tr>
        )
    })
} else {
    return (
        messageError;
    )
}