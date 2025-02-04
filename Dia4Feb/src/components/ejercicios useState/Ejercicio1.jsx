// 1 - Crea un contador que permita aumentar, disminuir o resetear el valor.

import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handlerDecremento = () => {
        setCount((count) => count - 1);
    }

    return (
        <>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}>sumar 1</button>
        <button onClick={handlerDecremento}>Restar 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Counter