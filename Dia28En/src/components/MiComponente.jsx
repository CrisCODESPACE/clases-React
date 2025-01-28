import { useState } from "react";

const MiComponente = () => {
    //const [estado, setEstado] = useState(valorInicial);

    // cualquier JS necesario (creación de variables, bucles, peticiones...)
    const componentText = "Este es un componente REACT";

    return(
        //html 
        <div>
            <h1>{componentText}</h1>
        </div>
    )
}

export default MiComponente