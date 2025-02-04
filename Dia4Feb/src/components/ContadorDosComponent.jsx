import { useState } from "react"

const ContadorDosComponent = ({value, incremento, decremento}) => {
    // const [cuenta, setCuenta ] = useState(0);

    // const {value, incremento, decremento} = props;
    return (
        <>
        <h1>Contador independiente: {value}</h1>
        <button onClick={incremento}>Incrementar</button>
        <button onClick={decremento}>Decrementar</button>
        </>
    )
}

export default ContadorDosComponent