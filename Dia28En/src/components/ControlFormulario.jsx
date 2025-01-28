// componente que tenga un campo de entrada texto (input)
// Ese componente guarde el valor en un state
// Muestre el valor del campo en tiempo real debajo del input
// El evento debe ser onChange()

import { useState } from "react";

const ControlFormulario = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <input type="text" placeholder="Escribe algo aqui..." value={inputValue} onChange={(evento) => setInputValue(evento.target.value)}/>
            <p>Valor actual: {inputValue}</p>
        </div>
    )
}

export default ControlFormulario;