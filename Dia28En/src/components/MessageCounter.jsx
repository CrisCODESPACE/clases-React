// El componente padre tendra un mensaje siempre visible y el contador
// El componente hijo tendra un botón. Este botón incrementará el contador y actualizará el mensaje en el componente padre (usa props para pasar el valor del contador al padre).

const MessageCounter = ({juan, funcion}) => {
    return (
        <>
        <button onClick={funcion}>Incrementar contador {juan}</button>
        </>
    )
}

export default MessageCounter;