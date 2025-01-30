import { useState, useEffect } from "react";

const ContadorTeclado = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if(e.code === "Numpad9") {
                setContador((cifra) => cifra + 1)
            }
        }

        window.addEventListener("keydown", handleKeyPress)

        return () => {
            window.removeEventListener("keydown", handleKeyPress); //limpieza evento
        }
    }, [])

    return (
        <div>
            <h2>Presiona la barra espaciadora</h2>
            <p>Contador: {contador}</p>
        </div>
    )
}

export default ContadorTeclado;