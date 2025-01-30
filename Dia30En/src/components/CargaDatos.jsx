import { useState, useEffect } from "react";

const CargaDatos = () => {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarPublicaciones = async () => {
            try {
                setError(null); // reiniciamos el error antes de hacer la petición

                await new Promise((resolve) => setTimeout(resolve, 2000)); // simula la carga

                const response = await fetch("https://jsonplaceholder.typicode.com/posts")

                if(!response.ok) {
                    throw new Error("Error al cargar los datos", response.status)
                }

                const data = await response.json();
                setDatos(data);
            } catch (error) {
                setError(error)
            } finally {
                setCargando(false);
            }
        };
        cargarPublicaciones();
    }, [])



    return (
        <div>
            <h2>Publicaciones</h2>
            {cargando ? <p>Cargando...</p> : error ? (<p>Error {error}</p>) : (
                <ul>
                    {datos.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) }
        </div>
    )
}

export default CargaDatos
