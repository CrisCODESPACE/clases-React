const ContadorComponent = (props) => {
    return (
        <>
        <h1>Valor del contador: {props.value}</h1>
        <button onClick={props.incremento}>Incrementar</button>
        <button onClick={props.decremento}>Decrementar</button>
        </>
    )
}

export default ContadorComponent