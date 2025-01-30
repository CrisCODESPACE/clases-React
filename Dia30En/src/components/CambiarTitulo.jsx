import { useState, useEffect } from "react"

const CambiarTitulo = () => {
    const [texto, setTexto] = useState("");

    useEffect(() => {
        document.title = texto || "React App"
    }, [texto])

    return (
        <div>
            <h2>Escribe aquí:</h2>
            <input type="text" value={texto} onChange={(evento)=> setTexto(evento.target.value)} />
        </div>
    )
}

export default CambiarTitulo