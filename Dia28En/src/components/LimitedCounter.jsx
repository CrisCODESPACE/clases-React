// creamos un componente que tenga un contador
// no permita que el numero sea menor que 0 o mayor que 10
// incluya un boton para incrementar y decremetar pero dentro de los límites

import { useState } from "react";

const LimitedCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if(count < 10) setCount(count + 1);
    }

    const decrement = () => {
        if(count > 0) setCount(count - 1);
    }

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decremento</button>
        </div>
    )
}

export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;



// export default LimitedCounter;