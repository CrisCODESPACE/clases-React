import { useState } from "react";
import '../styles/Contador.css'

const Contador = () => {
    // inicializar el estado con un valor inicial de 0
    const [contador, setContador] = useState(0);

    return (
        <>
        <h1>Contador: {contador}</h1>
        <button onClick={()=> setContador(contador + 1)}>Incremento</button>
        <button onClick={() => setContador(contador -1)}>Decremento</button>
        <button onClick={() => setContador(0)}>Reset</button>
        </>
    )
}

export default Contador;

