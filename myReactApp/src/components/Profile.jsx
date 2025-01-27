function Profile({nombre, nombreUser, email, edad}){
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Nombre de usuario: {nombreUser}</p>
            <p>Email: {email}</p>
            <p>Edad: {edad}</p>
        </div>
    )
}

export default Profile;