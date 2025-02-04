//3 - Mostrar u ocultar un texto cuando el usuario haga clic en un botón.
import { useState } from "react"

const Ejercicio3 = () => {
    // const [visible, setVisible] = useState(true);
    // const [mensaje, setMensaje] = useState("hola");

    // const cambiarVisible = () => {
    //     setVisible((valorActualVisible) => {console.log(valorActualVisible);
    //         setMensaje(!valorActualVisible ? "hola" : "")
    //         console.log(!valorActualVisible);

    //         return !valorActualVisible;
             
    //     })
    // }

    const [visible, setVisible] = useState(true);

    return (
        <div>
            {/* <h1>{mensaje}</h1>
            <button onClick={cambiarVisible}>{visible ? "ocultar" : "mostrar"}</button> */}
            <button onClick={() => setVisible(!visible)}>{visible ? "ocultar" : "mostrar"}</button>
            {(visible && <p>Hola, soy visible</p>) || (!visible && <p>Hola, yo deberia ser invisible</p>) }
        </div>
    )
}

export default Ejercicio3