function SaludoPersonalizado(props){
    return (
        <div>
            <h1>Hola, {props.name}! Bienvenido de nuevo.</h1>
            <h2>Tengo {props.age} años.</h2>
        </div>
    )
}

export default SaludoPersonalizado;