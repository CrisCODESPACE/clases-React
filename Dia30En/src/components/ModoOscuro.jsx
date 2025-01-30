import { useState, useEffect } from "react";

const ModoOscuro = () => {
    //js
    //-variables o useState
    //-peticiones a una API
    //-funciones manejadoras
    const [oscuro, setOscuro] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = oscuro ? "#333" : "#fff";
        document.body.style.color = oscuro ? "#fff" : "#333";

        return () => {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#333";
        }
    }, [oscuro])

    return (
        // html
        <div>
            <h2>Modo {oscuro ? "oscuro" : "claro"}</h2>
            <button onClick={() => setOscuro(!oscuro)}>Cambiar modo</button>
        </div>
    )
}

export default ModoOscuro